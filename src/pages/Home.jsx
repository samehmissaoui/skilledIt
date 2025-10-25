import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import Hero from "../components/Hero";
import ProgramInfoCard from "../components/ProgramInfoCard";
import StudentsSection from "../components/StudentsSection";
import MethodologySection from "../components/MethodologySection";

export default function Home() {
  const { t } = useContext(LanguageContext);

  return (
    <>
      <Hero />
      <ProgramInfoCard />
      <MethodologySection />
      <StudentsSection />
    </>
  );
}
