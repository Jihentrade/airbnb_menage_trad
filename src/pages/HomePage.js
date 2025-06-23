import React, { useRef, useState } from "react";
import "../styles/HomePage.css";
import logo from "../assets/logo.png";
import menage from "../assets/hommemenage.jpg";
import menageRegulier from "../assets/Ménagerégulier.png";
import nettoyageAirbnb from "../assets/menageairbnb.png";
import repassage from "../assets/Repassage.png";
import nettoyageProfondeur from "../assets/Nettoyageprofondeur.jpg";
import equipe from "../assets/equipe.png";
import produits from "../assets/Produits.png";
import flexibilite from "../assets/fexibilite.png";
import etoile from "../assets/etoile.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Notification from "../components/Notification";

const HomePage = () => {
  const navigate = useNavigate();
  const form = useRef();
  const [notification, setNotification] = useState({ message: "", type: "" });

  const showNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification({ message: "", type: "" });
    }, 3000);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_849nmjs",
        "template_nxuug3g",
        form.current,
        "QQnnPAGBI4btbxOwG"
      )
      .then(
        (result) => {
          console.log(result.text);
          showNotification("Message sent successfully!", "success");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          showNotification(
            "Failed to send the message, please try again.",
            "error"
          );
        }
      );
  };

  return (
    <div className="home-container">
      <Notification message={notification.message} type={notification.type} />
      <header className="home-header">
        <div className="logo-nav">
          <img src={logo} alt="Logo Cleaning Service" className="logo" />
          <nav className="nav-menu">
            <a href="#home">Accueil</a>
            <a href="#services">Services</a>
            <a href="#about">Pourquoi nous ?</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>
      <main className="home-main">
        <section className="home-left">
          <h1>Del coup d'éclat</h1>
          <p className="intro">
            Entreprise de ménage à Nice, nous proposons des prestations de
            nettoyage professionnelles pour particuliers et locations
            saisonnières. Profitez d'une équipe fiable, rapide et discrète pour
            un intérieur toujours impeccable !
          </p>
          <button className="cta-btn">
            <Link
              to="/devis"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Obtenir un devis
            </Link>
          </button>
          <div className="service-info">
            <strong>Service de nettoyage</strong>
            <p>
              Intervention rapide à Nice et alentours. Produits écologiques sur
              demande.
            </p>
          </div>
          <div className="social-icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-whatsapp"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-pinterest"></i>
          </div>
        </section>
        <section className="home-right">
          <img src={menage} alt="Cleaning" className="main-img" />
        </section>
      </main>

      {/* Section Services */}
      <section className="services-section" id="services">
        <h2>Nos Services</h2>
        <div className="services-list">
          <div className="service-card">
            <img
              src={menageRegulier}
              alt="Ménage régulier"
              className="service-icon"
            />
            <h3>Ménage régulier</h3>
            <p>Entretien hebdomadaire ou ponctuel de votre logement.</p>
          </div>
          <div className="service-card">
            <img
              src={nettoyageAirbnb}
              alt="Nettoyage Airbnb"
              className="service-icon"
            />
            <h3>Nettoyage Airbnb</h3>
            <p>Remise en état rapide entre deux locations saisonnières.</p>
          </div>
          <div className="service-card">
            <img src={repassage} alt="Repassage" className="service-icon" />
            <h3>Repassage</h3>
            <p>Prise en charge de votre linge à domicile.</p>
          </div>
          <div className="service-card">
            <img
              src={nettoyageProfondeur}
              alt="Nettoyage en profondeur"
              className="service-icon"
            />
            <h3>Nettoyage en profondeur</h3>
            <p>Grand ménage de printemps, après travaux ou déménagement.</p>
          </div>
        </div>
      </section>

      {/* Section Pourquoi nous choisir */}
      <section className="about-section" id="about">
        <h2>Pourquoi nous choisir ?</h2>
        <ul className="about-list">
          <li>
            <img src={equipe} alt="Équipe" className="about-icon" />
            Équipe professionnelle et expérimentée
          </li>
          <li>
            <img src={produits} alt="Produits" className="about-icon" />
            Produits respectueux de l'environnement
          </li>
          <li>
            <img src={flexibilite} alt="Flexibilité" className="about-icon" />
            Flexibilité et réactivité
          </li>
          <li>
            <img src={etoile} alt="Satisfaction" className="about-icon" />
            Satisfaction garantie
          </li>
        </ul>
      </section>

      {/* Section Contact rapide */}
      <section className="contact-section" id="contact">
        <h2>Contactez-nous</h2>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input
            type="text"
            placeholder="Votre nom"
            name="user_name"
            required
          />
          <input
            type="email"
            placeholder="Votre email"
            name="user_email"
            required
          />
          <input
            type="tel"
            placeholder="Votre téléphone"
            name="user_phone"
            required
          />
          <textarea
            placeholder="Votre message"
            rows="3"
            name="message"
            required
          ></textarea>
          <button type="submit">Envoyer</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>
          &copy; {new Date().getFullYear()} Del coup d'éclat - Ménage à Nice.
          Tous droits réservés.
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
