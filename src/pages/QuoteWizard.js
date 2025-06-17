import React, { useState } from "react";
import appartement from "../assets/appartement.png";
import maison from "../assets/maison.png";
import demeure from "../assets/demeure.png";
import residence from "../assets/residence.png";
import pro from "../assets/pro.png";
import "../styles/QuoteWizard.css";

const besoinsOptions = [
  { value: "Un appartement", icon: appartement, label: "Un appartement" },
  { value: "Une maison", icon: maison, label: "Une maison" },
  { value: "Une grande demeure", icon: demeure, label: "Une grande demeure" },
  {
    value: "Une résidence secondaire",
    icon: residence,
    label: "Une résidence secondaire",
  },
  {
    value: "Ménage pour professionnels",
    icon: pro,
    label: "Ménage pour professionnels",
  },
];

export default function QuoteWizard() {
  const [form, setForm] = useState({ besoin_pour: "" });

  return (
    <div className="besoins-cards">
      {besoinsOptions.map((opt) => (
        <button
          type="button"
          key={opt.value}
          className={`besoin-card${
            form.besoin_pour === opt.value ? " selected" : ""
          }`}
          onClick={() => setForm((f) => ({ ...f, besoin_pour: opt.value }))}
        >
          <img src={opt.icon} alt={opt.label} className="besoin-icon" />
          <span className="besoin-label">{opt.label}</span>
        </button>
      ))}
    </div>
  );
}
