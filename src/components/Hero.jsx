import React from "react";
import { aboutData } from "../assets/Data";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center min-h-screen px-6 md:px-12 bg-[var(--theme-bg)]">
      {/* Left - Text Content */}
      <div className="text-left ml-20">
        <h1 className="text-4xl md:text-6xl font-bold text-[var(--theme-text)] animate-fadeIn">
          Hi, I'm{" "}
          <span className="text-[var(--theme-accent)]">
            {aboutData.intro.firstName}
          </span>
        </h1>
        <h2 className="text-2xl md:text-4xl text-[var(--theme-secondary)] mt-2 animate-slideIn">
          {aboutData.intro.role}
        </h2>
      </div>

      {/* Right - Image */}
      <div className="mt-6 md:mt-0 animate-float ml-50">
        <img
          src="/heroIllustration.png" // Update with your actual path
          alt="Hero Illustration"
          className="w-100 md:w-116"
        />
      </div>
    </section>
  );
};

export default Hero;
