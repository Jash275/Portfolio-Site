"use client";

import { CSSProperties, useEffect, useRef } from "react";

interface SlideProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  trigger?: "load" | "scroll";
}

export const Slide = ({ children, className, delay = 0, trigger = "scroll" }: SlideProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const showImmediately = () => {
      element.classList.remove("is-reveal-pending", "is-revealing");
    };

    if (reducedMotion.matches) return;

    let observer: IntersectionObserver | undefined;
    let frame = 0;

    const onPreferenceChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        observer?.disconnect();
        cancelAnimationFrame(frame);
        showImmediately();
      }
    };

    const onAnimationEnd = (event: AnimationEvent) => {
      if (event.target === element) element.classList.remove("is-revealing");
    };

    reducedMotion.addEventListener("change", onPreferenceChange);
    element.addEventListener("animationend", onAnimationEnd);

    if (trigger === "load") {
      element.classList.add("reveal--load");
      frame = requestAnimationFrame(() => {
        if (!reducedMotion.matches) element.classList.add("is-revealing");
      });
    } else {
      const rect = element.getBoundingClientRect();
      if (rect.top >= window.innerHeight && "IntersectionObserver" in window) {
        element.classList.add("is-reveal-pending");
        observer = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
            element.classList.remove("is-reveal-pending");
            element.classList.add("is-revealing");
            observer?.disconnect();
          }
        }, { threshold: 0.01, rootMargin: "0px 0px -24px 0px" });
        observer.observe(element);
      }
    }

    return () => {
      observer?.disconnect();
      cancelAnimationFrame(frame);
      reducedMotion.removeEventListener("change", onPreferenceChange);
      element.removeEventListener("animationend", onAnimationEnd);
    };
  }, [trigger]);

  const revealStyle = { "--reveal-delay": `${Math.max(0, delay) * 1000}ms` } as CSSProperties;

  return (
    <div ref={ref} className="reveal" style={revealStyle}>
      <div className={className}>{children}</div>
    </div>
  );
};
