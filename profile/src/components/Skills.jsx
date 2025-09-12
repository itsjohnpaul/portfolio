import React from "react";
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
      className={`flex-shrink-0 flex flex-col items-center w-60 cursor-pointer group transition-transform duration-300 hover:scale-110 ${
        className || ""
      }`}
    >
      <div
        className={`
          w-52 h-52 rounded-full 
          border-8 border-blue-700 
          overflow-hidden shadow-lg 
          transition-all duration-300 ease-in-out 
          group-hover:border-blue-400 group-hover:border-[14px]
        `}
      >
        <img
          src={skill.photo}
          alt={skill.name}
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <h3 className="mt-5 text-white font-semibold text-2xl text-center">
        {skill.name}
      </h3>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="snap-start min-h-screen px-6 py-16 bg-gradient-to-br from-blue-900 via-indigo-900 to-cyan-600"
    >
      <div className="w-full flex flex-col items-center mb-2 group cursor-pointer select-none">
        <h2 className="text-5xl font-bold tracking-normal mb-2 mt-4 relative inline-block text-white">
          <span>Skills</span>
          <div className="absolute left-1/2 transform -translate-x-1/2 mt-4 h-1 bg-blue-400 rounded transition-all duration-300 ease-in-out w-0 group-hover:w-24" />
        </h2>
      </div>

      <div
        className="flex space-x-16 overflow-x-auto no-scrollbar px-10 py-6 max-w-full"
        tabIndex={0}
      >
        {skills.map((skill, idx) => (
          <SkillCard key={skill.name} skill={skill} className={idx === 0 ? "ml-6" : ""} />
        ))}
      </div>
    </section>
  );
}
