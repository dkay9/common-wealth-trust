import Link from "next/link";

export default function CostPerCentre() {
  return (
    <section className="bg-cream py-20">
      <div className="mx-auto max-w-8xl px-6 md:px-10">
        <div className="grid grid-cols-1 items-center gap-10 border-2 border-ink p-10 md:grid-cols-[1fr_1.6fr] md:p-14">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wide text-ink/50">
              Cost Per Site
            </span>
            <p className="mt-2 font-display text-5xl text-terracotta">
              $2,800
            </p>
            <p className="mt-2 text-sm text-ink/60">
              About $3.50 per direct user over the life of the site.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl text-ink md:text-3xl">
              Funds one complete site serving 800 or more direct users.
            </h2>
            <p className="mt-4 text-ink/70">
              Every project is co-funded and locally owned, so it keeps
              serving long after we leave.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/donate"
                className="border-2 border-ink bg-ink px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-cream transition hover:bg-forest-dark"
              >
                Fund a Site
              </Link>
              <Link
                href="/support#partner"
                className="border-2 border-terracotta bg-terracotta px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-cream transition hover:bg-terracotta-dark"
              >
                Discuss a Partnership
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}