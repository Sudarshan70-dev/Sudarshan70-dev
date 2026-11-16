"use client";

import { ArrowUpRight, BarChart3, Building2, FolderGit2, MapPin } from "lucide-react";
import { useState } from "react";

import { ButtonLink } from "@/components/ui/button-link";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import type { ProjectCaseStudy } from "@/types/content";

const filters = ["All", "Professional", "Ongoing", "Independent"] as const;
type ProjectFilter = (typeof filters)[number];

function getCategory(status: string): Exclude<ProjectFilter, "All"> {
  const normalized = status.toLowerCase();
  if (normalized.includes("professional")) return "Professional";
  if (normalized.includes("ongoing")) return "Ongoing";
  return "Independent";
}

export function ProjectsSection({ projects }: { projects: ProjectCaseStudy[] }) {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All");
  const featuredProjects = projects.filter((project) => project.featured);
  const visibleProjects = featuredProjects.filter((project) => activeFilter === "All" || getCategory(project.status) === activeFilter);

  return (
    <section className="section-anchor projects-section" data-section id="projects">
      <div className="section-inner">
        <div className="projects-heading-row">
          <SectionHeading
            description="Real-world projects showcasing product thinking, engineering, and delivery."
            eyebrow="My projects"
            title="Featured Projects"
          />
          <div aria-label="Filter projects" className="project-filters" role="group">
            {filters.map((filter) => (
              <button
                aria-pressed={activeFilter === filter}
                className={activeFilter === filter ? "is-active" : undefined}
                key={filter}
                onClick={() => setActiveFilter(filter)}
                type="button"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="project-cards">
          {visibleProjects.map((project, index) => {
            const VisualIcon = project.slug === "vnetra-admin-panel" ? BarChart3 : project.slug === "temple-management-platform" ? MapPin : Building2;
            return (
              <MotionReveal key={project.slug} delay={index * 0.04}>
                <article className={`section-card project-card project-card--${project.slug}`}>
                  <div aria-hidden="true" className="project-art">
                    <span className="project-art-orbit project-art-orbit--one" />
                    <span className="project-art-orbit project-art-orbit--two" />
                    <VisualIcon className="project-art-icon" />
                    <div className="project-art-bars"><i /><i /><i /><i /><i /><i /></div>
                    <div className="project-art-caption">{project.type}</div>
                  </div>

                  <div className="project-card-body">
                    <div className="project-meta">
                      <span className="project-status">{project.status}</span>
                      <span className="project-kind">{getCategory(project.status)}</span>
                    </div>
                    <h3>{project.title}</h3>
                    <p className="project-tagline">{project.tagline}</p>
                    <p className="project-summary">{project.summary}</p>
                    <div className="project-contribution">
                      <strong>My contribution</strong>
                      <p>{project.role}</p>
                    </div>
                    <h4>Selected workflows</h4>
                    <ul className="project-features">
                      {project.features.slice(0, 4).map((feature) => <li key={feature}>{feature}</li>)}
                    </ul>
                    <div aria-label="Technology stack" className="tech-pills">
                      {project.stack.map((tool) => <span className="tech-pill" key={tool}>{tool}</span>)}
                    </div>
                    <div className="project-links">
                      <ButtonLink href={`/projects/${project.slug}`} trailingIcon>Read case study</ButtonLink>
                      {project.liveUrl ? <ButtonLink external href={project.liveUrl} trailingIcon variant="secondary">Live project</ButtonLink> : null}
                      {!project.liveUrl && project.githubUrl ? <ButtonLink external href={project.githubUrl} trailingIcon variant="secondary">Repository</ButtonLink> : null}
                    </div>
                    <p className="project-evidence-note">{project.evidenceNote}</p>
                  </div>
                </article>
              </MotionReveal>
            );
          })}
        </div>

        <div className="projects-footer-link">
          <ButtonLink href="#contact" variant="ghost">Have a project in mind? Let&apos;s talk <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></ButtonLink>
          <FolderGit2 aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
