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
            <Link href={`/projects/${project.slug}`} className="project-card min-w-0 w-full flex items-center gap-x-4 dark:bg-primary-bg bg-zinc-50 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 p-4 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-color">
              <div className="project-icon-tile h-[60px] w-[60px] shrink-0 grid place-items-center dark:bg-zinc-800 bg-zinc-100 rounded-md"><ProjectIcon name={project.icon} className="h-8 w-8 text-primary-color" /></div>
              <div className="min-w-0"><h2 className="text-lg tracking-wide mb-1 break-words">{project.name}</h2><div className="text-sm dark:text-zinc-400 text-zinc-600 break-words">{project.description}</div></div>
            </Link>
            </Slide>
          ))}
      </section>
    </main>
  );
}
