import { useScrollReveal } from "../hooks/useScrollReveal";

const ABOUT_POINTS = [
  "Computer Science Engineering student with a focus on building practical, real-world software.",
  "Interested in full-stack web development, from designing clean interfaces to building robust backend systems.",
  "Exploring machine learning and data-driven approaches to solve meaningful problems.",
  "Committed to writing clean, maintainable code and learning modern development practices.",
  "Working toward a professional career in software engineering and applied machine learning.",
];

export default function AboutPreview() {
  const ref = useScrollReveal();

  return (
    <div ref={ref} className="mx-auto max-w-4xl px-5 py-16">
      <div className="reveal">
        <h2 className="text-sm font-semibold text-accent uppercase tracking-widest mb-2">
          About Me
        </h2>
        <h3 className="text-2xl sm:text-3xl font-bold text-base-50 mb-8">
          A brief introduction
        </h3>
        <ul className="space-y-4">
          {ABOUT_POINTS.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-base-300 text-[15px] leading-relaxed">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0" aria-hidden="true" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
