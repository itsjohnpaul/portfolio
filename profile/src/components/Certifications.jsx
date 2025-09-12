import React from "react";

const certifications = [
  { name: "React - The Complete Guide", issuer: "Udemy" },
  { name: "Advanced CSS and Sass", issuer: "Udemy" },
  { name: "JavaScript Algorithms", issuer: "freeCodeCamp" },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="snap-start min-h-screen px-12 py-16 bg-gradient-to-br from-blue-900 via-indigo-900 to-cyan-600 text-white"
    >
      <h2 className="text-5xl font-bold mb-8 text-center animate-fadeIn">Certifications</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {certifications.map(({ name, issuer }) => (
          <div
            key={name}
            className="bg-black bg-opacity-30 rounded-lg p-6 text-center shadow-lg animate-fadeUp hover:bg-cyan-500 transition cursor-default"
          >
            <h3 className="text-xl font-semibold mb-1">{name}</h3>
            <p className="text-sm text-cyan-300">{issuer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
