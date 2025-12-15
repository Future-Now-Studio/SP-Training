import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import TrainerTeaser from "@/components/TrainerTeaser";

export const metadata: Metadata = {
  title: "Personal Training – SP Fitness by Sebastian Pfau | Individuell, professionell und zielorientiert",
  description: "Personal Training bei SP Fitness by Sebastian Pfau in Schwetzingen: Individuelle Trainingskonzepte, 8 Jahre Berufserfahrung, für alle Altersklassen. Jetzt informieren!",
  keywords: "Personal Training Schwetzingen, Personal Trainer, Einzeltraining, Fitness Training, Sebastian Pfau, SP Fitness",
  openGraph: {
    title: "Personal Training – SP Fitness by Sebastian Pfau",
    description: "Personal Training – Individuell, professionell und zielorientiert. 8 Jahre Berufserfahrung, maßgeschneiderte Trainingsprogramme für alle Altersklassen.",
    url: "https://www.sp-fitness.de/personaltraining",
    type: "website",
    images: ["https://www.sp-fitness.de/images/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Training – SP Fitness by Sebastian Pfau",
    description: "Personal Training – Individuell, professionell und zielorientiert. 8 Jahre Berufserfahrung, maßgeschneiderte Trainingsprogramme für alle Altersklassen.",
    images: ["https://www.sp-fitness.de/images/twitter-card.jpg"],
  },
};

export default function PersonalTraining() {
  return (
    <main>
      <section id="start">
        {/* Background Image */}
        <div className="hero-bg-image">
          <Image
            src="/images/VG8_4216.jpg" 
            alt="Gym Background" 
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
              <h1 className="hero-fitness-title">PERSONAL TRAINING</h1>
              <h2 className="hero-tagline">
                Individuell, professionell<br/>und <span className="highlight-blue">zielorientiert</span>
              </h2>
              
              {/* Buttons */}
              <div className="hero-buttons">
                <Link href="#kontakt" className="button key hero-cta-primary">
                  <span>JETZT FIT WERDEN</span>
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

      <section id="personaltraining-intro">
        <div className="wrapper">
          <FadeIn direction="up">
            <div className="content">
              <p className="intro-text">Personal Training ist die effektivste Form des Trainings, wenn es um messbare Fortschritte, nachhaltige Ergebnisse und eine sichere Ausführung geht. Unser Anspruch ist es, Ihnen eine Betreuung zu bieten, die fachlich fundiert, strukturiert und präzise auf Ihre persönlichen Ziele abgestimmt ist.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="warum-personaltraining">
        <div className="wrapper">
          <FadeIn direction="down">
            <h2 className="section-title">Warum Personal Training bei uns?</h2>
          </FadeIn>
          
          <div className="features-grid">
            <FadeIn className="feature-card" delay={0.1}>
              <div className="feature-icon-wrapper">
                <div className="feature-icon-circle">
                  <i className="fa-solid fa-clipboard-list"></i>
                </div>
              </div>
              <h4>Individuelle Trainingskonzepte auf höchstem Niveau</h4>
              <p>Jeder Mensch hat unterschiedliche Voraussetzungen, Ziele und Herausforderungen. Daher entwickeln wir für Sie ein maßgeschneidertes Trainingsprogramm, das Ihren Bedürfnissen exakt entspricht – unabhängig davon, ob Sie Ihre Gesundheit verbessern, Kraft aufbauen, Gewicht reduzieren oder Ihre allgemeine Fitness steigern möchten.</p>
            </FadeIn>

            <FadeIn className="feature-card" delay={0.2}>
              <div className="feature-icon-wrapper">
                <div className="feature-icon-circle">
                  <i className="fa-solid fa-graduation-cap"></i>
                </div>
              </div>
              <h4>Fachliche Kompetenz durch 8 Jahre Berufserfahrung</h4>
              <p>Ihr Trainer verfügt über acht Jahre professionelle Berufserfahrung im Personal Training und bringt zusätzlich eine sehr lange eigene Trainingserfahrung mit: Seit 2006 trainiert er selbst regelmäßig und intensiv im Fitnessbereich. Dieses Zusammenspiel aus beruflicher Expertise und jahrelanger praktischer Erfahrung schafft eine fundierte Grundlage für ein qualitativ hochwertiges und effektives Coaching.</p>
            </FadeIn>

            <FadeIn className="feature-card" delay={0.3}>
              <div className="feature-icon-wrapper">
                <div className="feature-icon-circle">
                  <i className="fa-solid fa-users"></i>
                </div>
              </div>
              <h4>Geeignet für alle Altersklassen und Trainingsziele</h4>
              <p>Ob Anfänger, Fortgeschrittener oder Wiedereinsteiger – unser Personal Training richtet sich an Menschen jeden Alters. Auch bei körperlichen Einschränkungen oder besonderen Anforderungen passen wir das Training individuell an, um Ihnen die bestmöglichen Ergebnisse zu ermöglichen.</p>
            </FadeIn>

            <FadeIn className="feature-card" delay={0.4}>
              <div className="feature-icon-wrapper">
                <div className="feature-icon-circle">
                  <i className="fa-solid fa-chart-line"></i>
                </div>
              </div>
              <h4>Nachhaltige Begleitung und professionelle Motivation</h4>
              <p>Wir legen großen Wert auf eine kontinuierliche, seriöse und zielorientierte Betreuung. Durch präzise Trainingssteuerung, regelmäßige Anpassungen und eine klare Strategie sorgen wir dafür, dass Sie konstant Fortschritte machen und langfristig motiviert bleiben.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section id="personaltraining-closing">
        <div className="wrapper">
          <FadeIn direction="up">
            <div className="closing-content-wrapper">
              <div className="closing-icon-container">
                <div className="closing-icon-circle">
                  <i className="fa-solid fa-dumbbell"></i>
                </div>
              </div>
              <div className="closing-content">
                <h2 className="closing-title">Ein Training, das auf Erfahrung, Qualität und Vertrauen basiert</h2>
                <p className="closing-text">Profitieren Sie von einer persönlichen Betreuung, die auf langjährigem Know-how und echter Leidenschaft für Fitness und Gesundheit beruht. Gemeinsam schaffen wir die Grundlage für mehr Leistung, Wohlbefinden und Lebensqualität.</p>
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
      <div className="personaltraining-trainer-wrapper">
        <TrainerTeaser />
      </div>
    
    </main>
  );
}
