import "server-only";
import { randomUUID } from "crypto";
import { promises as fs } from "fs";
import os from "os";
import path from "path";
import { getStore } from "@netlify/blobs";

/**
 * Kleiner Schlüssel-Wert-Speicher, den alle Server-Instanzen teilen.
 *
 * Auf Netlify sind das Netlify Blobs: Jede Funktion (auch parallele
 * Instanzen) sieht denselben Store, und bedingte Schreibzugriffe
 * (`onlyIfNew` / `onlyIfMatch`) sind atomar. Lokal – ohne Netlify-Umgebung –
 * landen die Werte als Dateien im Temp-Verzeichnis.
 */

export interface KvEntry<T> {
  value: T;
  etag?: string;
}

export interface WriteCondition {
  /** Nur schreiben, wenn der Schlüssel noch nicht existiert. */
  onlyIfNew?: boolean;
  /** Nur schreiben, wenn der Eintrag seit dem Lesen unverändert ist. */
  onlyIfMatch?: string;
}

interface Kv {
  getJSON<T>(key: string): Promise<KvEntry<T> | null>;
  /** Gibt `false` zurück, wenn die Bedingung nicht erfüllt war. */
  setJSON(key: string, value: unknown, condition?: WriteCondition): Promise<boolean>;
}

const STORE_NAME = "sp-fitness-web";
const TIMEOUT_MS = 3000;

function withTimeout<T>(promise: Promise<T>, label: string): Promise<T> {
  return Promise.race([
    promise,
    new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error(`${label}: Zeitüberschreitung nach ${TIMEOUT_MS} ms`)), TIMEOUT_MS)
    ),
  ]);
}

const blobsKv: Kv = {
  async getJSON<T>(key: string) {
    const store = getStore({ name: STORE_NAME, consistency: "strong" });
    const entry = await store.getWithMetadata(key, { type: "json" });
    return entry ? { value: entry.data as T, etag: entry.etag } : null;
  },
  async setJSON(key, value, condition) {
    const store = getStore({ name: STORE_NAME, consistency: "strong" });
    const options = condition?.onlyIfMatch
      ? { onlyIfMatch: condition.onlyIfMatch }
      : condition?.onlyIfNew
        ? { onlyIfNew: true }
        : {};
    const result = await store.setJSON(key, value, options);
    return result.modified;
  },
};

// Nur für die lokale Entwicklung: ein Prozess, daher reicht eine einfache
// Prüfung ohne echte Sperre.
const fileDir = path.join(os.tmpdir(), "sp-fitness-web-kv");
const filePath = (key: string) => path.join(fileDir, `${encodeURIComponent(key)}.json`);

const fileKv: Kv = {
  async getJSON<T>(key: string) {
    try {
      return JSON.parse(await fs.readFile(filePath(key), "utf8")) as KvEntry<T>;
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code === "ENOENT") return null;
      throw error;
    }
  },
  async setJSON(key, value, condition) {
    const current = await this.getJSON(key);
    if (condition?.onlyIfNew && current) return false;
    if (condition?.onlyIfMatch && current?.etag !== condition.onlyIfMatch) return false;
    await fs.mkdir(fileDir, { recursive: true });
    await fs.writeFile(filePath(key), JSON.stringify({ value, etag: randomUUID() }));
    return true;
  },
};

let useFileFallback = false;

async function run<R>(label: string, op: (kv: Kv) => Promise<R>): Promise<R> {
  if (!useFileFallback) {
    try {
      return await withTimeout(op(blobsKv), label);
    } catch (error) {
      if ((error as Error).name !== "MissingBlobsEnvironmentError") throw error;
      useFileFallback = true;
    }
  }
  return withTimeout(op(fileKv), label);
}

export const kv = {
  getJSON: <T>(key: string) => run(`kv.get(${key})`, (store) => store.getJSON<T>(key)),
  setJSON: (key: string, value: unknown, condition?: WriteCondition) =>
    run(`kv.set(${key})`, (store) => store.setJSON(key, value, condition)),
};
