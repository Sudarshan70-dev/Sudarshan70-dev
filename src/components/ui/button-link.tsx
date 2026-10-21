import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
  download?: boolean;
  trailingIcon?: boolean;
};

const variants = {
  primary:
    "border-cyan-300/35 bg-cyan-300/12 text-cyan-50 hover:border-cyan-200/70 hover:bg-cyan-300/18",
  secondary:
    "border-slate-700/70 bg-slate-900/60 text-slate-100 hover:border-cyan-300/30 hover:bg-slate-900/90",
  ghost:
    "border-transparent bg-transparent text-slate-300 hover:border-slate-700/70 hover:bg-slate-900/60 hover:text-white",
};

const sharedClassName =
  "inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition duration-200";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  external,
  download,
  trailingIcon = false,
}: ButtonLinkProps) {
  const finalClassName = cn(sharedClassName, variants[variant], className);

  const content = (
    <>
      <span>{children}</span>
      {trailingIcon ? <ArrowUpRight className="h-4 w-4" /> : null}
    </>
  );

  if (external || download) {
    return (
      <a
        className={finalClassName}
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        download={download}
      >
        {content}
      </a>
    );
  }

  return (
    <Link className={finalClassName} href={href}>
      {content}
    </Link>
  );
}
