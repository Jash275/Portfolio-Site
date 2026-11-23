import Image from "next/image";
import Link from "next/link";
import { BiFolder, BiFile, BiArrowBack } from "react-icons/bi";
import HeroSvg from "@/components/ui/icons/HeroSvg";
import Social from "@/components/shared/Social";
import TypingRole from "@/components/shared/TypingRole";
import Job from "@/components/sections/Job";
import Education from "@/components/sections/Education";
import { Slide } from "@/components/shared/Slide";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6 lg:mt-24 mt-16">
      <section className="flex xl:flex-row flex-col xl:items-center items-start xl:justify-between justify-between gap-12 mb-20">
        <div className="lg:max-w-2xl max-w-2xl min-w-0 w-full">
          <div className="flex items-center gap-x-5 mb-5">
            <Slide trigger="load">
              <Image
                src="/images/profile.webp"
                width={88}
                height={88}
                sizes="88px"
                alt="Jash Jivani profile"
                className="profile-photo rounded-2xl h-[88px] w-[88px] shrink-0 object-cover border dark:border-zinc-700/80 border-zinc-200 shadow-sm"
                priority
              />
            </Slide>
            <Slide trigger="load" delay={0.06}>
              <div>
                <h1 className="font-incognito font-bold tracking-tight text-3xl sm:text-5xl text-zinc-900 dark:text-white">
                  Jash Jivani
                </h1>
                <p className="text-sm font-mono text-zinc-500 dark:text-zinc-400 mt-1">
                  IT Undergrad @ DJSCE Mumbai
                </p>
              </div>
            </Slide>
          </div>

          <Slide trigger="load" delay={0.12}>
            <TypingRole />
          </Slide>

          <Slide trigger="load" delay={0.18}>
            <p className="text-base dark:text-zinc-300 text-zinc-700 leading-relaxed mb-6">
              I am an Information Technology undergraduate with Honors in DevOps at Dwarkadas J. Sanghvi College of Engineering, working at the intersection of full-stack engineering, IT audit analytics, and Generative AI.
            </p>
            <p className="text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">
              I build production-grade control tests, financial anomaly detection workflows, and automated ETL pipelines. My research paper on hybrid legal summarization and RAG-based question answering was accepted at ISICVA 2026.
            </p>
          </Slide>

          <Slide trigger="load" delay={0.22}>
            <div className="flex flex-wrap items-center gap-3 mt-8">
              <Link
                href="/projects"
                className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 transition-colors"
              >
                <BiFolder className="h-4 w-4" />
                Explore Projects
              </Link>
              <Link
                href="/resume"
                className="inline-flex min-h-11 items-center gap-2 rounded-lg border dark:border-zinc-700 border-zinc-300 dark:bg-zinc-800/80 bg-zinc-100 px-5 py-2.5 text-sm font-semibold text-zinc-800 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-700/80 transition-colors"
              >
                <BiFile className="h-4 w-4" />
                View Resume
              </Link>
            </div>
          </Slide>

          <Slide trigger="load" delay={0.26}>
            <Social />
          </Slide>
        </div>

        {/* High-signal featured ISICVA'26 publication card */}
        <div className="w-full xl:max-w-[420px] max-w-xl min-w-0 xl:self-center">
          <Slide trigger="load" delay={0.1}>
            <HeroSvg />
          </Slide>
        </div>
      </section>

      <Education />
      <Job />
    </main>
  );
}
