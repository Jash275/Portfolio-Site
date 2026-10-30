import { LuBadgePercent, LuClapperboard, LuFactory, LuFileText, LuLandmark, LuScatterChart, LuShieldCheck, LuWorkflow } from "react-icons/lu";

const icons = {
  shield: LuShieldCheck,
  bank: LuLandmark,
  chart: LuScatterChart,
  workflow: LuWorkflow,
  legal: LuFileText,
  factory: LuFactory,
  loan: LuBadgePercent,
  film: LuClapperboard,
};

export default function ProjectIcon({ name, className = "" }: { name: string; className?: string }) {
  const Icon = icons[name as keyof typeof icons] ?? LuFileText;
  return <Icon className={className} aria-hidden="true" strokeWidth={1.5} />;
}
