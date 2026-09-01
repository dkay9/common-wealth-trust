export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="bg-cream py-24">
      <div className="mx-auto grid max-w-8xl grid-cols-1 items-center gap-14 px-6 md:grid-cols-2 md:px-10">
        <div className="order-2 grid grid-cols-2 gap-4 md:order-1">
          <img
            src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?q=80&w=600&auto=format&fit=crop"
            alt="Field team member speaking with a local community leader"
            className="col-span-2 h-64 w-full rounded-3xl object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=400&auto=format&fit=crop"
            alt="Volunteers reviewing a construction plan"
            className="h-40 w-full rounded-3xl object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=400&auto=format&fit=crop"
            alt="Children at a rebuilt rural school"
            className="h-40 w-full rounded-3xl object-cover"
          />
        </div>

        <div className="order-1 md:order-2">
          <span className="text-xs font-semibold uppercase tracking-wide text-terracotta">
            Who We Are
          </span>
          <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">
            Local teams. Long-term commitments.
          </h2>
          <p className="mt-5 text-ink/70">
            Commonwell Trust was founded by a small group of engineers and
            educators who believed that lasting change comes from partnership,
            not aid drops. Every project is led by staff based in the
            communities we serve, and every site is monitored for at least
            five years after completion.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-6 border-t border-ink/10 pt-8">
            <div>
              <p className="font-display text-2xl text-ink">14 yrs</p>
              <p className="text-sm text-ink/60">Operating in the field</p>
            </div>
            <div>
              <p className="font-display text-2xl text-ink">98%</p>
              <p className="text-sm text-ink/60">Projects still active</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
