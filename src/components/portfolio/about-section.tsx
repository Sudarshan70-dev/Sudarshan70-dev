"use client";

import { Layers3, Rocket, ShieldCheck, Workflow } from "lucide-react";

import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Profile } from "@/types/content";

const pillarIcons = [Workflow, Layers3, ShieldCheck, Rocket];

export function AboutSection({ profile }: { profile: Profile }) {
  return (
    <section className="section-anchor px-4 py-10 sm:px-6 lg:px-10" data-section id="about">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          description="The goal is simple: make teams feel like they are looking at a product engineer who can elevate both interface quality and implementation confidence."
          eyebrow="About"
          title="Designed for product teams, not just portfolio browsers."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <MotionReveal className="section-card rounded-[2rem] p-6 sm:p-8">
            <div className="space-y-5 text-base leading-8 text-slate-300">
              {profile.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </MotionReveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {profile.valuePillars.map((pillar, index) => {
              const Icon = pillarIcons[index % pillarIcons.length];

              return (
                <MotionReveal key={pillar.title} className="h-full" delay={index * 0.05}>
                  <div className="section-card perspective-card h-full rounded-[1.75rem] p-5">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/18 bg-cyan-300/10 text-cyan-100">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-white">{pillar.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-300">{pillar.description}</p>
                  </div>
                </MotionReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
