import { Sparkles } from "lucide-react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={alignment}>
      <div className={`section-label ${align === "center" ? "mx-auto" : ""}`}>
        <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
        {eyebrow}
      </div>
      <h2 className="section-title mt-5 text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p
        className={`mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg ${
          align === "center" ? "mx-auto" : ""
        }`}
      >
        {description}
      </p>
    </div>
  );
}
