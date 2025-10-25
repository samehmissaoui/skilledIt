import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { LanguageContext } from "../contexts/LanguageContext";
import logo from "../assets/images/logo.png";
import { FaGlobe } from "react-icons/fa";
import "../styles/main.scss"; // Import du SCSS

export default function Header() {
  const { t, language, toggleLanguage } = useContext(LanguageContext);
  const location = useLocation();

  const links = [
    { path: "/", label: "home" },
    { path: "/courses", label: "courses" },
    { path: "/contact", label: "contact" },
  ];
 
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="SKILLED IT" />
      </div>

      <nav className="header__nav">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`header__link ${location.pathname === link.path ? "active" : ""}`}
          >
            {t("header", link.label)}
          </Link>
        ))}

        <FaGlobe
          onClick={toggleLanguage}
          className="header__lang-icon"
          size={50} // taille en pixels, ajuste à ton goût
          title={`Changer la langue (${language === "en" ? "AR" : "EN"})`}
        />
      </nav>
    </header>
  );
}
