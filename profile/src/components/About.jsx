import React from "react";
import collegeImage from "../assets/clg.webp"; // adjust path if needed
import { motion } from "framer-motion";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15, delayChildren: 0.1 } 
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="about"
      className="snap-start min-h-screen px-4 sm:px-6 py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-cyan-600 text-white flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Title Layout Maintained Completely */}
    <div className="w-full flex flex-col items-center mb-12 md:mb-16 group cursor-pointer select-none px-4">
  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-normal mb-2 relative inline-block text-center">
    <span>ABOUT ME</span>
    {/* Responsive Underline Animation */}
    <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 sm:mt-4 h-1 bg-blue-400 rounded transition-all duration-300 ease-in-out w-0 group-hover:w-36 sm:group-hover:w-44 md:group-hover:w-56" />
  </h2>
</div>

      {/* Main Bento/Grid Content Block */}
      <motion.div 
        className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        
        {/* Box 1: Left-side intro profile narrative & College Standing (Spans 7 columns on large screens) */}
        <motion.div 
          variants={cardVariants}
          className="lg:col-span-7 bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 flex flex-col justify-between shadow-xl"
        >
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-800/50 w-max block">
              Overview
            </span>
            <h3 className="text-3xl font-extrabold tracking-wide text-blue-300">
              A Passionate Web Developer & Software Engineer
            </h3>
            <p className="text-lg leading-relaxed text-gray-200/90 text-justify">
              I am a final-year B.E. student at Kamaraj College of Engineering and Technology, maintaining a CGPA of 8.0. I am driven by a deep interest in building modern, responsive, and user-friendly web applications that blend clean architectural foundations with seamless visual logic.
            </p>
            <p className="text-base leading-relaxed text-gray-300/80">
              Currently seeking an internship opportunity to actively enhance my technical scope and gain crucial hands-on deployment experience in software engineering and interfaces.
            </p>
          </div>

          {/* Quick Info Bar at the bottom of the card */}
          <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider">Institution</p>
              <p className="font-semibold text-sm text-white">Kamaraj College of Engg & Tech</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider">Academic Standing</p>
              <p className="font-bold text-lg text-cyan-400">8.0 CGPA</p>
            </div>
          </div>
        </motion.div>

        {/* Box 2: Right-side prominent Circular Profile Frame (Spans 5 columns on large screens) */}
        <motion.div 
          variants={cardVariants}
          className="lg:col-span-5 bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 flex flex-col items-center justify-center shadow-xl relative"
        >
          <motion.div
            className="w-full max-w-[16rem] sm:max-w-[18rem] aspect-square rounded-full border-8 border-blue-700 overflow-hidden cursor-pointer shadow-lg transition-shadow duration-500 ease-in-out flex-shrink-0"
            whileHover={{
              boxShadow: "0 0 40px 15px rgba(59,130,246,0.75)",
              scale: 1.05,
            }}
          >
            <img
              src={collegeImage}
              alt="Kamaraj College Campus Layout"
              className="w-full h-full object-cover rounded-full"
            />
          </motion.div>
          <p className="text-xs text-center text-gray-400 tracking-widest uppercase mt-6">
            College
          </p>
        </motion.div>

        {/* Box 3: Bottom Full-Width Tech Grid Layout (Spans all 12 columns) */}
        <motion.div 
          variants={cardVariants}
          className="lg:col-span-12 bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-xl"
        >
          <h4 className="text-sm font-bold uppercase tracking-widest text-blue-300 mb-6">
            Technical Stack Matrix
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-white/5 rounded-xl border border-white/5">
              <p className="text-xs text-cyan-400 font-bold tracking-wider uppercase mb-2">Frontend & Web</p>
              <p className="text-sm text-gray-200 font-medium">
                React, JavaScript, HTML, CSS, Tailwind CSS
              </p>
            </div>

            <div className="p-4 bg-white/5 rounded-xl border border-white/5">
              <p className="text-xs text-blue-400 font-bold tracking-wider uppercase mb-2">Backend & Architecture</p>
              <p className="text-sm text-gray-200 font-medium">
                Nodejs, Expressjs, MongoDB, Java, C
              </p>
            </div>

            <div className="p-4 bg-white/5 rounded-xl border border-white/5">
              <p className="text-xs text-indigo-400 font-bold tracking-wider uppercase mb-2">Mobile & Product Design</p>
              <p className="text-sm text-gray-200 font-medium">
                 UI/UX Design Frameworks, Figma, Canva
              </p>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}