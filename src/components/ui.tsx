import Link from "next/link";
import type { ReactNode } from "react";

export function Surface({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`surface ${className}`}>{children}</div>;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  action,
}: {
  eyebrow: string;
  title: string;
  action?: { href: string; label: string };
}) {
  return (
    <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-1 text-2xl font-semibold sm:text-3xl">{title}</h2>
      </div>
      {action ? (
        <Link
          href={action.href}
          className="text-sm font-semibold text-brand transition hover:text-brand-dark"
        >
          {action.label} &rarr;
        </Link>
      ) : null}
    </div>
  );
}

export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-surface-strong/70 px-3 py-1 text-xs font-medium text-ink/80">
      {children}
    </span>
  );
}

export function Btn({
  href,
  children,
  variant = "primary",
  download,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  download?: boolean;
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition";
  const styles =
    variant === "primary"
      ? "bg-brand text-white shadow-[0_10px_25px_rgb(15,118,110,0.35)] hover:bg-brand-dark"
      : "border border-border bg-surface-strong/70 text-ink hover:bg-surface-strong";
  const external = href.startsWith("http") || download;
  return (
    <Link
      href={href}
      className={`${base} ${styles}`}
      {...(download ? { download: true } : {})}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </Link>
  );
}

export function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-24 py-8 sm:py-10 ${className}`}>
      {children}
    </section>
  );
}
