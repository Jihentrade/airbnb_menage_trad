import React, { useRef, useState } from "react";
import { Helmet } from "react-helmet";
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
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Notification from "../components/Notification";
import ExpertiseSection from "../components/ExpertiseSection";

const HomePage = () => {
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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Del coup d'éclat",
    description:
      "Service professionnel de ménage et nettoyage à Nice pour particuliers et locations Airbnb",
    url: "https://www.menagenice.com",
    telephone: "+33 7 53 64 15 03",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nice",
      addressRegion: "Alpes-Maritimes",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.7102,
      longitude: 7.262,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "20:00",
      },
    ],
    priceRange: "€€",
    image: logo,
    sameAs: ["https://wa.me/33753641503"],
  };

  return (
    <div className="home-container">
      <Helmet>
        <title>
          Ménage Airbnb & Nettoyage à Nice | Service Professionnel - Del coup
          d'éclat
        </title>
        <meta
          name="description"
          content="Service professionnel de ménage à Nice pour particuliers et locations Airbnb. Nettoyage, grand nettoyage, remise en ordre après travaux. Équipe fiable et expérimentée. Devis gratuit !"
        />
        <meta
          name="keywords"
          content="ménage nice, airbnb menage nice, nettoyage nice, entreprise de nettoyage nice, conciergerie airbnb nice, service de ménage nice, nettoyage après travaux nice, ménage professionnel nice, nettoyage appartement nice, ménage maison nice"
        />
        <meta name="author" content="Del coup d'éclat" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="French" />
        <meta name="geo.region" content="FR-06" />
        <meta name="geo.placename" content="Nice" />
        <meta name="geo.position" content="43.7102;7.2620" />
        <meta name="ICBM" content="43.7102, 7.2620" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.menagenice.com/" />
        <meta
          property="og:title"
          content="Ménage Airbnb & Nettoyage à Nice - Del coup d'éclat"
        />
        <meta
          property="og:description"
          content="Service professionnel de ménage à Nice pour particuliers et locations Airbnb. Nettoyage, grand nettoyage, remise en ordre après travaux."
        />
        <meta property="og:image" content={logo} />
        <meta property="og:site_name" content="Del coup d'éclat" />
        <meta property="og:locale" content="fr_FR" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.menagenice.com/" />
        <meta
          property="twitter:title"
          content="Ménage Airbnb & Nettoyage à Nice - Del coup d'éclat"
        />
        <meta
          property="twitter:description"
          content="Service professionnel de ménage à Nice pour particuliers et locations Airbnb."
        />
        <meta property="twitter:image" content={logo} />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.menagenice.com/" />

        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>

        {/* Service Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Service de Ménage et Nettoyage à Nice",
            description:
              "Service professionnel de ménage et nettoyage pour particuliers et locations Airbnb à Nice",
            provider: {
              "@type": "LocalBusiness",
              name: "Del coup d'éclat",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Nice",
                addressCountry: "FR",
              },
              telephone: "+33753641503",
            },
            areaServed: {
              "@type": "City",
              name: "Nice",
            },
            serviceType: "Ménage et Nettoyage",
            offers: {
              "@type": "Offer",
              priceCurrency: "EUR",
              priceRange: "€€",
            },
          })}
        </script>
      </Helmet>
      <Notification message={notification.message} type={notification.type} />
      <header className="home-header">
        <div className="logo-nav">
          <img src={logo} alt="Logo Cleaning Service" className="logo" />
          <nav className="nav-menu">
            <a href="#home">Accueil</a>
            <a href="#services">Services</a>
            <a href="#metiers">Nos préstations</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>
      <main className="home-main">
        <section className="home-left">
          <h1>
            Del coup d'éclat - Ménage Airbnb & Nettoyage à Nice
            <span className="h1-subtitle">
              Service professionnel de ménage, nettoyage et conciergerie Airbnb
              à Nice
            </span>
          </h1>
          <p className="intro">
            <strong>Del coup d'éclat</strong> est votre spécialiste du{" "}
            <strong>ménage</strong> et du <strong>nettoyage</strong> à{" "}
            <strong>Nice</strong>, pour particuliers et{" "}
            <strong>locations Airbnb</strong>. Profitez d'un service de qualité
            pour un logement toujours impeccable grâce à notre équipe
            expérimentée. Découvrez pourquoi <strong>Del coup d'éclat</strong>{" "}
            est la référence du <strong>ménage Airbnb</strong> à Nice !
          </p>
          <div className="cta-container">
            <button className="cta-btn">
              <Link
                to="/devis"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Obtenir un devis gratuit
              </Link>
            </button>
          </div>
          <div className="service-info">
            <strong>Service de nettoyage et conciergerie à Nice</strong>
            <p>
              Intervention rapide à <strong>Nice et alentours</strong>.{" "}
              <strong>Produits écologiques</strong> sur demande.{" "}
              <strong>Ménage professionnel</strong> pour{" "}
              <strong>appartements</strong> et <strong>maisons</strong>.
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
          <img
            src={menage}
            alt="Service de ménage professionnel à Nice"
            className="main-img"
          />
        </section>
      </main>

      {/* Section Services */}
      <section className="services-section" id="services">
        <h2>Nos Services de Ménage à Nice</h2>
        <div className="services-list">
          <div className="service-card">
            <img
              src={menageRegulier}
              alt="Ménage régulier pour particuliers à Nice - Service de nettoyage hebdomadaire"
              className="service-icon"
              loading="lazy"
            />
            <h3>Ménage régulier à Nice</h3>
            <p>
              Entretien hebdomadaire ou ponctuel de votre logement.{" "}
              <strong>Service de ménage fiable</strong> pour particuliers.
            </p>
          </div>
          <div className="service-card">
            <img
              src={nettoyageAirbnb}
              alt="Nettoyage Airbnb à Nice - Service de conciergerie pour locations saisonnières"
              className="service-icon"
              loading="lazy"
            />
            <h3>Nettoyage Airbnb Nice</h3>
            <p>
              Remise en état rapide entre deux locations saisonnières.{" "}
              <strong>Conciergerie Airbnb</strong> professionnelle.
            </p>
          </div>
          <div className="service-card">
            <img
              src={repassage}
              alt="Service de repassage à domicile à Nice - Ménage et repassage"
              className="service-icon"
              loading="lazy"
            />
            <h3>Repassage à Nice</h3>
            <p>
              Prise en charge de votre linge à domicile.{" "}
              <strong>Service de repassage</strong> professionnel.
            </p>
          </div>
          <div className="service-card">
            <img
              src={nettoyageProfondeur}
              alt="Grand nettoyage en profondeur à Nice - Nettoyage après travaux"
              className="service-icon"
              loading="lazy"
            />
            <h3>Grand nettoyage Nice</h3>
            <p>
              Grand ménage de printemps, après travaux ou déménagement.{" "}
              <strong>Nettoyage en profondeur</strong> complet.
            </p>
          </div>
        </div>
      </section>

      {/* Section Pourquoi nous choisir */}
      <section className="about-section" id="about">
        <h2>Pourquoi nous choisir ?</h2>
        <ul className="about-list">
          <li>
            <img
              src={equipe}
              alt="Équipe de nettoyage professionnelle"
              className="about-icon"
            />
            Équipe professionnelle et expérimentée
          </li>
          <li>
            <img
              src={produits}
              alt="Produits de nettoyage écologiques"
              className="about-icon"
            />
            Produits respectueux de l'environnement
          </li>
          <li>
            <img
              src={flexibilite}
              alt="Flexibilité des horaires de ménage"
              className="about-icon"
            />
            Flexibilité et réactivité
          </li>
          <li>
            <img
              src={etoile}
              alt="Satisfaction client garantie"
              className="about-icon"
            />
            Satisfaction garantie
          </li>
        </ul>
      </section>

      <ExpertiseSection />

      {/* Section FAQ */}
      <section className="faq-section" id="faq">
        <h2>Questions Fréquentes - Ménage à Nice</h2>
        <div className="faq-container">
          <div className="faq-item">
            <h3>Quels sont vos tarifs pour le ménage à Nice ?</h3>
            <p>
              Nos tarifs varient selon la surface, le type de prestation et la
              fréquence. Contactez-nous pour un{" "}
              <strong>devis personnalisé</strong> gratuit et sans engagement.
            </p>
          </div>
          <div className="faq-item">
            <h3>Intervenez-vous pour le nettoyage Airbnb à Nice ?</h3>
            <p>
              Oui, nous proposons un{" "}
              <strong>service de conciergerie Airbnb</strong> complet incluant
              le nettoyage entre deux locations et la remise en état rapide.
            </p>
          </div>
          <div className="faq-item">
            <h3>Utilisez-vous des produits écologiques ?</h3>
            <p className="justify-text">
              Nous proposons des <strong>produits écologiques</strong> sur
              demande. Notre équipe s'adapte à vos préférences pour un nettoyage
              respectueux de l'environnement.
            </p>
          </div>
          <div className="faq-item">
            <h3>Quelle est votre zone d'intervention à Nice ?</h3>
            <p className="justify-text">
              Nous intervenons sur <strong>Nice et ses alentours</strong>.
              Contactez-nous pour vérifier la disponibilité dans votre quartier.
            </p>
          </div>
          <div className="faq-item">
            <h3>Proposez-vous un service de repassage à domicile ?</h3>
            <p className="justify-text">
              Oui, nous proposons un{" "}
              <strong>service de repassage professionnel</strong> à domicile.
              Prise en charge complète de votre linge.
            </p>
          </div>
          <div className="faq-item">
            <h3>Comment réserver un service de ménage ?</h3>
            <p>
              Vous pouvez nous contacter par téléphone, WhatsApp ou via notre
              formulaire de devis en ligne. Nous vous répondons sous 24h.
            </p>
          </div>
        </div>
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
          <div className="submit-container">
            <button type="submit">Envoyer</button>
          </div>
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
