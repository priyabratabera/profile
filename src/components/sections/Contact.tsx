import { Section, SectionHeading, Surface, Btn } from "@/components/ui";
import { profile } from "@/lib/content";
import { ContactForm } from "@/components/ContactForm";

const details = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Phone", value: profile.phoneDisplay, href: `tel:${profile.phoneTel}` },
  { label: "WhatsApp", value: profile.phoneDisplay, href: profile.whatsapp },
  { label: "LinkedIn", value: profile.linkedin, href: profile.linkedin },
  { label: "GitHub", value: profile.github, href: profile.github },
];

export function Contact() {
  return (
    <Section id="contact">
      <SectionHeading eyebrow="Contact" title="Let's build your next frontend product" />
      <div className="grid gap-4 sm:grid-cols-2">
        <Surface className="p-6">
          <p className="text-sm text-muted">
            Immediate Joiner available for Staff Frontend Engineer, Frontend Architect,
            React/Next.js Developer, Full-Stack Developer, and AI Engineer roles.
          </p>
          <dl className="mt-4 space-y-2 text-sm">
            {details.map((detail) => (
              <div key={detail.label} className="flex flex-wrap items-baseline justify-between gap-2">
                <dt className="text-muted">{detail.label}</dt>
                <dd className="min-w-0 truncate">
                  <a href={detail.href} className="font-medium text-ink hover:text-brand" target={detail.href.startsWith("http") ? "_blank" : undefined} rel={detail.href.startsWith("http") ? "noopener noreferrer" : undefined}>
                    {detail.value}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-5 flex flex-wrap gap-3">
            <Btn href={profile.whatsapp} variant="secondary">
              WhatsApp
            </Btn>
            <Btn href={`mailto:${profile.email}`} variant="primary">
              Email Me
            </Btn>
          </div>
        </Surface>
        <Surface className="p-6">
          <h3 className="font-semibold">Quick Message</h3>
          <div className="mt-4">
            <ContactForm />
          </div>
        </Surface>
      </div>
    </Section>
  );
}
