import type { ProjectCaseStudy } from "@/types/content";

export const projects: ProjectCaseStudy[] = [
  {
    slug: "vnetra-admin-panel",
    title: "VNetra Admin Panel",
    type: "Enterprise SaaS Admin Dashboard",
    tagline: "A workflow-heavy operator console for vending machine onboarding, inventory visibility, planogram control, and reporting.",
    summary:
      "A product surface built for operators and internal teams to manage vending operations with clear workflows, responsive admin UI, and cloud-backed services.",
    stack: ["React.js", "TypeScript", "JavaScript", "Firebase", "Firestore", "Google Cloud Functions", "REST APIs", "Selenium", "Mocha"],
    featured: true,
    problem: [
      "Operators needed a dependable admin workspace to onboard machines, manage inventory, and keep product visibility high.",
      "The product had to support information-dense workflows without feeling slow or confusing for day-to-day users.",
      "Real operations required reliable integrations, reporting visibility, and confidence across frontend and backend flows.",
    ],
    solution: [
      "Built and maintained a responsive admin dashboard focused on machine onboarding, sales operations, and inventory control.",
      "Introduced reusable React patterns for dense forms, management surfaces, and operational UI flows.",
      "Connected the experience with backend services and third-party integrations to keep product actions synchronized and actionable.",
    ],
    features: [
      "Machine onboarding workflows",
      "Inventory and refill management",
      "Planogram management for operators",
      "Reporting-oriented admin views",
      "Notification and integration support",
      "Responsive operator-friendly UI",
    ],
    architecture: [
      "React-based frontend with reusable component patterns",
      "Cloud-backed services via Google Cloud Functions",
      "Firebase and Firestore for data-driven workflows",
      "External integrations for operator communication and service orchestration",
      "Automation coverage across frontend and backend behavior",
    ],
    challenges: [
      "Balancing dense data visibility with a clean operator experience",
      "Keeping onboarding and inventory workflows reliable under real product usage",
      "Maintaining speed and trust while integrating backend services and third-party APIs",
    ],
    impact: [
      "Supported enterprise-style operational workflows in a single admin surface",
      "Improved day-to-day clarity for vending operators managing product stock and machine state",
      "Strengthened delivery confidence through automation-led verification and bug fixing across platforms",
    ],
    visuals: {
      eyebrow: "Operations Suite",
      title: "VNetra surfaces product operations as a premium control room.",
      stats: [
        { label: "Surface", value: "Admin SaaS" },
        { label: "Focus", value: "Inventory + onboarding" },
        { label: "Reliability", value: "Automation-backed" },
      ],
      panels: ["Realtime inventory visibility", "Machine onboarding flow", "Planogram and product controls"],
    },
    heroScene: {
      accent: "#60a5fa",
      depth: 1.3,
      rotationSpeed: 0.18,
    },
  },
  {
    slug: "temple-management-platform",
    title: "Temple Management Platform",
    type: "Multilingual Full Stack Product",
    tagline: "A premium content and donation platform with multilingual UX, admin reporting, and cloud-backed content operations.",
    summary:
      "A full stack web platform designed for trust-driven community engagement, temple information management, donations, reporting, and multilingual access.",
    stack: ["React.js", "JavaScript", "Firebase", "Firestore", "Google Cloud Functions", "Responsive Design", "Google Maps"],
    featured: true,
    problem: [
      "The platform needed to present temple information, donations, updates, and trust activity in a more structured and accessible digital experience.",
      "It had to support multilingual access while staying friendly on mobile and manageable for administrators.",
      "The product also needed reporting, content control, and a trustworthy donation journey.",
    ],
    solution: [
      "Built a modern full stack product experience around content, events, donations, reporting, and multilingual access.",
      "Created reusable frontend architecture for maintainable screens and cloud-backed data handling.",
      "Paired public-facing flows with an admin dashboard for reporting, management, and operational visibility.",
    ],
    features: [
      "Secure donation and payment gateway flow",
      "Temple information and spiritual content management",
      "Events, announcements, and trust activity workflows",
      "Admin analytics and reporting views",
      "Downloadable reports and record management",
      "Multilingual responsive experience",
      "Google Maps-based location guidance",
    ],
    architecture: [
      "React frontend with responsive component architecture",
      "Firebase and Firestore for real-time cloud-backed content management",
      "Google Cloud Functions for backend workflows",
      "Structured admin surfaces for reporting and operational actions",
      "Accessibility-minded mobile-first experience",
    ],
    challenges: [
      "Designing a trust-oriented product flow that felt clear and credible for donations and information access",
      "Supporting multiple content types while keeping the experience simple for visitors and administrators",
      "Balancing performance, responsiveness, and multilingual reach across devices",
    ],
    impact: [
      "Expanded the platform beyond static content into a richer product experience with admin control and reporting",
      "Improved accessibility and reach through multilingual support and mobile responsiveness",
      "Delivered a stronger information architecture for recurring visitors, trust activity, and community engagement",
    ],
    visuals: {
      eyebrow: "Community Platform",
      title: "A polished full stack experience for content, donations, and ongoing trust operations.",
      stats: [
        { label: "Platform", value: "Full stack web app" },
        { label: "Reach", value: "Multilingual" },
        { label: "Core", value: "Content + donations" },
      ],
      panels: ["Donation workflow", "Admin reporting layer", "Multilingual content system"],
    },
    heroScene: {
      accent: "#c084fc",
      depth: 1.1,
      rotationSpeed: 0.14,
    },
    liveUrl:"https://shri-kshetra-machindranath-sanjivani-samadhi-mandir-sawaragaon.web.app/",
    githubUrl:"https://github.com/Sudarshan70-dev/machindranathdevasthan",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
