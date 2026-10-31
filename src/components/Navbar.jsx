import { useState, useEffect } from "react";
import { motion } from "motion/react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Tech Stack", href: "#techstack" },
  { label: "Contact", href: "#contact" },
];

// TODO: Replace with your actual URLs when they are available.
const SOCIAL = {
  github: "https://github.com/",
  linkedin: "https://linkedin.com/in/",
  email: "mailto:your.email@example.com",
};

function GitHubIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function LinkedInIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function MailIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === "Escape") setMobileOpen(false);
    };

    if (mobileOpen) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = () => setMobileOpen(false);

  return (
    <motion.nav
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-base-900/75 shadow-[0_18px_40px_rgba(2,6,17,0.3)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
      aria-label="Main navigation"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a
          href="#home"
          className="inline-flex items-center rounded-full border border-transparent px-2.5 py-1.5 text-lg font-semibold tracking-tight text-base-50 transition-all duration-200 hover:border-accent/20 hover:text-accent"
        >
          Sharanu<span className="text-accent">.</span>
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-white/5 bg-base-900/40 px-1.5 py-1 shadow-[0_8px_20px_rgba(2,6,17,0.18)] backdrop-blur-md md:flex">
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-accent/10 text-accent shadow-[inset_0_0_0_1px_rgba(34,211,197,0.12)]"
                    : "text-base-300 hover:text-base-100"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-accent" />
                )}
              </a>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={SOCIAL.github}
            target={SOCIAL.github.startsWith("http") ? "_blank" : undefined}
            rel={SOCIAL.github.startsWith("http") ? "noopener noreferrer" : undefined}
            aria-label="GitHub profile"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-base-700/60 bg-base-800/50 text-base-400 transition-colors duration-200 hover:border-accent/30 hover:text-base-100"
          >
            <GitHubIcon className="h-4 w-4" />
          </a>
          <a
            href={SOCIAL.linkedin}
            target={SOCIAL.linkedin.startsWith("http") ? "_blank" : undefined}
            rel={SOCIAL.linkedin.startsWith("http") ? "noopener noreferrer" : undefined}
            aria-label="LinkedIn profile"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-base-700/60 bg-base-800/50 text-base-400 transition-colors duration-200 hover:border-accent/30 hover:text-base-100"
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium text-accent transition-colors duration-200 hover:bg-accent/15"
          >
            Contact
          </a>
        </div>

        <button
          type="button"
          className="relative flex h-9 w-9 items-center justify-center rounded-md border border-base-700/60 bg-base-800/50 text-base-200 md:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span className="sr-only">{mobileOpen ? "Close" : "Menu"}</span>
          <span
            className={`absolute h-0.5 w-5 bg-current transition-all duration-300 ${
              mobileOpen ? "rotate-45" : "-translate-y-1.5"
            }`}
          />
          <span
            className={`absolute h-0.5 w-5 bg-current transition-all duration-300 ${
              mobileOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute h-0.5 w-5 bg-current transition-all duration-300 ${
              mobileOpen ? "-rotate-45" : "translate-y-1.5"
            }`}
          />
        </button>
      </div>

      {mobileOpen && (
        <div
          className="fixed inset-0 top-16 z-40 bg-base-900/95 backdrop-blur-lg md:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex flex-col items-center justify-center gap-6 pt-16">
            {NAV_LINKS.map((link, index) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className={`text-2xl font-medium transition-colors duration-200 animate-fade-in-up ${
                    isActive ? "text-accent" : "text-base-200 hover:text-accent"
                  }`}
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  {link.label}
                </a>
              );
            })}

            <div className="mt-4 flex items-center gap-4 animate-fade-in-up" style={{ animationDelay: "320ms" }}>
              <a
                href={SOCIAL.github}
                target={SOCIAL.github.startsWith("http") ? "_blank" : undefined}
                rel={SOCIAL.github.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label="GitHub profile"
                className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-base-700/60 bg-base-800/50 text-base-400"
              >
                <GitHubIcon className="h-5 w-5" />
              </a>
              <a
                href={SOCIAL.linkedin}
                target={SOCIAL.linkedin.startsWith("http") ? "_blank" : undefined}
                rel={SOCIAL.linkedin.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label="LinkedIn profile"
                className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-base-700/60 bg-base-800/50 text-base-400"
              >
                <LinkedInIcon className="h-5 w-5" />
              </a>
              <a
                href={SOCIAL.email}
                aria-label="Email"
                className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-base-700/60 bg-base-800/50 text-base-400"
              >
                <MailIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </motion.nav>
  );
}
