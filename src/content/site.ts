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
  headline: "Frontend-focused Full-Stack Developer specializing in React.js.",
  roles: ["Full-Stack Developer", "React.js Developer", "Next.js Developer", "Frontend Engineer"],
  intro:
    "I build responsive SaaS interfaces, business dashboards, and web application workflows for product teams.",
  summary:
    "My core frontend stack is React.js, Next.js, and TypeScript, with practical experience integrating REST APIs, Firebase, and cloud functions.",
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
    "I am a Pune-based, frontend-focused full-stack developer. React.js, Next.js, and TypeScript are my strongest areas across SaaS dashboards, business applications, and operational tools.",
    "At Vendekin Technology, I contributed to the VNetra product team across React interfaces, machine onboarding, inventory and planogram workflows, API integrations, testing, and production support.",
    "I also work with Node.js, Firebase, Firestore, and Google Cloud Functions where they support the product scope. I keep my project responsibilities clear and focus on features I can demonstrate.",
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
      description: "Hands-on with Firebase, Firestore, REST integrations, and Google Cloud Functions within product scope.",
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
    subtitle: "API and cloud work that supports the product interface.",
    tools: [
      "Node.js",
      "Firebase",
      "Firestore",
      "Google Cloud Platform",
      "Cloud Functions",
      "REST APIs",
      "Data-backed Workflows",
      "Messaging Service Integration",
      "Google Maps Integration",
      "Payment and Messaging Integrations",
    ],
    outcomes: [
      "REST API and Firebase/Firestore integrations",
      "Cloud Function workflows within product scope",
      "Frontend and service responsibilities defined for each project",
    ],
    focusAreas: ["REST API integration", "Firebase data workflows", "Cloud Functions"],
    proof: "Hands-on with notifications, Firestore data, and Cloud Functions in product workflows.",
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
    role: "Member of Technical Staff / React Developer (Full-time)",
    duration: "Dec 2022 - Sep 2024",
    location: "Pune, Maharashtra",
    summary:
      "Contributed to VNetra, Vendekin's vending management SaaS product, across React interfaces, service integrations, testing, and production support.",
    highlights: [
      "Led frontend feature development for the VNetra Admin Panel, including onboarding, inventory, reporting, and operator workflows.",
      "Implemented reusable React components and responsive interaction patterns for data-heavy admin experiences.",
      "Integrated messaging REST APIs to support product notifications and operational communication.",
      "Worked with Node.js, Firebase/Firestore, and Google Cloud Functions on serverless product workflows.",
      "Authored Selenium automation suites and Mocha JavaScript unit tests, and helped resolve production issues.",
    ],
    stack: ["React.js", "TypeScript", "JavaScript", "Firebase", "Firestore", "Google Cloud Functions", "Selenium", "Mocha", "Git"],
  },
];

export const contactConfig: ContactConfig = {
  email: "sudarshangadekar222@gmail.com",
  phone: "+91 7083589566",
  location: "Pune, Maharashtra, India",
  availability: "Immediate joiner for Full Stack Developer, Product Engineer, and React Developer roles.",
  note:
    "If you are hiring for premium frontend work, admin dashboards, SaaS products, or product-focused full stack roles, I would be glad to connect.",
};
