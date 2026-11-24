import { projects } from "@/content/projects";
import { contactConfig, experience, profile, skillGroups, socialLinks } from "@/content/site";

import { AboutSection } from "./about-section";
import { AchievementsSection } from "./achievements-section";
import { ContactSection } from "./contact-section";
import { ExperienceSection } from "./experience-section";
import { Footer } from "./footer";
import { HeroSection } from "./hero-section";
import { ProjectsSection } from "./projects-section";
import { ServicesSection } from "./services-section";
import { SiteHeader } from "./site-header";
import { SkillsSection } from "./skills-section";

export function PortfolioPage() {
  return (
    <div className="portfolio-app">
      <div aria-hidden="true" className="ambient-field">
        <span className="ambient-orb ambient-orb--cyan" />
        <span className="ambient-orb ambient-orb--violet" />
        <span className="ambient-starfield" />
      </div>
      <div className="portfolio-frame">
        <SiteHeader resumeHref={profile.resumeHref} />
        <main className="portfolio-main">
          <HeroSection links={socialLinks} profile={profile} projectCount={projects.length} />
          <AboutSection profile={profile} />
          <ServicesSection />
          <ProjectsSection projects={projects} />
          <ExperienceSection items={experience} />
          <SkillsSection groups={skillGroups} />
          <AchievementsSection projectCount={projects.length} resumeHref={profile.resumeHref} skillAreaCount={skillGroups.length} />
          <ContactSection contact={contactConfig} socialLinks={socialLinks} />
        </main>
        <Footer contact={contactConfig} socialLinks={socialLinks} />
      </div>
    </div>
  );
}
