const stories = [
  {
    name: "Amara's Village",
    quote:
      "The well changed everything. Our children go to school instead of walking for water.",
    img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=700&auto=format&fit=crop",
    tag: "Water Access",
  },
  {
    name: "Kibera Primary",
    quote:
      "Enrollment doubled the year after the new classrooms opened.",
    img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=700&auto=format&fit=crop",
    tag: "Education",
  },
  {
    name: "Thandwe Clinic",
    quote:
      "We used to refer every serious case two hours away. Now we treat most of them here.",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=700&auto=format&fit=crop",
    tag: "Health",
  },
];

export default function SuccessStories() {
  return (
    <section id="stories" className="bg-sand py-24">
      <div className="mx-auto max-w-8xl px-6 md:px-10">
        <span className="text-xs font-semibold uppercase tracking-wide text-terracotta">
          Stories From The Field
        </span>
        <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">
          Change, in their own words.
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {stories.map((story) => (
            <div
              key={story.name}
              className="overflow-hidden rounded-3xl bg-cream shadow-sm"
            >
              <img
                src={story.img}
                alt={story.name}
                className="h-56 w-full object-cover"
              />
              <div className="p-7">
                <span className="text-xs font-semibold uppercase tracking-wide text-terracotta">
                  {story.tag}
                </span>
                <p className="mt-3 font-display text-lg italic text-ink">
                  "{story.quote}"
                </p>
                <p className="mt-4 text-sm text-ink/60">{story.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
