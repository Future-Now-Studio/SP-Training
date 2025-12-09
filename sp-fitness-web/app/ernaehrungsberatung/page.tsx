import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import TrainerTeaser from "@/components/TrainerTeaser";

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
                  src="/images/studio.jpg"
                  alt="Ernährungsberatung"
                  fill
                  style={{objectFit: "cover"}}
                  quality={90}
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Individual Approach Section */}
      <section id="nutrition-individual">
        <div className="wrapper">
          <FadeIn direction="down">
            <div className="section-header">
              <h2 className="section-title">Individuell statt pauschal</h2>
              <p className="section-subtitle">Ernährung, die wirklich zu Ihnen passt</p>
              <p className="section-intro">
                Unser Ansatz beginnt immer mit Ihnen. Wir entwickeln kein Schema F – wir entwickeln Ihr persönliches Ernährungskonzept.
              </p>
            </div>
          </FadeIn>

          <div className="nutrition-approach-list">
            <FadeIn direction="right" delay={0.1} className="nutrition-approach-item">
              <div className="approach-item-content">
                <div className="approach-icon-wrapper">
                  <div className="approach-icon">
                    <i className="fa-solid fa-user"></i>
                  </div>
                </div>
                <div className="approach-text">
                  <h3>Ihre Lebenssituation</h3>
                  <p>Wir berücksichtigen Ihren Alltag, Arbeitszeiten, familiäre Situation und alle Faktoren, die Ihre Ernährung beeinflussen.</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.2} className="nutrition-approach-item">
              <div className="approach-item-content">
                <div className="approach-icon-wrapper">
                  <div className="approach-icon">
                    <i className="fa-solid fa-heart-pulse"></i>
                  </div>
                </div>
                <div className="approach-text">
                  <h3>Gesundheitliche Voraussetzungen</h3>
                  <p>Gesundheitliche Besonderheiten, Unverträglichkeiten und medizinische Aspekte werden in Ihr Konzept integriert.</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.3} className="nutrition-approach-item">
              <div className="approach-item-content">
                <div className="approach-icon-wrapper">
                  <div className="approach-icon">
                    <i className="fa-solid fa-utensils"></i>
                  </div>
                </div>
                <div className="approach-text">
                  <h3>Ihre Ernährungsgewohnheiten</h3>
                  <p>Wir schauen auf das, was bereits gut funktioniert, und integrieren es in Ihren individuellen Plan.</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.4} className="nutrition-approach-item">
              <div className="approach-item-content">
                <div className="approach-icon-wrapper">
                  <div className="approach-icon">
                    <i className="fa-solid fa-clock"></i>
                  </div>
                </div>
                <div className="approach-text">
                  <h3>Zeitliche Möglichkeiten</h3>
                  <p>Realistische Zeitpläne, die zu Ihrem Leben passen – ohne Stress und Überforderung.</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.5} className="nutrition-approach-item">
              <div className="approach-item-content">
                <div className="approach-icon-wrapper">
                  <div className="approach-icon">
                    <i className="fa-solid fa-bullseye"></i>
                  </div>
                </div>
                <div className="approach-text">
                  <h3>Ihre persönlichen Ziele</h3>
                  <p>Ob Gewichtsreduktion, Muskelaufbau, mehr Energie im Alltag oder Unterstützung bei Unverträglichkeiten – wir erstellen einen maßgeschneiderten Plan, der zu Ihrem Alltag passt und langfristig umsetzbar ist.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Holistic Approach Section */}
      <section id="nutrition-holistic">
        <div className="wrapper">
          <div className="holistic-layout">
            <FadeIn direction="right" className="holistic-content">
              <h2 className="section-title">Ganzheitlich denken – nachhaltige Erfolge erleben</h2>
              <p className="holistic-text">
                Ernährung ist nur ein Teil des Ganzen. Wir verbinden fundiertes Ernährungswissen mit einem abgestimmtem Trainingskonzept, das auf Ihre körperliche Ausgangslage und Ihre Ziele zugeschnitten ist. So entsteht ein Rundum-Programm, das alle relevanten Bereiche berücksichtigt.
              </p>
              <p className="holistic-conclusion">
                Dieses Zusammenspiel sorgt dafür, dass Veränderungen nicht nur spürbar, sondern dauerhaft sind.
              </p>
            </FadeIn>

            <FadeIn direction="left" className="holistic-pillars">
              <div className="pillar-item">
                <div className="pillar-icon">
                  <i className="fa-solid fa-apple-whole"></i>
                </div>
                <h4>Ernährung</h4>
              </div>
              <div className="pillar-item">
                <div className="pillar-icon">
                  <i className="fa-solid fa-dumbbell"></i>
                </div>
                <h4>Bewegung & Training</h4>
              </div>
              <div className="pillar-item">
                <div className="pillar-icon">
                  <i className="fa-solid fa-bed"></i>
                </div>
                <h4>Regeneration</h4>
              </div>
              <div className="pillar-item">
                <div className="pillar-icon">
                  <i className="fa-solid fa-repeat"></i>
                </div>
                <h4>Routinen</h4>
              </div>
              <div className="pillar-item">
                <div className="pillar-icon">
                  <i className="fa-solid fa-brain"></i>
                </div>
                <h4>Mindset</h4>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section id="nutrition-training">
        <div className="wrapper">
          <div className="training-layout">
            <FadeIn direction="right" className="training-image">
              <div className="training-image-wrapper">
                <Image
                  src="/images/VG8_4216.jpg"
                  alt="Training"
                  fill
                  style={{objectFit: "cover"}}
                  quality={90}
                />
              </div>
            </FadeIn>

            <FadeIn direction="left" className="training-content">
              <h2 className="section-title">Training abgestimmt auf Ihren Lebensstil</h2>
              <p className="training-text">
                Ihr Körper ist einzigartig – und Ihr Training sollte es auch sein. Ob im Fitnessstudio, zu Hause oder unterwegs: Wir entwickeln ein effektives Trainingsprogramm, das sich flexibel in Ihren Alltag integrieren lässt.
              </p>
              <div className="training-points">
                <div className="training-point">
                  <i className="fa-solid fa-check"></i>
                  <span>Ihre körperliche Fitness</span>
                </div>
                <div className="training-point">
                  <i className="fa-solid fa-check"></i>
                  <span>Ihre Ziele (Abnehmen, Straffen, Aufbau, Leistung)</span>
                </div>
                <div className="training-point">
                  <i className="fa-solid fa-check"></i>
                  <span>Mögliche Einschränkungen</span>
                </div>
                <div className="training-point">
                  <i className="fa-solid fa-check"></i>
                  <span>Ihre verfügbaren Trainingsmöglichkeiten</span>
                </div>
              </div>
              <p className="training-conclusion">
                So wird Training nicht zur Belastung, sondern zu einem festen, motivierenden Bestandteil Ihres Lebens.
              </p>
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
            <div className="content closing-content">
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
          </FadeIn>
        </div>
      </section>

      {/* Trainer Teaser */}
      <TrainerTeaser />
    
    </main>
  );
}
