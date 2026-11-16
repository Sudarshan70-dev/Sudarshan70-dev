import type { Metadata, Viewport } from "next";
import { siteUrl } from "@/lib/site-config";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#030816",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sudarshan Gadekar | React.js Developer in Pune, India",
    template: "%s | Sudarshan Gadekar",
  },
  description:
    "Sudarshan Gadekar is a frontend-focused full-stack developer in Pune, specializing in React.js, Next.js, and TypeScript for responsive web products and SaaS dashboards.",
  applicationName: "Sudarshan Gadekar Portfolio",
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
    title: "Sudarshan Gadekar | React.js Developer in Pune, India",
    description:
      "Explore the React.js, Next.js, and SaaS product work of Sudarshan Gadekar, a frontend-focused full-stack developer in Pune, India.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Sudarshan Gadekar, frontend-focused full-stack developer specializing in React.js",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sudarshan Gadekar | React.js Developer in Pune, India",
    description:
      "React.js, Next.js, and SaaS product interfaces by Sudarshan Gadekar in Pune, India.",
    images: ["/opengraph-image"],
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
        jobTitle: "Frontend-focused Full-Stack Developer specializing in React.js",
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
          "https://github.com/Sudarshan70-dev",
          "https://www.linkedin.com/in/sudarshan-gadekar-21715b256/",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        {children}
      </body>
    </html>
  );
}
