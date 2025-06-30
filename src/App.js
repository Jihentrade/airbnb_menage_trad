import React, { useState } from "react";
import "./styles/App.css";
import RouterConfig from "./router/routerConfig";
import { Helmet } from "react-helmet";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import SideMenu from "./components/SideMenu";
import "./styles/SideMenu.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { label: "ACCUEIL", href: "/" },
    { label: "DEVIS GRATUIT", href: "/devis" },
  ];

  return (
    <>
      <Helmet>
        <title>Del coup d'éclat - Ménage à Nice</title>
      </Helmet>
      <div className="App">
        {!menuOpen && (
          <button
            className="hamburger-menu"
            style={{
              position: "fixed",
              top: 18,
              left: 18,
              zIndex: 1201,
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "block",
            }}
            onClick={() => setMenuOpen(true)}
            aria-label="Ouvrir le menu"
          >
            <span style={{ fontSize: "2rem", color: "#1a3c40" }}>&#9776;</span>
          </button>
        )}
        <SideMenu
          open={menuOpen}
          onClose={() => setMenuOpen(false)}
          links={links}
        />
        <RouterConfig />
        <FloatingWhatsApp />
      </div>
    </>
  );
}

export default App;
