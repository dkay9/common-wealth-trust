const programs = [
  {
    name: "Water Access",
    desc: "Drilling and rehabilitating wells, and training local technicians to maintain them long after we leave.",
    stat: "312 wells built",
    img: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "School Infrastructure",
    desc: "Building classrooms, supplying learning materials, and funding teacher training in underserved districts.",
    stat: "47 schools rebuilt",
    img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Community Health",
    desc: "Equipping rural clinics and training community health workers to deliver basic care closer to home.",
    stat: "63 clinics equipped",
    img: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=800&auto=format&fit=crop",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="bg-cream py-24">
      <div className="mx-auto max-w-8xl px-6 md:px-10">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wide text-terracotta">
              What We Do
            </span>
            <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">
              Three programs. One goal.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-ink/60">
            Every program is designed to be handed over — owned and operated
            by the community within three years of launch.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {programs.map((program) => (
            <div key={program.name} className="group">
              <div className="overflow-hidden rounded-3xl">
                <img
                  src={program.img}
                  alt={program.name}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-5 font-display text-xl text-ink">
                {program.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">
                {program.desc}
              </p>
              <p className="mt-4 text-sm font-semibold text-terracotta">
                {program.stat}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
