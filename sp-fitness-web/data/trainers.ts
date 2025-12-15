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
}

export const trainers: Trainer[] = [
  {
    name: "Sebastian Pfau",
    title: "Personal Trainer für nachhaltige Ergebnisse",
    image: "/images/sebastian.png",
    imageAlt: "Sebastian Pfau - Personal Trainer",
    intro: "Mit über 8 Jahren Berufserfahrung im professionellen Personal Training, umfassender Trainingspraxis seit 2006 und einer langjährigen Leidenschaft für Kraft- und Kampfsport begleitet Sebastian dich auf deinem Weg zu deinem besten Ich.",
    specialties: ["Krafttraining", "Kampfsport", "Muskelaufbau", "Fettabbau", "Funktional Zirkeltraining", "Wirbelsäulengymastik"],
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
    name: "Olya",
    title: "Pilates Trainerin",
    image: "/images/Trainer.png", // Update with actual image when available
    imageAlt: "Olya - Pilates Trainerin",
    intro: "Olya ist erfahrene Pilates-Trainerin mit Leidenschaft für funktionelles Training und Körperbewusstsein.",
    specialties: ["Pilates", "Core Training", "Funktionelles Training"],
    experience: "Erfahrene Pilates-Trainerin mit Fokus auf Körperhaltung und Beweglichkeit.",
    highlights: [
      "Pilates-Spezialistin",
      "Core-Stärkung",
      "Körperhaltung",
      "Funktionelles Training",
    ],
    ctaText: "Jetzt Kontakt aufnehmen",
    ctaLink: "#kontakt",
  },
  {
    name: "Mary",
    title: "Hatha Yoga Trainerin",
    image: "/images/Trainer.png", // Update with actual image when available
    imageAlt: "Mary - Hatha Yoga Trainerin",
    intro: "Mary ist zertifizierte Hatha Yoga-Lehrerin mit Leidenschaft für Balance, Kraft und innere Ruhe.",
    specialties: ["Hatha Yoga", "Balance", "Meditation"],
    experience: "Erfahrene Hatha Yoga-Lehrerin mit Fokus auf achtsame Praxis und individuelle Anpassung.",
    highlights: [
      "Hatha Yoga-Spezialistin",
      "Balance & Kraft",
      "Achtsame Praxis",
      "Individuelle Anpassung",
    ],
    ctaText: "Jetzt Kontakt aufnehmen",
    ctaLink: "#kontakt",
  },
  {
    name: "Paula",
    title: "Yoga Nidra & Hatha Yoga Trainerin",
    image: "/images/Trainer.png", // Update with actual image when available
    imageAlt: "Paula - Yoga Nidra & Hatha Yoga Trainerin",
    intro: "Paula ist spezialisiert auf Yoga Nidra und Hatha Yoga mit Fokus auf Tiefenentspannung und mentales Wohlbefinden.",
    specialties: ["Yoga Nidra", "Hatha Yoga", "Tiefenentspannung", "Meditation"],
    experience: "Erfahrene Yoga-Lehrerin mit Spezialisierung auf Yoga Nidra und Entspannungstechniken.",
    highlights: [
      "Yoga Nidra-Spezialistin",
      "Tiefenentspannung",
      "Hatha Yoga",
      "Mentales Training",
    ],
    ctaText: "Jetzt Kontakt aufnehmen",
    ctaLink: "#kontakt",
  },
  {
    name: "Elisa",
    title: "Pilates & Vinyasa Yoga Trainerin",
    image: "/images/Trainer.png", // Update with actual image when available
    imageAlt: "Elisa - Pilates & Vinyasa Yoga Trainerin",
    intro: "Elisa kombiniert Pilates und Vinyasa Yoga für ein ganzheitliches Training von Kraft, Flexibilität und Beweglichkeit.",
    specialties: ["Pilates", "Vinyasa Yoga", "Hatha Yoga", "Flow Training"],
    experience: "Erfahrene Trainerin in Pilates und verschiedenen Yoga-Stilen mit Fokus auf dynamische Bewegungen.",
    highlights: [
      "Pilates & Yoga",
      "Vinyasa Flow",
      "Dynamisches Training",
      "Ganzheitliche Bewegung",
    ],
    ctaText: "Jetzt Kontakt aufnehmen",
    ctaLink: "#kontakt",
  },
  {
    name: "Dustin",
    title: "Funktional Zirkeltraining Trainer",
    image: "/images/Trainer.png", // Update with actual image when available
    imageAlt: "Dustin - Funktional Zirkeltraining Trainer",
    intro: "Dustin ist spezialisiert auf funktionales Zirkeltraining für effektive und abwechslungsreiche Workouts.",
    specialties: ["Funktional Zirkeltraining", "Krafttraining", "Kondition"],
    experience: "Erfahrener Trainer für funktionales Training und Zirkeltraining mit Fokus auf Effizienz.",
    highlights: [
      "Zirkeltraining-Spezialist",
      "Funktionales Training",
      "Effiziente Workouts",
      "Konditionstraining",
    ],
    ctaText: "Jetzt Kontakt aufnehmen",
    ctaLink: "#kontakt",
  },
];

