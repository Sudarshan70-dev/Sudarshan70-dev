import { projects } from "@/content/projects";
import { contactConfig, experience, profile, skillGroups, socialLinks } from "@/content/site";

import { AboutSection } from "./about-section";
import { AchievementsSection } from "./achievements-section";
import { ContactSection } from "./contact-section";
import { ExperienceSection } from "./experience-section";
import { Footer } from "./footer";
import { HeroSection } from "./hero-section";
import { ProjectsSection } from "./projects-section";
import { SkillsSection } from "./skills-section";
import { WorkspaceShell } from "./workspace-shell";

export function PortfolioPage() {
  return (
    <WorkspaceShell socialLinks={socialLinks}>
      <main className="pb-8 pt-4">
        <HeroSection links={socialLinks} profile={profile} />
        <AboutSection profile={profile} />
        <SkillsSection groups={skillGroups} />
        <ExperienceSection items={experience} />
        <ProjectsSection projects={projects} />
        <AchievementsSection />
        <ContactSection contact={contactConfig} socialLinks={socialLinks} />
      </main>
      <Footer resumeHref={profile.resumeHref} socialLinks={socialLinks} />
    </WorkspaceShell>
  );
}
