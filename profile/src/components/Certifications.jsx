import React from "react";

const internships = [
  {
    role: "Full Stack Intern",
    company: "Techmango Pvt Ltd",
    duration: "Dec 2025",
    bullets: [
      "Built a full-stack E-Commerce ecosystem running product listings, state-managed shopping carts, and checkout features using React.js, Node.js, and Express.js.",
      "Integrated Claude AI to optimize API controller structures and accelerate complex backend feature enhancements.",
      "Collaborated inside agile workflows to maximize database queries and polish client-facing responsiveness."
    ],
    tech: ["React.js", "Node.js", "Express.js", "Claude AI"]
  },
  {
    role: "Machine Learning Intern",
    company: "Winways Private Ltd",
    duration: "May 2024",
    bullets: [
      "Engineered an automated Fraud Detection System by processing large, unorganized data structures into cleaned analytical tables.",
      "Developed pipeline configurations focusing on model cross-validation, feature normalization, and testing deployments."
    ],
    tech: ["Python", "Machine Learning", "Data Processing"]
  },
  {
    role: "Web Development Intern",
    company: "Kevell Guru Technologies",
    duration: "Dec 2023",
    bullets: [
      "Created a robust College Application Portal Clone interface utilizing clean HTML5 semantics, layout rules, and core vanilla JavaScript workflows.",
      "Optimized layout responsiveness across mobile environments while ensuring zero layout shifts."
    ],
    tech: ["HTML5", "CSS3", "JavaScript"]
  }
];

const certifications = [
  { name: "Java Foundations", issuer: "Oracle" },
  { name: "Python Core Concepts", issuer: "Infosys Springboard" },
  { name: "SQL and Databases", issuer: "IBM" },
  { name: "Programming in Java", issuer: "NPTEL" },
  { name: "C, Java & Python Programming", issuer: "Skillrack" },
];

export default function ExperienceAndCredentials() {
  return (
    <section
      id="certifications"
      className="snap-start min-h-screen px-4 sm:px-6 py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-cyan-600 text-white flex flex-col justify-center items-center"
    >
      {/* Title Layout Section */}
      <div className="w-full flex flex-col items-center mb-12 md:mb-16 group cursor-pointer select-none px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-normal mb-2 relative inline-block text-center">
          <span>Internship and Certifications</span>
          {/* Responsive Underline Animation */}
          <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 sm:mt-4 h-1 bg-blue-400 rounded transition-all duration-300 ease-in-out w-0 group-hover:w-36 sm:group-hover:w-44 md:group-hover:w-56" />
        </h2>
      </div>

      {/* Main Combined Grid Block layout */}
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start px-2">
        
        {/* Left Section: Timeline Internships Layout (Spans 7 columns) */}
        <div className="lg:col-span-7 space-y-8 relative before:absolute before:top-4 before:bottom-4 before:left-3.5 before:w-0.5 before:bg-gradient-to-b before:from-cyan-400 before:via-blue-600 before:to-transparent">
          <h3 className="text-sm font-bold uppercase tracking-widest text-cyan-300 pl-1 mb-6">
            Professional Internships
          </h3>
          
          {internships.map((job, index) => (
            <div key={`${job.company}-${index}`} className="relative pl-10 group">
              {/* Timeline Glowing Node indicator */}
              <div className="absolute left-1.5 top-2.5 w-4 h-4 rounded-full bg-indigo-950 border-2 border-cyan-400 group-hover:bg-cyan-400 group-hover:scale-125 transition-all duration-300 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
              
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-lg transition-all duration-300 group-hover:border-blue-400/50 group-hover:bg-white/10">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
                  <div>
                    <h4 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                      {job.role}
                    </h4>
                    <p className="text-sm text-gray-300 font-medium">{job.company}</p>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/40 border border-cyan-800/40 px-3 py-1 rounded-full w-max h-max">
                    {job.duration}
                  </span>
                </div>

                <ul className="space-y-2 mb-4">
                  {job.bullets.map((bullet, idx) => (
                    <li key={idx} className="text-sm text-gray-200/90 leading-relaxed text-justify list-disc list-inside">
                      <span className="pl-1">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pill Row */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {job.tech.map((t) => (
                    <span key={t} className="text-[10px] font-bold uppercase tracking-wider bg-white/5 text-gray-300 border border-white/10 px-2 py-0.5 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Section: Certifications Block Scrollable Layout (Spans 5 columns) */}
        <div className="lg:col-span-5 space-y-6">
          <h3 className="text-sm font-bold uppercase tracking-widest text-blue-300 pl-1">
            Verified Certifications
          </h3>

          {/* Added a max-height and hidden webkit scrollbar to keep layout compact and balanced with left timeline */}
          <div className="flex flex-col gap-4 max-h-[75vh] overflow-y-auto pr-1 scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {certifications.map(({ name, issuer }) => (
              <div
                key={name}
                className="group flex items-center justify-between gap-4 bg-white/5 backdrop-blur-md rounded-2xl p-5 border border-white/10 shadow-md transition-all duration-300 hover:scale-[1.02] hover:border-cyan-400/50 hover:bg-gradient-to-r hover:from-white/10 hover:to-cyan-950/20"
              >
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                    {name}
                  </h4>
                  <p className="text-xs text-gray-400 font-medium">Issued by {issuer}</p>
                </div>
                
                {/* Visual Accent Badge */}
                <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 group-hover:bg-cyan-400/10 transition-all duration-300 flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}