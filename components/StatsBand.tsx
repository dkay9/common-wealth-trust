type Stat = {
  value: string;
  label: string;
};

type StatsBandProps = {
  stats: Stat[];
};

export default function StatsBand({ stats }: StatsBandProps) {
  return (
    <section className="bg-terracotta py-14 text-cream">
      <div className="mx-auto grid max-w-8xl grid-cols-2 divide-cream/20 px-6 md:grid-cols-4 md:divide-x md:px-10">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`px-0 md:px-8 ${i > 0 ? "md:first:px-0" : ""}`}
          >
            <p className="font-display text-4xl md:text-5xl">{stat.value}</p>
            <p className="mt-2 text-sm text-cream/80">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}