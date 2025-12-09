import Link from "next/link";
import Image from "next/image";
import StudioGallery from "@/components/StudioGallery";
import FadeIn from "@/components/FadeIn";
import TrainingTypeSelector from "@/components/TrainingTypeSelector";
import TrainerTeaser from "@/components/TrainerTeaser";

export default function Home() {
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
                width={420} 
                height={420} 
                className="hero-logo" 
                priority 
              />
            </div>

            {/* Text Content */}
            <div className="hero-text-content">
              <h2 className="hero-tagline">
                ICH MACH <span className="highlight-blue">DICH</span> WIEDER FIT
              </h2>
              <p className="hero-subtitle">SEBASTIAN PFAU - PERSONAL TRAINER</p>
              
              {/* Buttons */}
              <div className="hero-buttons">
                <Link href="#kontakt" className="button key hero-cta-primary">
                  <span>JETZT FIT WERDEN</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
                <a href="/kursplan.pdf" className="button hero-cta-secondary" target="_blank" rel="noopener noreferrer">
                  <i className="fa-solid fa-download"></i>
                  <span>KURSPLAN</span>
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="leistungen">
        <div className="wrapper">
          {/* Header Section */}
          <FadeIn direction="down" className="ziel-header">
            <div className="ziel-icon">
              <i className="fa-solid fa-microphone"></i>
            </div>
            <p className="ziel-question">WAS IST DEIN ZIEL?</p>
            <h3 className="ziel-heading">
              Ich helfe <span className="highlight-blue">DIR</span>, dich an dein Ziel zu bringen
            </h3>
            <div className="ziel-underline"></div>
          </FadeIn>

          {/* Training Type Selector */}
          <FadeIn direction="down" delay={0.1}>
            <TrainingTypeSelector />
          </FadeIn>

          {/* Content Cards */}
          <div className="leistungen-grid">
            <FadeIn className="leistung-card" delay={0.2}>
              <div className="card-icon">
                <Image src="/images/icon_01.svg" title="Verletzungen & Einschränkungen" alt="Verletzungen & Einschränkungen" width={60} height={60} />
              </div>
              <h3>Verletzungen & Einschränkungen</h3>
              <p className="card-description">Professionelle Rehabilitation nach Verletzungen</p>
              <ul className="card-list">
                <li>Bandscheiben</li>
                <li>Kreuzband</li>
                <li>Gelenke uvm.</li>
              </ul>
            </FadeIn>

            <FadeIn className="leistung-card" delay={0.3}>
              <div className="card-icon">
                <Image src="/images/icon_02.svg" title="Leistungs-Sportler" alt="Leistungs-Sportler" width={60} height={60} />
              </div>
              <h3>Leistungs-Sportler</h3>
              <p className="card-description">Optimiere deine Performance</p>
              <ul className="card-list">
                <li>Wettkampfvorbereitung</li>
                <li>Ausdauertraining</li>
                <li>Athletiktraining</li>
              </ul>
            </FadeIn>

            <FadeIn className="leistung-card" delay={0.4}>
              <div className="card-icon">
                <Image src="/images/icon_03.svg" title="Beratung" alt="Beratung" width={60} height={60} />
              </div>
              <h3>Beratung</h3>
              <p className="card-description">Individuelle Strategien für deinen Erfolg</p>
              <ul className="card-list">
                <li>Ernährungsberatung</li>
                <li>Trainingsplan</li>
              </ul>
            </FadeIn>

            <FadeIn className="leistung-card" delay={0.5}>
              <div className="card-icon">
                <Image src="/images/icon_04.svg" title="Fitness" alt="Fitness" width={60} height={60} />
              </div>
              <h3>Fitness</h3>
              <p className="card-description">Erreiche deine persönlichen Ziele</p>
              <ul className="card-list">
                <li>Muskelaufbau</li>
                <li>Beweglichkeit</li>
                <li>Körperfett-Reduzierung</li>
              </ul>
            </FadeIn>
          </div>

          {/* Call to Action */}
          <FadeIn direction="up" delay={0.6} className="ziel-cta">
            <Link href="#kontakt" className="button key cta-large">
              <span>JETZT FIT WERDEN</span>
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </FadeIn>
        </div>
      </section>

      <section id="studio">
        <div className="start">
          <FadeIn direction="right">
            <div className="studio-content">
              <div className="studio-main">
                <h3 className="studio-title">PERSONAL TRAINING STUDIO</h3>
                <ul className="studio-features">
                  <li>Training & Kurse nur mit Termin</li>
                  <li>Klimatisierte Räume</li>
                  <li>Outdoor Bereich</li>
                </ul>
                <a href="/kursplan.pdf" className="button ghost studio-btn" target="_blank" rel="noopener noreferrer">
                  <i className="fa-solid fa-download"></i>
                  <span>KURSPLAN</span>
                </a>
              </div>

              <div className="studio-info-grid">
                <div className="studio-info-item">
                  <h4 className="studio-info-label">ÖFFNUNGSZEITEN</h4>
                  <p className="studio-info-value">Nach Absprache</p>
                  <p className="studio-info-note">(Keine regulären Öffnungszeiten)</p>
                </div>

                <div className="studio-info-item">
                  <h4 className="studio-info-label">ADRESSE</h4>
                  <p className="studio-info-value">Marktplatz 28a<br/>68723 Schwetzingen</p>
                  <a href="https://maps.app.goo.gl/19rmohZyWYcpoT5JA" target="_blank" className="button ghost studio-btn-small" rel="noopener noreferrer">
                    <span>KOMM VORBEI</span>
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="end">
            <StudioGallery />
        </div>
      </section>

      <section id="preise">
        <div className="wrapper">
          <FadeIn direction="down">
            <div className="pricing-header">
              <h2 className="pricing-title">PREISE & PAKETE</h2>
              <p className="pricing-subtitle">Transparente Preise für dein Training</p>
            </div>
          </FadeIn>
          
          <div className="pricing-grid">
          <FadeIn className="pricing-card" delay={0.1}>
            <h3>Personal Training</h3>
            <table>
              <tbody>
                <tr>
                  <td >Einzelstunde</td>
                  <td>99 €</td>
                </tr>
                <tr>
                  <td>5er Karte</td>
                  <td>95 €<br/>
                    <span className="sub-text">pro Einheit</span><br/>
                    <i>475 € gesamt</i>
                  </td>
                </tr>
                <tr>
                  <td>10er Karte</td>
                  <td>90 €<br/>
                    <span className="sub-text">pro Einheit</span><br/>
                    <i>900 € gesamt</i>
                  </td>
                </tr>
              </tbody>
            </table>
          </FadeIn>

          <FadeIn className="pricing-card" delay={0.2}>
            <h3>Kurse</h3>
            <table>
              <tbody>
                <tr>
                  <td>5er Karte</td>
                  <td>5 Einheiten</td>
                  <td>60 €</td>
                </tr>
                <tr>
                  <td>10er Karte</td>
                  <td>10 Einheiten</td>
                  <td>99 €</td>
                </tr>
              </tbody>
            </table>
            
            <div style={{marginTop: "2rem"}}>
               <a href="/kursplan.pdf" className="button ghost fluid" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-download"></i><span>Kursplan</span></a>
            </div>
          </FadeIn>

          <FadeIn className="pricing-card" delay={0.3}>
            <h3>Beratung</h3>
            <table>
              <tbody>
                <tr>
                  <td>Ernährungsberatung</td>
                  <td>99 €</td>
                </tr>
                <tr>
                  <td>Trainingsplanung</td>
                  <td>99 €</td>
                </tr>
              </tbody>
            </table>
          </FadeIn>

          <FadeIn className="pricing-card" delay={0.4}>
            <h3>Buche den Trainer</h3>
            <table>
              <tbody>
                <tr>
                  <td>Einzeltraining</td>
                  <td>99 €</td>
                </tr>
                <tr>
                  <td>Gruppentraining</td>
                  <td>150 €</td>
                </tr>
              </tbody>
            </table>
          </FadeIn>

          <FadeIn className="pricing-card dark" delay={0.5}>
            <h3>Mietbares Studio</h3>
            <p style={{marginBottom: "1rem"}}>Für dein Training mit deiner eigenen Gruppe oder zum Filmen für deinen Social Media Content.</p>
            <p className="sub-text">(Preise auf Anfrage je nach Dauer und Nutzung)</p>
          </FadeIn>
          </div>
        </div>
      </section>

     

      <TrainerTeaser />

     
      </main>
  );
}
