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
<nav className="fixed top-0 left-0 w-full bg-[#23288a] rounded-b-[4rem] z-50">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-center md:justify-center relative">
        {/* Desktop links with animation */}
        <motion.ul
          className="hidden md:flex gap-12 text-white font-semibold uppercase tracking-wider"
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

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden absolute right-8 top-4 text-3xl text-black focus:outline-none"
          aria-label="Toggle menu"
        >
          {open ? "X" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.ul
          className="md:hidden bg-blue-700 text-white font-semibold uppercase tracking-wider flex flex-col gap-6 p-6 text-center rounded-b-3xl"
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
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(false);
                  const element = document.querySelector(href);
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
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
