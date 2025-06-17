import React from "react";

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
    /^0\d{9}$|^\+33 ?[1-9](?: ?\d{2}){4}$/.test(
      form.telephone.replace(/\s/g, "")
    );
  const isFormValid =
    form.civilite &&
    form.nom &&
    form.prenom &&
    form.email &&
    form.adresse &&
    form.telephone &&
    isPhoneValid;

  return (
    <section className="devis-step-section" data-step="4">
      <div className="devis-step-title">ÉTAPE 4 / 4</div>
      <h2 className="devis-step-main" style={{ color: "#bfa46a" }}>
        Vos coordonnées
      </h2>
      <p style={{ textAlign: "center", fontWeight: 600, marginBottom: 32 }}>
        Merci d'entrer vos coordonnées afin que nous puissions vous contacter
        <br />
        pour établir un devis personnalisé
      </p>
      <form
        className="devis-form"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
        autoComplete="off"
      >
        <div style={{ display: "flex", gap: 16, marginBottom: 24 }}>
          {civiliteOptions.map((opt) => (
            <button
              type="button"
              key={opt.value}
              className={`devis-option-btn${
                form.civilite === opt.value ? " selected" : ""
              }`}
              style={{ minWidth: 60 }}
              onClick={() => setForm((f) => ({ ...f, civilite: opt.value }))}
            >
              {opt.label}
            </button>
          ))}
        </div>
        <div style={{ display: "flex", gap: 16, marginBottom: 24 }}>
          <div style={{ flex: 1 }}>
            <label className="devis-label">Nom *</label>
            <input
              type="text"
              name="nom"
              className="devis-input"
              value={form.nom || ""}
              onChange={handleChange}
              required
            />
          </div>
          <div style={{ flex: 1 }}>
            <label className="devis-label">Prénom *</label>
            <input
              type="text"
              name="prenom"
              className="devis-input"
              value={form.prenom || ""}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div style={{ marginBottom: 24 }}>
          <label className="devis-label">Email *</label>
          <input
            type="email"
            name="email"
            className="devis-input"
            value={form.email || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div style={{ marginBottom: 24 }}>
          <label className="devis-label">Adresse, ville ou code postal *</label>
          <input
            type="text"
            name="adresse"
            className="devis-input"
            value={form.adresse || ""}
            onChange={handleChange}
            required
          />
        </div>
        <div style={{ marginBottom: 24 }}>
          <label className="devis-label">Numéro de téléphone *</label>
          <input
            type="tel"
            name="telephone"
            className={`devis-input${
              form.telephone && !isPhoneValid ? " devis-input-error" : ""
            }`}
            value={form.telephone || ""}
            onChange={handleChange}
            placeholder="00 00 00 00 00"
            required
          />
          {form.telephone && !isPhoneValid && (
            <div className="devis-input-error-text">
              Le numéro de téléphone est invalide.
            </div>
          )}
        </div>
        <div style={{ marginBottom: 24 }}>
          <label className="devis-label">Message (facultatif)</label>
          <textarea
            name="message"
            className="devis-input"
            value={form.message || ""}
            onChange={handleChange}
            rows={4}
            placeholder="Message (facultatif)"
          />
        </div>
        {error && (
          <div className="devis-input-error-text" style={{ marginBottom: 16 }}>
            {error}
          </div>
        )}
        <div className="devis-step-nav">
          <button
            type="button"
            className="devis-prev-btn"
            onClick={onPrev}
            disabled={loading}
          >
            ← Précédent
          </button>
          <button
            type="submit"
            className="devis-next-btn"
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
