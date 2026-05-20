import React from "react";

export default function Footer() {
  const handleScrollToTop = () => {
    const heroSection = document.querySelector("#profile");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full bg-gradient-to-br from-indigo-950 via-blue-950 to-indigo-900 text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Branding / Identity */}
        <div className="text-center md:text-left space-y-1">
          <h3 className="text-xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 uppercase">
            Johnpaul
          </h3>
          <p className="text-xs text-gray-400 font-medium tracking-wide">
            Full-Stack Web Developer & Software Engineer
          </p>
        </div>

        {/* Center: Internal Quick Navigation Links */}
        <nav className="flex items-center flex-wrap justify-center gap-x-8 gap-y-2 text-sm font-semibold tracking-wide text-gray-300">
          <a href="#about" className="hover:text-cyan-400 transition-colors duration-300">About</a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors duration-300">Projects</a>
          <a href="#certifications" className="hover:text-cyan-400 transition-colors duration-300">Experience</a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors duration-300">Contact</a>
        </nav>

        {/* Right Side: Back to Top Trigger Button */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <button
            onClick={handleScrollToTop}
            aria-label="Scroll back to top"
            className="group w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 hover:text-white hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 shadow-md cursor-pointer"
          >
            <svg 
              className="w-5 h-5 transform group-hover:-translate-y-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth={2.5} 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
          </button>
          <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">
            Back To Top
          </span>
        </div>

      </div>

      {/* Sub-Footer: Legal Disclaimer Stamp Line */}
      <div className="w-full bg-slate-950/40 py-4 border-t border-white/5 text-center text-[11px] font-medium tracking-widest text-gray-500 uppercase">
        © {new Date().getFullYear()} Johnpaul. Built with React & Tailwind.
      </div>
    </footer>
  );
}