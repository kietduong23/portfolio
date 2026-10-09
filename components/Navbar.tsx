"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { profile, sectionIds } from "@/lib/data";
import { useActiveSection } from "@/lib/useActiveSection";
import { LanguageToggle } from "./LanguageToggle";
import { useLanguage } from "./LanguageProvider";
import { useTheme } from "./ThemeProvider";

export function Navbar() {
  const active = useActiveSection(sectionIds);
  const { theme, toggle } = useTheme();
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "border-b border-line bg-bg/80 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <a href="#top" className="flex items-center gap-2 font-mono text-sm font-bold tracking-wider">
          <span className="inline-block h-2 w-2 rounded-full bg-accent" />
          {profile.brand}
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {sectionIds.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`relative rounded-full px-3.5 py-1.5 text-sm transition-colors ${
                  active === id ? "text-fg" : "text-muted hover:text-fg"
                }`}
              >
                {active === id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-fg/[0.08]"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative">{t.nav[id]}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={profile.resume}
            download
            className="hidden items-center gap-2 rounded-full border border-line px-4 py-1.5 text-sm transition-colors hover:bg-fg hover:text-bg sm:inline-flex"
          >
            <Download size={14} />
            {t.common.resume}
          </a>
          <LanguageToggle />
          <button
            type="button"
            onClick={toggle}
            aria-label={t.common.toggleTheme}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:text-fg"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={t.common.toggleMenu}
            aria-expanded={open}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line md:hidden"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden md:hidden"
          >
            <ul className="mx-auto flex max-w-6xl flex-col px-5 pb-5">
              {sectionIds.map((id) => (
                <li key={id} className="border-t border-line">
                  <a
                    href={`#${id}`}
                    onClick={() => setOpen(false)}
                    className={`block py-3 text-lg ${active === id ? "text-fg" : "text-muted"}`}
                  >
                    {t.nav[id]}
                  </a>
                </li>
              ))}
              <li className="border-t border-line pt-4">
                <a
                  href={profile.resume}
                  download
                  className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm"
                >
                  <Download size={14} />
                  {t.common.downloadResume}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
