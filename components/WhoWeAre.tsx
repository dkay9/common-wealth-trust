import Link from "next/link";

export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="bg-cream py-24">
      <div className="mx-auto grid max-w-8xl grid-cols-1 items-center gap-14 px-6 md:grid-cols-2 md:px-10">
        <div className="overflow-hidden border-2 border-ink">
          <img
            src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?q=80&w=900&auto=format&fit=crop"
            alt="Field team working with a community"
            className="h-80 w-full object-cover"
          />
        </div>

        <div>
          <span className="text-xs font-semibold uppercase tracking-wide text-terracotta">
            Who We Are
          </span>
          <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">
            Local teams. Long-term commitments.
          </h2>
          <p className="mt-5 text-ink/70">
            Commonwell Trust is an international charity founded in 2011.
            Today, most of our programming is delivered in underserved
            communities across four countries.
          </p>
          <p className="mt-4 text-ink/70">
            Every project is co-funded and locally run. We work alongside
            schools, farmer cooperatives, and medical centres so the
            infrastructure, training, and skills remain useful long after
            installation.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-block font-semibold text-terracotta hover:text-terracotta-dark"
          >
            Learn more about Commonwell Trust →
          </Link>
        </div>
      </div>
    </section>
  );
}