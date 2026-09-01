const tiers = [
  { amount: "$35", impact: "Provides clean water access for one family for a year" },
  { amount: "$120", impact: "Supplies a classroom with books and learning materials" },
  { amount: "$450", impact: "Trains one community health worker" },
  { amount: "$2,800", impact: "Funds a full well drilling and installation" },
];

export default function FundingCTA() {
  return (
    <section id="donate" className="bg-forest py-24 text-cream">
      <div className="mx-auto max-w-8xl px-6 md:px-10">
        <div className="max-w-xl">
          <span className="text-xs font-semibold uppercase tracking-wide text-terracotta-light">
            Where It Goes
          </span>
          <h2 className="mt-3 font-display text-3xl text-balance md:text-4xl">
            Every dollar is tied to something real.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tiers.map((tier) => (
            <div
              key={tier.amount}
              className="flex flex-col justify-between rounded-3xl bg-forest-light/40 p-6"
            >
              <p className="font-display text-3xl italic text-terracotta-light">
                {tier.amount}
              </p>
              <p className="mt-4 text-sm text-cream/80">{tier.impact}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <a
            href="#"
            className="rounded-full bg-terracotta px-8 py-4 font-semibold text-cream transition hover:bg-terracotta-dark"
          >
            Make a Donation
          </a>
          <a
            href="#"
            className="rounded-full border border-cream/30 px-8 py-4 font-semibold text-cream transition hover:border-cream/60"
          >
            Become a Monthly Partner
          </a>
        </div>
      </div>
    </section>
  );
}
