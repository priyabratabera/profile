import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Section, SectionHeading, Surface, Chip, Btn } from "@/components/ui";
import {
  heroPages,
  resumeStats,
  resumeSkillGroups,
  resumeWorkExperience,
  resumeMajorProjects,
  freelanceWork,
  education,
  certifications,
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
          <p className="text-sm text-muted">
            Immediate Joiner and Senior Frontend Engineer with strong experience in React.js,
            Next.js, TypeScript, JavaScript, Node.js, SSR, SEO, Core Web Vitals, responsive UI,
            REST API integration, and scalable frontend architecture. Experienced in working on
            high-traffic platforms, AI tools, financial products, admin panels, e-commerce
            platforms, and enterprise applications.
          </p>
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

      <Section id="work-experience">
        <SectionHeading eyebrow="Work Experience" title="Times Internet leadership and product delivery" />
        <Surface className="p-6">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <div>
              <h3 className="text-lg font-semibold">{resumeWorkExperience.company}</h3>
              <p className="text-sm font-medium text-muted">{resumeWorkExperience.role}</p>
            </div>
            <span className="text-xs font-semibold uppercase tracking-wide text-brand">
              {resumeWorkExperience.period}
            </span>
          </div>
          <h4 className="mt-4 text-sm font-semibold text-muted">Key Responsibilities</h4>
          <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-ink/85">
            {resumeWorkExperience.responsibilities.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </Surface>
      </Section>

      <Section id="major-projects">
        <SectionHeading eyebrow="Major Projects" title="Selected platforms and product work" />
        <div className="grid gap-4 sm:grid-cols-2">
          {resumeMajorProjects.map((project) => (
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

      <Section id="freelance">
        <SectionHeading eyebrow="Freelance / Consulting" title="Independent project delivery" />
        <Surface className="p-6">
          <ul className="list-inside list-disc space-y-1.5 text-sm text-ink/85">
            {freelanceWork.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Surface>
      </Section>

      <div className="grid gap-4 sm:grid-cols-2">
        <Section id="education">
          <SectionHeading eyebrow="Education" title="Academic background" />
          <Surface className="p-6">
            <ul className="list-inside list-disc space-y-1.5 text-sm text-ink/85">
              {education.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Surface>
        </Section>

        <Section id="certifications">
          <SectionHeading eyebrow="Certifications / Learning" title="Professional Certifications" />
          <Surface className="p-6">
            <p className="text-sm text-muted">
              {certifications.source} certifications focused on JavaScript, Next.js, Node.js, REST
              APIs, authentication, deployment, testing, and backend development.
            </p>
            <div className="mt-3 flex gap-4 text-sm">
              <span>
                <strong className="text-brand">{certifications.count}</strong> Certificates
              </span>
              <span className="text-muted">{certifications.period}</span>
            </div>
            <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-ink/85">
              {certifications.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Surface>
        </Section>
      </div>

      <Section id="resume-contact">
        <SectionHeading eyebrow="Contact" title="Professional contact details" />
        <Surface className="p-6">
          <dl className="grid gap-3 text-sm sm:grid-cols-2">
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
