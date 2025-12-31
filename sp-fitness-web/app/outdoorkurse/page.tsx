import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Outdoorkurse – SP Fitness by Sebastian Pfau | Gemeinsam trainieren. Draußen bewegen.",
  description: "Outdoorkurse: Training unter freiem Himmel in Parks, auf Wiesen oder Sportplätzen. Funktionelles Ganzkörpertraining mit professioneller Anleitung.",
  keywords: "Outdoorkurse, Outdoor Training, Training draußen, Gruppentraining, Outdoor Fitness, SP Fitness, Sebastian Pfau",
  openGraph: {
    title: "Outdoorkurse – SP Fitness by Sebastian Pfau",
    description: "Gemeinsam trainieren. Draußen bewegen. Motivation steigern. Professionelle Outdoorkurse für Gruppen.",
    url: "https://www.sp-fitness.de/outdoorkurse",
    type: "website",
    images: ["https://www.sp-fitness.de/images/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Outdoorkurse – SP Fitness by Sebastian Pfau",
    description: "Gemeinsam trainieren. Draußen bewegen. Motivation steigern. Professionelle Outdoorkurse für Gruppen.",
    images: ["https://www.sp-fitness.de/images/twitter-card.jpg"],
  },
};

export default function Outdoorkurse() {
  return (
    <main>
      <section id="start">
        {/* Background Image */}
        <div className="hero-bg-image">
          <Image
            src="/images/VG8_4216.jpg" 
            alt="Outdoorkurse Background" 
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
              <h1 className="hero-fitness-title">OUTDOORKURSE</h1>
              <h2 className="hero-tagline">
                Gemeinsam trainieren. Draußen bewegen.<br/><span className="highlight-blue">Motivation steigern.</span>
              </h2>
              
              {/* Buttons */}
              <div className="hero-buttons">
                <Link href="#kontakt" className="button key hero-cta-primary">
                  <span>JETZT ANFRAGEN</span>
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
      <section id="outdoorkurse-intro">
        <div className="wrapper">
          <FadeIn direction="up">
            <div className="content">
              <p className="intro-text">
                Frische Luft, Bewegung und gemeinsames Training – die Outdoorkurse verbinden effektives Workout mit Spaß und Motivation in der Gruppe. Unter professioneller Anleitung trainieren wir draußen an ausgewählten Orten und nutzen die Umgebung für abwechslungsreiche, funktionelle Trainingseinheiten.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Training Locations Section */}
      <section id="outdoorkurse-locations">
        <div className="wrapper">
          <div className="outdoorkurse-locations-layout">
            <FadeIn direction="right" className="outdoorkurse-locations-content">
              <h2 className="section-title" style={{textAlign: "left", marginBottom: "1.5rem"}}>Training unter freiem Himmel</h2>
              <p className="section-subtitle" style={{marginBottom: "2rem"}}>
                Die Kurse finden an gewünschten Outdoor-Locations statt – z. B. in Parks, auf Wiesen oder auf Sportplätzen, je nach örtlichen Möglichkeiten. Der Treffpunkt wird gemeinsam festgelegt und optimal auf die Trainingsinhalte abgestimmt.
              </p>
              <div className="locations-features">
                <div className="location-feature-item">
                  <i className="fa-solid fa-tree"></i>
                  <span>Parks & Wiesen</span>
                </div>
                <div className="location-feature-item">
                  <i className="fa-solid fa-futbol"></i>
                  <span>Sportplätze</span>
                </div>
                <div className="location-feature-item">
                  <i className="fa-solid fa-map-location-dot"></i>
                  <span>Individuelle Locations</span>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn direction="left" className="outdoorkurse-locations-image">
              <div className="outdoorkurse-image-wrapper">
                <Image
                  src="/images/jim-luo-outdoor.jpg"
                  alt="Outdoor Training Locations"
                  fill
                  style={{objectFit: "cover"}}
                  quality={90}
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Flexible Course Structure Section */}
      <section id="outdoorkurse-flexible">
        <div className="wrapper">
          <div className="outdoorkurse-flexible-layout">
            <FadeIn direction="right" className="outdoorkurse-flexible-image">
              <div className="outdoorkurse-image-wrapper">
                <Image
                  src="/images/VG8_4216.jpg"
                  alt="Outdoor Training"
                  fill
                  style={{objectFit: "cover"}}
                  quality={90}
                />
              </div>
            </FadeIn>
            
            <FadeIn direction="left" className="outdoorkurse-flexible-content">
              <h2 className="section-title" style={{textAlign: "left", marginBottom: "1.5rem"}}>Flexible Kursgestaltung</h2>
              <p className="section-subtitle" style={{marginBottom: "2rem"}}>
                Die Outdoorkurse entstehen flexibel und werden neu geplant – abhängig von Gruppengröße, Wunschzeiten und Trainingszielen. Ideal für Freundesgruppen, Kolleginnen und Kollegen oder alle, die gemeinsam trainieren möchten.
              </p>
              <div className="flexible-features">
                <div className="flexible-feature-item">
                  <i className="fa-solid fa-calendar-check"></i>
                  <span>Neue Kurszeiten auf Anfrage</span>
                </div>
                <div className="flexible-feature-item">
                  <i className="fa-solid fa-users"></i>
                  <span>Anpassung an Gruppengröße</span>
                </div>
                <div className="flexible-feature-item">
                  <i className="fa-solid fa-bullseye"></i>
                  <span>Individuelle Trainingsziele</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Course Contents Section */}
      <section id="outdoorkurse-inhalte">
        <div className="wrapper">
          <FadeIn direction="down">
            <h2 className="section-title">Inhalte der Outdoorkurse</h2>
          </FadeIn>

          <div className="features-grid">
            <FadeIn direction="up" delay={0.1} className="feature-card">
              <div className="feature-icon">
                <i className="fa-solid fa-person-running"></i>
              </div>
              <h3 className="feature-title">Funktionelles Ganzkörpertraining</h3>
            </FadeIn>

            <FadeIn direction="up" delay={0.2} className="feature-card">
              <div className="feature-icon">
                <i className="fa-solid fa-dumbbell"></i>
              </div>
              <h3 className="feature-title">Kraft- & Ausdauertraining</h3>
            </FadeIn>

            <FadeIn direction="up" delay={0.3} className="feature-card">
              <div className="feature-icon">
                <i className="fa-solid fa-fire"></i>
              </div>
              <h3 className="feature-title">Zirkeltraining</h3>
            </FadeIn>

            <FadeIn direction="up" delay={0.4} className="feature-card">
              <div className="feature-icon">
                <i className="fa-solid fa-layer-group"></i>
              </div>
              <h3 className="feature-title">Core- & Stabilisationstraining</h3>
            </FadeIn>

            <FadeIn direction="up" delay={0.5} className="feature-card">
              <div className="feature-icon">
                <i className="fa-solid fa-arrows-up-down-left-right"></i>
              </div>
              <h3 className="feature-title">Mobilität & Beweglichkeit</h3>
            </FadeIn>
          </div>

          <FadeIn direction="up" delay={0.6}>
            <p className="section-note" style={{textAlign: "center", marginTop: "2rem", color: "var(--brand-blue)"}}>
              Die Einheiten sind abwechslungsreich gestaltet und werden an das Leistungsniveau der Gruppe angepasst.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Equipment Section */}
      <section id="outdoorkurse-equipment">
        <div className="wrapper">
          <FadeIn direction="up">
            <div className="equipment-content">
              <div className="equipment-icon-large">
                <i className="fa-solid fa-dumbbell"></i>
              </div>
              <h2 className="equipment-title">Equipment & Betreuung</h2>
              <p className="equipment-text">
                Der Trainer bringt das benötigte Equipment mit, wie z. B. Widerstandsbänder, Kettlebells oder Kleingeräte. Du brauchst lediglich sportgerechte Kleidung und Motivation.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="outdoorkurse-benefits">
        <div className="wrapper">
          <FadeIn direction="down">
            <h2 className="section-title">Deine Vorteile auf einen Blick</h2>
          </FadeIn>

          <div className="benefits-grid">
            <FadeIn direction="up" delay={0.1} className="benefit-item">
              <i className="fa-solid fa-check-circle"></i>
              <span>Training an der frischen Luft</span>
            </FadeIn>

            <FadeIn direction="up" delay={0.2} className="benefit-item">
              <i className="fa-solid fa-check-circle"></i>
              <span>Hohe Motivation durch Gruppendynamik</span>
            </FadeIn>

            <FadeIn direction="up" delay={0.3} className="benefit-item">
              <i className="fa-solid fa-check-circle"></i>
              <span>Flexible Kurszeiten auf Anfrage</span>
            </FadeIn>

            <FadeIn direction="up" delay={0.4} className="benefit-item">
              <i className="fa-solid fa-check-circle"></i>
              <span>Professionelle Anleitung</span>
            </FadeIn>

            <FadeIn direction="up" delay={0.5} className="benefit-item">
              <i className="fa-solid fa-check-circle"></i>
              <span>Abwechslungsreiche Workouts in natürlicher Umgebung</span>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="outdoorkurse-cta">
        <div className="wrapper">
          <FadeIn direction="up">
            <div className="cta-content">
              <h2 className="cta-title">Trainiere draußen – effektiv, motivierend und gemeinsam.</h2>
              <p className="cta-text">
                Jetzt anfragen und neue Outdoorkurse individuell planen lassen.
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

