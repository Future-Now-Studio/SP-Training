"use client";

import { useState } from "react";

interface TrainingType {
  id: string;
  name: string;
  icon: string;
}

const trainingTypes: TrainingType[] = [
  { id: "einzel", name: "Einzeltraining", icon: "fa-user" },
  { id: "gruppe", name: "Gruppentraining", icon: "fa-users" },
  { id: "verein", name: "Vereinstraining", icon: "fa-building" },
  { id: "firma", name: "Firmenfitness", icon: "fa-briefcase" },
];

export default function TrainingTypeSelector() {
  const [selected, setSelected] = useState("einzel");

  return (
    <div className="training-type-selector">
      {trainingTypes.map((type) => (
        <button
          key={type.id}
          onClick={() => setSelected(type.id)}
          className={`training-type-btn ${selected === type.id ? "active" : ""}`}
        >
          <i className={`fa-solid ${type.icon}`}></i>
          <span>{type.name}</span>
        </button>
      ))}
    </div>
  );
}

