import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import SectionTabs from "@/components/SectionTabs";
import { supportNav } from "@/lib/nav-data";

const tabs = supportNav.items.map((item) => ({
  label: item.title,
  anchor: item.anchor,
}));

export default function SupportPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Fund, Equip, Connect, Or Advise"
        title="There's a role here for whatever you bring."
        description="Whether it's funding, equipment, technical expertise, or a direct donation — every form of support maps to a real project."
        image="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1600&auto=format&fit=crop"
      />
      <SectionTabs pageLabel="Support Our Mission" tabs={tabs} />

      <section id="partner" className="scroll-mt-32 border-b border-ink/5 bg-cream py-20">
        <div className="mx-auto grid max-w-8xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:px-10">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wide text-terracotta">
              Fund, Equip, Connect, Or Advise
            </span>
            <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">
              Partner With Us
            </h2>
            <p className="mt-4 text-ink/70">
              Corporate partners support our work through project funding,
              in-kind equipment donations, technical expertise, and
              introductions to communities or local governments we haven't
              reached yet.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Multi-year funding partnerships tied to a named project",
                "In-kind donations of equipment, materials, or logistics",
                "Employee volunteer placements in the field",
                "Advisory support in engineering, health, or education",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-ink/70">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-terracotta" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="mailto:partnerships@commonwelltrust.org"
              className="mt-8 inline-block rounded-full bg-forest px-7 py-3.5 font-semibold text-cream transition hover:bg-forest-dark"
            >
              Start a Conversation
            </a>
          </div>
          <div className="overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=900&auto=format&fit=crop"
              alt="Partner meeting in the field"
              className="h-80 w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section id="donate" className="scroll-mt-32 bg-forest py-20 text-cream">
        <div className="mx-auto max-w-8xl px-6 text-center md:px-10">
          <span className="text-xs font-semibold uppercase tracking-wide text-terracotta-light">
            Help Open The Next Site
          </span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl">Donate</h2>
          <p className="mx-auto mt-4 max-w-lg text-cream/80">
            A one-time or monthly gift goes directly toward the next well,
            classroom, or clinic on our project list.
          </p>
          <Link
            href="/donate"
            className="mt-8 inline-block rounded-full bg-terracotta px-8 py-4 font-semibold text-cream transition hover:bg-terracotta-dark"
          >
            Go to Donation Page
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
