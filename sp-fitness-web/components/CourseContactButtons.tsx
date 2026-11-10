/** WhatsApp, Telefon, E-Mail und Kontaktformular – für dunkle Hintergründe. */
export default function CourseContactButtons() {
  return (
    <div className="quick-contact-buttons kurse-contact-buttons">
      <a
        href="https://wa.me/4917696252517"
        target="_blank"
        rel="noopener noreferrer"
        className="quick-contact-btn whatsapp"
        aria-label="WhatsApp"
      >
        <i className="fa-brands fa-whatsapp"></i>
        <div className="quick-contact-info">
          <span className="quick-contact-label">WhatsApp</span>
          <span className="quick-contact-value">0176 / 96 25 25 17</span>
        </div>
      </a>
      <a
        href="tel:+4917696252517"
        className="quick-contact-btn phone"
        aria-label="Telefon"
      >
        <i className="fa-solid fa-phone"></i>
        <div className="quick-contact-info">
          <span className="quick-contact-label">Telefon</span>
          <span className="quick-contact-value">0176 / 96 25 25 17</span>
        </div>
      </a>
      <a
        href="mailto:kontakt@sp-fitness.de"
        className="quick-contact-btn email"
        aria-label="E-Mail"
      >
        <i className="fa-solid fa-envelope"></i>
        <div className="quick-contact-info">
          <span className="quick-contact-label">E-Mail</span>
          <span className="quick-contact-value">kontakt@sp-fitness.de</span>
        </div>
      </a>
      <a
        href="#kontakt"
        className="quick-contact-btn form"
        aria-label="Kontaktformular"
      >
        <i className="fa-solid fa-pen-to-square"></i>
        <div className="quick-contact-info">
          <span className="quick-contact-label">Kontaktformular</span>
          <span className="quick-contact-value">Nachricht schreiben</span>
        </div>
      </a>
    </div>
  );
}
