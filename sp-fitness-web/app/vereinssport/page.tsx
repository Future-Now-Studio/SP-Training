import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Vereinssport & Athletiktraining – SP Fitness by Sebastian Pfau | Mehr Leistung. Weniger Verletzungen.",
  description: "Athletiktraining für Vereine: Sportartspezifisches Training für alle Sportarten. Leistungssteigerung, Verletzungsprävention und professionelle Betreuung für Ihr Team.",
  keywords: "Vereinssport, Athletiktraining, Sportartspezifisches Training, Verletzungsprävention, Leistungstraining, Verein, SP Fitness, Sebastian Pfau",
  openGraph: {
    title: "Vereinssport & Athletiktraining – SP Fitness by Sebastian Pfau",
    description: "Mehr Leistung. Weniger Verletzungen. Bessere Ergebnisse. Professionelles Athletiktraining für Vereine.",
    url: "https://www.sp-fitness.de/vereinssport",
    type: "website",
    images: ["https://www.sp-fitness.de/images/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vereinssport & Athletiktraining – SP Fitness by Sebastian Pfau",
    description: "Mehr Leistung. Weniger Verletzungen. Bessere Ergebnisse. Professionelles Athletiktraining für Vereine.",
    images: ["https://www.sp-fitness.de/images/twitter-card.jpg"],
  },
};

export default function Vereinssport() {
  return (
    <main>
      <section id="start">
        {/* Background Video (like other heroes, but with video instead of image) */}
        <div className="hero-bg-image">
          <video 
            autoPlay
            loop
            muted
            playsInline
            poster="/images/Hero-Sebastian.jpg"
          >
            <source src="/videos/SP-Fit.mp4" type="video/mp4" />
            Ihr Browser unterstützt das Video-Element nicht.
          </video>
        </div>

        {/* Blue Gradient Overlay - same as other pages */}
        <div className="hero-blue-overlay"></div>

        {/* Content Overlay on Right Side */}
        <div className="hero-content-overlay">
          <FadeIn className="hero-content" delay={0.3} direction="left">
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
              <h1 className="hero-fitness-title">VEREINSSPORT & ATHLETIKTRAINING</h1>
              <h2 className="hero-tagline">
                Mehr Leistung. Weniger Verletzungen.<br/><span className="highlight-blue">Bessere Ergebnisse.</span>
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
      <section id="vereinssport-intro">
        <div className="wrapper">
          <FadeIn direction="up">
            <div className="content">
              <p className="intro-text">
                Erfolgreicher Sport erfordert mehr als nur Technik und Taktik. Gezieltes Athletiktraining ist die Basis für Leistungssteigerung, Verletzungsprävention und langfristige Entwicklung – unabhängig von Sportart oder Leistungsniveau. Als Personal Trainer unterstütze ich Vereine mit professionellen, sportartspezifischen Trainingskonzepten.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Sportarten Section */}
      <section id="vereinssport-sportarten">
        <div className="wrapper">
          <FadeIn direction="down">
            <h2 className="section-title">Athletiktraining für alle Sportarten</h2>
            <p className="section-subtitle" style={{textAlign: "center", marginTop: "1rem", marginBottom: "2rem"}}>
              Ob Fußball, Basketball, Handball, Kampfsport, Leichtathletik oder andere Sportarten – das Training wird individuell an die Anforderungen der jeweiligen Disziplin angepasst. Im Fokus stehen:
            </p>
          </FadeIn>

          <div className="features-grid">
            <FadeIn direction="up" delay={0.1} className="feature-card">
              <div className="feature-icon">
                <i className="fa-solid fa-dumbbell"></i>
              </div>
              <h3 className="feature-title">Kraft & Stabilität</h3>
            </FadeIn>

            <FadeIn direction="up" delay={0.2} className="feature-card">
              <div className="feature-icon">
                <i className="fa-solid fa-bolt"></i>
              </div>
              <h3 className="feature-title">Schnelligkeit & Explosivität</h3>
            </FadeIn>

            <FadeIn direction="up" delay={0.3} className="feature-card">
              <div className="feature-icon">
                <i className="fa-solid fa-person-running"></i>
              </div>
              <h3 className="feature-title">Beweglichkeit & Koordination</h3>
            </FadeIn>

            <FadeIn direction="up" delay={0.4} className="feature-card">
              <div className="feature-icon">
                <i className="fa-solid fa-heart-pulse"></i>
              </div>
              <h3 className="feature-title">Ausdauer & Belastbarkeit</h3>
            </FadeIn>

            <FadeIn direction="up" delay={0.5} className="feature-card">
              <div className="feature-icon">
                <i className="fa-solid fa-shield"></i>
              </div>
              <h3 className="feature-title">Verletzungsprävention & Regeneration</h3>
            </FadeIn>
          </div>

          <FadeIn direction="up" delay={0.6}>
            <p className="section-note" style={{textAlign: "center", marginTop: "2rem", color: "var(--brand-blue)"}}>
              Das Training eignet sich für Jugend-, Amateur- und Leistungssportler gleichermaßen.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Trainingsmodelle Section */}
      <section id="vereinssport-modelle">
        <div className="wrapper">
          <FadeIn direction="down">
            <h2 className="section-title">Flexible Trainingsmodelle für Vereine</h2>
          </FadeIn>

          <div className="features-grid">
            <FadeIn direction="up" delay={0.1} className="feature-card">
              <div className="feature-icon">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <h3 className="feature-title">Athletiktraining vor Ort im Verein</h3>
              <p className="feature-description">
                Ich komme direkt zu Ihrem Verein oder auf den Trainingsplatz. Die Einheiten lassen sich optimal in bestehende Trainingspläne integrieren – als Ergänzung zum regulären Mannschaftstraining.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.2} className="feature-card">
              <div className="feature-icon">
                <i className="fa-solid fa-building"></i>
              </div>
              <h3 className="feature-title">Externe Kurse im Studio</h3>
              <p className="feature-description">
                Geschlossene Trainingseinheiten für Teams oder Kleingruppen in meinem Studio. Professionelle Ausstattung, strukturierte Trainingspläne und volle Konzentration auf Athletik und Leistungsentwicklung.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Inhalte Section */}
      <section id="vereinssport-inhalte">
        <div className="wrapper">
          <FadeIn direction="down">
            <h2 className="section-title">Inhalte & Trainingsformate</h2>
          </FadeIn>

          <div className="vereinssport-inhalte-layout">
            <FadeIn direction="right" className="vereinssport-inhalte-content">
              <div className="workouts-grid-compact">
                <div className="workout-item-compact">
                  <div className="workout-icon-compact">
                    <i className="fa-solid fa-trophy"></i>
                  </div>
                  <h3 className="workout-title-compact">Sportartspezifisches Athletiktraining</h3>
                </div>

                <div className="workout-item-compact">
                  <div className="workout-icon-compact">
                    <i className="fa-solid fa-dumbbell"></i>
                  </div>
                  <h3 className="workout-title-compact">Funktionelles Krafttraining</h3>
                </div>

                <div className="workout-item-compact">
                  <div className="workout-icon-compact">
                    <i className="fa-solid fa-bolt"></i>
                  </div>
                  <h3 className="workout-title-compact">Schnelligkeits- & Agilitätstraining</h3>
                </div>

                <div className="workout-item-compact">
                  <div className="workout-icon-compact">
                    <i className="fa-solid fa-layer-group"></i>
                  </div>
                  <h3 className="workout-title-compact">Core- & Stabilisationstraining</h3>
                </div>

                <div className="workout-item-compact">
                  <div className="workout-icon-compact">
                    <i className="fa-solid fa-shield"></i>
                  </div>
                  <h3 className="workout-title-compact">Präventives Training zur Verletzungsprophylaxe</h3>
                </div>

                <div className="workout-item-compact">
                  <div className="workout-icon-compact">
                    <i className="fa-solid fa-calendar-check"></i>
                  </div>
                  <h3 className="workout-title-compact">Saisonvorbereitung & Leistungsaufbau</h3>
                </div>
              </div>

              <p className="section-note" style={{marginTop: "2rem", color: "var(--brand-blue)"}}>
                Jede Einheit wird individuell auf Alter, Leistungsstand und Saisonphase abgestimmt.
              </p>
            </FadeIn>
            
            <FadeIn direction="left" className="vereinssport-inhalte-image">
              <div className="vereinssport-image-wrapper">
                <Image
                  src="/images/Hero-Sebastian.jpg"
                  alt="Athletiktraining Praxis"
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
      <section id="vereinssport-benefits">
        <div className="wrapper">
          <FadeIn direction="down">
            <h2 className="section-title">Ihr Vorteil als Verein</h2>
          </FadeIn>

          <div className="benefits-grid">
            <FadeIn direction="up" delay={0.1} className="benefit-item">
              <i className="fa-solid fa-check-circle"></i>
              <span>Leistungssteigerung Ihrer Athletinnen und Athleten</span>
            </FadeIn>

            <FadeIn direction="up" delay={0.2} className="benefit-item">
              <i className="fa-solid fa-check-circle"></i>
              <span>Reduziertes Verletzungsrisiko</span>
            </FadeIn>

            <FadeIn direction="up" delay={0.3} className="benefit-item">
              <i className="fa-solid fa-check-circle"></i>
              <span>Professionelle externe Betreuung</span>
            </FadeIn>

            <FadeIn direction="up" delay={0.4} className="benefit-item">
              <i className="fa-solid fa-check-circle"></i>
              <span>Flexible Integration in den Vereinsalltag</span>
            </FadeIn>

            <FadeIn direction="up" delay={0.5} className="benefit-item">
              <i className="fa-solid fa-check-circle"></i>
              <span>Moderne, praxisnahe Trainingsmethoden</span>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="vereinssport-cta">
        <div className="wrapper">
          <FadeIn direction="up">
            <div className="cta-content">
              <h2 className="cta-title">Machen Sie Ihr Team stärker – körperlich und mental.</h2>
              <p className="cta-text">
                Gerne entwickle ich ein maßgeschneidertes Athletik- und Trainingskonzept für Ihren Verein.
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

