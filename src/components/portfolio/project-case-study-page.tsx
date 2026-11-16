import { ArrowLeft } from "lucide-react";

import { Footer } from "@/components/portfolio/footer";
import { WorkspaceShell } from "@/components/portfolio/workspace-shell";
import { ButtonLink } from "@/components/ui/button-link";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { profile, socialLinks } from "@/content/site";
import type { ProjectCaseStudy } from "@/types/content";

const caseStudySections = [
  { key: "problem", title: "Problem" },
  { key: "solution", title: "Contribution and approach" },
  { key: "features", title: "Product workflows" },
  { key: "architecture", title: "Technical context" },
  { key: "challenges", title: "Engineering considerations" },
  { key: "impact", title: "Outcome" },
] as const;

export function ProjectCaseStudyPage({ project }: { project: ProjectCaseStudy }) {
  return (
    <WorkspaceShell initialFile="projects" navigationPrefix="/" skipTarget="#case-study-content" socialLinks={socialLinks}>
      <main className="px-4 pb-10 pt-8 sm:px-6 lg:px-10" id="case-study-content">
        <div className="mx-auto max-w-7xl">
          <ButtonLink className="mb-6 px-0 text-sm text-slate-300 hover:bg-transparent" href="/#projects" variant="ghost">
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            Back to projects
          </ButtonLink>

          <header className="section-card rounded-2xl p-5 sm:p-8">
            <p className="section-label">{project.status} · {project.type}</p>
            <h1 className="section-title mt-4 text-4xl font-semibold text-white sm:text-5xl">{project.title}</h1>
            <p className="mt-5 max-w-4xl text-xl leading-8 text-slate-200">{project.tagline}</p>
            <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-400">{project.summary}</p>

            <div className="mt-6 grid gap-4 border-t border-white/10 pt-6 md:grid-cols-2">
              <div>
                <h2 className="font-mono text-xs uppercase tracking-wide text-cyan-200">Context</h2>
                <p className="mt-2 text-sm leading-7 text-slate-300">{project.context}</p>
              </div>
              <div>
                <h2 className="font-mono text-xs uppercase tracking-wide text-cyan-200">My contribution</h2>
                <p className="mt-2 text-sm leading-7 text-slate-300">{project.role}</p>
              </div>
            </div>

            <ul aria-label="Technology stack" className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((tool) => <li className="rounded border border-[#3c3c3c] bg-[#1e1e1e] px-2.5 py-1.5 font-mono text-[11px] text-slate-200" key={tool}>{tool}</li>)}
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              {project.liveUrl ? <ButtonLink external href={project.liveUrl} trailingIcon>Visit Project Site</ButtonLink> : null}
              {project.githubUrl ? <ButtonLink external href={project.githubUrl} trailingIcon variant="secondary">View Public Repository</ButtonLink> : null}
              <ButtonLink href="/#contact" variant="ghost">Discuss this work</ButtonLink>
            </div>
            <p className="mt-5 border-t border-white/10 pt-4 text-xs leading-5 text-slate-400">{project.evidenceNote}</p>
          </header>

          <section className="mt-12">
            <SectionHeading
              description="The project is described through its product context and engineering work, without mock screenshots or unverified performance metrics."
              eyebrow="Case Study"
              title="How the work fits together"
            />
            <div className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {caseStudySections.map(({ key, title }, index) => (
                <MotionReveal key={key} delay={index * 0.04}>
                  <article className="section-card h-full rounded-xl p-5">
                    <p className="font-mono text-xs text-cyan-300">0{index + 1} // {title}</p>
                    <h2 className="mt-3 text-lg font-semibold text-white">{title}</h2>
                    <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                      {project[key].map((item) => <li className="flex gap-3" key={item}><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" /><span>{item}</span></li>)}
                    </ul>
                  </article>
                </MotionReveal>
              ))}
            </div>
          </section>

          <section className="section-card mt-12 rounded-2xl p-6 sm:p-8">
            <p className="section-label">Continue</p>
            <h2 className="section-title mt-4 text-2xl font-semibold text-white">Explore the portfolio</h2>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">See the experience, skills, and services that connect to this work, or get in touch to discuss a role or project.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <ButtonLink href="/#services" variant="secondary">Services</ButtonLink>
              <ButtonLink href="/#contact">Contact</ButtonLink>
            </div>
          </section>
        </div>
      </main>
      <Footer navigationPrefix="/" resumeHref={profile.resumeHref} socialLinks={socialLinks} />
    </WorkspaceShell>
  );
}
