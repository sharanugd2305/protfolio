import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { techCategories } from "../data/techStack";
import SkillCategory from "./SkillCategory";

export default function TechStack({ highlightedTech, onTechClick }) {
  const ref = useScrollReveal();
  const [activeTab, setActiveTab] = useState(0);

  const handleTechClick = (techName) => {
    // Toggle: if already highlighted, clear it; otherwise set it
    if (highlightedTech?.toLowerCase() === techName.toLowerCase()) {
      onTechClick(null);
    } else {
      onTechClick(techName);
      // Scroll to projects after a brief delay
      setTimeout(() => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
      }, 200);
    }
  };

  return (
    <section id="techstack" className="py-24">
      <div ref={ref} className="mx-auto max-w-6xl px-5">
        <div className="reveal mb-12">
          <h2 className="text-sm font-semibold text-accent uppercase tracking-widest mb-2">
            Tech Stack
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-base-50">
            Technologies I Work With
          </h3>
          <p className="mt-3 text-base-400 text-sm max-w-xl">
            Click any technology to see related projects.
          </p>
        </div>

        {/* Category tabs */}
        <div className="reveal mb-8 overflow-x-auto pb-2 -mx-5 px-5 scrollbar-none">
          <div className="flex gap-2 min-w-max">
            {techCategories.map((cat, i) => (
              <button
                key={cat.name}
                onClick={() => setActiveTab(i)}
                className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-xl transition-all duration-200 whitespace-nowrap ${
                  activeTab === i
                    ? "bg-accent/12 text-accent border border-accent/20"
                    : "text-base-400 bg-base-800/40 border border-base-700/40 hover:text-base-200 hover:border-base-600"
                }`}
                aria-pressed={activeTab === i}
              >
                <span aria-hidden="true">{cat.icon}</span>
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Active category items */}
        <div className="reveal">
          <SkillCategory
            category={techCategories[activeTab]}
            onTechClick={handleTechClick}
            highlightedTech={highlightedTech}
          />
        </div>

        {/* Clear highlight */}
        {highlightedTech && (
          <div className="mt-6 text-center animate-fade-in">
            <button
              onClick={() => onTechClick(null)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-base-400 bg-base-800/50 border border-base-700/40 rounded-full hover:text-base-200 transition-colors"
            >
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
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
