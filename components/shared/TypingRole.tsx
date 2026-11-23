export default function TypingRole() {
  return (
    <div className="hero-role-strip mb-6 flex flex-col gap-y-3">
      <div className="flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center rounded-md px-3 py-1 text-sm font-medium dark:bg-emerald-950/70 bg-emerald-50 text-emerald-700 dark:text-emerald-300 border dark:border-emerald-800/80 border-emerald-200">
          Software &amp; GenAI Engineering
        </span>
        <span className="inline-flex items-center rounded-md px-3 py-1 text-sm font-medium dark:bg-zinc-800/80 bg-zinc-100 dark:text-zinc-300 text-zinc-700 border dark:border-zinc-700/60 border-zinc-200">
          Data &amp; Audit Analytics
        </span>
        <span className="inline-flex items-center rounded-md px-3 py-1 text-sm font-medium dark:bg-zinc-800/80 bg-zinc-100 dark:text-zinc-300 text-zinc-700 border dark:border-zinc-700/60 border-zinc-200">
          DevOps Honors (GPA: 8.99)
        </span>
      </div>
      <div className="flex items-center gap-x-2 text-xs font-mono dark:text-zinc-400 text-zinc-500">
        <span className="relative flex h-2 w-2" aria-hidden="true">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span>Mumbai, India · Open to Technical Roles, Internships &amp; Research</span>
      </div>
    </div>
  );
}
