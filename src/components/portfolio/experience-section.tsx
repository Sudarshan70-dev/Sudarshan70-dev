"use client";

import { Building2 } from "lucide-react";

import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import type { ExperienceItem } from "@/types/content";

export function ExperienceSection({ items }: { items: ExperienceItem[] }) {
  return (
    <section className="section-anchor px-4 py-10 sm:px-6 lg:px-10" data-section id="experience">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          description="The experience story is framed as product engineering: shipping operational interfaces, supporting real workflows, and keeping the delivery reliable under production pressure."
          eyebrow="Experience.json"
          title="Experience built around enterprise-style workflows and SaaS delivery."
        />

        <div className="mt-8 space-y-5">
          {items.map((item) => (
            <MotionReveal key={item.company}>
              <article className="section-card rounded-xl p-5 font-mono text-xs sm:p-7 sm:text-sm">
                <div className="flex flex-wrap items-start justify-between gap-4 border-b border-[#3c3c3c] pb-4">
                  <div>
                    <p className="text-slate-500">// Work experience</p>
                    <h3 className="mt-2 flex items-center gap-2 text-lg font-bold text-amber-200 sm:text-xl">
                      <Building2 aria-hidden="true" className="h-4 w-4" />
                      {item.company}
                    </h3>
                    <p className="mt-1 text-cyan-300">{item.role}</p>
                  </div>
                  <span className="rounded border border-[#3c3c3c] bg-[#1e1e1e] px-3 py-1.5 text-emerald-300">
                    {item.duration}
                  </span>
                </div>

                <dl className="mt-4 grid gap-x-6 gap-y-2 sm:grid-cols-2">
                  <div><dt className="inline text-violet-300">location: </dt><dd className="inline text-slate-200">&quot;{item.location}&quot;</dd></div>
                  <div><dt className="inline text-violet-300">role: </dt><dd className="inline text-slate-200">&quot;{item.role}&quot;</dd></div>
                </dl>

                <p className="mt-5 border-l-2 border-[#007acc] pl-3 font-sans text-sm leading-6 text-slate-300">
                  {item.summary}
                </p>

                <ul className="mt-5 list-inside list-disc space-y-2 font-sans text-sm leading-6 text-slate-300 marker:text-cyan-300">
                  {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>

                <div className="mt-5 border-t border-[#3c3c3c] pt-4">
                  <p className="font-mono text-[11px] uppercase tracking-wide text-slate-500">Technologies</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.stack.map((tool) => (
                      <span key={tool} className="rounded border border-[#3c3c3c] bg-[#1e1e1e] px-2.5 py-1 font-mono text-[11px] text-slate-200">
                        {tool}
                      </span>
                    ))}
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
