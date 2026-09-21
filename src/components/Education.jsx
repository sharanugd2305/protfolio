import { useScrollReveal } from "../hooks/useScrollReveal";

// TODO: Replace placeholder values with your actual education details.
const EDUCATION = {
  degree: "B.E. / B.Tech in Computer Science Engineering",
  university: "Your University / College Name",
  duration: "20XX – 20XX",
  expectedGraduation: "Expected Graduation: 20XX",
  cgpa: "CGPA: X.XX / 10",
  coursework: [
    "Data Structures & Algorithms",
    "Machine Learning",
    "Database Management",
    "Operating Systems",
    "Computer Networks",
    "Software Engineering",
  ],
};

export default function Education() {
  const ref = useScrollReveal();

  return (
    <div ref={ref} className="mx-auto max-w-4xl px-5 py-12">
      <div className="reveal relative p-6 sm:p-8 bg-base-800/40 border border-base-700/50 rounded-xl">
        {/* Timeline accent */}
        <div className="absolute top-8 left-0 w-0.5 h-10 bg-accent/50 rounded-full hidden sm:block" aria-hidden="true" />

        <h2 className="text-sm font-semibold text-accent uppercase tracking-widest mb-1">
          Education
        </h2>
        <h3 className="text-xl font-bold text-base-50 mb-1">{EDUCATION.degree}</h3>
        <p className="text-base-300 text-sm mb-1">{EDUCATION.university}</p>
        <p className="text-base-500 text-sm mb-1">{EDUCATION.duration}</p>
        <p className="text-base-500 text-sm mb-4">{EDUCATION.expectedGraduation} &middot; {EDUCATION.cgpa}</p>

        <div>
          <p className="text-xs font-medium text-base-400 uppercase tracking-wider mb-2">
            Relevant Coursework
          </p>
          <div className="flex flex-wrap gap-2">
            {EDUCATION.coursework.map((course) => (
              <span
                key={course}
                className="px-2.5 py-1 text-xs text-base-300 bg-base-700/50 border border-base-600/40 rounded-md"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
