"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks, profile } from "@/lib/content";
import { FaBars, FaXmark } from "@/components/icons";
import { ThemeToggle } from "@/components/ThemeToggle";

export function TopBar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface-strong/80 backdrop-blur">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
            {profile.initials}
          </span>
          <span className="flex flex-col leading-tight">
            <strong className="text-sm font-semibold">{profile.name}</strong>
            <span className="text-xs text-muted">{profile.title}</span>
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition hover:text-brand ${
                    active ? "text-brand" : "text-ink/80"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <ThemeToggle />

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-ink md:hidden"
          >
            {open ? <FaXmark size={16} /> : <FaBars size={16} />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="flex flex-col gap-1 border-t border-border bg-surface-strong/95 px-4 py-3 md:hidden">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition hover:bg-bg ${
                  active ? "text-brand" : "text-ink/80"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      ) : null}
    </header>
  );
}
