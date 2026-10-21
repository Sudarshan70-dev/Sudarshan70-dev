"use client";

import emailjs from "@emailjs/browser";
import { BriefcaseBusiness, FolderGit2, Mail, MapPin, PhoneCall, Send } from "lucide-react";
import { useState, useTransition } from "react";

import { ButtonLink } from "@/components/ui/button-link";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { buildMailtoLink } from "@/lib/utils";
import type { ContactConfig, SocialLink } from "@/types/content";

type SubmissionState = {
  tone: "idle" | "success" | "error";
  message: string;
};

const initialState: SubmissionState = {
  tone: "idle",
  message: "",
};

export function ContactSection({
  contact,
  socialLinks,
}: {
  contact: ContactConfig;
  socialLinks: SocialLink[];
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submissionState, setSubmissionState] = useState<SubmissionState>(initialState);
  const [isPending, startTransition] = useTransition();

  const onFieldChange = (field: keyof typeof form, value: string) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    startTransition(async () => {
      const trimmedName = form.name.trim();
      const trimmedEmail = form.email.trim();
      const trimmedMessage = form.message.trim();

      if (!trimmedName || !trimmedEmail || !trimmedMessage) {
        setSubmissionState({
          tone: "error",
          message: "Please fill in your name, email, and message so I know how to respond.",
        });
        return;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailPattern.test(trimmedEmail)) {
        setSubmissionState({
          tone: "error",
          message: "Please add a valid email address before sending the message.",
        });
        return;
      }

      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        window.location.href = buildMailtoLink(
          contact.email,
          `Portfolio enquiry from ${trimmedName}`,
          `${trimmedMessage}\n\nFrom: ${trimmedName}\nReply to: ${trimmedEmail}`,
        );

        setSubmissionState({
          tone: "success",
          message: "EmailJS is not configured yet, so your default email app has been opened instead.",
        });
        return;
      }

      try {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: trimmedName,
            from_email: trimmedEmail,
            message: trimmedMessage,
          },
          publicKey,
        );

        setForm({
          name: "",
          email: "",
          message: "",
        });
        setSubmissionState({
          tone: "success",
          message: "Your message is on its way. Thanks for reaching out.",
        });
      } catch (error) {
        console.error(error);
        setSubmissionState({
          tone: "error",
          message: "Something blocked the send flow. Please use the direct email link below and I will get back to you.",
        });
      }
    });
  };

  return (
    <section className="section-anchor px-4 py-10 sm:px-6 lg:px-10" data-section id="contact">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          description="The portfolio ends with a clean conversion path: direct reach out, recruiter-friendly details, and a form that still works even when EmailJS is not configured."
          eyebrow="Contact"
          title="Ready for frontend, product, and SaaS-focused conversations."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <MotionReveal>
            <div className="section-card h-full rounded-[2rem] p-6 sm:p-8">
              <p className="text-sm leading-7 text-slate-300">{contact.note}</p>

              <div className="mt-8 space-y-4 text-sm text-slate-200">
                <a
                  className="glass-panel flex items-center gap-3 rounded-[1.25rem] px-4 py-4 transition hover:border-cyan-300/24"
                  href={`mailto:${contact.email}`}
                >
                  <Mail className="h-4 w-4 text-cyan-300" />
                  <span>{contact.email}</span>
                </a>
                <a
                  className="glass-panel flex items-center gap-3 rounded-[1.25rem] px-4 py-4 transition hover:border-cyan-300/24"
                  href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                >
                  <PhoneCall className="h-4 w-4 text-cyan-300" />
                  <span>{contact.phone}</span>
                </a>
                <div className="glass-panel flex items-center gap-3 rounded-[1.25rem] px-4 py-4">
                  <MapPin className="h-4 w-4 text-cyan-300" />
                  <span>{contact.location}</span>
                </div>
              </div>

              <div className="mt-8 rounded-[1.5rem] border border-cyan-300/14 bg-cyan-300/8 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100/80">Availability</p>
                <p className="mt-2 text-sm leading-6 text-slate-200">{contact.availability}</p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {socialLinks.map((link) => {
                  const Icon =
                    link.label === "GitHub" ? FolderGit2 : link.label === "LinkedIn" ? BriefcaseBusiness : Mail;

                  return (
                    <a
                      key={link.label}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-slate-950/60 text-slate-100 transition hover:border-cyan-300/30 hover:text-cyan-100"
                      href={link.href}
                      rel={link.external ? "noreferrer" : undefined}
                      target={link.external ? "_blank" : undefined}
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </MotionReveal>

          <MotionReveal>
            <div className="section-card rounded-[2rem] p-6 sm:p-8">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="input-shell rounded-[1.3rem] px-4 py-3">
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                    Name
                  </label>
                  <input
                    className="input-field"
                    name="name"
                    onChange={(event) => onFieldChange("name", event.target.value)}
                    placeholder="Your name"
                    value={form.name}
                  />
                </div>
                <div className="input-shell rounded-[1.3rem] px-4 py-3">
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                    Email
                  </label>
                  <input
                    className="input-field"
                    name="email"
                    onChange={(event) => onFieldChange("email", event.target.value)}
                    placeholder="you@company.com"
                    type="email"
                    value={form.email}
                  />
                </div>
                <div className="input-shell rounded-[1.3rem] px-4 py-3">
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                    Message
                  </label>
                  <textarea
                    className="input-field min-h-36 resize-none"
                    name="message"
                    onChange={(event) => onFieldChange("message", event.target.value)}
                    placeholder="Tell me about the role, product, or project context."
                    value={form.message}
                  />
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-300/35 bg-cyan-300/12 px-5 py-3 text-sm font-semibold text-cyan-50 transition hover:border-cyan-200/70 hover:bg-cyan-300/18 disabled:cursor-not-allowed disabled:opacity-70"
                    disabled={isPending}
                    type="submit"
                  >
                    <Send className="h-4 w-4" />
                    {isPending ? "Sending..." : "Send Message"}
                  </button>
                  <ButtonLink href={`mailto:${contact.email}`} variant="secondary">
                    Email Directly
                  </ButtonLink>
                </div>

                {submissionState.message ? (
                  <p
                    className={`rounded-[1.2rem] border px-4 py-3 text-sm leading-6 ${
                      submissionState.tone === "success"
                        ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-100"
                        : "border-rose-400/20 bg-rose-400/10 text-rose-100"
                    }`}
                  >
                    {submissionState.message}
                  </p>
                ) : null}
              </form>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
