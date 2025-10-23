import React, { createContext, useState } from "react";

// Création du contexte de langue pour toute l'application
export const LanguageContext = createContext();

// Provider qui englobe l'application pour gérer la langue
export default function LanguageProvider({ children }) {
  // État pour stocker la langue actuelle ("en" ou "ar")
  const [language, setLanguage] = useState("en");

  // Fonction pour basculer entre l'anglais et l'arabe
  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  // Fonction de traduction
  // section: nom de la section (ex: "header", "hero")
  // key: clé spécifique dans la section (ex: "home", "title")
  // renvoie la traduction selon la langue actuelle
  const t = (section, key) => {
    const translations = {
      header: {
        home: { en: "Home", ar: "الرئيسية" },
        courses: { en: "Courses", ar: "الدورات" },
        contact: { en: "Contact", ar: "اتصل بنا" },
      },
      hero: {
        title: { en: "Welcome to SKILLED IT", ar: "مرحبا بكم في SKILLED IT" },
        subtitle: {
          en: "Learn Cybersecurity, AI, and Programming",
          ar: "تعلم الأمن السيبراني والذكاء الاصطناعي والبرمجة",
        },
        button: { en: "Get Started", ar: "ابدأ الآن" },
      },
    };

    return translations[section][key][language];
  };

  // Fournit le contexte aux composants enfants
  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
