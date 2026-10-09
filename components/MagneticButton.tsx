"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

interface MagneticButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
}

const base =
  "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-[background-position,color,border-color] duration-500";

const variants = {
  primary:
    "bg-[linear-gradient(90deg,rgb(var(--fg))_0%,rgb(var(--fg))_50%,rgb(var(--accent))_100%)] bg-[length:200%_100%] bg-left text-bg hover:bg-right hover:text-white",
  ghost: "border border-line text-fg hover:border-fg",
};

/** Link-styled button that is gently pulled towards the cursor. */
export function MagneticButton({ href, children, variant = "primary" }: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 200, damping: 15 });
  const y = useSpring(useMotionValue(0), { stiffness: 200, damping: 15 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.25);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.25);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ x, y }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`${base} ${variants[variant]}`}
    >
      {children}
    </motion.a>
  );
}
