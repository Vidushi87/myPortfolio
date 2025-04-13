import React from "react";
import { motion } from "framer-motion";
import SkillSet from "./SkillSet";
import Tools from "./Tools";

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
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-lg leading-8">
              I'm Vidushi Pandey, a software developer who loves crafting
              smooth, intuitive user experiences. Over the past few years, I've
              worked on everything from enterprise dashboards to side projects —
              mostly in React.js, Node.js, and JavaScript.
              <br />
              <br />
              I believe the web should feel personal, which is why I'm always
              thinking about the user — and sometimes overthinking button
              placements.
              <br />
              <br />
              When I'm not coding, you’ll find me trying to perfect my freestyle
              in the pool 🏊‍♀️, learning new dance moves 💃, flipping through a
              self-growth book 📖, or curled up with a comfort sitcom like
              <span className="italic"> Brooklyn Nine-Nine</span>.
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
              <li>📚 Reading self-growth books</li>
              <li>🧘‍♀️ Mindful routines</li>
              <li>🏊‍♀️ Swimming sessions</li>
              <li>💃 Dancing after hours</li>
              <li>🎧 Chill playlists while coding</li>
              <li>🍜 Exploring new food joints</li>
              <li>🎬 Sitcom marathons (F.R.I.E.N.D.S & B99)</li>
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
