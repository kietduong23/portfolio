"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { profile } from "@/lib/data";
import { useLanguage } from "./LanguageProvider";
import { MagneticButton } from "./MagneticButton";
import { TechIcon } from "./TechIcon";

const heroTech = ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"];

const socials = [
  { label: "GitHub", href: profile.github, icon: FaGithub },
  { label: "LinkedIn", href: profile.linkedin, icon: FaLinkedinIn },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { t } = useLanguage();
  const { hero } = t;

  // Ambient light follows the cursor via CSS variables (no re-render).
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <section
      id="top"
      ref={ref}
      onMouseMove={onMove}
      className="relative overflow-hidden px-5 pb-16 pt-32 md:px-8 md:pb-24 md:pt-40"
      style={
        {
          "--mx": "70%",
          "--my": "30%",
        } as React.CSSProperties
      }
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(520px circle at var(--mx) var(--my), rgb(var(--accent) / 0.13), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1.7fr_1fr] lg:gap-16">
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="display text-[clamp(2.2rem,5.4vw,4.8rem)]"
          >
            {hero.headline.before} <span className="text-muted">{hero.headline.accent}</span>
            {hero.headline.after && ` ${hero.headline.after}`}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-5 lg:pt-4"
          >
            <div className="flex items-center gap-4">
              <Image
                src="/avatar.png"
                alt={profile.name}
                width={96}
                height={96}
                priority
                className="h-24 w-24 rounded-full border border-line object-cover"
              />
              <p className="text-sm font-medium leading-snug">
                {hero.introLine1}
                <br />
                {hero.introLine2}
              </p>
            </div>
            <div className="border-t border-line pt-5">
              <p className="text-sm leading-relaxed text-muted">{hero.summary}</p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {hero.keywords.map((keyword) => (
                  <li
                    key={keyword}
                    className="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-muted"
                  >
                    {keyword}
                  </li>
                ))}
              </ul>
              <a
                href="#about"
                className="mt-5 inline-flex items-center gap-1.5 text-sm text-fg hover:text-accent"
              >
                {hero.scrollDown} <ArrowDown size={14} />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 flex flex-col gap-8 md:flex-row md:items-center md:justify-between"
        >
          <div className="flex flex-wrap items-center gap-3">
            <MagneticButton href="#projects">
              {hero.viewWork} <ArrowUpRight size={16} />
            </MagneticButton>
            <MagneticButton href="#contact" variant="ghost">
              {hero.getInTouch}
            </MagneticButton>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <ul className="flex items-center gap-3">
              {heroTech.map((name) => (
                <li
                  key={name}
                  title={name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface/60"
                >
                  <TechIcon name={name} size={18} />
                </li>
              ))}
            </ul>
            <ul className="flex items-center gap-2">
              {socials.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full text-muted transition-colors hover:bg-fg hover:text-bg"
                  >
                    <Icon size={16} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
