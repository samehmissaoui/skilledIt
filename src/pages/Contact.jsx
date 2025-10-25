import React, { useContext, useState } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import "../styles/main.scss"; // Import global SCSS


export default function Contact() {
  const { language } = useContext(LanguageContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="contact-section">
  <h2>{language === "en" ? "Contact Page" : "صفحة الاتصال"}</h2>

  <div className="contact-card">
    <form onSubmit={handleSubmit}>
      <div className="contact-row">
        <input
          type="text"
          name="name"
          placeholder={language === "en" ? "Name" : "الاسم"}
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder={language === "en" ? "Email" : "البريد الإلكتروني"}
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <input
        type="text"
        name="subject"
        placeholder={language === "en" ? "Subject" : "الموضوع"}
        value={formData.subject}
        onChange={handleChange}
        required
      />

      <textarea
        name="message"
        placeholder={language === "en" ? "Message" : "الرسالة"}
        value={formData.message}
        onChange={handleChange}
        rows={6}
        required
      />

      <button type="submit">
        {language === "en" ? "Send Message" : "إرسال الرسالة"}
      </button>
    </form>
  </div>
</section>

  );
}
