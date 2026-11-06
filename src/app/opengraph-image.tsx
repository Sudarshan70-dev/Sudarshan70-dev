import { ImageResponse } from "next/og";

export const alt = "Sudarshan Gadekar | Full-Stack Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#050811",
          backgroundImage:
            "radial-gradient(circle at 25px 25px, rgba(0, 240, 255, 0.15) 2%, transparent 0%)",
          backgroundSize: "50px 50px",
          color: "#ffffff",
          fontFamily: "sans-serif",
          border: "2px solid rgba(0, 240, 255, 0.3)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            color: "#00f0ff",
            fontSize: 24,
            letterSpacing: "4px",
            textTransform: "uppercase",
            marginBottom: "20px",
          }}
        >
          SYSTEM.ONLINE // PORTFOLIO
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: "24px",
            color: "#f8fafc",
          }}
        >
          Sudarshan Gadekar
        </div>
        <div
          style={{
            fontSize: 36,
            color: "#94a3b8",
            marginBottom: "40px",
          }}
        >
          Full-Stack & Frontend Software Engineer
        </div>
        <div
          style={{
            display: "flex",
            gap: "16px",
            fontSize: 22,
            color: "#00f0ff",
          }}
        >
          <span>React.js</span> • <span>Next.js 16</span> •{" "}
          <span>TypeScript</span> • <span>Node.js</span> •{" "}
          <span>Supabase</span>
        </div>
      </div>
    ),
    { ...size }
  );
}