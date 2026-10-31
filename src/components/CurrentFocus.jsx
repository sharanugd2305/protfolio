import { useScrollReveal } from "../hooks/useScrollReveal";

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
      <div className="reveal overflow-hidden rounded-[24px] border border-base-700/50 bg-base-800/30 p-5 shadow-[0_14px_28px_rgba(2,6,17,0.18)]">
        <div className="mb-4 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-accent animate-pulse" aria-hidden="true" />
          <h2 className="text-sm font-semibold text-base-200">Currently Exploring</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {FOCUS_ITEMS.map((item, i) => (
            <span
              key={item}
              className="rounded-full border border-accent/15 bg-accent/8 px-3 py-1.5 text-xs font-medium text-accent transition-colors hover:bg-accent/15"
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
