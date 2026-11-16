"use client";

import Image from "next/image";
import { ArrowDown, ArrowRight, BadgeCheck, BriefcaseBusiness, Download, FolderGit2, Mail, MapPin } from "lucide-react";

import { ButtonLink } from "@/components/ui/button-link";
import { MotionReveal } from "@/components/ui/motion-reveal";
import type { Profile, SocialLink } from "@/types/content";

const featuredTools = ["React.js", "Next.js", "TypeScript", "Node.js", "Firebase"];

export function HeroSection({
  profile,
  links,
  projectCount,
}: {
  profile: Profile;
  links: SocialLink[];
  projectCount: number;
}) {
  const [firstName, ...lastName] = profile.name.split(" ");
  const experienceYears = profile.experience.match(/\d+\+?/)?.[0] ?? "2+";

  return (
    <section className="hero-section" data-section id="hero">
      <div className="hero-backdrop" aria-hidden="true">
        <span className="hero-backdrop-glow hero-backdrop-glow--blue" />
        <span className="hero-backdrop-glow hero-backdrop-glow--purple" />
        <span className="hero-grid-lines" />
      </div>
      <MotionReveal>
        <div className="hero-shell section-inner">
          <div className="hero-copy">
            <div className="availability-pill">
              <BadgeCheck aria-hidden="true" className="h-4 w-4" />
              {profile.availability === "Immediate Joiner" ? "Available for new opportunities" : profile.availability}
            </div>

            <p className="hero-greeting">Hello, I&apos;m</p>
            <h1 className="hero-name"><span>{firstName} </span><span className="hero-name-accent">{lastName.join(" ")}</span></h1>
            <h2 className="hero-headline">{profile.headline}</h2>
            <p className="hero-intro">{profile.intro} {profile.summary}</p>

            <div className="hero-tech-list" aria-label="Core technologies">
              {featuredTools.map((tool) => <span key={tool}>{tool}</span>)}
            </div>
            <p className="hero-role-line">{profile.roles.join(" · ")}</p>

            <div className="hero-actions">
              <ButtonLink href="#projects" variant="primary">
                <FolderGit2 aria-hidden="true" className="h-4 w-4" />
                View my projects
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink download href={profile.resumeHref} variant="secondary">
                <Download aria-hidden="true" className="h-4 w-4" />
                Download resume
              </ButtonLink>
            </div>

            <div className="hero-metrics" aria-label="Career snapshot">
              <div>
                <BriefcaseBusiness aria-hidden="true" />
                <p><strong>{experienceYears}</strong><span>Years experience</span></p>
              </div>
              <div>
                <FolderGit2 aria-hidden="true" />
                <p><strong>{projectCount}</strong><span>Featured projects</span></p>
              </div>
              <div>
                <MapPin aria-hidden="true" />
                <p><strong>Pune, India</strong><span>Based in Maharashtra</span></p>
              </div>
            </div>
          </div>

          <aside aria-label={`${profile.name} portrait`} className="hero-stage">
            <div aria-hidden="true" className="hero-stage-ring hero-stage-ring--one" />
            <div aria-hidden="true" className="hero-stage-ring hero-stage-ring--two" />
            <div aria-hidden="true" className="hero-screen hero-screen--back">
              <div className="hero-screen-top"><i /><i /><i /><span /></div>
              <div className="hero-screen-code"><i /><i /><i /><i /><i /><i /></div>
            </div>
            <div aria-hidden="true" className="hero-screen hero-screen--front">
              <span className="hero-screen-window-dot" />
              <div className="hero-screen-bars"><i /><i /><i /><i /></div>
              <div className="hero-screen-chart"><i /><i /><i /><i /><i /><i /></div>
            </div>
            <div className="hero-image-wrap">
              <Image
                alt={`Portrait of ${profile.name}, frontend-focused full-stack developer in Pune`}
                className="hero-portrait"
                height={1200}
                priority
                sizes="(max-width: 767px) 72vw, (max-width: 1100px) 42vw, 38vw"
                src="/hero-photo.jpg"
                width={900}
              />
            </div>
            <p className="hero-manifesto">Build.<br />Innovate.<br />Grow.</p>
            <div aria-hidden="true" className="hero-floating-badge">&lt;/&gt;</div>
            <nav aria-label="Social profiles" className="hero-socials">
              {links.map((link) => {
                const Icon = link.label === "GitHub" ? FolderGit2 : link.label === "LinkedIn" ? BriefcaseBusiness : Mail;
                return (
                  <a
                    aria-label={link.label}
                    href={link.href}
                    key={link.label}
                    rel={link.external ? "noreferrer" : undefined}
                    target={link.external ? "_blank" : undefined}
                  >
                    <Icon aria-hidden="true" className="h-4 w-4" />
                  </a>
                );
              })}
            </nav>
          </aside>
        </div>
      </MotionReveal>
      <a className="hero-scroll-cue" href="#about">
        <span>Scroll to explore</span>
        <ArrowDown aria-hidden="true" className="h-4 w-4" />
      </a>
      <svg aria-hidden="true" className="section-wave hero-wave" fill="none" preserveAspectRatio="none" viewBox="0 0 1440 90">
        <defs>
          <linearGradient id="hero-wave-gradient" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#20cfff" />
            <stop offset="0.52" stopColor="#496eff" />
            <stop offset="1" stopColor="#d64cff" />
          </linearGradient>
        </defs>
        <path d="M-20 58C158 0 223 88 414 50S694 18 865 56 1160 86 1460 26" stroke="url(#hero-wave-gradient)" strokeOpacity=".75" strokeWidth="2" />
        <path d="M-20 73C172 20 253 94 439 66S718 35 903 66 1199 92 1460 48" stroke="url(#hero-wave-gradient)" strokeOpacity=".3" strokeWidth="1" />
      </svg>
    </section>
  );
}
