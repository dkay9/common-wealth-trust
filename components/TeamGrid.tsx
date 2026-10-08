import Image from "next/image";

type TeamMember = {
  photo: string;
  role: string;
  name: string;
  bio: string;
};

type TeamGridProps = {
  id: string;
  eyebrow: string;
  title: string;
  members: TeamMember[];
};

export default function TeamGrid({ id, eyebrow, title, members }: TeamGridProps) {
  return (
    <section id={id} className="scroll-mt-32 border-b border-ink/5 bg-cream py-20">
      <div className="mx-auto max-w-8xl px-6 md:px-10">
        <span className="text-xs font-semibold uppercase tracking-wide text-terracotta">
          {eyebrow}
        </span>
        <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">{title}</h2>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
          {members.map((member) => (
            <div key={member.name} className="overflow-hidden border-2 border-ink">
              <div className="relative aspect-[4/3] w-full bg-sand">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-contain"
                />
              </div>
              <div className="p-6">
                <p className="text-sm font-semibold text-terracotta">{member.role}</p>
                <h3 className="mt-1 font-display text-xl text-ink">{member.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}