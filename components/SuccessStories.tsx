import Link from "next/link";

const stories = [
  {
    title: "From First Click to Exam Success",
    desc: "Students moved from no computer exposure to confidently completing national computer examinations.",
    img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=700&auto=format&fit=crop",
  },
  {
    title: "Transforming Farmer Cooperatives",
    desc: "Access to market data enabled cooperatives to negotiate fair prices, increase incomes, and strengthen governance.",
    img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=700&auto=format&fit=crop",
  },
];

export default function SuccessStories() {
  return (
    <section id="stories" className="bg-sand py-24">
      <div className="mx-auto max-w-8xl px-6 md:px-10">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <h2 className="font-display text-3xl text-ink md:text-4xl">
            Success stories
          </h2>
          <p className="max-w-sm text-sm text-ink/60">
            The practical outcomes appear in classrooms, cooperative
            offices, and rural healthcare facilities.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {stories.map((story) => (
            <div key={story.title} className="overflow-hidden border-2 border-ink bg-cream">
              <img
                src={story.img}
                alt={story.title}
                className="h-56 w-full object-cover"
              />
              <div className="p-7">
                <h3 className="font-display text-xl text-ink">
                  {story.title}
                </h3>
                <p className="mt-3 text-sm text-ink/60">{story.desc}</p>
                <Link
                  href="#"
                  className="mt-4 inline-block text-sm font-semibold text-terracotta hover:text-terracotta-dark"
                >
                  Read the story →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <Link
          href="#"
          className="mt-8 inline-block text-sm font-semibold text-terracotta hover:text-terracotta-dark"
        >
          Read all success stories →
        </Link>
      </div>
    </section>
  );
}