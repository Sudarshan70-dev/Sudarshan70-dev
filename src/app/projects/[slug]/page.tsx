import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProjectCaseStudyPage } from "@/components/portfolio/project-case-study-page";
import { getProjectBySlug, projects } from "@/content/projects";
import { siteUrl } from "@/lib/site-config";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} Case Study`,
    description: project.summary,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | Case Study`,
      description: project.summary,
      url: `/projects/${project.slug}`,
      images: [{ url: "/hero-photo.jpg", alt: "Sudarshan Gadekar, Full Stack Developer" }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Case Study`,
      description: project.summary,
      images: ["/hero-photo.jpg"],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    url: `${siteUrl}/projects/${project.slug}`,
    creator: { "@id": `${siteUrl}/#person` },
    keywords: project.stack.join(", "),
    inLanguage: "en-IN",
  };

  return (
    <>
      <ProjectCaseStudyPage project={project} />
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
        type="application/ld+json"
      />
    </>
  );
}
