import React from "react";
import project1 from "../assets/projectquiz.png";       {/* Quiz Application Screen 1 */}
import project2 from "../assets/project2.png";          {/* FarmToHome Screen 1 */}
import project3 from "../assets/project1.png";          
import project4 from "../assets/aiquiz.png";            {/* AI Quiz Generator Screen 1 */}

const projects = [
  {
    title: "Food E-Commerce Platform",
    description: "Developed a modern food e-commerce web application using the MERN stack, Tailwind CSS, and responsive UI design principles. Implemented product browsing, shopping cart, authentication, and dynamic frontend features with the assistance of AI tools like GitHub Copilot for faster development and code optimization.",
    images: [project3, project1, project2], 
    stacks: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS", "Copilot"],
    github: "https://github.com/itsjohnpaul" 
  },
  {
    title: "ReactJS & Node.js Quiz Application",
    description: "Built a full-stack quiz application using React.js for the front-end and Node.js for the back-end. Implemented user authentication, score calculation, timer functionality, and dynamic question management with the support of GitHub Copilot for code suggestions and development efficiency.",
    images: [project1, project2], 
    stacks: ["React.js", "Node.js", "Express.js", "JavaScript", "Tailwind CSS", "Copilot"],
    github: "https://github.com/itsjohnpaul" 
  },
  {
    title: "AIQuizGenerator Using NLP",
    description: "Built an AI-powered quiz generation web application using React.js, Vite, Tailwind CSS, and basic NLP (Natural Language Processing) techniques to convert uploaded notes, PDFs, and text into interactive quizzes such as MCQs and fill-in-the-blanks through automated text analysis.",
    images: [project4, project4], 
    stacks: ["React.js", "Vite", "Tailwind CSS", "NLP", "Text Analysis"],
    github: "https://github.com/itsjohnpaul" 
  },
  {
    title: "FarmToHome - Organic Delivery",
    description: "Developed a responsive full-stack organic product delivery web application using React.js, Node.js, Express.js, and MongoDB. Implemented product browsing, cart management, user authentication, order placement, and modern responsive UI features for seamless farm-to-customer online shopping experience.",
    images: [project2, project3, project1], 
    stacks: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/itsjohnpaul" 
  }
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="snap-start min-h-screen px-4 sm:px-8 py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-cyan-600 text-white flex flex-col justify-center items-center relative"
    >
      {/* Title Header Layout Block */}
      <div className="w-full flex flex-col items-center mb-12 md:mb-16 group cursor-pointer select-none px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-normal mb-2 relative inline-block text-center uppercase">
          <span>Projects</span>
          <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 sm:mt-4 h-1 bg-blue-400 rounded transition-all duration-300 ease-in-out w-0 group-hover:w-36 sm:group-hover:w-44 md:group-hover:w-56" />
        </h2>
      </div>

      {/* Grid Layout System */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 max-w-7xl w-full mx-auto px-2 sm:px-4">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group relative flex flex-col bg-white/5 backdrop-blur-md rounded-2xl border-2 border-blue-700/50 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]"
          >
            {/* Image Cover Container */}
            <div className="w-full h-44 sm:h-48 overflow-hidden relative border-b border-white/10 bg-slate-950/20">
              <img 
                src={project.images[0]} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent opacity-60" />
            </div>

            {/* Project Card Body */}
            <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
              <div className="mb-4">
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-white tracking-wide transition-colors duration-300 group-hover:text-cyan-300 min-h-[56px] flex items-center">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-gray-200/80 line-clamp-5 md:line-clamp-6 xl:line-clamp-5">
                  {project.description}
                </p>
              </div>

              {/* Technologies Tag Layout Section */}
              <div className="mb-5">
                <div className="flex gap-1.5 flex-wrap">
                  {project.stacks.map((stack, idx) => (
                    <span
                      key={idx}
                      className="bg-white/10 text-cyan-300 border border-cyan-500/30 px-2 py-0.5 rounded text-[10px] sm:text-xs font-semibold tracking-wide uppercase"
                    >
                      {stack}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Footer Button */}
              <div className="mt-auto w-full">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-white/10 hover:bg-white/20 text-cyan-300 hover:text-white rounded-xl border border-white/10 shadow-md transition-all duration-300 flex items-center justify-center gap-2 transform active:scale-95 text-xs font-semibold"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" className="w-4 h-4">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                  </svg>
                  View GitHub Repository
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}