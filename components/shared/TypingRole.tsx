"use client";

import { useEffect, useState } from "react";

const ROLES = [
  "a Generative AI Specialist",
  "a DevOps & Full Stack Engineer",
  "a Python & SQL Specialist",
];

const TYPE_SPEED = 55;
const BACK_SPEED = 40;
const HOLD_DELAY = 1700;

export default function TypingRole() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isPageVisible, setIsPageVisible] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    const updateVisibility = () => setIsPageVisible(!document.hidden);
    updateVisibility();
    document.addEventListener("visibilitychange", updateVisibility);
    return () => document.removeEventListener("visibilitychange", updateVisibility);
  }, []);

  useEffect(() => {
    if (isReducedMotion || !isPageVisible) {
      if (isReducedMotion) setDisplayedText(ROLES[0]);
      return;
    }

    const currentRole = ROLES[roleIndex];
    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (displayedText.length < currentRole.length) {
        timer = setTimeout(() => {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        }, TYPE_SPEED);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, HOLD_DELAY);
      }
    } else {
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(currentRole.slice(0, displayedText.length - 1));
        }, BACK_SPEED);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex, isReducedMotion, isPageVisible]);

  if (isReducedMotion) {
    return (
      <div className="typing-role text-xl sm:text-2xl font-incognito mb-6 min-h-[3.5rem] sm:min-h-[2.5rem] flex flex-wrap items-center">
        <span className="dark:text-zinc-200 text-zinc-800 font-medium">I&apos;m&nbsp;</span>
        <span className="typing-role-accent text-primary-color underline decoration-primary-color underline-offset-4 font-semibold">
          {ROLES[0]}
        </span>
      </div>
    );
  }

  return (
    <div
      className="typing-role text-xl sm:text-2xl font-incognito mb-6 min-h-[3.5rem] sm:min-h-[2.5rem] flex flex-wrap items-center"
      aria-label={`I'm ${ROLES[roleIndex]}`}
    >
      <span className="dark:text-zinc-200 text-zinc-800 font-medium">I&apos;m&nbsp;</span>
      <span className="typing-role-accent text-primary-color underline decoration-primary-color underline-offset-4 font-semibold">
        {displayedText}
      </span>
      <span className="typing-role-cursor inline-block w-[2px] h-6 ml-1 bg-primary-color animate-pulse" aria-hidden="true" />
    </div>
  );
}
