"use client";

import emailjs from "@emailjs/browser";
import {
  BriefcaseBusiness,
  FolderGit2,
  Mail,
  MapPin,
  PhoneCall,
  Send,
} from "lucide-react";
import { useState, useTransition } from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import OutgoingMailIcon from "@mui/icons-material/OutgoingMail";

import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { buildMailtoLink } from "@/lib/utils";
import type { ContactConfig, SocialLink } from "@/types/content";
import TextField from "@mui/material/TextField";

type SubmissionState = {
  tone: "idle" | "success" | "error";
  message: string;
};

const initialState: SubmissionState = {
  tone: "idle",
  message: "",
};

const initialForm = {
  enquiryType: "Project enquiry",
  name: "",
  email: "",
  message: "",
  website: "", // Honeypot field for basic spam protection
};

const formatWhatsAppEnquiry = ({
  enquiryType,
  name,
  email,
  message,
}: {
  enquiryType: string;
  name: string;
  email: string;
  message: string;
}) =>
  [
    "*New Portfolio Enquiry*",
    `*Topic:* ${enquiryType}`,
    `*Name:* ${name}`,
    `*Email:* ${email}`,
    `*Message:*`,
    message,
  ].join("\n");

export function ContactSection({
  contact,
  socialLinks,
}: {
  contact: ContactConfig;
  socialLinks: SocialLink[];
}) {
  const [form, setForm] = useState(initialForm);
  const [submissionState, setSubmissionState] =
    useState<SubmissionState>(initialState);
  const [isPending, startTransition] = useTransition();

  const cleanPhone = contact.phone.replace(/[^\d+]/g, "");
  const whatsappNumber = contact.phone.replace(/\D/g, "");
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hi Sudarshan, I found your portfolio and would like to discuss a project or role.",
  )}`;

  const onFieldChange = (field: keyof typeof form, value: string) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));

    if (submissionState.tone !== "idle") {
      setSubmissionState(initialState);
    }
  };

  const ENQUIRY_OPTIONS = [
    {
      value: "Project enquiry",
      label: "Project enquiry",
      placeholder:
        "Tell me about your website, SaaS dashboard, timeline, and budget range...",
    },
    {
      value: "Full-time role",
      label: "Full-time role",
      placeholder:
        "Share the role, tech stack, team, and location/remote details...",
    },
    {
      value: "Collaboration or other",
      label: "Collaboration",
      placeholder: "What are you building and how can we work together?",
    },
  ] as const;

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  // Silently ignore bot submissions that fill the hidden honeypot field
  if (form.website.trim()) {
    setForm(initialForm);
    setSubmissionState({
      tone: "success",
      message: "Your message is on its way. Thanks for reaching out.",
    });
    return;
  }

  startTransition(async () => {
    const trimmedName = form.name.trim();
    const trimmedEmail = form.email.trim();
    const trimmedMessage = form.message.trim();
    const enquiryType = form.enquiryType;

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

    const whatsappNumber = contact.phone.replace(/\D/g, "");
    const whatsappBody = formatWhatsAppEnquiry({
      enquiryType,
      name: trimmedName,
      email: trimmedEmail,
      message: trimmedMessage,
    });
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappBody)}`;

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    // Open WhatsApp with all details pre-filled for your number
    if (whatsappNumber) {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    }

    if (!serviceId || !templateId || !publicKey) {
      setForm(initialForm);
      setSubmissionState({
        tone: "success",
        message:
          "Opened WhatsApp with all your details pre-filled. You can also use Email Directly below.",
      });
      return;
    }
  });
};

  return (
    <section
      className="section-anchor contact-section"
      data-section
      id="contact"
    >
      <div className="section-inner">
        <SectionHeading
          description="For a website, SaaS dashboard, or frontend engineering role, share a little context about what you are building."
          eyebrow="Contact"
          title="Ready for frontend, product, and local web project conversations."
        />

        <div className="contact-layout mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <MotionReveal>
            <div className="section-card h-full rounded-[2rem] p-6 sm:p-8">
              <p className="text-sm leading-7 text-slate-300">{contact.note}</p>

              <address className="mt-8 space-y-4 text-sm not-italic text-slate-200">
                <a
                  className="glass-panel flex items-center gap-3 rounded-[1.25rem] px-4 py-4 transition hover:border-cyan-300/24"
                  href={`mailto:${contact.email}`}
                >
                  <Mail
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0 text-cyan-300"
                  />
                  <span className="break-all">{contact.email}</span>
                </a>
                <a
                  className="glass-panel flex items-center gap-3 rounded-[1.25rem] px-4 py-4 transition hover:border-cyan-300/24"
                  href={`tel:${cleanPhone}`}
                >
                  <PhoneCall
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0 text-cyan-300"
                  />
                  <span>{contact.phone}</span>
                </a>
                <div className="glass-panel flex items-start gap-3 rounded-[1.25rem] px-4 py-4">
                  <MapPin
                    aria-hidden="true"
                    className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300"
                  />
                  <div>
                    <p>{contact.location}</p>
                    <p className="mt-1 text-xs text-slate-400">
                      Serving Pune, Chhatrapati Sambhajinagar (Aurangabad) &amp;
                      remote teams across India
                    </p>
                  </div>
                </div>
              </address>

              <div className="mt-8 rounded-[1.5rem] border border-cyan-300/14 bg-cyan-300/8 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100/80">
                  Availability
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-200">
                  {contact.availability}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {socialLinks.map((link) => {
                  const Icon =
                    link.label === "GitHub"
                      ? FolderGit2
                      : link.label === "LinkedIn"
                        ? BriefcaseBusiness
                        : Mail;

                  return (
                    <a
                      key={link.label}
                      aria-label={`${link.label} profile`}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-slate-950/60 text-slate-100 transition hover:border-cyan-300/30 hover:text-cyan-100"
                      href={link.href}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      target={link.external ? "_blank" : undefined}
                    >
                      <Icon aria-hidden="true" className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </MotionReveal>

          <MotionReveal>
            <div className="section-card relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/60 p-6 backdrop-blur-xl sm:p-8">
              {/* Subtle top accent glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent"
              />

              <div className="mb-6 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-white">
                    Send a message
                  </h3>
                  <p className="mt-0.5 text-xs text-slate-400">
                    Usually replies within 24 hours.
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[11px] font-medium text-emerald-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Available now
                </span>
              </div>

              <form className="space-y-5" noValidate onSubmit={handleSubmit}>
                {/* Hidden honeypot field */}
                <div aria-hidden="true" className="hidden">
                  <label htmlFor="contact-website">Website</label>
                  <input
                    autoComplete="off"
                    id="contact-website"
                    name="website"
                    onChange={(event) =>
                      onFieldChange("website", event.target.value)
                    }
                    tabIndex={-1}
                    type="text"
                    value={form.website}
                  />
                </div>

                {/* Modern pill selector instead of native <select> */}
                <div>
                  <span className="mb-2.5 block text-xs font-medium text-slate-400">
                    What can I help you with?
                  </span>
                  <div
                    className="flex flex-wrap gap-2"
                    role="radiogroup"
                    aria-label="Enquiry type"
                  >
                    {ENQUIRY_OPTIONS.map((option) => {
                      const isSelected = form.enquiryType === option.value;
                      return (
                        <button
                          key={option.value}
                          aria-checked={isSelected}
                          className={`rounded-full border px-4 py-2 text-xs font-medium transition-all ${
                            isSelected
                              ? "border-cyan-300/60 bg-cyan-300/15 text-cyan-50 shadow-[0_0_20px_-6px_rgba(103,232,249,0.5)]"
                              : "border-white/10 bg-white/[0.03] text-slate-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                          }`}
                          onClick={() =>
                            onFieldChange("enquiryType", option.value)
                          }
                          role="radio"
                          type="button"
                        >
                          {option.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2-column grid for Name & Email */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <TextField
                    autoComplete="name"
                    className="glass-mui-field"
                    fullWidth
                    id="contact-name"
                    label="Name"
                    name="name"
                    onChange={(event) =>
                      onFieldChange("name", event.target.value)
                    }
                    placeholder="Your name"
                    required
                    value={form.name}
                    variant="outlined"
                  />

                  <TextField
                    autoComplete="email"
                    className="glass-mui-field"
                    fullWidth
                    id="contact-email"
                    label="Email"
                    name="email"
                    onChange={(event) =>
                      onFieldChange("email", event.target.value)
                    }
                    placeholder="you@company.com"
                    required
                    type="email"
                    value={form.email}
                    variant="outlined"
                  />
                </div>

                <TextField
                  className="glass-mui-field"
                  fullWidth
                  id="contact-message"
                  label="Message"
                  minRows={4}
                  // multiline
                  name="message"
                  onChange={(event) =>
                    onFieldChange("message", event.target.value)
                  }
                  placeholder="Tell me about the project scope, timeline, or role."
                  required
                  value={form.message}
                  variant="outlined"
                />
                {/* Primary CTA */}
                <button
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-cyan-300 px-6 py-3.5 text-sm font-semibold text-slate-950 transition-all hover:bg-cyan-200 hover:shadow-[0_0_28px_-6px_rgba(103,232,249,0.65)] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60 mt-4"
                  disabled={isPending}
                  type="submit"
                >
                  <Send
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                  {isPending ? "Sending message..." : "Send Message"}
                </button>

                {/* Feedback Banner */}
                {submissionState.message ? (
                  <p
                    aria-live={
                      submissionState.tone === "error" ? "assertive" : "polite"
                    }
                    className={`rounded-2xl border px-4 py-3 text-sm leading-6 ${
                      submissionState.tone === "success"
                        ? "border-emerald-400/25 bg-emerald-400/10 text-emerald-100"
                        : "border-rose-400/25 bg-rose-400/10 text-rose-100"
                    }`}
                    role={submissionState.tone === "error" ? "alert" : "status"}
                  >
                    {submissionState.message}
                  </p>
                ) : null}

                {/* Secondary Direct Channels */}
                <div className="pt-2">
                  <div className="relative flex items-center py-2">
                    <div className="flex-grow border-t border-white/10" />
                    <span className="mx-3 shrink-0 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500">
                      Or reach out directly
                    </span>
                    <div className="flex-grow border-t border-white/10" />
                  </div>

                  <div className="mt-3 grid grid-cols-2 gap-3">
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-400/20 bg-emerald-400/[0.07] px-4 py-2.5 text-xs font-medium text-emerald-100 transition hover:border-emerald-400/45 hover:bg-emerald-400/15"
                      href={whatsappHref}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <WhatsAppIcon
                        aria-hidden="true"
                        className="h-4 w-4 text-emerald-300"
                      />
                      WhatsApp
                    </a>

                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-xs font-medium text-slate-200 transition hover:border-cyan-300/35 hover:bg-white/[0.07] hover:text-white"
                      href={`mailto:${contact.email}`}
                    >
                      <OutgoingMailIcon
                        aria-hidden="true"
                        className="h-4 w-4 text-cyan-300"
                      />
                      Email Directly
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}
