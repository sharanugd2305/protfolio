import { useState, useCallback } from "react";
import { motion } from "motion/react";
import { Spotlight } from "./ui/spotlight-new";
import { ShimmerButton } from "./ui/shimmer-button";

const SOCIAL = {
  github: "https://github.com/",
  linkedin: "https://linkedin.com/in/",
  email: "mailto:your.email@example.com",
};

function SystemGraphic() {
  const nodes = [
    { x: 70, y: 105, label: "UX" },
    { x: 200, y: 60, label: "API" },
    { x: 210, y: 155, label: "DATA" },
    { x: 320, y: 95, label: "AI" },
    { x: 126, y: 225, label: "TOOLS" },
    { x: 270, y: 220, label: "BUILD" },
  ];

  const links = [
    [0, 1],
    [0, 2],
    [1, 3],
    [2, 3],
    [2, 4],
    [3, 5],
    [1, 5],
    [4, 5],
  ];

  return (
    <div className="relative mx-auto max-w-xl rounded-[28px] border border-base-700/60 bg-base-900/70 p-4 shadow-[0_30px_80px_rgba(2,6,17,0.55)] ring-1 ring-white/5">
      <div className="absolute inset-0 rounded-[28px] bg-[radial-gradient(circle_at_top_left,_rgba(34,211,197,0.12),_transparent_45%)]" aria-hidden="true" />

      <div className="relative overflow-hidden rounded-[22px] border border-base-700/60 bg-base-950/80 p-4">
        <div className="mb-3 flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-base-500">
          <span>system map</span>
          <span className="inline-flex items-center gap-2 rounded-full border border-base-700/60 bg-base-900/80 px-2 py-1 text-[9px] text-base-300">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            live
          </span>
        </div>

        <svg viewBox="0 0 420 300" className="h-[280px] w-full" role="img" aria-label="Engineering system illustration">
          <defs>
            <linearGradient id="signal" x1="0%" x2="100%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(103,245,225,0.9)" />
              <stop offset="100%" stopColor="rgba(34,211,197,0.2)" />
            </linearGradient>
          </defs>

          <g opacity="0.2" stroke="rgba(148,163,184,0.35)" strokeWidth="1">
            <path d="M0 250H420" />
            <path d="M0 180H420" />
            <path d="M0 110H420" />
            <path d="M80 0V300" />
            <path d="M170 0V300" />
            <path d="M260 0V300" />
            <path d="M350 0V300" />
          </g>

          {links.map(([a, b]) => {
            const nodeA = nodes[a];
            const nodeB = nodes[b];
            return (
              <motion.path
                key={`${a}-${b}`}
                d={`M ${nodeA.x} ${nodeA.y} Q ${(nodeA.x + nodeB.x) / 2} ${Math.min(nodeA.y, nodeB.y) - 42} ${nodeB.x} ${nodeB.y}`}
                fill="none"
                stroke="url(#signal)"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0.1 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeInOut", delay: a * 0.12 }}
              />
            );
          })}

          {nodes.map((node, index) => (
            <g key={node.label}>
              <motion.circle
                cx={node.x}
                cy={node.y}
                r="18"
                fill="rgba(15, 28, 43, 0.9)"
                stroke="rgba(103,245,225,0.7)"
                strokeWidth="1.3"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.12 }}
              />
              <motion.text
                x={node.x}
                y={node.y + 4}
                textAnchor="middle"
                fontSize="10"
                fill="rgba(237,243,249,0.92)"
                fontWeight="600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.12 }}
              >
                {node.label}
              </motion.text>
            </g>
          ))}

          <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
            <rect x="20" y="20" width="118" height="32" rx="12" fill="rgba(10,17,25,0.75)" stroke="rgba(148,163,184,0.22)" />
            <text x="35" y="39" fill="rgba(167, 243, 208, 0.92)" fontSize="11" fontWeight="600">Full-stack</text>
            <text x="98" y="39" fill="rgba(148,163,184,0.9)" fontSize="11">focus</text>
          </motion.g>

          <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
            <rect x="260" y="245" width="120" height="30" rx="12" fill="rgba(10,17,25,0.8)" stroke="rgba(148,163,184,0.22)" />
            <text x="276" y="264" fill="rgba(103,245,225,0.9)" fontSize="11" fontWeight="600">build</text>
            <text x="325" y="264" fill="rgba(148,163,184,0.9)" fontSize="11">systems</text>
          </motion.g>
        </svg>
      </div>
    </div>
  );
}

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = useCallback((event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-grid"
      onMouseMove={handleMouseMove}
    >
      <div className="pointer-events-none absolute inset-0 opacity-80">
        <Spotlight
          gradientFirst="radial-gradient(60% 55% at 25% 20%, rgba(34,211,197,0.18), transparent 48%)"
          gradientSecond="radial-gradient(52% 42% at 75% 30%, rgba(125,211,252,0.11), transparent 55%)"
          gradientThird="radial-gradient(40% 35% at 50% 75%, rgba(34,211,197,0.08), transparent 50%)"
          width={700}
          height={1000}
          smallWidth={260}
          duration={12}
          xOffset={120}
          translateY={-180}
        />
      </div>

      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-700"
        style={{
          background: `radial-gradient(700px circle at ${mousePos.x}% ${mousePos.y}%, rgba(34,211,197,0.10), transparent 38%)`,
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-5 pb-20 pt-28 sm:pt-32 lg:pb-24 lg:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="max-w-xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-base-900/60 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-accent backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Software engineering & ML
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl font-semibold tracking-[-0.07em] text-base-50 sm:text-5xl md:text-6xl xl:text-7xl">
                <span className="block text-base-300">Sharanu</span>
                <span className="mt-1 block text-accent">Dodamani</span>
              </h1>

              <p className="max-w-lg text-base leading-relaxed text-base-300 sm:text-lg">
                Computer Science Engineering student building thoughtful software for real-world problems,
                with focus on full-stack development and applied machine learning.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-base-400">
              <span className="rounded-full border border-base-700/70 bg-base-900/50 px-3 py-1.5">CSE Student</span>
              <span className="rounded-full border border-base-700/70 bg-base-900/50 px-3 py-1.5">Full Stack</span>
              <span className="rounded-full border border-base-700/70 bg-base-900/50 px-3 py-1.5">ML</span>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <ShimmerButton
                type="button"
                onClick={() => scrollToSection("projects")}
                className="rounded-xl border border-accent/40 bg-accent px-5 py-3 text-sm font-semibold text-base-950 shadow-[0_18px_36px_rgba(34,211,197,0.18)] hover:bg-accent-light"
                shimmerColor="#dffcf8"
                shimmerSize="0.08em"
                borderRadius="0.9rem"
                background="rgba(34,211,197,1)"
              >
                View Projects
              </ShimmerButton>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl border border-base-700/60 bg-base-800/60 px-5 py-3 text-sm font-semibold text-base-100 transition-colors duration-200 hover:border-base-500 hover:bg-base-700/70"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <a
                href={SOCIAL.github}
                target={SOCIAL.github.startsWith("http") ? "_blank" : undefined}
                rel={SOCIAL.github.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label="GitHub profile"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-base-700/60 bg-base-900/50 text-base-400 transition-colors duration-200 hover:border-accent/30 hover:text-accent"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>

              <a
                href={SOCIAL.linkedin}
                target={SOCIAL.linkedin.startsWith("http") ? "_blank" : undefined}
                rel={SOCIAL.linkedin.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label="LinkedIn profile"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-base-700/60 bg-base-900/50 text-base-400 transition-colors duration-200 hover:border-accent/30 hover:text-accent"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              <a
                href={SOCIAL.email}
                aria-label="Email"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-base-700/60 bg-base-900/50 text-base-400 transition-colors duration-200 hover:border-accent/30 hover:text-accent"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2.5" y="4.5" width="19" height="15" rx="2.2" />
                  <path d="m4 7 8 6 8-6" />
                </svg>
              </a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 26 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="relative lg:pl-4"
          >
            <SystemGraphic />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
