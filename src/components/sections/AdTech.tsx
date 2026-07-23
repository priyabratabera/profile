import { Section, SectionHeading, Surface, Chip } from "@/components/ui";
import { adTech } from "@/lib/content";

export function AdTech() {
  return (
    <Section id="ad-tech">
      <SectionHeading eyebrow="Ad Tech & Monetization" title="Sole technical owner of a publisher monetization stack" />
      <Surface className="p-6 sm:p-8">
        <p className="max-w-2xl text-muted">{adTech.copy}</p>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {adTech.stats.map((stat) => (
            <article key={stat.label} className="rounded-2xl border border-border bg-white/70 p-4 text-center">
              <strong className="block text-lg font-bold text-brand sm:text-xl">{stat.value}</strong>
              <span className="mt-1 block text-xs text-muted">{stat.label}</span>
            </article>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {adTech.tools.map((tool) => (
            <Chip key={tool}>{tool}</Chip>
          ))}
        </div>
      </Surface>
    </Section>
  );
}
