import { useState, useMemo } from "react";
import { motion } from "motion/react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { projects } from "../data/projects";
import ProjectFilter from "./ProjectFilter";
import ProjectCard from "./ProjectCard";

export default function Projects({ highlightedTech }) {
  const ref = useScrollReveal();
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="projects" className="py-20 sm:py-24">
      <div ref={ref} className="mx-auto max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="reveal mb-10"
        >
          <span className="eyebrow">Projects</span>
          <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-base-50 sm:text-4xl">
            Selected work
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-base-400 sm:text-base">
            This section is intentionally structured and ready for real project entries, without inventing work or claiming projects that do not exist.
          </p>
        </motion.div>

        {projects.length > 0 ? (
          <>
            <div className="reveal">
              <ProjectFilter
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
              />
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filteredProjects.map((project) => {
                const isHighlighted =
                  highlightedTech &&
                  project.technologies.some(
                    (tech) => tech.toLowerCase() === highlightedTech.toLowerCase()
                  );

                return (
                  <div key={project.id} className="reveal">
                    <ProjectCard project={project} isHighlighted={isHighlighted} />
                  </div>
                );
              })}
            </div>

            {filteredProjects.length === 0 && (
              <div className="reveal py-16 text-center">
                <p className="text-sm text-base-500">No projects in this category yet.</p>
              </div>
            )}
          </>
        ) : (
          <div className="projects-empty reveal overflow-hidden rounded-[30px] border border-base-700/60 bg-base-900/30">
            <div className="bg-grid px-6 py-16 text-center sm:px-10 sm:py-20">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-base-700/60 bg-base-800/60 text-2xl shadow-[0_12px_24px_rgba(2,6,17,0.25)]">
                🚀
              </div>
              <p className="mt-5 text-lg font-medium text-base-200">Projects coming soon.</p>
              <p className="mt-3 max-w-xl mx-auto text-sm leading-relaxed text-base-400">
                This section is intentionally structured and ready for real project entries. Add genuine project data in
                <code className="mx-1 rounded bg-base-800 px-1.5 py-0.5 font-mono text-[11px] text-accent">
                  src/data/projects.js
                </code>
                when your work is ready to be showcased.
              </p>
              <a
                href="#techstack"
                className="projects-empty__link mt-7 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-4 py-2.5 text-sm font-medium text-accent transition-colors hover:border-accent/50 hover:bg-accent/15"
              >
                Explore my toolkit
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        )}

        {highlightedTech && projects.length > 0 && (
          <div className="reveal mt-8 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/8 px-3 py-1.5 text-xs font-medium text-accent">
              Showing projects using <strong>{highlightedTech}</strong>
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
