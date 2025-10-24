// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation(); // détecte la route actuelle

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // scroll en haut à chaque changement de page
  }, [pathname]);

  return null; // pas de rendu visuel
}
