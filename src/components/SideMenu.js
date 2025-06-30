import React from "react";
import "../styles/SideMenu.css";
import logo from "../assets/logo.png";

export default function SideMenu({ open, onClose, links }) {
  return (
    <>
      <div
        className={`side-menu-overlay${open ? " open" : ""}`}
        onClick={onClose}
      />
      <nav className={`side-menu-drawer${open ? " open" : ""}`}>
        <button
          className="side-menu-close"
          onClick={onClose}
          aria-label="Fermer le menu"
        >
          <span>&#10005;</span>
        </button>
        <div className="side-menu-logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul className="side-menu-list">
          {links.map((item, idx) => (
            <li key={idx} className="side-menu-item">
              <a href={item.href}>
                {item.label}
                {item.hasSubmenu && (
                  <span className="side-menu-arrow">&#9660;</span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
