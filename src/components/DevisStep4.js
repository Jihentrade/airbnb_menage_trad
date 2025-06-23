import React from "react";
import "../styles/DevisStep4.css";

const civiliteOptions = [
  { value: "M", label: "M" },
  { value: "Mme", label: "Mme" },
];

export default function DevisStep4({
  form,
  setForm,
  onPrev,
  onSubmit,
  loading,
  error,
}) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const isPhoneValid =
    form.telephone &&
    /^(0|\+33|0033)[1-9]\d{8}$/.test(form.telephone.replace(/\s|-/g, ""));

  const isFormValid =
    form.civilite &&
    form.nom &&
    form.prenom &&
    form.email &&
    form.adresse &&
    form.telephone &&
    isPhoneValid;

  return (
    <section className="devis-step4-section">
      <div className="devis-step4-title">ÉTAPE 4 / 4</div>
      <h2 className="devis-step4-main">Vos coordonnées</h2>
      <p style={{ textAlign: "center", fontWeight: 600, marginBottom: 32 }}>
        Merci d'entrer vos coordonnées afin que nous puissions vous contacter
        <br />
        pour établir un devis personnalisé
      </p>
      <form
        className="devis-step4-form"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
        autoComplete="off"
      >
        <div className="devis-step4-civilite">
          {civiliteOptions.map((opt) => (
            <button
              type="button"
              key={opt.value}
              className={`devis-step4-civilite-btn${
                form.civilite === opt.value ? " selected" : ""
              }`}
              onClick={() => setForm((f) => ({ ...f, civilite: opt.value }))}
            >
              {opt.label}
            </button>
          ))}
        </div>
        <div style={{ display: "flex", gap: 16, marginBottom: 24 }}>
          <div className="devis-step4-input-group" style={{ flex: 1 }}>
            <label className="devis-step4-label">Nom *</label>
            <input
              type="text"
              name="nom"
              className="devis-step4-input"
              value={form.nom || ""}
              onChange={handleChange}
              required
            />
          </div>
          <div className="devis-step4-input-group" style={{ flex: 1 }}>
            <label className="devis-step4-label">Prénom *</label>
            <input
              type="text"
              name="prenom"
              className="devis-step4-input"
              value={form.prenom || ""}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="devis-step4-input-group">
          <label className="devis-step4-label">Email *</label>
          <input
            type="email"
            name="email"
            className="devis-step4-input"
            value={form.email || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div className="devis-step4-input-group">
          <label className="devis-step4-label">
            Adresse, ville ou code postal *
          </label>
          <input
            type="text"
            name="adresse"
            className="devis-step4-input"
            value={form.adresse || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div className="devis-step4-input-group">
          <label className="devis-step4-label">Numéro de téléphone *</label>
          <input
            type="tel"
            name="telephone"
            className={`devis-step4-input${
              form.telephone && !isPhoneValid ? " error" : ""
            }`}
            value={form.telephone || ""}
            onChange={handleChange}
            placeholder="00 00 00 00 00"
            required
          />
          {form.telephone && !isPhoneValid && (
            <div className="devis-step4-error-text">
              Le numéro de téléphone est invalide.
            </div>
          )}
        </div>
        <div className="devis-step4-input-group">
          <label className="devis-step4-label">Message (facultatif)</label>
          <textarea
            name="message"
            className="devis-step4-input"
            value={form.message || ""}
            onChange={handleChange}
            rows={4}
            placeholder="Message (facultatif)"
          />
        </div>
        {error && (
          <div className="devis-step4-error-text" style={{ marginBottom: 16 }}>
            {error}
          </div>
        )}
        <div className="devis-step4-nav">
          <button
            type="button"
            className="devis-step4-prev-btn"
            onClick={onPrev}
            disabled={loading}
          >
            ← Précédent
          </button>
          <button
            type="submit"
            className="devis-step4-submit-btn"
            disabled={!isFormValid || loading}
          >
            {loading ? "Envoi..." : "Je demande mon devis"}
          </button>
        </div>
        <div
          style={{
            textAlign: "right",
            fontSize: 13,
            color: "#888",
            marginTop: 8,
          }}
        >
          Champs obligatoires*
        </div>
      </form>
    </section>
  );
}
