type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  image: string;
  statLabel?: string;
  statValue?: string;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  image,
  statLabel,
  statValue,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={image} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/90 via-forest-dark/70 to-forest-dark/40" />
      </div>

      <div className="relative mx-auto flex min-h-[520px] max-w-8xl flex-col justify-center px-6 py-24 md:px-10">
        {eyebrow && (
          <span className="mb-4 text-sm font-semibold uppercase tracking-wide text-terracotta-light">
            {eyebrow}
          </span>
        )}
        <h1 className="max-w-2xl font-display text-4xl leading-[1.1] text-cream text-balance md:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-lg text-lg text-cream/80">{description}</p>

        {statLabel && statValue && (
          <div className="mt-10 w-fit rounded-2xl bg-terracotta px-7 py-5 text-cream shadow-xl">
            <p className="font-display text-2xl">{statValue}</p>
            <p className="mt-1 text-sm text-cream/85">{statLabel}</p>
          </div>
        )}
      </div>
    </section>
  );
}
