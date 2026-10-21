import type { Metadata, Viewport } from "next";

import { profile, socialLinks } from "@/content/site";
import { siteUrl } from "@/lib/site-config";

import "./globals.css";

const siteTitle = "Sudarshan Gadekar | Frontend Engineer in Pune, India";
const siteDescription =
  "Portfolio of Sudarshan Gadekar, a Pune-based frontend and product engineer building React and TypeScript applications, SaaS dashboards, and cloud-backed web products.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Sudarshan Gadekar",
  },
  description: siteDescription,
  applicationName: "Sudarshan Gadekar Portfolio",
  manifest: "/manifest.json",
  category: "portfolio",
  keywords: [
    "Sudarshan Gadekar",
    "Frontend Engineer Pune",
    "React Developer India",
    "TypeScript Developer",
    "Product Engineer",
    "SaaS dashboard development",
    "Firebase",
    "Google Cloud Functions",
    "Selenium",
    "Mocha",
  ],
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  publisher: profile.name,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "Sudarshan Gadekar Portfolio",
    images: [{ url: "/hero-photo.jpg", alt: "Sudarshan Gadekar, frontend engineer" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [{ url: "/hero-photo.jpg", alt: "Sudarshan Gadekar, frontend engineer" }],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo192.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
  themeColor: "#1e1e1e",
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: profile.name,
    url: siteUrl,
    image: `${siteUrl}/hero-photo.jpg`,
    jobTitle: "Frontend Engineer",
    description: profile.headline,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    sameAs: socialLinks.filter((link) => link.external).map((link) => link.href),
    knowsAbout: ["React.js", "TypeScript", "SaaS dashboards", "Firebase", "Google Cloud Functions", "Selenium", "Mocha"],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Sudarshan Gadekar Portfolio",
    url: siteUrl,
    inLanguage: "en-IN",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body>
        {children}
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
          type="application/ld+json"
        />
      </body>
    </html>
  );
}
