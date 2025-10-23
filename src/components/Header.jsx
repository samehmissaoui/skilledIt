import React, { useContext } from "react";
// Import pour gérer la navigation entre pages et détecter la route actuelle
import { Link, useLocation } from "react-router-dom";
// Import du contexte de langue pour gérer l'affichage multilingue
import { LanguageContext } from "../contexts/LanguageContext";

// Composant Header affichant le logo, la navbar et le bouton de langue
export default function Header() {
  // Récupération des fonctions et valeurs du contexte de langue
  const { t, language, toggleLanguage } = useContext(LanguageContext);

  // useLocation permet de connaître la page actuellement affichée
  const location = useLocation();

  // Définition des liens de navigation avec le chemin et le label
  const links = [
    { path: "/", label: "home" },
    { path: "/courses", label: "courses" },
    { path: "/contact", label: "contact" },
  ];

  return (
    // Conteneur principal du header
    <header
      style={{
        display: "flex",
        justifyContent: "space-between", // Espace entre logo et bouton
        alignItems: "center",
        padding: "0.8rem 2rem",
        backgroundColor: "#0057B7", // Couleur bleu du header
        color: "white",
        position: "sticky", // Reste en haut lors du scroll
        top: 0,
        zIndex: 100, // Priorité d'affichage
      }}
    >
      {/* Logo du site */}
      <div style={{ fontSize: "1.6rem", fontWeight: "bold" }}>SKILLED IT</div>

      {/* Navbar centrée */}
      <nav
        style={{
          display: "flex",
          gap: "2rem", // Espacement entre les liens
          justifyContent: "center",
          flex: 1, // Prend tout l'espace disponible
        }}
      >
        {/* Boucle pour afficher chaque lien */}
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: "500",
              fontSize: "1rem",
            }}
          >
            {/* Si le lien correspond à la page actuelle, texte en gras */}
            {location.pathname === link.path ? (
              <strong>{t("header", link.label)}</strong>
            ) : (
              t("header", link.label)
            )}
          </Link>
        ))}
      </nav>

      {/* Bouton pour basculer la langue */}
      <button
        onClick={toggleLanguage}
        style={{
          padding: "0.4rem 0.8rem",
          backgroundColor: "white",
          color: "#0057B7",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontWeight: "bold",
          marginLeft: "1rem",
        }}
      >
        {/* Affiche AR ou EN selon la langue actuelle */}
        {language === "en" ? "AR" : "EN"}
      </button>
    </header>
  );
}
