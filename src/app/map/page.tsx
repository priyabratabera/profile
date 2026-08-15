import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section, Surface } from "@/components/ui";
import { heroPages, profile } from "@/lib/content";

export const metadata: Metadata = { title: "Map" };

export default function MapPage() {
  const query = encodeURIComponent(profile.location);

  return (
    <div>
      <PageHero {...heroPages.map} />
      <Section>
        <Surface className="overflow-hidden p-0">
          <iframe
            src={`https://www.google.com/maps?q=${query}&output=embed`}
            title={`Map showing ${profile.location}`}
            className="h-[420px] w-full sm:h-[520px]"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Surface>
      </Section>
    </div>
  );
}
