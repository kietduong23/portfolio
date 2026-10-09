import { getTech } from "@/lib/tech";

interface TechIconProps {
  name: string;
  size?: number;
  className?: string;
}

/** Renders the brand icon for a technology, falling back to a monogram. */
export function TechIcon({ name, size = 16, className }: TechIconProps) {
  const tech = getTech(name);

  if (!tech) {
    return (
      <span
        className={`inline-flex items-center justify-center rounded-sm bg-fg/10 font-mono font-bold text-fg ${className ?? ""}`}
        style={{ width: size, height: size, fontSize: size * 0.5 }}
        aria-hidden
      >
        {name.slice(0, 1)}
      </span>
    );
  }

  const Icon = tech.icon;
  // White brand colours would vanish on the light theme, so follow the text colour.
  const color = tech.color === "#FFFFFF" ? "rgb(var(--fg))" : tech.color;

  return (
    <span className={className} style={{ color, display: "inline-flex" }} aria-hidden>
      <Icon size={size} />
    </span>
  );
}
