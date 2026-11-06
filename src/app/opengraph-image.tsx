import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Sudarshan Gadekar | Full-Stack Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  // Load public/hero-photo.jpg at build/request time as Base64
  let photoSrc: string | null = null;
  try {
    const photoData = await readFile(
      join(process.cwd(), "public", "hero-photo.jpg")
    );
    photoSrc = `data:image/jpeg;base64,${photoData.toString("base64")}`;
  } catch {
    photoSrc = null;
  }

  const techStack = [
    "React.js",
    "Next.js 16",
    "TypeScript",
    "Node.js",
    "Firebase Firestore",
    "Google Cloud Platform",
  ];

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "64px 72px",
          backgroundColor: "#050811",
          backgroundImage:
            "radial-gradient(circle at 25px 25px, rgba(0, 240, 255, 0.14) 2%, transparent 0%)",
          backgroundSize: "50px 50px",
          color: "#ffffff",
          fontFamily: "sans-serif",
          border: "2px solid rgba(0, 240, 255, 0.35)",
        }}
      >
        {/* Left Column: HUD Header, Name, Role & Tech Stack Pills */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            maxWidth: "720px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "#00f0ff",
              fontSize: 20,
              letterSpacing: "4px",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            SYSTEM.ONLINE // PORTFOLIO
          </div>

          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: "16px",
              color: "#f8fafc",
            }}
          >
            Sudarshan Gadekar
          </div>

          <div
            style={{
              fontSize: 30,
              color: "#94a3b8",
              marginBottom: "36px",
            }}
          >
            Full-Stack & Software Engineer
          </div>

          {/* Tech Stack Badges */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            {techStack.map((tech) => (
              <div
                key={tech}
                style={{
                  padding: "8px 18px",
                  borderRadius: "6px",
                  backgroundColor: "rgba(0, 240, 255, 0.08)",
                  border: "1px solid rgba(0, 240, 255, 0.35)",
                  color: "#00f0ff",
                  fontSize: 20,
                  fontWeight: 600,
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Framed Profile Image */}
        {photoSrc && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "290px",
              height: "290px",
              borderRadius: "24px",
              padding: "6px",
              background:
                "linear-gradient(135deg, rgba(0,240,255,0.8), rgba(0,240,255,0.1))",
              boxShadow: "0 0 40px rgba(0, 240, 255, 0.25)",
            }}
          >
            <img
              src={photoSrc}
              alt="Sudarshan Gadekar"
              width={278}
              height={278}
              style={{
                width: "278px",
                height: "278px",
                borderRadius: "20px",
                objectFit: "cover",
              }}
            />
          </div>
        )}
      </div>
    ),
    { ...size }
  );
}