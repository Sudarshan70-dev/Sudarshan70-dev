"use client";

import { Building2, MapPin } from "lucide-react";

import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import type { ExperienceItem } from "@/types/content";

export function ExperienceSection({ items }: { items: ExperienceItem[] }) {
  return (
    <section className="section-anchor experience-section" data-section id="experience">
      <div className="section-inner experience-layout">
        <div className="experience-intro">
          <SectionHeading
            description="At Vendekin Technology, I contributed to the VNetra product team across React interfaces, operator workflows, integrations, test automation, and production support."
            eyebrow="Experience"
            title="My professional journey"
          />
          <p className="experience-caption">Learning, building, and growing with every product release.</p>
        </div>

        <div className="experience-timeline">
          {items.map((item) => (
            <MotionReveal key={item.company}>
              <article className="section-card experience-card">
                <div className="experience-marker" aria-hidden="true" />
                <div className="experience-header">
                  <div>
                    <h3 className="experience-company"><Building2 aria-hidden="true" />{item.company}</h3>
                    <p className="experience-role">{item.role}</p>
                  </div>
                  <span className="experience-duration">{item.duration}</span>
                </div>

                <div className="experience-location"><MapPin aria-hidden="true" />{item.location}</div>
                <p className="experience-summary">{item.summary}</p>
                <ul className="experience-highlights">
                  {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>

                <div className="experience-stack">
                  <p className="experience-stack-label">Technologies</p>
                  <div className="tech-pills">
                    {item.stack.map((tool) => <span className="tech-pill" key={tool}>{tool}</span>)}
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
