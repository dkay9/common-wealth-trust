import Link from "next/link";
import DonateButton from "./DonateButton";

type TextBlock = {
  heading: string;
  text: string;
};

type ValueItem = {
  icon: "check";
  title: string;
  description?: string;
};

type DivideBlock = {
  title: string;
  paragraphs: string[];
  image: string;
};

const icons: Record<ValueItem["icon"], React.ReactNode> = {
  check: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12.5 2.2 2.2L16 10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

type MissionVisionValuesProps = {
  id: string;
  title: string;
  mission: TextBlock;
  vision: TextBlock;
  valuesHeading: string;
  values: ValueItem[];
  goalsTitle?: string;
  goals?: string[];
  divideBlock?: DivideBlock;
};

export default function MissionVisionValues({
  id,
  title,
  mission,
  vision,
  valuesHeading,
  values,
  goalsTitle,
  goals,
  divideBlock,
}: MissionVisionValuesProps) {
  return (
    <section id={id} className="scroll-mt-32 border-b border-ink/5 bg-cream py-20">
      <div className="mx-auto max-w-8xl px-6 md:px-10">
        <h2 className="font-display text-4xl text-ink md:text-5xl">{title}</h2>

        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <div className="h-1 w-full bg-terracotta" />
            <h3 className="mt-6 font-bold font-display text-xl text-ink">{mission.heading}</h3>
            <p className="mt-4 text-ink/70">{mission.text}</p>
          </div>
          <div>
            <div className="h-1 w-full bg-terracotta" />
            <h3 className="mt-6 font-bold font-display text-xl text-ink">{vision.heading}</h3>
            <p className="mt-4 text-ink/70">{vision.text}</p>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 overflow-hidden rounded-2xl border-2 border-ink md:grid-cols-[1fr_2fr]">
          <div className="flex items-center bg-gradient-to-br from-forest to-forest-dark p-10">
            <h3 className="font-display text-4xl italic text-cream md:text-5xl">
              {valuesHeading}
            </h3>
          </div>
          <div className="divide-y divide-ink/10 bg-cream">
            {values.map((value) => (
              <div key={value.title} className="flex items-start gap-4 px-8 py-6">
                <span className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center text-terracotta">
                  {icons[value.icon]}
                </span>
                <div>
                  <span className="font-display font-bold text-lg text-ink">{value.title}</span>
                  {value.description && (
                    <p className="mt-1 text-sm text-ink/70">{value.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {goals && goals.length > 0 && (
          <div className="mt-14 border-2 border-ink p-8 md:p-10">
            {goalsTitle && (
              <h3 className="font-display text-2xl text-ink">{goalsTitle}</h3>
            )}
            <div className="mt-6 divide-y divide-ink/10">
              {goals.map((goal, i) => (
                <div key={goal} className="flex items-start gap-4 py-4">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border-2 border-terracotta text-sm font-bold text-terracotta">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="pt-1 text-ink/80">{goal}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {divideBlock && (
          <div className="mt-14 grid grid-cols-1 items-center gap-10 border-2 border-ink p-8 md:grid-cols-2 md:p-10">
            <div className="overflow-hidden border-2 border-ink">
              <img
                src={divideBlock.image}
                alt={divideBlock.title}
                className="h-72 w-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-display text-2xl text-ink md:text-3xl">
                {divideBlock.title}
              </h3>
              {divideBlock.paragraphs.map((p, i) => (
                <p key={i} className="mt-4 text-sm text-ink/70">
                  {p}
                </p>
              ))}
              <DonateButton size="sm" className="mt-6" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}