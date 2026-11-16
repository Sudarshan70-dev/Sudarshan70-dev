import { Award, BriefcaseBusiness, Layers3 } from "lucide-react";

import { ButtonLink } from "@/components/ui/button-link";
import { MotionReveal } from "@/components/ui/motion-reveal";

const milestones = [
  {
    value: "2+",
    label: "Years of experience",
    description: "Shipping product features and operational workflows.",
    Icon: BriefcaseBusiness,
  },
  {
    value: "PROJECTS",
    label: "Featured case studies",
    description: "Professional and independent work, with context and contributions explained.",
    Icon: Award,
  },
  {
    value: "SKILLS",
    label: "Areas of practice",
    description: "Frontend, product UX, cloud, QA, and collaborative delivery.",
    Icon: Layers3,
  },
];

export function AchievementsSection({
  projectCount,
  resumeHref,
  skillAreaCount,
}: {
  projectCount: number;
  resumeHref: string;
  skillAreaCount: number;
}) {
  return (
    <section className="section-anchor achievements-section" data-section id="achievements">
      <div className="section-inner">
        <div className="achievements-heading-row">
          <div className="section-heading">
            <div className="section-label">Achievements</div>
            <h2 className="section-title mt-5 text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">Milestones &amp; strengths</h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              A snapshot of the experience, project work, and skill areas behind my portfolio.
            </p>
          </div>
          <p className="achievements-note">Always learning, building, and growing in technology.</p>
        </div>

        <div className="achievement-cards">
          {milestones.map(({ value, label, description, Icon }, index) => (
            <MotionReveal delay={index * 0.04} key={label}>
              <article className="section-card achievement-card">
                <span className="achievement-icon"><Icon aria-hidden="true" /></span>
                <strong>{value === "PROJECTS" ? projectCount : value === "SKILLS" ? skillAreaCount : value}</strong>
                <h3>{label}</h3>
                <p>{description}</p>
              </article>
            </MotionReveal>
          ))}
        </div>

        <div className="achievement-banner">
          <div>
            <p className="achievement-banner-kicker">Let&apos;s build what&apos;s next</p>
            <h3>Good products start with a clear idea.</h3>
          </div>
          <ButtonLink download href={resumeHref} variant="primary">View my resume</ButtonLink>
        </div>
      </div>
    </section>
  );
}
