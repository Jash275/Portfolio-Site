import Link from "next/link";
import { BiCheckCircle, BiGitBranch } from "react-icons/bi";

export default function HeroSvg() {
  return (
    <div className="hero-feature-card w-full rounded-2xl border dark:border-zinc-800 border-zinc-200/90 dark:bg-zinc-900/90 bg-white p-6 shadow-sm dark:shadow-zinc-950/40 relative overflow-hidden backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/40 hover:shadow-md">
      {/* Subtle top accent gradient */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-600" />

      {/* Header badge */}
      <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b dark:border-zinc-800/80 border-zinc-100">
        <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider dark:text-zinc-400 text-zinc-500">
          <BiGitBranch className="h-4 w-4 text-emerald-500" />
          <span>Research Publication</span>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium dark:bg-emerald-950/80 bg-emerald-50 dark:text-emerald-300 text-emerald-700 border dark:border-emerald-800/70 border-emerald-200">
          <BiCheckCircle className="h-3.5 w-3.5 text-emerald-500" />
          ISICVA 2026 Accepted
        </span>
      </div>

      {/* Featured Research Title & Summary */}
      <div>
        <h3 className="font-incognito font-semibold text-lg text-zinc-900 dark:text-zinc-100 mb-2 leading-snug">
          Hybrid Legal Summarization &amp; RAG Q&amp;A
        </h3>
        <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
          Peer-reviewed research paper on legal text summarization and retrieval-augmented verification accepted at the International Symposium on Intelligent Systems (ISICVA 2026).
        </p>

        {/* Clean bottom citation & link */}
        <div className="pt-3 border-t dark:border-zinc-800/80 border-zinc-100 flex items-center justify-between text-xs font-mono">
          <span className="text-zinc-500 dark:text-zinc-400">DJSCE Mumbai · Dept. of IT</span>
          <Link
            href="/projects"
            className="font-medium text-emerald-600 dark:text-emerald-400 hover:underline inline-flex items-center gap-0.5"
          >
            All Projects &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
