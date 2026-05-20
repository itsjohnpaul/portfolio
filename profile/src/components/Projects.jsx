import React from "react";
import project1 from "../assets/quiz.jpeg";       {/* Quiz Application */}
import project2 from "../assets/vegetable.jpeg";  {/* FarmToHome */}
import project3 from "../assets/ex.jpeg";         {/* E-commerce Food MERN */}

const projects = [
  {
    title: "Quiz Application",
    description: "An interactive, real-time assessment platform featuring dynamic score calculation, timer-based challenges, and intuitive state-managed answer tracks.",
    image: project1,
    stacks: ["React", "JavaScript", "Tailwind CSS", "State Management"]
  },
  {
    title: "FarmToHome",
    description: "A supply chain digital marketplace bridging agricultural producers with final households to streamline logistical operations and eliminate middlemen markup prices.",
    image: project2,
    stacks: ["React", "Tailwind CSS", "Product UX", "Responsive Design"]
  },
  {
    title: "MERN Food E-Commerce",
    description: "A full-stack, comprehensive food distribution system containing live dynamic cart actions, checkout handlers, and backend architecture processing.",
    image: project3,
    stacks: ["MongoDB", "Express.js", "React", "Node.js"]
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="snap-start min-h-screen px-4 sm:px-8 py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-cyan-600 text-white flex flex-col justify-center items-center"
    >
      {/* Title Header Layout Block — 100% Mobile Fluid Typography */}
      <div className="w-full flex flex-col items-center mb-12 md:mb-16 group cursor-pointer select-none px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-normal mb-2 relative inline-block text-center uppercase">
          <span>Projects</span>
          {/* Responsive Underline Animation */}
          <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 sm:mt-4 h-1 bg-blue-400 rounded transition-all duration-300 ease-in-out w-0 group-hover:w-36 sm:group-hover:w-44 md:group-hover:w-56" />
        </h2>
      </div>

      {/* Fully Fluid Responsive Grid System */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl w-full mx-auto px-2 sm:px-4">
        {projects.map(({ title, description, image, stacks }) => (
          <div
            key={title}
            className="group relative flex flex-col bg-white/5 backdrop-blur-md rounded-2xl border-2 border-blue-700/50 overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:border-blue-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]"
          >
            {/* Image Box Container with Zoom Animation — Responsive height on mobile screens */}
            <div className="w-full h-44 sm:h-48 overflow-hidden relative border-b border-white/10 bg-slate-950/20">
              <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60" />
            </div>

            {/* Project Specifications Card Body */}
            <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
              <div className="mb-5">
                <h3 className="text-xl sm:text-2xl font-bold mb-2.5 text-white tracking-wide transition-colors duration-300 group-hover:text-blue-300">
                  {title}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-gray-200/80 text-justify line-clamp-4 md:line-clamp-5">
                  {description}
                </p>
              </div>

              {/* Technologies Tag Layout Section — Adaptive Flex Wrap */}
              <div className="flex gap-1.5 sm:gap-2 flex-wrap mt-auto pt-2">
                {stacks.map((stack, idx) => (
                  <span
                    key={idx}
                    className="bg-white/10 text-cyan-300 border border-cyan-500/30 px-2.5 py-1 rounded-md text-[10px] sm:text-xs font-semibold tracking-wide uppercase transition-all duration-300 group-hover:bg-cyan-500/10 group-hover:border-cyan-400/50"
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