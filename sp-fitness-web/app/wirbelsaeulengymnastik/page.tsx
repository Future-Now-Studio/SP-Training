import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Wirbelsäulengymnastik – SP Fitness by Sebastian Pfau | Sanft stärken, beweglich bleiben, wohlfühlen",
  description: "Wirbelsäulengymnastik Kurs bei SP Fitness in Schwetzingen: Sanfte Kräftigung, gezielte Mobilisation und wohltuende Dehnübungen für einen gesunden Rücken. Ideal für alle Altersklassen und Fitnesslevel.",
  keywords: "Wirbelsäulengymnastik Schwetzingen, Rückentraining, Rückenübungen, Wirbelsäule, Rückengesundheit, Beweglichkeit, SP Fitness, Sebastian Pfau",
  openGraph: {
    title: "Wirbelsäulengymnastik – SP Fitness by Sebastian Pfau",
    description: "Wirbelsäulengymnastik – Sanft stärken, beweglich bleiben, wohlfühlen. Unser Kurs ist der perfekte Kurs für alle, die ihrem Rücken etwas Gutes tun möchten.",
    url: "https://www.sp-fitness.de/wirbelsaeulengymnastik",
    type: "website",
    images: ["https://www.sp-fitness.de/images/Pilates.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wirbelsäulengymnastik – SP Fitness by Sebastian Pfau",
    description: "Wirbelsäulengymnastik – Sanft stärken, beweglich bleiben, wohlfühlen. Unser Kurs ist der perfekte Kurs für alle, die ihrem Rücken etwas Gutes tun möchten.",
    images: ["https://www.sp-fitness.de/images/Pilates.jpg"],
  },
};

export default function Wirbelsaeulengymnastik() {
  return (
    <main>
      <section id="start">
        {/* Background Image */}
        <div className="hero-bg-image">
          <Image
            src="/images/Pilates.jpg" 
            alt="Wirbelsäulengymnastik Background" 
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
              <h1 className="hero-fitness-title">WIRBELSÄULENGYMNASTIK</h1>
              <h2 className="hero-tagline">
                Sanft stärken, <span className="highlight-blue">beweglich</span> bleiben<br/>und wohlfühlen
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
      <section id="wirbelsaeulengymnastik-intro">
        <div className="wrapper">
          <div className="yoga-intro-layout">
            <FadeIn direction="right" className="yoga-intro-content">
              <h2 className="yoga-intro-title">Wirbelsäulengymnastik – Sanft stärken, beweglich bleiben, wohlfühlen</h2>
              <p className="yoga-intro-lead">
                Unsere Wirbelsäulengymnastik ist der perfekte Kurs für alle, die ihrem Rücken etwas Gutes tun möchten – sanft, effektiv und nachhaltig.
              </p>
              <p className="yoga-intro-text">
                Mit gezielten Übungen kräftigen wir den gesamten Körper leicht, mobilisieren die Wirbelsäule und dehnen verspannte Muskelgruppen. Das Ergebnis: weniger Beschwerden, mehr Bewegungsfreiheit und ein besseres Körpergefühl im Alltag.
              </p>
            </FadeIn>
            
            <FadeIn direction="left" className="yoga-intro-image">
              <div className="yoga-image-wrapper">
                <Image
                  src="/images/Pilates.jpg"
                  alt="Wirbelsäulengymnastik Praxis"
                  fill
                  style={{objectFit: "cover"}}
                  quality={90}
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section id="was-dich-erwartet">
        <div className="wrapper">
          <FadeIn direction="down">
            <div className="section-header">
              <h2 className="section-title">Was dich im Kurs erwartet</h2>
              <p className="section-subtitle">Die Wirbelsäule ist das zentrale Stützsystem unseres Körpers</p>
              <p className="section-intro">
                Deshalb konzentrieren wir uns im Training auf Bewegungen, die deine Rückengesundheit fördern, ohne zu überfordern:
              </p>
            </div>
          </FadeIn>

          <div className="yoga-pillars-grid">
            <FadeIn direction="up" delay={0.1} className="yoga-pillar-card">
              <div className="pillar-image-container">
                <Image
                  src="/images/Pilates.jpg"
                  alt="Sanfte Kräftigung"
                  fill
                  style={{objectFit: "cover"}}
                  quality={90}
                />
              </div>
              <div className="pillar-content">
                <div className="pillar-icon-large">
                  <i className="fa-solid fa-dumbbell"></i>
                </div>
                <h3>Sanfte Kräftigung</h3>
                <p className="pillar-subtitle">Stabilität und Haltung</p>
                <p className="pillar-description">Durch kontrollierte Übungen werden die wichtigen Haltemuskeln rund um Rücken, Bauch und Beckenboden gestärkt – für mehr Stabilität und eine aufrechte Körperhaltung.</p>
              </div>
            </FadeIn>
              
            <FadeIn direction="up" delay={0.2} className="yoga-pillar-card">
              <div className="pillar-image-container">
                <Image
                  src="/images/Pilates.jpg"
                  alt="Gezielte Mobilisation"
                  fill
                  style={{objectFit: "cover"}}
                  quality={90}
                />
              </div>
              <div className="pillar-content">
                <div className="pillar-icon-large">
                  <i className="fa-solid fa-arrows-rotate"></i>
                </div>
                <h3>Gezielte Mobilisation</h3>
                <p className="pillar-subtitle">Beweglichkeit fördern</p>
                <p className="pillar-description">Geschmeidige Gelenke und eine bewegliche Wirbelsäule sind entscheidend für einen gesunden Rücken. Wir lösen Blockaden, verbessern die Beweglichkeit und fördern eine leichte, natürliche Dynamik im Alltag.</p>
              </div>
            </FadeIn>
              
            <FadeIn direction="up" delay={0.3} className="yoga-pillar-card">
              <div className="pillar-image-container">
                <Image
                  src="/images/Pilates.jpg"
                  alt="Wohltuende Dehnübungen"
                  fill
                  style={{objectFit: "cover"}}
                  quality={90}
                />
              </div>
              <div className="pillar-content">
                <div className="pillar-icon-large">
                  <i className="fa-solid fa-spa"></i>
                </div>
                <h3>Wohltuende Dehnübungen</h3>
                <p className="pillar-subtitle">Flexibilität und Balance</p>
                <p className="pillar-description">Verspannte Muskulatur wird schonend gedehnt, um Schmerzen vorzubeugen und Wohlbefinden zu fördern. So gelangst du zu mehr Flexibilität und Körperbalance.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="warum-wirbelsaeulengymnastik">
        <div className="wrapper">
          <FadeIn direction="down">
            <h2 className="section-title">Wirbelsäulengymnastik tut so gut, da es hilft...</h2>
          </FadeIn>
          
          <div className="features-grid">
            <FadeIn className="feature-card" delay={0.1}>
              <div className="feature-icon-wrapper">
                <div className="feature-icon-circle">
                  <i className="fa-solid fa-balance-scale"></i>
                </div>
              </div>
              <h4>muskuläre Dysbalancen auszugleichen</h4>
              <p>Durch gezielte Übungen werden Ungleichgewichte in der Muskulatur ausgeglichen, was zu einer harmonischeren Körperhaltung und weniger Beschwerden führt.</p>
            </FadeIn>

            <FadeIn className="feature-card" delay={0.2}>
              <div className="feature-icon-wrapper">
                <div className="feature-icon-circle">
                  <i className="fa-solid fa-shield-heart"></i>
                </div>
              </div>
              <h4>Rückenbeschwerden vorzubeugen oder zu reduzieren</h4>
              <p>Die sanften, gezielten Bewegungen stärken die Rückenmuskulatur und helfen dabei, Beschwerden zu lindern oder gar nicht erst entstehen zu lassen.</p>
            </FadeIn>

            <FadeIn className="feature-card" delay={0.3}>
              <div className="feature-icon-wrapper">
                <div className="feature-icon-circle">
                  <i className="fa-solid fa-person-walking"></i>
                </div>
              </div>
              <h4>die Körperhaltung zu verbessern</h4>
              <p>Durch das Training der Haltemuskulatur entwickelst du eine aufrechte, gesunde Körperhaltung, die dir im Alltag mehr Stabilität und Selbstvertrauen gibt.</p>
            </FadeIn>

            <FadeIn className="feature-card" delay={0.4}>
              <div className="feature-icon-wrapper">
                <div className="feature-icon-circle">
                  <i className="fa-solid fa-wind"></i>
                </div>
              </div>
              <h4>stressbedingte Verspannungen zu lösen</h4>
              <p>Die wohltuenden Dehnübungen und sanften Bewegungen helfen dabei, Verspannungen zu lösen, die durch Stress oder einseitige Belastungen entstanden sind.</p>
            </FadeIn>

            <FadeIn className="feature-card" delay={0.5}>
              <div className="feature-icon-wrapper">
                <div className="feature-icon-circle">
                  <i className="fa-solid fa-heart-pulse"></i>
                </div>
              </div>
              <h4>Beweglichkeit und Körperwahrnehmung zu fördern</h4>
              <p>Du trainierst in einem ruhigen, angenehmen Tempo – perfekt geeignet für jedes Alter und jedes Fitnesslevel. So verbesserst du nicht nur deine Beweglichkeit, sondern auch dein Körperbewusstsein.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section id="fuer-wen-geeignet">
        <div className="wrapper">
          <FadeIn direction="down">
            <h2 className="section-title">Für wen ist dieser Kurs geeignet?</h2>
          </FadeIn>
          
          <div className="features-grid">
            <FadeIn className="feature-card" delay={0.1}>
              <div className="feature-icon-wrapper">
                <div className="feature-icon-circle">
                  <i className="fa-solid fa-users"></i>
                </div>
              </div>
              <h4>Für Einsteiger sowie Trainingsgewohnte</h4>
              <p>Der Kurs eignet sich für alle, unabhängig von ihrem Fitnesslevel. Alle Übungen können individuell angepasst werden, sodass jeder in seinem eigenen Tempo trainieren kann.</p>
            </FadeIn>

            <FadeIn className="feature-card" delay={0.2}>
              <div className="feature-icon-wrapper">
                <div className="feature-icon-circle">
                  <i className="fa-solid fa-chair"></i>
                </div>
              </div>
              <h4>Für Menschen mit sitzender Tätigkeit</h4>
              <p>Besonders ideal für alle, die viel sitzen. Die Übungen helfen dabei, die Folgen langer Sitzzeiten auszugleichen und den Rücken zu entlasten.</p>
            </FadeIn>

            <FadeIn className="feature-card" delay={0.3}>
              <div className="feature-icon-wrapper">
                <div className="feature-icon-circle">
                  <i className="fa-solid fa-heart"></i>
                </div>
              </div>
              <h4>Für alle, die Rückenbeschwerden vorbeugen möchten</h4>
              <p>Prävention ist das beste Mittel gegen Rückenprobleme. Mit regelmäßigem Training stärkst du deinen Rücken nachhaltig und beugst Beschwerden vor.</p>
            </FadeIn>

            <FadeIn className="feature-card" delay={0.4}>
              <div className="feature-icon-wrapper">
                <div className="feature-icon-circle">
                  <i className="fa-solid fa-hand-holding-heart"></i>
                </div>
              </div>
              <h4>Für Personen, die sanft und sicher ihren Körper stärken wollen</h4>
              <p>Wenn du ein schonendes, aber effektives Training suchst, bist du hier genau richtig. Alle Bewegungen werden kontrolliert und achtsam ausgeführt.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section id="wirbelsaeulengymnastik-closing">
        <div className="wrapper">
          <FadeIn direction="up">
            <div className="closing-content-wrapper">
              <div className="closing-icon-container">
                <div className="closing-icon-circle">
                  <i className="fa-solid fa-shield-heart"></i>
                </div>
              </div>
              <div className="closing-content">
                <h2 className="closing-title">Gönne deinem Rücken die Aufmerksamkeit, die er verdient</h2>
                <p className="closing-text">
                  Unsere Wirbelsäulengymnastik hilft dir, deinen Körper bewusster wahrzunehmen, Beschwerden zu lindern und langfristig fit und beweglich zu bleiben. Ein ruhiger, gesundheitsorientierter Kurs – mit spürbaren Effekten für deinen gesamten Alltag.
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

