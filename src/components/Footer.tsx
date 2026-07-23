import { profile, socialLinks } from "@/lib/content";
import { socialIcons } from "@/components/icons";
import { Surface } from "@/components/ui";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mx-auto w-full max-w-[1280px] px-4 pb-10 sm:px-6">
      <Surface className="flex flex-col items-center gap-4 p-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-sm text-muted">
          {year}&copy; {profile.name}. Built for modern frontend, React, Next.js, and Node.js opportunities.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {socialLinks.map((link) => {
            const Icon = socialIcons[link.icon];
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 text-sm font-medium text-ink/70 transition hover:text-brand"
              >
                <Icon size={14} />
                {link.label}
              </a>
            );
          })}
        </div>
      </Surface>
    </footer>
  );
}
