import React, { useState, useEffect } from "react";
import WhatsAppIcon from "./WhatsAppIcon";
import "../styles/FloatingWhatsApp.css";

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <div className="floating-whatsapp">
          <a
            href="https://wa.me/33753641503"
            target="_blank"
            rel="noopener noreferrer"
            className="floating-whatsapp-button"
            title="Contactez-nous sur WhatsApp"
          >
            <WhatsAppIcon />
          </a>
        </div>
      )}
    </>
  );
};

export default FloatingWhatsApp;
