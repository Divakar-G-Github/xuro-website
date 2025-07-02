// HeroSection.tsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const typingText = "We make your project from zero to hero that looks futurist.";

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (index < typingText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + typingText.charAt(index));
        setIndex(index + 1);
      }, 40);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center text-white px-4 sm:px-6 md:px-20 py-10 overflow-hidden">
      {/* Spline background for small screens */}
      <div className="absolute inset-0 z-0 block md:hidden">
        <Spline scene="https://prod.spline.design/dg8ov2LGQU7m6TQ9/scene.splinecode" style={{ width: "100%", height: "100%" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full">
        {/* Left Section */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            Xuro
          </motion.h1>

          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={1}
            className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 backdrop-blur-md px-6 py-2 sm:px-8 sm:py-3 text-sm sm:text-base md:text-lg font-medium shadow-[0_0_25px_rgba(255,255,255,0.08)]"
          >
            zero to hero
          </motion.div>

          <motion.p
            className="text-sm sm:text-base md:text-lg text-gray-200 font-light max-w-md mx-auto md:mx-0 min-h-[60px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.3 }}
          >
            {displayedText}
            <span className="animate-pulse">|</span>
          </motion.p>
        </div>

        {/* Right Section for desktop only */}
        <div className="hidden md:block md:w-1/2 h-[400px] md:h-[600px] relative z-10">
          <Spline
            scene="https://prod.spline.design/dg8ov2LGQU7m6TQ9/scene.splinecode"
            style={{ width: "100%", height: "100%", background: "transparent" }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;