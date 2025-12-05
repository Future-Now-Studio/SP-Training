"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      <div className="wrapper">
        {/* Logo on the left */}
        <div className="start">
          <Link href="/" onClick={closeMenu} className="logo-link">
            <img
              src="/images/logo_header (1).svg"
              alt="SP Fitness by Sebastian Pfau"
              title="SP Fitness by Sebastian Pfau – Dein Trainer für Outdoor Kurse, Personal Training & Reha Sport in Schwetzingen"
              className="header-logo"
              height="100"
              width="auto"
            />
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <a id="menu-toggle" className="button flat" onClick={toggleMenu}>
          <i className={`fa-solid ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
        </a>

        {/* Navigation and Social Icons */}
        <div className={`end ${menuOpen ? "active" : ""}`}>
          {/* Centered Navigation */}
          <ul className="navigation">
            <li><Link href="/#start" className="button flat" onClick={closeMenu}>Start</Link></li>
            <li><Link href="/#leistungen" className="button flat" onClick={closeMenu}>Leistungen</Link></li>
            <li><Link href="/#studio" className="button flat" onClick={closeMenu}>Studio</Link></li>
            <li><Link href="/#preise" className="button flat" onClick={closeMenu}>Preise</Link></li>
            <li><Link href="/#kontakt" className="button flat" onClick={closeMenu}>Kontakt</Link></li>
            <li><Link href="/#trainer" className="button flat" onClick={closeMenu}>Trainer</Link></li>
            <li><Link href="/#impressum" className="button flat" onClick={closeMenu}>Impressum</Link></li>
          </ul>
          
          {/* Social Icons on the right */}
          <ul className="links">
            <li><a className="phone-link" href="tel:+4917696252517"><i className="fa-solid fa-square-phone"></i></a></li>
            <li><a className="email-link" href="mailto:kontakt@sp-fitness.de"><i className="fa-solid fa-square-envelope"></i></a></li>
            <li><a href="https://wa.me/4917696252517" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-square-whatsapp"></i></a></li>
            <li><a href="https://www.instagram.com/sp_fitness.personal_training/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-square-instagram"></i></a></li>
          </ul>
        </div>
      </div>
    </header>
  );
}
