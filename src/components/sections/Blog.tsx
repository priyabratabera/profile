import { Section, SectionHeading, Surface } from "@/components/ui";
import { blogPosts } from "@/lib/content";

export function Blog() {
  return (
    <Section id="blog">
      <SectionHeading eyebrow="Blog" title="Technical article ideas" />
      <div className="grid gap-4 sm:grid-cols-2">
        {blogPosts.map((post) => (
          <Surface key={post.title} className="p-5">
            <span className="text-xs font-semibold uppercase tracking-wide text-brand">
              {post.tag}
            </span>
            <h3 className="mt-1 text-lg font-semibold">{post.title}</h3>
            <p className="mt-2 text-sm text-muted">{post.excerpt}</p>
          </Surface>
        ))}
      </div>
    </Section>
  );
}
