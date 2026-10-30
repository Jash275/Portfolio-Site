export default function Logo({ className = "h-[35px] w-[35px]" }: { className?: string }) {
  return <svg className={className} viewBox="0 0 48 48" fill="none" role="img" aria-label="Jash Jivani logo">
    <path d="M24 3 43 14v20L24 45 5 34V14L24 3Z" stroke="currentColor" strokeWidth="1.4" />
    <path d="M28 14v13c0 5-2.7 7.5-7.5 7.5-2 0-3.9-.5-5.5-1.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>;
}
