import React from "react";
import "../styles/ExpertiseSection.css";

const expertiseAreas = [
  {
    icon: "🏠",
    title: "Ménage Airbnb",
    description:
      "Nettoyage complet entre les locations pour garantir des avis 5 étoiles.",
  },
  {
    icon: "🧹",
    title: "Grand nettoyage",
    description:
      "Un service de nettoyage en profondeur pour une propreté impeccable.",
  },
  {
    icon: "📦",
    title: "Emménagement",
    description:
      "Préparation de votre nouveau logement pour une installation en toute sérénité.",
  },
  {
    icon: "🚚",
    title: "Déménagement",
    description:
      "Nettoyage de votre ancien logement pour un état des lieux sans souci.",
  },
  {
    icon: "🔨",
    title: "Après travaux ou événements",
    description:
      "Remise en ordre et ménage complet pour retrouver votre espace.",
  },
  {
    icon: "🪟",
    title: "Vitres, canapés et tapisseries",
    description: "Nettoyage spécialisé pour vos surfaces délicates.",
  },
];

const ExpertiseSection = () => {
  return (
    <section className="expertise-section" id="metiers">
      <h2 className="expertise-title">Nos Métiers</h2>
      <p className="expertise-subtitle">
        Une expertise adaptée à chaque situation pour un résultat parfait.
      </p>
      <div className="expertise-grid">
        {expertiseAreas.map((area, index) => (
          <div className="expertise-card" key={index}>
            <div className="expertise-icon">{area.icon}</div>
            <h3 className="expertise-card-title">{area.title}</h3>
            <p className="expertise-card-description">{area.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExpertiseSection;
