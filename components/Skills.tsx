"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/lib/data";
import { useLanguage } from "./LanguageProvider";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { SkillBadge } from "./SkillBadge";

export function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="04" title={t.skills.title} />
        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, i) => (
            <Reveal key={group.id} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className="h-full rounded-2xl border border-line bg-surface/50 p-6 transition-[border-color,box-shadow] duration-300 hover:border-accent/50 hover:shadow-[0_0_40px_-12px_rgb(var(--accent)/0.35)] md:p-8"
              >
                <div className="mb-5 flex items-baseline justify-between">
                  <h3 className="text-lg font-semibold tracking-tight">{t.skills.groups[group.id]}</h3>
                  <span className="font-mono text-xs text-muted">
                    {String(i + 1).padStart(3, "0")}
                  </span>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <SkillBadge key={skill} name={skill} />
                  ))}
                </ul>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
