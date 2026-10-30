import Image from "next/image";
import { educationData } from "@/data/education";
import { Slide } from "@/components/shared/Slide";

export default function Education() {
  return (
    <section className="mt-32">
      <Slide><div className="mb-16"><h2 className="font-incognito text-4xl mb-4 font-bold tracking-tight">Education</h2></div></Slide>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-12 gap-y-10">
          {educationData.map((item, index) => (
            <Slide key={item.id} delay={(index % 2) * 0.06}>
            <div className="education-row min-w-0 flex items-start gap-x-4 max-w-2xl">
              <div className="education-logo-tile grid place-items-center dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 min-h-[80px] min-w-[80px] p-2 rounded-md overflow-hidden">
                <Image src={item.logo} className="object-contain duration-300" alt={`${item.institution} logo`} width={56} height={56} unoptimized />
              </div>
              <div className="min-w-0 flex flex-col items-start break-words">
                <h3 className="text-xl font-semibold break-words">{item.institution}</h3>
                <p>{item.degree}</p>
                <time className="text-sm text-zinc-500 mt-2 tracking-wide uppercase break-words">{item.duration}</time>
                <p className="text-sm text-zinc-500 mt-2">{item.score} | {item.location}</p>
              </div>
            </div>
            </Slide>
          ))}
      </div>
    </section>
  );
}
