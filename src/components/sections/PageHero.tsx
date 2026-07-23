import { Surface, Btn } from "@/components/ui";

export function PageHero({
  eyebrow,
  title,
  resumeTitle,
  subtitle,
  copy,
  actions,
}: {
  eyebrow?: string;
  title: string;
  resumeTitle?: string;
  subtitle: string;
  copy: string;
  actions: readonly { href: string; label: string; primary: boolean }[];
}) {
  return (
    <Surface className="p-6 sm:p-10">
      {eyebrow ? (
        <span className="inline-flex rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
          {eyebrow}
        </span>
      ) : null}
      <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">{title}</h1>
      {resumeTitle ? <p className="mt-1 text-lg font-medium">{resumeTitle}</p> : null}
      <p className="mt-2 text-base font-medium text-brand">{subtitle}</p>
      <p className="mt-3 max-w-2xl text-muted">{copy}</p>
      {actions.length ? (
        <div className="mt-6 flex flex-wrap gap-3">
          {actions.map((action) => (
            <Btn
              key={action.label}
              href={action.href}
              variant={action.primary ? "primary" : "secondary"}
              download={action.primary && action.href.endsWith(".pdf")}
            >
              {action.label}
            </Btn>
          ))}
        </div>
      ) : null}
    </Surface>
  );
}
