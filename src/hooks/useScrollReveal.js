import { useEffect, useRef } from "react";

/**
 * Applies scroll-reveal animation to elements with the `.reveal` class.
 * Uses IntersectionObserver to add `.revealed` when element enters viewport.
 * Respects prefers-reduced-motion.
 */
export function useScrollReveal() {
  const containerRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return containerRef;
}
