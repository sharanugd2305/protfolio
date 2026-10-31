import { useScrollReveal } from "../hooks/useScrollReveal";

const CARDS = [
  {
    icon: "🎓",
    title: "Education",
    description: "Computer Science Engineering",
  },
  {
    icon: "🎯",
    title: "Focus",
    description: "Software Development + Machine Learning",
  },
  {
    icon: "🚀",
    title: "Projects",
    description: "Personal and academic software projects",
  },
  {
    icon: "📚",
    title: "Current Learning",
    description: "Full-stack, ML, cloud technologies & data-driven applications",
  },
];

export default function OverviewCards() {
  const ref = useScrollReveal();

  return (
    <div ref={ref} className="mx-auto max-w-6xl px-5 py-16">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {CARDS.map((card, i) => (
          <div
            key={card.title}
            className="reveal group relative overflow-hidden rounded-[22px] border border-base-700/50 bg-base-800/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 cursor-default"
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,197,0.10),_transparent_45%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative">
              <span className="mb-3 block text-2xl" aria-hidden="true">{card.icon}</span>
              <h3 className="mb-1 text-sm font-semibold text-base-200">{card.title}</h3>
              <p className="text-sm leading-relaxed text-base-400">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
