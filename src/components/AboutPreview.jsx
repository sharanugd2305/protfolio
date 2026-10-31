import { motion } from "motion/react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const ABOUT_POINTS = [
  "Building practical software that is useful, readable, and grounded in real-world problems.",
  "Interested in full-stack product work, from clean interfaces to robust backend systems.",
  "Exploring machine learning and data-driven thinking to solve meaningful problems.",
  "Committed to maintainable code, strong fundamentals, and constant learning.",
];

const FOCUS_AREAS = [
  "Full-stack web development",
  "Interface design",
  "Backend systems",
  "Applied machine learning",
  "Clean engineering",
];

export default function AboutPreview() {
  const ref = useScrollReveal();

  return (
    <section id="about" ref={ref} className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="reveal relative overflow-hidden rounded-[30px] border border-white/10 bg-base-900/35 p-6 sm:p-8 lg:p-10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,197,0.09),_transparent_38%)]" aria-hidden="true" />

        <div className="relative grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="space-y-6">
            <div>
              <span className="eyebrow">About Me</span>
              <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-base-50 sm:text-4xl">
                Engineering with a product mindset.
              </h2>
            </div>

            <div className="rounded-[24px] border border-base-700/60 bg-base-950/50 p-4 sm:p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent/90">
                Current focus
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {FOCUS_AREAS.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-accent/20 bg-accent/8 px-3 py-1.5 text-xs font-medium text-base-100/90"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <p className="text-base leading-relaxed text-base-300 sm:text-[17px]">
              I am a Computer Science Engineering student who enjoys building software that is useful,
              readable, and grounded in real-world problems. My interests sit at the intersection of
              product thinking, clean engineering, and practical technology.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {ABOUT_POINTS.map((point, index) => (
                <div
                  key={index}
                  className="rounded-[22px] border border-base-700/60 bg-base-950/45 p-4 text-sm leading-relaxed text-base-300 transition-colors hover:border-accent/20 hover:bg-base-900/50"
                >
                  <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 text-xs font-semibold text-accent">
                    0{index + 1}
                  </div>
                  <p>{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
