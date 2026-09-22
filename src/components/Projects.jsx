import { useState, useMemo } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { projects } from "../data/projects";
import ProjectFilter from "./ProjectFilter";
import ProjectCard from "./ProjectCard";

export default function Projects({ highlightedTech }) {
  const ref = useScrollReveal();
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="projects" className="py-24">
      <div ref={ref} className="mx-auto max-w-6xl px-5">
        <div className="reveal mb-12">
          <h2 className="text-sm font-semibold text-accent uppercase tracking-widest mb-2">
            Projects
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-base-50">
            What I&apos;ve Built
          </h3>
        </div>

        {projects.length > 0 ? (
          <>
            {/* Filter — only show when there are projects */}
            <div className="reveal">
              <ProjectFilter
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
              />
            </div>

            {/* Project grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredProjects.map((project) => {
                const isHighlighted =
                  highlightedTech &&
                  project.technologies.some(
                    (t) => t.toLowerCase() === highlightedTech.toLowerCase()
                  );
                return (
                  <div key={project.id} className="reveal">
                    <ProjectCard
                      project={project}
                      isHighlighted={isHighlighted}
                    />
                  </div>
                );
              })}
            </div>

            {filteredProjects.length === 0 && (
              <div className="py-16 text-center">
                <p className="text-base-500 text-sm">
                  No projects in this category yet.
                </p>
              </div>
            )}
          </>
        ) : (
          /* Empty state */
          <div className="reveal py-20 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-base-800/50 border border-base-700/50 rounded-2xl mb-4">
              <span className="text-2xl" aria-hidden="true">🚀</span>
            </div>
            <p className="text-base-400 text-sm mb-1">Projects coming soon.</p>
            <p className="text-base-500 text-xs">
              Add your projects in{" "}
              <code className="text-accent/70 font-mono bg-base-800 px-1.5 py-0.5 rounded">
                src/data/projects.js
              </code>
            </p>
          </div>
        )}

        {/* Tech highlight indicator */}
        {highlightedTech && projects.length > 0 && (
          <div className="mt-6 text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs text-accent bg-accent/8 border border-accent/15 rounded-full">
              Showing projects using <strong>{highlightedTech}</strong>
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
