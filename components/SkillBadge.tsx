import { TechIcon } from "./TechIcon";

export function SkillBadge({ name }: { name: string }) {
  return (
    <li className="inline-flex items-center gap-2 rounded-lg border border-line bg-bg px-3 py-2 font-mono text-xs transition-colors hover:border-accent/50">
      <TechIcon name={name} size={16} />
      {name}
    </li>
  );
}
