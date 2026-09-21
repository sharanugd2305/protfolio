import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

// TODO: Replace with your actual contact info
const CONTACT_INFO = {
  email: "your.email@example.com", // ← Your email
  github: "https://github.com/", // ← Your GitHub URL
  linkedin: "https://linkedin.com/in/", // ← Your LinkedIn URL
  resume: "#", // ← Your resume URL
};

const INITIAL_FORM = { name: "", email: "", message: "" };

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function Contact() {
  const ref = useScrollReveal();
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) newErrors.email = "Email is required.";
    else if (!validateEmail(form.email)) newErrors.email = "Enter a valid email.";
    if (!form.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setStatus("sending");

    // No backend — log to console and show integration message
    setTimeout(() => {
      console.log("Contact form submission:", form);
      setStatus("success");
      setForm(INITIAL_FORM);
      setErrors({});
    }, 1000);
  };

  const inputClasses = (field) =>
    `w-full px-4 py-3 bg-base-800/60 border rounded-lg text-sm text-base-100 placeholder:text-base-500 outline-none transition-all duration-200 ${
      errors[field]
        ? "border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500/20"
        : "border-base-700/50 focus:border-accent/50 focus:ring-1 focus:ring-accent/20"
    }`;

  return (
    <section id="contact" className="py-24">
      <div ref={ref} className="mx-auto max-w-6xl px-5">
        <div className="reveal mb-12">
          <h2 className="text-sm font-semibold text-accent uppercase tracking-widest mb-2">
            Contact
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-base-50">
            Let&apos;s Connect
          </h3>
          <p className="mt-3 text-base-400 text-sm max-w-lg">
            Have a question, want to collaborate, or just want to say hello? Feel free to reach out.
          </p>
        </div>

        <div className="reveal grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h4 className="text-xs font-semibold text-base-400 uppercase tracking-wider mb-4">
                Get in Touch
              </h4>
              <div className="space-y-4">
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="group flex items-center gap-3 text-sm text-base-300 hover:text-accent transition-colors"
                >
                  <span className="flex items-center justify-center w-9 h-9 bg-base-800/60 border border-base-700/40 rounded-lg group-hover:border-accent/30 transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                  </span>
                  {CONTACT_INFO.email}
                </a>
                <a
                  href={CONTACT_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-sm text-base-300 hover:text-accent transition-colors"
                >
                  <span className="flex items-center justify-center w-9 h-9 bg-base-800/60 border border-base-700/40 rounded-lg group-hover:border-accent/30 transition-colors">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" /></svg>
                  </span>
                  GitHub
                </a>
                <a
                  href={CONTACT_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-sm text-base-300 hover:text-accent transition-colors"
                >
                  <span className="flex items-center justify-center w-9 h-9 bg-base-800/60 border border-base-700/40 rounded-lg group-hover:border-accent/30 transition-colors">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                  </span>
                  LinkedIn
                </a>
                <a
                  href={CONTACT_INFO.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-sm text-base-300 hover:text-accent transition-colors"
                >
                  <span className="flex items-center justify-center w-9 h-9 bg-base-800/60 border border-base-700/40 rounded-lg group-hover:border-accent/30 transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
                  </span>
                  Resume
                </a>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-medium text-base-400 mb-1.5">
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  className={inputClasses("name")}
                  placeholder="Your name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-xs text-red-400">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-xs font-medium text-base-400 mb-1.5">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClasses("email")}
                  placeholder="your.email@example.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-xs text-red-400">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-medium text-base-400 mb-1.5">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  className={`${inputClasses("message")} resize-y min-h-[120px]`}
                  placeholder="Your message..."
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1 text-xs text-red-400">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold bg-accent text-base-950 rounded-lg hover:bg-accent-light disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.97] transition-all duration-200"
              >
                {status === "sending" ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </>
                )}
              </button>

              {/* Status messages */}
              {status === "success" && (
                <div className="flex items-center gap-2 p-3 text-sm text-green-400 bg-green-500/10 border border-green-500/20 rounded-lg animate-fade-in">
                  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Form submitted! This is a demo — connect a backend service (e.g., Formspree, EmailJS) to send real messages.
                </div>
              )}

              {status === "error" && (
                <div className="flex items-center gap-2 p-3 text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg animate-fade-in">
                  <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Something went wrong. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
