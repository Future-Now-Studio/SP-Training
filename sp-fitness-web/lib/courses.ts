import "server-only";
import { kv } from "./kv";

/** Eine Zeile aus `public.courses`, so wie die REST-API sie liefert. */
interface CourseRow {
  id: string | number;
  weekday: number;
  start_time: string;
  end_time: string;
  name: string;
  trainer: string | null;
  color: string | null;
  starts_on: string | null;
}

export const COURSE_COLORS = ["blue", "purple", "orange", "green"] as const;
export type CourseColor = (typeof COURSE_COLORS)[number] | "default";

/** Aufbereiteter Kurs für das Raster. */
export interface Course {
  id: string;
  /** 0 = Montag … 6 = Sonntag */
  weekday: number;
  /** "HH:MM" */
  startTime: string;
  /** "HH:MM" */
  endTime: string;
  name: string;
  trainer: string | null;
  color: CourseColor;
  /** "YYYY-MM-DD" oder null */
  startsOn: string | null;
}

export type ScheduleErrorKind = "config" | "network" | "timeout" | "http" | "invalid" | "empty";

export interface ScheduleError {
  kind: ScheduleErrorKind;
  message: string;
  status?: number;
  url: string;
}

export type ScheduleResult =
  | { status: "fresh"; courses: Course[] }
  /** Abruf fehlgeschlagen, angezeigt wird der zuletzt erfolgreich geladene Plan. */
  | { status: "stale"; courses: Course[]; savedAt: string; error: ScheduleError }
  | { status: "unavailable"; error: ScheduleError };

const QUERY =
  "select=id,weekday,start_time,end_time,name,trainer,color,starts_on&active=eq.true&order=weekday.asc,start_time.asc";
const REVALIDATE_SECONDS = 300;
const TIMEOUT_MS = 5000;
const LAST_GOOD_KEY = "kursplan-last-good";

interface LastGood {
  courses: Course[];
  savedAt: string;
}

// Pro Server-Instanz: der zuletzt erfolgreich geladene Plan und was davon
// zuletzt in den geteilten Speicher geschrieben wurde.
let lastGood: LastGood | null = null;
let lastWrittenJson: string | null = null;

class ScheduleLoadError extends Error {
  constructor(
    readonly kind: ScheduleErrorKind,
    message: string,
    readonly status?: number
  ) {
    super(message);
  }
}

const TIME = /^([01]\d|2[0-3]):([0-5]\d)(:[0-5]\d)?$/;
const DATE = /^\d{4}-\d{2}-\d{2}$/;

function parseRow(row: unknown, index: number): Course {
  const invalid = (field: string) =>
    new ScheduleLoadError("invalid", `Zeile ${index}: Feld „${field}“ fehlt oder ist ungültig`);
  if (typeof row !== "object" || row === null) throw invalid("(Zeile)");
  const r = row as Partial<CourseRow>;

  if (typeof r.id !== "string" && typeof r.id !== "number") throw invalid("id");
  if (!Number.isInteger(r.weekday) || r.weekday! < 0 || r.weekday! > 6) throw invalid("weekday");
  if (typeof r.start_time !== "string" || !TIME.test(r.start_time)) throw invalid("start_time");
  if (typeof r.end_time !== "string" || !TIME.test(r.end_time)) throw invalid("end_time");
  const startTime = r.start_time.slice(0, 5);
  const endTime = r.end_time.slice(0, 5);
  if (endTime <= startTime) throw invalid("end_time (vor start_time)");
  if (typeof r.name !== "string" || r.name.trim() === "") throw invalid("name");
  if (r.trainer != null && typeof r.trainer !== "string") throw invalid("trainer");
  if (r.starts_on != null && (typeof r.starts_on !== "string" || !DATE.test(r.starts_on))) {
    throw invalid("starts_on");
  }
  if (r.color != null && typeof r.color !== "string") throw invalid("color");

  // Eine neue Farbe in der App soll nicht den ganzen Plan kippen.
  let color: CourseColor = "default";
  if (r.color && (COURSE_COLORS as readonly string[]).includes(r.color)) {
    color = r.color as CourseColor;
  } else if (r.color) {
    console.warn(`[kursplan] Unbekannte Farbe „${r.color}“ bei Kurs ${r.id} – Standardfarbe verwendet`);
  }

  return {
    id: String(r.id),
    weekday: r.weekday!,
    startTime,
    endTime,
    name: r.name.trim(),
    trainer: r.trainer?.trim() || null,
    color,
    startsOn: r.starts_on ?? null,
  };
}

async function fetchCourses(url: string, anonKey: string): Promise<Course[]> {
  let response: Response;
  try {
    response = await fetch(url, {
      headers: { apikey: anonKey, Authorization: `Bearer ${anonKey}` },
      next: { revalidate: REVALIDATE_SECONDS },
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
  } catch (error) {
    const err = error as Error & { cause?: { message?: string; code?: string } };
    if (err.name === "TimeoutError" || err.name === "AbortError") {
      throw new ScheduleLoadError("timeout", `Keine Antwort innerhalb von ${TIMEOUT_MS / 1000} Sekunden`);
    }
    const cause = err.cause?.code ?? err.cause?.message;
    throw new ScheduleLoadError("network", cause ? `${err.message} (${cause})` : err.message);
  }

  if (!response.ok) {
    const body = (await response.text().catch(() => "")).slice(0, 300);
    throw new ScheduleLoadError(
      "http",
      `HTTP ${response.status} ${response.statusText}${body ? `: ${body}` : ""}`,
      response.status
    );
  }

  let data: unknown;
  try {
    data = await response.json();
  } catch {
    throw new ScheduleLoadError("invalid", "Antwort ist kein gültiges JSON", response.status);
  }
  if (!Array.isArray(data)) throw new ScheduleLoadError("invalid", "Antwort ist keine Liste", response.status);
  if (data.length === 0) throw new ScheduleLoadError("empty", "Die Datenbank liefert keine aktiven Kurse", response.status);
  return data.map(parseRow);
}

async function rememberLastGood(courses: Course[]) {
  lastGood = { courses, savedAt: new Date().toISOString() };
  const json = JSON.stringify(courses);
  if (json === lastWrittenJson) return;
  try {
    await kv.setJSON(LAST_GOOD_KEY, lastGood);
    lastWrittenJson = json;
  } catch (error) {
    console.error("[kursplan] Letzten Stand nicht gespeichert:", error);
  }
}

async function recallLastGood(): Promise<LastGood | null> {
  if (lastGood) return lastGood;
  try {
    return (await kv.getJSON<LastGood>(LAST_GOOD_KEY))?.value ?? null;
  } catch (error) {
    console.error("[kursplan] Letzten Stand nicht gelesen:", error);
    return null;
  }
}

/** Lädt den Kursplan aus Supabase. Wirft nie – Fehler stecken im Ergebnis. */
export async function loadSchedule(): Promise<ScheduleResult> {
  const baseUrl = process.env.SUPABASE_URL?.replace(/\/+$/, "");
  const anonKey = process.env.SUPABASE_ANON_KEY;
  const url = `${baseUrl ?? "(SUPABASE_URL fehlt)"}/rest/v1/courses?${QUERY}`;

  let error: ScheduleError;
  try {
    if (!baseUrl || !anonKey) {
      throw new ScheduleLoadError("config", "SUPABASE_URL oder SUPABASE_ANON_KEY ist nicht gesetzt");
    }
    const courses = await fetchCourses(url, anonKey);
    await rememberLastGood(courses);
    return { status: "fresh", courses };
  } catch (e) {
    error =
      e instanceof ScheduleLoadError
        ? { kind: e.kind, message: e.message, status: e.status, url }
        : { kind: "invalid", message: String(e), url };
  }

  console.error(`[kursplan] Laden fehlgeschlagen (${error.kind}): ${error.message}`);
  const previous = await recallLastGood();
  if (previous) return { status: "stale", courses: previous.courses, savedAt: previous.savedAt, error };
  return { status: "unavailable", error };
}
