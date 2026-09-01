import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main>
      <Navbar />

      <section className="bg-forest py-20 text-cream">
        <div className="mx-auto max-w-8xl px-6 md:px-10">
          <span className="text-xs font-semibold uppercase tracking-wide text-terracotta-light">
            We'd Love To Hear From You
          </span>
          <h1 className="mt-3 max-w-lg font-display text-4xl md:text-5xl">
            Contact Us
          </h1>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="mx-auto grid max-w-8xl grid-cols-1 gap-14 px-6 md:grid-cols-2 md:px-10">
          <form className="flex flex-col gap-5">
            <div>
              <label className="text-sm font-medium text-ink">Name</label>
              <input
                type="text"
                className="mt-2 w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none focus:border-terracotta"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-ink">Email</label>
              <input
                type="email"
                className="mt-2 w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none focus:border-terracotta"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-ink">
                What's this about?
              </label>
              <select className="mt-2 w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none focus:border-terracotta">
                <option>General inquiry</option>
                <option>Partnership opportunity</option>
                <option>Media request</option>
                <option>Volunteering</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium text-ink">Message</label>
              <textarea
                rows={5}
                className="mt-2 w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none focus:border-terracotta"
                placeholder="Tell us a bit more..."
              />
            </div>
            <button
              type="submit"
              className="mt-2 w-fit rounded-full bg-terracotta px-8 py-3.5 font-semibold text-cream transition hover:bg-terracotta-dark"
            >
              Send Message
            </button>
          </form>

          <div className="flex flex-col gap-8">
            <div className="rounded-3xl bg-sand p-8">
              <h3 className="font-display text-xl text-ink">Head Office</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">
                120 Wellington Street West
                <br />
                Toronto, ON M5V 3E4
                <br />
                Canada
              </p>
            </div>
            <div className="rounded-3xl bg-sand p-8">
              <h3 className="font-display text-xl text-ink">Field Office</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">
                Plot 14, Kira Road
                <br />
                Kampala, Uganda
              </p>
            </div>
            <div className="rounded-3xl bg-sand p-8">
              <h3 className="font-display text-xl text-ink">Get in Touch</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">
                hello@commonwelltrust.org
                <br />
                +1 (416) 555-0138
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
