import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BiLogoGithub } from "react-icons/bi";
import { projects } from "@/data/projects";
import { Slide } from "@/components/shared/Slide";
import ProjectCover from "@/components/shared/ProjectCover";
import CodeBlock from "@/components/shared/CodeBlock";

type Props = { params: Promise<{ project: string }> };
export function generateStaticParams() { return projects.map(({ slug }) => ({ project: slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { project: slug } = await params;
  const project = projects.find(({ slug: projectSlug }) => projectSlug === slug);
  if (!project) return { title: "Jash Jivani | Projects" };
  const title = `Jash Jivani | ${project.name}`;
  return { title, description: project.description, alternates: { canonical: `https://jashjivani.dev/projects/${project.slug}` }, openGraph: { title, url: `https://jashjivani.dev/projects/${project.slug}`, description: project.description, images: "/opengraph-image.png" }, twitter: { card: "summary_large_image", title, description: project.description, images: ["/opengraph-image.png"] } };
}

export default async function Project({ params }: Props) {
  const { project: slug } = await params;
  const project = projects.find(({ slug: projectSlug }) => projectSlug === slug);
  if (!project) notFound();
  return <main className="max-w-6xl mx-auto lg:px-16 px-6 min-w-0">
    <div className="max-w-3xl mx-auto min-w-0">
      <Slide trigger="load">
      <div className="flex items-start justify-between flex-wrap mb-4 gap-4">
        <h1 className="font-incognito font-black tracking-tight sm:text-5xl text-3xl mb-2 max-w-md break-words">{project.name}</h1>
        <a href={project.repository} rel="noreferrer noopener" target="_blank" className="github-action min-h-11 flex items-center gap-x-2 dark:bg-primary-bg bg-secondary-bg dark:text-white text-zinc-700 border border-transparent rounded-md px-4 py-2 duration-200 hover:dark:border-zinc-700 hover:border-zinc-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-color"><BiLogoGithub aria-hidden="true" />View on GitHub</a>
      </div>
      </Slide>
      <Slide trigger="load" delay={0.07}><ProjectCover title={project.name} category={project.category} icon={project.icon} /></Slide>
      <Slide trigger="load" delay={0.14}><p className="mt-8 dark:text-zinc-400 text-zinc-600 leading-relaxed break-words">{project.description}</p></Slide>
      <Slide trigger="load" delay={0.21}><div className="flex flex-wrap gap-2 mt-6">{project.tags.map((tag) => <span key={tag} className="project-tag dark:bg-primary-bg bg-zinc-100 dark:text-zinc-300 text-zinc-600 rounded-md px-3 py-1 text-sm">{tag}</span>)}</div></Slide>
      {project.highlights.length > 0 && <Slide><section className="mt-10"><h2 className="font-incognito text-3xl mb-4 font-bold tracking-tight">Key Highlights</h2><ul className="dark:text-zinc-400 text-zinc-600 leading-relaxed list-disc pl-5 space-y-3">{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul></section></Slide>}
      <Slide><section className="mt-10"><h2 className="font-incognito text-3xl mb-4 font-bold tracking-tight">Tech Stack</h2><div className="flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="project-tag dark:bg-primary-bg bg-zinc-100 dark:text-zinc-300 text-zinc-600 rounded-md px-3 py-1 text-sm">{tag}</span>)}</div></section></Slide>
      {project.sections.map((section) => <section className="mt-10 min-w-0" key={section.title}>
        <Slide><div>
          <h2 className="font-incognito text-3xl mb-4 font-bold tracking-tight">{section.title}</h2>
          {section.paragraphs?.map((paragraph) => <p className="dark:text-zinc-400 text-zinc-600 leading-relaxed mb-3 break-words" key={paragraph}>{paragraph}</p>)}
          {section.bullets && <ul className="dark:text-zinc-400 text-zinc-600 leading-relaxed list-disc pl-5 space-y-3">{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>}
        </div></Slide>
        {section.code && <div className="max-w-full overflow-x-auto"><CodeBlock value={{ code: section.code, language: section.language ?? "bash", filename: section.filename }} /></div>}
      </section>)}
      {project.structure && <Slide><section className="mt-10"><h2 className="font-incognito text-3xl mb-4 font-bold tracking-tight">Project Structure</h2><ul className="dark:text-zinc-400 text-zinc-600 leading-relaxed list-disc pl-5 space-y-2">{project.structure.map((part) => <li key={part}>{part}</li>)}</ul></section></Slide>}
      {project.gallery && project.gallery.length > 0 && <Slide><section className="mt-10"><h2 className="font-incognito text-3xl mb-4 font-bold tracking-tight">Screenshots</h2><div className="grid grid-cols-1 sm:grid-cols-2 gap-4">{project.gallery.map((item) => <figure key={item.src} className="project-gallery-item min-w-0 overflow-hidden rounded-lg border dark:border-zinc-800 border-zinc-200"><Image src={item.src} alt={item.alt} width={1400} height={900} sizes="(max-width: 640px) 100vw, 50vw" className="w-full h-auto object-contain" loading="lazy" unoptimized /></figure>)}</div></section></Slide>}
      <Slide><section className="mt-10 mb-12"><h2 className="font-incognito text-3xl mb-4 font-bold tracking-tight">Links</h2><a href={project.repository} target="_blank" rel="noreferrer noopener" className="project-external-link inline-flex min-h-11 items-center gap-2 rounded-md dark:bg-primary-bg bg-zinc-100 px-4 py-2 dark:hover:border-zinc-700 hover:border-zinc-200 border border-transparent"><BiLogoGithub aria-hidden="true" />View on GitHub</a>{project.demo && <a href={project.demo} target="_blank" rel="noreferrer noopener" className="project-external-link ml-3 inline-flex min-h-11 items-center rounded-md dark:bg-primary-bg bg-zinc-100 px-4 py-2">Live demo</a>}</section></Slide>
    </div>
  </main>;
}
