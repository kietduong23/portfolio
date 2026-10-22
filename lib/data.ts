import type {
  ExperienceBase,
  ProjectBase,
  SectionId,
  SkillGroupBase,
  StatBase,
} from "./types";

/**
 * Language-independent data. All visible text (EN/VI) lives in lib/content.ts.
 */
export const profile = {
  name: "Duong Anh Kiet",
  brand: "DAK",
  email: "duonganhkiet2306@gmail.com",
  phone: "+84 855 395 492",
  github: "https://github.com/kietduong23",
  linkedin: "https://www.linkedin.com/in/anh-kiet-duong-7572a2301",
  resume: "/Duong-Anh-Kiet-CV.pdf",
};

export const sectionIds: SectionId[] = ["about", "experience", "projects", "skills", "contact"];

export const stats: StatBase[] = [
  { id: "years", value: 2, suffix: "+" },
  { id: "apps", value: 5, suffix: "+" },
  { id: "companies", value: 4, suffix: "" },
];

export const experience: ExperienceBase[] = [
  {
    id: "novaland",
    company: "Novaland",
    tech: ["Next.js", "React", "RTK Query", "Zod", "Vitest", "Biome", "Husky"],
  },
  {
    id: "heu",
    company: "heu!",
    tech: ["React Native", "Next.js", "React", "TypeScript", "Google Maps"],
  },
  {
    id: "toncash",
    company: "Toncash",
    tech: ["React", "TypeScript", "Telegram", "TON"],
  },
  {
    id: "nextway",
    company: "Nextway Technology",
    tech: ["React Native", "Next.js", "Redux", "Zustand", "Ant Design", "Zalo"],
  },
];

export const projects: ProjectBase[] = [
  {
    id: "001",
    company: "Novaland",
    tags: ["Next.js", "React", "CMS & Admin"],
    tech: ["Next.js", "React", "TypeScript", "RTK Query", "Zod", "Vitest", "Biome", "Husky"],
  },
  {
    id: "002",
    company: "heu!",
    tags: ["Next.js"],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "003",
    company: "heu!",
    tags: ["React", "CMS & Admin"],
    tech: ["React", "TypeScript", "REST API"],
  },
  {
    id: "004",
    company: "heu!",
    tags: ["React Native"],
    tech: ["React Native", "TypeScript", "Google Maps", "Amplitude", "AppsFlyer"],
  },
  {
    id: "005",
    company: "Toncash",
    tags: ["React", "Mini App"],
    tech: ["React", "TypeScript", "Telegram", "TON"],
  },
  {
    id: "006",
    company: "Toncash",
    tags: ["React", "CMS & Admin"],
    tech: ["React", "TypeScript"],
  },
  {
    id: "007",
    company: "Nextway Technology",
    tags: ["React", "Mini App"],
    tech: ["React", "Redux", "Zalo", "JavaScript"],
  },
  {
    id: "008",
    company: "Nextway Technology",
    tags: ["Next.js", "React Native", "CMS & Admin"],
    tech: ["React Native", "Next.js", "Zustand", "Ant Design"],
  },
];

export const skillGroups: SkillGroupBase[] = [
  { id: "core", skills: ["React", "TypeScript", "Next.js", "JavaScript", "HTML5", "CSS3"] },
  { id: "ui", skills: ["Tailwind CSS", "Ant Design", "Bootstrap"] },
  { id: "state", skills: ["Redux", "RTK Query", "React Query", "Zustand", "Zod", "Yup"] },
  { id: "backend", skills: ["REST API", "PostgreSQL", "MongoDB", "Docker", "AWS", "Vercel", "Firebase"] },
  { id: "quality", skills: ["Vitest", "Biome", "Husky", "SonarQube", "Git", "GitHub", "CI/CD"] },
];
