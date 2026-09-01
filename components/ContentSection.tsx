type ContentSectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
  image: string;
  reverse?: boolean;
  bullets?: string[];
};

export default function ContentSection({
  id,
  eyebrow,
  title,
  paragraphs,
  image,
  reverse = false,
  bullets,
}: ContentSectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-32 border-b border-ink/5 py-20 ${
        reverse ? "bg-sand" : "bg-cream"
      }`}
    >
      <div
        className={`mx-auto grid max-w-8xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:px-10 ${
          reverse ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div className="overflow-hidden rounded-3xl">
          <img src={image} alt={title} className="h-80 w-full object-cover" />
        </div>

        <div>
          <span className="text-xs font-semibold uppercase tracking-wide text-terracotta">
            {eyebrow}
          </span>
          <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">
            {title}
          </h2>
          {paragraphs.map((p, i) => (
            <p key={i} className="mt-4 text-ink/70">
              {p}
            </p>
          ))}
          {bullets && (
            <ul className="mt-6 space-y-3">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 text-sm text-ink/70">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-terracotta" />
                  {bullet}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
