import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Mobiles Personal Training – SP Fitness by Sebastian Pfau | Dein Training. Dein Ort. Deine Zeit.",
  description: "Mobiles Personal Training: Training bei dir zu Hause, im Park oder an deiner Wunschlocation. Flexibel, individuell und effektiv. Ich bringe das Equipment mit.",
  keywords: "Mobiles Personal Training, Personal Training zu Hause, Outdoor Training, Home Training, Personal Trainer mobil, SP Fitness, Sebastian Pfau",
  openGraph: {
    title: "Mobiles Personal Training – SP Fitness by Sebastian Pfau",
    description: "Dein Training. Dein Ort. Deine Zeit. Professionelles Training dort, wo du es möchtest.",
    url: "https://www.sp-fitness.de/mobiles-personaltraining",
    type: "website",
    images: ["https://www.sp-fitness.de/images/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobiles Personal Training – SP Fitness by Sebastian Pfau",
    description: "Dein Training. Dein Ort. Deine Zeit. Professionelles Training dort, wo du es möchtest.",
    images: ["https://www.sp-fitness.de/images/twitter-card.jpg"],
  },
};

export default function MobilesPersonalTraining() {
  return (
    <main>
      <section id="start">
        {/* Background Image */}
        <div className="hero-bg-image">
          <Image
            src="/images/VG8_4216.jpg" 
            alt="Mobiles Personal Training Background" 
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
              <h1 className="hero-fitness-title">MOBILES PERSONAL TRAINING</h1>
              <h2 className="hero-tagline">
                Dein Training. Dein Ort.<br/><span className="highlight-blue">Deine Zeit.</span>
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
      <section id="mobiles-pt-intro">
        <div className="wrapper">
          <FadeIn direction="up">
            <div className="content">
              <p className="intro-text">
                Du möchtest professionell trainieren, ohne an einen festen Ort gebunden zu sein? Mit mobilem Personal Training bringe ich das Training direkt zu dir – flexibel, individuell und effektiv. Ob bei dir zu Hause, draußen an der frischen Luft oder an deiner Wunschlocation: Wir trainieren dort, wo du dich am wohlsten fühlst.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Locations Section */}
      <section id="mobiles-pt-locations">
        <div className="wrapper">
          <FadeIn direction="down">
            <h2 className="section-title">Training dort, wo du es möchtest</h2>
          </FadeIn>

          <div className="features-grid">
            <FadeIn direction="up" delay={0.1} className="feature-card">
              <div className="feature-icon">
                <i className="fa-solid fa-house"></i>
              </div>
              <h3 className="feature-title">Personal Training beim Kunden vor Ort</h3>
              <p className="feature-description">
                Ich komme zu dir nach Hause oder an deinen Arbeitsplatz und gestalte das Training optimal angepasst an die vorhandenen räumlichen Gegebenheiten. Ideal für alle, die Zeit sparen und in privater Atmosphäre trainieren möchten.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.2} className="feature-card">
              <div className="feature-icon">
                <i className="fa-solid fa-tree"></i>
              </div>
              <h3 className="feature-title">Outdoor Training</h3>
              <p className="feature-description">
                Training im Park, auf Sportplätzen oder in der Natur – abwechslungsreich, motivierend und effektiv. Je nach Wetter und Umgebung nutzen wir das, was vor Ort vorhanden ist, um ein vielseitiges Workout zu gestalten.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.3} className="feature-card">
              <div className="feature-icon">
                <i className="fa-solid fa-map-location-dot"></i>
              </div>
              <h3 className="feature-title">Wunschlocation</h3>
              <p className="feature-description">
                Du hast einen speziellen Ort im Kopf? Kein Problem. Gemeinsam finden wir die passende Location, die deinen Zielen und den örtlichen Bedingungen entspricht.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section id="mobiles-pt-equipment">
        <div className="wrapper">
          <FadeIn direction="up">
            <div className="equipment-content">
              <div className="equipment-icon-large">
                <i className="fa-solid fa-dumbbell"></i>
              </div>
              <h2 className="equipment-title">Alles dabei – du brauchst dich um nichts kümmern</h2>
              <p className="equipment-text">
                Ich bringe das komplette benötigte Trainingsequipment mit – z. B. Kettlebells, Widerstandsbänder, TRX, Medizinbälle oder Kleingeräte. So erhältst du ein vollwertiges, professionelles Training – ganz ohne eigenes Equipment.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Trainingsschwerpunkte Section */}
      <section id="mobiles-pt-schwerpunkte">
        <div className="wrapper">
          <FadeIn direction="down">
            <h2 className="section-title">Individuelle Trainingsschwerpunkte</h2>
          </FadeIn>

          <div className="features-grid">
            <FadeIn direction="up" delay={0.1} className="feature-card">
              <div className="feature-icon">
                <i className="fa-solid fa-dumbbell"></i>
              </div>
              <h3 className="feature-title">Kraft- & Muskelaufbau</h3>
            </FadeIn>

            <FadeIn direction="up" delay={0.2} className="feature-card">
              <div className="feature-icon">
                <i className="fa-solid fa-fire"></i>
              </div>
              <h3 className="feature-title">Fettverbrennung & Ausdauer</h3>
            </FadeIn>

            <FadeIn direction="up" delay={0.3} className="feature-card">
              <div className="feature-icon">
                <i className="fa-solid fa-person-running"></i>
              </div>
              <h3 className="feature-title">Funktionelles Ganzkörpertraining</h3>
            </FadeIn>

            <FadeIn direction="up" delay={0.4} className="feature-card">
              <div className="feature-icon">
                <i className="fa-solid fa-layer-group"></i>
              </div>
              <h3 className="feature-title">Rücken- & Core-Training</h3>
            </FadeIn>

            <FadeIn direction="up" delay={0.5} className="feature-card">
              <div className="feature-icon">
                <i className="fa-solid fa-arrows-up-down-left-right"></i>
              </div>
              <h3 className="feature-title">Mobilität & Beweglichkeit</h3>
            </FadeIn>

            <FadeIn direction="up" delay={0.6} className="feature-card">
              <div className="feature-icon">
                <i className="fa-solid fa-shield"></i>
              </div>
              <h3 className="feature-title">Prävention & Alltagsfitness</h3>
            </FadeIn>
          </div>

          <FadeIn direction="up" delay={0.7}>
            <p className="section-note" style={{textAlign: "center", marginTop: "2rem", color: "var(--brand-blue)"}}>
              Das Training wird individuell auf dein Fitnesslevel, deine Ziele und mögliche körperliche Einschränkungen abgestimmt – für Anfänger wie Fortgeschrittene.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="mobiles-pt-benefits">
        <div className="wrapper">
          <FadeIn direction="down">
            <h2 className="section-title">Deine Vorteile auf einen Blick</h2>
          </FadeIn>

          <div className="benefits-grid">
            <FadeIn direction="up" delay={0.1} className="benefit-item">
              <i className="fa-solid fa-check-circle"></i>
              <span>Maximale Flexibilität bei Ort & Zeit</span>
            </FadeIn>

            <FadeIn direction="up" delay={0.2} className="benefit-item">
              <i className="fa-solid fa-check-circle"></i>
              <span>Persönliche 1:1 Betreuung</span>
            </FadeIn>

            <FadeIn direction="up" delay={0.3} className="benefit-item">
              <i className="fa-solid fa-check-circle"></i>
              <span>Training in vertrauter Umgebung</span>
            </FadeIn>

            <FadeIn direction="up" delay={0.4} className="benefit-item">
              <i className="fa-solid fa-check-circle"></i>
              <span>Kein Geräte- oder Studiozwang</span>
            </FadeIn>

            <FadeIn direction="up" delay={0.5} className="benefit-item">
              <i className="fa-solid fa-check-circle"></i>
              <span>Effektives, abwechslungsreiches Training</span>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="mobiles-pt-cta">
        <div className="wrapper">
          <FadeIn direction="up">
            <div className="cta-content">
              <h2 className="cta-title">Starte jetzt dein individuelles Training – dort, wo es für dich am besten passt.</h2>
              <p className="cta-text">
                Kontaktiere mich für ein persönliches Beratungsgespräch und ein maßgeschneidertes Trainingskonzept.
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

