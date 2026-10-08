import Link from "next/link";

type DonateButtonProps = {
  href?: string;
  children?: React.ReactNode;
  size?: "sm" | "md";
  variant?: "solid" | "light";
  className?: string;
  onClick?: () => void;
};

const sizes = {
  sm: "px-5 py-2.5 text-xs",
  md: "px-7 py-3.5 text-sm",
};

const variants = {
  solid:
    "border-terracotta-dark bg-terracotta text-cream hover:bg-terracotta-dark",
  light: "border-cream bg-cream text-terracotta hover:bg-sand",
};

export default function DonateButton({
  href = "/donate",
  children = "Donate",
  size = "md",
  variant = "solid",
  className = "",
  onClick,
}: DonateButtonProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`inline-flex items-center gap-3 rounded-lg border-2 font-bold uppercase tracking-widest transition ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
      <svg
        className="h-3 w-3"
        viewBox="0 0 12 12"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path d="M2 2h8v8" strokeLinecap="square" />
      </svg>
    </Link>
  );
}