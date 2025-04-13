import React, { useEffect } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      title: "SpendSync",
      description:
        "A finance tracker to monitor your income, expenses, and balance over time.",
      techStack: [
        "React",
        "Bootstrap",
        "Node.js",
        "MongoDB",
        "Express",
        "REST APIs",
      ],
      image: "/projects/spendSync.png",
      github: "https://github.com/Vidushi87/SpendSync",
      demo: "#",
      status: "coming soon",
    },
    {
      title: "Find Your Recipe",
      description:
        "A recipe app to discover new dishes based on ingredients, dietary preferences, and more.",
      techStack: ["React", "Tailwind CSS", "JavaScript", "REST APIs"],
      image: "/projects/findYourRecipe.png",
      github: "https://github.com/Vidushi87/FindYourRecipe",
      demo: "https://find-your-recipe-nine.vercel.app/",
      status: "published",
    },
    {
      title: "Tool-Kit",
      description:
        "A collection of small utility apps designed to help in everyday tasks.",
      techStack: ["React", "Bootstrap", "JavaScript", "REST APIs"],
      image: "/projects/toolKit.png",
      github: "https://github.com/Vidushi87/toolkit",
      demo: "https://toolkit-vert.vercel.app/",
      status: "published",
    },
    {
      title: "MovieFlix",
      description:
        "A movie discovery platform to find trending movies and TV shows from your favorite genres.",
      techStack: [
        "React Native",
        "Tailwind CSS",
        "Expo",
        "JavaScript",
        "REST APIs",
      ],
      image: "/projects/movieFlix.jpeg",
      github: "https://github.com/Vidushi87/MovieFlix",
      demo: "#",
      status: "coming soon",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[var(--bg-color)] text-[var(--text-color)] py-8 scroll-mt-[100px]">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-semibold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          My Projects
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
