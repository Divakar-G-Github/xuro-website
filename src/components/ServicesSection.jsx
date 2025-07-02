// ServicesSection.tsx
import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaGlobe, FaCode, FaMobileAlt, FaRobot } from "react-icons/fa";

const services = [
  {
    title: "Web Development",
    description: "Futuristic websites using React, Tailwind, Three.js",
    icon: <FaGlobe className="text-4xl text-white" />,
  },
  {
    title: "Software Development",
    description: "Scalable software for businesses and automation",
    icon: <FaCode className="text-4xl text-white" />,
  },
  {
    title: "App Development",
    description: "Cross-platform apps with great UX/UI",
    icon: <FaMobileAlt className="text-4xl text-white" />,
  },
  {
    title: "AI Business Tools",
    description: "Cloud-based AI tools for analytics and automation",
    icon: <FaRobot className="text-4xl text-white" />,
  },
];

const ServicesSection = () => {
  const containerRef = useRef(null);
  const controls = useAnimation();
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!paused) {
      controls.start({
        x: ["0%", "-50%"],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        },
      });
    } else {
      controls.stop();
    }
  }, [paused, controls]);

  return (
    <section className="relative py-20 px-0 text-white overflow-hidden" id="services">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 px-4 sm:px-6 md:px-20">Our Services</h2>

      <div
        ref={containerRef}
        className="relative overflow-hidden w-full cursor-grab"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
      >
        <motion.div
          animate={controls}
          className="flex w-max gap-6 px-4 sm:px-6 md:px-20"
        >
          {[...services, ...services].map((service, index) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={index}
              className="w-[240px] sm:w-[260px] md:w-[300px] h-[260px] md:h-[300px] bg-white/10 border border-white/20 backdrop-blur-xl rounded-2xl p-4 shadow-xl flex-shrink-0 flex flex-col justify-center items-start hover:bg-white/20 transition-all duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-300 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
