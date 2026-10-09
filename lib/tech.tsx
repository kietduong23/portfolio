import type { ComponentType } from "react";
import { FaAws, FaCss3Alt } from "react-icons/fa";
import {
  SiAntdesign,
  SiBiome,
  SiBootstrap,
  SiDocker,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGooglemaps,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiRedux,
  SiSonarqubeserver,
  SiTailwindcss,
  SiTelegram,
  SiTon,
  SiTypescript,
  SiVitest,
  SiZalo,
  SiZod,
} from "react-icons/si";
import { Activity, Dog, Link2, ShieldCheck, Webhook, Zap } from "lucide-react";

type IconComponent = ComponentType<{ className?: string; size?: number | string }>;

/** Icon + brand colour for every technology mentioned on the site. */
export const techMap: Record<string, { icon: IconComponent; color: string }> = {
  React: { icon: SiReact, color: "#61DAFB" },
  "React Native": { icon: SiReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, color: "#FFFFFF" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  HTML5: { icon: SiHtml5, color: "#E34F26" },
  CSS3: { icon: FaCss3Alt, color: "#1572B6" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  "Ant Design": { icon: SiAntdesign, color: "#1677FF" },
  Bootstrap: { icon: SiBootstrap, color: "#7952B3" },
  Redux: { icon: SiRedux, color: "#764ABC" },
  "RTK Query": { icon: SiRedux, color: "#764ABC" },
  Zustand: { icon: Zap, color: "#E8A33D" },
  Zod: { icon: SiZod, color: "#408AFF" },
  Yup: { icon: ShieldCheck, color: "#94A3B8" },
  "REST API": { icon: Webhook, color: "#94A3B8" },
  PostgreSQL: { icon: SiPostgresql, color: "#4169E1" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  Docker: { icon: SiDocker, color: "#2496ED" },
  AWS: { icon: FaAws, color: "#FF9900" },
  Vitest: { icon: SiVitest, color: "#6E9F18" },
  Biome: { icon: SiBiome, color: "#60A5FA" },
  Husky: { icon: Dog, color: "#E2B15C" },
  SonarQube: { icon: SiSonarqubeserver, color: "#4E9BCD" },
  Git: { icon: SiGit, color: "#F05032" },
  GitHub: { icon: SiGithub, color: "#FFFFFF" },
  "CI/CD": { icon: SiGithubactions, color: "#2088FF" },
  "Google Maps": { icon: SiGooglemaps, color: "#4285F4" },
  Amplitude: { icon: Activity, color: "#3B82F6" },
  AppsFlyer: { icon: Link2, color: "#22C1C3" },
  Telegram: { icon: SiTelegram, color: "#26A5E4" },
  TON: { icon: SiTon, color: "#0098EA" },
  Zalo: { icon: SiZalo, color: "#0068FF" },
};

export function getTech(name: string) {
  return techMap[name];
}
