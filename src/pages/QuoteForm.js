import React, { useState } from "react";
import appartement from "../assets/appartement.png";
import maison from "../assets/maison.png";
import demeure from "../assets/demeure.png";
import residence from "../assets/residance.png";
import pro from "../assets/pro.png";
import logo from "../assets/logo.png";
import "../styles/DevisWizard.css";

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

const stepLabels = [
  "Parlons de vous",
  "Votre logement",
  "Services choisis",
  "Vos coordonnées",
];

export default function DevisWizard() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({ besoin_pour: "" });

  // Sélection du besoin
  const handleBesoinSelect = (value) => {
    setForm((f) => ({ ...f, besoin_pour: value }));
  };

  // Navigation étapes
  const next = () => setStep((s) => Math.min(s + 1, stepLabels.length - 1));
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  return (
    <div className="devis-wizard-container">
      {/* Header Shiva style */}
      <header className="devis-header">
        <div className="devis-header-left">
          <img src={logo} alt="Logo" className="devis-logo" />
          <a href="/" className="devis-retour">
            Retour au site
          </a>
        </div>
        <div className="devis-header-center">
          <span className="devis-title">Demandez un devis</span>
          <div className="devis-steps-bar">
            {stepLabels.map((label, i) => (
              <div
                key={i}
                className={`devis-step${i === step ? " active" : ""}`}
              >
                <span className="devis-step-number">{i + 1}</span>
                <span className="devis-step-label">{label}</span>
                {i < stepLabels.length - 1 && (
                  <span className="devis-step-sep" />
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="devis-header-right">
          <span className="devis-phone">09 69 39 47 47</span>
          <span className="devis-phone-desc">prix d'un appel local</span>
        </div>
      </header>

      {/* Étape 1 : Parler de vous */}
      {step === 0 && (
        <section className="devis-step-section">
          <div className="devis-step-title">ÉTAPE 1 / 4</div>
          <h2 className="devis-step-main">Parlons de vous</h2>
          <div className="devis-step-sub">
            Le spécialiste du ménage repassage à domicile
          </div>
          <div className="devis-avatar-row">
            <span className="devis-avatar">👤</span>
            <span className="devis-avatar-name">Fabien Durand</span>
          </div>
          <div className="devis-step-desc">
            Aidez-nous à mieux vous connaître !<br />
            Nous trouverons pour vous l'intervenant idéal et les services les
            plus adaptés à vos besoins !
          </div>
          <div className="devis-timing">
            ⏱️ Temps à prévoir <b>2 min</b>
          </div>
          <div className="devis-step-question">
            Pouvez-vous m'en dire un peu plus ?<br />
            Vous avez un besoin pour <b>*</b> :
          </div>
          <div className="devis-besoins-cards">
            {besoinsOptions.map((opt) => (
              <button
                type="button"
                key={opt.value}
                className={`devis-besoin-card${
                  form.besoin_pour === opt.value ? " selected" : ""
                }`}
                onClick={() => handleBesoinSelect(opt.value)}
              >
                <img
                  src={opt.icon}
                  alt={opt.label}
                  className="devis-besoin-icon"
                />
                <span className="devis-besoin-label">{opt.label}</span>
              </button>
            ))}
          </div>
          <div className="devis-step-nav">
            <button
              className="devis-next-btn"
              onClick={next}
              disabled={!form.besoin_pour}
            >
              Suivant &nbsp;→
            </button>
          </div>
        </section>
      )}
      {/* Étapes suivantes à compléter... */}
    </div>
  );
}
