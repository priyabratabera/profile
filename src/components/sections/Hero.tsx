import { Surface, Btn } from "@/components/ui";
import { heroStats, profile } from "@/lib/content";

export function Hero() {
  return (
    <Surface className="p-6 sm:p-10">
      <span className="inline-flex rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
        Immediate Joiner for senior frontend roles in 2026
      </span>
      <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">{profile.title}</h1>
      <p className="mt-2 text-base font-medium text-brand">{profile.tagline}</p>
      <p className="mt-3 max-w-2xl text-muted">{profile.summary}</p>

      <div className="mt-6 flex flex-wrap gap-3">
        <Btn href={profile.resumeFile} variant="primary" download className="ext-resume-btn">
          Download Resume
        </Btn>
        <Btn href="/contact" variant="secondary">
          Hire Me / Contact Me
        </Btn>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-5">
        {heroStats.map((stat) => (
          <article
            key={stat.label}
            className="rounded-2xl border border-border bg-surface-strong/70 p-4 text-center"
          >
            <strong className="block text-xl font-bold text-brand sm:text-2xl">
              {stat.value}
            </strong>
            <span className="mt-1 block text-xs text-muted">{stat.label}</span>
          </article>
        ))}
      </div>
    </Surface>
  );
}
