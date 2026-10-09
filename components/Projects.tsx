"use client";

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  type PanInfo,
} from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { projects } from "@/lib/data";
import { useLanguage } from "./LanguageProvider";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const GAP = 24;
const AUTOPLAY_MS = 5000;
const SPRING = { type: "spring", stiffness: 220, damping: 30 } as const;

/** Centered carousel: the active card is highlighted, neighbours scale, tilt and blur away. */
export function Projects() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();

  const viewportRef = useRef<HTMLDivElement>(null);
  const inView = useInView(viewportRef, { margin: "-80px" });
  const positioned = useRef(false);
  const dragged = useRef(false);

  const [width, setWidth] = useState(0);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const x = useMotionValue(0);

  const count = projects.length;
  const cardWidth = Math.min(width * 0.86, 440);

  // x offset that centres card `index` in the viewport.
  const offsetFor = useCallback(
    (index: number) => width / 2 - cardWidth / 2 - index * (cardWidth + GAP),
    [width, cardWidth],
  );

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const update = () => setWidth(el.clientWidth);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Slide to the active card (jump on first layout, spring afterwards).
  useEffect(() => {
    if (!width) return;
    if (!positioned.current || reduceMotion) {
      x.set(offsetFor(active));
      positioned.current = true;
      return;
    }
    const controls = animate(x, offsetFor(active), SPRING);
    return () => controls.stop();
  }, [active, width, offsetFor, reduceMotion, x]);

  // Autoplay: loops, pauses on hover/focus/drag, when off-screen, or with reduced motion.
  useEffect(() => {
    if (paused || !inView || reduceMotion) return;
    const id = setInterval(() => setActive((a) => (a + 1) % count), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, inView, reduceMotion, count]);

  const go = (index: number) => setActive(Math.max(0, Math.min(count - 1, index)));

  const onDragStart = () => {
    dragged.current = true;
    setPaused(true);
  };

  const onDragEnd = (_: unknown, info: PanInfo) => {
    const threshold = cardWidth / 4;
    let next = active;
    if (info.offset.x < -threshold || info.velocity.x < -500) next = Math.min(active + 1, count - 1);
    else if (info.offset.x > threshold || info.velocity.x > 500) next = Math.max(active - 1, 0);

    if (next === active) animate(x, offsetFor(active), SPRING);
    else setActive(next);

    setTimeout(() => {
      dragged.current = false;
    }, 60);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(active - 1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      go(active + 1);
    }
  };

  return (
    <section id="projects" className="overflow-hidden px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="03" title={t.projects.title} />
      </div>

      <Reveal>
        <div
          role="region"
          aria-roledescription="carousel"
          aria-label={t.projects.carouselLabel}
          tabIndex={0}
          onKeyDown={onKeyDown}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          className="mx-auto max-w-[1400px] rounded-2xl outline-none focus-visible:ring-1 focus-visible:ring-accent/60"
        >
          <div
            ref={viewportRef}
            className="relative min-h-[540px] overflow-hidden py-6"
            style={{
              maskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
              WebkitMaskImage:
                "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
            }}
          >
            {width > 0 && (
              <motion.div
                className="flex cursor-grab items-stretch active:cursor-grabbing"
                style={{ x, gap: GAP }}
                drag="x"
                dragMomentum={false}
                dragElastic={0.15}
                dragConstraints={{ left: offsetFor(count - 1), right: offsetFor(0) }}
                onDragStart={onDragStart}
                onDragEnd={onDragEnd}
              >
                {projects.map((project, i) => {
                  const dist = i - active;
                  const abs = Math.abs(dist);
                  return (
                    <motion.div
                      key={project.id}
                      role="group"
                      aria-roledescription="slide"
                      aria-label={`${i + 1} / ${count}`}
                      style={{ width: cardWidth, flexShrink: 0, transformPerspective: 1100 }}
                      animate={{
                        scale: abs === 0 ? 1 : abs === 1 ? 0.9 : 0.82,
                        opacity: abs === 0 ? 1 : abs === 1 ? 0.5 : 0.22,
                        rotateY: reduceMotion ? 0 : dist === 0 ? 0 : dist > 0 ? -9 : 9,
                        filter: abs === 0 ? "blur(0px)" : "blur(1.5px)",
                      }}
                      transition={reduceMotion ? { duration: 0 } : SPRING}
                      onClick={() => {
                        if (!dragged.current && i !== active) go(i);
                      }}
                      className={i !== active ? "cursor-pointer" : ""}
                    >
                      <ProjectCard project={project} active={i === active} />
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </div>

          <div className="mt-2 flex items-center justify-center gap-5">
            <button
              type="button"
              onClick={() => go(active - 1)}
              disabled={active === 0}
              aria-label={t.projects.previous}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line transition-colors hover:bg-fg hover:text-bg disabled:pointer-events-none disabled:opacity-30"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex flex-col items-center gap-3">
              <p className="font-mono text-xs text-muted" aria-live="polite">
                {String(active + 1).padStart(3, "0")} / {String(count).padStart(3, "0")}
              </p>
              <div className="flex items-center gap-1.5">
                {projects.map((project, i) => (
                  <button
                    key={project.id}
                    type="button"
                    onClick={() => go(i)}
                    aria-label={t.projects.goTo(i + 1)}
                    aria-current={i === active}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === active ? "w-6 bg-accent" : "w-1.5 bg-fg/25 hover:bg-fg/50"
                    }`}
                  />
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => go(active + 1)}
              disabled={active === count - 1}
              aria-label={t.projects.next}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line transition-colors hover:bg-fg hover:text-bg disabled:pointer-events-none disabled:opacity-30"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
