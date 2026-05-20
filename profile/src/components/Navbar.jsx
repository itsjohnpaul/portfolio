import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "HOME", href: "#profile" },
    { label: "ABOUT", href: "#about" },
    { label: "SKILLS", href: "#skills" },
    { label: "PROJECTS", href: "#projects" },
    { label: "CERTIFICATIONS", href: "#certifications" },
    { label: "CONTACT", href: "#contact" },
  ];

  // Animation variants for stagger effect
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  // Smooth scroll handler for links
  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#23288a]/95 backdrop-blur-xl shadow-xl rounded-b-[2.5rem] z-50">
      {/* Container switches behavior: handles spaced distribution on mobile, centers contents on desktop */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between md:justify-center relative">
        
        {/* JP Logo: Visible ONLY on mobile view; hidden completely on desktop layout */}
        <div className="text-white font-bold text-xl tracking-widest md:hidden">
          JP
        </div>

        {/* Desktop Links: Centered perfectly on desktop */}
        <motion.ul
          className="hidden md:flex gap-8 text-white font-semibold uppercase tracking-wider mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {links.map(({ label, href }) => (
            <motion.li
              key={label}
              className="relative group cursor-pointer"
              variants={itemVariants}
            >
              <a
                href={href}
                className="relative pb-1"
                onClick={(e) => handleLinkClick(e, href)}
              >
                {label}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
              </a>
            </motion.li>
          ))}
        </motion.ul>

        {/* Mobile toggle button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {open && (
        <motion.ul
          className="md:hidden bg-[#23288a] border-t border-white/10 text-white font-semibold uppercase tracking-wider flex flex-col gap-4 p-5 text-center rounded-b-3xl shadow-xl"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {links.map(({ label, href }) => (
            <motion.li
              key={label}
              className="relative group cursor-pointer"
              variants={itemVariants}
            >
              <a
                href={href}
                className="relative pb-1"
                onClick={(e) => handleLinkClick(e, href)}
              >
                {label}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
              </a>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </nav>
  );
}