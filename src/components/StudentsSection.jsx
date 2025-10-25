import React, { useContext } from "react";
import "../styles/components/studentsSection.scss";
import { LanguageContext } from "../contexts/LanguageContext";
import student1 from "../assets/images/sameh.jpeg";
import student2 from "../assets/images/hichem.jpeg";
import student3 from "../assets/images/kenza.jpeg";
import student4 from "../assets/images/bader.jpeg";
import student5 from "../assets/images/abdAllah.jpeg";
import student6 from "../assets/images/ala.jpeg";
import student7 from "../assets/images/feriel.jpeg";
import student8 from "../assets/images/anwer.jpeg";

export default function StudentsSection() {
  const { language } = useContext(LanguageContext);

  const students = [
    {
      name: { en: "Sameh Missaoui", ar: "سماح ميساوي" },
      feedback: {
        en: "Thanks to SKILLED IT, I found a job after 3 months of training.",
        ar: "بفضل SKILLED IT، وجدت وظيفة بعد 3 أشهر من التدريب."
      },
      image: student1
    },
    {
      name: { en: "Hichem mounadi", ar: "هشام منادي" },
      feedback: {
        en: "Competent trainers and personalized follow-up.",
        ar: "مدربون كفء ومتابعة شخصية."
      },
      image: student2
    },
    {
      name: { en: "Lina Gharbi", ar: "لينا الغربي" },
      feedback: {
        en: "A rewarding experience that allowed me to retrain.",
        ar: "تجربة غنية سمحت لي بإعادة التأهيل المهني."
      },
      image: student3
    },
    {
      name: { en: "Bader Eddin Bduir", ar: "بدر الدين بقير" },
      feedback: {
        en: "I acquired concrete skills useful for my work.",
        ar: "اكتسبت مهارات عملية ومفيدة لعملي."
      },
      image: student4
    },
    {
      name: { en: "Abd Allah Lahmer", ar: "عبد لله لحمر" },
      feedback: {
        en: "A very professional and motivating teaching team.",
        ar: "فريق تعليمي محترف جدًا ومحفز."
      },
      image: student5
    },
    {
      name: { en: "Ala Eddin Ben Mokhtar", ar: "على الدين بن مختار" },
      feedback: {
        en: "Practical projects helped me understand the profession.",
        ar: "المشاريع العملية ساعدتني على فهم المهنة."
      },
      image: student6
    },
    {
      name: { en: "Feriel Bouazizi", ar: "فريال بوعزي" },
      feedback: {
        en: "Structured and well-supervised learning.",
        ar: "تعلم منظم وتحت إشراف جيد."
      },
      image: student7
    },
    {
      name: { en: "Anwer Fersi", ar: "انور فارسي" },
      feedback: {
        en: "A complete training that boosted my career.",
        ar: "تدريب كامل ساعدني على تعزيز مساري المهني."
      },
      image: student8
    },
  ];

  return (
    <section className={`students-section ${language === "ar" ? "rtl" : ""}`}>
      <h2>{language === "en" ? "Our Student's Testimonials" : "شهادات طلابنا"}</h2>
      <div className="students-list">
        {students.map((s, i) => (
          <div className="student-card" key={i}>
            <img src={s.image} alt={s.name[language]} />
            <h3>{s.name[language]}</h3>
            <p>{s.feedback[language]}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
