"use client";

import dynamic from "next/dynamic";
import { ArrowLeft, Boxes, Layers3, ShieldCheck, Workflow } from "lucide-react";
import { motion } from "framer-motion";

import { Footer } from "@/components/portfolio/footer";
import { WorkspaceShell } from "@/components/portfolio/workspace-shell";
import { ButtonLink } from "@/components/ui/button-link";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { profile, socialLinks } from "@/content/site";
import { useRuntimeMotionMode } from "@/hooks/use-runtime-motion-mode";
import type { ProjectCaseStudy } from "@/types/content";

const HeroScene = dynamic(() => import("@/components/scenes/hero-scene"), {
  ssr: false,
  loading: () => (
    <div className="section-card surface-grid flex min-h-[22rem] items-center justify-center rounded-[2rem]">
      <div className="glass-panel rounded-full px-4 py-2 text-sm font-semibold text-cyan-100">
        Loading case-study scene...
      </div>
    </div>
  ),
});

const sectionIcons = [Workflow, Layers3, Boxes, ShieldCheck];

export function ProjectCaseStudyPage({ project }: { project: ProjectCaseStudy }) {
  const mode = useRuntimeMotionMode();
  const caseStudySections = [
    { title: "Problem", items: project.problem },
    { title: "Solution", items: project.solution },
    { title: "Core Features", items: project.features },
    { title: "Architecture", items: project.architecture },
    { title: "Challenges", items: project.challenges },
    { title: "Impact", items: project.impact },
  ];

  return (
    <WorkspaceShell
      initialFile="projects"
      navigationPrefix="/"
      skipTarget="#case-study-content"
      socialLinks={socialLinks}
    >
      <main className="px-4 pb-10 pt-8 sm:px-6 lg:px-10" id="case-study-content">
        <div className="mx-auto max-w-7xl">
          <ButtonLink href="/" variant="ghost" className="mb-6 px-0 text-sm text-slate-300 hover:bg-transparent">
            <ArrowLeft className="h-4 w-4" />
            Back to portfolio
          </ButtonLink>

          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div>
              <MotionReveal>
                <div className="section-label">{project.type}</div>
              </MotionReveal>
              <MotionReveal delay={0.05}>
                <h1 className="section-title mt-6 text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
                  {project.title}
                </h1>
              </MotionReveal>
              <MotionReveal delay={0.1}>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">{project.tagline}</p>
              </MotionReveal>
              <MotionReveal delay={0.15}>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400">{project.summary}</p>
              </MotionReveal>

              <MotionReveal delay={0.2}>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-white/8 bg-slate-950/50 px-3 py-1.5 text-xs font-semibold text-slate-100"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </MotionReveal>

              <MotionReveal delay={0.25}>
                <div className="mt-8 flex flex-wrap gap-3">
                  {project.liveUrl ? (
                    <ButtonLink external href={project.liveUrl} trailingIcon>
                      Live Preview
                    </ButtonLink>
                  ) : null}
                  {project.githubUrl ? (
                    <ButtonLink external href={project.githubUrl} trailingIcon variant="secondary">
                      GitHub
                    </ButtonLink>
                  ) : (
                    <ButtonLink href="/#contact" variant="secondary">
                      Contact For Walkthrough
                    </ButtonLink>
                  )}
                </div>
              </MotionReveal>
            </div>

            <MotionReveal delay={0.1} y={30}>
              <div className="section-card relative overflow-hidden rounded-[2.25rem] p-4">
                {mode === "reduced" ? (
                  <div className="surface-grid flex min-h-[24rem] items-center justify-center rounded-[1.75rem] border border-white/8 bg-slate-950/35 px-8 text-center text-sm leading-7 text-slate-300">
                    3D visuals are reduced here for accessibility, while the layout still keeps the premium product-storytelling feel.
                  </div>
                ) : (
                  <div className="min-h-[24rem] rounded-[1.75rem]">
                    <HeroScene accent={project.heroScene.accent} mode={mode === "full" ? "full" : "lite"} secondaryAccent="#8b5cf6" />
                  </div>
                )}
              </div>
            </MotionReveal>
          </div>

          <section className="mt-14">
            <SectionHeading
              description="The supporting visual system below stands in for a polished product walkthrough: layout hierarchy, data surfaces, and role-relevant impact."
              eyebrow="Visual Showcase"
              title="A premium case-study frame for the product story."
            />

            <div className="mt-8 grid gap-6 lg:grid-cols-[1.04fr_0.96fr]">
              <MotionReveal>
                <div className="mock-screen rounded-[2rem] p-5 sm:p-6">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
                  </div>

                  <div className="mt-6 grid gap-4 sm:grid-cols-[1fr_0.92fr]">
                    <div className="rounded-[1.5rem] border border-white/8 bg-slate-950/72 p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/80">{project.visuals.eyebrow}</p>
                      <h2 className="mt-3 text-2xl font-semibold text-white">{project.visuals.title}</h2>
                      <div className="mt-6 space-y-3">
                        {project.visuals.panels.map((panel) => (
                          <div key={panel} className="rounded-2xl border border-white/8 bg-slate-900/72 px-4 py-4 text-sm text-slate-200">
                            {panel}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="grid gap-3">
                      {project.visuals.stats.map((stat) => (
                        <div key={stat.label} className="rounded-[1.35rem] border border-white/8 bg-slate-950/72 p-4">
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">{stat.label}</p>
                          <p className="mt-2 text-2xl font-semibold text-white">{stat.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </MotionReveal>

              <MotionReveal>
                <div className="section-card rounded-[2rem] p-6 sm:p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/80">Screenshots / Visuals</p>
                  <h3 className="mt-4 text-2xl font-semibold text-white">Prepared for real product imagery.</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    This section is structured so polished screenshots, walkthrough GIFs, or interface recordings can be dropped in later without changing the storytelling or layout hierarchy.
                  </p>

                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {[1, 2, 3, 4].map((item) => (
                      <div key={item} className="aspect-[1.12/0.84] rounded-[1.4rem] border border-dashed border-white/12 bg-slate-950/48 p-4">
                        <div className="h-full rounded-[1rem] border border-white/6 bg-[linear-gradient(135deg,rgba(96,165,250,0.14),rgba(9,17,31,0.9))]" />
                      </div>
                    ))}
                  </div>
                </div>
              </MotionReveal>
            </div>
          </section>

          <section className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {caseStudySections.map((section, index) => {
              const Icon = sectionIcons[index % sectionIcons.length];

              return (
                <MotionReveal key={section.title} delay={index * 0.04}>
                  <div className="section-card h-full rounded-[1.75rem] p-6">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/18 bg-cyan-300/10 text-cyan-100">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-white">{section.title}</h3>
                    <div className="mt-5 space-y-4">
                      {section.items.map((item) => (
                        <div key={item} className="flex gap-3 text-sm leading-7 text-slate-300">
                          <span className="mt-3 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </MotionReveal>
              );
            })}
          </section>

          <MotionReveal className="mt-14">
            <div className="section-card rounded-[2rem] p-6 sm:p-7">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="section-label">Next Conversation</p>
                  <h2 className="section-title mt-5 text-3xl font-semibold text-white">Want the walkthrough version of this project?</h2>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
                    I can walk through product decisions, architecture tradeoffs, frontend patterns, and the engineering details behind this case study in more depth.
                  </p>
                </div>
                <motion.div whileHover={{ y: -4 }}>
                  <ButtonLink href="/#contact" trailingIcon>
                    Start The Conversation
                  </ButtonLink>
                </motion.div>
              </div>
            </div>
          </MotionReveal>
        </div>
      </main>
      <Footer resumeHref={profile.resumeHref} socialLinks={socialLinks} />
    </WorkspaceShell>
  );
}
