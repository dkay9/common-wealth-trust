import Link from "next/link";

type Priority = {
  number: string;
  title: string;
  paragraphs: string[];
  features?: string[];
  summary?: string;
};

type PrioritiesSectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  priorities: Priority[];
  closingText: string;
  ctaLabel: string;
  ctaHref: string;
};

function PriorityRow({ priority }: { priority: Priority }) {
  return (
    <div className="grid grid-cols-1 border-2 border-ink md:grid-cols-[1fr_2fr]">
      <div className="flex flex-col justify-center bg-forest p-8 text-cream">
        <span className="font-display text-4xl text-terracotta-light">
          {priority.number}
        </span>
        <h3 className="mt-3 font-display text-xl">{priority.title}</h3>
      </div>

      <div className="bg-cream p-8">
        {priority.paragraphs.map((p, i) => (
          <p key={i} className="mt-3 text-sm text-ink/70 first:mt-0">
            {p}
          </p>
        ))}

        {priority.features && (
          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {priority.features.map((feature) => (
              <div
                key={feature}
                className="border-2 border-ink px-4 py-3 text-sm font-medium text-ink"
              >
                {feature}
              </div>
            ))}
          </div>
        )}

        {priority.summary && (
          <p className="mt-5 text-sm font-semibold text-ink">{priority.summary}</p>
        )}
      </div>
    </div>
  );
}

export default function PrioritiesSection({
  id,
  eyebrow,
  title,
  priorities,
  closingText,
  ctaLabel,
  ctaHref,
}: PrioritiesSectionProps) {
  return (
    <section id={id} className="scroll-mt-32 bg-sand py-20">
      <div className="mx-auto max-w-8xl px-6 md:px-10">
        <span className="text-xs font-semibold uppercase tracking-wide text-terracotta">
          {eyebrow}
        </span>
        <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">{title}</h2>

        <div className="mt-10 flex flex-col gap-6">
          {priorities.map((priority) => (
            <PriorityRow key={priority.number} priority={priority} />
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 items-center gap-6 border-2 border-ink bg-cream p-8 md:grid-cols-[2fr_1fr]">
          <p className="text-ink/70">{closingText}</p>
          <Link
            href={ctaHref}
            className="inline-flex items-center justify-center gap-3 border-2 border-terracotta bg-terracotta px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-cream transition hover:bg-terracotta-dark"
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
      </div>
    </section>
  );
}