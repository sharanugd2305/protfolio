import { useState, useCallback } from "react";

// TODO: Replace with your actual URLs
const SOCIAL = {
  github: "https://github.com/", // ← Your GitHub URL
  linkedin: "https://linkedin.com/in/", // ← Your LinkedIn URL
  email: "mailto:your.email@example.com", // ← Your email
  resume: "#", // ← Your resume URL or file path
};

function ArrowDownIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  );
}

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid"
      onMouseMove={handleMouseMove}
    >
      {/* Cursor-following glow */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-700"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}% ${mousePos.y}%, rgba(20, 184, 166, 0.06), transparent 50%)`,
        }}
      />

      {/* Geometric accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Top-right floating shape */}
        <div className="absolute top-24 right-[15%] w-20 h-20 border border-accent/10 rounded-xl rotate-12 animate-float" />
        {/* Bottom-left floating shape */}
        <div
          className="absolute bottom-32 left-[10%] w-14 h-14 border border-secondary/10 rounded-lg -rotate-6 animate-float"
          style={{ animationDelay: "-3s" }}
        />
        {/* Accent dot cluster */}
        <div className="absolute top-1/3 left-[8%] flex flex-col gap-2 opacity-20">
          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
          <div className="w-1.5 h-1.5 rounded-full bg-accent/60" />
          <div className="w-1.5 h-1.5 rounded-full bg-accent/30" />
        </div>
        {/* Code bracket accent */}
        <div className="absolute bottom-[20%] right-[8%] font-mono text-5xl text-base-700/30 select-none">
          {"{ }"}
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-4xl px-5 text-center pt-20 pb-24">
        {/* Status badge */}
        <div className="animate-fade-in-up inline-flex items-center gap-2 px-3.5 py-1.5 mb-8 text-xs font-medium text-accent bg-accent/8 border border-accent/15 rounded-full">
          <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
          Open to opportunities
        </div>

        {/* Name */}
        <h1 className="animate-fade-in-up text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-base-50 leading-[1.1]" style={{ animationDelay: "100ms" }}>
          Sharanu{" "}
          <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
            Dodamani
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="animate-fade-in-up mt-5 text-lg sm:text-xl text-base-300 font-medium"
          style={{ animationDelay: "200ms" }}
        >
          Computer Science Engineering Student{" "}
          <span className="text-base-500 mx-1">·</span>{" "}
          Software & Machine Learning Developer
        </p>

        {/* Introduction */}
        <p
          className="animate-fade-in-up mt-6 max-w-2xl mx-auto text-base-400 text-base leading-relaxed"
          style={{ animationDelay: "300ms" }}
        >
          Building practical software solutions at the intersection of full-stack development
          and machine learning. Focused on writing clean code, solving real-world problems,
          and exploring modern technologies.
        </p>

        {/* CTA Buttons */}
        <div
          className="animate-fade-in-up mt-10 flex flex-wrap items-center justify-center gap-4"
          style={{ animationDelay: "400ms" }}
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-accent text-base-950 rounded-lg hover:bg-accent-light active:scale-[0.97] transition-all duration-200"
          >
            View Projects
            <ArrowDownIcon className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
          </a>
          <a
            href={SOCIAL.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-base-200 bg-base-800 border border-base-600 rounded-lg hover:bg-base-700 hover:border-base-500 active:scale-[0.97] transition-all duration-200"
          >
            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Download Resume
          </a>
        </div>

        {/* Social links */}
        <div
          className="animate-fade-in-up mt-10 flex items-center justify-center gap-5"
          style={{ animationDelay: "500ms" }}
        >
          <a
            href={SOCIAL.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base-500 hover:text-accent transition-colors duration-200"
            aria-label="GitHub"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" /></svg>
          </a>
          <a
            href={SOCIAL.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base-500 hover:text-accent transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
          </a>
          <a
            href={SOCIAL.email}
            className="text-base-500 hover:text-accent transition-colors duration-200"
            aria-label="Email"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: "800ms" }}>
        <a href="#projects" className="flex flex-col items-center gap-1 text-base-600 hover:text-base-400 transition-colors" aria-label="Scroll to projects">
          <span className="text-xs font-mono tracking-wider">scroll</span>
          <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
        </a>
      </div>
    </section>
  );
}
