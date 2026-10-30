import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: "https://jashjivani.dev/sitemap.xml", host: "https://jashjivani.dev" };
}
