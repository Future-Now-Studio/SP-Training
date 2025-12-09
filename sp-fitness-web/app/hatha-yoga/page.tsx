import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import TrainerTeaser from "@/components/TrainerTeaser";

export const metadata: Metadata = {
  title: "Hatha Yoga – SP Fitness by Sebastian Pfau | Balance, Kraft und innere Ruhe",
  description: "Hatha Yoga Kurs bei SP Fitness in Schwetzingen: Zeit für Balance, Kraft und innere Ruhe. Sanfte bis kraftvolle Körperhaltungen, bewusste Atemtechniken und Meditation. Für Einsteiger*innen und erfahrene Yogis.",
  keywords: "Hatha Yoga Schwetzingen, Yoga Kurs, Yoga Training, Asanas, Pranayama, Meditation, Balance, Entspannung, SP Fitness, Sebastian Pfau",
  openGraph: {
    title: "Hatha Yoga – SP Fitness by Sebastian Pfau",
    description: "Hatha Yoga – Zeit für Balance, Kraft und innere Ruhe. Unser Hatha-Yoga-Kurs lädt dich ein, einen Moment aus dem Alltag auszusteigen und ganz bei dir selbst anzukommen.",
    url: "https://www.sp-fitness.de/hatha-yoga",
    type: "website",
    images: ["https://www.sp-fitness.de/images/Placeholder-Yoga.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hatha Yoga – SP Fitness by Sebastian Pfau",
    description: "Hatha Yoga – Zeit für Balance, Kraft und innere Ruhe. Unser Hatha-Yoga-Kurs lädt dich ein, einen Moment aus dem Alltag auszusteigen und ganz bei dir selbst anzukommen.",
    images: ["https://www.sp-fitness.de/images/Placeholder-Yoga.jpg"],
  },
};

export default function HathaYoga() {
  return (
    <main>
      <section id="start">
        {/* Background Image */}
        <div className="hero-bg-image">
          <Image
            src="/images/Placeholder-Yoga.jpg" 
            alt="Hatha Yoga Background" 
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
              <h1 className="hero-fitness-title">HATHA YOGA</h1>
              <h2 className="hero-tagline">
                Zeit für <span className="highlight-blue">Balance</span>, Kraft<br/>und innere Ruhe
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
      <section id="hatha-yoga-intro">
        <div className="wrapper">
          <div className="yoga-intro-layout">
            <FadeIn direction="right" className="yoga-intro-content">
              <h2 className="yoga-intro-title">Hatha Yoga – Zeit für Balance, Kraft und innere Ruhe</h2>
              <p className="yoga-intro-lead">
                Unser Hatha-Yoga-Kurs lädt dich ein, einen Moment aus dem Alltag auszusteigen und ganz bei dir selbst anzukommen. In einer ruhigen, achtsamen Atmosphäre lernst du die traditionelle Form des Yoga kennen, die Körper, Geist und Atmung in harmonischen Einklang bringt.
              </p>
              <p className="yoga-intro-text">
                Mit sanften bis kraftvollen Körperhaltungen (Asanas), bewussten Atemtechniken (Pranayama) und kleinen Meditationseinheiten fördern wir gemeinsam deine Beweglichkeit, kräftigen dein Muskelkorsett und schenken deinem Geist neue Klarheit. Der Kurs eignet sich sowohl für Einsteiger*innen als auch für erfahrene Yoga-Praktizierende – jede Übung kann individuell angepasst werden, sodass du stets in deinem eigenen Tempo praktizierst.
              </p>
            </FadeIn>
            
            <FadeIn direction="left" className="yoga-intro-image">
              <div className="yoga-image-wrapper">
                <Image
                  src="/images/Pilates.jpg"
                  alt="Yoga Praxis"
                  fill
                  style={{objectFit: "cover"}}
                  quality={90}
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section id="yoga-pillars">
        <div className="wrapper">
          <FadeIn direction="down">
            <h2 className="yoga-pillars-title">Die drei Säulen des Hatha Yoga</h2>
          </FadeIn>

          <div className="yoga-pillars-grid">
            <FadeIn direction="up" delay={0.1} className="yoga-pillar-card">
              <div className="pillar-image-container">
                <Image
                  src="/images/yoga-asanas.jpg"
                  alt="Asanas - Körperhaltungen"
                  fill
                  style={{objectFit: "cover"}}
                  quality={90}
                />
              </div>
              <div className="pillar-content">
                <div className="pillar-icon-large">
                  <i className="fa-solid fa-spa"></i>
                </div>
                <h3>Asanas</h3>
                <p className="pillar-subtitle">Körperhaltungen</p>
                <p className="pillar-description">Sanfte bis kraftvolle Körperhaltungen für Beweglichkeit und Stärke. Jede Position wird achtsam ausgeführt und kann individuell angepasst werden.</p>
              </div>
            </FadeIn>
              
            <FadeIn direction="up" delay={0.2} className="yoga-pillar-card">
              <div className="pillar-image-container">
                <Image
                  src="/images/hero_bg_2.jpg"
                  alt="Pranayama - Atemtechniken"
                  fill
                  style={{objectFit: "cover"}}
                  quality={90}
                />
              </div>
              <div className="pillar-content">
                <div className="pillar-icon-large">
                  <i className="fa-solid fa-wind"></i>
                </div>
                <h3>Pranayama</h3>
                <p className="pillar-subtitle">Atemtechniken</p>
                <p className="pillar-description">Bewusste Atemführung für neue Energie und Klarheit. Du lernst, deinen Atem zu steuern und dadurch dein Wohlbefinden zu steigern.</p>
              </div>
            </FadeIn>
              
            <FadeIn direction="up" delay={0.3} className="yoga-pillar-card">
              <div className="pillar-image-container">
                <Image
                  src="/images/yoga-meditation.jpg"
                  alt="Meditation"
                  fill
                  style={{objectFit: "cover"}}
                  quality={90}
                />
              </div>
              <div className="pillar-content">
                <div className="pillar-icon-large">
                  <i className="fa-solid fa-om"></i>
                </div>
                <h3>Meditation</h3>
                <p className="pillar-subtitle">Innere Ruhe</p>
                <p className="pillar-description">Kleine Meditationseinheiten für innere Ruhe und Balance. Ein geschützter Raum, in dem du ganz bei dir sein kannst.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="warum-hatha-yoga">
        <div className="wrapper">
          <FadeIn direction="down">
            <h2 className="section-title">Hatha Yoga ist ideal, wenn du…</h2>
          </FadeIn>
          
          <div className="features-grid">
            <FadeIn className="feature-card" delay={0.1}>
              <div className="feature-icon-wrapper">
                <div className="feature-icon-circle">
                  <i className="fa-solid fa-leaf"></i>
                </div>
              </div>
              <h4>Stress abbauen und zur Ruhe kommen möchtest</h4>
              <p>Yoga hilft dir, den Alltagsstress hinter dir zu lassen und einen Moment der Stille zu finden. Durch bewusste Atmung und achtsame Bewegungen kommst du zur Ruhe und findest neue Gelassenheit.</p>
            </FadeIn>

            <FadeIn className="feature-card" delay={0.2}>
              <div className="feature-icon-wrapper">
                <div className="feature-icon-circle">
                  <i className="fa-solid fa-dumbbell"></i>
                </div>
              </div>
              <h4>Deinen Körper stärken und gleichzeitig flexibler werden willst</h4>
              <p>Hatha Yoga verbindet Kraftaufbau mit Beweglichkeit. Du stärkst deine Muskulatur und verbesserst gleichzeitig deine Flexibilität – ein ganzheitlicher Ansatz für einen gesunden, beweglichen Körper.</p>
            </FadeIn>

            <FadeIn className="feature-card" delay={0.3}>
              <div className="feature-icon-wrapper">
                <div className="feature-icon-circle">
                  <i className="fa-solid fa-wind"></i>
                </div>
              </div>
              <h4>Bewusster atmen und dich mit neuer Energie aufladen möchtest</h4>
              <p>Pranayama, die bewusste Atemführung, ist ein zentraler Bestandteil des Hatha Yoga. Du lernst, deinen Atem zu steuern und dadurch neue Energie zu tanken und dein Wohlbefinden zu steigern.</p>
            </FadeIn>

            <FadeIn className="feature-card" delay={0.4}>
              <div className="feature-icon-wrapper">
                <div className="feature-icon-circle">
                  <i className="fa-solid fa-heart"></i>
                </div>
              </div>
              <h4>Eine achtsame Auszeit nur für dich suchst</h4>
              <p>In unserem Kurs findest du einen geschützten Raum, in dem du ganz bei dir sein kannst. Eine wertvolle Auszeit vom Alltag, die dir hilft, wieder zu dir selbst zu finden und dein inneres Gleichgewicht zu stärken.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section id="hatha-yoga-closing">
        <div className="wrapper">
          <FadeIn direction="up">
            <div className="closing-content-wrapper">
              <div className="closing-icon-container">
                <div className="closing-icon-circle">
                  <i className="fa-solid fa-spa"></i>
                </div>
              </div>
              <div className="closing-content">
                <h2 className="closing-title">Entdecke, wie gut Yoga dir tut</h2>
                <p className="closing-text">
                  Freue dich auf wohltuende Stunden, die dir helfen, Gelassenheit zu finden, deine Körperwahrnehmung zu vertiefen und dein inneres Gleichgewicht nachhaltig zu stärken. Komm vorbei, atme tief durch – und entdecke, wie gut Yoga dir tut.
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
