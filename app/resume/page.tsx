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
  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6">
      <PageHeading title="Resume" description="View or download my resume." />
      <Slide trigger="load" delay={0.1}>
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-6">
          <a
            href="/resume/jash-jivani-resume.pdf"
            target="_blank"
            rel="noreferrer noopener"
            className="resume-action w-full sm:w-auto min-h-11 inline-flex items-center justify-center gap-x-2 rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
          >
            <BiLinkExternal className="h-4 w-4" />
            Open in new tab
          </a>
          <a
            href="/resume/jash-jivani-resume.pdf"
            download="Jash_Jivani_Resume.pdf"
            className="resume-action w-full sm:w-auto min-h-11 inline-flex items-center justify-center gap-x-2 rounded-lg border dark:border-zinc-700 border-zinc-300 dark:bg-zinc-800/80 bg-zinc-100 px-5 py-2.5 text-sm font-semibold text-zinc-800 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-700/80 transition-colors"
          >
            <BiSolidDownload className="h-4 w-4" />
            Download Resume
          </a>
        </div>
        <div className="resume-fallback md:hidden rounded-xl border dark:border-zinc-800 border-zinc-200 dark:bg-zinc-900/80 bg-zinc-50 p-6 mb-8 text-center">
          <p className="dark:text-zinc-300 text-zinc-700 font-medium mb-2">Viewing on mobile</p>
          <p className="dark:text-zinc-400 text-zinc-600 text-sm mb-4">
            For the optimal reading experience on mobile devices, open or download the PDF directly.
          </p>
          <a
            href="/resume/jash-jivani-resume.pdf"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 text-sm font-medium text-emerald-600 dark:text-emerald-400"
          >
            <BiLinkExternal className="h-4 w-4" />
            Tap here to open PDF
          </a>
        </div>
        <div className="resume-viewer hidden md:block w-full overflow-hidden rounded-xl border dark:border-zinc-800 border-zinc-200 shadow-sm dark:bg-zinc-900/60 bg-zinc-50">
          <iframe
            title="Jash Jivani resume"
            src="/resume/jash-jivani-resume.pdf"
            loading="lazy"
            className="w-full h-[75dvh] min-h-[500px]"
          />
        </div>
      </Slide>
      <section className="resume-contact mt-20">
        <h2 className="font-incognito text-3xl mb-4 font-bold tracking-tight text-zinc-900 dark:text-white">
          Get in touch
        </h2>
        <Social />
      </section>
    </main>
  );
}
