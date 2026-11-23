import Link from "next/link";
import { BiFile, BiCheckCircle, BiTrendingUp, BiGitBranch } from "react-icons/bi";

export default function HeroSvg() {
  return (
    <div className="hero-feature-card w-full rounded-2xl border dark:border-zinc-800 border-zinc-200 dark:bg-zinc-900/90 bg-white p-6 shadow-sm dark:shadow-zinc-950/50 relative overflow-hidden backdrop-blur-sm">
      {/* Subtle top accent gradient */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600" />
      
      {/* Header telemetry badge */}
      <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b dark:border-zinc-800/80 border-zinc-100">
        <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider dark:text-zinc-400 text-zinc-500">
          <BiGitBranch className="h-4 w-4 text-emerald-500" />
          <span>Research &amp; Systems</span>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium dark:bg-emerald-950/80 bg-emerald-50 dark:text-emerald-300 text-emerald-700 border dark:border-emerald-800/70 border-emerald-200">
          <BiCheckCircle className="h-3.5 w-3.5" />
          ISICVA 2026 Accepted
        </span>
      </div>

      {/* Featured Research Card */}
      <div className="mb-4">
        <h3 className="font-incognito font-semibold text-lg text-zinc-900 dark:text-zinc-100 mb-1 leading-snug">
          Hybrid Legal Summarization &amp; RAG Q&amp;A
        </h3>
        <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Peer-reviewed research paper on legal text summarization and retrieval-augmented verification accepted at ISICVA 2026.
        </p>
      </div>

      {/* Real Audit & Engineering Metrics */}
      <div className="grid grid-cols-2 gap-2.5 mb-5 font-mono">
        <div className="rounded-lg p-2.5 dark:bg-zinc-800/60 bg-zinc-50 border dark:border-zinc-800 border-zinc-200/80">
          <div className="text-[11px] uppercase tracking-wider text-zinc-500 dark:text-zinc-400 flex items-center gap-1">
            <BiTrendingUp className="text-emerald-500" />
            <span>IT Audit Testing</span>
          </div>
          <div className="mt-1 text-base font-bold text-zinc-900 dark:text-zinc-100">
            2,398 <span className="text-xs font-normal text-zinc-500">accounts</span>
          </div>
          <div className="text-[11px] text-emerald-600 dark:text-emerald-400">
            44.4% exceptions flagged
          </div>
        </div>

        <div className="rounded-lg p-2.5 dark:bg-zinc-800/60 bg-zinc-50 border dark:border-zinc-800 border-zinc-200/80">
          <div className="text-[11px] uppercase tracking-wider text-zinc-500 dark:text-zinc-400 flex items-center gap-1">
            <BiFile className="text-emerald-500" />
            <span>ETL Data Quality</span>
          </div>
          <div className="mt-1 text-base font-bold text-zinc-900 dark:text-zinc-100">
            541k+ <span className="text-xs font-normal text-zinc-500">records</span>
          </div>
          <div className="text-[11px] text-zinc-500 dark:text-zinc-400">
            Automated KPI validation
          </div>
        </div>
      </div>

      {/* Tech Stack Pills */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {["Python", "RAG & GenAI", "Power BI (DAX)", "SQL (CTEs)", "FastAPI", "DevOps"].map((tech) => (
          <span
            key={tech}
            className="rounded px-2 py-0.5 text-[11px] font-mono dark:bg-zinc-800 bg-zinc-100 dark:text-zinc-300 text-zinc-700 border dark:border-zinc-700/50 border-zinc-200"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Direct Project Action */}
      <div className="pt-3 border-t dark:border-zinc-800/80 border-zinc-100 flex items-center justify-between text-xs">
        <span className="dark:text-zinc-400 text-zinc-500">DJSCE IT (Honors) · GPA 8.99</span>
        <Link
          href="/projects"
          className="font-medium text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
        >
          View 8 Case Studies &rarr;
        </Link>
      </div>
    </div>
  );
}
