import React, { useContext, useState, useEffect } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import hero1 from "../assets/images/hero1.jfif";
import hero2 from "../assets/images/hero2.jfif";
import hero3 from "../assets/images/hero3.jfif";

export default function HeroHeaderCarousel() {
  const { language, t } = useContext(LanguageContext);
  const images = [hero1, hero2, hero3];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setCurrent((prev) => (prev + 1) % images.length), 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);

  return (
    <>
      {/* Titre et sous-titre */}
      <div className="hero-header">
        <h1>{language === "en" ? "Welcome to SKILLED IT" : "SKILLED IT مرحبا بكم في "}</h1>
        <p>{t("hero", "subtitle")}</p>
      </div>

      {/* Carrousel */}
      <div className="hero-carousel">
        <img src={images[current]} alt="hero" />
        <button className="carousel-prev" onClick={prevSlide}>&#10094;</button>
        <button className="carousel-next" onClick={nextSlide}>&#10095;</button>
      </div>
    </>
  );
}
