import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import Hero from "../components/Hero";

// Composant Home : page d'accueil du site
export default function Home() {
  // Récupère la fonction de traduction depuis le contexte de langue
  const { t } = useContext(LanguageContext);

  return (
    // Affiche uniquement le composant Hero sur la page d'accueil
    <Hero></Hero>
  );
}
