import { Section, SectionHeading, Surface } from "@/components/ui";
import { aboutHighlights } from "@/lib/content";

export function About() {
  return (
    <Section id="about">
      <SectionHeading eyebrow="About" title="Frontend leadership with product focus" />
      <Surface className="p-6 sm:p-8">
        <p className="max-w-2xl text-muted">
          I build frontend systems that balance product speed, engineering quality, search
          visibility, and long-term maintainability.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {aboutHighlights.map((point) => (
            <article key={point} className="flex gap-3 rounded-2xl border border-border bg-white/60 p-4">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
              <p className="text-sm text-ink/85">{point}</p>
            </article>
          ))}
        </div>
      </Surface>
    </Section>
  );
}
