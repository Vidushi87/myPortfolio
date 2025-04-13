import React, { useEffect } from "react";
import { motion } from "framer-motion";

const Resume = () => {
  const headerHeight = document.querySelector("header").offsetHeight;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="w-full min-h-screen bg-[var(--bg-color)] text-[var(--text-color)] flex flex-col items-center justify-center px-4 py-8"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="w-full max-w-5xl flex justify-between items-center mb-6">
        <motion.h1
          className="text-4xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Here's My Resume
        </motion.h1>

        <motion.a
          href="/Resume-Vidushi.pdf"
          download
          className="bg-[var(--accent-color)] text-[#877d71] px-6 py-2 rounded hover:bg-opacity-90 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Download
        </motion.a>
      </div>

      <motion.div
        className="w-full max-w-5xl flex justify-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <img
          src="/Resume.jpg"
          alt="Vidushi Pandey Resume"
          className="w-full max-w-4xl rounded-lg shadow-lg"
        />
      </motion.div>
    </motion.div>
  );
};

export default Resume;
