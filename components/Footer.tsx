"use client";

import { profile } from "@/lib/data";
import { useLanguage } from "./LanguageProvider";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-line px-5 py-8 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 text-sm text-muted sm:flex-row sm:items-center">
        <p>
          © {new Date().getFullYear()} {profile.name}. {t.footer.rights}
        </p>
        <p className="font-mono text-xs">{t.footer.builtWith}</p>
      </div>
    </footer>
  );
}
