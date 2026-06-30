"use client";

import { useState } from "react";

interface FaqItem {
  q: string;
  a: string;
}

const FAQS: FaqItem[] = [
  {
    q: "Ist das Training etwas für mich?",
    a: "Für alle Frauen und Männer jeden Alters, die eine Lösung für Inkontinenz, Rückenschmerzen, Libidoverlust oder mehr Lebensqualität suchen.",
  },
  {
    q: "Wie fühlt sich die Anwendung an?",
    a: "Komplett schmerzfrei. Du spürst ein leichtes Kribbeln und die Kontraktion der Muskulatur. Danach direkt weiter in den Alltag.",
  },
  {
    q: "Wie lange dauert eine Sitzung?",
    a: "Ca. 28 Minuten. Wir empfehlen mindestens 10 Sitzungen, 2× pro Woche, für nachhaltige Erfolge.",
  },
  {
    q: "Wann spüre ich eine Verbesserung?",
    a: "Viele berichten bereits nach der 1. Sitzung von einer deutlichen Verbesserung. Erste klare Ergebnisse nach 6 – 10 Sitzungen.",
  },
  {
    q: "Worauf muss ich achten?",
    a: "Mögliche Kontraindikationen werden vorab im persönlichen Gespräch besprochen. Ansonsten gibt es nichts Besonderes zu beachten – bitte Handy, EC-Karte und andere elektronische Geräte aus den Hosentaschen nehmen.",
  },
  {
    q: "Was bedeutet EMP?",
    a: "Electro-Magnetic-Pulse. Ähnlich wie EMS, aber deutlich tiefenwirksamer – die Wellen erreichen alle drei Schichten des Beckenbodens.",
  },
];

export default function EmpFaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="emp-faq-accordion">
      {FAQS.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className={`emp-faq-item ${isOpen ? "open" : ""}`}>
            <button
              type="button"
              className="emp-faq-question"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span>{item.q}</span>
              <i className={`fa-solid ${isOpen ? "fa-minus" : "fa-plus"}`}></i>
            </button>
            <div className="emp-faq-answer" style={{ maxHeight: isOpen ? "20rem" : "0" }}>
              <p>{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
