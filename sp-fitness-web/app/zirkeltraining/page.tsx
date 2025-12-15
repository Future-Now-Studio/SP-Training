import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Funktionelles Zirkeltraining – SP Fitness by Sebastian Pfau | Effektiv, dynamisch und vielseitig",
  description: "Funktionelles Zirkeltraining Kurs bei SP Fitness in Schwetzingen: Effektives Ganzkörpertraining mit TRX, Plyoboxen, Battleropes und mehr. Für alle Leistungsniveaus. Jetzt informieren!",
  keywords: "Zirkeltraining Schwetzingen, Funktionelles Training, Circuit Training, TRX, Plyoboxen, Battleropes, Ganzkörpertraining, HIIT, SP Fitness, Sebastian Pfau",
  openGraph: {
    title: "Funktionelles Zirkeltraining – SP Fitness by Sebastian Pfau",
    description: "Funktionelles Zirkeltraining – effektiv, dynamisch und vielseitig. Erlebe ein Trainingskonzept, das dich ganzheitlich fordert, deine Leistung steigert und gleichzeitig Spaß macht.",
    url: "https://www.sp-fitness.de/zirkeltraining",
    type: "website",
    images: ["https://www.sp-fitness.de/images/VG8_4216.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Funktionelles Zirkeltraining – SP Fitness by Sebastian Pfau",
    description: "Funktionelles Zirkeltraining – effektiv, dynamisch und vielseitig. Erlebe ein Trainingskonzept, das dich ganzheitlich fordert, deine Leistung steigert und gleichzeitig Spaß macht.",
    images: ["https://www.sp-fitness.de/images/VG8_4216.jpg"],
  },
};

export default function Zirkeltraining() {
  return (
    <main>
      <section id="start">
        {/* Background Image */}
        <div className="hero-bg-image">
          <Image
            src="/images/VG8_4216.jpg" 
            alt="Zirkeltraining Background" 
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
              <h1 className="hero-fitness-title">ZIRKELTRAINING</h1>
              <h2 className="hero-tagline">
                Effektiv, <span className="highlight-blue">dynamisch</span> und<br/>vielseitig
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
      <section id="zirkeltraining-intro">
        <div className="wrapper">
          <div className="yoga-intro-layout">
            <FadeIn direction="right" className="yoga-intro-content">
              <h2 className="yoga-intro-title">Funktionelles Zirkeltraining – effektiv, dynamisch und vielseitig</h2>
              <p className="yoga-intro-lead">
                Erlebe ein Trainingskonzept, das dich ganzheitlich fordert, deine Leistung steigert und gleichzeitig Spaß macht: Funktionelles Zirkeltraining.
              </p>
              <p className="yoga-intro-text">
                Dieses Trainingsformat verbindet natürliche Bewegungen des Alltags mit intelligenten Zusatztools, um deinen gesamten Körper kraftvoll, mobil und widerstandsfähig zu machen.
              </p>
            </FadeIn>
            
            <FadeIn direction="left" className="yoga-intro-image">
              <div className="yoga-image-wrapper">
                <Image
                  src="/images/VG8_4216.jpg"
                  alt="Zirkeltraining Praxis"
                  fill
                  style={{objectFit: "cover"}}
                  quality={90}
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Why Effective Section */}
      <section id="warum-effektiv">
        <div className="wrapper">
          <FadeIn direction="down">
            <h2 className="section-title">Was macht funktionelles Zirkeltraining so effektiv?</h2>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <div className="yoga-intro-content" style={{maxWidth: "65rem", margin: "0 auto", textAlign: "center"}}>
              <p className="yoga-intro-text" style={{fontSize: "1.25rem", marginBottom: "1.5rem"}}>
                Statt isoliert einzelne Muskelgruppen zu trainieren, setzt funktionelles Zirkeltraining auf komplexe Bewegungsabläufe. Dadurch werden Kraft, Ausdauer, Koordination und Stabilität gleichzeitig verbessert.
              </p>
              <p className="yoga-intro-text" style={{fontSize: "1.125rem", fontWeight: 600, color: "var(--brand-blue-hover)"}}>
                Das Ergebnis: Mehr Power, mehr Bewegungsqualität, weniger Verletzungsanfälligkeit – und ein fitterer, energiegeladener Alltag.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Power Tools Section */}
      <section id="power-tools">
        <div className="wrapper">
          <FadeIn direction="down">
            <h2 className="section-title">Power-Tools, die dein Training auf das nächste Level bringen</h2>
            <p className="section-subtitle">Um ein abwechslungsreiches und intensives Training zu gewährleisten, kommen verschiedene Trainingsgeräte zum Einsatz</p>
            <p className="section-intro">
              Jedes Tool hat seinen ganz eigenen Fokus:
            </p>
          </FadeIn>

          <div className="yoga-pillars-grid">
            <FadeIn direction="up" delay={0.1} className="yoga-pillar-card">
              <div className="pillar-image-container">
                <Image
                  src="/images/VG8_4216.jpg"
                  alt="TRX Schlingentrainer"
                  fill
                  style={{objectFit: "cover"}}
                  quality={90}
                />
              </div>
              <div className="pillar-content">
                <div className="pillar-icon-large">
                  <i className="fa-solid fa-dumbbell"></i>
                </div>
                <h3>TRX®-Schlingentrainer</h3>
                <p className="pillar-subtitle">Kraft & Stabilität</p>
                <p className="pillar-description">Nutze dein eigenes Körpergewicht, um Kraft, Stabilität und Rumpfspannung zu erhöhen. Perfekt, um Tiefenmuskulatur und Gleichgewicht zu trainieren.</p>
              </div>
            </FadeIn>
              
            <FadeIn direction="up" delay={0.2} className="yoga-pillar-card">
              <div className="pillar-image-container">
                <Image
                  src="/images/VG8_4216.jpg"
                  alt="Plyoboxen"
                  fill
                  style={{objectFit: "cover"}}
                  quality={90}
                />
              </div>
              <div className="pillar-content">
                <div className="pillar-icon-large">
                  <i className="fa-solid fa-fire"></i>
                </div>
                <h3>Plyoboxen</h3>
                <p className="pillar-subtitle">Sprungkraft & Explosivität</p>
                <p className="pillar-description">Ideal für Sprungkraft, Explosivität und Schnelligkeit. Perfekt für HIIT-Elemente und sportliche Leistungssteigerung.</p>
              </div>
            </FadeIn>
              
            <FadeIn direction="up" delay={0.3} className="yoga-pillar-card">
              <div className="pillar-image-container">
                <Image
                  src="/images/VG8_4216.jpg"
                  alt="Battleropes"
                  fill
                  style={{objectFit: "cover"}}
                  quality={90}
                />
              </div>
              <div className="pillar-content">
                <div className="pillar-icon-large">
                  <i className="fa-solid fa-wave-square"></i>
                </div>
                <h3>Battleropes</h3>
                <p className="pillar-subtitle">Ausdauer & Kraft</p>
                <p className="pillar-description">Ein energiegeladenes Ganzkörpertraining, das Ausdauer und Kraft vereint. Perfekt, um den Puls nach oben zu treiben und jede Menge Kalorien zu verbrennen.</p>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.4} className="yoga-pillar-card">
              <div className="pillar-image-container">
                <Image
                  src="/images/VG8_4216.jpg"
                  alt="Tubes & Widerstandsbänder"
                  fill
                  style={{objectFit: "cover"}}
                  quality={90}
                />
              </div>
              <div className="pillar-content">
                <div className="pillar-icon-large">
                  <i className="fa-solid fa-ring"></i>
                </div>
                <h3>Tubes & Widerstandsbänder</h3>
                <p className="pillar-subtitle">Mobilität & Funktion</p>
                <p className="pillar-description">Schonend für die Gelenke, vielseitig einsetzbar – ideal für Kräftigung, Mobilität und funktionelle Bewegungen.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="vorteile-zirkel">
        <div className="wrapper">
          <FadeIn direction="down">
            <h2 className="section-title">Der Vorteil eines funktionellen Zirkels: Vielfalt trifft Effizienz</h2>
            <p className="section-subtitle">Jede Trainingsstation fordert dich auf unterschiedliche Weise heraus</p>
          </FadeIn>
          
          <div className="features-grid">
            <FadeIn className="feature-card" delay={0.1}>
              <div className="feature-icon-wrapper">
                <div className="feature-icon-circle">
                  <i className="fa-solid fa-users"></i>
                </div>
              </div>
              <h4>alle großen Muskelgruppen anspricht</h4>
              <p>Ein ganzheitliches Training, das deinen gesamten Körper fordert und stärkt – von Kopf bis Fuß.</p>
            </FadeIn>

            <FadeIn className="feature-card" delay={0.2}>
              <div className="feature-icon-wrapper">
                <div className="feature-icon-circle">
                  <i className="fa-solid fa-shuffle"></i>
                </div>
              </div>
              <h4>extrem abwechslungsreich ist</h4>
              <p>Kein Training gleicht dem anderen. Durch die Vielfalt der Stationen bleibt jedes Workout spannend und motivierend.</p>
            </FadeIn>

            <FadeIn className="feature-card" delay={0.3}>
              <div className="feature-icon-wrapper">
                <div className="feature-icon-circle">
                  <i className="fa-solid fa-heart-pulse"></i>
                </div>
              </div>
              <h4>die Herz-Kreislauf-Fitness deutlich verbessert</h4>
              <p>Das dynamische Training steigert deine Ausdauer und stärkt dein Herz-Kreislauf-System nachhaltig.</p>
            </FadeIn>

            <FadeIn className="feature-card" delay={0.4}>
              <div className="feature-icon-wrapper">
                <div className="feature-icon-circle">
                  <i className="fa-solid fa-fire"></i>
                </div>
              </div>
              <h4>das Training jedes Mal spannend und motivierend macht</h4>
              <p>Die Abwechslung und Dynamik sorgen dafür, dass du mit Begeisterung trainierst und deine Ziele erreichst.</p>
            </FadeIn>

            <FadeIn className="feature-card" delay={0.5}>
              <div className="feature-icon-wrapper">
                <div className="feature-icon-circle">
                  <i className="fa-solid fa-sliders"></i>
                </div>
              </div>
              <h4>ideal für jedes Leistungsniveau geeignet ist</h4>
              <p>Egal, ob du Anfänger bist oder bereits Trainingserfahrung hast – durch die modulare Struktur wird jeder Zirkel optimal an dein individuelles Fitnesslevel angepasst.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section id="fuer-wen-zirkel">
        <div className="wrapper">
          <FadeIn direction="down">
            <h2 className="section-title">Für wen ist funktionelles Zirkeltraining perfekt geeignet?</h2>
          </FadeIn>
          
          <div className="features-grid">
            <FadeIn className="feature-card" delay={0.1}>
              <div className="feature-icon-wrapper">
                <div className="feature-icon-circle">
                  <i className="fa-solid fa-dumbbell"></i>
                </div>
              </div>
              <h4>Für alle, die fitter, stärker und beweglicher werden wollen</h4>
              <p>Das ganzheitliche Training verbessert deine Fitness, Kraft und Beweglichkeit in einem effektiven Workout.</p>
            </FadeIn>

            <FadeIn className="feature-card" delay={0.2}>
              <div className="feature-icon-wrapper">
                <div className="feature-icon-circle">
                  <i className="fa-solid fa-trophy"></i>
                </div>
              </div>
              <h4>Für Sportler, die ihre Leistungsfähigkeit steigern möchten</h4>
              <p>Perfekt für alle, die ihre sportliche Performance verbessern und neue Bestzeiten erreichen wollen.</p>
            </FadeIn>

            <FadeIn className="feature-card" delay={0.3}>
              <div className="feature-icon-wrapper">
                <div className="feature-icon-circle">
                  <i className="fa-solid fa-face-smile"></i>
                </div>
              </div>
              <h4>Für Menschen, die Spaß an Abwechslung und dynamischen Workouts haben</h4>
              <p>Wenn du Abwechslung liebst und gerne in der Gruppe trainierst, ist Zirkeltraining genau das Richtige für dich.</p>
            </FadeIn>

            <FadeIn className="feature-card" delay={0.4}>
              <div className="feature-icon-wrapper">
                <div className="feature-icon-circle">
                  <i className="fa-solid fa-shield-heart"></i>
                </div>
              </div>
              <h4>Für alle, die ein intensives, aber gelenkschonendes Training suchen</h4>
              <p>Das Training ist intensiv und effektiv, dabei aber schonend für deine Gelenke und ideal für nachhaltiges Training.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section id="zirkeltraining-closing">
        <div className="wrapper">
          <FadeIn direction="up">
            <div className="closing-content-wrapper">
              <div className="closing-icon-container">
                <div className="closing-icon-circle">
                  <i className="fa-solid fa-circle-nodes"></i>
                </div>
              </div>
              <div className="closing-content">
                <h2 className="closing-title">Erlebe die Power des funktionellen Zirkeltrainings</h2>
                <p className="closing-text">
                  Freue dich auf ein dynamisches, abwechslungsreiches Training, das dich ganzheitlich fordert, deine Leistung steigert und dabei jede Menge Spaß macht. Entdecke, wie effektiv und motivierend funktionelles Zirkeltraining sein kann.
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

