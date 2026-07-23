import { Section, SectionHeading, Surface, Btn } from "@/components/ui";
import { profile, professionalSummary } from "@/lib/content";

const highlights = [
  "7+ years as sole technical owner of The Economic Times' publisher monetization stack, serving 340M+ monthly views.",
  "Deep hands-on expertise with GAM/DFP, Prebid.js, Amazon Publisher Services, and Header Bidding.",
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
