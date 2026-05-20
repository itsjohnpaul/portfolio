import React from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/profile.png";

export default function Profile() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const AnimatedText = ({ text, className }) => (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={className}
      style={{ display: "inline-block" }}
    >
      {text.split("").map((char, index) => (
        <motion.span key={index} variants={letterVariants} style={{ display: "inline-block" }}>
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );

  const handleScrollDown = () => {
    const nextSection = document.querySelector("#about");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="profile"
      className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-center pt-24 pb-20 gap-12 sm:gap-16 md:gap-24 px-6 sm:px-12 max-w-7xl mx-auto bg-white group"
    >
      {/* Profile Picture Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="w-full max-w-[22rem] sm:max-w-[24rem] aspect-square rounded-full border-[8px] border-blue-700 overflow-hidden transition-shadow duration-500 ease-in-out group-hover:shadow-[0_0_30px_10px_rgba(59,130,246,0.75)] mx-auto md:mx-0 flex-shrink-0 cursor-pointer"
      >
        <img
          src={profileImage}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content Layout */}
      <div className="flex flex-col items-center text-center w-full max-w-2xl transition-transform duration-500 ease-in-out group-hover:scale-105">
        
        {/* HI! Text Area */}
        <div className="mb-1">
          <motion.h2
            className="text-4xl sm:text-5xl font-semibold text-black text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            HI!
          </motion.h2>
        </div>

        {/* I AM JOHNPAUL! Text Line */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-5 flex flex-wrap justify-center items-center gap-x-3 uppercase tracking-tight whitespace-nowrap">
          <motion.span
            className="text-black"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            I AM
          </motion.span>
          <AnimatedText text="JOHNPAUL!" className="text-blue-700" />
        </h1>

        {/* Centered Subtitles */}
        <div className="flex items-center justify-center gap-3 mb-8 text-base sm:text-lg font-medium text-gray-800">
          <span>WEB DEVELOPER</span>
          <span className="text-gray-400 font-normal">|</span>
          <span>SOFTWARE ENGINEER</span>
        </div>

        {/* Action Buttons */}
       {/* Action Buttons */}
<div className="w-full flex flex-row justify-center items-center gap-4 mb-8">
  <button 
    onClick={handleScrollDown}
    className="bg-blue-700 text-white px-6 py-3 rounded font-semibold shadow hover:bg-blue-800 transition cursor-pointer"
  >
    VIEW ME
  </button>
  
  {/* Changed to open and view the PDF in a new tab */}
  <a
    href="/JohnPaul_Resume.pdf" // Keeps the path to your public folder
    target="_blank"             // Opens it in a new browser tab
    rel="noopener noreferrer"   // Security best practice for opening new tabs
    className="border-2 border-blue-700 text-blue-700 px-6 py-3 rounded font-semibold hover:bg-blue-700 hover:text-white transition inline-flex items-center justify-center cursor-pointer"
  >
    RESUME
  </a>
</div>

        {/* Social Media Links */}
        <div className="flex items-center justify-center gap-6 text-gray-600">
          <a
            href="https://github.com/itsjohnpaul"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="hover:text-blue-700 transition-all duration-300 hover:scale-110"
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.0.069-.608.0 1.003.702 1.531 1.531 1.53.828-.002 1.56-.233 1.953-.463.084-.603.325-1.003.591-1.233-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
          </a>
   <a
            href="https://johnpaul-profile.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Live Portfolio Website"
            className="hover:text-blue-700 transition-all duration-300 hover:scale-110"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8M11.5 3a17 17 0 000 18M12.5 3a17 17 0 010 18" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/johnpaul-p-a23853280"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="hover:text-blue-700 transition-all duration-300 hover:scale-110"
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
          </a>

       
        </div>
      </div>

      {/* Scroll Down Button */}
      <div className="absolute left-1/2 bottom-8 transform -translate-x-1/2">
        <button
          onClick={handleScrollDown}
          aria-label="Scroll Down"
          className="animate-bounce rounded-full p-3 border-4 border-blue-700 text-blue-700 bg-white bg-opacity-90 shadow-lg focus:outline-none"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </section>
  );
}