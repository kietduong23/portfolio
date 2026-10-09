"use client";

import type { ProjectBase } from "@/lib/types";
import { useLanguage } from "./LanguageProvider";
import { TechIcon } from "./TechIcon";

/** Icon cover standing in for a project screenshot. */
function IconCover({ project, active }: { project: ProjectBase; active: boolean }) {
  const { t } = useLanguage();
  const shown = project.tech.slice(0, 6);

  return (
    <div className="relative flex h-44 items-center justify-center overflow-hidden rounded-xl border border-line bg-bg">
      <div
        aria-hidden
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(rgb(var(--line) / 0.06) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--line) / 0.06) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div
        aria-hidden
        className={`absolute inset-0 transition-opacity duration-500 ${
          active ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background:
            "radial-gradient(260px circle at 50% 50%, rgb(var(--accent) / 0.18), transparent 70%)",
        }}
      />
      <ul className="absolute left-3 top-3 flex gap-1.5">
        {project.tags.slice(0, 2).map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-line bg-surface/80 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted backdrop-blur"
          >
            {t.projects.tags[tag]}
          </li>
        ))}
      </ul>
      <ul className="relative mt-4 flex max-w-[270px] flex-wrap items-center justify-center gap-3">
        {shown.map((name) => (
          <li
            key={name}
            title={name}
            className={`flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-surface transition-transform duration-500 ${
              active ? "scale-105" : ""
            }`}
          >
            <TechIcon name={name} size={24} />
          </li>
        ))}
      </ul>
    </div>
  );
}

interface ProjectCardProps {
  project: ProjectBase;
  active: boolean;
}

export function ProjectCard({ project, active }: ProjectCardProps) {
  const { t } = useLanguage();
  const copy = t.projects.items[project.id];

  return (
    <article
      className={`flex h-full select-none flex-col gap-5 rounded-2xl border bg-surface/70 p-4 transition-[border-color,box-shadow] duration-500 ${
        active
          ? "border-accent/50 shadow-[0_0_60px_-12px_rgb(var(--accent)/0.4)]"
          : "border-line"
      }`}
    >
      <IconCover project={project} active={active} />

      <div className="flex flex-1 flex-col px-1">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-lg font-semibold leading-snug tracking-tight">{copy.title}</h3>
          <span className="font-mono text-xs text-muted">{project.id}</span>
        </div>
        <p className="mt-1 text-xs uppercase tracking-widest text-muted">{project.company}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{copy.description}</p>

        <ul className="mt-5 flex flex-wrap gap-1.5">
          {project.tech.map((name) => (
            <li
              key={name}
              className="inline-flex items-center gap-1.5 rounded-full border border-line px-2 py-0.5 font-mono text-[11px] text-muted"
            >
              <TechIcon name={name} size={11} />
              {name}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
