import React, { useContext } from "react";
// Import du contexte de langue pour gérer l'affichage en anglais ou en arabe
import { LanguageContext } from "../contexts/LanguageContext";
// Import des icônes utilisées pour le contact
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

// Composant Footer affichant les informations de contact et copyright
export default function Footer() {
  // Récupération de la langue actuelle depuis le contexte
  const { language } = useContext(LanguageContext);

  // Texte et informations de contact multilingue
  const text = {
    copyright: {
      en: "© 2025 SKILLED IT. All Rights Reserved.",
      ar: "© 2025 SKILLED IT. جميع الحقوق محفوظة.",
    },
    contactInfo: {
      phone: {
        en: "+1 234 567 890",
        ar: "+1 234 567 890",
      },
      email: {
        en: "info@skilledit.com",
        ar: "info@skilledit.com",
      },
      address: {
        en: "123 Tech Street, City, Country",
        ar: "123 شارع التكنولوجيا، المدينة، الدولة",
      },
    },
  };

  // Composant interne pour un élément de contact (icône + texte)
  // L'icône est placée à droite si la langue est arabe
  const ContactItem = ({ icon: Icon, textValue }) => (
    <span
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.3rem", // Espace entre icône et texte
        flexDirection: language === "ar" ? "row-reverse" : "row", // RTL pour l'arabe
      }}
    >
      <Icon /> {/* Icône du contact */}
      <span>{textValue}</span> {/* Texte du contact */}
    </span>
  );

  return (
    // Footer principal
    <footer
      style={{
        backgroundColor: "#0057B7", // Couleur de fond bleue
        color: "white", // Texte blanc
        padding: "1rem", // Padding interne
        textAlign: "center", // Centrer le texte
        fontSize: "0.9rem", // Taille de police
      }}
    >
      {/* Ligne contenant les informations de contact */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap", // Permet de passer à la ligne si trop large
          gap: "1.5rem", // Espace entre les items
          marginBottom: "0.5rem", // Marge en dessous
        }}
      >
        {/* Appel du composant ContactItem pour chaque information */}
        <ContactItem icon={FaPhone} textValue={text.contactInfo.phone[language]} />
        <ContactItem icon={FaEnvelope} textValue={text.contactInfo.email[language]} />
        <ContactItem icon={FaMapMarkerAlt} textValue={text.contactInfo.address[language]} />
      </div>

      {/* Ligne copyright */}
      <div>{text.copyright[language]}</div>
    </footer>
  );
}
