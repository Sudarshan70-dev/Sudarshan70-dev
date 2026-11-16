import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProjectCaseStudyPage } from "@/components/portfolio/project-case-study-page";
import { getProjectBySlug, projects } from "@/content/projects";
import { siteUrl } from "@/lib/site-config";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project Not Found", robots: { index: false, follow: false } };
  }

  const path = `/projects/${project.slug}`;
  const title = `${project.title} Case Study`;
  const image = "/opengraph-image";

  return {
    title,
    description: project.summary,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      title: `${title} | Sudarshan Gadekar`,
      description: project.summary,
      url: `${siteUrl}${path}`,
      siteName: "Sudarshan Gadekar Portfolio",
      locale: "en_IN",
      images: [{ url: image, width: 1200, height: 630, alt: `${project.title} case study` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Sudarshan Gadekar`,
      description: project.summary,
      images: [image],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const projectUrl = `${siteUrl}/projects/${project.slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        "@id": `${projectUrl}#project`,
        name: project.title,
        headline: titleForProject(project.title),
        description: project.summary,
        url: projectUrl,
        contributor: { "@id": `${siteUrl}/#person` },
        about: project.context,
        inLanguage: "en-IN",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${projectUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: project.title, item: projectUrl },
        ],
      },
    ],
  };

  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
        type="application/ld+json"
      />
      <ProjectCaseStudyPage project={project} />
    </>
  );
}

function titleForProject(title: string) {
  return `${title} - Case Study`;
}
