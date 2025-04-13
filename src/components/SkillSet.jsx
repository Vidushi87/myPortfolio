import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3,
  FaDatabase,
  FaBootstrap,
} from "react-icons/fa";
import { DiJavascript1, DiMongodb } from "react-icons/di";
import { TbBrandReactNative, TbBrandVscode } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiPostman } from "react-icons/si";

const SkillSet = () => {
  const techStack = [
    { icon: <FaReact />, label: "React.js" },
    { icon: <DiJavascript1 />, label: "JavaScript" },
    { icon: <FaNodeJs />, label: "Node.js" },
    { icon: <SiExpress />, label: "Express.js" },
    { icon: <FaHtml5 />, label: "HTML" },
    { icon: <FaCss3 />, label: "CSS" },
    { icon: <FaBootstrap />, label: "Bootstrap" },
    { icon: <FaDatabase />, label: "SQL" },
    { icon: <DiMongodb />, label: "MongoDB" },
    { icon: <TbBrandReactNative />, label: "React Native" },
    { icon: <RiTailwindCssFill />, label: "TailwindCSS" },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
    >
      <h3 className="text-2xl font-semibold mb-6 text-center">Tech Stack</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 place-items-center">
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md bg-white dark:bg-[#1e1e1e] text-[#d8c4b6] w-24 h-24 hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <div className="text-3xl mb-2">{tech.icon}</div>
            <div className="text-sm text-center font-medium">{tech.label}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillSet;
