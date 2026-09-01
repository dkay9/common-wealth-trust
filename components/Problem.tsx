const points = [
  {
    title: "Water",
    detail:
      "1 in 4 people in the regions we serve walk over an hour a day to collect water that often isn't safe to drink.",
  },
  {
    title: "Education",
    detail:
      "Rural schools frequently operate without electricity, textbooks, or enough trained teachers to keep pace with enrollment.",
  },
  {
    title: "Healthcare",
    detail:
      "The nearest clinic can be a half-day's travel, turning treatable conditions into medical emergencies.",
  },
];

export default function Problem() {
  return (
    <section className="bg-sand py-24">
      <div className="mx-auto max-w-8xl px-6 md:px-10">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl text-ink md:text-4xl">
            The gap is basic infrastructure — not effort.
          </h2>
          <p className="mt-4 text-ink/70">
            Every community we work with already has the will to change its
            future. What's missing is the physical foundation to build on.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {points.map((point, i) => (
            <div
              key={point.title}
              className="rounded-3xl bg-cream p-8 shadow-sm"
            >
              <span className="font-display text-5xl italic text-terracotta/30">
                0{i + 1}
              </span>
              <h3 className="mt-4 font-display text-xl text-ink">
                {point.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/60">
                {point.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
