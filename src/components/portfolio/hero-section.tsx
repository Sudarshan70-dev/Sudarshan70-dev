"use client";

import Image from "next/image";
import { BadgeCheck, BriefcaseBusiness, Download, FolderGit2, Mail, MapPin } from "lucide-react";

import { ButtonLink } from "@/components/ui/button-link";
import { MotionReveal } from "@/components/ui/motion-reveal";
import type { Profile, SocialLink } from "@/types/content";

export function HeroSection({
  profile,
  links,
}: {
  profile: Profile;
  links: SocialLink[];
}) {
  return (
    <section className="section-anchor px-4 pb-8 pt-8 sm:px-6 lg:px-10" data-section id="hero">
      <div className="mx-auto max-w-6xl">
        <div className="mb-5 space-y-1 font-mono text-xs text-slate-400">
          <p><span className="mr-4 text-slate-600">1</span><span className="text-pink-300">import</span> React <span className="text-pink-300">from</span> <span className="text-amber-200">&apos;react&apos;</span>;</p>
          <p><span className="mr-4 text-slate-600">2</span><span className="text-emerald-300">// Frontend Engineer · React · Pune, Maharashtra, India</span></p>
        </div>

        <MotionReveal>
          <div className="workspace-hero-card grid gap-8 rounded-2xl p-5 shadow-2xl sm:p-8 lg:grid-cols-[1.45fr_0.8fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1.5 font-mono text-xs text-emerald-200">
                <BadgeCheck aria-hidden="true" className="h-3.5 w-3.5" />
                {profile.availability}
              </div>

              <p className="mt-6 font-mono text-sm text-blue-300">Hi, I&apos;m</p>
              <h1 className="section-title mt-1 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                {profile.name}<span className="text-[#007acc]">.</span>
              </h1>
              <p className="mt-3 font-mono text-lg text-cyan-200 sm:text-xl">Full Stack Developer | React Developer</p>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                {profile.headline} {profile.intro} {profile.summary}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {profile.roles.map((role) => (
                  <span key={role} className="rounded-md border border-white/10 bg-[#1e1e1e] px-3 py-1.5 font-mono text-xs text-slate-200">
                    {role}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-3 font-mono text-xs">
                <ButtonLink href="#contact" variant="primary">
                  <Mail aria-hidden="true" className="h-4 w-4" />
                  Contact_Me()
                </ButtonLink>
                <ButtonLink href="#projects" variant="secondary">
                  <FolderGit2 aria-hidden="true" className="h-4 w-4" />
                  View_Projects()
                </ButtonLink>
                <ButtonLink download href={profile.resumeHref} variant="ghost">
                  <Download aria-hidden="true" className="h-4 w-4" />
                  Resume
                </ButtonLink>
              </div>

              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-400">
                <span className="inline-flex items-center gap-2"><MapPin aria-hidden="true" className="h-3.5 w-3.5 text-cyan-300" />{profile.location}</span>
                <span className="inline-flex items-center gap-2"><BriefcaseBusiness aria-hidden="true" className="h-3.5 w-3.5 text-cyan-300" />{profile.experience}</span>
              </div>
            </div>

            <aside aria-label={`${profile.name} profile card`} className="workspace-id-card mx-auto w-full max-w-xs rounded-2xl p-1">
              <div className="rounded-xl bg-[#181818] p-5 text-center">
                <Image
                  alt={`Portrait of ${profile.name}, frontend engineer in Pune`}
                  className="mx-auto h-32 w-32 rounded-full border-2 border-[#007acc] object-cover object-center shadow-lg"
                  height={1200}
                  priority
                  src="/hero-photo.jpg"
                  width={900}
                />
                <h2 className="mt-4 text-lg font-semibold text-white">{profile.name}</h2>
                <p className="font-mono text-xs text-cyan-300">Frontend Engineer · Pune, India</p>

                <div className="mt-4 space-y-2 rounded-lg border border-[#3c3c3c] bg-[#252526] p-3 text-left font-mono text-[11px] text-slate-300">
                  <p><span className="text-violet-300">experience:</span> &quot;{profile.experience}&quot;,</p>
                  <p><span className="text-violet-300">frontend:</span> [&quot;React&quot;, &quot;TypeScript&quot;],</p>
                  <p><span className="text-violet-300">cloud:</span> [&quot;Firebase&quot;, &quot;Google Cloud&quot;],</p>
                  <p><span className="text-violet-300">quality:</span> [&quot;Selenium&quot;, &quot;Mocha&quot;]</p>
                </div>

                <nav aria-label="Social profiles" className="mt-4 flex justify-center gap-2">
                  {links.map((link) => {
                    const Icon = link.label === "GitHub" ? FolderGit2 : link.label === "LinkedIn" ? BriefcaseBusiness : Mail;
                    return (
                      <a
                        key={link.label}
                        aria-label={link.label}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-[#252526] text-slate-200 transition hover:border-[#007acc] hover:text-white"
                        href={link.href}
                        rel={link.external ? "noreferrer" : undefined}
                        target={link.external ? "_blank" : undefined}
                      >
                        <Icon aria-hidden="true" className="h-4 w-4" />
                      </a>
                    );
                  })}
                </nav>
              </div>
            </aside>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
