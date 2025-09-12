import React from "react";
import project1 from "../assets/vegetable.jpeg";
import project2 from "../assets/quiz.jpeg";

const projects = [
  {
    title: "My Portfolio",
    description: "A personal portfolio website built with React and Tailwind CSS.",
    image: project1,
    stacks: ["React", "Tailwind CSS", "Responsive Design"]
  },
  {
    title: "E-commerce Store",
    description: "Online shopping platform with cart and checkout features.",
    image: project2,
    stacks: ["React", "Redux", "Stripe"]
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="snap-start min-h-screen px-12 py-16 bg-gradient-to-br from-blue-900 via-indigo-900 to-cyan-600 text-white"
    >
      <h2 className="text-5xl font-bold mb-10 text-center animate-fadeIn">Projects</h2>
      <div className="grid gap-12 md:grid-cols-3 max-w-6xl mx-auto">
        {projects.map(({ title, description, image, stacks }) => (
          <div
            key={title}
            className="bg-white rounded-xl shadow-xl overflow-hidden
              transform transition-all duration-300 cursor-pointer flex flex-col
              hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-cyan-400"
          >
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-6 flex-1 flex flex-col justify-between">
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">{title}</h3>
              <p className="text-sm mb-4 text-gray-600">{description}</p>
              <div className="flex gap-2 flex-wrap mt-auto">
                {stacks.map((stack, idx) => (
                  <span
                    key={idx}
                    className="bg-gradient-to-r from-cyan-400 to-blue-600 text-white
                      px-3 py-1 rounded-full text-xs font-bold shadow-md inline-block
                      animate-pulse"
                  >
                    {stack}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
