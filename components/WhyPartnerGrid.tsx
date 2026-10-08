type Reason = {
  number: string;
  title: string;
  description: string;
};

type WhyPartnerGridProps = {
  title: string;
  description: string;
  reasons: Reason[];
};

export default function WhyPartnerGrid({ title, description, reasons }: WhyPartnerGridProps) {
  return (
    <section className="bg-sand py-20">
      <div className="mx-auto max-w-8xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-end">
          <h2 className="font-display text-3xl text-ink md:text-4xl">{title}</h2>
          <p className="text-sm text-ink/60 md:text-right">{description}</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {reasons.map((reason) => (
            <div key={reason.number} className="flex gap-5 border-2 border-ink bg-cream p-7">
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center bg-terracotta text-sm font-bold text-cream">
                {reason.number}
              </span>
              <div>
                <h3 className="font-display text-lg text-ink">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}