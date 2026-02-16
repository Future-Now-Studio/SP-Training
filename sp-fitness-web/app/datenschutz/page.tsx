import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Datenschutzerklärung – SP Fitness by Sebastian Pfau",
  description: "Datenschutzerklärung von SP Fitness by Sebastian Pfau e.K. Informationen zur Datenverarbeitung gemäß DSGVO.",
  keywords: "Datenschutz, DSGVO, Datenschutzerklärung, SP Fitness, Sebastian Pfau",
  openGraph: {
    title: "Datenschutzerklärung – SP Fitness by Sebastian Pfau",
    description: "Datenschutzerklärung von SP Fitness by Sebastian Pfau e.K.",
    url: "https://www.sp-fitness.de/datenschutz",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Datenschutzerklärung – SP Fitness by Sebastian Pfau",
    description: "Datenschutzerklärung von SP Fitness by Sebastian Pfau e.K.",
  },
};

export default function Datenschutz() {
  return (
    <main>
      <section className="datenschutz-hero">
        <div className="wrapper">
          <FadeIn direction="up" delay={0.2}>
            <h1 className="datenschutz-title">Datenschutzerklärung</h1>
            <p className="datenschutz-subtitle">SP Fitness by Sebastian Pfau e.K.</p>
          </FadeIn>
        </div>
      </section>

      <section className="datenschutz-content">
        <div className="wrapper">
          <div className="datenschutz-text">
            <FadeIn direction="up" delay={0.3}>
              <div className="datenschutz-section">
                <h2>1. Wer ist für die Datenverarbeitung verantwortlich?</h2>
                <p>
                  SP Fitness by Sebastian Pfau e.K.<br />
                  Sebastian Pfau<br />
                  Marktplatz 28a<br />
                  68723 Schwetzingen<br />
                  Telefon: <a href="tel:+4917696252517">0176 96252517</a><br />
                  E-Mail: <a href="mailto:info@sp-fitness.de">info@sp-fitness.de</a><br />
                  Website: <a href="https://www.sp-fitness.de" target="_blank" rel="noopener noreferrer">www.sp-fitness.de</a>
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.4}>
              <div className="datenschutz-section">
                <h2>2. Datenschutzbeauftragter</h2>
                <p>Kein Datenschutzbeauftragter erforderlich (§ 38 Abs. 1 BDSG). Dennoch wird Datenschutz ernst genommen.</p>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.5}>
              <div className="datenschutz-section">
                <h2>3. Begriffsbestimmungen</h2>
                <p>Es werden Begriffe gemäß DSGVO verwendet, u.a.:</p>
                <ul>
                  <li><strong>Personenbezogene Daten:</strong> Informationen über eine identifizierte oder identifizierbare natürliche Person.</li>
                  <li><strong>Verarbeitung:</strong> Jeder Vorgang im Zusammenhang mit personenbezogenen Daten.</li>
                  <li><strong>Verantwortlicher:</strong> Entscheidet über Zwecke und Mittel der Verarbeitung.</li>
                  <li><strong>Pseudonymisierung:</strong> Daten ohne zusätzliche Info keiner Person zuordenbar.</li>
                  <li><strong>Auftragsverarbeiter:</strong> Verarbeitet Daten im Auftrag des Verantwortlichen.</li>
                  <li><strong>Empfänger:</strong> Erhält personenbezogene Daten.</li>
                  <li><strong>Dritter:</strong> Nicht direkt Beteiligter.</li>
                  <li><strong>Einwilligung:</strong> Freiwillige Willensbekundung zur Datenverarbeitung.</li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.6}>
              <div className="datenschutz-section">
                <h2>4. Allgemeine Informationen zur Datenverarbeitung</h2>
                
                <h3>4.1 Umfang der Verarbeitung</h3>
                <p>Nur soweit für Website notwendig oder gesetzlich erlaubt bzw. mit Einwilligung.</p>

                <h3>4.2 Rechtsgrundlage</h3>
                <p>Verarbeitung erfolgt gemäß Art. 6 DSGVO, u.a. auf Basis von Einwilligung, Vertragserfüllung oder berechtigtem Interesse.</p>

                <h3>4.3 Datenweitergabe</h3>
                <p>Nur mit Einwilligung oder gesetzlicher Grundlage. Externe Dienstleister werden vertraglich gebunden (Art. 28, 26 DSGVO).</p>

                <h3>4.4 Drittstaaten</h3>
                <p>Datenübertragung in Drittländer nur mit geeigneten Garantien, z.B. Standardvertragsklauseln.</p>

                <h3>4.5 Speicherdauer</h3>
                <p>Nur solange notwendig. Danach Löschung oder Einschränkung der Verarbeitung.</p>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.7}>
              <div className="datenschutz-section">
                <h2>5. Ihre Rechte</h2>
                <p>Sie haben Rechte nach Art. 15–21 DSGVO, u.a. auf Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch, Datenübertragbarkeit.</p>

                <h3>5.1 Widerspruchsrecht</h3>
                <p>Gegen Verarbeitung aufgrund berechtigter Interessen oder Direktwerbung.</p>

                <h3>5.2 Widerruf der Einwilligung</h3>
                <p>Einwilligung kann jederzeit widerrufen werden (für die Zukunft).</p>

                <h3>5.3 Auskunftsrecht</h3>
                <p>Auf Anfrage informieren wir, welche Daten gespeichert sind.</p>

                <h3>5.4 Weitere Rechte</h3>
                <p>Rechte auf Berichtigung, Löschung, Datenübertragung etc.</p>

                <h3>5.5 Beschwerderecht</h3>
                <p>Beschwerde bei Aufsichtsbehörde möglich.</p>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.8}>
              <div className="datenschutz-section">
                <h2>6. Nutzung der Webseite sp-fitness.de</h2>

                <h3>6.1 Server-Log-Files</h3>
                <p>Browsertyp, IP-Adresse, Datum/Zeit etc. werden temporär gespeichert.</p>

                <h3>6.2 Kontaktaufnahme</h3>
                <p>Daten über E-Mail oder Telefon werden nach max. 7 Tagen gelöscht.</p>

                <h3>6.3 Newsletter</h3>
                <p>Direktwerbung nur mit vorheriger Zustimmung. Widerspruch jederzeit möglich.</p>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.9}>
              <div className="datenschutz-section">
                <h2>7. Cookies</h2>
                <p>Nur technisch notwendige Cookies werden gesetzt.</p>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={1.0}>
              <div className="datenschutz-section">
                <h2>8. Datensicherheit</h2>
                <p>SSL-Verschlüsselung und technische/organisatorische Maßnahmen sichern Ihre Daten.</p>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={1.1}>
              <div className="datenschutz-section">
                <h2>9. Social-Media-Plattformen</h2>
                <p>Nutzung von Plattformen wie Instagram. Verarbeitung erfolgt auf Grundlage Ihrer Einwilligung gegenüber dem Plattformbetreiber.</p>

                <h3>Instagram</h3>
                <p>
                  <strong>Anbieter:</strong> Instagram Inc., 1601 Willow Road, Menlo Park, CA, 94025, USA<br />
                  <a href="https://help.instagram.com/519522125107875" target="_blank" rel="noopener noreferrer">Datenschutzerklärung</a><br />
                  <a href="https://help.instagram.com/519522125107875" target="_blank" rel="noopener noreferrer">Opt-Out</a>
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={1.2}>
              <div className="datenschutz-section">
                <h2>10. Zielgruppe</h2>
                <p>Nur für Personen über 16 Jahren ohne Zustimmung der Eltern.</p>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={1.3}>
              <div className="datenschutz-section">
                <h2>11. Änderungen dieser Datenschutzerklärung</h2>
                <p>Stand: April 2025. Änderungen vorbehalten. Aktuell abrufbar unter: <a href="https://www.sp-fitness.de/datenschutz" target="_blank" rel="noopener noreferrer">www.sp-fitness.de/datenschutz/</a></p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}








