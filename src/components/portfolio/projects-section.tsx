
"use client";

import {
  ArrowUpRight,
  BarChart3,
  Building2,
  FolderGit2,
  MapPin,
} from "lucide-react";
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

function getProjectIcon(slug: string) {
  if (slug === "vnetra-admin-panel") return BarChart3;
  if (slug === "temple-management-platform") return MapPin;

  return Building2;
}

export function ProjectsSection({
  projects,
}: {
  projects: ProjectCaseStudy[];
}) {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All");

  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  const visibleProjects = featuredProjects.filter(
    (project) =>
      activeFilter === "All" ||
      getCategory(project.status) === activeFilter
  );

  // SEO structured data
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Featured Web Development Projects by Sudarshan Gadekar",
    description:
      "Selected React.js, Next.js and full-stack web development projects, including SaaS dashboards, business applications and management platforms.",
    numberOfItems: featuredProjects.length,
    itemListElement: featuredProjects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: project.title,
        description: project.summary,
        url: `https://sudarshan70-dev-portfolio.vercel.app/projects/${project.slug}`,
        creator: {
          "@type": "Person",
          name: "Sudarshan Gadekar",
          url: "https://sudarshan70-dev-portfolio.vercel.app/",
        },
        keywords: project.stack.join(", "),
        ...(project.liveUrl
          ? { sameAs: project.liveUrl }
          : {}),
        ...(project.githubUrl
          ? {
              subjectOf: {
                "@type": "CreativeWork",
                url: project.githubUrl,
              },
            }
          : {}),
      },
    })),
  };

  return (
    <section
      className="section-anchor projects-section"
      data-section
      id="projects"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(projectSchema).replace(/</g, "\\u003c"),
        }}
      />

      <div className="projects-ambient" aria-hidden="true">
        <span className="projects-glow projects-glow--one" />
        <span className="projects-glow projects-glow--two" />
        <span className="projects-grid-overlay" />
      </div>

      <div className="section-inner">
        <MotionReveal>
          <div className="projects-heading-row">
            <SectionHeading
              eyebrow="SELECTED WORK & CASE STUDIES"
              title="Featured Web Development Projects"
              description="Explore real-world applications, SaaS platforms and business solutions built with React.js, Next.js, TypeScript and modern web technologies."
            />

            <div
              aria-label="Filter projects"
              className="project-filters"
              role="group"
            >
              {filters.map((filter) => (
                <button
                  aria-pressed={activeFilter === filter}
                  className={
                    activeFilter === filter ? "is-active" : undefined
                  }
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  type="button"
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </MotionReveal>

        <div
          aria-live="polite"
          className="projects-result-count"
        >
          Showing <strong>{visibleProjects.length}</strong> of{" "}
          <strong>{featuredProjects.length}</strong> featured projects
        </div>

        {visibleProjects.length > 0 ? (
          <div className="project-cards">
            {visibleProjects.map((project, index) => {
              const VisualIcon = getProjectIcon(project.slug);

              return (
                <MotionReveal
                  key={project.slug}
                  delay={index * 0.06}
                >
                  <article
                    className={`section-card project-card project-card--${project.slug}`}
                  >
                    <div
                      aria-hidden="true"
                      className="project-art"
                    >
                      <span className="project-art-orbit project-art-orbit--one" />
                      <span className="project-art-orbit project-art-orbit--two" />

                      <div className="project-art-glow" />

                      <VisualIcon className="project-art-icon" />

                      <div className="project-art-bars">
                        <i />
                        <i />
                        <i />
                        <i />
                        <i />
                        <i />
                      </div>

                      <div className="project-art-caption">
                        {project.type}
                      </div>

                      <span className="project-art-number">
                        PROJECT / {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="project-card-body">
                      <div className="project-meta">
                        <span className="project-status">
                          {project.status}
                        </span>

                        <span className="project-kind">
                          {getCategory(project.status)}
                        </span>
                      </div>

                      <h3>{project.title}</h3>

                      <p className="project-tagline">
                        {project.tagline}
                      </p>

                      <p className="project-summary">
                        {project.summary}
                      </p>

                      <div className="project-contribution">
                        <strong>MY CONTRIBUTION</strong>
                        <p>{project.role}</p>
                      </div>

                      <h4>Key Features & Workflows</h4>

                      <ul className="project-features">
                        {project.features.slice(0, 4).map((feature) => (
                          <li key={feature}>{feature}</li>
                        ))}
                      </ul>

                      <div
                        aria-label="Technology stack"
                        className="tech-pills"
                      >
                        {project.stack.map((tool) => (
                          <span className="tech-pill" key={tool}>
                            {tool}
                          </span>
                        ))}
                      </div>

                      <div className="project-links">
                        <ButtonLink
                          href={`/projects/${project.slug}`}
                          trailingIcon
                        >
                          Explore Case Study
                        </ButtonLink>

                        {project.liveUrl ? (
                          <ButtonLink
                            external
                            href={project.liveUrl}
                            trailingIcon
                            variant="secondary"
                          >
                            Live Project
                          </ButtonLink>
                        ) : project.githubUrl ? (
                          <ButtonLink
                            external
                            href={project.githubUrl}
                            trailingIcon
                            variant="secondary"
                          >
                            Repository
                          </ButtonLink>
                        ) : null}
                      </div>

                      <p className="project-evidence-note">
                        {project.evidenceNote}
                      </p>
                    </div>
                  </article>
                </MotionReveal>
              );
            })}
          </div>
        ) : (
          <div className="projects-empty-state">
            <FolderGit2 aria-hidden="true" />
            <h3>No projects in this category yet</h3>
            <p>
              Explore all featured projects to see more of my development work.
            </p>
            <button
              type="button"
              onClick={() => setActiveFilter("All")}
            >
              View all projects
              <ArrowUpRight size={15} />
            </button>
          </div>
        )}

        <MotionReveal delay={0.15}>
          <div className="projects-footer achievement-banner">
            <div>
              <span className="projects-footer-label">
                HAVE A PROJECT IN MIND?
              </span>
              <h3>{"Let's build something meaningful."}</h3>
              <p>
                {"Have an idea for a website, SaaS product or business application? Let's discuss how to bring it to life."}
              </p>
            </div>

            <ButtonLink href="#contact" variant="secondary">
              Start a Project
              <ArrowUpRight
                aria-hidden="true"
                className="ml-2 inline-block"
                size={16}
              />
            </ButtonLink>
          </div>
        </MotionReveal>

        <p className="projects-note">
          These projects demonstrate practical experience in frontend
          engineering, full-stack application development, API integration,
          cloud services, responsive UI and production-focused workflows.
        </p>
      </div>
    </section>
  );
}
