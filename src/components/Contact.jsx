import { useState } from "react";
import { motion } from "motion/react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const CONTACT_INFO = {
  email: "your.email@example.com",
  github: "https://github.com/",
  linkedin: "https://linkedin.com/in/",
  resume: "#",
};

const INITIAL_FORM = { name: "", email: "", message: "" };

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function Contact() {
  const ref = useScrollReveal();
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));

    if (errors[name]) {
      setErrors((previous) => ({ ...previous, [name]: null }));
    }
  };

  const validate = () => {
    const nextErrors = {};

    if (!form.name.trim()) nextErrors.name = "Name is required.";
    if (!form.email.trim()) nextErrors.email = "Email is required.";
    else if (!validateEmail(form.email)) nextErrors.email = "Enter a valid email.";
    if (!form.message.trim()) nextErrors.message = "Message is required.";

    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("error");
      return;
    }

    setStatus("sending");
    setErrors({});

    setTimeout(() => {
      setStatus("success");
      setForm(INITIAL_FORM);
    }, 500);
  };

  const inputClasses = (field) =>
    `w-full rounded-xl border bg-base-800/60 px-4 py-3 text-sm text-base-100 placeholder:text-base-500 outline-none transition-all duration-200 ${
      errors[field]
        ? "border-red-500/60 focus:border-red-500 focus:ring-1 focus:ring-red-500/20"
        : "border-base-700/60 focus:border-accent/50 focus:ring-1 focus:ring-accent/20"
    }`;

  return (
    <section id="contact" className="py-20 sm:py-24" ref={ref}>
      <div className="mx-auto max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="reveal mb-10"
        >
          <span className="eyebrow">Contact</span>
          <h2 className="mt-4 text-3xl font-bold tracking-[-0.04em] text-base-50 sm:text-4xl">
            Let&apos;s connect
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-base-400 sm:text-base">
            If you&apos;d like to connect, collaborate, or discuss software projects, feel free to reach out.
          </p>
        </motion.div>

        <div className="reveal grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="rounded-[30px] border border-base-700/60 bg-base-900/35 p-6 sm:p-7">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-base-500">Get in touch</p>

            <div className="mt-6 space-y-4">
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="group flex items-center gap-3 rounded-[20px] border border-base-700/60 bg-base-950/45 p-3 text-sm text-base-300 transition-colors hover:border-accent/30 hover:text-accent"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-base-700/60 bg-base-900/60 text-base-200">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2.5" y="4.5" width="19" height="15" rx="2.2" />
                    <path d="m4 7 8 6 8-6" />
                  </svg>
                </span>
                {CONTACT_INFO.email}
              </a>

              <a
                href={CONTACT_INFO.github}
                target={CONTACT_INFO.github.startsWith("http") ? "_blank" : undefined}
                rel={CONTACT_INFO.github.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-3 rounded-[20px] border border-base-700/60 bg-base-950/45 p-3 text-sm text-base-300 transition-colors hover:border-accent/30 hover:text-accent"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-base-700/60 bg-base-900/60 text-base-200">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </span>
                GitHub
              </a>

              <a
                href={CONTACT_INFO.linkedin}
                target={CONTACT_INFO.linkedin.startsWith("http") ? "_blank" : undefined}
                rel={CONTACT_INFO.linkedin.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-3 rounded-[20px] border border-base-700/60 bg-base-950/45 p-3 text-sm text-base-300 transition-colors hover:border-accent/30 hover:text-accent"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-base-700/60 bg-base-900/60 text-base-200">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </span>
                LinkedIn
              </a>

              <a
                href={CONTACT_INFO.resume}
                target={CONTACT_INFO.resume.startsWith("http") ? "_blank" : undefined}
                rel={CONTACT_INFO.resume.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-3 rounded-[20px] border border-base-700/60 bg-base-950/45 p-3 text-sm text-base-300 transition-colors hover:border-accent/30 hover:text-accent"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-base-700/60 bg-base-900/60 text-base-200">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </span>
                Resume
              </a>
            </div>
          </div>

          <div className="rounded-[30px] border border-base-700/60 bg-base-900/35 p-6 sm:p-7">
            <div className="mb-5 flex items-center justify-between gap-3">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-base-500">Send a message</p>
                <h3 className="mt-2 text-xl font-semibold text-base-50">Project inquiry</h3>
              </div>
              <span className="rounded-full border border-accent/20 bg-accent/8 px-2.5 py-1 text-[10px] uppercase tracking-[0.15em] text-accent">
                Demo form
              </span>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-base-400">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  className={inputClasses("name")}
                  placeholder="Your name"
                  aria-invalid={!!errors.name}
                />
                {errors.name && <p className="mt-2 text-xs text-red-400">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-base-400">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className={inputClasses("email")}
                  placeholder="your@email.com"
                  aria-invalid={!!errors.email}
                />
                {errors.email && <p className="mt-2 text-xs text-red-400">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-base-400">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className={`${inputClasses("message")} min-h-[140px] resize-none`}
                  placeholder="Tell me about your project or idea..."
                  aria-invalid={!!errors.message}
                />
                {errors.message && <p className="mt-2 text-xs text-red-400">{errors.message}</p>}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-xl border border-accent/40 bg-accent px-5 py-3 text-sm font-semibold text-base-950 shadow-[0_18px_36px_rgba(34,211,197,0.18)] transition-colors hover:bg-accent-light"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "Sending..." : "Send message"}
                </button>
              </div>

              {status === "success" && (
                <p className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-300">
                  Your message has been simulated successfully. Connect the form to a backend service when you&apos;re ready.
                </p>
              )}

              {status === "error" && (
                <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-300">
                  Please complete the required fields before sending.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
