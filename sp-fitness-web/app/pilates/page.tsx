import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import TrainerTeaser from "@/components/TrainerTeaser";

export const metadata: Metadata = {
  title: "Pilates – SP Fitness by Sebastian Pfau | Starke Mitte, geschmeidiger Körper, klarer Geist",
  description: "Pilates Kurs bei SP Fitness in Schwetzingen: Ganzheitliches Training für starke Körpermitte, bessere Haltung und neues Körpergefühl. Präzise Bewegungen, bewusste Atmung. Für alle Fitnesslevel.",
  keywords: "Pilates Schwetzingen, Pilates Kurs, Pilates Training, Rumpfmuskulatur, Körperhaltung, Beweglichkeit, SP Fitness, Sebastian Pfau",
  openGraph: {
    title: "Pilates – SP Fitness by Sebastian Pfau",
    description: "Pilates – Starke Mitte, geschmeidiger Körper, klarer Geist. Unser Pilates-Kurs bietet dir ein ganzheitliches Training, das deine Körpermitte stärkt.",
    url: "https://www.sp-fitness.de/pilates",
    type: "website",
    images: ["https://www.sp-fitness.de/images/Pilates.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pilates – SP Fitness by Sebastian Pfau",
    description: "Pilates – Starke Mitte, geschmeidiger Körper, klarer Geist. Unser Pilates-Kurs bietet dir ein ganzheitliches Training, das deine Körpermitte stärkt.",
    images: ["https://www.sp-fitness.de/images/Pilates.jpg"],
  },
};

export default function Pilates() {
  return (
    <main>
      <section id="start">
        {/* Background Image */}
        <div className="hero-bg-image">
          <Image
            src="/images/Pilates.jpg" 
            alt="Pilates Background" 
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
              <h1 className="hero-fitness-title">PILATES</h1>
              <h2 className="hero-tagline">
                Starke Mitte, <span className="highlight-blue">geschmeidiger</span> Körper<br/>und klarer Geist
              </h2>
              
              {/* Buttons */}
              <div className="hero-buttons">
                <Link href="#kontakt" className="button key hero-cta-primary">
                  <span>JETZT MITMACHEN</span>
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
      <section id="pilates-intro">
        <div className="wrapper">
          <div className="yoga-intro-layout">
            <FadeIn direction="right" className="yoga-intro-content">
              <h2 className="yoga-intro-title">Pilates – Starke Mitte, geschmeidiger Körper, klarer Geist</h2>
              <p className="yoga-intro-lead">
                Unser Pilates-Kurs bietet dir ein ganzheitliches Training, das deine Körpermitte stärkt, deine Haltung verbessert und dir ein neues Körpergefühl schenkt. Mit präzisen, kontrollierten Bewegungen und bewusster Atmung trainieren wir die tief liegenden Muskeln, die für Stabilität, Balance und eine gesunde Körperhaltung verantwortlich sind.
              </p>
              <p className="yoga-intro-text">
                Pilates eignet sich für jedes Fitnesslevel. Egal, ob du gerade erst beginnst oder bereits Erfahrung mitbringst – alle Übungen lassen sich individuell anpassen, sodass du sicher und effektiv in deinem eigenen Tempo trainierst. Durch die Kombination aus Kraft, Beweglichkeit und Körperbewusstsein ist Pilates ideal, um Verspannungen zu lösen, Rückenschmerzen vorzubeugen und deinen Körper nachhaltig zu stärken.
              </p>
            </FadeIn>
            
            <FadeIn direction="left" className="yoga-intro-image">
              <div className="yoga-image-wrapper">
                <Image
                  src="/images/Pilates.jpg"
                  alt="Pilates Praxis"
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
      <section id="warum-pilates">
        <div className="wrapper">
          <FadeIn direction="down">
            <h2 className="section-title">Pilates ist perfekt für dich, wenn du…</h2>
          </FadeIn>
          
          <div className="features-grid">
            <FadeIn className="feature-card" delay={0.1}>
              <div className="feature-icon-wrapper">
                <div className="feature-icon-circle">
                  <i className="fa-solid fa-dumbbell"></i>
                </div>
              </div>
              <h4>deine Rumpfmuskulatur kräftigen und eine bessere Haltung entwickeln möchtest</h4>
              <p>Pilates zielt gezielt auf die tief liegenden Muskeln deiner Körpermitte ab. Durch kontrollierte Bewegungen stärkst du deine Core-Muskulatur und entwickelst eine aufrechte, gesunde Haltung, die dir im Alltag mehr Stabilität und Selbstvertrauen gibt.</p>
            </FadeIn>

            <FadeIn className="feature-card" delay={0.2}>
              <div className="feature-icon-wrapper">
                <div className="feature-icon-circle">
                  <i className="fa-solid fa-shield-heart"></i>
                </div>
              </div>
              <h4>ein gelenkschonendes, effektives Training suchst</h4>
              <p>Pilates ist sanft zu deinen Gelenken und dennoch hoch effektiv. Die kontrollierten, fließenden Bewegungen schonen deine Gelenke, während sie gleichzeitig deine Muskulatur gezielt stärken und deinen Körper formen.</p>
            </FadeIn>

            <FadeIn className="feature-card" delay={0.3}>
              <div className="feature-icon-wrapper">
                <div className="feature-icon-circle">
                  <i className="fa-solid fa-person-walking"></i>
                </div>
              </div>
              <h4>deine Beweglichkeit steigern und Verspannungen reduzieren willst</h4>
              <p>Durch die Kombination aus Dehnung und Kräftigung verbessert Pilates deine Beweglichkeit nachhaltig. Die präzisen Bewegungen lösen Verspannungen, besonders im Rücken- und Nackenbereich, und schenken dir mehr Leichtigkeit im Alltag.</p>
            </FadeIn>

            <FadeIn className="feature-card" delay={0.4}>
              <div className="feature-icon-wrapper">
                <div className="feature-icon-circle">
                  <i className="fa-solid fa-brain"></i>
                </div>
              </div>
              <h4>Körper und Geist in harmonischer Verbindung trainieren möchtest</h4>
              <p>Pilates verbindet körperliches Training mit mentaler Achtsamkeit. Durch bewusste Atmung und präzise Bewegungen trainierst du nicht nur deinen Körper, sondern schärfst auch dein Körperbewusstsein und findest innere Ruhe.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section id="pilates-closing">
        <div className="wrapper">
          <FadeIn direction="up">
            <div className="closing-content-wrapper">
              <div className="closing-icon-container">
                <div className="closing-icon-circle">
                  <i className="fa-solid fa-circle-nodes"></i>
                </div>
              </div>
              <div className="closing-content">
                <h2 className="closing-title">Entdecke, wie viel Energie und Leichtigkeit in dir steckt</h2>
                <p className="closing-text">
                  Freue dich auf ein professionell begleitetes Training, das dich rundum stärkt, deine Körperwahrnehmung verfeinert und dir ein gutes Gefühl in deinem Körper zurückgibt. Entdecke, wie viel Energie und Leichtigkeit in dir steckt – mit Pilates.
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

      {/* Trainer Teaser */}
      <TrainerTeaser />
    
    </main>
  );
}

