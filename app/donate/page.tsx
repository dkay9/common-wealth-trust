import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const tiers = [
  { amount: "$35", impact: "Clean water access for one family for a year" },
  { amount: "$120", impact: "A classroom's worth of books and materials" },
  { amount: "$450", impact: "Trains one community health worker" },
  { amount: "$2,800", impact: "A full well drilling and installation" },
];

export default function DonatePage() {
  return (
    <main>
      <Navbar />

      <section className="bg-forest py-20 text-cream">
        <div className="mx-auto max-w-8xl px-6 text-center md:px-10">
          <span className="text-xs font-semibold uppercase tracking-wide text-terracotta-light">
            Help Open The Next Site
          </span>
          <h1 className="mt-3 font-display text-4xl md:text-5xl">
            Make a Donation
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-cream/80">
            Choose an amount below, or enter your own. Every gift is applied
            directly to an active project.
          </p>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {tiers.map((tier) => (
              <button
                key={tier.amount}
                type="button"
                className="rounded-2xl border border-ink/10 bg-sand p-5 text-left transition hover:border-terracotta"
              >
                <p className="font-display text-2xl text-terracotta">
                  {tier.amount}
                </p>
                <p className="mt-2 text-xs text-ink/60">{tier.impact}</p>
              </button>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-ink/10 bg-sand p-8">
            <p className="text-sm font-semibold text-ink">
              This is a placeholder page.
            </p>
            <p className="mt-2 text-sm text-ink/60">
              Wire this up to your payment processor of choice (Stripe,
              PayPal Giving, GiveWP, etc.) — the tier buttons and a custom
              amount field are laid out and ready to connect.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <input
                type="text"
                placeholder="Custom amount"
                disabled
                className="w-full rounded-full border border-ink/20 bg-cream px-5 py-3 text-sm text-ink/50"
              />
              <button
                type="button"
                disabled
                className="whitespace-nowrap rounded-full bg-terracotta/50 px-7 py-3 text-sm font-semibold text-cream"
              >
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
