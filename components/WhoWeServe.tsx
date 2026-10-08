import Link from "next/link";

type ServeGroup = {
  icon: "students" | "farmers" | "health";
  title: string;
  description: string;
};

const icons: Record<ServeGroup["icon"], React.ReactNode> = {
  students: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
      <path d="M12 4 2 9l10 5 10-5-10-5ZM6 11.5V17c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  farmers: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
      <path d="M12 21c4-3 7-6.5 7-11a7 7 0 0 0-14 0c0 4.5 3 8 7 11Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 12v9" strokeLinecap="round" />
    </svg>
  ),
  health: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
      <path d="M12 21s-7-4.5-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

type WhoWeServeProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  groups: ServeGroup[];
  ctaLabel: string;
  ctaHref: string;
};

export default function WhoWeServe({
  id,
  eyebrow,
  title,
  description,
  groups,
  ctaLabel,
  ctaHref,
}: WhoWeServeProps) {
  return (
    <section id={id} className="scroll-mt-32 border-b border-ink/5 bg-sand py-20">
      <div className="mx-auto max-w-8xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-end">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wide text-terracotta">
              {eyebrow}
            </span>
            <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">{title}</h2>
          </div>
          <p className="text-sm text-ink/60 md:text-right">{description}</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {groups.map((group) => (
            <div key={group.title} className="border-2 border-ink bg-cream p-7">
              <span className="flex h-11 w-11 items-center justify-center border-2 border-terracotta/30 text-terracotta">
                {icons[group.icon]}
              </span>
              <h3 className="mt-5 font-display text-xl text-ink">{group.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/60">
                {group.description}
              </p>
            </div>
          ))}
        </div>

        <Link
          href={ctaHref}
          className="mt-10 inline-flex items-center gap-3 border-2 border-ink bg-ink px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-cream transition hover:bg-forest-dark"
        >
          {ctaLabel}
          <svg
            className="h-3 w-3"
            viewBox="0 0 12 12"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path d="M2 2h8v8" strokeLinecap="square" />
          </svg>
        </Link>
      </div>
    </section>
  );
}