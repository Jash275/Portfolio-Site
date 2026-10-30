import type { Metadata } from "next";
import { BiSolidDownload, BiLinkExternal } from "react-icons/bi";
import PageHeading from "@/components/shared/PageHeading";
import Social from "@/components/shared/Social";
import { Slide } from "@/components/shared/Slide";

export const metadata: Metadata = {
  title: "Jash Jivani | Resume",
  description: "Portfolio of Jash Jivani, an Information Technology undergraduate at DJSCE, Mumbai, working across audit analytics, Generative AI and full-stack development.",
  alternates: { canonical: "https://jashjivani.dev/resume" },
  openGraph: { title: "Jash Jivani | Resume", url: "https://jashjivani.dev/resume", images: "/opengraph-image.png" },
  twitter: { card: "summary_large_image", title: "Jash Jivani | Resume", description: "Portfolio of Jash Jivani, an Information Technology undergraduate at DJSCE, Mumbai, working across audit analytics, Generative AI and full-stack development.", images: ["/opengraph-image.png"] },
};

export default function Resume() {
  return <main className="max-w-7xl mx-auto md:px-16 px-6"><PageHeading title="Resume" description="View or download my resume." /><Slide trigger="load" delay={0.1}><div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-5"><a href="/resume/jash-jivani-resume.pdf" target="_blank" rel="noreferrer noopener" className="resume-action w-full sm:w-auto min-h-11 flex items-center justify-center gap-x-2 dark:bg-primary-bg bg-zinc-100 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 rounded-md py-2 px-4 text-lg font-incognito font-semibold"><BiLinkExternal />Open in new tab</a><a href="/resume/jash-jivani-resume.pdf" download="Jash_Jivani_Resume.pdf" className="resume-action w-full sm:w-auto min-h-11 flex items-center justify-center gap-x-2 dark:bg-primary-bg bg-zinc-100 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 rounded-md py-2 px-4 text-lg font-incognito font-semibold"><BiSolidDownload />Download Resume</a></div><div className="resume-fallback md:hidden rounded-lg border dark:border-zinc-800 border-zinc-200 dark:bg-primary-bg bg-zinc-50 p-5"><p className="dark:text-zinc-400 text-zinc-600">Open or download the PDF to view the resume on this device.</p></div><div className="resume-viewer hidden md:block w-full overflow-hidden rounded-lg border dark:border-zinc-800 border-zinc-200"><iframe title="Jash Jivani resume" src="/resume/jash-jivani-resume.pdf" loading="lazy" className="w-full h-[75dvh] min-h-[500px]" /></div></Slide><section className="resume-contact mt-20"><h2 className="font-incognito text-4xl mb-4 font-bold tracking-tight">Contact me</h2><Social /></section></main>;
}
