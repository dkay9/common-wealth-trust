const points = [
  {
    title: "Education",
    detail:
      "Many students encounter a computer for the first time only days before sitting compulsory, high-stakes national examinations.",
  },
  {
    title: "Livelihoods",
    detail:
      "Farmers without real-time market information remain vulnerable to monopoly buyers and unfair prices.",
  },
  {
    title: "Healthcare",
    detail:
      "Paper-based medical systems delay care, consume clinicians' time, and increase the risk of errors.",
  },
];

export default function Problem() {
  return (
    <section className="bg-ink py-20 text-cream">
      <div className="mx-auto max-w-8xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <h2 className="font-display text-3xl text-balance md:text-4xl">
            Closing the gap in underserved communities
          </h2>
          <p className="text-cream/70">
            Commonwell Trust is an international charity helping to close
            the infrastructure gap in underserved communities by
            installing affordable water, education, and health
            infrastructure, so that rural families, farmers, and health
            workers can fully participate in a thriving economy.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 border-t border-cream/15 pt-10 md:grid-cols-3">
          {points.map((point, i) => (
            <div key={point.title}>
              <span className="text-sm font-semibold text-terracotta-light">
                0{i + 1}
              </span>
              <h3 className="mt-3 font-display text-xl">{point.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/60">
                {point.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}