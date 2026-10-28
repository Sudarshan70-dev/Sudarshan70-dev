"use client";

import Link from "next/link";
import { Download, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { ButtonLink } from "@/components/ui/button-link";
import { cn } from "@/lib/utils";

const homeSections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function SiteHeader({ resumeHref }: { resumeHref: string }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [activeSection, setActiveSection] = useState("about");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!isHome) {
      return;
    }

    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-section]"));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        threshold: [0.25, 0.45, 0.7],
        rootMargin: "-20% 0px -20% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [isHome]);

  const scrollToSection = (id: string) => {
    setMobileOpen(false);

    if (!isHome) {
      return;
    }

    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const projectLinks = [
    { href: "/", label: "Portfolio" },
    { href: "/#projects", label: "Projects" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-10">
      <div className="glass-panel mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/8 px-4 py-3 shadow-[0_18px_48px_rgba(2,8,23,0.26)] sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan-300/18 bg-slate-950/80 text-xs font-black tracking-[0.24em] text-cyan-100">
            SG
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-white">Sudarshan Gadekar</p>
            <p className="text-xs text-slate-400">Full Stack Developer</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          {isHome
            ? homeSections.map((item) => (
                <button
                  key={item.id}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition",
                    activeSection === item.id
                      ? "bg-cyan-300/12 text-cyan-100"
                      : "text-slate-300 hover:bg-slate-900/70 hover:text-white",
                  )}
                  onClick={() => scrollToSection(item.id)}
                  type="button"
                >
                  {item.label}
                </button>
              ))
            : projectLinks.map((item) => (
                <Link
                  key={item.href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-900/70 hover:text-white"
                  href={item.href}
                >
                  {item.label}
                </Link>
              ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ButtonLink href={resumeHref} download variant="secondary" className="px-4 py-2.5">
            <Download className="h-4 w-4" />
            Resume
          </ButtonLink>
        </div>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-slate-900/70 text-slate-100 lg:hidden"
          onClick={() => setMobileOpen((value) => !value)}
          type="button"
        >
          {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {mobileOpen ? (
        <div className="glass-panel mx-auto mt-3 flex max-w-7xl flex-col gap-2 rounded-[1.5rem] border border-white/8 p-4 lg:hidden">
          {(isHome ? homeSections : projectLinks).map((item) =>
            "id" in item ? (
              <button
                key={item.id}
                className="rounded-2xl border border-transparent px-4 py-3 text-left text-sm font-medium text-slate-200 transition hover:border-cyan-300/20 hover:bg-slate-900/60"
                onClick={() => scrollToSection(item.id)}
                type="button"
              >
                {item.label}
              </button>
            ) : (
              <Link
                key={item.href}
                className="rounded-2xl border border-transparent px-4 py-3 text-left text-sm font-medium text-slate-200 transition hover:border-cyan-300/20 hover:bg-slate-900/60"
                href={item.href}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ),
          )}
          <ButtonLink href={resumeHref} download variant="secondary" className="mt-2 w-full justify-center">
            <Download className="h-4 w-4" />
            Resume
          </ButtonLink>
        </div>
      ) : null}
    </header>
  );
}
