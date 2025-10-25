import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { FaCheckCircle, FaListUl, FaClock, FaCertificate, FaLaptop, FaLanguage } from "react-icons/fa";
import coursesData from "../data/coursesData";

export default function ProgramInfoCard() {
  const { language } = useContext(LanguageContext);

  return (
    <div className={`program-info-card ${language === "ar" ? "rtl" : ""}`}>
      <h2><FaListUl /> {language === "en" ? "Program Information" : "معلومات البرنامج"}</h2>

      <p><FaListUl /> <strong>{language === "en" ? "Total Courses:" : "إجمالي الدورات:"}</strong> {coursesData.programInfo.totalCourses}</p>
      <p><FaClock /> <strong>{language === "en" ? "Total Hours:" : "إجمالي ساعات التدريب:"}</strong> {coursesData.programInfo.totalHours}</p>
      <p><FaCertificate /> <strong>{language === "en" ? "Certification:" : "الشهادات:"}</strong> {coursesData.programInfo.certification}</p>
      <p><FaLaptop /> <strong>{language === "en" ? "Modes:" : "طرق التدريب:"}</strong> {coursesData.programInfo.modes}</p>
      <p><FaLanguage /> <strong>{language === "en" ? "Languages:" : "لغات التدريب:"}</strong> {coursesData.programInfo.languages}</p>

      <h3>{language === "en" ? "Program Objectives" : "الأهداف العامة للبرنامج"}</h3>
      <ul>
        {coursesData.programInfo.programObjectives[language].map((obj, index) => (
          <li key={index}><FaCheckCircle /> {obj}</li>
        ))}
      </ul>
    </div>
  );
} 
