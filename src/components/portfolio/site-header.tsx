"use client";

import Link from "next/link";
import { Download, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { ButtonLink } from "@/components/ui/button-link";

const homeSections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export function SiteHeader({ resumeHref }: { resumeHref: string }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [activeSection, setActiveSection] = useState("about");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!isHome) return;

    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-section]"));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { threshold: [0.2, 0.4, 0.65], rootMargin: "-18% 0px -22% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHome]);

  const sectionHref = (id: string) => (isHome ? `#${id}` : `/#${id}`);

  return (
    <header className="site-header-wrap">
      <div className="site-header">
        <Link aria-label="Sudarshan Gadekar home" className="site-brand" href="/">
          <span aria-hidden="true" className="site-brand-mark">SG</span>
          <span className="site-brand-copy">
            <span className="site-brand-name">Sudarshan Gadekar</span>
            <span className="site-brand-role">Full-Stack Developer</span>
          </span>
        </Link>

        <nav aria-label="Main navigation" className="site-nav">
          {homeSections.map((item) => (
            <Link
              aria-current={isHome && activeSection === item.id ? "location" : undefined}
              className={isHome && activeSection === item.id ? "is-active" : undefined}
              href={sectionHref(item.id)}
              key={item.id}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="site-header-actions">
          <ButtonLink download href={resumeHref} variant="secondary">
            <Download aria-hidden="true" className="h-4 w-4" />
            Resume
          </ButtonLink>
          <button
            aria-controls="mobile-navigation"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            className="site-menu-toggle"
            onClick={() => setMobileOpen((value) => !value)}
            type="button"
          >
            {mobileOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <nav aria-label="Mobile navigation" className="site-mobile-nav" id="mobile-navigation">
          {homeSections.map((item) => (
            <Link href={sectionHref(item.id)} key={item.id} onClick={() => setMobileOpen(false)}>
              {item.label}
            </Link>
          ))}
          <ButtonLink download href={resumeHref} variant="secondary">
            <Download aria-hidden="true" className="h-4 w-4" />
            Download resume
          </ButtonLink>
        </nav>
      ) : null}
    </header>
  );
}
