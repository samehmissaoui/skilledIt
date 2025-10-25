import React from "react";
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import CourseDetails from "./pages/CourseDetails";
import ScrollToTop from "./components/ScrollToTop";


export default function App() {
  return (
    <Router>
        <ScrollToTop />
      <div
        style={{
          // display: "flex",
          // flexDirection: "column",
          // minHeight: "100vh",
          backgroundColor :"#B0B0B0", 
        }}
      >
        <Header />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/courses/:id" element={<CourseDetails />} />
            <Route path="*" element={<Navigate to="/" replace />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
