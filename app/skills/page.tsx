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
  return <main className="max-w-7xl mx-auto md:px-16 px-6"><PageHeading title="Skills" description="Tools and areas I work with." /><div className="grid md:grid-cols-2 grid-cols-1 gap-5 mb-12">{skillGroups.map((group, index) => <Slide key={group.name} delay={(index % 2) * 0.06}><section className="skill-group dark:bg-primary-bg bg-zinc-50 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 p-6 rounded-lg"><h2 className="text-xl tracking-wide mb-4">{group.name}</h2><div className="flex flex-wrap gap-2">{group.items.map((item) => <span key={item} className="skill-badge dark:bg-zinc-800 bg-zinc-100 dark:text-zinc-300 text-zinc-600 rounded-md px-3 py-1 text-sm">{item}</span>)}</div></section></Slide>)}</div></main>;
}
