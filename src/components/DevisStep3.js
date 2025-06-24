import React from "react";
import {
  GrandNettoyageIcon,
  EtatLieuxIcon,
  EmmenagementIcon,
  CanapeIcon,
  RemiseOrdreIcon,
  VitresIcon,
} from "../assets/icons";

const services = [
  {
    id: "menage-airbnb",
    name: "Ménage Airbnb",
    Icon: GrandNettoyageIcon,
    description: "Grand nettoyage, État des lieux, Remise en ordre...",
  },
  {
    id: "grand-nettoyage",
    name: "Grand nettoyage",
    Icon: GrandNettoyageIcon,
    description:
      "(ménage de printemps et saison), grand rangement, dressing...",
  },
  {
    id: "etat-lieux",
    name: "État des lieux",
    Icon: EtatLieuxIcon,
    description: "",
  },
  {
    id: "emmenagement",
    name: "Emménagement ou Déménagement",
    Icon: EmmenagementIcon,
    description: "",
  },
  {
    id: "canapés et tapisseries",
    name: "Canapés et tapisseries",
    Icon: CanapeIcon,
    description: "",
  },
  {
    id: "remise-ordre",
    name: "Remise en ordre et ménage",
    Icon: RemiseOrdreIcon,
    description: "(après travaux, événements...)",
  },
  {
    id: "vitres",
    name: "Vitres et vitrines ",
    Icon: VitresIcon,
    description: "",
  },
];

const DevisStep3 = ({ selectedServices, setSelectedServices }) => {
  const toggleService = (serviceId) => {
    if (selectedServices.includes(serviceId)) {
      setSelectedServices(selectedServices.filter((id) => id !== serviceId));
    } else {
      setSelectedServices([...selectedServices, serviceId]);
    }
  };

  return (
    <div className="devis-step-section" data-step="3">
      <h2 className="devis-services-title">Services choisis</h2>

      <div className="devis-agent-info">
        <span className="devis-agent-avatar">👤</span>
        <span className="devis-agent-name">Achraf Trade</span>
      </div>

      <p className="devis-services-description">
        Pour nous, il est important de savoir quels services vous cherchez.
        <br />
        Choisissez un ou plusieurs services * :
      </p>

      <div className="devis-services-grid">
        {services.map((service) => (
          <div
            key={service.id}
            className={`devis-service-card ${
              selectedServices.includes(service.id) ? "selected" : ""
            }`}
            onClick={() => toggleService(service.id)}
          >
            <div className="devis-service-icon">
              <service.Icon />
            </div>
            <h3 className="devis-service-name">{service.name}</h3>
            {service.description && (
              <p className="devis-service-desc">{service.description}</p>
            )}
          </div>
        ))}
      </div>

      <p className="devis-services-required">* Champs obligatoires</p>
    </div>
  );
};

export default DevisStep3;
