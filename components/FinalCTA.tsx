export default function FinalCTA() {
  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
        <h2 className="font-display text-3xl text-ink text-balance md:text-5xl">
          Ready to put your generosity to work?
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-ink/70">
          Whether it's a one-time gift or a monthly partnership, every
          contribution goes directly to a project you can track.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#donate"
            className="rounded-full bg-terracotta px-8 py-4 font-semibold text-cream transition hover:bg-terracotta-dark"
          >
            Donate Now
          </a>
          <a
            href="#"
            className="rounded-full border border-ink/20 px-8 py-4 font-semibold text-ink transition hover:border-ink/40"
          >
            Partner With Us
          </a>
        </div>
      </div>
    </section>
  );
}
