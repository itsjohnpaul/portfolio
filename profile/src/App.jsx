import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer"; // Imported the new Footer component
import ThemeToggle from "./components/ThemeToggle";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark overflow-x-hidden" : "overflow-x-hidden"}>
      <Navbar />
      {/* <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} /> */}

      {/* Main Portfolio Sections */}
      <Profile />
      <About />
      
      {/* Refined section spacing matching your color codes seamlessly */}
      <div className="w-full h-1 bg-[#23288a] opacity-20" />

      <Skills />
      <div className="w-full h-1 bg-[#23288a] opacity-20" />

      <Projects />
      <div className="w-full h-1 bg-[#23288a] opacity-20" />

      <Certifications />
      <div className="w-full h-1 bg-[#23288a] opacity-20" />

      <Contact />
      
      {/* Footer Element Anchor */}
      <Footer />
    </div>
  );
}