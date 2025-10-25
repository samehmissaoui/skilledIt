import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { FaChalkboardTeacher, FaUsers, FaLaptopCode, FaChartLine } from "react-icons/fa";
import "../styles/components/methodologySection.scss";

export default function MethodologySection() {
  const { language, t } = useContext(LanguageContext);

  // Définition des méthodes avec traduction
  const methods = [
    {
      icon: <FaChalkboardTeacher />,
      title: language === "en" ? "Practical Training" : "تكوين عملي",
      desc: language === "en"
        ? "Our courses are project-oriented for immediate hands-on practice."
        : "دوراتنا موجهة نحو مشاريع حقيقية للتطبيق العملي الفوري."
    },
    {
      icon: <FaUsers />,
      title: language === "en" ? "Personalized Guidance" : "توجيه شخصي",
      desc: language === "en"
        ? "Individual support for each learner."
        : "متابعة فردية لكل متعلم."
    },
    {
      icon: <FaLaptopCode />,
      title: language === "en" ? "Modern Technologies" : "تكنولوجيا حديثة",
      desc: language === "en"
        ? "Learn the most in-demand tools and frameworks."
        : "تعلم أحدث الأدوات والأطر الأكثر طلبًا."
    },
    {
      icon: <FaChartLine />,
      title: language === "en" ? "Progress Tracking" : "متابعة التطور",
      desc: language === "en"
        ? "Continuous monitoring of progress to ensure success."
        : "متابعة مستمرة للتقدم لضمان النجاح."
    },
  ];

  return (
    <section className={`methodology-section ${language === "ar" ? "rtl" : ""}`}>
      <h2>{language === "en" ? "Our Methodology" : "منهجيتنا"}</h2>
      <div className="method-list">
        {methods.map((m, i) => (
          <div className="method-card" key={i}>
            <div className="icon">{m.icon}</div>
            <h3>{m.title}</h3>
            <p>{m.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
