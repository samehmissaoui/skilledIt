import React, { useContext, useState } from "react";
import CourseCard from "../components/CourseCard";
import coursesData from "../data/coursesData";
import { LanguageContext } from "../contexts/LanguageContext";
import { Link } from "react-router-dom";
import "../styles/main.scss"; // Import global SCSS

export default function Courses() {
  const { language } = useContext(LanguageContext);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = coursesData.courses.filter((course) =>
    course.title[language].toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className={`courses-section ${language === "ar" ? "rtl" : ""}`}>
      <h1>{language === "en" ? "Our Courses" : "دوراتنا"}</h1>

      <div className="courses-search">
        <input
          type="text"
          placeholder={language === "en" ? "Search courses..." : "ابحث عن دورة..."}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="courses-list">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <Link
              key={course.id}
              to={`/courses/${course.id}`}
              className="course-link"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <CourseCard course={course} />
            </Link>
          ))
        ) : (
          <p className="no-courses">
            {language === "en" ? "No courses found." : "لم يتم العثور على دورات."}
          </p>
        )}
      </div>
    </section>
  );
}
