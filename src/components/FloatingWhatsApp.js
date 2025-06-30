import React from "react";
import WhatsAppIcon from "./WhatsAppIcon";
import "../styles/FloatingWhatsApp.css";

const FloatingWhatsApp = () => {
  return (
    <div className="floating-whatsapp">
      <a
        href="https://wa.me/33753641503?text=Bonjour"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-button"
        title="Contactez-nous sur WhatsApp"
      >
        <WhatsAppIcon />
      </a>
    </div>
  );
};

export default FloatingWhatsApp;
