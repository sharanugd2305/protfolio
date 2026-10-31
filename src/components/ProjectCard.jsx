export default function ProjectCard({ project, isHighlighted }) {
  return (
    <article
      className={`group relative overflow-hidden rounded-[24px] border bg-base-800/40 transition-all duration-300 hover:-translate-y-1 ${
        isHighlighted
          ? "border-accent/30 ring-1 ring-accent/15 shadow-[0_18px_30px_rgba(34,211,197,0.08)]"
          : "border-base-700/60 hover:border-base-500 shadow-[0_12px_24px_rgba(2,6,17,0.18)]"
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,197,0.14),_transparent_45%)] opacity-80" aria-hidden="true" />

      {project.image ? (
        <div className="relative aspect-video overflow-hidden border-b border-base-700/60 bg-base-800">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      ) : (
        <div className="relative flex aspect-video items-center justify-center border-b border-base-700/60 bg-[radial-gradient(circle_at_top,_rgba(34,211,197,0.14),_transparent_50%),_rgba(15,28,43,0.9)]">
          <div className="rounded-xl border border-base-700/60 bg-base-900/40 px-3 py-2 font-mono text-[10px] font-medium tracking-[0.18em] text-base-400 uppercase">
            Project
          </div>
        </div>
      )}

      <div className="relative space-y-4 p-5 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-base-500">
              {project.category || "Project"}
            </p>
            <h3 className="text-lg font-semibold tracking-[-0.03em] text-base-50 transition-colors group-hover:text-accent">
              {project.title}
            </h3>
          </div>
          {isHighlighted && (
            <span
              className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_12px_rgba(34,211,197,0.8)]"
              aria-label="Active tech match"
            />
          )}
        </div>

        <p className="text-sm leading-relaxed text-base-400">
          {project.description || "Project details will be added here once content is available."}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.technologies?.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-base-700/60 bg-base-900/50 px-2 py-1 text-[11px] font-medium text-base-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-1">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-base-700/60 bg-base-700/40 px-3 py-2 text-[11px] font-medium text-base-200 transition-colors hover:border-base-500 hover:text-base-50"
            >
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              GitHub
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-accent/30 bg-accent/10 px-3 py-2 text-[11px] font-medium text-accent transition-colors hover:bg-accent/15"
            >
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
