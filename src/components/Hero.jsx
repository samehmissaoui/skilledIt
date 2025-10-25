import React, { useContext, useState, useEffect } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import hero1 from "../assets/images/hero1.jfif";
import hero2 from "../assets/images/hero2.jfif";
import hero3 from "../assets/images/hero4.jpeg";
import hero4 from "../assets/images/hero5.jpeg";
import hero5 from "../assets/images/hero6.jpeg";
import hero6 from "../assets/images/hero7.jpeg";
// import hero7 from "../assets/images/hero8.jpeg";
import hero8 from "../assets/images/hero9.jpeg";
import hero9 from "../assets/images/hero10.jpeg";
import "../styles/components/hero.scss";

export default function Hero() {
  const { language, t } = useContext(LanguageContext);
  const images = [hero1, hero2, hero3, hero4, hero5, hero6, hero8,  hero9];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setCurrent((prev) => (prev + 1) % images.length), 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);

  return (
    <section className="hero-section">
      <div className="hero-carousel">
        <img src={images[current]} alt="hero" />
        {/* Décommenter si tu veux les boutons */}
        {/* <button className="carousel-prev" onClick={prevSlide}>&#10094;</button>
        <button className="carousel-next" onClick={nextSlide}>&#10095;</button> */}
      </div>
      <div className="hero-header">
        <h1>{language === "en" ? "Welcome to SKILLED IT" : "SKILLED IT مرحبا بكم في"}</h1>
        <p>{t("hero", "subtitle")}</p>
      </div>
    </section>
  );
}
 