import { ButtonLink } from "@/components/ui/button-link";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const services = [
  {
    title: "React.js and Next.js product development",
    description:
      "Build or improve responsive product interfaces and frontend workflows in an existing application or a new web product.",
    details: ["React and Next.js features", "Responsive UI and interaction states", "TypeScript component work"],
  },
  {
    title: "SaaS dashboards and admin tools",
    description:
      "Make operator and management workflows easier to use, from onboarding and inventory interfaces to data views and forms.",
    details: ["Admin and operator workflows", "Tables, forms, and reporting views", "REST API and Firebase integrations"],
  },
  {
    title: "API and cloud integrations",
    description:
      "Connect product interfaces to existing services and data workflows, with responsibilities agreed as part of each project scope.",
    details: ["REST API integrations", "Firebase and Firestore workflows", "Google Cloud Functions"],
  },
  {
    title: "Product improvements and quality",
    description:
      "Improve existing React applications through focused feature work, responsive refinements, bug fixes, and practical regression checks.",
    details: ["Feature and maintenance work", "Responsive behavior and UI fixes", "Selenium and Mocha automation"],
  },
];

export function ServicesSection() {
  return (
    <section className="section-anchor px-4 py-10 sm:px-6 lg:px-10" data-section id="services">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          description="I work directly with product teams on scoped frontend and web application work. We can agree on the goals, responsibilities, and integration needs before implementation starts."
          eyebrow="How I can contribute"
          title="Product-focused web development"
        />

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {services.map((service, index) => (
            <MotionReveal delay={index * 0.05} key={service.title}>
              <article className="section-card h-full rounded-xl p-5 sm:p-6">
                <p className="font-mono text-xs text-cyan-300">0{index + 1} // Service</p>
                <h3 className="mt-4 text-xl font-bold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{service.description}</p>
                <ul className="mt-5 grid gap-2 text-sm text-slate-300 sm:grid-cols-2">
                  {service.details.map((detail) => <li key={detail}>• {detail}</li>)}
                </ul>
                <ButtonLink className="mt-6" href="#contact" variant="secondary">
                  Discuss a project
                </ButtonLink>
              </article>
            </MotionReveal>
          ))}
        </div>
        <p className="mt-6 text-sm leading-6 text-slate-400">
          My integration experience includes REST APIs, Firebase, Firestore, and Google Cloud Functions. Backend responsibilities are agreed as part of each project scope.
        </p>
      </div>
    </section>
  );
}
