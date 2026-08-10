import { Section, SectionHeading, Surface, Btn } from "@/components/ui";
import { profile, professionalSummary } from "@/lib/content";

const highlights = [
  "15+ years building scalable, high-performance web applications across media, banking, ecommerce, and enterprise platforms.",
  "Hands-on GenAI application development: LLM integration, RAG pipelines, streaming responses, and local inference with Ollama.",
  "Proven track record leading large-scale Next.js migrations and mentoring frontend engineering teams.",
];

export function ResumeSummary() {
  return (
    <Section id="resume">
      <SectionHeading eyebrow="Resume" title="ATS-friendly summary for recruiters" />
      <div className="grid gap-4 sm:grid-cols-2">
        <Surface className="p-6">
          <h3 className="font-semibold">Professional Summary</h3>
          <p className="mt-2 text-sm text-muted">{professionalSummary}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Btn href={profile.resumeFile} variant="primary" download>
              Download Resume
            </Btn>
            <Btn href="/contact" variant="secondary">
              Contact Me
            </Btn>
          </div>
        </Surface>
        <Surface className="p-6">
          <h3 className="font-semibold">Highlights</h3>
          <ul className="mt-2 list-inside list-disc space-y-1.5 text-sm text-ink/85">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Surface>
      </div>
    </Section>
  );
}
