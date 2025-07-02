// AboutSection.tsx
import React from "react";
import { motion } from "framer-motion";
import "../App.css"; // Assuming glitch animation CSS is in App.css or global CSS

const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen px-4 sm:px-6 md:px-20 py-10 text-white flex flex-col items-center justify-center text-center bg-transparent"
    >
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8"
      >
        About Us
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl sm:text-6xl md:text-7xl font-extrabold glitch-text mb-4"
      >
        Xuro
      </motion.h2>

      <motion.h3
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-lg sm:text-xl md:text-2xl font-medium glitch-text text-gray-300 mb-8"
      >
        India
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-3xl text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed"
      >
        Our aim is to build futuristic web apps and software enhanced with AI technologies. We craft projects that not only serve current needs but are built with a forward-thinking approach, designed for a smarter, automated future.
      </motion.p>
    </section>
  );
};

export default AboutSection;
