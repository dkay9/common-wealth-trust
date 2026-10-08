import Link from "next/link";

type StatBox = {
  value: string;
  label: string;
};

type ProgramBlock = {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
  reverse?: boolean;
  stats?: StatBox[];
  features?: string[];
};

type ProgramsSectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  programs: ProgramBlock[];
  ctaLabel: string;
  ctaHref: string;
};

function Program({ program }: { program: ProgramBlock }) {
  const { eyebrow, title, paragraphs, image, imageAlt, reverse, stats, features } = program;

  return (
    <div
      className={`grid grid-cols-1 items-center gap-10 border-t border-ink/10 py-14 first:border-t-0 first:pt-0 md:grid-cols-2 ${
        reverse ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div className="overflow-hidden border-2 border-ink">
        <img src={image} alt={imageAlt} className="h-80 w-full object-cover" />
      </div>

      <div>
        <span className="text-xs font-semibold uppercase tracking-wide text-terracotta">
          {eyebrow}
        </span>
        <h3 className="mt-2 font-display text-2xl text-ink md:text-3xl">{title}</h3>
        {paragraphs.map((p, i) => (
          <p key={i} className="mt-4 text-sm text-ink/70">
            {p}
          </p>
        ))}

        {stats && (
          <div className="mt-6 grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="border-2 border-ink p-4 text-center">
                <p className="font-display text-xl text-terracotta md:text-2xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-ink/60">{stat.label}</p>
              </div>
            ))}
          </div>
        )}

        {features && (
          <div className="mt-6 grid grid-cols-2 gap-3">
            {features.map((feature) => (
              <div
                key={feature}
                className="border-2 border-ink px-4 py-3 text-sm font-medium text-ink"
              >
                {feature}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProgramsSection({
  id,
  eyebrow,
  title,
  description,
  programs,
  ctaLabel,
  ctaHref,
}: ProgramsSectionProps) {
  return (
    <section id={id} className="scroll-mt-32 border-b border-ink/5 bg-cream py-20">
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

        <div className="mt-6">
          {programs.map((program) => (
            <Program key={program.title} program={program} />
          ))}
        </div>

        <Link
          href={ctaHref}
          className="mt-4 inline-flex items-center gap-3 border-2 border-ink bg-ink px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-cream transition hover:bg-forest-dark"
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