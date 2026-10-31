import { useState } from "react";
import { motion } from "motion/react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { certifications } from "../data/certifications";

export default function Certifications() {
  const ref = useScrollReveal();
  const [expandedId, setExpandedId] = useState(null);

  if (certifications.length === 0) {
    return (
      <section className="mx-auto max-w-6xl px-5 py-20 sm:py-24" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="reveal rounded-2xl border border-dashed border-base-700/70 bg-base-900/30 p-8 text-center"
        >
          <span className="eyebrow">Certifications</span>
          <h2 className="mt-4 text-2xl font-bold tracking-[-0.04em] text-base-50 sm:text-3xl">
            Achievements & credentials
          </h2>
          <p className="mt-4 text-sm text-base-400 sm:text-base">
            Add your certifications in{" "}
            <code className="rounded bg-base-800 px-1.5 py-0.5 font-mono text-[11px] text-accent">
              src/data/certifications.js
            </code>
          </p>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:py-24" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="reveal"
      >
        <span className="eyebrow">Certifications</span>
        <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-base-50 sm:text-4xl">
          Achievements & credentials
        </h2>

        <div className="mt-8 space-y-3">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="overflow-hidden rounded-2xl border border-base-700/60 bg-base-900/35 transition-colors hover:border-base-500"
            >
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 p-4 text-left sm:p-5"
                onClick={() => setExpandedId(expandedId === cert.id ? null : cert.id)}
                aria-expanded={expandedId === cert.id}
              >
                <div>
                  <p className="text-base font-medium text-base-100">{cert.name}</p>
                  <p className="mt-1 text-xs text-base-400 sm:text-sm">
                    {cert.issuer} &middot; {cert.date}
                  </p>
                </div>
                <svg
                  className={`h-4 w-4 shrink-0 text-base-500 transition-transform duration-200 ${
                    expandedId === cert.id ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {expandedId === cert.id && (
                <div className="border-t border-base-700/50 bg-base-800/25 px-4 pb-4 pt-3 text-sm text-base-300 sm:px-5">
                  {cert.details && <p className="mb-3 leading-relaxed">{cert.details}</p>}
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-accent transition-colors hover:text-accent-light"
                    >
                      View credential
                      <span aria-hidden="true">→</span>
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
