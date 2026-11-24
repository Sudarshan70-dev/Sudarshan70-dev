import { BriefcaseBusiness, FolderGit2, Mail, MapPin, PhoneCall } from "lucide-react";
import Link from "next/link";

import type { ContactConfig, SocialLink } from "@/types/content";

const QUICK_LINKS = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];

const SERVICE_AREA_LINKS = [
  {
    label: "Web & SaaS Development in Pune",
    href: "/#services",
  },
  {
    label: "Web Development in Chhatrapati Sambhajinagar",
    href: "/#services",
  },
  {
    label: "Full-Stack React & Next.js Services",
    href: "/#services",
  },
];

export function Footer({
  contact,
  socialLinks,
}: {
  contact: ContactConfig;
  socialLinks: SocialLink[];
}) {
  const currentYear = new Date().getFullYear();
  
  const cleanPhone = contact.phone.replace(/[^\d+]/g, "");
  return (
    <footer className="relative border-t border-white/10 bg-slate-950/80 text-slate-300 backdrop-blur-xl">
 
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_1.15fr_1fr]">
          {/* Column 1: Brand + Local SEO Positioning */}
          <div className="space-y-4">
            <Link
              className="inline-flex items-center gap-2.5 text-base font-semibold tracking-tight text-white"
              href="/"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-cyan-300/30 bg-cyan-300/10 text-xs font-bold text-cyan-200">
                SG
              </span>
              <span>Sudarshan Gadekar</span>
            </Link>

            <p className="text-sm leading-relaxed text-slate-400">
              Frontend-focused Full-Stack Developer building Next.js websites, SaaS dashboards, and
              custom web applications for startups and businesses in{" "}
              <strong className="font-medium text-slate-200">Pune</strong>,{" "}
              <strong className="font-medium text-slate-200">
                Chhatrapati Sambhajinagar (Aurangabad)
              </strong>
              , and remote teams across India.
            </p>

            {/* Social Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {socialLinks.map((link) => {
                const Icon =
                  link.label === "GitHub"
                    ? FolderGit2
                    : link.label === "LinkedIn"
                      ? BriefcaseBusiness
                      : Mail;

                return (
                  <a
                    key={link.label}
                    aria-label={`${link.label} profile`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:border-cyan-300/35 hover:bg-white/[0.07] hover:text-cyan-100"
                    href={link.href}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    target={link.external ? "_blank" : undefined}
                  >
                    <Icon aria-hidden="true" className="h-3.5 w-3.5 text-cyan-300" />
                    <span>{link.label}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-200">
              Navigation
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {QUICK_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    className="text-slate-400 transition hover:text-cyan-200"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Local SEO Service Areas */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-200">
              Service Areas
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {SERVICE_AREA_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    className="text-slate-400 transition hover:text-cyan-200"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs leading-relaxed text-slate-500">
              Serving Hinjewadi, Kharadi, Magarpatta, Chhatrapati Sambhajinagar, CIDCO &amp; remote clients.
            </p>
          </div>

          {/* Column 4: Semantic NAP Contact Info */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-200">
              Contact
            </h2>
            <address className="mt-4 space-y-3 text-sm not-italic text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                <span>{contact.location}</span>
              </div>

              <a
                className="flex items-center gap-2.5 transition hover:text-cyan-200"
                href={`tel:${cleanPhone}`}
              >
                <PhoneCall aria-hidden="true" className="h-4 w-4 shrink-0 text-cyan-300" />
                <span>{contact.phone}</span>
              </a>

              <a
                className="flex items-center gap-2.5 break-all transition hover:text-cyan-200"
                href={`mailto:${contact.email}`}
              >
                <Mail aria-hidden="true" className="h-4 w-4 shrink-0 text-cyan-300" />
                <span>{contact.email}</span>
              </a>
            </address>
          </div>
        </div>

        {/* Bottom Copyright & Stack Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>
            © {currentYear} Sudarshan Gadekar. Built with Next.js, TypeScript &amp; Tailwind CSS.
          </p>
          <p className="text-slate-400">
            Pune · Chhatrapati Sambhajinagar · Maharashtra, India
          </p>
        </div>
      </div>
    </footer>
  );
}