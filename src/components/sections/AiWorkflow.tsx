import { Section, SectionHeading, Surface } from "@/components/ui";
import { aiWorkflow } from "@/lib/content";

export function AiWorkflow() {
  return (
    <Section id="ai-workflow">
      <SectionHeading eyebrow="AI Developer Workflow" title="Faster delivery with AI-assisted engineering" />
      <Surface className="p-6">
        <ul className="grid list-inside list-disc gap-2 text-sm text-ink/85 sm:grid-cols-2">
          {aiWorkflow.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Surface>
    </Section>
  );
}
