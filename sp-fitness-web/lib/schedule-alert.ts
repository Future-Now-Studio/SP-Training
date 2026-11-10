import "server-only";
import nodemailer from "nodemailer";
import type { ScheduleError } from "./courses";
import { kv } from "./kv";

const ALERT_KEY = "kursplan-alert";
const MIN_INTERVAL_MS = 60 * 60 * 1000;

const SMTP_HOST = process.env.SMTP_HOST || "w01fbd9c.kasserver.com";
const SMTP_USER = "noreply@sp-fitness.de";
const ALERT_TO = "timo@future-now.studio";
const PAGE_URL = "https://www.sp-fitness.de/kurse";

/**
 * Reserviert den Versand für die nächste Stunde – über alle Instanzen hinweg.
 *
 * Der Zeitpunkt der letzten Mail liegt im geteilten Speicher. Geschrieben
 * wird nur mit `onlyIfMatch` auf den eben gelesenen Stand (bzw. `onlyIfNew`
 * beim ersten Mal). Melden mehrere Instanzen gleichzeitig einen Fehler,
 * gewinnt genau eine diesen Schreibvorgang; alle anderen sehen
 * `modified: false` und schicken nichts.
 */
async function claimAlertSlot(now: Date): Promise<boolean> {
  const current = await kv.getJSON<{ sentAt: string }>(ALERT_KEY);
  if (current && now.getTime() - Date.parse(current.value.sentAt) < MIN_INTERVAL_MS) return false;
  return kv.setJSON(
    ALERT_KEY,
    { sentAt: now.toISOString() },
    current?.etag ? { onlyIfMatch: current.etag } : { onlyIfNew: true }
  );
}

function formatBerlin(date: Date) {
  return new Intl.DateTimeFormat("de-DE", {
    timeZone: "Europe/Berlin",
    dateStyle: "full",
    timeStyle: "medium",
  }).format(date);
}

/**
 * Meldet per Mail, dass der Kursplan nicht geladen werden konnte –
 * höchstens einmal pro Stunde. Wirft nie; Fehler werden nur geloggt.
 *
 * @param staleSince Zeitpunkt des angezeigten letzten Stands, sonst null
 *                   (dann sehen Besucher den Hinweis „nicht verfügbar“).
 */
export async function notifyScheduleFailure(error: ScheduleError, staleSince: string | null) {
  try {
    const pass = process.env.SMTP_PASS;
    if (!pass) {
      console.error("[kursplan-alarm] SMTP_PASS ist nicht gesetzt – keine Benachrichtigung verschickt");
      return;
    }

    const now = new Date();
    if (!(await claimAlertSlot(now))) {
      console.info("[kursplan-alarm] In der letzten Stunde schon benachrichtigt – übersprungen");
      return;
    }

    const shown = staleSince
      ? `Letzter bekannter Kursplan (Stand ${formatBerlin(new Date(staleSince))})`
      : "Hinweis „Der Kursplan ist gerade nicht verfügbar“ mit Kontaktmöglichkeiten";

    const text = [
      "Der Kursplan auf sp-fitness.de konnte nicht aus der Datenbank geladen werden.",
      "",
      `Zeitpunkt:   ${formatBerlin(now)} (${now.toISOString()})`,
      `Fehlerart:   ${error.kind}`,
      `Meldung:     ${error.message}`,
      `HTTP-Status: ${error.status ?? "–"}`,
      `Abfrage-URL: ${error.url}`,
      `Seite:       ${PAGE_URL}`,
      `Angezeigt:   ${shown}`,
      "",
      "Weitere Mails zu diesem Problem frühestens in einer Stunde.",
    ].join("\n");

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: 465,
      secure: true,
      auth: { user: SMTP_USER, pass },
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 15_000,
    });
    await transporter.sendMail({
      from: { name: "SP Fitness Website", address: SMTP_USER },
      to: ALERT_TO,
      subject: "⚠️ Kursplan auf sp-fitness.de nicht erreichbar",
      text,
    });
    console.info(`[kursplan-alarm] Benachrichtigung an ${ALERT_TO} verschickt`);
  } catch (e) {
    console.error("[kursplan-alarm] Benachrichtigung fehlgeschlagen:", e);
  }
}
