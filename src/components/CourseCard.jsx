import React, { useContext } from "react";
// Import du contexte de langue pour gérer l'affichage en anglais ou en arabe
import { LanguageContext } from "../contexts/LanguageContext";
// Import des icônes utilisées pour illustrer les informations du cours
import { FaLayerGroup, FaClock, FaBullseye, FaInfoCircle } from "react-icons/fa";

// Composant CourseCard qui reçoit une prop "course"
export default function CourseCard({ course }) {
  // Récupération de la langue actuelle via le contexte
  const { language } = useContext(LanguageContext);

  // Styles généraux de la carte
  const cardStyle = {
    backgroundColor: "white", // Fond blanc
    borderRadius: "15px", // Bords arrondis
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)", // Ombre légère
    overflow: "hidden", // Masquer le débordement
    width: "300px", // Largeur fixe
    transition: "transform 0.3s ease, boxShadow 0.3s ease", // Transition pour hover
    cursor: "pointer", // Curseur pointeur
  };

  // Styles pour l'image du cours
  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover", // Ajuste l'image au container sans déformation
    transition: "transform 0.5s ease", // Animation pour zoom au hover
  };

  // Styles pour les paragraphes d'information (niveau, durée, objectif)
  const infoStyle = {
    fontSize: "0.95rem",
    color: "#000000",
    lineHeight: "1.5",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem", // Espace entre icône et texte
    marginBottom: "0.3rem",
  };

  // Définir la direction du texte selon la langue
  const directionStyle = {
    direction: language === "ar" ? "rtl" : "ltr",
    textAlign: language === "ar" ? "right" : "left",
  };

  return (
    // Container principal de la carte
    <div
      style={cardStyle}
      onMouseEnter={(e) => {
        // Animation au survol : relever la carte et accentuer l'ombre
        e.currentTarget.style.transform = "translateY(-10px)";
        e.currentTarget.style.boxShadow = "0 15px 25px rgba(0,0,0,0.2)";
      }}
      onMouseLeave={(e) => {
        // Revenir à l'état initial
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.1)";
      }}
    >
      {/* Image du cours */}
      <div style={{ overflow: "hidden", height: "180px" }}>
        <img
          src={course.image} // Source de l'image
          alt={course.title[language]} // Texte alternatif selon la langue
          style={imageStyle}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")} // Zoom au survol
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")} // Retour à l'état normal
        />
      </div>

      {/* Contenu textuel */}
      <div style={{ padding: "1rem", ...directionStyle }}>
        {/* Titre du cours */}
        <h3 style={{ color: "#000000", fontSize: "1.2rem", marginBottom: "0.5rem" }}>
          {course.title[language]}
        </h3>

        {/* Niveau du cours */}
        <p style={infoStyle}>
          <FaLayerGroup /> {/* Icône représentant le niveau */}
          <strong>{language === "en" ? "Level:" : "المستوى:"}</strong> {course.level[language]}
        </p>

        {/* Durée du cours */}
        <p style={infoStyle}>
          <FaClock /> {/* Icône représentant la durée */}
          <strong>{language === "en" ? "Duration:" : "المدة:"}</strong> {course.duration[language]}
        </p>

        {/* Objectif du cours (optionnel) */}
        {course.objective && (
          <p style={infoStyle}>
            <FaBullseye /> {/* Icône objectif */}
            <strong>{language === "en" ? "Objective:" : "الهدف:"}</strong> {course.objective[language]}
          </p>
        )}

        {/* Description du cours */}
        <div style={{ marginTop: "0.5rem" }}>
          {/* Titre Description */}
          <p
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginBottom: "0.3rem",
              fontWeight: "bold",
              color: "#000000",
            }}
          >
            <FaInfoCircle /> {language === "en" ? "Description:" : "الوصف:"}
          </p>
          {/* Texte de la description */}
          <p style={{ fontSize: "0.95rem", color: "#000000", lineHeight: "1.5" }}>
            {course.description[language]}
          </p>
        </div>

        {/* Bouton Learn More (commenté pour le moment) */}
        {/* 
          <button>...</button> 
        */}
      </div>
    </div>
  );
}
