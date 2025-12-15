import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Yoga Nidra – SP Fitness by Sebastian Pfau | Meditation und Entspannung",
  description: "Yoga Nidra Kurs bei SP Fitness in Schwetzingen: Geführte Tiefenentspannung für Körper und Geist. Der 'Schlaf der Yogis' fördert Erholung, mentale Stärke und Wohlbefinden. Für alle Menschen geeignet.",
  keywords: "Yoga Nidra Schwetzingen, Yoga Nidra Kurs, Tiefenentspannung, Meditation, Entspannung, Schlaf der Yogis, Stressabbau, SP Fitness, Sebastian Pfau",
  openGraph: {
    title: "Yoga Nidra – SP Fitness by Sebastian Pfau",
    description: "Yoga Nidra – Meditation und Entspannung. Der 'Schlaf der Yogis' bringt Körper und Geist in einen Zustand tiefer Ruhe.",
    url: "https://www.sp-fitness.de/yoga-nidra",
    type: "website",
    images: ["https://www.sp-fitness.de/images/yoga-meditation.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yoga Nidra – SP Fitness by Sebastian Pfau",
    description: "Yoga Nidra – Meditation und Entspannung. Der 'Schlaf der Yogis' bringt Körper und Geist in einen Zustand tiefer Ruhe.",
    images: ["https://www.sp-fitness.de/images/yoga-meditation.jpg"],
  },
};

export default function YogaNidra() {
  return (
    <main>
      <section id="start">
        {/* Background Image */}
        <div className="hero-bg-image">
          <Image
            src="/images/yoga-meditation.jpg" 
            alt="Yoga Nidra Background" 
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
              <h1 className="hero-fitness-title">YOGA NIDRA</h1>
              <h2 className="hero-tagline">
                Meditation und <span className="highlight-blue">Entspannung</span><br/>für Körper und Geist
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
      <section id="yoga-nidra-intro">
        <div className="wrapper">
          <div className="yoga-intro-layout">
            <FadeIn direction="right" className="yoga-intro-content">
              <h2 className="yoga-intro-title">Yoga Nidra – Meditation und Entspannung</h2>
              <p className="yoga-intro-lead">
                Yoga Nidra, auch „Schlaf der Yogis" genannt, ist eine geführte Tiefenentspannung, die Körper und Geist in einen Zustand tiefer Ruhe bringt. Während der Körper vollständig loslassen darf, bleibt der Geist wach und zugleich entspannt.
              </p>
              <p className="yoga-intro-text">
                Yoga Nidra eignet sich für alle Menschen, unabhängig von körperlicher Fitness oder Yoga-Erfahrung. Die Praxis fördert Erholung, mentale Stärke und wirkt sich positiv auf Schlaf, Stressverarbeitung und allgemeines Wohlbefinden aus – ein wertvoller Ausgleich im anspruchsvollen Alltag.
              </p>
            </FadeIn>
            
            <FadeIn direction="left" className="yoga-intro-image">
              <div className="yoga-image-wrapper">
                <Image
                  src="/images/yoga-meditation.jpg"
                  alt="Yoga Nidra Praxis"
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
      <section id="warum-yoga-nidra">
        <div className="wrapper">
          <FadeIn direction="down">
            <h2 className="section-title">Yoga Nidra ist ideal für dich, wenn du…</h2>
          </FadeIn>
          
          <div className="features-grid">
            <FadeIn className="feature-card" delay={0.1}>
              <div className="feature-icon-wrapper">
                <div className="feature-icon-circle">
                  <i className="fa-solid fa-moon"></i>
                </div>
              </div>
              <h4>Tiefe Entspannung und Erholung suchst</h4>
              <p>Yoga Nidra führt dich in einen Zustand tiefer Ruhe, der erholsamer ist als normaler Schlaf. Körper und Geist können vollständig loslassen und neue Energie tanken.</p>
            </FadeIn>

            <FadeIn className="feature-card" delay={0.2}>
              <div className="feature-icon-wrapper">
                <div className="feature-icon-circle">
                  <i className="fa-solid fa-bed"></i>
                </div>
              </div>
              <h4>Deinen Schlaf verbessern möchtest</h4>
              <p>Die regelmäßige Praxis von Yoga Nidra wirkt sich positiv auf deine Schlafqualität aus. Du findest leichter in den Schlaf und erholst dich nachts besser.</p>
            </FadeIn>

            <FadeIn className="feature-card" delay={0.3}>
              <div className="feature-icon-wrapper">
                <div className="feature-icon-circle">
                  <i className="fa-solid fa-brain"></i>
                </div>
              </div>
              <h4>Stress abbauen und mentale Stärke entwickeln willst</h4>
              <p>Yoga Nidra hilft dir, Stress besser zu verarbeiten und mentale Klarheit zu gewinnen. Du lernst, in herausfordernden Situationen gelassener zu bleiben.</p>
            </FadeIn>

            <FadeIn className="feature-card" delay={0.4}>
              <div className="feature-icon-wrapper">
                <div className="feature-icon-circle">
                  <i className="fa-solid fa-heart-pulse"></i>
                </div>
              </div>
              <h4>Einen Ausgleich zum anspruchsvollen Alltag brauchst</h4>
              <p>In unserem Kurs findest du einen geschützten Raum der Ruhe, der dir hilft, wieder zu dir selbst zu finden und dein inneres Gleichgewicht zu stärken – unabhängig von körperlicher Fitness oder Yoga-Erfahrung.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section id="yoga-nidra-closing">
        <div className="wrapper">
          <FadeIn direction="up">
            <div className="closing-content-wrapper">
              <div className="closing-icon-container">
                <div className="closing-icon-circle">
                  <i className="fa-solid fa-moon"></i>
                </div>
              </div>
              <div className="closing-content">
                <h2 className="closing-title">Finde Ruhe und Erholung mit Yoga Nidra</h2>
                <p className="closing-text">
                  Entdecke die Kraft der Tiefenentspannung und schenke dir regelmäßig einen Moment der Stille. Yoga Nidra ist für alle Menschen geeignet und bietet dir einen wertvollen Ausgleich im anspruchsvollen Alltag. Komm vorbei und erlebe, wie gut dir diese Praxis tut.
                </p>
                <div className="closing-cta">
                  <Link href="#kontakt" className="button key cta-large">
                    <span>Jetzt kostenfreien Termin sichern</span>
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


