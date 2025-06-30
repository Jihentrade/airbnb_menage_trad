import React, { useState } from "react";
import appartement from "../assets/appartement.png";
import maison from "../assets/maison.png";
import demeure from "../assets/demeure.png";
import residence from "../assets/residance.png";
import pro from "../assets/pro.png";
import logo from "../assets/logo.png";
import DevisStep3 from "../components/DevisStep3";
import DevisStep4 from "../components/DevisStep4";
import Notification from "../components/Notification";
import "../styles/DevisWizard.css";
import emailjs from "@emailjs/browser";

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

const surfaceOptions = [
  "Moins de 30m²",
  "30-50m²",
  "50-70m²",
  "70-90m²",
  "90-120m²",
  "Plus de 120m²",
];

const frequenceOptions = [
  { value: "ponctuel", label: "Ponctuel" },
  { value: "hebdomadaire", label: "Hebdomadaire" },
  { value: "bimensuel", label: "Bi-mensuel" },
  { value: "mensuel", label: "Mensuel" },
];

const nombreChambresOptions = ["1", "2", "3", "4", "5 ou plus"];
const nombreSallesDeBainOptions = ["1", "2", "3 ou plus"];

export default function DevisWizard() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    besoin_pour: "",
    surface: "",
    frequence: "",
    nombreChambres: "",
    nombreSallesDeBain: "",
    selectedServices: [],
    civilite: "",
    nom: "",
    prenom: "",
    email: "",
    adresse: "",
    telephone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [notification, setNotification] = useState({ message: "", type: "" });

  const showNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification({ message: "", type: "" });
    }, 3000);
  };

  // Sélection du besoin
  const handleBesoinSelect = (value) => {
    setForm((f) => ({ ...f, besoin_pour: value }));
  };

  // Navigation étapes
  const next = () => setStep((s) => Math.min(s + 1, stepLabels.length - 1));
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  // Gestion des changements de formulaire
  const handleChange = (field, value) => {
    setForm((f) => ({ ...f, [field]: value }));
  };

  const handleServicesChange = (services) => {
    setForm((f) => ({ ...f, selectedServices: services }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError("");

    const templateParams = {
      ...form,
      selectedServices: form.selectedServices.join(", "),
    };

    emailjs
      .send(
        "service_849nmjs",
        "template_vvsejoc",
        templateParams,
        "QQnnPAGBI4btbxOwG"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setLoading(false);
          showNotification(
            "Votre demande de devis a bien été envoyée !",
            "success"
          );
          setStep(0);
          setForm({
            besoin_pour: "",
            surface: "",
            frequence: "",
            nombreChambres: "",
            nombreSallesDeBain: "",
            selectedServices: [],
            civilite: "",
            nom: "",
            prenom: "",
            email: "",
            adresse: "",
            telephone: "",
            message: "",
          });
        },
        (err) => {
          console.log("FAILED...", err);
          setLoading(false);
          setError("Erreur lors de l'envoi. Veuillez réessayer.");
          showNotification(
            "Erreur lors de l'envoi. Veuillez réessayer.",
            "error"
          );
        }
      );
  };

  return (
    <div className="devis-wizard-container">
      <Notification message={notification.message} type={notification.type} />
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
          <span className="devis-phone">+ 33 7 53 64 15 03</span>
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
            <span className="devis-avatar-name">Delphine Russo</span>
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

      {/* Étape 2 : Votre logement */}
      {step === 1 && (
        <section className="devis-step-section">
          <div className="devis-step-title">ÉTAPE 2 / 4</div>
          <h2 className="devis-step-main">Votre logement</h2>
          <div className="devis-step-sub">
            Dites-nous en plus sur votre logement
          </div>

          <div className="devis-form-group">
            <label className="devis-label">
              Quelle est la surface de votre logement ? <b>*</b>
            </label>
            <div className="devis-options-grid">
              {surfaceOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  className={`devis-option-btn${
                    form.surface === option ? " selected" : ""
                  }`}
                  onClick={() => handleChange("surface", option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="devis-form-group">
            <label className="devis-label">
              À quelle fréquence souhaitez-vous notre intervention ? <b>*</b>
            </label>
            <div className="devis-options-grid">
              {frequenceOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  className={`devis-option-btn${
                    form.frequence === option.value ? " selected" : ""
                  }`}
                  onClick={() => handleChange("frequence", option.value)}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          <div className="devis-form-group">
            <label className="devis-label">
              Combien de chambres compte votre logement ? <b>*</b>
            </label>
            <div className="devis-options-grid">
              {nombreChambresOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  className={`devis-option-btn${
                    form.nombreChambres === option ? " selected" : ""
                  }`}
                  onClick={() => handleChange("nombreChambres", option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="devis-form-group">
            <label className="devis-label">
              Combien de salles de bain compte votre logement ? <b>*</b>
            </label>
            <div className="devis-options-grid">
              {nombreSallesDeBainOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  className={`devis-option-btn${
                    form.nombreSallesDeBain === option ? " selected" : ""
                  }`}
                  onClick={() => handleChange("nombreSallesDeBain", option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="devis-step-nav">
            <button className="devis-prev-btn" onClick={prev}>
              ← &nbsp;Précédent
            </button>
            <button
              className="devis-next-btn"
              onClick={next}
              disabled={
                !form.surface ||
                !form.frequence ||
                !form.nombreChambres ||
                !form.nombreSallesDeBain
              }
            >
              Suivant &nbsp;→
            </button>
          </div>
        </section>
      )}

      {/* Étape 3 : Services choisis */}
      {step === 2 && (
        <section className="devis-step-section">
          <div className="devis-step-title">ÉTAPE 3 / 4</div>
          <DevisStep3
            selectedServices={form.selectedServices}
            setSelectedServices={handleServicesChange}
          />
          <div className="devis-step-nav">
            <button className="devis-prev-btn" onClick={prev}>
              ← &nbsp;Précédent
            </button>
            <button
              className="devis-next-btn"
              onClick={next}
              disabled={form.selectedServices.length === 0}
            >
              Suivant &nbsp;→
            </button>
          </div>
        </section>
      )}

      {/* Étape 4 : Vos coordonnées */}
      {step === 3 && (
        <DevisStep4
          form={form}
          setForm={setForm}
          onPrev={() => setStep(2)}
          onSubmit={handleSubmit}
          loading={loading}
          error={error}
        />
      )}
    </div>
  );
}
