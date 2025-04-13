import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <div className="flex flex-col bg-[var(--card-bg)] border border-[var(--border-color)] rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02] duration-300 w-full max-w-xs mx-auto">
      {/* Image - Adjusting for logo visibility */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-56 object-cover object-left" // object-left to show logo/header
      />

      {/* Content */}
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
          <p className="text-sm text-[var(--text-light-color)] mb-3">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-3">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 bg-[var(--accent-light)] text-[var(--accent-color)] rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex justify-between items-center pt-3 border-t border-[var(--border-color)]">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-[var(--accent-color)] hover:underline"
          >
            <FaGithub /> Code
          </a>

          {project.status === "published" ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-[var(--accent-color)] hover:underline"
            >
              <FaExternalLinkAlt /> Demo
            </a>
          ) : (
            <span className="text-xs italic text-[var(--text-light-color)]">
              Coming Soon
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
