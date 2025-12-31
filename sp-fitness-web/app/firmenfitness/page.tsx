import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Firmenfitness – SP Fitness by Sebastian Pfau | Gesunde Mitarbeitende. Starkes Unternehmen.",
  description: "Firmenfitness-Konzepte von SP Fitness: Bewegte Pause, Training vor Ort, Online-Firmenfitness und geschlossene Gruppen im Studio. Investieren Sie in die Gesundheit Ihrer Mitarbeitenden.",
  keywords: "Firmenfitness, Corporate Fitness, Betriebliches Gesundheitsmanagement, Firmensport, Mitarbeitergesundheit, SP Fitness, Sebastian Pfau",
  openGraph: {
    title: "Firmenfitness – SP Fitness by Sebastian Pfau",
    description: "Gesunde Mitarbeitende. Starkes Unternehmen. Maßgeschneiderte Firmenfitness-Konzepte für Ihr Unternehmen.",
    url: "https://www.sp-fitness.de/firmenfitness",
    type: "website",
    images: ["https://www.sp-fitness.de/images/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Firmenfitness – SP Fitness by Sebastian Pfau",
    description: "Gesunde Mitarbeitende. Starkes Unternehmen. Maßgeschneiderte Firmenfitness-Konzepte für Ihr Unternehmen.",
    images: ["https://www.sp-fitness.de/images/twitter-card.jpg"],
  },
};

export default function Firmenfitness() {
  return (
    <main>
      <section id="start">
        {/* Background Image */}
        <div className="hero-bg-image">
          <Image
            src="/images/VG8_4216.jpg" 
            alt="Firmenfitness Background" 
            fill 
            style={{objectFit: "cover"}}
            priority
            quality={90}
          />
        </div>

        {/* Blue Gradient Overlay - Stronger on Right */}
        <div className="hero-blue-overlay"></div>

        {/* Content Overlay on Right Side */}
        <div className="hero-content-overlay">
          <FadeIn className="hero-content" delay={0.2} direction="left">
            {/* SP Logo */}
            <div className="hero-logo-container">
              <Image 
                src="/images/logo.svg" 
                alt="SP Fitness Logo" 
                width={320} 
                height={320} 
                className="hero-logo" 
                priority 
              />
            </div>

            {/* Text Content */}
            <div className="hero-text-content">
              <h1 className="hero-fitness-title">FIRMENFITNESS</h1>
              <h2 className="hero-tagline">
                Gesunde Mitarbeitende.<br/><span className="highlight-blue">Starkes Unternehmen.</span>
              </h2>
              
              {/* Buttons */}
              <div className="hero-buttons">
                <Link href="#kontakt" className="button key hero-cta-primary">
                  <span>JETZT KONTAKTIEREN</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
                <Link href="/" className="button hero-cta-secondary">
                  <span>Zurück zur Startseite</span>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Intro Section */}
      <section id="firmenfitness-intro">
        <div className="wrapper">
          <FadeIn direction="up">
            <div className="content">
              <p className="intro-text">
                Bewegung steigert Leistungsfähigkeit, Motivation und Wohlbefinden – genau hier setze ich an. Als erfahrener Personal Trainer biete ich maßgeschneiderte Firmenfitness-Konzepte, die sich flexibel in den Arbeitsalltag integrieren lassen. Ob direkt im Unternehmen, online oder in meinem Studio: Gemeinsam fördern wir die Gesundheit Ihrer Mitarbeitenden nachhaltig und effektiv.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Angebote Section */}
      <section id="firmenfitness-angebote">
        <div className="wrapper">
          <FadeIn direction="down">
            <h2 className="section-title">Individuelle Firmenfitness-Konzepte</h2>
          </FadeIn>

          <div className="features-grid">
            <FadeIn direction="up" delay={0.1} className="feature-card">
              <div className="feature-icon">
                <i className="fa-solid fa-clock"></i>
              </div>
              <h3 className="feature-title">Bewegte Pause</h3>
              <p className="feature-description">
                Kurze, aktive Einheiten von 10–20 Minuten, ideal für den Arbeitsalltag. Mobilisation, Lockerung und gezielte Übungen gegen Verspannungen – perfekt, um neue Energie zu tanken und konzentriert weiterzuarbeiten.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.2} className="feature-card">
              <div className="feature-icon">
                <i className="fa-solid fa-building"></i>
              </div>
              <h3 className="feature-title">Training vor Ort im Unternehmen</h3>
              <p className="feature-description">
                Ich komme direkt zu Ihnen in die Firma und gestalte abwechslungsreiche Trainingseinheiten, angepasst an Räumlichkeiten, Zeitfenster und Fitnesslevel der Teilnehmenden.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.3} className="feature-card">
              <div className="feature-icon">
                <i className="fa-solid fa-video"></i>
              </div>
              <h3 className="feature-title">Online-Firmenfitness</h3>
              <p className="feature-description">
                Flexibel und ortsunabhängig: Live-Trainings per Video für Teams im Büro, Homeoffice oder an verschiedenen Standorten.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.4} className="feature-card">
              <div className="feature-icon">
                <i className="fa-solid fa-users"></i>
              </div>
              <h3 className="feature-title">Geschlossene Gruppen im Studio</h3>
              <p className="feature-description">
                Exklusive Trainingszeiten für Unternehmen in meinem Studio. Ideal für Teams, die gemeinsam trainieren und den Teamgeist stärken möchten.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Workouts Section */}
      <section id="firmenfitness-workouts">
        <div className="wrapper">
          <div className="firmenfitness-workouts-layout">
            <FadeIn direction="right" className="firmenfitness-workouts-content">
              <h2 className="section-title" style={{textAlign: "left", marginBottom: "1.5rem"}}>60-Minuten-Workouts</h2>
              <div className="workouts-list-compact">
                <div className="workout-item-compact">
                  <div className="workout-icon-compact">
                    <i className="fa-solid fa-layer-group"></i>
                  </div>
                  <div className="workout-content-compact">
                    <h3 className="workout-title-compact">Rückenfit</h3>
                    <p className="workout-description-compact">Kräftigung und Stabilisierung für einen starken, gesunden Rücken</p>
                  </div>
                </div>

                <div className="workout-item-compact">
                  <div className="workout-icon-compact">
                    <i className="fa-solid fa-dumbbell"></i>
                  </div>
                  <div className="workout-content-compact">
                    <h3 className="workout-title-compact">Wirbelsäulengymnastik</h3>
                    <p className="workout-description-compact">Mobilisation, Haltungsschulung und Prävention</p>
                  </div>
                </div>

                <div className="workout-item-compact">
                  <div className="workout-icon-compact">
                    <i className="fa-solid fa-fire"></i>
                  </div>
                  <div className="workout-content-compact">
                    <h3 className="workout-title-compact">Funktionales Zirkeltraining</h3>
                    <p className="workout-description-compact">Ganzkörpertraining für Kraft, Ausdauer und Beweglichkeit</p>
                  </div>
                </div>

                <div className="workout-item-compact">
                  <div className="workout-icon-compact">
                    <i className="fa-solid fa-plus"></i>
                  </div>
                  <div className="workout-content-compact">
                    <h3 className="workout-title-compact">und vieles mehr</h3>
                    <p className="workout-description-compact">Alle Einheiten sind für Anfänger und Fortgeschrittene geeignet und werden individuell angepasst.</p>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn direction="left" className="firmenfitness-workouts-image">
              <div className="firmenfitness-image-wrapper">
                <Image
                  src="/images/karsten-winegeart-workout.jpg"
                  alt="Firmenfitness Workouts"
                  fill
                  style={{objectFit: "cover"}}
                  quality={90}
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="firmenfitness-benefits">
        <div className="wrapper">
          <div className="firmenfitness-benefits-layout">
            <FadeIn direction="right" className="firmenfitness-benefits-image">
              <div className="firmenfitness-image-wrapper">
                <Image
                  src="/images/VG8_4216.jpg"
                  alt="Firmenfitness Benefits"
                  fill
                  style={{objectFit: "cover"}}
                  quality={90}
                />
              </div>
            </FadeIn>
            
            <FadeIn direction="left" className="firmenfitness-benefits-content">
              <h2 className="section-title" style={{textAlign: "left", marginBottom: "2rem"}}>Ihr Mehrwert</h2>
              <div className="benefits-list-compact">
                <FadeIn direction="up" delay={0.1} className="benefit-item-compact">
                  <i className="fa-solid fa-check-circle"></i>
                  <span>Reduzierung von Stress und Fehlzeiten</span>
                </FadeIn>

                <FadeIn direction="up" delay={0.2} className="benefit-item-compact">
                  <i className="fa-solid fa-check-circle"></i>
                  <span>Steigerung von Motivation, Gesundheit und Leistungsfähigkeit</span>
                </FadeIn>

                <FadeIn direction="up" delay={0.3} className="benefit-item-compact">
                  <i className="fa-solid fa-check-circle"></i>
                  <span>Flexible Konzepte passend zu Ihrem Unternehmen</span>
                </FadeIn>

                <FadeIn direction="up" delay={0.4} className="benefit-item-compact">
                  <i className="fa-solid fa-check-circle"></i>
                  <span>Persönliche Betreuung durch einen qualifizierten Trainer</span>
                </FadeIn>

                <FadeIn direction="up" delay={0.5} className="benefit-item-compact">
                  <i className="fa-solid fa-check-circle"></i>
                  <span>Teambuilding Maßnahme</span>
                </FadeIn>

                <FadeIn direction="up" delay={0.6} className="benefit-item-compact">
                  <i className="fa-solid fa-check-circle"></i>
                  <span>Attraktiver als Arbeitgeber</span>
                </FadeIn>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="firmenfitness-cta">
        <div className="wrapper">
          <FadeIn direction="up">
            <div className="cta-content">
              <h2 className="cta-title">Investieren Sie in die Gesundheit Ihrer Mitarbeitenden.</h2>
              <p className="cta-text">
                Gerne erstelle ich ein individuelles Firmenfitness-Konzept – nehmen Sie jetzt Kontakt auf.
              </p>
              <Link href="#kontakt" className="button key">
                <span>Jetzt Kontakt aufnehmen</span>
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}

