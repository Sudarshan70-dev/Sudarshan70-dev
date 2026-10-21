import type { ContactConfig, ExperienceItem, Profile, SkillGroup, SocialLink } from "@/types/content";

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/Sudarshan70-dev",
    description: "Code, experiments, and product engineering work.",
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sudarshan-gadekar-21715b256/",
    description: "Professional profile and recruiter-friendly context.",
    external: true,
  },
  {
    label: "Email",
    href: "mailto:sudarshangadekar222@gmail.com",
    description: "Direct reach out for frontend and product roles.",
  },
];

export const profile: Profile = {
  name: "Sudarshan Gadekar",
  headline: "Frontend Engineer crafting premium SaaS interfaces, product surfaces, and resilient React systems.",
  roles: ["Full Stack Developer","React Developer", "Frontend Engineer", "Product Engineer", ],
  intro:
    "I build recruiter-ready user experiences that combine visual polish, product thinking, and reliable implementation.",
  summary:
    "React, TypeScript, Firebase, Google Cloud Functions, and automation testing across SaaS dashboards, admin systems, and real-time web workflows.",
  availability: "Immediate Joiner",
  experience: "2+ years shipping product features and admin workflows.",
  location: "Pune, Maharashtra, India",
  resumeHref: "/documents/sudarshan-gadekar-resume.pdf",
  heroScene: {
    accent: "#6ee7ff",
    secondaryAccent: "#8b5cf6",
    glowStrength: 1.2,
    orbitIntensity: 1,
    density: "high",
  },
  about: [
    "I enjoy translating complex workflows into polished, fast, and trustworthy interfaces. My recent work sits at the intersection of frontend engineering, admin tools, cloud-backed products, and operational UX.",
    "At Vendekin, I worked across the VNetra admin ecosystem: onboarding vending machines, handling inventory workflows, shaping planogram management, and integrating external services that operators depend on every day.",
    "I bring a product mindset to engineering work. That means reusable components, performance-aware implementation, accessible interaction design, and enough testing discipline to keep real production workflows reliable.",
  ],
  valuePillars: [
    {
      title: "Product-first frontend",
      description: "Interfaces designed around operator clarity, business workflows, and conversion-friendly UX.",
    },
    {
      title: "SaaS dashboard depth",
      description: "Comfortable building dense admin surfaces with reporting, onboarding, management, and real-time state.",
    },
    {
      title: "Automation mindset",
      description: "Frontend quality backed by Selenium, Mocha, and an engineering habit of verifying before shipping.",
    },
    {
      title: "Cloud-ready delivery",
      description: "Hands-on with Firebase, Firestore, REST integrations, and Google Cloud Functions for scalable web products.",
    },
  ],
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Architecture",
    subtitle: "The core stack behind premium product surfaces.",
    tools: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Material UI",
      "Responsive Design",
      "Reusable Component Systems",
    ],
    outcomes: [
      "Designing reusable component systems",
      "Building responsive admin workflows",
      "Creating polished interaction states",
    ],
    focusAreas: ["Component architecture", "Responsive UI", "Admin dashboard surfaces"],
    proof: "Applied across VNetra admin workflows, product surfaces, and recruiter-facing frontend delivery.",
    scene: {
      accent: "#60a5fa",
      depth: 1.4,
      rotationSpeed: 0.24,
    },
  },
  {
    title: "Product UI + UX",
    subtitle: "Interaction quality that supports real operator and visitor journeys.",
    tools: [
      "UI/UX Design",
      "Information Architecture",
      "Interaction Design",
      "Accessibility Mindset",
      "Performance Optimization",
      "Multilingual UI",
      "Admin Analytics Surfaces",
      "Workflow-heavy Forms",
    ],
    outcomes: [
      "Cleaner operator journeys",
      "Sharper content hierarchy for users",
      "Better perceived speed and clarity",
    ],
    focusAreas: ["Product thinking", "Interaction polish", "Content-first layouts"],
    proof: "Used in multilingual temple flows, dense admin pages, and SaaS-facing interfaces that require fast comprehension.",
    scene: {
      accent: "#38bdf8",
      depth: 1.3,
      rotationSpeed: 0.16,
    },
  },
  {
    title: "Backend + Cloud",
    subtitle: "Product logic that supports real usage, not just demos.",
    tools: [
      "Node.js",
      "Firebase",
      "Firestore",
      "Google Cloud Platform",
      "Cloud Functions",
      "REST APIs",
      "Real-time Data Workflows",
      "Messaging Service Integration",
      "Google Maps Integration",
      "Secure Backend Utilities",
    ],
    outcomes: [
      "Real-time data-backed experiences",
      "Scalable backend utilities",
      "Reliable integration-driven product flows",
    ],
    focusAreas: ["Cloud services", "API orchestration", "Operational backend flows"],
    proof: "Used for notifications, content handling, machine onboarding, and cloud-backed product workflows.",
    scene: {
      accent: "#8b5cf6",
      depth: 1.15,
      rotationSpeed: 0.18,
    },
  },
  {
    title: "Product Workflows",
    subtitle: "Domain knowledge translated into usable digital operations.",
    tools: [
      "SaaS Admin Dashboards",
      "Inventory Management",
      "Planogram Management",
      "Reporting Workflows",
      "Donation Flows",
      "Content Management",
      "Event + Announcement Systems",
      "Trust Activity Management",
    ],
    outcomes: [
      "Structured day-to-day operations",
      "Better admin clarity for dense tasks",
      "Business-aligned product surfaces",
    ],
    focusAreas: ["Operational UX", "Domain workflows", "Platform thinking"],
    proof: "Shaped both vending-machine management experiences and temple management platform flows.",
    scene: {
      accent: "#a78bfa",
      depth: 1.1,
      rotationSpeed: 0.12,
    },
  },
  {
    title: "QA + Reliability",
    subtitle: "Confidence built into every release cycle.",
    tools: [
      "Selenium",
      "Mocha",
      "Appium",
      "Automation Testing",
      "Regression Coverage",
      "Web + Android QA",
      "Production Bug Fixing",
      "Postman",
    ],
    outcomes: [
      "Automation-led regression coverage",
      "Faster confidence across releases",
      "Practical debugging across web and Android flows",
    ],
    focusAreas: ["Automation coverage", "Regression safety", "Production support"],
    proof: "Combined automated checks with hands-on debugging across frontend, backend, and Android-adjacent workflows.",
    scene: {
      accent: "#22d3ee",
      depth: 1,
      rotationSpeed: 0.12,
    },
  },
  {
    title: "Delivery + Collaboration",
    subtitle: "The team-facing layer that helps shipping stay predictable.",
    tools: [
      "Git",
      "GitHub",
      "Bitbucket",
      "Jira",
      "Agile Delivery",
      "Cross-functional Collaboration",
      "API Integration",
      "Release-minded Iteration",
    ],
    outcomes: [
      "Better collaboration with product-minded teams",
      "Faster iteration across features and fixes",
      "Cleaner shipping rhythm from build to release",
    ],
    focusAreas: ["Team collaboration", "Shipping rhythm", "Release discipline"],
    proof: "Built within agile product teams while balancing features, integrations, testing, and bug-fix ownership.",
    scene: {
      accent: "#f472b6",
      depth: 1.2,
      rotationSpeed: 0.14,
    },
  },
];

export const experience: ExperienceItem[] = [
  {
    company: "Vendekin Technology Pvt Ltd",
    role: "Web Developer, Member of Technical Staff",
    duration: "December 2022 - September 2024",
    location: "Pune, Maharashtra",
    summary:
      "Worked across an enterprise-facing vending machine management SaaS platform, shaping frontend systems, backend integrations, and automation coverage for operational workflows.",
    highlights: [
      "Built and maintained the VNetra Admin Panel used for inventory management, onboarding, reporting, and operator workflows.",
      "Implemented reusable React components and responsive interaction patterns for data-heavy admin experiences.",
      "Integrated third-party APIs such as messaging services to support real-time notifications and smoother operational communication.",
      "Developed Google Cloud Function-backed services for scalable request handling and secure product workflows.",
      "Created Selenium and Mocha automation coverage while also resolving production issues across web and Android touchpoints.",
    ],
    stack: ["React.js", "TypeScript", "JavaScript", "Firebase", "Firestore", "Google Cloud Functions", "Selenium", "Mocha", "Git"],
  },
];

export const contactConfig: ContactConfig = {
  email: "sudarshangadekar222@gmail.com",
  phone: "+91 7083589566",
  location: "Pune, Maharashtra, India",
  availability: "Immediate joiner for Frontend Engineer, Product Engineer, and React roles.",
  note:
    "If you are hiring for premium frontend work, admin dashboards, SaaS products, or product-focused full stack roles, I would be glad to connect.",
};
