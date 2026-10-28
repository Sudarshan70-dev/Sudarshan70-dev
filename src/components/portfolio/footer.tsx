"use client";

import { ButtonLink } from "@/components/ui/button-link";
import type { SocialLink } from "@/types/content";

export function Footer({
  resumeHref,
  socialLinks,
}: {
  resumeHref: string;
  socialLinks: SocialLink[];
}) {
  return (
    <footer className="px-4 pb-10 pt-8 sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 rounded-[2rem] border border-white/8 bg-slate-950/50 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-white">Sudarshan Gadekar</p>
          <p className="mt-1 text-sm text-slate-400">Premium Full Stack engineering for SaaS products, admin systems, and modern React experiences.</p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {socialLinks.map((link) => (
            <ButtonLink
              key={link.label}
              external={link.external}
              href={link.href}
              trailingIcon={Boolean(link.external)}
              variant="ghost"
            >
              {link.label}
            </ButtonLink>
          ))}
          <ButtonLink download href={resumeHref} variant="secondary">
            Resume
          </ButtonLink>
        </div>
      </div>
    </footer>
  );
}
