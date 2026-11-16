"use client";

import { BrainCircuit, Boxes, CloudCog, TestTubeDiagonal } from "lucide-react";

import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import type { SkillGroup } from "@/types/content";

const groupIcons = [Boxes, BrainCircuit, CloudCog, TestTubeDiagonal];

export function SkillsSection({ groups }: { groups: SkillGroup[] }) {
  return (
    <section className="section-anchor skills-section" data-section id="skills">
      <div className="section-inner">
        <SectionHeading
          description="Frontend architecture, product UX, cloud services, testing, and delivery tools used across real product work."
          eyebrow="Skills"
          title="Technologies I work with"
        />

        <div className="skill-groups">
          {groups.map((group, index) => {
            const Icon = groupIcons[index % groupIcons.length];
            return (
              <MotionReveal key={group.title} delay={index * 0.035}>
                <article className="section-card skill-group-card">
                  <div className="skill-group-heading">
                    <span aria-hidden="true" className="skill-icon"><Icon className="h-5 w-5" /></span>
                    <div>
                      <p className="skill-subtitle">{group.subtitle}</p>
                      <h3>{group.title}</h3>
                    </div>
                  </div>
                  <p className="skill-proof">{group.proof}</p>
                  <div aria-label={`${group.title} technologies`} className="skill-tags">
                    {group.tools.map((tool) => <span key={tool}>{tool}</span>)}
                  </div>
                  <ul className="skill-outcomes">
                    {group.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}
                  </ul>
                </article>
              </MotionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
