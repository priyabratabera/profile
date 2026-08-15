import { Section, SectionHeading, Surface, Chip } from "@/components/ui";
import { genAi } from "@/lib/content";

export function GenAi() {
  return (
    <Section id="genai">
      <SectionHeading
        eyebrow="AI / GenAI Projects"
        title="Self-driven GenAI applications: LLM, RAG, and streaming"
      />
      <Surface className="p-6 sm:p-8">
        <p className="max-w-2xl text-muted">{genAi.copy}</p>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {genAi.projects.map((project) => (
            <article key={project.title} className="rounded-2xl border border-border bg-surface-strong/60 p-5">
              <h3 className="text-base font-semibold">{project.title}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <Chip key={tech}>{tech}</Chip>
                ))}
              </div>
              <ul className="mt-4 list-inside list-disc space-y-1.5 text-sm text-ink/85">
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Surface>
    </Section>
  );
}
