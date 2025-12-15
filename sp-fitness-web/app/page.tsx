import Link from "next/link";
import Image from "next/image";
import StudioGallery from "@/components/StudioGallery";
import FadeIn from "@/components/FadeIn";
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
                <Link href="/kurse" className="button hero-cta-secondary">
                  <i className="fa-solid fa-calendar-days"></i>
                  <span>KURSPLAN</span>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="leistungen">
        <div className="wrapper">
          {/* Header Section */}
          <FadeIn direction="down" className="ziel-header">
            <p className="ziel-question">WAS IST DEIN ZIEL?</p>
            <h3 className="ziel-heading">
              Ich helfe <span className="highlight-blue">DIR</span>, dich an dein Ziel zu bringen
            </h3>
            <div className="ziel-underline"></div>
          </FadeIn>

          {/* Content Cards */}
          <div className="leistungen-grid">
            <FadeIn className="leistung-card" delay={0.2}>
              <div className="card-icon">
                <Image src="/images/icon_01.svg" title="Verletzungen & Einschränkungen" alt="Verletzungen & Einschränkungen" width={140} height={140} />
              </div>
              <h3>Verletzungen & Einschränkungen</h3>
              <ul className="card-list">
                <li>Bandscheiben</li>
                <li>Kreuzband</li>
                <li>Gelenke uvm.</li>
              </ul>
            </FadeIn>

            <FadeIn className="leistung-card" delay={0.3}>
              <div className="card-icon">
                <Image src="/images/icon_02.svg" title="Leistungs-Sportler" alt="Leistungs-Sportler" width={140} height={140} />
              </div>
              <h3>Leistungs-Sportler</h3>
              <ul className="card-list">
                <li>Wettkampfvorbereitung</li>
                <li>Ausdauertraining</li>
                <li>Athletiktraining</li>
              </ul>
            </FadeIn>

            <FadeIn className="leistung-card" delay={0.4}>
              <div className="card-icon">
                <Image src="/images/icon_03.svg" title="Beratung" alt="Beratung" width={140} height={140} />
              </div>
              <h3>Beratung</h3>
              <ul className="card-list">
                <li>Ernährungsberatung</li>
                <li>Trainingsplan</li>
              </ul>
            </FadeIn>

            <FadeIn className="leistung-card" delay={0.5}>
              <div className="card-icon">
                <Image src="/images/icon_04.svg" title="Fitness" alt="Fitness" width={140} height={140} />
              </div>
              <h3>Fitness</h3>
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
                <h1 className="studio-title">PERSONAL TRAINING STUDIO</h1>
                
                <p className="studio-description">
                  Unser modernes Studio im Herzen von Schwetzingen bietet dir die perfekte Umgebung für dein individuelles Training. Hier findest du alles, was du für deine Fitnessziele brauchst – von hochwertigen Trainingsgeräten bis hin zu einer motivierenden Atmosphäre.
                </p>

                <div className="studio-features-section">
                  <h3 className="studio-features-title">Ausstattung & Services</h3>
                  <ul className="studio-features">
                    <li>
                      <i className="fa-solid fa-calendar-check"></i>
                      <span>Training & Kurse nur mit Termin</span>
                    </li>
                    <li>
                      <i className="fa-solid fa-snowflake"></i>
                      <span>Klimatisierte Räume</span>
                    </li>
                    <li>
                      <i className="fa-solid fa-sun"></i>
                      <span>Outdoor Bereich</span>
                    </li>
                    <li>
                      <i className="fa-solid fa-dumbbell"></i>
                      <span>Moderne Trainingsgeräte</span>
                    </li>
                    <li>
                      <i className="fa-solid fa-parking"></i>
                      <span>Parkplätze in der Nähe</span>
                    </li>
                    <li>
                      <i className="fa-solid fa-users"></i>
                      <span>Individuelle Betreuung</span>
                    </li>
                  </ul>
                </div>

                <div className="studio-address-section">
                  <h3 className="studio-address-label">Adresse</h3>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=Marktplatz+28a,+68723+Schwetzingen" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="studio-address-value studio-address-link"
                  >
                    Marktplatz 28a, 68723 Schwetzingen
                    <i className="fa-solid fa-external-link"></i>
                  </a>
                </div>

                <div className="studio-cta">
                  <Link href="#kontakt" className="button key">
                    <span>JETZT KONTAKTIEREN</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
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
            {/* Personal Training */}
            <FadeIn className="pricing-card pricing-card-featured" delay={0.1}>
              <div className="pricing-card-header">
                <h3>Personal Training</h3>
                <p className="pricing-card-description">Individuelles Einzeltraining</p>
              </div>
              <div className="pricing-list">
                <div className="pricing-item">
                  <span className="pricing-label">Einzelstunde</span>
                  <span className="pricing-price">99 €</span>
                </div>
                <div className="pricing-item">
                  <span className="pricing-label">5er Karte</span>
                  <span className="pricing-price">99 € <small>pro Einheit</small> <small style={{display: 'block', marginTop: '0.25rem'}}>475 € gesamt</small></span>
                </div>
                <div className="pricing-item">
                  <span className="pricing-label">10er Karte</span>
                  <span className="pricing-price">90 € <small>pro Einheit</small> <small style={{display: 'block', marginTop: '0.25rem'}}>900 € gesamt</small></span>
                </div>
              </div>
            </FadeIn>

            {/* Group Courses */}
            <FadeIn className="pricing-card" delay={0.2}>
              <div className="pricing-card-header">
                <h3>Gruppenkurse</h3>
                <p className="pricing-card-description">Yoga, Pilates & mehr</p>
              </div>
              <div className="pricing-list">
                <div className="pricing-item">
                  <span className="pricing-label">5er Karte</span>
                  <span className="pricing-price">60 € <small>12 €/Einheit</small></span>
                </div>
                <div className="pricing-item">
                  <span className="pricing-label">10er Karte</span>
                  <span className="pricing-price">99 € <small>9,90 €/Einheit</small></span>
                </div>
                <div className="pricing-item">
                  <span className="pricing-label">Mitgliedschaft <small>6 Monate</small></span>
                  <span className="pricing-price">60 € <small>pro Monat</small></span>
                </div>
                <div className="pricing-item">
                  <span className="pricing-label">Mitgliedschaft <small>12 Monate</small></span>
                  <span className="pricing-price">50 € <small>pro Monat</small></span>
                </div>
              </div>
              
            </FadeIn>

            {/* Consultations */}
            <FadeIn className="pricing-card" delay={0.3}>
              <div className="pricing-card-header">
                <h3>Beratung</h3>
                <p className="pricing-card-description">Professionelle Unterstützung</p>
              </div>
              <div className="pricing-list">
                <div className="pricing-item">
                  <span className="pricing-label">Ernährungsberatung</span>
                  <span className="pricing-price">99 €</span>
                </div>
                <div className="pricing-item">
                  <span className="pricing-label">Trainingsplanung</span>
                  <span className="pricing-price">99 €</span>
                </div>
              </div>
            </FadeIn>

            {/* Group Training */}
            <FadeIn className="pricing-card" delay={0.4}>
              <div className="pricing-card-header">
                <h3>Gruppentraining</h3>
                <p className="pricing-card-description">Training mit deiner Gruppe</p>
              </div>
              <div className="pricing-list">
                <div className="pricing-item">
                  <span className="pricing-label">Einzeltraining</span>
                  <span className="pricing-price">99 €</span>
                </div>
                <div className="pricing-item">
                  <span className="pricing-label">Gruppentraining</span>
                  <span className="pricing-price">150 €</span>
                </div>
              </div>
            </FadeIn>

            {/* Studio Rental */}
            <FadeIn className="pricing-card" delay={0.5}>
              <div className="pricing-card-header">
                <h3>Studio mieten</h3>
                <p className="pricing-card-description">Für dein Training oder Content</p>
              </div>
              <div className="pricing-card-content">
                <p>Perfekt für dein Training mit deiner eigenen Gruppe oder zum Filmen für deinen Social Media Content.</p>
                <p className="pricing-card-note">Preise auf Anfrage je nach Dauer und Nutzung</p>
                <p>Melde dich bei uns per Kontaktformular, Mail oder Telefon.</p>

              </div>
             
            </FadeIn>
          </div>

          {/* Special Packages */}
          <div className="special-packages">
            <FadeIn className="special-package-card special-package-light" delay={0.6}>
              <div className="special-package-badge">Startpaket</div>
              <h3 className="special-package-title">Light</h3>
              <div className="special-package-price">475 €</div>
              <ul className="special-package-features">
                <li><i className="fa-solid fa-check"></i> 4 Personal Trainings</li>
                <li><i className="fa-solid fa-check"></i> Startgespräch (Anamnese)</li>
                <li><i className="fa-solid fa-check"></i> 1 Ernährungsberatung</li>
                <li><i className="fa-solid fa-check"></i> 1 Monat Gruppenkurse kostenlos</li>
              </ul>
            </FadeIn>

            <FadeIn className="special-package-card special-package-premium" delay={0.65}>
              <div className="special-package-badge">Startpaket</div>
              <h3 className="special-package-title">Premium</h3>
              <div className="special-package-price">900 €</div>
              <ul className="special-package-features">
                <li><i className="fa-solid fa-check"></i> 9 Personal Trainings</li>
                <li><i className="fa-solid fa-check"></i> Startgespräch (Anamnese)</li>
                <li><i className="fa-solid fa-check"></i> 1 Ernährungsberatung</li>
                <li><i className="fa-solid fa-check"></i> 2 Monate Gruppenkurse kostenlos</li>
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

     

      <TrainerTeaser />

     
      </main>
  );
}
