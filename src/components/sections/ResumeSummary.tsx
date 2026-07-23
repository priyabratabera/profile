import { Section, SectionHeading, Surface, Btn } from "@/components/ui";
import { profile } from "@/lib/content";

const highlights = [
  "Times Internet experience across fintech, publishing, and AI-assisted product initiatives.",
  "Strong track record in React development, Next.js migration work, Node.js API collaboration, and production delivery.",
  "Comfortable leading frontend systems, collaborating with stakeholders, and improving maintainability over time.",
];

export function ResumeSummary() {
  return (
    <Section id="resume">
      <SectionHeading eyebrow="Resume" title="ATS-friendly summary for recruiters" />
      <div className="grid gap-4 sm:grid-cols-2">
        <Surface className="p-6">
          <h3 className="font-semibold">Professional Summary</h3>
          <p className="mt-2 text-sm text-muted">
            Immediate Joiner and Senior Frontend Engineer with 13+ years of experience building
            React.js, Next.js, TypeScript, and Node.js applications for enterprise, fintech, and
            AI-assisted products.
          </p>
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
