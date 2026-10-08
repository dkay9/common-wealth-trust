import Link from "next/link";

export default function ImpactAccountability() {
  return (
    <section className="bg-forest py-24 text-cream">
      <div className="mx-auto grid max-w-8xl grid-cols-1 items-center gap-14 px-6 md:grid-cols-2 md:px-10">
        <div>
          <h2 className="font-display text-3xl text-balance md:text-4xl">
            Impact and accountability
          </h2>
          <p className="mt-5 text-cream/80">
            Commonwell Trust publishes an annual impact report to share
            our progress, document our stewardship of donor funds, and
            hold ourselves accountable to the communities we serve. We
            are committed to transparency in all that we do.
          </p>
          <Link
            href="/impact"
            className="mt-8 inline-flex items-center gap-3 border-2 border-cream bg-cream px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-forest transition hover:bg-sand"
          >
            Read Our Impact Reports
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

        <div className="overflow-hidden border-2 border-cream/30">
          <img
            src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=900&auto=format&fit=crop"
            alt="A community health worker assisting a patient"
            className="h-80 w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}