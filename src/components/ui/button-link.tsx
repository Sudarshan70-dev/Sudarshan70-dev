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
  primary: "button-link-primary",
  secondary: "button-link-secondary",
  ghost: "button-link-ghost",
};

const sharedClassName =
  "button-link inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition duration-200";

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
      <span className="inline-flex items-center justify-center gap-2 whitespace-nowrap">{children}</span>
      {trailingIcon ? <ArrowUpRight className="h-4 w-4 shrink-0" /> : null}
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
