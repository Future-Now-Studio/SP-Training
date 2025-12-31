"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "./FadeIn";
import { trainers } from "@/data/trainers";

export default function TrainerTeaser() {
  const [showQualifications, setShowQualifications] = useState(false);
  // Use Sebastian as the main trainer
  const sebastian = trainers.find(t => t.name === "Sebastian") || trainers[0];

  const qualifications = [
    { title: "Fitness Trainer A-Lizenz", institution: "IFAA Fitnessakademie" },
    { title: "Übungsleiter B-Lizenz (Sport in der Rehabilitation, Profil: Orthopädie)", institution: "Deutscher Olympischer Sportbund" },
    { title: "Personal Trainer", institution: "IFAA Fitnessakademie" },
    { title: "Ernährungstrainer A-Lizenz", institution: "IFAA Fitnessakademie" },
    { title: "Gelernter Sport- und Fitnesskaufmann", institution: "IHK" },
    { title: "Fitness und Gesundheitstrainer", institution: "IFAA Fitnessakademie" },
    { title: "Group Fitness Workout Instructor", institution: "IFAA Fitnessakademie" },
    { title: "Sport-Reha-Trainer", institution: "IFAA Fitnessakademie" },
    { title: "3D Rückenkonzept", institution: "IFAA Fitnessakademie" },
    { title: "Body Coach", institution: "IFAA Fitnessakademie" },
    { title: "Funktional Trainer", institution: "IFAA Fitnessakademie" },
    { title: "Sport Taping", institution: "IFAA Fitnessakademie" },
    { title: "TRX Trainer", institution: "TRX" },
  ];

  return (
    <section id="trainer">
      <div className="wrapper">
        {/* Left Side - Content */}
        <FadeIn className="trainer-content" direction="right" delay={0.2}>
          <p className="trainer-subtitle">DEIN PERSONAL TRAINER</p>
          <h2 className="trainer-name">
            <span className="name-white">Sebastian</span> <span className="name-blue">Pfau</span>
          </h2>
          
          <p className="trainer-description">
            {sebastian.intro}
          </p>

          {/* Feature Boxes Grid */}
          <div className="trainer-features">
            <div className="feature-box">
              <div className="feature-icon">
                <i className="fa-solid fa-graduation-cap"></i>
              </div>
              <div className="feature-text">
                <strong>Zertifizierter Personal Trainer</strong>
                <span>Lizenzierter Fitnesstrainer</span>
              </div>
            </div>

            <div className="feature-box">
              <div className="feature-icon">
                <i className="fa-solid fa-user-group"></i>
              </div>
              <div className="feature-text">
                <strong>10+ Jahre Erfahrung</strong>
                <span>Im Fitness & Reha Bereich</span>
              </div>
            </div>

            <div className="feature-box">
              <div className="feature-icon">
                <i className="fa-solid fa-bullseye"></i>
              </div>
              <div className="feature-text">
                <strong>Individuelle Betreuung</strong>
                <span>Maßgeschneiderte Trainingspläne</span>
              </div>
            </div>

            <div className="feature-box">
              <div className="feature-icon">
                <i className="fa-solid fa-heart"></i>
              </div>
              <div className="feature-text">
                <strong>Leidenschaft</strong>
                <span>Für Fitness und Gesundheit</span>
              </div>
            </div>
          </div>

          {/* Qualifications Link */}
          <div className="qualifications-link-wrapper">
            <button 
              className="qualifications-link"
              onClick={() => setShowQualifications(true)}
            >
              Meine Qualifikationen
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>

          {/* Quote Section */}
          <div className="trainer-quote">
            <div className="quote-line"></div>
            <blockquote>
              "Mein Ziel ist es, dich nicht nur körperlich, sondern auch mental stärker zu machen. Zusammen erreichen wir, was du dir vorgenommen hast."
            </blockquote>
            <p className="quote-author">— Sebastian</p>
          </div>

        </FadeIn>

        {/* Right Side - Image */}
        <FadeIn className="trainer-image-wrapper" direction="left" delay={0.4}>
          <div className="trainer-image-frame">
            <Image 
              src={sebastian.image} 
              alt={sebastian.imageAlt} 
              fill
              style={{objectFit: "contain", objectPosition: "center"}}
              priority
            />
          </div>
        </FadeIn>
      </div>

      {/* Qualifications Modal */}
      {showQualifications && (
        <div className="qualifications-modal-overlay" onClick={() => setShowQualifications(false)}>
          <div className="qualifications-modal" onClick={(e) => e.stopPropagation()}>
            <div className="qualifications-modal-header">
              <h2 className="qualifications-modal-title">Meine Qualifikationen</h2>
              <button 
                className="qualifications-modal-close"
                onClick={() => setShowQualifications(false)}
                aria-label="Schließen"
              >
                <i className="fa-solid fa-times"></i>
              </button>
            </div>
            <div className="qualifications-list">
              {qualifications.map((qual, index) => (
                <div key={index} className="qualification-item">
                  <div className="qualification-title">{qual.title}</div>
                  <div className="qualification-institution">{qual.institution}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

