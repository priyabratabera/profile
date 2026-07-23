import { Section, SectionHeading, Surface, Chip } from "@/components/ui";
import { caseStudies } from "@/lib/content";

export function CaseStudies() {
  return (
    <Section id="case-studies">
      <SectionHeading eyebrow="Case Studies" title="Selected project case studies" />
      <div className="space-y-5">
        {caseStudies.map((study) => (
          <Surface key={study.title} className="p-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold">{study.title}</h3>
              <span className="text-xs text-muted">Screenshots placeholder</span>
            </div>
            <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <h4 className="text-sm font-semibold text-muted">Problem</h4>
                <p className="mt-1 text-sm text-ink/85">{study.problem}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-muted">Solution</h4>
                <p className="mt-1 text-sm text-ink/85">{study.solution}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-muted">Tech Stack</h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {study.stack.map((tech) => (
                    <Chip key={tech}>{tech}</Chip>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-muted">My Role</h4>
                <p className="mt-1 text-sm text-ink/85">{study.role}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-muted">Key Features</h4>
                <ul className="mt-1 list-inside list-disc space-y-0.5 text-sm text-ink/85">
                  {study.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-muted">Impact</h4>
                <p className="mt-1 text-sm text-ink/85">{study.impact}</p>
              </div>
            </div>
          </Surface>
        ))}
      </div>
    </Section>
  );
}
