import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "../styles/main.scss"; // Import global SCSS

export default function Footer() {
  const { language } = useContext(LanguageContext);

  const text = {
    copyright: {
      en: "© 2025 SKILLED IT. All Rights Reserved.",
      ar: "© 2025 SKILLED IT. جميع الحقوق محفوظة.",
    },
    contactInfo: {
      phone: { en: "+1 234 567 890", ar: "+1 234 567 890" },
      email: { en: "info@skilledit.com", ar: "info@skilledit.com" },
      address: { en: "123 Tech Street, City, Country", ar: "123 شارع التكنولوجيا، المدينة، الدولة" },
    },
  };

  const ContactItem = ({ icon: Icon, textValue }) => (
    <span className={`contact-item ${language === "ar" ? "rtl" : ""}`}>
      <Icon />
      <span>{textValue}</span>
    </span>
  );

  return (
    <footer className="footer">
      <div className="footer-contact">
        <ContactItem icon={FaPhone} textValue={text.contactInfo.phone[language]} />
        <ContactItem icon={FaEnvelope} textValue={text.contactInfo.email[language]} />
        <ContactItem icon={FaMapMarkerAlt} textValue={text.contactInfo.address[language]} />
      </div>
      <div className="footer-copyright">{text.copyright[language]}</div>
    </footer>
  );
}
