"use client";

import { BrainCircuit, Boxes, CloudCog, TestTubeDiagonal } from "lucide-react";

import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import type { SkillGroup } from "@/types/content";

const groupIcons = [Boxes, CloudCog, TestTubeDiagonal, BrainCircuit];

export function SkillsSection({ groups }: { groups: SkillGroup[] }) {
  const overview = groups.map((group) => ({
    title: group.title,
    tools: group.tools.slice(0, 4),
  }));

  return (
    <section className="section-anchor px-4 py-10 sm:px-6 lg:px-10" data-section id="skills">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          description="A practical mix of frontend architecture, product UX, cloud services, and testing tools applied across operational web products."
          eyebrow="Skills"
          title="The tools behind the product work."
        />

        <div className="mt-8 grid gap-5 xl:grid-cols-[0.75fr_1.25fr]">
          <MotionReveal>
            <div className="section-card h-full rounded-2xl p-5 sm:p-6">
              <div className="flex items-center justify-between border-b border-[#3c3c3c] pb-3 font-mono text-xs text-slate-400">
                <span>StackSnapshot.ts</span>
                <span className="text-slate-600">UTF-8</span>
              </div>
              <div className="mt-4 space-y-2 font-mono text-xs leading-6 sm:text-sm">
                <p><span className="mr-4 text-slate-600">1</span><span className="text-pink-300">const</span> skills = {'{'}</p>
                {overview.map((group, index) => (
                  <div className="pl-4" key={group.title}>
                    <p><span className="mr-4 text-slate-600">{index * 3 + 2}</span><span className="text-cyan-200">&quot;{group.title}&quot;</span>: [</p>
                    <p><span className="mr-4 text-slate-600">{index * 3 + 3}</span><span className="pl-5 text-amber-200">{group.tools.map((tool) => `"${tool}"`).join(", ")}</span></p>
                    <p><span className="mr-4 text-slate-600">{index * 3 + 4}</span><span className="pl-4 text-slate-400">]{index === overview.length - 1 ? "" : ","}</span></p>
                  </div>
                ))}
                <p><span className="mr-4 text-slate-600">{overview.length * 3 + 2}</span>{'}'};</p>
              </div>
            </div>
          </MotionReveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {groups.map((group, index) => {
              const Icon = groupIcons[index % groupIcons.length];
              return (
                <MotionReveal key={group.title} delay={index * 0.04}>
                  <article className="section-card h-full rounded-2xl p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-cyan-200/80">{group.subtitle}</p>
                        <h3 className="mt-2 text-lg font-semibold text-white">{group.title}</h3>
                      </div>
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#3c3c3c] bg-[#1e1e1e] text-cyan-200">
                        <Icon aria-hidden="true" className="h-5 w-5" />
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-slate-400">{group.proof}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {group.tools.map((tool) => (
                        <span key={tool} className="rounded border border-white/10 bg-[#1e1e1e] px-2.5 py-1 font-mono text-[11px] text-slate-200">
                          {tool}
                        </span>
                      ))}
                    </div>
                    <ul className="mt-4 list-inside list-disc space-y-2 border-t border-[#3c3c3c] pt-4 text-sm leading-6 text-slate-300 marker:text-cyan-300">
                      {group.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}
                    </ul>
                  </article>
                </MotionReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
