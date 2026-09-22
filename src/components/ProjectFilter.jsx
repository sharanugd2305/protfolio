import { projectCategories } from "../data/projects";

export default function ProjectFilter({ activeCategory, onCategoryChange }) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {projectCategories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
            activeCategory === category
              ? "bg-accent/15 text-accent border border-accent/25"
              : "text-base-400 bg-base-800/50 border border-base-700/40 hover:text-base-200 hover:border-base-600"
          }`}
          aria-pressed={activeCategory === category}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
