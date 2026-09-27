const stats = [
  { value: "1100", label: "From Survival to Self-Reliance"},
  { value: "102", label: "Safe Learning, Nourished Children" },
  { value: "∞", label: "Healing Beyond Skills" },
  { value: "91%", label: "Of donations go to programs" },
];

export default function ImpactStats() {
  return (
    <section id="impact" className="bg-forest py-16 text-cream">
      <div className="mx-auto grid max-w-8xl grid-cols-2 gap-8 px-6 md:grid-cols-4 md:px-10">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center md:text-left">
            <p className="font-display text-4xl italic text-terracotta-light md:text-5xl">
              {stat.value}
            </p>
            <p className="mt-2 text-sm text-cream/70">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
