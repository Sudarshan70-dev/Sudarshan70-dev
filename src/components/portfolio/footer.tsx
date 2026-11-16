"use client";

import { ButtonLink } from "@/components/ui/button-link";
import type { SocialLink } from "@/types/content";
import Link from "next/link";

export function Footer({
  resumeHref,
  socialLinks,
  navigationPrefix = "",
}: {
  resumeHref: string;
  socialLinks: SocialLink[];
  navigationPrefix?: string;
}) {
  return (
    <footer className="px-4 pb-10 pt-8 sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 rounded-[2rem] border border-white/8 bg-slate-950/50 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-white">Sudarshan Gadekar</p>
          <p className="mt-1 text-sm text-slate-400">Frontend-focused full-stack development for React.js products, SaaS dashboards, and operational tools.</p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <nav aria-label="Footer sections" className="flex flex-wrap items-center gap-1">
            {[
              { href: `${navigationPrefix}#about`, label: "About" },
              { href: `${navigationPrefix}#services`, label: "Services" },
              { href: `${navigationPrefix}#projects`, label: "Projects" },
              { href: `${navigationPrefix}#contact`, label: "Contact" },
            ].map((item) => (
              <Link className="rounded-full px-3 py-2 text-sm text-slate-300 hover:bg-white/5 hover:text-white" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
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
