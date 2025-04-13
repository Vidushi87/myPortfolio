import { motion } from "framer-motion";
import React from "react";
import { toolsData } from "../assets/Data";

const Tools = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
    >
      <h3 className="text-2xl font-semibold mb-6 text-center">Tools I Use</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center">
        {toolsData.map((tool, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md bg-white dark:bg-[#1e1e1e] text-[#d8c4b6] w-24 h-24 hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <div className="text-3xl mb-2">{tool.icon}</div>
            <div className="text-sm text-center font-medium">{tool.label}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Tools;
