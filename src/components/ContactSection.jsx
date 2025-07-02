// ContactSection.tsx
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";

const ContactSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgGradient = useTransform(
    scrollYProgress,
    [0, 1],
    [
      "linear-gradient(135deg, #ffffff, #ffffff)",
      "linear-gradient(135deg, #ffffff, #e0e0e0, #f5f5f5, #ffffff)",
    ]
  );

  const [state, handleSubmit] = useForm("xvgrlzwo");

  return (
    <motion.section
      ref={sectionRef}
      style={{ background: bgGradient }}
      id="contact"
      className="min-h-screen w-full px-4 sm:px-6 md:px-20 py-20 text-black flex flex-col items-center justify-center text-center transition-colors duration-1000"
    >
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12"
      >
        Contact Us
      </motion.h1>

      {state.succeeded ? (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xl text-green-600 font-semibold"
        >
          Thank you! We’ll be in touch soon.
        </motion.p>
      ) : (
        <motion.form
          onSubmit={handleSubmit}
          method="POST"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-2xl space-y-6 bg-white bg-opacity-50 backdrop-blur-md p-8 rounded-2xl shadow-xl"
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black/50 transition-all"
          />

          <input
            type="tel"
            name="phone"
            required
            placeholder="Mobile Number"
            className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black/50 transition-all"
          />

          <input
            id="email"
            type="email"
            name="email"
            required
            placeholder="Email Address"
            className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black/50 transition-all"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            required
            rows={4}
            className="w-full p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black/50 transition-all"
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={state.submitting}
            className={`w-full py-3 ${
              state.submitting ? "bg-gray-600" : "bg-black"
            } text-white font-semibold rounded-lg shadow-md hover:bg-gray-800 transition-colors`}
          >
            {state.submitting ? "Submitting..." : "Submit"}
          </motion.button>
        </motion.form>
      )}
    </motion.section>
  );
};

export default ContactSection;