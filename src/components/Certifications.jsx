import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { certifications } from "../data/certifications";

export default function Certifications() {
  const ref = useScrollReveal();
  const [expandedId, setExpandedId] = useState(null);

  if (certifications.length === 0) {
    return (
      <div ref={ref} className="mx-auto max-w-4xl px-5 py-12">
        <div className="reveal">
          <h2 className="text-sm font-semibold text-accent uppercase tracking-widest mb-2">
            Certifications & Achievements
          </h2>
          <div className="p-5 border border-dashed border-base-600/50 rounded-xl text-center">
            <p className="text-base-500 text-sm">
              Add your certifications in{" "}
              <code className="text-accent/70 font-mono text-xs bg-base-800 px-1.5 py-0.5 rounded">
                src/data/certifications.js
              </code>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div ref={ref} className="mx-auto max-w-4xl px-5 py-12">
      <div className="reveal">
        <h2 className="text-sm font-semibold text-accent uppercase tracking-widest mb-6">
          Certifications & Achievements
        </h2>
        <div className="space-y-3">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="group border border-base-700/50 rounded-xl overflow-hidden bg-base-800/30 hover:border-base-600 transition-colors"
            >
              <button
                className="w-full flex items-center justify-between p-4 text-left"
                onClick={() => setExpandedId(expandedId === cert.id ? null : cert.id)}
                aria-expanded={expandedId === cert.id}
              >
                <div>
                  <p className="text-sm font-medium text-base-100">{cert.name}</p>
                  <p className="text-xs text-base-400 mt-0.5">
                    {cert.issuer} &middot; {cert.date}
                  </p>
                </div>
                <svg
                  className={`w-4 h-4 text-base-500 transition-transform duration-200 shrink-0 ${
                    expandedId === cert.id ? "rotate-180" : ""
                  }`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {expandedId === cert.id && (
                <div className="px-4 pb-4 text-sm text-base-400 animate-fade-in border-t border-base-700/30 pt-3">
                  {cert.details && <p className="mb-2">{cert.details}</p>}
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-accent text-xs hover:underline"
                    >
                      View Credential →
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
