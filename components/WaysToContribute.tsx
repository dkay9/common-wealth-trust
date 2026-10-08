type ContributeItem = {
  icon: "funding" | "connectivity" | "equipment" | "technical";
  number: string;
  title: string;
  description: string;
};

const icons: Record<ContributeItem["icon"], React.ReactNode> = {
  funding: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
      <rect x="3" y="8" width="18" height="12" rx="1" />
      <path d="M3 8V6a2 2 0 0 1 2-2h5l2 3h7a1 1 0 0 1 1 1v0" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  connectivity: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
      <path d="M12 20h.01M8.5 16.5a5 5 0 0 1 7 0M5 13a10 10 0 0 1 14 0M2 9.5a15 15 0 0 1 20 0" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  equipment: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
      <rect x="3" y="4" width="18" height="12" rx="1" />
      <path d="M8 20h8M12 16v4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  technical: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
      <path d="m8 9-4 3 4 3M16 9l4 3-4 3M13 6l-2 12" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

type WaysToContributeProps = {
  heading: string;
  summary: string;
  items: ContributeItem[];
};

export default function WaysToContribute({ heading, summary, items }: WaysToContributeProps) {
  return (
    <section className="bg-cream py-20">
      <div className="mx-auto max-w-8xl px-6 md:px-10">
        <div className="grid grid-cols-1 overflow-hidden border-2 border-ink md:grid-cols-[1fr_1.4fr]">
          <div className="flex flex-col justify-between bg-gradient-to-br from-terracotta to-terracotta-dark p-10 text-cream">
            <h2 className="font-display text-4xl">{heading}</h2>
            <p className="mt-10 text-sm text-cream/85 md:mt-0">{summary}</p>
          </div>

          <div className="divide-y divide-ink/10 bg-cream">
            {items.map((item) => (
              <div key={item.title} className="flex items-start gap-4 px-8 py-6">
                <span className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center border-2 border-terracotta/30 text-terracotta">
                  {icons[item.icon]}
                </span>
                <div>
                  <span className="text-xs font-bold text-terracotta">{item.number}</span>
                  <h3 className="mt-1 font-display text-lg text-ink">{item.title}</h3>
                  <p className="mt-1 text-sm text-ink/60">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}