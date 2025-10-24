import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import Hero from "../components/Hero";
import ProgramInfoCard from "../components/ProgramInfoCard";

// Composant Home : page d'accueil du site
export default function Home() {
  // Récupère la fonction de traduction depuis le contexte de langue
  const { t } = useContext(LanguageContext);

  return (
<>
<Hero></Hero>
<ProgramInfoCard></ProgramInfoCard>
</>    
  );
}
