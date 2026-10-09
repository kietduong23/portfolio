"use client";

import type { Locale } from "@/lib/types";
import { useLanguage } from "./LanguageProvider";

const options: { value: Locale; label: string }[] = [
  { value: "en", label: "EN" },
  { value: "vi", label: "VI" },
];

/** Segmented EN | VI switch. */
export function LanguageToggle() {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.common.language}
      className="inline-flex h-9 items-center rounded-full border border-line p-0.5 font-mono text-xs"
    >
      {options.map((option) => {
        const selected = option.value === locale;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => setLocale(option.value)}
            aria-pressed={selected}
            className={`h-full rounded-full px-2.5 transition-colors ${
              selected ? "bg-fg text-bg" : "text-muted hover:text-fg"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
