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
          {char}
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
      className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-center pt-16 pb-24 gap-40 px-8"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex-shrink-0 w-96 h-96 rounded-full border-8 border-blue-700 overflow-hidden transition-shadow duration-500 ease-in-out hover:shadow-[0_0_30px_10px_rgba(59,130,246,0.75)]"
      >
        <img
          src={profileImage}
          alt="Profile"
          className="w-full h-full object-cover rounded-full"
        />
      </motion.div>
      <div className="flex flex-col items-start justify-center max-w-2xl">
        <motion.h2
          className="text-4xl md:text-5xl font-semibold text-black mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          HI!
        </motion.h2>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 flex flex-wrap">
          <motion.span
            className="text-black mr-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            I AM
          </motion.span>
          <AnimatedText text="JOHNPAUL !" className="text-blue-700" />
        </h1>
        <div className="w-full flex justify-center mb-8">
          <div className="flex gap-4 text-lg font-medium text-gray-800 items-center">
            <span>WEB DEVELOPER</span>
            <span className="text-gray-400 font-normal">|</span>
            <span>SOFTWARE ENGINEER</span>
          </div>
        </div>
        <div className="w-full flex justify-center gap-6 mb-7">
          <button className="bg-blue-700 text-white px-6 py-2 rounded font-semibold shadow hover:bg-blue-800 transition">
            VIEW ME
          </button>
          <button className="border-2 border-blue-700 text-blue-700 px-6 py-2 rounded font-semibold hover:bg-blue-700 hover:text-white transition">
            RESUME
          </button>
        </div>
      </div>
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
