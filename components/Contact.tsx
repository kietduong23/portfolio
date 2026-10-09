"use client";

import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { profile } from "@/lib/data";
import { CopyButton } from "./CopyButton";
import { useLanguage } from "./LanguageProvider";
import { MagneticButton } from "./MagneticButton";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const socials = [
  { label: "GitHub", href: profile.github, icon: FaGithub },
  { label: "LinkedIn", href: profile.linkedin, icon: FaLinkedinIn },
];

export function Contact() {
  const { t } = useLanguage();
  const { contact } = t;

  return (
    <section id="contact" className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="05" title={contact.title} />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="flex flex-col gap-6">
            <p className="display text-3xl md:text-5xl">
              {contact.headingBefore} <span className="text-muted">{contact.headingAccent}</span>
            </p>
            <p className="max-w-md text-sm leading-relaxed text-muted">{contact.body}</p>
            <div>
              <MagneticButton href={`mailto:${profile.email}`}>
                {contact.sendEmail} <ArrowUpRight size={16} />
              </MagneticButton>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <CopyButton label={contact.emailLabel} value={profile.email} icon={<Mail size={18} />} />
              <CopyButton label={contact.phoneLabel} value={profile.phone} icon={<Phone size={18} />} />
            </div>

            <ul className="flex flex-wrap items-center gap-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm text-muted transition-colors hover:border-fg hover:text-fg"
                  >
                    <Icon size={14} />
                    {label}
                    <ArrowUpRight size={12} />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
