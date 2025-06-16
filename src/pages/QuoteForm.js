import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "../styles/QuoteForm.css";

const steps = [
  "Votre logement",
  "Vos besoins",
  "Services choisis",
  "Vos coordonnées",
];

const initialData = {
  logement: "",
  surface: "",
  pieces: 1,
  foyer: "",
  adultes: 1,
  enfants: 0,
  animaux: 0,
  besoin: "",
  frequence: "",
  services: [],
  nom: "",
  prenom: "",
  email: "",
  adresse: "",
  telephone: "",
  message: "",
};

const allServices = [
  "Ménage à domicile",
  "Repassage à domicile",
  "Vitres",
  "Grand nettoyage",
  "État des lieux",
  "Emménagement",
  "Déménagement",
  "Remise en ordre",
  "Aide et maintien à domicile",
  "Autres",
];

export default function QuoteForm() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState(initialData);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setForm((f) => ({
      ...f,
      [name]: type === "number" ? Number(value) : value,
    }));
  };

  const handleServiceChange = (service) => {
    setForm((f) => ({
      ...f,
      services: f.services.includes(service)
        ? f.services.filter((s) => s !== service)
        : [...f.services, service],
    }));
  };

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Ici, vous pouvez envoyer les données à votre backend ou service email
  };

  return (
    <div className="quoteform-container">
      <Helmet>
        <title>Devis en ligne - Ménage à Nice</title>
        <meta
          name="description"
          content="Demandez un devis gratuit pour un service de ménage à Nice. Réponse rapide, équipe professionnelle, prestations sur-mesure."
        />
      </Helmet>
      <h1>Demandez votre devis en ligne</h1>
      <div className="steps-bar">
        {steps.map((s, i) => (
          <div key={i} className={`step${i === step ? " active" : ""}`}>
            {i + 1}
          </div>
        ))}
      </div>
      <form className="quoteform" onSubmit={handleSubmit} autoComplete="off">
        {step === 0 && (
          <div className="step-content">
            <h2>Votre logement</h2>
            <label>Type de logement *</label>
            <select
              name="logement"
              value={form.logement}
              onChange={handleChange}
              required
            >
              <option value="">Choisissez...</option>
              <option>Appartement</option>
              <option>Maison</option>
              <option>Grande demeure</option>
              <option>Résidence secondaire</option>
              <option>Professionnel</option>
            </select>
            <label>Surface *</label>
            <select
              name="surface"
              value={form.surface}
              onChange={handleChange}
              required
            >
              <option value="">Choisissez...</option>
              <option>Moins de 50m²</option>
              <option>51m² à 100m²</option>
              <option>101m² à 150m²</option>
              <option>Plus de 150m²</option>
            </select>
            <label>Nombre de pièces *</label>
            <input
              type="number"
              name="pieces"
              min="1"
              max="20"
              value={form.pieces}
              onChange={handleChange}
              required
            />
            <label>Composition du foyer *</label>
            <select
              name="foyer"
              value={form.foyer}
              onChange={handleChange}
              required
            >
              <option value="">Choisissez...</option>
              <option>Seul</option>
              <option>En colocation</option>
              <option>En couple</option>
              <option>En famille</option>
            </select>
            <div className="foyer-details">
              <label>Adultes</label>
              <input
                type="number"
                name="adultes"
                min="1"
                max="10"
                value={form.adultes}
                onChange={handleChange}
              />
              <label>Enfants</label>
              <input
                type="number"
                name="enfants"
                min="0"
                max="10"
                value={form.enfants}
                onChange={handleChange}
              />
              <label>Animaux</label>
              <input
                type="number"
                name="animaux"
                min="0"
                max="10"
                value={form.animaux}
                onChange={handleChange}
              />
            </div>
          </div>
        )}
        {step === 1 && (
          <div className="step-content">
            <h2>Vos besoins</h2>
            <label>Fréquence *</label>
            <select
              name="frequence"
              value={form.frequence}
              onChange={handleChange}
              required
            >
              <option value="">Choisissez...</option>
              <option>Occasionnelle (grand nettoyage, emménagement...)</option>
              <option>Régulière (ménage, repassage, vitres...)</option>
            </select>
            <label>Précisez votre besoin</label>
            <textarea
              name="besoin"
              value={form.besoin}
              onChange={handleChange}
              placeholder="Décrivez votre besoin..."
              rows={3}
            />
          </div>
        )}
        {step === 2 && (
          <div className="step-content">
            <h2>Services choisis</h2>
            <div className="services-checkboxes">
              {allServices.map((service) => (
                <label key={service} className="service-checkbox">
                  <input
                    type="checkbox"
                    checked={form.services.includes(service)}
                    onChange={() => handleServiceChange(service)}
                  />
                  {service}
                </label>
              ))}
            </div>
          </div>
        )}
        {step === 3 && (
          <div className="step-content">
            <h2>Vos coordonnées</h2>
            <label>Nom *</label>
            <input
              name="nom"
              value={form.nom}
              onChange={handleChange}
              required
            />
            <label>Prénom *</label>
            <input
              name="prenom"
              value={form.prenom}
              onChange={handleChange}
              required
            />
            <label>Email *</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <label>Adresse, ville ou code postal *</label>
            <input
              name="adresse"
              value={form.adresse}
              onChange={handleChange}
              required
            />
            <label>Téléphone *</label>
            <input
              name="telephone"
              value={form.telephone}
              onChange={handleChange}
              required
            />
            <label>Message (facultatif)</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={2}
            />
          </div>
        )}
        <div className="form-nav">
          {step > 0 && (
            <button type="button" onClick={prev}>
              Précédent
            </button>
          )}
          {step < steps.length - 1 && (
            <button type="button" onClick={next}>
              Suivant
            </button>
          )}
          {step === steps.length - 1 && <button type="submit">Envoyer</button>}
        </div>
        {submitted && (
          <div className="form-success">
            Merci, votre demande a bien été envoyée ! Nous vous contacterons
            rapidement.
          </div>
        )}
      </form>
    </div>
  );
}
