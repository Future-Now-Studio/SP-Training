"use client";

import { useState } from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import FadeIn from "./FadeIn";

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_ztu0zmc",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_4nfx2lc",
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone || "Nicht angegeben",
          message: formData.message,
          to_email: "kontakt@sp-fitness.de",
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "nca4dQIm34TP9OD49"
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="site-footer">
      {/* Contact CTA Section */}
      <section id="kontakt" className="footer-cta">
        <div className="wrapper">
          <FadeIn direction="up" delay={0.1}>
            <h2 className="footer-cta-title">Bereit durchzustarten?</h2>
            <p className="footer-cta-subtitle">
              Kontaktiere uns jetzt und starte deine Fitness-Reise noch heute!
            </p>
          </FadeIn>

          <div className="footer-cta-content">
            {/* Contact Form */}
            <FadeIn direction="right" delay={0.2} className="footer-form-wrapper">
              <form className="footer-contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Dein Name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">E-Mail *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="deine@email.de"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Telefon</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="0176 / 96 25 25 17"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Nachricht *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Wie können wir dir helfen?"
                  />
                </div>
                {submitStatus === "success" && (
                  <div className="form-success">
                    <i className="fa-solid fa-check-circle"></i>
                    <span>Nachricht erfolgreich gesendet! Wir melden uns schnellstmöglich.</span>
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="form-error">
                    <i className="fa-solid fa-exclamation-circle"></i>
                    <span>Fehler beim Senden. Bitte versuche es erneut oder kontaktiere uns direkt.</span>
                  </div>
                )}
                <button type="submit" className="button key" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <i className="fa-solid fa-spinner fa-spin"></i>
                      <span>Wird gesendet...</span>
                    </>
                  ) : (
                    <>
                      <span>Nachricht senden</span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </>
                  )}
                </button>
              </form>
            </FadeIn>

            {/* Quick Contact Buttons */}
            <FadeIn direction="left" delay={0.3} className="footer-quick-contact">
              <h3 className="quick-contact-title">Oder kontaktiere uns direkt</h3>
              <div className="quick-contact-buttons">
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
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Footer Bottom */}
      <section className="footer-bottom">
        <div className="wrapper">
          <div className="footer-grid">
            {/* Phone & WhatsApp */}
            <FadeIn direction="up" delay={0.1} className="footer-column">
              <h3 className="footer-section-heading">TELEFON & WHATSAPP</h3>
              <a href="tel:+4917696252517" className="footer-contact-value">
                0176 / 96 25 25 17
              </a>
            </FadeIn>

            {/* Email */}
            <FadeIn direction="up" delay={0.2} className="footer-column">
              <h3 className="footer-section-heading">E-MAIL</h3>
              <a href="mailto:kontakt@sp-fitness.de" className="footer-contact-value">
                KONTAKT@SP-FITNESS.DE
              </a>
            </FadeIn>

            {/* Company Info & Legal */}
            <FadeIn direction="up" delay={0.3} className="footer-column">
              <h3 className="footer-section-heading">SP FITNESS BY SEBASTIAN PFAU E.K.</h3>
              <div className="footer-company-details">
                <p>Firmeninhaber: <strong>Sebastian Pfau</strong></p>
                <p>Marktplatz 28a</p>
                <p>68723 Schwetzingen</p>
                <br />
                <p>Registergericht: <strong>Amtsgericht Mannheim</strong></p>
                <p>Registernummer: <strong>HRA 712334</strong></p>
                <p>USt-IdNr.: <strong>DE453720499</strong></p>
                <br />
                <Link href="/datenschutz" className="footer-datenschutz-link">
                  Datenschutz
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </footer>
  );
}

