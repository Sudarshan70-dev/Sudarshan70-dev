import type { Metadata, Viewport } from "next";
import { siteUrl } from "@/lib/site-config";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#0a0a0a", // Matches dark/HUD theme on mobile browsers
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sudarshan Gadekar | Full-Stack Developer | React Developer",
    template: "%s | Sudarshan Gadekar",
  },
  description:
    "Portfolio of Sudarshan Raju Gadekar, a Full-Stack Developer specializing in React.js, Next.js, TypeScript, Node.js, Google Cloud Platform, and Firebase.",
  keywords: [
    "Sudarshan Gadekar",
    "Sudarshan Raju Gadekar",
    "Full-Stack Developer",
    "Frontend Developer",
    "Web Developer",
    "React.js Developer",
    "Next.js Developer",
    "TypeScript",
    "Node.js",
    "Firebase",
    "Google Cloud Platform",
    "Software Engineer Pune",
  ],
  authors: [{ name: "Sudarshan Raju Gadekar", url: siteUrl }],
  creator: "Sudarshan Raju Gadekar",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Sudarshan Gadekar Portfolio",
    title: "Sudarshan Gadekar | Full-Stack Developer | React Developer",
    description:
      "Full-Stack Developer specializing in React.js, Next.js, TypeScript, Node.js, and modern cloud architecture like Firebase, Google Cloud Platform. Explore my projects and case studies.",
    images: [
      {
        url: "/og-image.png", // Add a 1200x630px screenshot of your portfolio in public/og-image.png
        width: 1200,
        height: 630,
        alt: "Sudarshan Gadekar - Full-Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sudarshan Gadekar | Full-Stack Developer | React Developer",
    description:
      "Full-Stack Developer specializing in React.js, Next.js, TypeScript, Firebase and Google Cloud Platform.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,
        name: "Sudarshan Raju Gadekar",
        givenName: "Sudarshan",
        familyName: "Gadekar",
        url: siteUrl,
        jobTitle: "Full-Stack Developer | React Developer",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Pune",
          addressRegion: "Maharashtra",
          addressCountry: "IN",
        },
        knowsAbout: [
          "React.js",
          "Next.js",
          "TypeScript",
          "JavaScript",
          "Java",
          "Node.js",
          "Firebase",
          "Express.js",
          "Google Cloud Platform",
          "Supabase",
          "PostgreSQL",
          "Tailwind CSS",
        ],
        sameAs: [
          // Replace or add your exact profile URLs here
          "https://github.com/sudarshan70",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Sudarshan Gadekar Portfolio",
        publisher: {
          "@id": `${siteUrl}/#person`,
        },
      },
    ],
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}