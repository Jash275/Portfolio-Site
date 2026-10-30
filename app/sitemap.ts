import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://jashjivani.dev";
  return ["", "/projects", "/skills", "/resume"].map((path) => ({ url: `${base}${path}`, changeFrequency: "monthly" as const, priority: path === "" ? 1 : 0.8 }))
    .concat(projects.map(({ slug }) => ({ url: `${base}/projects/${slug}`, changeFrequency: "monthly" as const, priority: 0.7 })));
}
