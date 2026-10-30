import Image from "next/image";
import { experienceData } from "@/data/experience";
import { Slide } from "@/components/shared/Slide";

export default function Job() {
  return (
    <section className="mt-32">
      <Slide delay={0.16}><div className="mb-16"><h2 className="font-incognito text-4xl mb-4 font-bold tracking-tight">Work Experience</h2></div></Slide>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-12 gap-y-10">
          {experienceData.map((job, index) => (
            <Slide key={job.id} delay={(index % 2) * 0.06}>
            <div className="experience-row min-w-0 flex items-start gap-x-4 max-w-2xl relative">
              <div className={`experience-logo-tile ${job.logo.includes("djsce-trinity") ? "trinity-logo-tile" : ""} grid place-items-center ${job.isWhiteBgLogo ? "bg-white" : "dark:bg-primary-bg bg-secondary-bg"} border dark:border-zinc-800 border-zinc-200 min-h-[80px] min-w-[80px] p-2 rounded-md overflow-clip relative`}>
                <Image src={job.logo} className="object-contain duration-300" alt={`${job.company} logo`} width={56} height={56} unoptimized />
              </div>
              <div className="min-w-0 flex flex-col items-start break-words">
                <h3 className="text-xl font-semibold break-words">{job.company}</h3>
                <p>{job.role} | {job.workplaceType}</p>
                <time className="text-sm text-zinc-500 mt-2 tracking-widest uppercase">{job.duration}</time>
                <ul className="tracking-tight dark:text-zinc-400 text-zinc-600 my-4 list-disc pl-5 space-y-2">
                  {job.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              </div>
            </div>
            </Slide>
          ))}
      </div>
    </section>
  );
}
