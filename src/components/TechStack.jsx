import { useScrollReveal } from "../hooks/useScrollReveal";
import { skills } from "../data/techStack";

export default function TechStack({ highlightedTech, onTechClick }) {
  const ref = useScrollReveal();

  const handleClick = (techName) => {
    // Toggle: if already highlighted, clear it; otherwise set it
    if (highlightedTech?.toLowerCase() === techName.toLowerCase()) {
      onTechClick(null);
    } else {
      onTechClick(techName);
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
            Skills & Technologies
          </h3>
          <p className="mt-3 text-base-400 text-sm max-w-xl">
            Click any technology to see related projects.
          </p>
        </div>

        {/* Skills grid */}
        <div className="reveal grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
          {skills.map((skill) => {
            const isActive =
              highlightedTech &&
              skill.name.toLowerCase() === highlightedTech.toLowerCase();
            return (
              <button
                key={skill.name}
                onClick={() => handleClick(skill.name)}
                className={`group relative flex items-center gap-2.5 p-3.5 rounded-xl border transition-all duration-200 text-left cursor-pointer ${
                  isActive
                    ? "bg-accent/10 border-accent/30 text-accent"
                    : "bg-base-800/40 border-base-700/40 text-base-300 hover:border-base-500 hover:text-base-100 hover:bg-base-800/70 hover:-translate-y-0.5"
                }`}
                title={`View projects using ${skill.name}`}
              >
                {/* Hover glow */}
                <span className="absolute inset-0 rounded-xl bg-accent/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <span className="text-lg shrink-0 relative" aria-hidden="true">
                  {skill.icon}
                </span>
                <span className="text-sm font-medium truncate relative">
                  {skill.name}
                </span>

                {isActive && (
                  <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-accent rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* Clear filter */}
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
