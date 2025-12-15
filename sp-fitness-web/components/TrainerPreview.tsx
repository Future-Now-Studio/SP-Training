"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "./FadeIn";
import { trainers } from "@/data/trainers";

export default function TrainerPreview() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTrainer = () => {
    setCurrentIndex((prev) => (prev + 1) % trainers.length);
  };

  const prevTrainer = () => {
    setCurrentIndex((prev) => (prev - 1 + trainers.length) % trainers.length);
  };

  const goToTrainer = (index: number) => {
    setCurrentIndex(index);
  };

  const currentTrainer = trainers[currentIndex];

  return (
    <section id="trainer-preview">
      <div className="wrapper">
        <FadeIn direction="down">
          <div className="trainer-preview-header">
            <h2 className="trainer-preview-title">Unser Trainer-Team</h2>
            <p className="trainer-preview-subtitle">Lerne unsere erfahrenen Trainer kennen</p>
          </div>
        </FadeIn>

        <div className="trainer-preview-container">
          {/* Trainer Card */}
          <FadeIn key={currentIndex} direction="up" className="trainer-preview-card">
            <div className="trainer-preview-image-wrapper">
              <Image
                src={currentTrainer.image}
                alt={currentTrainer.imageAlt}
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="trainer-preview-overlay"></div>
            </div>
            
            <div className="trainer-preview-content">
              <h3 className="trainer-preview-name">{currentTrainer.name}</h3>
              <p className="trainer-preview-title-text">{currentTrainer.title}</p>
              <p className="trainer-preview-intro">{currentTrainer.intro}</p>
              
              {/* Specialties */}
              <div className="trainer-preview-specialties">
                {currentTrainer.specialties.slice(0, 4).map((specialty, index) => (
                  <span key={index} className="trainer-preview-tag">
                    {specialty}
                  </span>
                ))}
              </div>

       
            </div>
          </FadeIn>

          {/* Navigation Controls */}
          <div className="trainer-preview-controls">
            <button 
              className="trainer-preview-nav-btn trainer-preview-prev"
              onClick={prevTrainer}
              aria-label="Vorheriger Trainer"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            
            {/* Dots Indicator */}
            <div className="trainer-preview-dots">
              {trainers.map((_, index) => (
                <button
                  key={index}
                  className={`trainer-preview-dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => goToTrainer(index)}
                  aria-label={`Trainer ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              className="trainer-preview-nav-btn trainer-preview-next"
              onClick={nextTrainer}
              aria-label="Nächster Trainer"
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

