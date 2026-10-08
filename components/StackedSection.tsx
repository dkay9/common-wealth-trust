type StackedSectionProps = {
  id: string;
  title: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
};

export default function StackedSection({
  id,
  title,
  paragraphs,
  image,
  imageAlt,
}: StackedSectionProps) {
  return (
    <section id={id} className="scroll-mt-32 border-b border-ink/5 bg-cream py-20">
      <div className="mx-auto max-w-8xl px-6 md:px-10">
        <h2 className="font-display text-3xl text-ink md:text-4xl">{title}</h2>
        <div className="mt-5 max-w-2xl">
          {paragraphs.map((p, i) => (
            <p key={i} className="mt-4 text-ink/70 first:mt-0">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-10 overflow-hidden border-2 border-ink">
          <img src={image} alt={imageAlt} className="h-96 w-full object-cover" />
        </div>
      </div>
    </section>
  );
}