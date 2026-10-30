import ProjectIcon from "./ProjectIcon";

export default function ProjectCover({ title, category, icon }: { title: string; category: string; icon: string }) {
  return (
    <div className="project-cover relative aspect-[1200/630] w-full overflow-hidden rounded-xl border dark:border-zinc-800 border-zinc-100 dark:bg-primary-bg bg-zinc-50">
      <svg viewBox="0 0 1200 630" preserveAspectRatio="xMidYMid slice" className="project-cover-art absolute inset-0 h-full w-full text-primary-color" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeOpacity=".16" strokeWidth="2">
          <path d="m840 80 145 84v168l-145 84-145-84V164z"/><path d="m840 248 145-84m-145 84v168m0-168-145-84"/>
          <path d="m1035 326 90 52v104l-90 52-90-52V378z"/><path d="m1035 430 90-52m-90 52v104m0-104-90-52"/>
        </g>
      </svg>
      <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12">
        <ProjectIcon name={icon} className="h-10 w-10 sm:h-14 sm:w-14 text-primary-color mb-5" />
        <span className="text-xs sm:text-sm uppercase tracking-[.2em] text-primary-color mb-3">{category}</span>
        <h2 className="max-w-2xl break-words font-incognito font-bold tracking-tight text-2xl sm:text-4xl lg:text-5xl">{title}</h2>
      </div>
    </div>
  );
}
