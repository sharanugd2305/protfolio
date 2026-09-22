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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {CARDS.map((card, i) => (
          <div
            key={card.title}
            className="reveal group relative p-5 bg-base-800/50 border border-base-700/50 rounded-xl hover:border-accent/30 hover:-translate-y-1 transition-all duration-300 cursor-default"
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            {/* Hover glow */}
            <div className="absolute inset-0 rounded-xl bg-accent/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <span className="text-2xl mb-3 block" aria-hidden="true">{card.icon}</span>
              <h3 className="text-sm font-semibold text-base-200 mb-1">{card.title}</h3>
              <p className="text-sm text-base-400 leading-relaxed">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
