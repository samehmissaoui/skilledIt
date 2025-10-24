import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { FaLayerGroup, FaClock, FaBullseye, FaInfoCircle } from "react-icons/fa";
import "../styles/components/CourseCard.scss"; // Import SCSS spécifique du composant

export default function CourseCard({ course }) {
  const { language } = useContext(LanguageContext);

  return (
    <div className="course-card" dir={language === "ar" ? "rtl" : "ltr"}>
      <div className="course-card__image">
        <img src={course.image} alt={course.title[language]} />
      </div>
      <div className="course-card__content">
        <h3 className="course-card__title">{course.title[language]}</h3>

        <p className="course-card__info">
          <FaLayerGroup /> <strong>{language === "en" ? "Level:" : "المستوى:"}</strong> {course.level[language]}
        </p>

        {/* <p className="course-card__info">
          <FaClock /> <strong>{language === "en" ? "Duration:" : "المدة:"}</strong> {course.duration[language]}
        </p> */}

        {/* {course.objective && (
          <p className="course-card__info">
            <FaBullseye /> <strong>{language === "en" ? "Objective:" : "الهدف:"}</strong> {course.objective[language]}
          </p>
        )} */}

        {/* <div className="course-card__description">
          <p className="course-card__description-title">
            <FaInfoCircle /> {language === "en" ? "Description:" : "الوصف:"}
          </p>
          <p className="course-card__description-text">{course.description[language]}</p>
        </div> */}
      </div>
    </div>
  );
}
