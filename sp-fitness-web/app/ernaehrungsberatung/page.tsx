import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Ganzheitliche Ernährungsberatung – SP Fitness by Sebastian Pfau | Individuell, alltagsnah und nachhaltig",
  description: "Ganzheitliche Ernährungsberatung bei SP Fitness in Schwetzingen: Individuelle Ernährungskonzepte, die zu Ihrem Alltag passen. Kombiniert mit abgestimmtem Training für nachhaltige Erfolge. Jetzt informieren!",
  keywords: "Ernährungsberatung Schwetzingen, Ernährung, Diätberatung, Gewichtsreduktion, Muskelaufbau, gesunde Ernährung, Ernährungsplan, SP Fitness, Sebastian Pfau",
  openGraph: {
    title: "Ganzheitliche Ernährungsberatung – SP Fitness by Sebastian Pfau",
    description: "Ganzheitliche Ernährungsberatung – individuell, alltagsnah und nachhaltig. Wir entwickeln kein Schema F. Wir entwickeln Ihr persönliches Ernährungskonzept.",
    url: "https://www.sp-fitness.de/ernaehrungsberatung",
    type: "website",
    images: ["https://www.sp-fitness.de/images/hero_bg_2.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ganzheitliche Ernährungsberatung – SP Fitness by Sebastian Pfau",
    description: "Ganzheitliche Ernährungsberatung – individuell, alltagsnah und nachhaltig. Wir entwickeln kein Schema F. Wir entwickeln Ihr persönliches Ernährungskonzept.",
    images: ["https://www.sp-fitness.de/images/hero_bg_2.jpg"],
  },
};

export default function Ernaehrungsberatung() {
  return (
    <main>
      <section id="start">
        {/* Background Image */}
        <div className="hero-bg-image">
          <Image
            src="/images/hero_bg_2.jpg" 
            alt="Ernährungsberatung Background" 
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
              <h1 className="hero-fitness-title">ERNÄHRUNGSBERATUNG</h1>
              <h2 className="hero-tagline">
                Individuell, <span className="highlight-blue">alltagsnah</span><br/>und nachhaltig
              </h2>
              
              {/* Buttons */}
              <div className="hero-buttons">
                <Link href="#kontakt" className="button key hero-cta-primary">
                  <span>JETZT BERATEN LASSEN</span>
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

      {/* Intro Section with Image */}
      <section id="ernaehrungsberatung-intro">
        <div className="wrapper">
          <div className="nutrition-intro-layout">
            <FadeIn direction="right" className="nutrition-intro-content">
              <h2 className="nutrition-intro-title">Ganzheitliche Ernährungsberatung</h2>
              <p className="nutrition-intro-lead">
                Eine ausgewogene Ernährung ist weit mehr als ein kurzfristiger Trend – sie ist die Basis für Gesundheit, Energie und Wohlbefinden. Doch jeder Mensch ist einzigartig: Lebensstil, berufliche Anforderungen, Vorlieben, Unverträglichkeiten sowie körperliche Ziele unterscheiden sich.
              </p>
              <p className="nutrition-intro-text">
                Genau hier setzt unsere ganzheitliche Ernährungsberatung an. Wir entwickeln kein Schema F. Wir entwickeln Ihr persönliches Ernährungskonzept.
              </p>
            </FadeIn>
            
            <FadeIn direction="left" className="nutrition-intro-image">
              <div className="nutrition-image-wrapper">
                <Image
                  src="/images/anna-pelzer-ernaehrung.jpg"
                  alt="Ganzheitliche Ernährungsberatung"
                  fill
                  style={{objectFit: "cover"}}
                  quality={90}
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Combined Individual & Holistic Approach Section */}
      <section id="nutrition-approach">
        <div className="wrapper">
          <FadeIn direction="down">
            <div className="section-header">
              <h2 className="section-title">Individuell & Ganzheitlich</h2>
              <p className="section-subtitle">Ihr persönliches Konzept für nachhaltige Erfolge</p>
              <p className="section-intro">
                Wir entwickeln kein Schema F – wir entwickeln Ihr persönliches Ernährungskonzept. Ernährung ist nur ein Teil des Ganzen. Wir verbinden fundiertes Ernährungswissen mit einem abgestimmten Trainingskonzept, das auf Ihre körperliche Ausgangslage und Ihre Ziele zugeschnitten ist.
              </p>
            </div>
          </FadeIn>

          <div className="nutrition-approach-grid">
            {/* Individual Factors */}
            <FadeIn direction="up" delay={0.1} className="approach-card">
              <div className="approach-card-icon">
                <i className="fa-solid fa-user"></i>
              </div>
              <h3>Ihre Lebenssituation</h3>
              <p>Wir berücksichtigen Ihren Alltag, Arbeitszeiten, familiäre Situation und alle Faktoren, die Ihre Ernährung beeinflussen.</p>
            </FadeIn>

            <FadeIn direction="up" delay={0.2} className="approach-card">
              <div className="approach-card-icon">
                <i className="fa-solid fa-heart-pulse"></i>
              </div>
              <h3>Gesundheitliche Voraussetzungen</h3>
              <p>Gesundheitliche Besonderheiten, Unverträglichkeiten und medizinische Aspekte werden in Ihr Konzept integriert.</p>
            </FadeIn>

            <FadeIn direction="up" delay={0.3} className="approach-card">
              <div className="approach-card-icon">
                <i className="fa-solid fa-bullseye"></i>
              </div>
              <h3>Ihre persönlichen Ziele</h3>
              <p>Ob Gewichtsreduktion, Muskelaufbau, mehr Energie im Alltag oder Unterstützung bei Unverträglichkeiten – wir erstellen einen maßgeschneiderten Plan.</p>
            </FadeIn>

            {/* Holistic Pillars */}
            <FadeIn direction="up" delay={0.4} className="approach-card">
              <div className="approach-card-icon">
                <i className="fa-solid fa-apple-whole"></i>
              </div>
              <h3>Ernährung</h3>
              <p>Individuelle Ernährungskonzepte, die zu Ihrem Alltag passen und langfristig umsetzbar sind.</p>
            </FadeIn>

            <FadeIn direction="up" delay={0.5} className="approach-card">
              <div className="approach-card-icon">
                <i className="fa-solid fa-dumbbell"></i>
              </div>
              <h3>Bewegung & Training</h3>
              <p>Abgestimmtes Trainingskonzept, das auf Ihre körperliche Ausgangslage und Ihre Ziele zugeschnitten ist.</p>
            </FadeIn>

            <FadeIn direction="up" delay={0.6} className="approach-card">
              <div className="approach-card-icon">
                <i className="fa-solid fa-bed"></i>
              </div>
              <h3>Regeneration</h3>
              <p>Ausreichend Erholung und Regeneration für nachhaltige Erfolge und langfristige Gesundheit.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Practical Approach Section */}
      <section id="nutrition-practical">
        <div className="wrapper">
          <FadeIn direction="down">
            <div className="section-header">
              <h2 className="section-title">Alltagstauglich. Verständlich. Realistisch.</h2>
              <p className="section-subtitle">Unser Ziel ist es nicht, Ihnen perfekte Pläne vorzulegen – sondern solche, die wirklich funktionieren.</p>
            </div>
          </FadeIn>

          <div className="practical-grid">
            <FadeIn direction="up" delay={0.1} className="practical-card">
              <div className="practical-icon">
                <i className="fa-solid fa-check-circle"></i>
              </div>
              <h3>Einfache Umsetzung</h3>
              <p>Praktikable Lösungen, die sich mühelos in Ihren Tagesablauf integrieren lassen – ohne komplizierte Regeln oder starre Vorgaben.</p>
            </FadeIn>

            <FadeIn direction="up" delay={0.2} className="practical-card">
              <div className="practical-icon">
                <i className="fa-solid fa-rainbow"></i>
              </div>
              <h3>Genussvoll & vielseitig</h3>
              <p>Ernährung soll Spaß machen und schmecken. Wir zeigen Ihnen, wie vielfältig und lecker gesunde Ernährung sein kann.</p>
            </FadeIn>

            <FadeIn direction="up" delay={0.3} className="practical-card">
              <div className="practical-icon">
                <i className="fa-solid fa-calendar-check"></i>
              </div>
              <h3>Realistische Routinen</h3>
              <p>Flexible Strukturen, die zu Ihrem Leben passen und langfristig umsetzbar sind – ohne Verzicht und Verbote.</p>
            </FadeIn>

            <FadeIn direction="up" delay={0.4} className="practical-card">
              <div className="practical-icon">
                <i className="fa-solid fa-infinity"></i>
              </div>
              <h3>Langfristige Veränderungen</h3>
              <p>Wir setzen auf nachhaltige Strategien, die Sie dauerhaft begleiten und zu Ihrem neuen Lebensstil werden.</p>
            </FadeIn>
          </div>

          <FadeIn direction="up" delay={0.5}>
            <p className="practical-conclusion">
              Denn echte Erfolge entstehen dann, wenn Ernährung nicht kompliziert ist, sondern Spaß macht.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Closing Section */}
      <section id="ernaehrungsberatung-closing">
        <div className="wrapper">
          <FadeIn direction="up">
            <div className="closing-content-wrapper">
              <div className="closing-icon-container">
                <div className="closing-icon-circle">
                  <i className="fa-solid fa-apple-whole"></i>
                </div>
              </div>
              <div className="closing-content">
                <h2 className="closing-title">Ihr Weg zu mehr Energie, Leichtigkeit und Lebensqualität</h2>
                <p className="closing-text">
                  Mit unserer ganzheitlichen Ernährungsberatung erhalten Sie mehr als nur Empfehlungen: Sie bekommen verlässliche Begleitung, klar verständliche Strategien und individuelle Unterstützung, die Sie Schritt für Schritt zu Ihrem persönlichen Wohlfühlkörper führt.
                </p>
                <div className="closing-cta">
                  <Link href="#kontakt" className="button key cta-large">
                    <span>JETZT KONTAKT AUFNEHMEN</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    
    </main>
  );
}
