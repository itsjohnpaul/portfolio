import React from "react";

export default function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="fixed top-5 right-5 z-50 rounded-full p-2 bg-cyan-600 hover:bg-cyan-700 transition text-white"
      aria-label="Toggle theme"
    >
      {darkMode ? "☀️" : "🌙"}
    </button>
  );
}
