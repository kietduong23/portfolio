"use client";

import { animate, useInView } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/data";
import type { StatBase } from "@/lib/types";
import { useLanguage } from "./LanguageProvider";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

/** Number that counts up from 0 once it scrolls into view. */
function Counter({ stat }: { stat: StatBase }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, stat.value, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, stat.value]);

  return (
    <span ref={ref}>
      {value.toLocaleString("en-US")}
      {stat.suffix}
    </span>
  );
}

/** One column: accent number, bold title and a short description. */
function StatItem({ stat, index }: { stat: StatBase; index: number }) {
  const { t } = useLanguage();
  const copy = t.about.stats[stat.id];

  return (
    <Reveal delay={index * 0.1}>
      <div className="group relative h-full px-0 py-8 md:px-8 md:py-2 md:first:pl-0 md:last:pr-0">
        {/* Separator between stacked stats on mobile */}
        <div className="absolute inset-x-0 top-0 h-px bg-[rgb(var(--line)/var(--line-alpha))] md:hidden" />

        <p className="font-mono text-xs text-muted">{String(index + 1).padStart(3, "0")}</p>
        <p className="mt-3 text-6xl font-semibold leading-none tracking-tight text-accent tabular-nums transition-transform duration-500 group-hover:-translate-y-1 md:text-7xl">
          <Counter stat={stat} />
        </p>

        <h3 className="mt-5 text-base font-semibold tracking-tight">{copy.title}</h3>
        <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">{copy.description}</p>
      </div>
    </Reveal>
  );
}

export function Stats() {
  const { t } = useLanguage();

  return (
    <section id="about" className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="01" title={t.about.title} />

        {/* Intro card with a faint diagonal-line banner */}
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-line bg-surface/60">
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 h-28"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(135deg, rgb(var(--line) / 0.09) 0 1px, transparent 1px 14px)",
                maskImage: "linear-gradient(to bottom, black, transparent)",
                WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
              }}
            />
            <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 py-12 text-center md:px-10 md:py-16">
              <p className="text-lg leading-relaxed md:text-xl">{t.about.text}</p>
              <p className="inline-flex items-center gap-2 rounded-full border border-line bg-bg/60 px-4 py-1.5 text-xs text-muted md:text-sm">
                <GraduationCap size={16} className="shrink-0 text-accent" />
                {t.about.education}
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:mt-16 md:grid-cols-3">
          {stats.map((stat, i) => (
            <StatItem key={stat.id} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
