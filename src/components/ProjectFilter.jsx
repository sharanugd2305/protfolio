import { projectCategories } from "../data/projects";

export default function ProjectFilter({ activeCategory, onCategoryChange }) {
  return (
    <div className="mb-8 flex flex-wrap gap-2.5">
      {projectCategories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onCategoryChange(category)}
          className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${
            activeCategory === category
              ? "border-accent/30 bg-accent/10 text-accent shadow-[0_0_0_1px_rgba(34,211,197,0.12)]"
              : "border-base-700/60 bg-base-900/40 text-base-400 hover:border-base-500 hover:text-base-100"
          }`}
          aria-pressed={activeCategory === category}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
