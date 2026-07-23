import { Section, SectionHeading, Surface, Chip } from "@/components/ui";
import { projects } from "@/lib/content";

export function Projects({ showViewAll = true }: { showViewAll?: boolean }) {
  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Featured product work and migrations"
        action={showViewAll ? { href: "/work", label: "View all project highlights" } : undefined}
      />
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <Surface key={project.title} className="p-5">
            <span className="text-xs font-semibold uppercase tracking-wide text-accent">
              {project.tag}
            </span>
            <h3 className="mt-1 text-lg font-semibold">{project.title}</h3>
            <p className="mt-2 text-sm text-muted">{project.description}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <Chip key={tech}>{tech}</Chip>
              ))}
            </div>
            <dl className="mt-4 space-y-1 text-sm">
              <div className="flex justify-between gap-2">
                <dt className="text-muted">My role</dt>
                <dd className="text-right font-medium">{project.role}</dd>
              </div>
              <div className="flex justify-between gap-2">
                <dt className="shrink-0 text-muted">Key impact</dt>
                <dd className="text-right text-ink/85">{project.impact}</dd>
              </div>
            </dl>
          </Surface>
        ))}
      </div>
    </Section>
  );
}
