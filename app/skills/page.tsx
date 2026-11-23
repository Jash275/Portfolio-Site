import type { Metadata } from "next";
import PageHeading from "@/components/shared/PageHeading";
import { Slide } from "@/components/shared/Slide";
import { skillGroups } from "@/data/skills";

export const metadata: Metadata = {
  title: "Jash Jivani | Skills",
  description: "Portfolio of Jash Jivani, an Information Technology undergraduate at DJSCE, Mumbai, working across audit analytics, Generative AI and full-stack development.",
  alternates: { canonical: "https://jashjivani.dev/skills" },
  openGraph: { title: "Jash Jivani | Skills", url: "https://jashjivani.dev/skills", images: "/opengraph-image.png" },
  twitter: { card: "summary_large_image", title: "Jash Jivani | Skills", description: "Portfolio of Jash Jivani, an Information Technology undergraduate at DJSCE, Mumbai, working across audit analytics, Generative AI and full-stack development.", images: ["/opengraph-image.png"] },
};

export default function Skills() {
  return (
    <main className="max-w-7xl mx-auto md:px-16 px-4 sm:px-6">
      <PageHeading
        title="Skills"
        description="Technical domains, tools, and platforms I work with."
      />
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 sm:gap-6 mb-12">
        {skillGroups.map((group, index) => (
          <Slide key={group.name} delay={(index % 2) * 0.06}>
            <section className="skill-group dark:bg-zinc-900/80 bg-white border dark:border-zinc-800 border-zinc-200/90 dark:hover:border-zinc-700 hover:border-zinc-300 p-6 rounded-xl shadow-sm transition-all">
              <h2 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
                {group.name}
              </h2>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="skill-badge dark:bg-zinc-800/80 bg-zinc-100 dark:text-zinc-300 text-zinc-700 border dark:border-zinc-700/60 border-zinc-200 rounded-md px-3 py-1 text-sm font-mono"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </section>
          </Slide>
        ))}
      </div>
    </main>
  );
}
