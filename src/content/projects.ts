import type { ProjectCaseStudy } from "@/types/content";

export const projects: ProjectCaseStudy[] = [
  {
    slug: "vnetra-admin-panel",
    title: "VNetra Admin Panel",
    type: "Enterprise SaaS Admin Dashboard",
    status: "Professional experience",
    context: "Professional experience at Vendekin Technology Pvt Ltd, from December 2022 to September 2024.",
    role: "Contributed to the VNetra product team across React UI, operator workflows, integrations, test automation, and production support.",
    evidenceNote: "This was employer work. Internal product screenshots, customer details, and proprietary implementation material are not published here.",
    tagline: "Operator workflows for vending machine onboarding, inventory visibility, planogram control, and reporting.",
    summary:
      "A product surface built for operators and internal teams to manage vending operations with responsive admin interfaces and cloud connected services.",
    stack: ["React.js", "TypeScript", "JavaScript", "Firebase", "Firestore", "Google Cloud Functions", "REST APIs", "Selenium", "Mocha"],
    featured: true,
    problem: [
      "Operators needed a dependable admin workspace to onboard machines, manage inventory, and keep product visibility high.",
      "The product had to support information dense workflows for day to day use.",
      "Operations required integrations, reporting visibility, and confidence across frontend and backend flows.",
    ],
    solution: [
      "Contributed to responsive admin workflows focused on machine onboarding, sales operations, and inventory control.",
      "Worked with reusable React patterns for dense forms, management surfaces, and operator tasks.",
      "Supported connected product actions through backend services and third party integrations.",
    ],
    features: [
      "Machine onboarding workflows",
      "Inventory and refill management",
      "Planogram management for operators",
      "Reporting oriented admin views",
      "Notification and integration support",
      "Responsive operator interface",
    ],
    architecture: [
      "React frontend with reusable component patterns",
      "Cloud Functions and Firebase backed workflows",
      "Firestore for data driven product surfaces",
      "External integrations for operator communication and service orchestration",
      "Automation coverage across frontend and backend behavior",
    ],
    challenges: [
      "Balancing data visibility with a clear operator experience",
      "Keeping onboarding and inventory workflows dependable",
      "Supporting product integrations while maintaining a usable interface",
    ],
    impact: [
      "Contributed to operational workflows in a shared admin product",
      "Supported operator work around stock, machine state, and product management",
      "Helped improve delivery confidence through automation and production support",
    ],
  },
  {
    slug: "temple-management-platform",
    title: "Temple Management Platform",
    type: "Multilingual Full Stack Product",
    status: "Contractual project - ongoing",
    context: "Contractual full-stack project for Shri Kshetra Machindranath Sanjivani Samadhi Mandir, begun in April 2026.",
    role: "Built a public facing and administration experience for temple information, donations, events, reporting, and multilingual access.",
    evidenceNote: "The project site and repository are linked below. Confirm the current deployment and feature availability before launch.",
    tagline: "A community platform for temple information, donations, events, and administration.",
    summary:
      "A full stack web platform designed for community engagement, temple information management, donations, reporting, and multilingual access.",
    stack: ["React.js", "JavaScript", "Firebase", "Firestore", "Google Cloud Functions", "Responsive Design", "Google Maps"],
    featured: true,
    problem: [
      "The platform needed to present temple information, donations, updates, and trust activity in a structured digital experience.",
      "It needed to support multilingual access while working well on mobile and remaining manageable for administrators.",
      "The product needed reporting and content controls alongside visitor facing information.",
    ],
    solution: [
      "Built a full stack product experience around content, events, donations, reporting, and multilingual access.",
      "Created reusable frontend architecture for maintainable screens and cloud backed data handling.",
      "Paired public facing flows with an admin experience for reporting and management.",
    ],
    features: [
      "Donation and payment gateway flow",
      "Temple information and content management",
      "Events and announcements",
      "Admin reporting views",
      "Downloadable reports and record management",
      "Multilingual responsive experience",
      "Google Maps based location guidance",
    ],
    architecture: [
      "React frontend with responsive component architecture",
      "Firebase and Firestore for cloud backed content management",
      "Google Cloud Functions for backend workflows",
      "Admin surfaces for reporting and operational actions",
    ],
    challenges: [
      "Designing a clear experience for donations and information access",
      "Supporting multiple content types for visitors and administrators",
      "Balancing performance, responsiveness, and multilingual reach",
    ],
    impact: [
      "Expanded the platform beyond static content into an experience with administration and reporting",
      "Supported reach through multilingual content and responsive layouts",
      "Organized information for visitors and community activity",
    ],
    liveUrl: "https://shri-kshetra-machindranath-sanjivani-samadhi-mandir-sawaragaon.web.app/",
    githubUrl: "https://github.com/Sudarshan70-dev/machindranathdevasthan",
  },
  {
    slug: "rental-property-management",
    title: "Rental Property Management System",
    type: "Next.js and Supabase Application",
    status: "Active independent project",
    context: "Independent project listed as active on the public GitHub profile.",
    role: "Building a property management application for landlords and property managers using Next.js, React, TypeScript, and Supabase.",
    evidenceNote: "The public profile lists this project as active. Repository and application links are provided; confirm current feature scope as implementation changes.",
    tagline: "Property, tenant, and rent history in a data-backed management interface.",
    summary:
      "A property management application intended to help landlords and property managers organize properties, tenants, rental payments, and financial records.",
    stack: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "REST APIs"],
    featured: true,
    problem: [
      "Property, tenant, and rental payment information can be difficult to track across separate records.",
      "The application brings those management tasks into one dashboard-oriented workflow.",
    ],
    solution: [
      "Build a Next.js and React interface for property and tenant management.",
      "Use Supabase and PostgreSQL for application data and authentication workflows.",
      "Organize payment history and dashboard views for recurring management tasks.",
    ],
    features: [
      "User authentication",
      "Property records and CRUD workflows",
      "Tenant management",
      "Payment history",
      "Dashboard analytics",
      "Responsive layouts",
    ],
    architecture: [
      "Next.js and React application",
      "Supabase and PostgreSQL data services",
      "REST API workflows listed in the project stack",
    ],
    challenges: [
      "Keeping property, tenant, and payment records organized as related workflows",
      "Designing a responsive interface for repeated property-management tasks",
    ],
    impact: [
      "The project is active; no verified usage or performance metrics are available.",
    ],
    liveUrl: "https://rental-property-management.vercel.app/",
    githubUrl: "https://github.com/Sudarshan70-dev/Rental-Property-Management",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
