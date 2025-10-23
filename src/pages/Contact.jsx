import React, { useContext, useState } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

// Composant Contact : page de formulaire de contact multilingue
export default function Contact() {
  // Récupère la langue actuelle depuis le contexte
  const { language } = useContext(LanguageContext);

  // État pour stocker les valeurs du formulaire
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  // Gestionnaire de changement pour les champs du formulaire
  // Met à jour l'état correspondant au champ modifié
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Gestionnaire de soumission du formulaire
  // Pour le moment, il log les données dans la console
  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici tu peux ajouter la logique d'envoi, par exemple via API
    console.log(formData);
  };

  return (
    <section
      style={{
        padding: "4rem 2rem",
        maxWidth: "800px",
        margin: "0 auto",
        direction: language === "ar" ? "rtl" : "ltr", // texte arabe à droite
        textAlign: language === "ar" ? "right" : "left",
      }}
    >
      {/* Titre de la page */}
      <h2 style={{ fontSize: "2rem", marginBottom: "2rem", color: "#0057B7" }}>
        {language === "en" ? "Contact Page" : "صفحة الاتصال"}
      </h2>

      {/* Formulaire de contact */}
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {/* Ligne 1 : Nom et Email */}
        <div style={{ display: "flex", flexDirection: language === "ar" ? "row-reverse" : "row", gap: "1rem" }}>
          {/* Champ Nom */}
          <input
            type="text"
            name="name"
            placeholder={language === "en" ? "Name" : "الاسم"}
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              flex: 1,
              padding: "0.7rem 1rem",
              borderRadius: "8px",
              border: "1px solid #ccc",
              direction: language === "ar" ? "rtl" : "ltr",
              textAlign: language === "ar" ? "right" : "left"
            }}
          />
          {/* Champ Email */}
          <input
            type="email"
            name="email"
            placeholder={language === "en" ? "Email" : "البريد الإلكتروني"}
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              flex: 1,
              padding: "0.7rem 1rem",
              borderRadius: "8px",
              border: "1px solid #ccc",
              direction: language === "ar" ? "rtl" : "ltr",
              textAlign: language === "ar" ? "right" : "left"
            }}
          />
        </div>

        {/* Ligne 2 : Sujet */}
        <input
          type="text"
          name="subject"
          placeholder={language === "en" ? "Subject" : "الموضوع"}
          value={formData.subject}
          onChange={handleChange}
          required
          style={{
            padding: "0.7rem 1rem",
            borderRadius: "8px",
            border: "1px solid #ccc",
            direction: language === "ar" ? "rtl" : "ltr",
            textAlign: language === "ar" ? "right" : "left"
          }}
        />

        {/* Ligne 3 : Message */}
        <textarea
          name="message"
          placeholder={language === "en" ? "Message" : "الرسالة"}
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          style={{
            padding: "0.7rem 1rem",
            borderRadius: "8px",
            border: "1px solid #ccc",
            resize: "vertical",
            direction: language === "ar" ? "rtl" : "ltr",
            textAlign: language === "ar" ? "right" : "left"
          }}
        />

        {/* Bouton d'envoi */}
        <button
          type="submit"
          style={{
            padding: "0.8rem 1.5rem",
            backgroundColor: "#0057B7",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
            alignSelf: language === "ar" ? "flex-end" : "flex-start"
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#003f8a")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#0057B7")}
        >
          {language === "en" ? "Send Message" : "إرسال الرسالة"}
        </button>
      </form>
    </section>
  );
}
