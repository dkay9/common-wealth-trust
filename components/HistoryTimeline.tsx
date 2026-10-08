type Milestone = {
  year: string;
  description: string;
};

type HistoryTimelineProps = {
  id: string;
  title: string;
  intro: string;
  milestones: Milestone[];
  closingText: string;
  ctaLabel: string;
  ctaHref: string;
};

export default function HistoryTimeline({
  id,
  title,
  intro,
  milestones,
  closingText,
  ctaLabel,
  ctaHref,
}: HistoryTimelineProps) {
  return (
    <section id={id} className="scroll-mt-32 border-b border-ink/5 bg-cream py-20">
      <div className="mx-auto max-w-8xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-end">
          <h2 className="font-display text-3xl text-ink md:text-4xl">{title}</h2>
          <p className="text-sm text-ink/60">{intro}</p>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-ink/15 md:block" />

          <div className="flex flex-col gap-8 md:gap-10">
            {milestones.map((milestone, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={milestone.year}
                  className="relative grid grid-cols-1 md:grid-cols-2 md:gap-x-16"
                >
                  <span className="absolute left-1/2 top-6 z-10 hidden h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border-2 border-terracotta bg-cream md:flex">
                    <span className="h-2.5 w-2.5 rounded-full bg-terracotta" />
                  </span>
                  <div
                    className={
                      isLeft
                        ? "md:col-start-1 md:pr-12 md:text-right"
                        : "md:col-start-2 md:pl-12"
                    }
                  >
                    <div className="inline-block w-full rounded-2xl border-t-4 border-terracotta bg-cream p-6 text-left shadow-md">
                      <p className="font-display text-2xl font-bold text-terracotta">
                        {milestone.year}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-ink/70">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 border-t border-ink/10 pt-10 text-center">
          <p className="mx-auto max-w-2xl text-ink/70">{closingText}</p>
          <a
            href={ctaHref}
            className="mt-6 inline-flex items-center gap-3 border-2 border-ink bg-ink px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-cream transition hover:bg-forest-dark"
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
          </a>
        </div>
      </div>
    </section>
  );
}