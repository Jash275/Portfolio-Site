import Image from "next/image";
import HeroSvg from "@/components/ui/icons/HeroSvg";
import Social from "@/components/shared/Social";
import TypingRole from "@/components/shared/TypingRole";
import Job from "@/components/sections/Job";
import Education from "@/components/sections/Education";
import { Slide } from "@/components/shared/Slide";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6 lg:mt-32 mt-20">
      <section className="flex xl:flex-row flex-col xl:items-center items-start xl:justify-center justify-between gap-x-12 mb-16">
        <div className="lg:max-w-2xl max-w-2xl min-w-0 w-full">
          <div className="flex items-center gap-x-5 mb-6">
            <Slide trigger="load"><Image src="/images/profile.webp" width={88} height={88} sizes="88px" alt="Jash Jivani" className="profile-photo rounded-2xl h-[88px] w-[88px] shrink-0 object-cover" priority unoptimized /></Slide>
            <Slide trigger="load" delay={0.06}><h1 className="font-incognito font-semibold tracking-tight text-3xl sm:text-5xl">Jash Jivani</h1></Slide>
          </div>
          <Slide trigger="load" delay={0.12}><TypingRole /></Slide>
          <Slide trigger="load" delay={0.18}>
            <p className="text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">
              I&apos;m an Information Technology undergraduate at Dwarkadas J. Sanghvi College of Engineering (Honors in DevOps), working across IT audit analytics, Generative AI and RAG systems, and full-stack engineering. I build data-driven control tests, financial anomaly detection workflows and automated data quality pipelines, and I co-authored a paper on hybrid legal summarization and RAG-based Q&amp;A accepted at ISICVA 2026. Based in Mumbai, India, I&apos;m open to internships, projects and collaborations.
            </p>
          </Slide>
          <Slide trigger="load" delay={0.24}><Social /></Slide>
        </div>
        <div className="w-full max-w-[450px] min-w-0"><HeroSvg /></div>
      </section>
      <Education />
      <Job />
    </main>
  );
}
