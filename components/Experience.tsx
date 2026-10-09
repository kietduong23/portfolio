"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";
import type { ExperienceBase } from "@/lib/types";
import { useLanguage } from "./LanguageProvider";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { TechIcon } from "./TechIcon";

function TimelineItem({ item, index }: { item: ExperienceBase; index: number }) {
  const { t } = useLanguage();
  const copy = t.experience.items[item.id];

  return (
    <Reveal delay={index * 0.05} className="relative pl-8 md:pl-12">
      <span
        aria-hidden
        className="absolute left-0 top-2 h-3 w-3 -translate-x-[5.5px] rounded-full border-2 border-accent bg-bg md:top-3"
      />
      <motion.article
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
        className="group rounded-2xl border border-line bg-surface/50 p-6 transition-[border-color,box-shadow] duration-300 hover:border-accent/50 hover:shadow-[0_0_40px_-12px_rgb(var(--accent)/0.35)] md:p-8"
      >
        <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
          <h3 className="text-xl font-semibold tracking-tight md:text-2xl">{item.company}</h3>
          <p className="font-mono text-xs text-muted md:text-sm">{copy.period}</p>
        </div>
        <p className="mt-1 text-sm text-muted">
          {copy.role} · {copy.location}
        </p>

        <ul className="mt-5 space-y-2.5">
          {copy.highlights.map((line) => (
            <li key={line} className="flex gap-3 text-sm leading-relaxed text-muted">
              <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              <span className="text-fg/80">{line}</span>
            </li>
          ))}
        </ul>

        <ul className="mt-6 flex flex-wrap gap-2">
          {item.tech.map((name) => (
            <li
              key={name}
              className="inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1 font-mono text-xs text-muted"
            >
              <TechIcon name={name} size={13} />
              {name}
            </li>
          ))}
        </ul>
      </motion.article>
    </Reveal>
  );
}

export function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="02" title={t.experience.title} />
        <div className="relative space-y-6 border-l border-line md:ml-2">
          {experience.map((item, i) => (
            <TimelineItem key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
