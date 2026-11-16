"use client";

import { Atom, BriefcaseBusiness, Code2, MapPin, Monitor, Rocket, ShieldCheck, Workflow } from "lucide-react";

import { ButtonLink } from "@/components/ui/button-link";
import { MotionReveal } from "@/components/ui/motion-reveal";
import type { Profile } from "@/types/content";

const pillarIcons = [Workflow, Monitor, ShieldCheck, Rocket];

export function AboutSection({ profile }: { profile: Profile }) {
  const experienceYears = profile.experience.match(/\d+\+?/)?.[0] ?? "2+";

  return (
    <section className="section-anchor about-section" data-section id="about">
      <div className="section-inner">
        <div className="about-main">
          <MotionReveal className="about-visual-motion">
            <div aria-hidden="true" className="about-visual">
              <div className="about-visual-spark about-visual-spark--one">&lt;/&gt;</div>
              <div className="about-visual-spark about-visual-spark--two"><Atom /></div>
              <div className="about-laptop">
                <div className="about-laptop-screen">
                  <div className="about-screen-toolbar"><i /><i /><i /></div>
                  <Atom className="about-react-mark" />
                  <div className="about-code-line about-code-line--one" />
                  <div className="about-code-line about-code-line--two" />
                  <div className="about-code-line about-code-line--three" />
                </div>
                <div className="about-laptop-base" />
              </div>
              <span className="about-orbit about-orbit--one" />
              <span className="about-orbit about-orbit--two" />
            </div>
          </MotionReveal>

          <MotionReveal className="about-copy">
            <p className="section-label">About me</p>
            <h2 className="about-title">Passionate developer<br />turning ideas into <span>reality</span></h2>
            <div className="about-bio">
              {profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <ButtonLink href="#experience" variant="primary">Know more about me</ButtonLink>
          </MotionReveal>

          <aside aria-label="Professional highlights" className="about-facts">
            <div className="about-fact">
              <BriefcaseBusiness aria-hidden="true" />
              <p><strong>{experienceYears} Years</strong><span>Professional experience</span></p>
            </div>
            <div className="about-fact">
              <MapPin aria-hidden="true" />
              <p><strong>Pune, India</strong><span>Based in Maharashtra</span></p>
            </div>
            <div className="about-fact">
              <Code2 aria-hidden="true" />
              <p><strong>Full-Stack Developer</strong><span>Frontend-focused product work</span></p>
            </div>
            <div className="about-fact">
              <Atom aria-hidden="true" />
              <p><strong>React.js</strong><span>Core frontend specialty</span></p>
            </div>
          </aside>
        </div>

        <div className="about-pillars">
          {profile.valuePillars.map((pillar, index) => {
            const Icon = pillarIcons[index % pillarIcons.length];
            return (
              <MotionReveal key={pillar.title} delay={index * 0.04}>
                <article className="about-pillar">
                  <Icon aria-hidden="true" />
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                </article>
              </MotionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
