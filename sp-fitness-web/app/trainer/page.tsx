import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TrainerCardCompact from "@/components/TrainerCardCompact";
import FadeIn from "@/components/FadeIn";
import { trainers } from "@/data/trainers";

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
