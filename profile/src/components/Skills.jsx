import React, { useState } from "react";
import reactImg from "../assets/react.jpeg";
import jsImg from "../assets/javascript.jpeg";
import tailwindImg from "../assets/Tailwind.jpeg";
import html5Img from "../assets/html.jpeg";
import css3Img from "../assets/css3.jpeg";
import java from "../assets/java.jpeg";
import gitImg from "../assets/c.jpeg";
import nodejsImg from "../assets/nodejs.jpeg";
import python from "../assets/python.jpeg";
import express from "../assets/ex.jpeg";
import mongo from "../assets/mongo.jpeg";
import sql from "../assets/sql.jpeg";
import figma from "../assets/figma.jpeg";

const skills = [
  { name: "React", photo: reactImg },
  { name: "JavaScript", photo: jsImg },
  { name: "Tailwind CSS", photo: tailwindImg },
  { name: "HTML5", photo: html5Img },
  { name: "CSS3", photo: css3Img },
  { name: "Java", photo: java },
  { name: "C", photo: gitImg },
  { name: "Mongo DB", photo: mongo },
  { name: "SQL DB", photo: sql },
  { name: "Node.js", photo: nodejsImg },
  { name: "Express", photo: express },
  { name: "Python", photo: python },
  { name: "Figma", photo: figma },
];

function SkillCard({ skill, className }) {
  return (
    <div
      className={`flex-shrink-0 flex items-center gap-5 w-full h-32 p-4 cursor-pointer group bg-white/10 backdrop-blur-md rounded-2xl border-2 border-blue-700 transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:border-blue-400 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] ${
        className || ""
      }`}
    >
      {/* Rounded Square Image Container */}
      <div className="w-20 h-20 rounded-xl overflow-hidden bg-white/5 border border-white/10 p-1 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
        <img
          src={skill.photo}
          alt={skill.name}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Tech Text */}
      <div className="flex flex-col justify-center">
        <h3 className="text-white font-semibold text-xl tracking-wide group-hover:text-blue-300 transition-colors duration-300">
          {skill.name}
        </h3>
        <p className="text-xs text-blue-200/70 mt-1 line-clamp-1">
          Core Competency
        </p>
      </div>
    </div>
  );
}

export default function Skills() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Slices only the first 4 skills for the primary interface display
  const primarySkills = skills.slice(0, 4);

  return (
    <section
      id="skills"
      className="snap-start min-h-screen flex flex-col justify-center px-6 py-16 bg-gradient-to-br from-blue-900 via-indigo-900 to-cyan-600 overflow-hidden"
    >
      {/* Title Layout Maintained Completely */}
    <div className="w-full flex flex-col items-center mb-12 md:mb-16 group cursor-pointer select-none px-4">
  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-normal mb-2 relative inline-block text-center">
    <span className="text-white">Skills</span>
    {/* Responsive Underline Animation */}
    <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 sm:mt-4 h-1 bg-blue-400 rounded transition-all duration-300 ease-in-out w-0 group-hover:w-36 sm:group-hover:w-44 md:group-hover:w-56" />
  </h2>
</div>

      {/* Primary Grid View — Displays exactly 4 cards upfront */}
      <div className="w-full max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-4 px-2">
        {primarySkills.map((skill, index) => (
          <SkillCard key={`primary-${skill.name}-${index}`} skill={skill} />
        ))}
      </div>

      {/* View More Trigger Button */}
      <div className="w-full flex justify-center mt-12">
        <button
          onClick={() => setIsModalOpen(true)}
          className="relative group overflow-hidden px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-sm tracking-wider uppercase shadow-lg shadow-blue-900/40 hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <span className="relative z-10">View More Skills</span>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </button>
      </div>

      {/* Pop-up Modal Container displaying all cards */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-slate-950/80 backdrop-blur-md transition-opacity duration-300">
          
          {/* Modal Overlay Base Box */}
          <div className="relative w-full max-w-6xl max-h-[85vh] bg-indigo-950/95 border border-indigo-800/60 rounded-3xl p-6 md:p-10 overflow-y-auto shadow-[0_0_50px_rgba(0,0,0,0.8)] custom-scrollbar">
            
            {/* Close Button element */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white p-2 bg-slate-800/50 hover:bg-slate-800 rounded-full border border-slate-700/50 transition duration-200"
              aria-label="Close Modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Internal Header Description */}
            <div className="mb-10 text-center md:text-left">
              <h3 className="text-3xl font-black text-white tracking-wide uppercase">
                All Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Stack</span>
              </h3>
              <p className="text-blue-200/70 text-sm mt-1">A complete overview of languages, frameworks, and tools.</p>
            </div>

            {/* Complete Card Collection Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pb-4">
              {skills.map((skill, index) => (
                <SkillCard key={`modal-${skill.name}-${index}`} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}