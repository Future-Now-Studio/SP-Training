import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TrainerCardCompact from "@/components/TrainerCardCompact";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Unser Trainer-Team – SP Fitness by Sebastian Pfau | Professionelle Personal Trainer",
  description: "Lerne unser Trainer-Team kennen. Professionelle Personal Trainer mit jahrelanger Erfahrung, individueller Betreuung und Leidenschaft für deinen Erfolg.",
  keywords: "Personal Trainer Team, Fitness Trainer, Sebastian Pfau, SP Fitness, Schwetzingen",
  openGraph: {
    title: "Unser Trainer-Team – SP Fitness by Sebastian Pfau",
    description: "Professionelle Personal Trainer mit jahrelanger Erfahrung und individueller Betreuung.",
    url: "https://www.sp-fitness.de/trainer",
    type: "website",
  },
};

export default function TrainerTeam() {
  const trainers = [
    {
      name: "Sebastian Pfau",
      title: "Personal Trainer für nachhaltige Ergebnisse",
      image: "/images/VG8_4216.jpg",
      imageAlt: "Sebastian Pfau - Personal Trainer",
      intro: "Mit über 8 Jahren Berufserfahrung im professionellen Personal Training, umfassender Trainingspraxis seit 2006 und einer langjährigen Leidenschaft für Kraft- und Kampfsport begleitet Sebastian dich auf deinem Weg zu deinem besten Ich.",
      specialties: ["Krafttraining", "Kampfsport", "Muskelaufbau", "Fettabbau"],
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
      name: "Sarah Müller",
      title: "Yoga & Mindfulness Trainerin",
      image: "/images/placeholder-yoga.jpg", // Placeholder - you can replace with actual yoga trainer image
      imageAlt: "Sarah Müller - Yoga Trainerin",
      intro: "Sarah ist zertifizierte Yoga-Lehrerin mit über 6 Jahren Erfahrung in verschiedenen Yoga-Stilen. Sie kombiniert traditionelle Yoga-Praxis mit modernen Ansätzen für Flexibilität, Kraft und mentales Wohlbefinden.",
      specialties: ["Hatha Yoga", "Vinyasa Flow", "Yin Yoga", "Meditation"],
      experience: "6+ Jahre als Yoga-Lehrerin, zertifiziert in Hatha und Vinyasa Yoga. Spezialisiert auf Stressreduktion und Körperbewusstsein.",
      highlights: [
        "6+ Jahre Yoga-Erfahrung",
        "Zertifizierte Lehrerin",
        "Stressreduktion",
        "Flexibilität & Balance",
        "Mentales Training",
        "Individuelle Anpassung",
      ],
      ctaText: "Jetzt Kontakt aufnehmen",
      ctaLink: "#kontakt",
    },
    {
      name: "Lisa Weber",
      title: "Pilates & Core Strength Trainerin",
      image: "/images/Pilates.jpg", // Placeholder - you can replace with actual pilates trainer image
      imageAlt: "Lisa Weber - Pilates Trainerin",
      intro: "Lisa ist zertifizierte Pilates-Trainerin mit über 7 Jahren Erfahrung in klassischem und modernem Pilates. Sie spezialisiert sich auf Core-Stärkung, Körperhaltung und funktionelle Beweglichkeit für ein ausgewogenes Training.",
      specialties: ["Klassisches Pilates", "Mat Pilates", "Reformer Pilates", "Core Training"],
      experience: "7+ Jahre als Pilates-Trainerin, zertifiziert in klassischem Pilates und Reformer-Training. Spezialisiert auf Haltungskorrektur und präventives Training.",
      highlights: [
        "7+ Jahre Pilates-Erfahrung",
        "Zertifizierte Trainerin",
        "Core-Stärkung",
        "Haltungskorrektur",
        "Präventives Training",
        "Funktionelle Beweglichkeit",
      ],
      ctaText: "Jetzt Kontakt aufnehmen",
      ctaLink: "#kontakt",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="trainer-hero">
        <div className="trainer-hero-bg">
          <Image
            src="/images/hero_bg_2.jpg"
            alt="Gym Background"
            fill
            style={{objectFit: "cover"}}
            priority
            quality={90}
          />
          <div className="trainer-hero-overlay"></div>
        </div>
        
        <div className="trainer-hero-content">
          <div className="wrapper">
            <FadeIn direction="up" delay={0.2}>
              <h1 className="trainer-hero-title">Unser Trainer-Team</h1>
              <p className="trainer-hero-subtitle">
                Professionelle Personal Trainer mit jahrelanger Erfahrung, individueller Betreuung und Leidenschaft für deinen Erfolg.
              </p>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.3}>
              <div className="trainer-hero-features">
                <div className="trainer-hero-feature">
                  <i className="fa-solid fa-users"></i>
                  <span>Erfahrene Trainer</span>
                </div>
                <div className="trainer-hero-feature">
                  <i className="fa-solid fa-heart-pulse"></i>
                  <span>Individuelle Betreuung</span>
                </div>
                <div className="trainer-hero-feature">
                  <i className="fa-solid fa-trophy"></i>
                  <span>Nachhaltige Ergebnisse</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="trainer-team-grid">
        <div className="wrapper">
          <div className="trainer-cards-container">
            {trainers.map((trainer, index) => (
              <TrainerCardCompact
                key={index}
                {...trainer}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
     
    </main>
  );
}
