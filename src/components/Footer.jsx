// Footer.tsx
import React from "react";
import { motion } from "framer-motion";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";

const Footer = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative w-full py-12 px-4 sm:px-6 md:px-20 text-white overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0f0f0f, #1c1c1c, #0f0f0f)",
      }}
    >
      {/* Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" },
          particles: {
            number: { value: 60 },
            color: { value: "#ffffff" },
            size: { value: 2 },
            move: {
              enable: true,
              speed: 0.5,
              direction: "none",
              random: true,
              outMode: "bounce",
            },
            links: {
              enable: true,
              color: "#ffffff",
              opacity: 0.2,
            },
          },
        }}
        className="absolute top-0 left-0 w-full h-full z-0"
      />

      {/* Footer Content */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]"
        >
          XURO
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-sm text-gray-300"
        >
          📧 Email: <span className="text-white font-medium">xuroglobal@gmail.com</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-6 mt-4"
        >
          <a
            href="https://www.freelancer.com/u/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition transform duration-300 text-white hover:text-cyan-300"
          >
            Freelancer
          </a>
          <a
            href="https://www.upwork.com/freelancers/~yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition transform duration-300 text-white hover:text-green-400"
          >
            Upwork
          </a>
          <a
            href="https://www.fiverr.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition transform duration-300 text-white hover:text-yellow-300"
          >
            Fiverr
          </a>
        </motion.div>

        <p className="text-xs text-gray-500 mt-4">
          &copy; {new Date().getFullYear()} XURO. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;