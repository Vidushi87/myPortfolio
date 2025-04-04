import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-12 bg-[var(--theme-bg)]">
      {/* Left - Text Content */}
      <div className="text-left">
        <h1 className="text-4xl md:text-6xl font-bold text-[var(--theme-text)] animate-fadeIn">
          Hi, I'm <span className="text-[var(--theme-accent)]">Vidushi</span>
        </h1>
        <h2 className="text-2xl md:text-4xl text-[var(--theme-secondary)] mt-2 animate-slideIn">
          Software Developer
        </h2>
      </div>

      {/* Right - Image */}
      <div className="mt-6 md:mt-0 animate-float">
        <img
          src="src/assets/devIllustration.png" // Update with your actual path
          alt="Developer Illustration"
          className="w-80 md:w-96"
        />
      </div>
    </section>
  );
};

export default Hero;
