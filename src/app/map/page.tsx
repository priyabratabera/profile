import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/sections/PageHero";
import { Section, Surface } from "@/components/ui";
import { heroPages, profile } from "@/lib/content";

export const metadata: Metadata = { title: "Map" };

const mapLocation = "Gaur City 2, Noida";

export default function MapPage() {
  const query = encodeURIComponent(mapLocation);

  return (
    <div>
      <PageHero {...heroPages.map} />
      <Section>
        <Surface className="relative overflow-hidden p-0">
          <iframe
            src={`https://www.google.com/maps?q=${query}&output=embed`}
            title={`Map showing ${mapLocation}`}
            className="h-[420px] w-full sm:h-[520px]"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <div className="pointer-events-none absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-full flex-col items-center">
            <div className="flex items-center gap-2 rounded-full border border-border bg-surface-strong px-3 py-2 shadow-lg">
              <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border-2 border-brand">
                <Image
                  src="/assets/pic.png"
                  alt={profile.photoAlt}
                  fill
                  sizes="36px"
                  className="object-cover"
                />
              </div>
              <span className="pr-1 text-sm font-semibold whitespace-nowrap text-ink">
                {profile.name}
              </span>
            </div>
            <svg width="16" height="10" viewBox="0 0 16 10" className="text-surface-strong drop-shadow">
              <path d="M0 0 L8 10 L16 0 Z" fill="currentColor" />
            </svg>
            <span className="-mt-1 h-3 w-3 rounded-full bg-brand ring-4 ring-brand/30" />
          </div>
        </Surface>
      </Section>
    </div>
  );
}
