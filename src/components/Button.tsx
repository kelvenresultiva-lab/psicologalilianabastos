import type { ReactNode } from "react";

const base =
  "hover-float inline-flex items-center justify-center gap-3 text-center rounded-tl-[15px] rounded-br-[15px] border px-8 py-3 font-lato text-[15px] font-normal uppercase tracking-[1.3px] transition-colors duration-300";

const variants = {
  primary:
    "border-transparent bg-[#692327] text-white hover:border-[#692327] hover:bg-transparent hover:text-[#692327]",
  outline:
    "border-[#692327] bg-transparent text-ink hover:bg-[#692327] hover:text-white",
} as const;

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  icon,
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
  icon?: ReactNode;
}) {
  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {icon}
      {children}
    </a>
  );
}
