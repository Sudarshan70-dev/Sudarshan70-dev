export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://sudarshan70-dev-portfolio.vercel.app"
).replace(/\/+$/, "");

export const siteConfig = {
  name: "Sudarshan Raju Gadekar",
  shortName: "Sudarshan Gadekar",
  role: "Frontend-focused Full-Stack Developer specializing in React.js",
  url: siteUrl,
  description:
    "Sudarshan Gadekar is a frontend-focused full-stack developer in Pune, specializing in React.js, Next.js, and TypeScript for responsive web products and SaaS dashboards.",
  location: {
    city: "Pune",
    state: "Maharashtra",
    country: "IN",
  },
  links: {
    github: "https://github.com/Sudarshan70-dev",
  },
};
