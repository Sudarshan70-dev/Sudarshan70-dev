export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://sudarshan70-dev-portfolio.vercel.app"
).replace(/\/$/, "");

export const siteConfig = {
  name: "Sudarshan Raju Gadekar",
  shortName: "Sudarshan Gadekar",
  role: "Full-Stack & Frontend Software Engineer",
  url: siteUrl,
  description:
    "Portfolio of Sudarshan Raju Gadekar, a Full-Stack and Frontend Software Engineer in Pune specializing in React.js, Next.js, TypeScript, Node.js, Supabase, and Firebase.",
  location: {
    city: "Pune",
    state: "Maharashtra",
    country: "IN",
  },
  links: {
    github: "https://github.com/Sudarshan70-dev",
  },
};