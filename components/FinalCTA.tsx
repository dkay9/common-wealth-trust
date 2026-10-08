import Link from "next/link";
import DonateButton from "./DonateButton";

export default function FinalCTA() {
  return (
    <section className="bg-terracotta py-20 text-cream">
      <div className="mx-auto grid max-w-8xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2 md:px-10">
        <h2 className="font-display text-3xl text-balance md:text-5xl">
          More than 500 inspected & verified sites currently await
          assistance.
        </h2>
        <div>
          <p className="text-cream/85">
            Your donation to Commonwell Trust helps the next rural school,
            farmer cooperative, or medical centre get connected.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <DonateButton variant="light" size="sm" />
            <Link
              href="/support#partner"
              className="inline-flex items-center gap-3 border-2 border-cream px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-cream transition hover:bg-cream/10"
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
          </div>
        </div>
      </div>
    </section>
  );
}