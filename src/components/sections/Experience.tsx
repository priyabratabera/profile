import { Section, SectionHeading, Surface } from "@/components/ui";
import { experience } from "@/lib/content";

export function Experience({
  eyebrow = "Experience",
  title = "Career timeline and leadership path",
}: {
  eyebrow?: string;
  title?: string;
}) {
  return (
    <Section id="experience">
      <SectionHeading eyebrow={eyebrow} title={title} />
      <div className="space-y-4 border-l-2 border-border pl-5 sm:pl-6">
        {experience.map((role) => (
          <Surface key={role.company} className="relative p-5">
            <span className="absolute -left-[29px] top-6 h-3 w-3 rounded-full bg-brand ring-4 ring-bg sm:-left-[33px]" />
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-brand">
                {role.period}
              </span>
              <span className="text-xs text-muted">{role.location}</span>
            </div>
            <h3 className="mt-1 text-lg font-semibold">{role.company}</h3>
            <p className="text-sm font-medium text-muted">{role.role}</p>
            <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-ink/85">
              {role.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </Surface>
        ))}
      </div>
    </Section>
  );
}
