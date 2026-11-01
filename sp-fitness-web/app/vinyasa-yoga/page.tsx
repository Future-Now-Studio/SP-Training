import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Vinyasa Yoga – SP Fitness by Sebastian Pfau | Im Fluss von Atem und Bewegung",
  description: "Vinyasa Flow bei SP Fitness in Schwetzingen: fließende Sequenzen, getragen von einem gleichmäßigen, tiefen Atem. Für Einsteiger*innen mit Freude an Bewegung und erfahrene Yogis.",
  keywords: "Vinyasa Yoga Schwetzingen, Vinyasa Flow, Yoga Kurs, Asanas, Atem, Meditation, Kraft, Beweglichkeit, Balance, SP Fitness, Sebastian Pfau",
  openGraph: {
    title: "Vinyasa Yoga – SP Fitness by Sebastian Pfau",
    description: "Vinyasa Flow – Im Fluss von Atem und Bewegung. Eine Praxis, die dich fordert, ohne dich zu überfordern, und die dich am Ende klar und entspannt zurücklässt.",
    url: "https://www.sp-fitness.de/vinyasa-yoga",
    type: "website",
    images: ["https://www.sp-fitness.de/images/vinyasa-hero.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vinyasa Yoga – SP Fitness by Sebastian Pfau",
    description: "Vinyasa Flow – Im Fluss von Atem und Bewegung. Eine Praxis, die dich fordert, ohne dich zu überfordern, und die dich am Ende klar und entspannt zurücklässt.",
    images: ["https://www.sp-fitness.de/images/vinyasa-hero.jpg"],
  },
};

export default function VinyasaYoga() {
  return (
    <main>
      <section id="start">
        {/* Background Image */}
        <div className="hero-bg-image">
          <Image
            src="/images/vinyasa-hero.jpg"
            alt="Vinyasa Yoga Background"
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
              <h1 className="hero-fitness-title">VINYASA YOGA</h1>
              <h2 className="hero-tagline">
                Im <span className="highlight-blue">Fluss</span> von Atem<br/>und Bewegung
              </h2>

              {/* Buttons */}
              <div className="hero-buttons">
                <Link href="#kontakt" className="button key hero-cta-primary">
                  <span>JETZT MITMACHEN</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
                <Link href="/kurse" className="button hero-cta-secondary">
                  <span>Zum Kursplan</span>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Intro Section */}
      <section id="vinyasa-yoga-intro">
        <div className="wrapper">
          <div className="yoga-intro-layout">
            <FadeIn direction="right" className="yoga-intro-content">
              <h2 className="yoga-intro-title">Vinyasa Flow – Im Fluss von Atem und Bewegung</h2>
              <p className="yoga-intro-lead">
                In unserem Vinyasa-Flow-Kurs darfst du ankommen: auf deiner Matte, in deinem Körper und in deinem Atem. Du spürst, wie sich im fließenden Rhythmus deine Bewegung mit deinem Atem verbindet und der Geist zur Ruhe kommt – in einer Praxis, die dich fordert, ohne dich zu überfordern, und die dich am Ende klar und entspannt zurücklässt.
              </p>
              <p className="yoga-intro-text">
                Vinyasa Yoga hat seine Wurzeln im Ashtanga Yoga und hat sich zu einem eigenständigen, abwechslungsreichen Stil weiterentwickelt. Die Körperhaltungen (Asanas) werden zu fließenden Sequenzen verbunden, getragen von einem gleichmäßigen, tiefen Atem. Der Kurs eignet sich für Einsteiger*innen mit Freude an Bewegung ebenso wie für erfahrene Yoga-Praktizierende. Jede Asana lässt sich variieren und anpassen, sodass du auf deinem Yoga-Level praktizieren kannst.
              </p>
            </FadeIn>

            <FadeIn direction="left" className="yoga-intro-image">
              <div className="yoga-image-wrapper">
                <Image
                  src="/images/vinyasa-sunset.jpg"
                  alt="Vinyasa Yoga im Sonnenuntergang"
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
            <h2 className="yoga-pillars-title">Die drei Säulen unserer Praxis</h2>
          </FadeIn>

          <div className="yoga-pillars-grid">
            <FadeIn direction="up" delay={0.1} className="yoga-pillar-card">
              <div className="pillar-image-container">
                <Image
                  src="/images/vinyasa-asana.jpg"
                  alt="Asana im Fluss"
                  fill
                  style={{objectFit: "cover"}}
                  quality={90}
                />
              </div>
              <div className="pillar-content">
                <div className="pillar-icon-large">
                  <i className="fa-solid fa-spa"></i>
                </div>
                <h3>Asana</h3>
                <p className="pillar-subtitle">im Fluss</p>
                <p className="pillar-description">Fließende Abfolgen von Körperhaltungen für Kraft, Beweglichkeit und Balance. Jede Haltung wird achtsam ausgeführt und lässt sich individuell auf dich anpassen.</p>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.2} className="yoga-pillar-card">
              <div className="pillar-image-container">
                <Image
                  src="/images/vinyasa-atem.jpg"
                  alt="Atem im Takt"
                  fill
                  style={{objectFit: "cover"}}
                  quality={90}
                />
              </div>
              <div className="pillar-content">
                <div className="pillar-icon-large">
                  <i className="fa-solid fa-wind"></i>
                </div>
                <h3>Atem</h3>
                <p className="pillar-subtitle">im Takt</p>
                <p className="pillar-description">Jede Bewegung folgt dem Atem: Ein- und Ausatmen geben den Takt vor. Ein gleichmäßiger, tiefer Atem trägt dich durch eine Sequenz und hält dich im Moment.</p>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.3} className="yoga-pillar-card">
              <div className="pillar-image-container">
                <Image
                  src="/images/vinyasa-praesenz.jpg"
                  alt="Präsenz ganz im Moment"
                  fill
                  style={{objectFit: "cover"}}
                  quality={90}
                />
              </div>
              <div className="pillar-content">
                <div className="pillar-icon-large">
                  <i className="fa-solid fa-om"></i>
                </div>
                <h3>Präsenz</h3>
                <p className="pillar-subtitle">ganz im Moment</p>
                <p className="pillar-description">Wenn du dich auf Atem und Bewegung konzentrierst, kommt der Geist zur Ruhe. Du spürst dich bewusster und bist ganz bei dir.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="warum-vinyasa-yoga">
        <div className="wrapper">
          <FadeIn direction="down">
            <h2 className="section-title">Vinyasa Flow ist ideal, wenn du…</h2>
          </FadeIn>

          <div className="features-grid">
            <FadeIn className="feature-card" delay={0.1}>
              <div className="feature-icon-wrapper">
                <div className="feature-icon-circle">
                  <i className="fa-solid fa-leaf"></i>
                </div>
              </div>
              <h4>In Bewegung kommen und abschalten willst</h4>
              <p>Die Konzentration auf Atem und Bewegung lässt den Geist still werden. Du lässt den Alltag hinter dir und gehst gelassener aus der Stunde.</p>
            </FadeIn>

            <FadeIn className="feature-card" delay={0.2}>
              <div className="feature-icon-wrapper">
                <div className="feature-icon-circle">
                  <i className="fa-solid fa-dumbbell"></i>
                </div>
              </div>
              <h4>Kraft aufbauen und beweglicher werden willst</h4>
              <p>Die Verbindung aus Kräftigung, Dehnung und fließender Bewegung fordert den ganzen Körper. Du wirst stärker und zugleich geschmeidiger.</p>
            </FadeIn>

            <FadeIn className="feature-card" delay={0.3}>
              <div className="feature-icon-wrapper">
                <div className="feature-icon-circle">
                  <i className="fa-solid fa-scale-balanced"></i>
                </div>
              </div>
              <h4>Koordination und Balance schulen möchtest</h4>
              <p>Die fließenden Übergänge trainieren Koordination und Balance. Du lernst, auf deinen Körper zu hören und seine Signale besser zu verstehen.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section id="vinyasa-yoga-closing">
        <div className="wrapper">
          <FadeIn direction="up">
            <div className="closing-content-wrapper">
              <div className="closing-icon-container">
                <div className="closing-icon-circle">
                  <i className="fa-solid fa-spa"></i>
                </div>
              </div>
              <div className="closing-content">
                <h2 className="closing-title">Komm wie du heute bist</h2>
                <p className="closing-text">
                  Müde oder voller Energie, verspannt oder beweglich, mit vollem Kopf oder ohne Plan. Wir fangen dort an, wo du gerade stehst … und bewegen uns gemeinsam.
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
