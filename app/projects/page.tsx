import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { Slide } from "@/components/shared/Slide";
import PageHeading from "@/components/shared/PageHeading";
import ProjectIcon from "@/components/shared/ProjectIcon";

export const metadata: Metadata = {
  title: "Jash Jivani | Projects",
  description: "Portfolio of Jash Jivani, an Information Technology undergraduate at DJSCE, Mumbai, working across audit analytics, Generative AI and full-stack development.",
  alternates: { canonical: "https://jashjivani.dev/projects" },
  openGraph: { title: "Jash Jivani | Projects", url: "https://jashjivani.dev/projects", images: "/opengraph-image.png" },
  twitter: { card: "summary_large_image", title: "Jash Jivani | Projects", description: "Portfolio of Jash Jivani, an Information Technology undergraduate at DJSCE, Mumbai, working across audit analytics, Generative AI and full-stack development.", images: ["/opengraph-image.png"] },
};

export default function ProjectsPage() {
  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6">
      <PageHeading title="Projects" description="Selected projects across audit analytics, Generative AI, data quality and software engineering." />
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mb-12">
        {projects.map((project, index) => (
          <Slide key={project.slug} delay={(index % 3) * 0.06}>
            <Link
              href={`/projects/${project.slug}`}
              className="project-card min-w-0 w-full h-full flex flex-col justify-between dark:bg-zinc-900/80 bg-white border dark:border-zinc-800 border-zinc-200/90 dark:hover:border-emerald-600/60 hover:border-emerald-600/40 p-5 rounded-xl transition-all shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="project-icon-tile h-10 w-10 shrink-0 grid place-items-center dark:bg-zinc-800 bg-zinc-100 rounded-lg">
                    <ProjectIcon name={project.icon} className="h-5 w-5 text-emerald-500" />
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full dark:bg-zinc-800/80 bg-zinc-100 text-zinc-500 dark:text-zinc-400 border dark:border-zinc-700/60 border-zinc-200">
                    {project.category}
                  </span>
                </div>
                <h2 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 mb-2 break-words">
                  {project.name}
                </h2>
                <p className="text-sm dark:text-zinc-400 text-zinc-600 line-clamp-3 leading-relaxed break-words">
                  {project.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t dark:border-zinc-800/80 border-zinc-100">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono px-2 py-0.5 rounded dark:bg-zinc-800/60 bg-zinc-100 dark:text-zinc-300 text-zinc-700"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="text-[11px] font-mono px-1.5 py-0.5 text-zinc-400">
                    +{project.tags.length - 3}
                  </span>
                )}
              </div>
            </Link>
          </Slide>
        ))}
      </section>
    </main>
  );
}
