import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import EmpFaqAccordion from "@/components/EmpFaqAccordion";
import EmpGallery from "@/components/EmpGallery";

export const metadata: Metadata = {
  title: "EMP Chair Pro – SP Fitness by Sebastian Pfau | Starker Beckenboden auf Knopfdruck",
  description:
    "Beckenbodentraining mit dem EMP Chair Pro in Schwetzingen: 28 Minuten, vollständig bekleidet, schmerzfrei. HI-EMP Magnetwellen trainieren alle 3 Schichten der Beckenbodenmuskulatur – wirksam bei Inkontinenz, Rückenschmerzen, Rückbildung und mehr Lebensqualität.",
  keywords:
    "EMP Chair Pro, Beckenbodenstuhl, Beckenbodentraining Schwetzingen, Magnetfeldtherapie, Inkontinenz, Rückbildung, HI-EMP, SP Fitness, Sebastian Pfau",
  openGraph: {
    title: "EMP Chair Pro – Starker Beckenboden auf Knopfdruck",
    description:
      "28 Minuten, vollständig bekleidet, schmerzfrei: Beckenbodentraining mit der HI-EMP Technologie bei SP Fitness in Schwetzingen.",
    url: "https://www.sp-fitness.de/emp-chair-pro",
    type: "website",
    images: ["https://www.sp-fitness.de/images/emp-chair/241112_EMP_Chair_Pro_Illustration_Beckenboden_Frau_02.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "EMP Chair Pro – Starker Beckenboden auf Knopfdruck",
    description:
      "28 Minuten, vollständig bekleidet, schmerzfrei: Beckenbodentraining mit Magnetwellen bei SP Fitness in Schwetzingen.",
    images: ["https://www.sp-fitness.de/images/emp-chair/241112_EMP_Chair_Pro_Illustration_Beckenboden_Frau_02.jpg"],
  },
};

export default function EmpChairPro() {
  return (
    <main>
      {/* HERO with video */}
      <section id="start" className="emp-split-hero">
        <div className="hero-bg-image">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/images/emp-chair/241112_EMP_Chair_Pro_Illustration_Beckenboden_Frau_02.jpg"
          >
            <source src="/videos/emp-chair-pro.mp4" type="video/mp4" />
            Ihr Browser unterstützt das Video-Element nicht.
          </video>
        </div>

        <div className="hero-blue-overlay"></div>

        <div className="hero-content-overlay">
          <FadeIn className="hero-content" delay={0.2} direction="left">
            <div className="hero-text-content">
              <h1 className="hero-fitness-title">EMP CHAIR PRO</h1>
              <h2 className="hero-tagline">
                Ein <span className="highlight-blue">starker Beckenboden</span><br />
                auf Knopfdruck
              </h2>

              <div className="hero-buttons">
                <Link href="https://www.studiobookr.com/sp-fitness-by-sebastian-pfau-e-k-73141#/" target="_blank" rel="noopener noreferrer" className="button key hero-cta-primary">
                  <span>KOSTENLOSE PROBESITZUNG SICHERN</span>
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

      {/* INTRO */}
      <section id="emp-intro">
        <div className="wrapper">
          <div className="yoga-intro-layout">
            <FadeIn direction="right" className="yoga-intro-content">
              <h2 className="yoga-intro-title">
                Beckenbodentraining ohne Anstrengung – einfach sitzen, ankommen, stärker werden
              </h2>
              <p className="yoga-intro-lead">
                Der EMP Chair Pro ist eine der effektivsten und entspanntesten Methoden, deinen
                Beckenboden zu stärken. Ohne Operation, ohne Ausfallzeiten und ohne körperliche
                Anstrengung – vollständig bekleidet trainierst du mithilfe der HI-EMP Technologie
                (High-Intensity-Electro-Magnetic-Power) alle drei Schichten deiner
                Beckenbodenmuskulatur in nur 28 Minuten.
              </p>
              <p className="yoga-intro-text">
                Eine Sitzung erzeugt rund 12.000 supramaximale Muskelkontraktionen – mehr als jedes
                Eigentraining je leisten könnte. Das Ergebnis: eine nachhaltig gekräftigte
                Beckenbodenmuskulatur, spürbar mehr Stabilität und ein neues Körpergefühl.
              </p>

              <div style={{ marginTop: "2rem" }}>
                <Link href="https://www.studiobookr.com/sp-fitness-by-sebastian-pfau-e-k-73141#/" target="_blank" rel="noopener noreferrer" className="button key">
                  <span>Jetzt unverbindlich Termin sichern</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </FadeIn>

            <FadeIn direction="left" className="yoga-intro-image">
              <div className="yoga-image-wrapper">
                <Image
                  src="/images/emp-chair/gallery/emp-03.jpg"
                  alt="EMP Chair Pro Beckenbodentraining"
                  fill
                  style={{ objectFit: "cover" }}
                  quality={90}
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* QUICK FACTS */}
      <section id="emp-facts">
        <div className="wrapper">
          <FadeIn direction="down">
            <h2 className="section-title">Was den EMP Chair Pro besonders macht</h2>
          </FadeIn>

          <div className="features-grid">
            <FadeIn direction="up" delay={0.05} className="feature-card">
              <div className="feature-icon"><i className="fa-solid fa-ban"></i></div>
              <h3 className="feature-title">Nicht invasiv – ohne OP</h3>
            </FadeIn>
            <FadeIn direction="up" delay={0.1} className="feature-card">
              <div className="feature-icon"><i className="fa-solid fa-shirt"></i></div>
              <h3 className="feature-title">Vollständig bekleidet</h3>
            </FadeIn>
            <FadeIn direction="up" delay={0.15} className="feature-card">
              <div className="feature-icon"><i className="fa-solid fa-layer-group"></i></div>
              <h3 className="feature-title">Alle 3 Muskelschichten</h3>
            </FadeIn>
            <FadeIn direction="up" delay={0.2} className="feature-card">
              <div className="feature-icon"><i className="fa-solid fa-clock"></i></div>
              <h3 className="feature-title">Nur 28 Minuten</h3>
            </FadeIn>
            <FadeIn direction="up" delay={0.25} className="feature-card">
              <div className="feature-icon"><i className="fa-solid fa-face-smile"></i></div>
              <h3 className="feature-title">Schmerzfrei</h3>
            </FadeIn>
            <FadeIn direction="up" delay={0.3} className="feature-card">
              <div className="feature-icon"><i className="fa-solid fa-chair"></i></div>
              <h3 className="feature-title">Entspannt im Sitzen</h3>
            </FadeIn>
            <FadeIn direction="up" delay={0.35} className="feature-card">
              <div className="feature-icon"><i className="fa-solid fa-bolt"></i></div>
              <h3 className="feature-title">12.000 Kontraktionen</h3>
            </FadeIn>
            <FadeIn direction="up" delay={0.4} className="feature-card">
              <div className="feature-icon"><i className="fa-solid fa-chart-line"></i></div>
              <h3 className="feature-title">Schnelle, nachhaltige Erfolge</h3>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ABLAUF mit Illustrationen */}
      <section id="emp-ablauf">
        <div className="wrapper">
          <FadeIn direction="down">
            <h2 className="section-title">Wirkung des Trainings</h2>
            <p className="section-subtitle" style={{ textAlign: "center", marginTop: "1rem", marginBottom: "3rem" }}>
              Drei Phasen, ein klares Ergebnis: ein stabiler, leistungsfähiger Beckenboden.
            </p>
          </FadeIn>

          <div className="features-grid">
            <FadeIn direction="up" delay={0.1} className="feature-card">
              <div className="yoga-image-wrapper" style={{ position: "relative", width: "100%", aspectRatio: "1/1", marginBottom: "1.5rem" }}>
                <Image
                  src="/images/emp-chair/241112_EMP_Chair_Pro_Illustration_Beckenboden_Frau_01.jpg"
                  alt="Vor dem Training – geschwächte Beckenbodenmuskulatur"
                  fill
                  style={{ objectFit: "cover" }}
                  quality={90}
                />
              </div>
              <h3 className="feature-title">1. Vor dem Training</h3>
              <p>
                Durch Alterung, Schwangerschaft, OPs oder Bewegungsmangel erschlafft die
                Beckenbodenmuskulatur. Die Organe verlieren ihre Stütze – Inkontinenz,
                Rückenschmerzen oder sexuelle Beschwerden können die Folge sein.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.2} className="feature-card">
              <div className="yoga-image-wrapper" style={{ position: "relative", width: "100%", aspectRatio: "1/1", marginBottom: "1.5rem" }}>
                <Image
                  src="/images/emp-chair/241112_EMP_Chair_Pro_Illustration_Beckenboden_Frau_02.jpg"
                  alt="Während des Trainings – Magnetwellen aktivieren alle 3 Schichten"
                  fill
                  style={{ objectFit: "cover" }}
                  quality={90}
                />
              </div>
              <h3 className="feature-title">2. Während des Trainings</h3>
              <p>
                Auf Knopfdruck stimulieren Magnetwellen die gesamte Beckenbodenmuskulatur.
                Du musst nichts tun – einfach bekleidet sitzen. Alle drei Muskelschichten
                werden in 28 Minuten zu 12.000 Kontraktionen gebracht.
              </p>
            </FadeIn>

            <FadeIn direction="up" delay={0.3} className="feature-card">
              <div className="yoga-image-wrapper" style={{ position: "relative", width: "100%", aspectRatio: "1/1", marginBottom: "1.5rem" }}>
                <Image
                  src="/images/emp-chair/241112_EMP_Chair_Pro_Illustration_Beckenboden_Frau_03.jpg"
                  alt="Nach dem Training – gestärkte Beckenbodenmuskulatur"
                  fill
                  style={{ objectFit: "cover" }}
                  quality={90}
                />
              </div>
              <h3 className="feature-title">3. Nach dem Training</h3>
              <p>
                Die Muskulatur wird zuverlässig gekräftigt und stützt deine Organe wieder.
                Viele spüren bereits nach der ersten Sitzung den Beckenboden, nach 6 – 10
                Sitzungen sind die ersten Erfolge deutlich spürbar.
              </p>
            </FadeIn>
          </div>

          <FadeIn direction="up" delay={0.4}>
            <div style={{ textAlign: "center", marginTop: "3rem" }}>
              <Link href="https://www.studiobookr.com/sp-fitness-by-sebastian-pfau-e-k-73141#/" target="_blank" rel="noopener noreferrer" className="button key cta-large">
                <span>Probesitzung kostenfrei buchen</span>
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* GALERIE */}
      <section id="emp-gallery">
        <div className="wrapper">
          <FadeIn direction="down">
            <h2 className="section-title">Einblicke in den EMP Chair Pro</h2>
            <p className="section-subtitle" style={{ textAlign: "center", marginTop: "1rem", marginBottom: "3rem" }}>
              Echte Eindrücke vom Training, der Beratung und dem Beckenbodenstuhl im Detail.
            </p>
          </FadeIn>
          <FadeIn direction="up">
            <EmpGallery />
          </FadeIn>
        </div>
      </section>

      {/* ANWENDUNGSGEBIETE */}
      <section id="emp-anwendung">
        <div className="wrapper">
          <FadeIn direction="down">
            <h2 className="section-title">Anwendungsgebiete</h2>
            <p className="section-subtitle" style={{ textAlign: "center", marginTop: "1rem", marginBottom: "2rem" }}>
              Der EMP Chair Pro hilft bei einer Vielzahl an Beschwerden, die durch eine
              schwache Beckenbodenmuskulatur ausgelöst werden.
            </p>
          </FadeIn>

          <div className="features-grid">
            <FadeIn className="feature-card" delay={0.1}>
              <div className="feature-icon-wrapper">
                <div className="feature-icon-circle">
                  <i className="fa-solid fa-droplet"></i>
                </div>
              </div>
              <h4>Inkontinenz</h4>
              <p>Geeignet für alle Formen: Belastungs-, Drang-, Misch-, Überlauf-, funktionelle Inkontinenz und Darminkontinenz.</p>
            </FadeIn>

            <FadeIn className="feature-card" delay={0.15}>
              <div className="feature-icon-wrapper">
                <div className="feature-icon-circle">
                  <i className="fa-solid fa-bone"></i>
                </div>
              </div>
              <h4>Rückenschmerzen</h4>
              <p>Ein schwacher Beckenboden zieht häufig Beschwerden im unteren Rücken nach sich. Gezielte Stärkung beugt vor und lindert.</p>
            </FadeIn>

            <FadeIn className="feature-card" delay={0.2}>
              <div className="feature-icon-wrapper">
                <div className="feature-icon-circle">
                  <i className="fa-solid fa-baby-carriage"></i>
                </div>
              </div>
              <h4>Rückbildung</h4>
              <p>Ob Kaiserschnitt oder vaginale Geburt – sanfte, effektive Regeneration der Beckenbodenmuskulatur nach der Schwangerschaft.</p>
            </FadeIn>

            <FadeIn className="feature-card" delay={0.25}>
              <div className="feature-icon-wrapper">
                <div className="feature-icon-circle">
                  <i className="fa-solid fa-heart"></i>
                </div>
              </div>
              <h4>Liebesleben</h4>
              <p>Eine gestraffte Beckenbodenmuskulatur und bessere Durchblutung steigern Sensitivität und Erlebnisintensität.</p>
            </FadeIn>

            <FadeIn className="feature-card" delay={0.3}>
              <div className="feature-icon-wrapper">
                <div className="feature-icon-circle">
                  <i className="fa-solid fa-mars"></i>
                </div>
              </div>
              <h4>Impotenz</h4>
              <p>Regelmäßiges Training fördert die Durchblutung im Intimbereich – auch nach Prostatektomie eine wirkungsvolle Option.</p>
            </FadeIn>

            <FadeIn className="feature-card" delay={0.35}>
              <div className="feature-icon-wrapper">
                <div className="feature-icon-circle">
                  <i className="fa-solid fa-person-running"></i>
                </div>
              </div>
              <h4>Sport</h4>
              <p>Der Beckenboden ist Teil deiner Core-Muskulatur. Mehr Rumpfstabilität bedeutet mehr Leistung und weniger Verletzungen.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* VERGLEICH – Face-off */}
      <section id="emp-vergleich">
        <div className="wrapper">
          <FadeIn direction="down">
            <h2 className="section-title">Klassisch vs. Magnetfeld</h2>
            <p className="section-subtitle" style={{ marginTop: "1rem", marginBottom: "3.5rem" }}>
              Beide Methoden wirken. Eine davon ist deutlich entspannter und meist effektiver.
            </p>
          </FadeIn>

          <div className="emp-faceoff">
            <FadeIn direction="right" className="emp-faceoff-col emp-faceoff-classic">
              <div className="emp-faceoff-head">
                <div className="emp-faceoff-icon">
                  <i className="fa-solid fa-person"></i>
                </div>
                <h3>Klassisches Beckenbodentraining</h3>
                <span className="emp-faceoff-tag">Etabliert – aber aufwendig</span>
              </div>
              <ul className="emp-faceoff-list">
                <li>Mindestens 3× pro Woche über Wochen oder Monate</li>
                <li>Erfordert Disziplin, Konzentration & aktive Beteiligung</li>
                <li>Drei Muskelschichten kaum gezielt ansteuerbar</li>
                <li>Erfolge bleiben trotz Training oft aus</li>
                <li>15 – 20 Minuten Konzentration pro Einheit</li>
              </ul>
            </FadeIn>

            <div className="emp-faceoff-vs" aria-hidden="true"><span>VS</span></div>

            <FadeIn direction="left" className="emp-faceoff-col emp-faceoff-emp">
              <div className="emp-faceoff-badge">Empfehlung</div>
              <div className="emp-faceoff-head">
                <div className="emp-faceoff-icon">
                  <i className="fa-solid fa-bolt"></i>
                </div>
                <h3>Magnetfeldtraining mit dem EMP Chair Pro</h3>
                <span className="emp-faceoff-tag">Modern, mühelos, tiefenwirksam</span>
              </div>
              <ul className="emp-faceoff-list">
                <li>Alle drei Muskelschichten gleichzeitig trainiert</li>
                <li>Keine aktive Beteiligung nötig – einfach sitzen</li>
                <li>28 Minuten, vollständig bekleidet</li>
                <li>12.000 supramaximale Kontraktionen pro Sitzung</li>
                <li>Spürbare Verbesserung oft schon nach der 1. Sitzung</li>
              </ul>
              <Link href="https://www.studiobookr.com/sp-fitness-by-sebastian-pfau-e-k-73141#/" target="_blank" rel="noopener noreferrer" className="button key emp-faceoff-cta">
                <span>Probesitzung sichern</span>
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ – Bild + Akkordion */}
      <section id="emp-faq">
        <div className="wrapper">
          <div className="emp-faq-layout">
            <FadeIn direction="right" className="emp-faq-image">
              <div className="emp-faq-image-wrapper">
                <Image
                  src="/images/emp-chair/241112_EMP_Chair_Pro_Illustration_Beckenboden_Mann_02.jpg"
                  alt="EMP Chair Pro – häufige Fragen"
                  fill
                  style={{ objectFit: "cover" }}
                  quality={90}
                />
              </div>
            </FadeIn>

            <FadeIn direction="left" className="emp-faq-content">
              <h2 className="section-title emp-faq-title">Häufige Fragen</h2>
              <p className="emp-faq-lead">
                Alles Wichtige zum Training mit dem EMP Chair Pro – kurz und klar beantwortet.
              </p>
              <EmpFaqAccordion />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section id="emp-closing">
        <div className="wrapper">
          <FadeIn direction="up">
            <div className="closing-content-wrapper">
              <div className="closing-icon-container">
                <div className="closing-icon-circle">
                  <i className="fa-solid fa-bolt"></i>
                </div>
              </div>
              <div className="closing-content">
                <h2 className="closing-title">
                  Probier es einfach aus –{" "}
                  <span style={{ whiteSpace: "nowrap" }}>kostenfrei und unverbindlich</span>
                </h2>
                <p className="closing-text">
                  Die meisten spüren in der ersten Sitzung etwas, was sie vorher nie gespürt
                  haben: ihren Beckenboden. Sichere dir deine kostenfreie Probesitzung im
                  SP Fitness Studio in Schwetzingen und überzeuge dich selbst.
                </p>
                <div className="closing-cta">
                  <Link href="https://www.studiobookr.com/sp-fitness-by-sebastian-pfau-e-k-73141#/" target="_blank" rel="noopener noreferrer" className="button key cta-large">
                    <span>Jetzt kostenfreie Probesitzung sichern</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
                <p style={{ marginTop: "1.5rem", fontSize: "0.95rem", opacity: 0.85 }}>
                  Mehr zur Technologie: <a href="https://www.emp-chair-pro.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}>www.emp-chair-pro.com</a>
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
