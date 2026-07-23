import Image from "next/image";
import { profile, socialLinks } from "@/lib/content";
import { socialIcons } from "@/components/icons";
import { Surface, Btn } from "@/components/ui";

export function Sidebar() {
  return (
    <aside className="lg:sticky lg:top-24 lg:h-fit lg:w-[300px] lg:shrink-0">
      <Surface className="flex flex-col items-center gap-4 p-6 text-center">
        <div className="relative h-28 w-28 overflow-hidden rounded-full border-4 border-white shadow-lg">
          <Image
            src="/assets/pic.png"
            alt={profile.photoAlt}
            fill
            sizes="112px"
            className="object-cover"
            priority
          />
        </div>
        <div>
          <h2 className="text-lg font-semibold">{profile.name}</h2>
          <p className="mt-1 text-sm font-medium text-brand">{profile.tagline}</p>
        </div>
        <p className="text-sm text-muted">{profile.summary}</p>

        <div className="flex items-center gap-3">
          {socialLinks.map((link) => {
            const Icon = socialIcons[link.icon];
            return (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white text-ink/70 transition hover:border-brand hover:text-brand"
              >
                <Icon size={14} />
              </a>
            );
          })}
        </div>

        <div className="w-full space-y-2 rounded-2xl bg-bg/60 p-4 text-left text-sm">
          <div className="flex justify-between gap-2">
            <span className="text-muted">Email</span>
            <a href={`mailto:${profile.email}`} className="font-medium text-ink hover:text-brand">
              {profile.email}
            </a>
          </div>
          <div className="flex justify-between gap-2">
            <span className="text-muted">Phone</span>
            <a href={`tel:${profile.phoneTel}`} className="font-medium text-ink hover:text-brand">
              {profile.phoneDisplay}
            </a>
          </div>
          <div className="flex justify-between gap-2">
            <span className="text-muted">Location</span>
            <strong className="font-medium">{profile.location}</strong>
          </div>
        </div>

        <Btn href={profile.resumeFile} variant="primary" download>
          Download Resume
        </Btn>
      </Surface>
    </aside>
  );
}
