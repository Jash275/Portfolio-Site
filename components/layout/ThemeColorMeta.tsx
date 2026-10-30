"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeColorMeta() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const meta = document.querySelector('meta[name="theme-color"]');
    meta?.setAttribute("content", resolvedTheme === "light" ? "#ffffff" : "#18181b");
  }, [resolvedTheme]);

  return null;
}
