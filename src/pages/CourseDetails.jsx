import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { LanguageContext } from "../contexts/LanguageContext";
import coursesData from "../data/coursesData";
import {
  FaClock,
  FaLayerGroup,
  FaInfoCircle,
  FaCheckCircle,
  FaTools,
  FaUsers,
  FaCertificate,
  FaBullseye
} from "react-icons/fa";
import "../styles/main.scss";

export default function CourseDetails() {
  const { id } = useParams();
  const { language } = useContext(LanguageContext);

  const ICON_COLOR = "#F58220"; // Couleur orange pour toutes les icônes

  const course = coursesData.courses.find((c) => c.id.toString() === id.toString());

  if (!course) {
    return (
      <div className="course-not-found">
        <h2>{language === "en" ? "Course not found" : "الدورة غير موجودة"}</h2>
        <Link to="/courses" className="btn-back">
          {language === "en" ? "Back to Courses" : "العودة إلى الدورات"}
        </Link>
      </div>
    );
  }

  const t = (en, ar) => (language === "en" ? en : ar);

  return (
    <section className={`course-details ${language === "ar" ? "rtl" : ""}`}>
      {course.image && (
        <img src={course.image} alt={course.title?.[language]} className="course-image" />
      )}

      {course.title && <h1 className="course-title">{course.title?.[language]}</h1>}

      {course.level && (
        <p className="course-info">
          <FaLayerGroup color={ICON_COLOR} />
          <strong>{t("Level:", "المستوى:")}</strong> {course.level?.[language]}
        </p>
      )}

      {course.duration && (
        <p className="course-info">
          <FaClock color={ICON_COLOR} />
          <strong>{t("Duration:", "المدة:")}</strong> {course.duration?.[language]}
        </p>
      )}

      {course.description && (
        <div className="course-section">
          <h3 className="section-title">
            <FaInfoCircle color={ICON_COLOR} /> {t("Description", "الوصف")}
          </h3>
          <p>{course.description?.[language]}</p>
        </div>
      )}

      {course.prerequisites && (
        <div className="course-section">
          <h3 className="section-title">
            <FaCheckCircle color={ICON_COLOR} /> {t("Prerequisites", "المتطلبات السابقة")}
          </h3>
          <p>{course.prerequisites?.[language]}</p>
        </div>
      )}

      {course.objectives && Array.isArray(course.objectives[language]) && (
        <div className="course-section">
          <h3 className="section-title">
            <FaBullseye color={ICON_COLOR} /> {t("Objectives", "الأهداف")}
          </h3>
          <ul>
            {course.objectives[language].map((obj, idx) => (
              <li key={idx}>{obj}</li>
            ))}
          </ul>
        </div>
      )}

      {course.content && Array.isArray(course.content[language]) && (
        <div className="course-section">
          <h3 className="section-title">
            <FaInfoCircle color={ICON_COLOR} /> {t("Course Content", "محتوى الدورة")}
          </h3>
          <ul>
            {course.content[language].map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {course.tools && Array.isArray(course.tools[language]) && (
        <div className="course-section">
          <h3 className="section-title">
            <FaTools color={ICON_COLOR} /> {t("Tools & Technologies", "الأدوات والتقنيات")}
          </h3>
          <ul>
            {course.tools[language].map((tool, idx) => (
              <li key={idx}>{tool}</li>
            ))}
          </ul>
        </div>
      )}

      {course.targetAudience && (
        <div className="course-section">
          <h3 className="section-title">
            <FaUsers color={ICON_COLOR} /> {t("Target Audience", "الفئة المستهدفة")}
          </h3>
          <p>{course.targetAudience?.[language]}</p>
        </div>
      )}

      {course.certification && (
        <div className="course-section">
          <h3 className="section-title">
            <FaCertificate color={ICON_COLOR} /> {t("Certification", "الشهادة")}
          </h3>
          <p>{course.certification?.[language]}</p>
        </div>
      )}

      {course.outcome && (
        <div className="course-section">
          <h3 className="section-title">
            <FaCheckCircle color={ICON_COLOR} /> {t("Expected Outcome", "النتائج المتوقعة")}
          </h3>
          <p>{course.outcome?.[language]}</p>
        </div>
      )}

      <div className="back-btn-container">
        <Link to="/courses" className="btn-back">
          {t("Back to Courses", "العودة إلى الدورات")}
        </Link>
      </div>
    </section>
  );
}
