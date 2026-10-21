export type MotionMode = "full" | "lite" | "reduced";

export type HeroSceneConfig = {
  accent: string;
  secondaryAccent: string;
  glowStrength: number;
  orbitIntensity: number;
  density: "medium" | "high";
};

export type SectionSceneConfig = {
  accent: string;
  depth: number;
  rotationSpeed: number;
};

export type SocialLink = {
  label: string;
  href: string;
  description: string;
  external?: boolean;
};

export type ValuePillar = {
  title: string;
  description: string;
};

export type Profile = {
  name: string;
  headline: string;
  roles: string[];
  intro: string;
  summary: string;
  availability: string;
  experience: string;
  location: string;
  resumeHref: string;
  heroScene: HeroSceneConfig;
  about: string[];
  valuePillars: ValuePillar[];
};

export type SkillGroup = {
  title: string;
  subtitle: string;
  tools: string[];
  outcomes: string[];
  focusAreas: string[];
  proof: string;
  scene: SectionSceneConfig;
};

export type ExperienceItem = {
  company: string;
  role: string;
  duration: string;
  location: string;
  summary: string;
  highlights: string[];
  stack: string[];
};

export type ProjectVisual = {
  eyebrow: string;
  title: string;
  stats: { label: string; value: string }[];
  panels: string[];
};

export type ProjectCaseStudy = {
  slug: string;
  title: string;
  type: string;
  tagline: string;
  summary: string;
  liveUrl?: string;
  githubUrl?: string;
  stack: string[];
  featured: boolean;
  problem: string[];
  solution: string[];
  features: string[];
  architecture: string[];
  challenges: string[];
  impact: string[];
  visuals: ProjectVisual;
  heroScene: SectionSceneConfig;
};

export type ContactConfig = {
  email: string;
  phone: string;
  location: string;
  availability: string;
  note: string;
};
