import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import ThemeToggle from "./components/ThemeToggle";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Navbar />
            {/* <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} /> */}

      <Profile />
      <About />
      <div className="w-full h-8 bg-[#23288a] flex items-center justify-center">
  <div className="w-full h-6 bg-gray-200" />
</div>

      <Skills />
      <div className="w-full h-8 bg-[#23288a] flex items-center justify-center">
  <div className="w-full h-6 bg-gray-200" />
</div>

      <Projects />
      <div className="w-full h-8 bg-[#23288a] flex items-center justify-center">
  <div className="w-full h-6 bg-gray-200" />
</div>

      <Certifications />
      <div className="w-full h-8 bg-[#23288a] flex items-center justify-center">
  <div className="w-full h-6 bg-gray-200" />
</div>

      <Contact />
    </div>
  );
}
