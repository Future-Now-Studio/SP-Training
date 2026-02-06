export interface Trainer {
  name: string;
  title: string;
  image: string;
  imageAlt: string;
  intro: string;
  specialties: string[];
  experience: string;
  highlights: string[];
  ctaText?: string;
  ctaLink?: string;
  galleryImages?: string[];
}

export const trainers: Trainer[] = [
  {
    name: "Sebastian",
    title: "Personal Trainer für nachhaltige Ergebnisse",
    image: "/images/sebastian-trainer.jpg",
    imageAlt: "Sebastian - Personal Trainer",
    intro: "Mit über 8 Jahren Berufserfahrung im professionellen Personal Training, umfassender Trainingspraxis seit 2006 und einer langjährigen Leidenschaft für Kraft- und Kampfsport begleitet Sebastian dich auf deinem Weg zu deinem besten Ich.",
    specialties: ["Krafttraining", "Muskelaufbau", "Körperfettreduzierung", "Funktionelles Training", "Athletik Training", "Training mit Einschränkungen und Verletzungen (Reha)"],
    experience: "Über 8 Jahre professionelle Berufserfahrung, eigene Trainingserfahrung seit 2006. Vielseitiger Hintergrund in Judo (10 Jahre), Thai Boxen (2 Jahre) und MMA (2 Jahre).",
    highlights: [
      "Über 8 Jahre Berufserfahrung",
      "Trainingserfahrung seit 2006",
      "Judo, Thai Boxen & MMA",
      "Individuelle Trainingsplanung",
      "Ernährungsberatung",
      "Nachhaltige Ergebnisse",
    ],
    ctaText: "Jetzt Kontakt aufnehmen",
    ctaLink: "#kontakt",
  },
  {
    name: "Paula",
    title: "Yogalehrerin & Resilienz-Coachin",
    image: "/images/paula-portrait.jpg",
    imageAlt: "Paula - Yogalehrerin & Resilienz-Coachin",
    intro: "Ich bin ausgebildete Yogalehrerin, Sozialarbeiterin und Resilienz-Coachin. Meine Yogalehrerausbildung habe ich im Januar 2025 in Rishikesh (Indien) absolviert, ergänzt durch eine Weiterbildung im Bereich Resilienztraining und Burnout-Prävention. Bewegung und Sport begleiten mich seit vielen Jahren. In meinen Kursen verbinde ich funktionelles Yoga, Atemtechniken und Entspannung zu einem alltagstauglichen Ausgleich für Körper und Geist.",
    specialties: ["Hatha Yoga", "Yoga Nidra", "Resilienztraining", "Burnout-Prävention", "Funktionelles Yoga", "Atemtechniken", "Entspannung"],
    experience: "Ausgebildete Yogalehrerin mit Ausbildung in Rishikesh (Indien) und Weiterbildung in Resilienztraining und Burnout-Prävention.",
    highlights: [
      "Yogalehrerausbildung in Rishikesh (Indien)",
      "Weiterbildung in Resilienztraining & Burnout-Prävention",
      "Funktionelles Yoga für den Alltag",
      "Atemtechniken & Entspannung",
    ],
    galleryImages: [
      "/images/paula-portrait.jpg",
    ],
  },
  {
    name: "Mary",
    title: "Sport- und Fitnesskauffrau, Reha-Sporttrainerin & Hatha-Yoga-Lehrerin",
    image: "/images/2025_Maryoga-111.webp",
    imageAlt: "Mary - Sport- und Fitnesskauffrau, Reha-Sporttrainerin & Hatha-Yoga-Lehrerin",
    intro: "Mary ist ausgebildete Sport- und Fitnesskauffrau (3-jährige Ausbildung) mit über 10 Jahren Berufserfahrung im Trainings- und Gesundheitsbereich. Bereits seit ihrem 16. Lebensjahr ist sie im Fitnessstudio aktiv ausgebildet worden und arbeitet bis heute als Trainerin.",
    specialties: ["Hatha Yoga", "Reha-Sport", "Outdoor-Fitness", "Yoga für Schwangere", "Sport- und Fitnesskauffrau", "Frauen-Fitness"],
    experience: "Über 10 Jahre Berufserfahrung im Trainings- und Gesundheitsbereich. Seit dem 16. Lebensjahr im Fitnessstudio aktiv ausgebildet und tätig. Zusätzlich ausgebildete Reha-Sporttrainerin sowie Hatha-Yoga-Lehrerin mit 450 Unterrichtseinheiten (2-jährige Ausbildung im Yogazentrum Mannheim). Seit Januar 2026 selbstständig als Yoga-Lehrerin tätig.",
    highlights: [
      "Über 10 Jahre Berufserfahrung",
      "Ausgebildete Sport- und Fitnesskauffrau (3-jährige Ausbildung)",
      "Reha-Sporttrainerin",
      "Hatha-Yoga-Lehrerin (450 Unterrichtseinheiten)",
      "Selbstständig seit Januar 2026",
      "Outdoor-Fitnesskurse für Frauen",
      "Yoga für Schwangere",
    ],
  },
  {
    name: "Elisa",
    title: "Yoga- & Pilateslehrerin | Gesundheitscoach & Ernährungsberaterin",
    image: "/images/elisa-portrait.jpg",
    imageAlt: "Elisa - Yoga- & Pilateslehrerin im Freien",
    intro: "Ich begleite Menschen dabei, ihren Körper wieder in Balance zu bringen – kraftvoll, achtsam und gesundheitsorientiert. In meinen Stunden verbinde ich funktionelles Training mit Yoga, Pilates und bewusster Atmung, sodass Körper, Geist und Nervensystem gleichermaßen angesprochen werden. Je nach Bedarf darf eine Stunde dynamisch und kräftigend oder ruhig, stabilisierend und entspannend sein – wichtig ist mir, dass sich alle gut aufgehoben fühlen, unabhängig von Trainingslevel oder Erfahrung.",
    specialties: [
      "Matten-Pilates",
      "Hatha Yoga",
      "Vinyasa Yoga",
      "Rückentraining & Core-Stabilität",
      "Gesundheitscoaching für Frauen",
      "Ernährungsberatung",
      "Personal Training",
      "Funktionelles Training",
    ],
    experience: "Seit über sieben Jahren arbeite ich im Gesundheits- und Fitnessbereich. Nach meinem Studium der Fitnessökonomie war ich mehrere Jahre in einem Fitness- und Gesundheitsstudio tätig und habe dort umfangreiche Erfahrung in Kursen, Reha-Sport, Kleingruppentraining, Ernährungsberatung und Personal Training gesammelt. Durch Ausbildungen in Gesundheitscoaching, Pilates und Yoga kann ich Menschen heute ganzheitlich begleiten – mit besonderem Fokus auf die Bedürfnisse von Frauen, ganzheitliche Gesundheit, Ernährung und hormonelle Balance.",
    highlights: [
      "Ganzheitlicher Ansatz: Fitness, Gesundheit & Wohlbefinden",
      "Training für mehr Balance, Stressabbau & Körperbewusstsein",
      "Kräftigende wie auch ruhige Einheiten – je nach Bedarf",
      "Spezialisierung auf Frauen im Coaching",
    ],
  },
  {
    name: "Olya",
    title: "Pilates-Trainerin und Ernährungsberaterin",
    image: "/images/olya-portrait.jpg",
    imageAlt: "Olya - Pilates-Trainerin und Ernährungsberaterin",
    intro: "Ich unterrichte Pilates auf der Matte sowie Pilates mit Kleingeräten (Small weights, Ball, Magic Circle) und lege dabei besonderen Wert auf funktionelles, sanftes, atembewusstes Training und Core-Stabilität. Ich begleite meine Teilnehmerinnen auf ihrem Weg zu mehr Kraft, Beweglichkeit und Wohlbefinden. Über viele Jahre war ich im Tanzbereich aktiv – von Hip-Hop bis Salsa und Bachata – was bis heute mein Körpergefühl und meine Bewegungswahrnehmung prägt.",
    specialties: ["Matten-Pilates", "Pilates mit Kleingeräten", "Core-Stabilität & Haltung", "Beweglichkeit & Mobilität", "Pilates für Frauen", "Ernährungsberatung"],
    experience: "Matten-Pilates Ausbildung in Breslau (Schule Justyna Uran). Derzeit absolviere ich weiterführende Kurse und ein einjähriges Pilates-Programm, um meine Kenntnisse und Fähigkeiten kontinuierlich zu erweitern.",
    highlights: [
      "Matten-Pilates-Ausbildung bei Justyna Uran (Breslau, 2025)",
      "Unterricht von Pilates mit Kleingeräten",
      "Medizinischer & ernährungswissenschaftlicher Hintergrund",
      "Ganzheitlicher Ansatz für Körper, Bewegung und Wohlbefinden",
    ],
  },
];

