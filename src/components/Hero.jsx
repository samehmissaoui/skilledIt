import React, { useContext, useState, useEffect } from "react";
// Import du contexte pour gérer la langue
import { LanguageContext } from "../contexts/LanguageContext";
// Import des icônes utilisées dans la carte Program Info
import { FaCheckCircle, FaListUl, FaClock, FaCertificate, FaLaptop, FaLanguage } from "react-icons/fa";
// Import des images du carrousel
import hero1 from "../assets/images/hero1.jfif";
import hero2 from "../assets/images/hero2.jfif";
import hero3 from "../assets/images/hero3.jfif";
// Import des données du programme
import coursesData from "../data/coursesData";

// Composant Hero affichant le titre, sous-titre, carrousel et la carte Program Info
export default function Hero() {
  const { language, t } = useContext(LanguageContext); // Récupération de la langue et de la fonction de traduction
  const images = [hero1, hero2, hero3]; // Tableau des images pour le carrousel
  const [current, setCurrent] = useState(0); // Index de l'image affichée actuellement

  // Carrousel automatique toutes les 3 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval); // Nettoyage de l'intervalle lors du démontage
  }, [images.length]);

  // Fonctions pour changer manuellement de slide
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);

  return (
    <section style={{ backgroundColor: "#F4F7FA", padding: "3rem 2rem" }}>
      {/* Titre et Sous-titre */}
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h1 style={{ fontSize: "3rem", color: "#0057B7" }}>
          {/* Affichage multilingue du titre */}
          {language === "en" ? "Welcome to SKILLED IT" : "SKILLED IT مرحبا بكم في "}
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#1E293B", lineHeight: 1.8, maxWidth: "700px", margin: "0 auto" }}>
          {/* Sous-titre traduit via la fonction t */}
          {t("hero", "subtitle")}
        </p>
      </div>

      {/* Carrousel d'images */}
      <div style={{ position: "relative", width: "100%", maxWidth: "900px", margin: "0 auto", overflow: "hidden", borderRadius: "10px" }}>
        <img
          src={images[current]}
          alt="hero"
          style={{ width: "100%", height: "400px", objectFit: "cover", transition: "0.5s" }}
        />
        {/* Boutons flèches gauche/droite */}
        <button
          onClick={prevSlide}
          style={{
            position: "absolute", top: "50%", left: "10px", transform: "translateY(-50%)",
            backgroundColor: "rgba(0,0,0,0.5)", color: "white", border: "none", borderRadius: "50%", padding: "0.5rem", cursor: "pointer"
          }}
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          style={{
            position: "absolute", top: "50%", right: "10px", transform: "translateY(-50%)",
            backgroundColor: "rgba(0,0,0,0.5)", color: "white", border: "none", borderRadius: "50%", padding: "0.5rem", cursor: "pointer"
          }}
        >
          &#10095;
        </button>
      </div>

      {/* Carte Program Info */}
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "15px",
          boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
          padding: "1.5rem",
          marginBottom: "2rem",
          direction: language === "ar" ? "rtl" : "ltr", // Texte arabe à droite
          textAlign: language === "ar" ? "right" : "left",
        }}
      >
        {/* Titre de la carte avec icône */}
        <h2 style={{ color: "#0057B7", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <FaListUl color="#0057B7" /> {language === "en" ? "Program Information" : "معلومات البرنامج"}
        </h2>

        {/* Informations principales avec icônes */}
        <p style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <FaListUl color="#0057B7" /> <strong>{language === "en" ? "Total Courses:" : "إجمالي الدورات:"}</strong>{" "}
          {coursesData.programInfo.totalCourses}
        </p>

        <p style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <FaClock color="#0057B7" /> <strong>{language === "en" ? "Total Hours:" : "إجمالي ساعات التدريب:"}</strong>{" "}
          {coursesData.programInfo.totalHours}
        </p>

        <p style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <FaCertificate color="#0057B7" /> <strong>{language === "en" ? "Certification:" : "الشهادات:"}</strong>{" "}
          {coursesData.programInfo.certification}
        </p>

        <p style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <FaLaptop color="#0057B7" /> <strong>{language === "en" ? "Modes:" : "طرق التدريب:"}</strong>{" "}
          {coursesData.programInfo.modes}
        </p>

        <p style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <FaLanguage color="#0057B7" /> <strong>{language === "en" ? "Languages:" : "لغات التدريب:"}</strong>{" "}
          {coursesData.programInfo.languages}
        </p>

        {/* Objectifs du programme */}
        <h3 style={{ marginTop: "1rem" }}>
          {language === "en" ? "Program Objectives:" : "الأهداف العامة للبرنامج:"}
        </h3>
        <ul style={{ paddingInlineStart: "1.2rem" }}>
          {coursesData.programInfo.programObjectives[language].map((obj, index) => (
            <li key={index} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <FaCheckCircle color="#0057B7" />
              <span>{obj}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
