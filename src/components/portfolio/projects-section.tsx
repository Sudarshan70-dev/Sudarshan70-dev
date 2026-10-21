"use client";

import { FileText, LockKeyhole, Rocket } from "lucide-react";

import { ButtonLink } from "@/components/ui/button-link";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import type { ProjectCaseStudy } from "@/types/content";

export function ProjectsSection({ projects }: { projects: ProjectCaseStudy[] }) {
  return (
    <section className="section-anchor px-4 py-10 sm:px-6 lg:px-10" data-section id="projects">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          description="Each featured project is framed like a case study. The point is not just to show screenshots, but to show how the product thinking, UX decisions, and engineering choices connect."
          eyebrow="Projects.tsx"
          title="Flagship work that looks and reads like product engineering."
        />

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {projects
            .filter((project) => project.featured)
            .map((project, index) => (
              <MotionReveal key={project.slug} delay={index * 0.05}>
                <article className="section-card h-full rounded-xl p-5 sm:p-6">
                  <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-[11px]">
                    <span className="text-cyan-300">{String(index + 1).padStart(2, "0")} // {project.type}</span>
                    <span className="text-slate-500">{project.slug}</span>
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-white">{project.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-200">{project.tagline}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{project.summary}</p>

                  <div className="mt-5 flex flex-wrap gap-2 font-mono text-[11px]">
                    {project.stack.map((tool) => (
                      <span key={tool} className="rounded border border-[#3c3c3c] bg-[#1e1e1e] px-2 py-1 text-slate-200">
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    <ButtonLink href={`/projects/${project.slug}`} trailingIcon>
                      Read Case Study
                    </ButtonLink>
                    {project.liveUrl ? (
                      <ButtonLink external href={project.liveUrl} trailingIcon variant="secondary">
                        Live Preview
                      </ButtonLink>
                    ) : null}
                    {project.githubUrl ? (
                      <ButtonLink external href={project.githubUrl} trailingIcon variant="secondary">
                        GitHub
                      </ButtonLink>
                    ) : (
                      <ButtonLink href="/#contact" variant="ghost">
                        Ask For Walkthrough
                      </ButtonLink>
                    )}
                  </div>

                  <div className="mt-5 border-t border-[#3c3c3c] pt-4 text-sm">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <p className="font-mono text-[11px] uppercase tracking-wide text-slate-400">{project.visuals.eyebrow}</p>
                        <h4 className="mt-2 font-semibold text-white">{project.visuals.title}</h4>
                        <ul className="mt-3 space-y-2 text-slate-300">
                          {project.visuals.panels.map((panel, panelIndex) => {
                            const Icon = panelIndex === 0 ? Rocket : panelIndex === 1 ? FileText : LockKeyhole;
                            return (
                              <li key={panel} className="flex items-start gap-2">
                                <Icon aria-hidden="true" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan-300" />
                                <span><span className="mr-2 font-mono text-[10px] text-slate-500">Panel {panelIndex + 1}</span>{panel}</span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                      <div className="grid content-start gap-2">
                        {project.visuals.stats.map((stat) => (
                          <div key={stat.label} className="rounded-md border border-[#3c3c3c] bg-[#1e1e1e] px-3 py-2">
                            <p className="font-mono text-[10px] uppercase tracking-wide text-slate-500">{stat.label}</p>
                            <p className="mt-1 text-slate-200">{stat.value}</p>
                          </div>
                        ))}
                        <p className="rounded-md border border-[#3c3c3c] bg-[#1e1e1e] p-3 leading-6 text-slate-300">
                          <span className="font-semibold text-cyan-200">Project intent: </span>
                          Show the work the way product companies evaluate it: problem clarity, UX quality, architecture thinking, and execution confidence.
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </MotionReveal>
            ))}
        </div>
      </div>
    </section>
  );
}
