import { useScrollReveal } from "../hooks/useScrollReveal";

// Edit these items to reflect your current learning focus
const FOCUS_ITEMS = [
  "Full-stack development",
  "Machine learning",
  "Data analysis",
  "Cloud technologies",
  "Software system design",
];

export default function CurrentFocus() {
  const ref = useScrollReveal();

  return (
    <div ref={ref} className="mx-auto max-w-4xl px-5 py-12">
      <div className="reveal p-5 bg-base-800/30 border border-base-700/50 rounded-xl">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" aria-hidden="true" />
          <h2 className="text-sm font-semibold text-base-200">
            Currently Exploring
          </h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {FOCUS_ITEMS.map((item, i) => (
            <span
              key={item}
              className="px-3 py-1.5 text-xs font-medium text-accent bg-accent/8 border border-accent/15 rounded-lg transition-colors hover:bg-accent/15"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
