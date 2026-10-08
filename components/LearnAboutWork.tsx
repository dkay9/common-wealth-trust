import Link from "next/link";

export default function LearnAboutWork() {
  return (
    <section className="bg-terracotta py-24 text-cream">
      <div className="mx-auto grid max-w-8xl grid-cols-1 items-center gap-14 px-6 md:grid-cols-2 md:px-10">
        <div className="overflow-hidden border-2 border-cream/30">
          <img
            src="https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=900&auto=format&fit=crop"
            alt="Community members at a program site"
            className="h-80 w-full object-cover"
          />
        </div>

        <div>
          <h2 className="font-display text-3xl text-balance md:text-4xl">
            Learn about our work
          </h2>
          <p className="mt-5 text-cream/85">
            Whether it's equipping schools with classrooms, connecting
            farmer cooperatives to market information, or moving rural
            clinics from paper files to digital records, all of our work
            is about enabling rural communities to fully participate in
            and thrive within the wider economy.
          </p>
          <Link
            href="/what-we-do"
            className="mt-8 inline-flex items-center gap-3 border-2 border-cream bg-cream px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-terracotta transition hover:bg-sand"
          >
            Learn More About Our Programs
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