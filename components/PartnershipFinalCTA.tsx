import Link from "next/link";

type PartnershipFinalCTAProps = {
  title: string;
};

export default function PartnershipFinalCTA({ title }: PartnershipFinalCTAProps) {
  return (
    <section className="bg-terracotta py-16 text-cream">
      <div className="mx-auto flex max-w-8xl flex-col items-start justify-between gap-8 px-6 md:flex-row md:items-center md:px-10">
        <h2 className="font-display text-3xl text-balance md:text-4xl">{title}</h2>

        <div className="flex flex-col gap-3">
          <Link
            href="/support#partner"
            className="inline-flex items-center justify-center gap-3 border-2 border-cream bg-cream px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-terracotta transition hover:bg-sand"
          >
            Partner With Us
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
          <Link
            href="/donate"
            className="inline-flex items-center justify-center gap-3 border-2 border-ink bg-ink px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-cream transition hover:bg-forest-dark"
          >
            Donate
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