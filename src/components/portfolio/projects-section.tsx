"use client";

import { ButtonLink } from "@/components/ui/button-link";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import type { ProjectCaseStudy } from "@/types/content";

export function ProjectsSection({ projects }: { projects: ProjectCaseStudy[] }) {
  return (
    <section className="section-anchor px-4 py-10 sm:px-6 lg:px-10" data-section id="projects">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          description="Each example includes its context and my contribution. Professional work is distinguished from independent public project work."
          eyebrow="Projects.tsx"
          title="Selected product work"
        />

        <div className="mt-8 grid gap-5 lg:grid-cols-2 2xl:grid-cols-3">
          {projects.filter((project) => project.featured).map((project, index) => (
            <MotionReveal key={project.slug} delay={index * 0.05}>
              <article className="section-card h-full rounded-xl p-5 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-[11px]">
                  <span className="text-cyan-300">{String(index + 1).padStart(2, "0")} // {project.status}</span>
                    <span className="text-slate-500">{project.type}</span>
                </div>

                <h3 className="mt-4 text-xl font-bold text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-200">{project.tagline}</p>
                <p className="mt-3 text-sm leading-6 text-slate-400">{project.summary}</p>

                <div className="mt-5 rounded-lg border border-[#3c3c3c] bg-[#1e1e1e] p-4 text-sm leading-6">
                  <p className="text-slate-400">{project.context}</p>
                  <p className="mt-2 text-slate-200"><span className="font-semibold text-cyan-200">My contribution: </span>{project.role}</p>
                </div>

                <h4 className="mt-5 font-semibold text-white">Selected workflows</h4>
                <ul className="mt-3 grid gap-2 text-sm text-slate-300 sm:grid-cols-2">
                  {project.features.slice(0, 4).map((feature) => <li key={feature}>• {feature}</li>)}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2 font-mono text-[11px]">
                  {project.stack.map((tool) => (
                    <span key={tool} className="rounded border border-[#3c3c3c] bg-[#1e1e1e] px-2 py-1 text-slate-200">{tool}</span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  <ButtonLink href={`/projects/${project.slug}`} trailingIcon>Read Case Study</ButtonLink>
                  {project.liveUrl ? <ButtonLink external href={project.liveUrl} trailingIcon variant="secondary">Project Website</ButtonLink> : null}
                  {project.githubUrl ? <ButtonLink external href={project.githubUrl} trailingIcon variant="secondary">Public Repository</ButtonLink> : null}
                  {!project.liveUrl && !project.githubUrl ? <ButtonLink href="#contact" variant="ghost">Ask about this work</ButtonLink> : null}
                </div>
                <p className="mt-4 border-t border-[#3c3c3c] pt-4 text-xs leading-5 text-slate-400">{project.evidenceNote}</p>
              </article>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
