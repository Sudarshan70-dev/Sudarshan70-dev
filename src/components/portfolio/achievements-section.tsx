"use client";

import { BadgeCheck, BriefcaseBusiness, Handshake, Wrench } from "lucide-react";

import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const signals = [
  {
    title: "Immediate joiner",
    description: "Available to contribute quickly across product surfaces, admin experiences, and SaaS interface work.",
    icon: BadgeCheck,
  },
  {
    title: "Real product exposure",
    description: "Experience goes beyond demo work into operational dashboards, onboarding flows, integrations, and production fixes.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Cross-functional fit",
    description: "Comfortable speaking both interface language and implementation detail with product-minded teams.",
    icon: Handshake,
  },
  {
    title: "Practical engineering depth",
    description: "Comfortable moving between UI polish, responsive systems, backend utilities, and automation reliability.",
    icon: Wrench,
  },
];

export function AchievementsSection() {
  return (
    <section className="section-anchor px-4 py-10 sm:px-6 lg:px-10" data-section id="achievements">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          align="center"
          description="This section keeps space for future recruiter and manager testimonials while still giving clear, honest reasons to trust the work today."
          eyebrow="Signals"
          title="Strong hiring signals without fake proof."
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {signals.map((signal, index) => {
              const Icon = signal.icon;

              return (
                <MotionReveal key={signal.title} delay={index * 0.05}>
                  <div className="section-card perspective-card h-full rounded-[1.75rem] p-5">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/18 bg-cyan-300/10 text-cyan-100">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-white">{signal.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-300">{signal.description}</p>
                  </div>
                </MotionReveal>
              );
            })}
          </div>

          <MotionReveal>
            <div className="section-card rounded-[1.9rem] p-6 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200/80">Future testimonials</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">Reserved for real recommendations.</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                This portfolio intentionally avoids invented quotes. As new recommendations, referrals, or collaboration notes become available, they can plug into this structure without changing the visual system.
              </p>

              <div className="mt-8 grid gap-3">
                <div className="rounded-[1.4rem] border border-dashed border-white/12 bg-slate-950/45 px-4 py-5 text-sm text-slate-400">
                  “Placeholder for recruiter or manager feedback.”
                </div>
                <div className="rounded-[1.4rem] border border-dashed border-white/12 bg-slate-950/45 px-4 py-5 text-sm text-slate-400">
                  “Placeholder for product or team collaboration note.”
                </div>
                <div className="rounded-[1.4rem] border border-dashed border-white/12 bg-slate-950/45 px-4 py-5 text-sm text-slate-400">
                  “Placeholder for delivery or ownership recommendation.”
                </div>
              </div>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
