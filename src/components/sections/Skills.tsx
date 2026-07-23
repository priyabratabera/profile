import { Section, SectionHeading, Surface, Chip } from "@/components/ui";
import { skillGroups } from "@/lib/content";

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading eyebrow="Skills" title="Frontend, backend, cloud, and AI skills" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
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
  );
}
