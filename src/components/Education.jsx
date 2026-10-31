import { motion } from "motion/react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const EDUCATION = {
  degree: "B.E. / B.Tech in Computer Science Engineering",
  university: "Your University / College Name",
  duration: "20XX – 20XX",
  expectedGraduation: "Expected Graduation: 20XX",
  cgpa: "CGPA: X.XX / 10",
  coursework: [
    "Data Structures & Algorithms",
    "Machine Learning",
    "Database Management",
    "Operating Systems",
    "Computer Networks",
    "Software Engineering",
  ],
};

export default function Education() {
  const ref = useScrollReveal();

  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:py-24" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="reveal relative overflow-hidden rounded-[30px] border border-white/10 bg-base-900/35 p-6 sm:p-8 lg:p-10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(34,211,197,0.08),_transparent_35%)]" aria-hidden="true" />

        <div className="relative">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_12px_rgba(34,211,197,0.8)]" aria-hidden="true" />
            <span className="eyebrow">Education</span>
          </div>

          <div className="mt-6 grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-base-500">Academic foundation</p>
              <h2 className="mt-4 text-2xl font-bold tracking-[-0.04em] text-base-50 sm:text-3xl">
                {EDUCATION.degree}
              </h2>
              <p className="mt-3 text-base text-base-300">{EDUCATION.university}</p>
              <p className="mt-1 text-sm text-base-400">{EDUCATION.duration}</p>
              <p className="mt-1 text-sm text-base-500">{EDUCATION.expectedGraduation} &middot; {EDUCATION.cgpa}</p>
            </div>

            <div className="rounded-[24px] border border-base-700/60 bg-base-950/50 p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-base-500">
                Relevant coursework
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {EDUCATION.coursework.map((course) => (
                  <span
                    key={course}
                    className="rounded-full border border-base-700/60 bg-base-800/60 px-3 py-1.5 text-xs font-medium text-base-200"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
