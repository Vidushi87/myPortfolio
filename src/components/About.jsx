import React from "react";
import { motion } from "framer-motion";
import SkillSet from "./SkillSet";
import Tools from "./Tools";
import { aboutData } from "../assets/Data";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen px-6 py-16 md:px-12 bg-[var(--bg-color)] text-[var(--text-color)] transition-all mt-6"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* Top: About Me & Little Things */}
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Let me Introduce Myself !
            </h2>
            <p className="text-lg leading-8">
              {aboutData.intro.descriptionPt1}
              <br />
              <br />
              {aboutData.intro.descriptionPt2}
              <br />
              <br />
              {aboutData.intro.descriptionPt3}
              <span className="italic"> {aboutData.intro.descriptionPt4}</span>.
            </p>
          </motion.div>

          {/* Right: Little Things */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4">
              Little Things I Love
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-lg">
              {aboutData.littleThings.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </motion.div>
        </div>
        <SkillSet />
        <Tools />
      </div>
    </section>
  );
};

export default About;
