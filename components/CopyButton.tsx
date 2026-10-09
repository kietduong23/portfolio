"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "./LanguageProvider";
import { useToast } from "./ToastProvider";

interface CopyButtonProps {
  value: string;
  label: string;
  icon: React.ReactNode;
}

/** One-click copy-to-clipboard with toast feedback. */
export function CopyButton({ value, label, icon }: CopyButtonProps) {
  const { notify } = useToast();
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      notify(t.contact.copied(label));
      setTimeout(() => setCopied(false), 1800);
    } catch {
      notify(t.contact.copyFailed);
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="group flex w-full items-center justify-between gap-4 rounded-xl border border-line bg-surface/50 px-5 py-4 text-left transition-colors hover:border-accent/50"
    >
      <span className="flex items-center gap-3">
        <span className="text-muted">{icon}</span>
        <span>
          <span className="block text-xs uppercase tracking-widest text-muted">{label}</span>
          <span className="block font-mono text-sm">{value}</span>
        </span>
      </span>
      <span className="text-muted transition-colors group-hover:text-fg">
        {copied ? <Check size={16} className="text-accent" /> : <Copy size={16} />}
      </span>
    </button>
  );
}
