import React from "react";
import collegeImage from "../assets/clg.webp"; // adjust path if needed
import { motion } from "framer-motion";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section
      id="about"
      className="snap-start min-h-screen px-6 py-10 bg-gradient-to-br from-blue-900 via-indigo-900 to-cyan-600 text-white flex flex-col md:justify-center"
    >
    {/* Title with hover underline, large gap, and tighter letter spacing */}
<div className="w-full flex flex-col items-center mb-2 group cursor-pointer select-none">
  <h2 className="text-5xl font-bold tracking-normal mb-2 mt-4 relative inline-block">
    <span>ABOUT ME</span>
    {/* Underline: initially hidden, appears with a big gap on hover */}
    <div className="absolute left-1/2 transform -translate-x-1/2 mt-4 h-1 bg-blue-400 rounded transition-all duration-300 ease-in-out w-0 group-hover:w-56" />
  </h2>
</div>


      {/* Main content: left text, right image, aligned center */}
      <div className="flex-1 w-full flex flex-col md:flex-row items-center md:items-center justify-center gap-16 mt-4">
        {/* Left content */}
        <motion.div
          className="max-w-xl w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
        >
          <p className="text-lg leading-relaxed">
            Kamaraj College of Engineering and Technology, final year student with CGPA 8.0.<br />
            Interested in Frontend Development using React and UI designing.<br />
            Seeking an internship to enhance my skills.
          </p>
        </motion.div>

        {/* Right image */}
        <motion.div
          className="w-72 h-72 md:w-96 md:h-96 rounded-full border-8 border-blue-700 overflow-hidden cursor-pointer shadow-lg transition-shadow duration-500 ease-in-out flex-shrink-0"
          whileHover={{ boxShadow: "0 0 40px 15px rgba(59,130,246,0.75)", scale: 1.05 }}
        >
          <img
            src={collegeImage}
            alt="Kamaraj College"
            className="w-full h-full object-cover rounded-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
