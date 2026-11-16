import { Code2,  ShieldCheck,PanelsTopLeft,
  LayoutDashboard,
  ShoppingCart,
  PlugZap,
  BadgeCheck,
  Gauge, ArrowDownRight,
  } from "lucide-react";

import { ButtonLink } from "@/components/ui/button-link";
import { MotionReveal } from "@/components/ui/motion-reveal";
import { SectionHeading } from "@/components/ui/section-heading";



import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development Services | React.js & Next.js Developer",
  description:
    "Explore React.js, Next.js and full-stack web development services. Custom websites, SaaS applications, admin dashboards, API integrations and website optimization.",
  alternates: {
    canonical: "https://sudarshan70-dev-portfolio.vercel.app/#services",
  },
  openGraph: {
    description:
      "Custom websites, SaaS applications, dashboards and full-stack development solutions.",
    url: "https://sudarshan70-dev-portfolio.vercel.app/#services",
    type: "website",
  },
};


export const services = [
   {
    number: "01 /",
    title: "Custom Websites & Landing Pages",
    subtitle: "Modern websites that convert",
    description:
      "Build fast, mobile-first websites and landing pages using React and Next.js, combining attractive UI/UX, responsive experiences, and search-engine-friendly architecture to turn visitors into customers.",
    icon: Code2,
    details: [
      "React.js & Next.js development",
      "Custom UI/UX & responsive design",
      "Technical SEO & Core Web Vitals",
      "Lead capture & WhatsApp integrations",
    ],
    pricingNote: "Starting at ₹15,000 • 5–10 day delivery",
    serviceType: "Website Development",
  },
  {
    number: "02 /",
    title: "SaaS MVP & Full-Stack Web Applications",
    subtitle: "From idea to launch-ready product",
    description:
      "Transform your business idea into a functional web application with scalable frontend architecture, authentication, database integration, API connectivity, and cloud-powered workflows.",
    icon: PanelsTopLeft,
    details: [
      "React, Next.js & TypeScript",
      "Authentication & role-based access",
      "Firebase, Firestore & REST APIs",
      "Payment gateway integration",
    ],
    pricingNote: "Custom scope • 4–8 weeks",
    serviceType: "Full-Stack Web Application Development",
  },
  {
    number: "03 /",
    title: "Custom Admin Panels, CRM & SaaS Dashboards",
    subtitle: "Simplify complex business operations",
    description:
      "Replace manual spreadsheets and disconnected workflows with tailored admin panels, CRM portals, operator dashboards, inventory management, and real-time reporting systems.",
    icon: LayoutDashboard,
    details: [
      "Admin & operator workflows",
      "Real-time data tables, forms & analytics",
      "Inventory & user management",
      "Firebase / Firestore integrations",
    ],
    pricingNote: "Tailored to workflow complexity",
    serviceType: "Dashboard and CRM Development",
  },
  {
    number: "04 /",
    title: "E-Commerce Storefronts",
    subtitle: "Turn products into online sales",
    description:
      "Create high-performance online stores with attractive product catalogs, smooth shopping experiences, secure checkout, and automated order and inventory management.",
    icon: ShoppingCart,
    details: [
      "Custom React / Next.js storefronts",
      "Product catalog & shopping cart",
      "Razorpay / payment gateway setup",
      "Order & inventory management",
    ],
    pricingNote: "Starting at ₹20,000",
    serviceType:"E-Commerce Development",
  },
  {
    number: "05 /",
    title: "API, Payment & Cloud Integrations",
    subtitle: "Connect your digital ecosystem",
    description:
      "Connect your web applications with third-party platforms, payment gateways, messaging services, databases, and serverless cloud infrastructure for reliable business workflows.",
    icon: PlugZap,
    details: [
      "REST API integrations",
      "Firebase & Firestore workflows",
      "Google Cloud Functions",
      "Razorpay, MSG91 & third-party services",
    ],
    pricingNote: "Based on integrations & scope",
    serviceType: "API & Cloud Integration",
  },
  {
    number: "06 /",
    title: "Website Speed & SEO Optimization",
    subtitle: "Faster experiences, better visibility",
    description:
      "Improve existing websites with performance optimization, technical SEO, responsive refinements, and Core Web Vitals improvements to deliver better user experiences.",
    icon: Gauge,
    details: [
      "Core Web Vitals optimization",
      "Next.js performance improvements",
      "Technical SEO & indexing improvements",
      "Responsive UI & rendering fixes",
    ],
    pricingNote: "One-time audit or improvement package",
    serviceType:"Website Performance and SEO Optimization",
  },
  {
    number: "07 /",
    title: "Application Maintenance & Support",
    subtitle: "Keep your product running smoothly",
    description:
      "Maintain and improve existing applications through bug fixes, feature enhancements, dependency updates, responsive refinements, and ongoing technical support.",
    icon: ShieldCheck,
    details: [
      "React / Next.js bug fixes",
      "Feature enhancements & refactoring",
      "Dependency & application updates",
      "Monthly maintenance support",
    ],
    pricingNote: "One-time fixes or monthly retainer",
    serviceType: "Website Maintenance",
  },
  {
    number: "08 /",
    title: "Automated Testing & Quality Assurance",
    subtitle: "Build confidence in every release",
    description:
      "Improve application reliability with practical automated testing, regression checks, and quality-focused workflows that help identify issues before they reach production.",
    icon: BadgeCheck,
    details: [
      "Selenium automation testing",
      "Mocha JavaScript unit testing",
      "Regression & functional checks",
      "Bug identification & verification",
    ],
    pricingNote: "Based on application size & test coverage",
    serviceType: "Automated Testing and Quality Assurance",
  },
];



const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Web Development Services by Sudarshan Gadekar",
  "description":
    "Professional React.js, Next.js and full-stack web development services.",
  "numberOfItems": services.length,
  "itemListElement": services.map((service, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "item": {
      "@type": "Service",
      "name": service.title,
      "description": service.description,
      "serviceType": service.serviceType,
      "provider": {
        "@type": "Person",
        "name": "Sudarshan Gadekar",
        "url": "https://sudarshan70-dev-portfolio.vercel.app/"
      }
    }
  }))
};




export function ServicesSection() {
  return (
    <section className="section-anchor services-section" data-section id="services">
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c"),
  }}
/>
<div className="services-particles" aria-hidden="true">
  {Array.from({ length: 18 }, (_, i) => (
    <span
      key={i}
      className="service-particle"
      style={{
        "--particle-x": `${(i * 37 + 11) % 100}%`,
        "--particle-y": `${(i * 53 + 7) % 100}%`,
        "--particle-delay": `${(i % 6) * -1.3}s`,
        "--particle-duration": `${7 + (i % 5) * 2}s`,
      } as React.CSSProperties}
    />
  ))}
</div>

      <div className="section-inner">
        <SectionHeading
          eyebrow="WHAT I CAN BUILD FOR YOU"
            title="Services & Solutions"
            description="From modern frontend experiences to complete web applications, I help businesses build, improve, and scale digital products."
            align="center"
        />

        <div className="service-cards mt-8 grid gap-5 lg:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
            <MotionReveal delay={index * 0.05} key={service.title}>
              <article className="section-card service-card h-full rounded-xl p-5 sm:p-6">
                <span className="service-icon"><Icon aria-hidden="true" /></span>
                <p className="service-index">Service {String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-4 text-xl font-bold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{service.description}</p>
                <ul className="service-details mt-5 grid gap-2 text-sm text-slate-300 sm:grid-cols-2">
                  {service.details.map((detail) => <li key={detail}>{detail}</li>)}
                </ul>
                <ButtonLink className="mt-6" href="#contact" variant="secondary">
                  Discuss a project
                </ButtonLink>
              </article>
            </MotionReveal>
            );
          })}
        </div>
        <MotionReveal  delay={0.2}>
          <div className="services-bottom mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl p-6 text-center sm:flex-row sm:text-left achievement-banner ">
            <div className="flex items-center gap-4">
              {/* <div className="services-bottom-icon">
                <Sparkles size={23} />
              </div> */}

              <div>
                <h3 className="font-semibold text-white">
                  Have a different idea in mind?
                </h3>
                <p className="mt-1 text-sm text-slate-400">
                  {"Let's discuss your requirements and find the right solution."}
                </p>
              </div>
            </div>

            <ButtonLink href="#contact" variant="secondary">
              {"Let's work together"}
              <ArrowDownRight
                size={16}
                className="ml-2 inline-block"
              />
            </ButtonLink>
          </div>
        </MotionReveal>

         <p className="services-note mt-7 text-center text-xs leading-6 text-slate-500">
          My core expertise is frontend and web application development,
          supported by practical experience with APIs, Firebase, Firestore,
          Google Cloud Functions, and automated testing. Project scope and
          backend responsibilities are agreed before development.
        </p>
      </div>
    </section>
  );
}
