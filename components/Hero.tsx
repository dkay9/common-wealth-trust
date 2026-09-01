import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1800&auto=format&fit=crop"
          alt="Community members at a new water and computer access point"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/90 via-forest-dark/70 to-forest-dark/30" />
      </div>

      <div className="relative mx-auto flex min-h-[620px] max-w-8xl flex-col justify-center px-6 py-24 md:px-10">
        <span className="mb-4 w-fit rounded-full bg-cream/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-cream/90 backdrop-blur">
          Est. 2011 · Registered Nonprofit
        </span>
        <h1 className="max-w-2xl font-display text-4xl leading-[1.1] text-cream text-balance md:text-6xl">
          Tackling the rural water, education, and healthcare access crisis.
        </h1>
        <p className="mt-6 max-w-lg text-lg text-cream/80">
          Commonwell Trust exists to ensure rural schools, farmer
          cooperatives, and health facilities can access the infrastructure
          they need to thrive. Every project is co-funded and community-run,
          so it keeps serving long after we leave.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href="/donate"
            className="rounded-full bg-terracotta px-7 py-3.5 font-semibold text-cream transition hover:bg-terracotta-dark"
          >
            Give Today
          </Link>
          <Link
            href="/what-we-do"
            className="rounded-full border border-cream/30 px-7 py-3.5 font-semibold text-cream transition hover:border-cream/60"
          >
            See Our Work
          </Link>
        </div>

        <div className="mt-12 w-fit rounded-2xl bg-terracotta px-7 py-5 text-cream shadow-xl">
          <p className="font-display text-xl md:text-2xl">
            Help fund the next site
          </p>
          <p className="mt-1 max-w-xs text-sm text-cream/85">
            $2,800 provides one complete well or classroom serving 800–2,500
            people directly.
          </p>
        </div>
      </div>
    </section>
  );
}
