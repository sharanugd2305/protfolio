import { useState, useEffect } from "react";

const SECTIONS = ["home", "projects", "techstack", "contact"];

/**
 * Tracks which section is currently visible in the viewport.
 * Returns the active section ID string.
 */
export function useActiveSection() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observers = [];

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(id);
          }
        },
        { threshold: 0.2, rootMargin: "-80px 0px -40% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return active;
}
