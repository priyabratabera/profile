import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Experience } from "@/components/sections/Experience";
import { Section, SectionHeading, Surface, Chip, Btn } from "@/components/ui";
import {
  heroPages,
  resumeStats,
  resumeSkillGroups,
  projects,
  education,
  additionalStrengths,
  professionalSummary,
  profile,
} from "@/lib/content";

export const metadata: Metadata = { title: "Resume" };

export default function ResumePage() {
  return (
    <div>
      <PageHero {...heroPages.resume} />

      <Section id="quick-stats">
        <SectionHeading eyebrow="Quick Stats" title="Snapshot for recruiters and hiring managers" />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
          {resumeStats.map((stat) => (
            <Surface key={stat.label} className="p-4 text-center">
              <strong className="block text-xl font-bold text-brand">{stat.value}</strong>
              <span className="mt-1 block text-xs text-muted">{stat.label}</span>
            </Surface>
          ))}
        </div>
      </Section>

      <Section id="professional-summary">
        <SectionHeading eyebrow="Professional Summary" title="Clear, ATS-friendly frontend profile" />
        <Surface className="p-6">
          <p className="text-sm text-muted">{professionalSummary}</p>
        </Surface>
      </Section>

      <Section id="technical-skills">
        <SectionHeading eyebrow="Technical Skills" title="Core stack, ecosystem, and delivery tools" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {resumeSkillGroups.map((group) => (
            <Surface key={group.title} className="p-5">
              <h3 className="font-semibold">{group.title}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Chip key={skill}>{skill}</Chip>
                ))}
              </div>
            </Surface>
          ))}
        </div>
      </Section>

      <Experience
        eyebrow="Work Experience"
        title="Professional experience across media, enterprise, banking, and consumer platforms"
      />

      <Section id="major-projects">
        <SectionHeading eyebrow="Major Projects" title="Selected platforms and product work" />
        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((project) => (
            <Surface key={project.title} className="p-5">
              <h3 className="font-semibold">{project.title}</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <Chip key={tech}>{tech}</Chip>
                ))}
              </div>
              <p className="mt-3 text-sm text-muted">{project.description}</p>
            </Surface>
          ))}
        </div>
      </Section>

      <div className="grid gap-4 sm:grid-cols-2">
        <Section id="education">
          <SectionHeading eyebrow="Education" title="Academic background" />
          <Surface className="p-6">
            {education.map((item) => (
              <div key={item.degree}>
                <h3 className="font-semibold">{item.degree}</h3>
                <p className="mt-1 text-sm text-muted">{item.school}</p>
                <p className="mt-1 text-sm text-ink/85">
                  {item.period} &middot; {item.detail}
                </p>
              </div>
            ))}
          </Surface>
        </Section>

        <Section id="strengths">
          <SectionHeading eyebrow="Additional Strengths" title="What I bring beyond the stack" />
          <Surface className="p-6">
            <ul className="list-inside list-disc space-y-1.5 text-sm text-ink/85">
              {additionalStrengths.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Surface>
        </Section>
      </div>

      <Section id="resume-contact">
        <SectionHeading eyebrow="Contact" title="Professional contact details" />
        <Surface className="p-6">
          <dl className="grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
            <div className="flex justify-between gap-2">
              <dt className="text-muted">Email</dt>
              <dd>
                <a href={`mailto:${profile.email}`} className="font-medium hover:text-brand">
                  {profile.email}
                </a>
              </dd>
            </div>
            <div className="flex justify-between gap-2">
              <dt className="text-muted">Phone</dt>
              <dd>
                <a href={`tel:${profile.phoneTel}`} className="font-medium hover:text-brand">
                  {profile.phoneDisplay}
                </a>
              </dd>
            </div>
            <div className="flex justify-between gap-2">
              <dt className="text-muted">LinkedIn</dt>
              <dd className="min-w-0 truncate">
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="font-medium hover:text-brand">
                  {profile.linkedin}
                </a>
              </dd>
            </div>
            <div className="flex justify-between gap-2">
              <dt className="text-muted">GitHub</dt>
              <dd className="min-w-0 truncate">
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className="font-medium hover:text-brand">
                  {profile.github}
                </a>
              </dd>
            </div>
          </dl>
          <div className="mt-5 flex flex-wrap gap-3">
            <Btn href={profile.resumeFile} variant="primary" download>
              Download Resume
            </Btn>
            <Btn href="/contact" variant="secondary">
              Contact Me
            </Btn>
          </div>
        </Surface>
      </Section>
    </div>
  );
}
