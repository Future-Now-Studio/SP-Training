import type { Metadata } from "next";
import { after } from "next/server";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import CourseTimetable from "@/components/CourseTimetable";
import CourseContactButtons from "@/components/CourseContactButtons";
import TimetableUnavailable from "@/components/TimetableUnavailable";
import { loadSchedule } from "@/lib/courses";
import { notifyScheduleFailure } from "@/lib/schedule-alert";

export const metadata: Metadata = {
  title: "Kurse & Stundenplan – SP Fitness by Sebastian Pfau | Aktueller Kursplan",
  description: "Aktueller Kursplan bei SP Fitness in Schwetzingen: Übersicht aller Kurse von Montag bis Samstag. Hatha Yoga, Pilates, Yoga Nidra und mehr. Finde den passenden Kurs für dich!",
  keywords: "Kursplan Schwetzingen, Stundenplan, Yoga Kurse, Pilates Kurse, Fitness Kurse, SP Fitness, Sebastian Pfau",
  openGraph: {
    title: "Kurse & Stundenplan – SP Fitness by Sebastian Pfau",
    description: "Aktueller Kursplan bei SP Fitness: Übersicht aller Kurse von Montag bis Samstag. Finde den passenden Kurs für dich!",
    url: "https://www.sp-fitness.de/kurse",
    type: "website",
    images: ["https://www.sp-fitness.de/images/hero_bg_2.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kurse & Stundenplan – SP Fitness by Sebastian Pfau",
    description: "Aktueller Kursplan bei SP Fitness: Übersicht aller Kurse von Montag bis Samstag. Finde den passenden Kurs für dich!",
    images: ["https://www.sp-fitness.de/images/hero_bg_2.jpg"],
  },
};

// Kursplan kommt aus der Datenbank der Buchungs-App, höchstens alle 5 Minuten neu.
export const revalidate = 300;

export default async function Kurse() {
  const schedule = await loadSchedule();
  if (schedule.status !== "fresh") {
    const { error } = schedule;
    const staleSince = schedule.status === "stale" ? schedule.savedAt : null;
    after(() => notifyScheduleFailure(error, staleSince));
  }

  return (
    <main>
      <section id="kurse-hero">
        <div className="wrapper">
          <FadeIn direction="down">
            <div className="kurse-header">
              <h1 className="kurse-title">KURSE & STUNDENPLAN</h1>
              <p className="kurse-subtitle">
                Finde den passenden Kurs für dich und melde dich ganz einfach per WhatsApp, Telefon, E-Mail oder Kontaktformular bei uns an.
              </p>
              <p>Bitte beachte, dass die Kurse nur für Mitglieder sind oder alternativ gegen eine <Link href="/#preise" style={{ color: "#ffffff", textDecoration: "underline" }}>Gebühr</Link> gebucht werden können.
              </p>
              <CourseContactButtons />
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="timetable-section">
        <div className="wrapper">
          {schedule.status === "unavailable" ? (
            <TimetableUnavailable />
          ) : (
            <CourseTimetable courses={schedule.courses} />
          )}

          {/* Info section */}
          <FadeIn direction="up" delay={0.3}>
            <div className="timetable-info">
              <div className="timetable-info-card">
                <div className="info-icon">
                  <i className="fa-solid fa-ticket"></i>
                </div>
                <h3>Kurskarten & Mitgliedschaften</h3>
                <p>
                  5er Karte: 60 € (12 € pro Einheit)<br />
                  10er Karte: 100 € (10 € pro Einheit)<br />
                  <strong>Mitgliedschaft 6 Monate: 60 € pro Monat</strong><br />
                  <strong>Mitgliedschaft 12 Monate: 50 € pro Monat</strong>
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}

