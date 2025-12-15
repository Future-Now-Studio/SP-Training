"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownClicked, setDropdownClicked] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const [kurseDropdownOpen, setKurseDropdownOpen] = useState(false);
  const [kurseDropdownClicked, setKurseDropdownClicked] = useState(false);
  const kurseDropdownRef = useRef<HTMLLIElement>(null);

  const toggleMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
    setDropdownClicked(false);
    setKurseDropdownOpen(false);
    setKurseDropdownClicked(false);
  };

  const handleDropdownClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setDropdownClicked(true);
    setDropdownOpen(!dropdownOpen);
    // Close other dropdown when opening this one
    if (!dropdownOpen) {
      setKurseDropdownOpen(false);
      setKurseDropdownClicked(false);
    }
  };

  const handleKurseDropdownClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setKurseDropdownClicked(true);
    setKurseDropdownOpen(!kurseDropdownOpen);
    // Close other dropdown when opening this one
    if (!kurseDropdownOpen) {
      setDropdownOpen(false);
      setDropdownClicked(false);
    }
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
        setDropdownClicked(false);
      }
      if (kurseDropdownRef.current && !kurseDropdownRef.current.contains(event.target as Node)) {
        setKurseDropdownOpen(false);
        setKurseDropdownClicked(false);
      }
    };

    if (dropdownOpen || kurseDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen, kurseDropdownOpen]);

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
            <li 
              ref={dropdownRef}
              className="dropdown-container"
              onMouseEnter={() => {
                // Auto-open on hover for desktop (when mobile menu is closed and not manually clicked)
                if (!menuOpen && !dropdownClicked) {
                  setDropdownOpen(true);
                }
              }}
              onMouseLeave={() => {
                // Auto-close on hover leave for desktop (when mobile menu is closed and not manually clicked)
                if (!menuOpen && !dropdownClicked) {
                  setDropdownOpen(false);
                }
              }}
            >
              <a 
                href="#" 
                className="button flat dropdown-toggle" 
                onClick={handleDropdownClick}
              >
                Leistungen
                <i className={`fa-solid ${dropdownOpen ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
              </a>
              <ul className={`dropdown-menu ${dropdownOpen ? "active" : ""}`}>
                <li>
                  <Link href="/personaltraining" className="button flat" onClick={closeMenu}>
                    Personal Training
                  </Link>
                </li>
                <li>
                  <Link href="/ernaehrungsberatung" className="button flat" onClick={closeMenu}>
                    Ernährungsberatung
                  </Link>
                </li>
              </ul>
            </li>
            <li 
              ref={kurseDropdownRef}
              className="dropdown-container"
              onMouseEnter={() => {
                // Auto-open on hover for desktop (when mobile menu is closed and not manually clicked)
                if (!menuOpen && !kurseDropdownClicked) {
                  setKurseDropdownOpen(true);
                }
              }}
              onMouseLeave={() => {
                // Auto-close on hover leave for desktop (when mobile menu is closed and not manually clicked)
                if (!menuOpen && !kurseDropdownClicked) {
                  setKurseDropdownOpen(false);
                }
              }}
            >
              <a 
                href="#" 
                className="button flat dropdown-toggle" 
                onClick={handleKurseDropdownClick}
              >
                Kurse
                <i className={`fa-solid ${kurseDropdownOpen ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
              </a>
              <ul className={`dropdown-menu ${kurseDropdownOpen ? "active" : ""}`}>
                <li>
                  <Link href="/kurse" className="button flat" onClick={closeMenu}>
                    Kursplan
                  </Link>
                </li>
                <li>
                  <Link href="/hatha-yoga" className="button flat" onClick={closeMenu}>
                    Hatha Yoga
                  </Link>
                </li>
                <li>
                  <Link href="/yoga-nidra" className="button flat" onClick={closeMenu}>
                    Yoga Nidra
                  </Link>
                </li>
                <li>
                  <Link href="/pilates" className="button flat" onClick={closeMenu}>
                    Pilates
                  </Link>
                </li>
                <li>
                  <Link href="/wirbelsaeulengymnastik" className="button flat" onClick={closeMenu}>
                    Wirbelsäulengymnastik
                  </Link>
                </li>
                <li>
                  <Link href="/zirkeltraining" className="button flat" onClick={closeMenu}>
                    Zirkeltraining
                  </Link>
                </li>
              </ul>
            </li>
            <li><Link href="/#studio" className="button flat" onClick={closeMenu}>Studio</Link></li>
            <li><Link href="/#preise" className="button flat" onClick={closeMenu}>Preise</Link></li>
            <li><Link href="/#kontakt" className="button flat" onClick={closeMenu}>Kontakt</Link></li>
            <li><Link href="/#trainer" className="button flat" onClick={closeMenu}>Trainer</Link></li>
          </ul>
          
          {/* Social Icons on the right */}
          <ul className="links">
            <li><a className="phone-link" href="tel:+4917696252517"><i className="fa-solid fa-phone"></i></a></li>
            <li><a className="email-link" href="mailto:KONTAKT@SP-FITNESS.DE"><i className="fa-solid fa-envelope"></i></a></li>
            <li><a href="https://wa.me/4917696252517" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-whatsapp"></i></a></li>
            <li><a href="https://www.instagram.com/sp_fitness.personal_training/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a></li>
          </ul>
        </div>
      </div>
    </header>
  );
}
