import Link from "next/link";
import DonateButton from "./DonateButton";

type ImpactFundCTAProps = {
  title: string;
  description: string;
};

export default function ImpactFundCTA({ title, description }: ImpactFundCTAProps) {
  return (
    <section className="bg-terracotta py-20 text-cream">
      <div className="mx-auto grid max-w-8xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2 md:px-10">
        <h2 className="font-display text-3xl text-balance md:text-5xl">{title}</h2>
        <div>
          <p className="text-cream/85">{description}</p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <DonateButton variant="light" size="sm" />
            <Link
              href="/support#partner"
              className="inline-flex items-center justify-center gap-3 border-2 border-ink bg-ink px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-cream transition hover:bg-forest-dark"
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