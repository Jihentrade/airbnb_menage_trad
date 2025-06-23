import React from "react";
import "../styles/ExpertiseSection.css";
import {
  HouseSiding,
  CleaningServices,
  MeetingRoom,
  Moving,
  Construction,
  Window,
} from "@mui/icons-material";

const expertiseAreas = [
  {
    icon: <HouseSiding />,
    title: "Ménage Airbnb",
    description:
      "Nettoyage complet entre les locations pour garantir des avis 5 étoiles.",
  },
  {
    icon: <CleaningServices />,
    title: "Grand nettoyage",
    description:
      "Un service de nettoyage en profondeur pour une propreté impeccable.",
  },
  {
    icon: <MeetingRoom />,
    title: "Emménagement",
    description:
      "Préparation de votre nouveau logement pour une installation en toute sérénité.",
  },
  {
    icon: <Moving />,
    title: "Déménagement",
    description:
      "Nettoyage de votre ancien logement pour un état des lieux sans souci.",
  },
  {
    icon: <Construction />,
    title: "Après travaux ou événements",
    description:
      "Remise en ordre et ménage complet pour retrouver votre espace.",
  },
  {
    icon: <Window />,
    title: "Vitres, canapés et tapisseries",
    description: "Nettoyage spécialisé pour vos surfaces délicates.",
  },
];

const ExpertiseSection = () => {
  return (
    <section className="expertise-section" id="metiers">
      <h2 className="expertise-title">Nos Services de Nettoyage Personnalisés à Nice</h2>
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
