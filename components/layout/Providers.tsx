"use client";

import { ThemeProvider } from "next-themes";
import { useEffect } from "react";
import ThemeColorMeta from "@/components/layout/ThemeColorMeta";

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const frame = requestAnimationFrame(() => document.documentElement.classList.add("motion-ready"));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <ThemeColorMeta />
      {children}
    </ThemeProvider>
  );
}
