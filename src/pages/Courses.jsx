import React, { useContext, useState } from "react";
import CourseCard from "../components/CourseCard";
import coursesData from "../data/coursesData";
import { LanguageContext } from "../contexts/LanguageContext";
import { FaCheckCircle, FaClock, FaCertificate, FaLaptop, FaLanguage, FaListUl } from "react-icons/fa";

// Composant Courses : affiche la liste des cours et une barre de recherche
export default function Courses() {
  // Récupère la langue actuelle depuis le contexte
  const { language } = useContext(LanguageContext);

  // État pour le terme de recherche
  const [searchTerm, setSearchTerm] = useState("");

  // Filtrer les cours selon le terme de recherche et la langue
  const filteredCourses = coursesData.courses.filter((course) =>
    course.title[language].toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section style={{ padding: "3rem 2rem", backgroundColor: "#F8FAFC" }}>
      {/* Titre de la page */}
      <h1
        style={{
          textAlign: "center",
          color: "#0057B7",
          marginBottom: "2rem",
          fontSize: "2.2rem",
        }}
      >
        {language === "en" ? "Our Courses" : "دوراتنا"}
      </h1>

      {/* --- Card Program Info (commentée pour l'instant) --- */}
      {/* 
        Cette section contient les informations générales du programme :
        - Nombre total de cours
        - Durée totale
        - Certification
        - Modes de formation
        - Langues
        - Objectifs du programme
        Les icônes sont colorées en bleu et le texte s'adapte à la langue (RTL pour arabe)
      */}

      {/* --- Barre de recherche --- */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "2rem" }}>
        <input
          type="text"
          placeholder={language === "en" ? "Search courses..." : "ابحث عن دورة..."}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: "300px",
            padding: "0.5rem 1rem",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "1rem",
            textAlign: language === "ar" ? "right" : "left", // alignement RTL pour arabe
          }}
        />
      </div>

      {/* --- Course Cards --- */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
        {/* Affichage conditionnel :
            - Liste des cours filtrés
            - Message si aucun cours trouvé */}
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => <CourseCard key={course.id} course={course} />)
        ) : (
          <p style={{ textAlign: "center", fontSize: "1rem", color: "#555" }}>
            {language === "en" ? "No courses found." : "لم يتم العثور على دورات."}
          </p>
        )}
      </div>
    </section>
  );
}
