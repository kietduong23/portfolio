export type Locale = "en" | "vi";

export type SectionId = "about" | "experience" | "projects" | "skills" | "contact";

export type StatId = "years" | "apps" | "companies";
export type ExperienceId = "novaland" | "heu" | "toncash" | "nextway";
export type ProjectId = "001" | "002" | "003" | "004" | "005" | "006" | "007" | "008";
export type SkillGroupId = "core" | "ui" | "state" | "backend" | "quality";

export type ProjectTag = "Next.js" | "React" | "React Native" | "Mini App" | "CMS & Admin";

/* ---------- Language-independent data (see lib/data.ts) ---------- */

export interface StatBase {
  id: StatId;
  value: number;
  suffix: string;
}

export interface ExperienceBase {
  id: ExperienceId;
  company: string;
  tech: string[];
}

export interface ProjectBase {
  id: ProjectId;
  company: string;
  tags: ProjectTag[];
  tech: string[];
}

export interface SkillGroupBase {
  id: SkillGroupId;
  skills: string[];
}

/* ---------- Translatable copy (see lib/content.ts) ---------- */

export interface ExperienceCopy {
  role: string;
  period: string;
  location: string;
  highlights: string[];
}

export interface ProjectCopy {
  title: string;
  description: string;
}

export interface Content {
  htmlLang: string;
  nav: Record<SectionId, string>;
  common: {
    resume: string;
    downloadResume: string;
    toggleTheme: string;
    toggleMenu: string;
    language: string;
  };
  hero: {
    headline: { before: string; accent: string; after: string };
    introLine1: string;
    introLine2: string;
    summary: string;
    keywords: string[];
    scrollDown: string;
    viewWork: string;
    getInTouch: string;
  };
  about: {
    title: string;
    text: string;
    education: string;
    stats: Record<StatId, { title: string; description: string }>;
  };
  experience: {
    title: string;
    items: Record<ExperienceId, ExperienceCopy>;
  };
  projects: {
    title: string;
    carouselLabel: string;
    previous: string;
    next: string;
    goTo: (n: number) => string;
    tags: Record<ProjectTag, string>;
    items: Record<ProjectId, ProjectCopy>;
  };
  skills: {
    title: string;
    groups: Record<SkillGroupId, string>;
  };
  contact: {
    title: string;
    headingBefore: string;
    headingAccent: string;
    body: string;
    emailLabel: string;
    phoneLabel: string;
    sendEmail: string;
    copied: (label: string) => string;
    copyFailed: string;
  };
  footer: {
    rights: string;
    builtWith: string;
  };
}
