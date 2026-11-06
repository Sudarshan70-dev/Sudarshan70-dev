import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProjectCaseStudyPage } from "@/components/portfolio/project-case-study-page";
import { getProjectBySlug, projects } from "@/content/projects";
import { siteUrl } from "@/lib/site-config";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

// 1. Instantly return 404 for unknown slugs without invoking serverless compute
export const dynamicParams = false;

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
      robots: { index: false, follow: false },
    };
  }

  const projectUrl = `${siteUrl}/projects/${project.slug}`;
  const ogImage =
    (project as { image?: string }).image || "/hero-photo.jpg";

  return {
    title: `${project.title} Case Study`,
    description: project.summary,
    keywords: [
      project.title,
      ...project.stack,
      "Case Study",
      "Sudarshan Gadekar",
      "Full-Stack Software Engineer",
    ],
    alternates: {
      canonical: projectUrl,
    },
    openGraph: {
      type: "article",
      title: `${project.title} | Case Study by Sudarshan Gadekar`,
      description: project.summary,
      url: projectUrl,
      siteName: "Sudarshan Gadekar Portfolio",
      locale: "en_IN",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${project.title} - Case Study by Sudarshan Gadekar`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Case Study by Sudarshan Gadekar`,
      description: project.summary,
      images: [ogImage],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const projectUrl = `${siteUrl}/projects/${project.slug}`;

  // 2. Upgraded JSON-LD combining SoftwareSourceCode/CreativeWork + BreadcrumbList
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        "@id": `${projectUrl}/#project`,
        name: project.title,
        headline: `${project.title} - Case Study`,
        description: project.summary,
        url: projectUrl,
        image: `${siteUrl}/hero-photo.jpg`,
        author: { "@id": `${siteUrl}/#person` },
        creator: { "@id": `${siteUrl}/#person` },
        keywords: project.stack.join(", "),
        inLanguage: "en-IN",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${projectUrl}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: project.title,
            item: projectUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
        type="application/ld+json"
      />
      <ProjectCaseStudyPage project={project}/>
    </>
  );
}