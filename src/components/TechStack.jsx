import { motion } from "motion/react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { skills } from "../data/techStack";

const TECH_GROUPS = [
  { title: "Languages", items: ["Python", "JavaScript", "Java", "C++", "SQL"] },
  { title: "Frontend", items: ["React.js", "HTML5", "CSS3", "Tailwind CSS"] },
  { title: "Backend & APIs", items: ["Node.js", "Express.js", "Flask"] },
  { title: "Data & ML", items: ["TensorFlow", "scikit-learn", "Pandas", "NumPy"] },
  { title: "Data Stores", items: ["MongoDB", "PostgreSQL", "MySQL"] },
  { title: "Tools", items: ["Git", "GitHub", "VS Code", "Linux", "Docker"] },
];

export default function TechStack({ highlightedTech, onTechClick }) {
  const ref = useScrollReveal();

  const handleClick = (techName) => {
    if (highlightedTech?.toLowerCase() === techName.toLowerCase()) {
      onTechClick(null);
    } else {
      onTechClick(techName);
      setTimeout(() => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
      }, 200);
    }
  };

  const groupedSkills = TECH_GROUPS.map((group) => ({
    ...group,
    items: skills.filter((skill) => group.items.includes(skill.name)),
  }));

  return (
    <section id="techstack" className="relative py-20 sm:py-24">
      <div ref={ref} className="mx-auto max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="reveal mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <span className="eyebrow">Tech Stack</span>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-base-50 sm:text-4xl">
              Skills built for product and systems work.
            </h2>
          </div>

          <p className="max-w-xl text-sm text-base-400 sm:text-base">
            Click any technology to highlight related projects and explore the stack behind my work.
          </p>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {groupedSkills.map((group, index) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="reveal rounded-[26px] border border-base-700/60 bg-base-900/35 p-5 shadow-[0_20px_32px_rgba(2,6,17,0.18)]"
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-base-300/90">
                  {group.title}
                </h3>
                <span className="rounded-full border border-base-700/70 bg-base-950/50 px-2 py-1 text-[10px] text-base-500">
                  {group.items.length}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => {
                  const isActive =
                    highlightedTech && skill.name.toLowerCase() === highlightedTech.toLowerCase();

                  return (
                    <button
                      key={skill.name}
                      type="button"
                      onClick={() => handleClick(skill.name)}
                      className={`inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-left transition-all duration-200 ${
                        isActive
                          ? "border-accent/30 bg-accent/10 text-accent shadow-[0_0_0_1px_rgba(34,211,197,0.18)]"
                          : "border-base-700/60 bg-base-800/50 text-base-300 hover:-translate-y-0.5 hover:border-base-500 hover:bg-base-800/80 hover:text-base-100"
                      }`}
                      title={`View projects using ${skill.name}`}
                      aria-pressed={isActive}
                    >
                      <span className="text-base leading-none" aria-hidden="true">{skill.icon}</span>
                      <span className="text-sm font-medium">{skill.name}</span>
                    </button>
                  );
                })}
              </div>
            </motion.article>
          ))}
        </div>

        {highlightedTech && (
          <div className="reveal mt-8 text-center">
            <button
              type="button"
              onClick={() => onTechClick(null)}
              className="inline-flex items-center gap-2 rounded-full border border-base-700/60 bg-base-800/50 px-4 py-2 text-xs font-medium text-base-300 transition-colors hover:border-base-500 hover:text-base-100"
            >
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              Clear filter: {highlightedTech}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
