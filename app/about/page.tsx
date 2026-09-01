import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import SectionTabs from "@/components/SectionTabs";
import ContentSection from "@/components/ContentSection";
import { aboutNav } from "@/lib/nav-data";

const tabs = aboutNav.items.map((item) => ({
  label: item.title,
  anchor: item.anchor,
}));

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Founded in 2011 · Currently operating in 4 countries"
        title="14 years promoting digital and economic inclusion."
        description="We exist so rural schools, farmer cooperatives, and health facilities can access the tools, connectivity, and skills they need to thrive."
        image="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1600&auto=format&fit=crop"
      />
      <SectionTabs pageLabel="About Us" tabs={tabs} />

      <ContentSection
        id="mission-vision-values"
        eyebrow="What Guides The Work"
        title="Mission, Vision & Values"
        paragraphs={[
          "Our mission is to close the infrastructure gap that keeps rural communities from participating in the digital and economic opportunities everyone else takes for granted.",
          "We believe access should be co-owned, not delivered. Every project is built with the community that will run it long after we've moved on.",
        ]}
        bullets={[
          "Community ownership from day one",
          "Transparency in every dollar spent",
          "Long-term presence over one-time drops",
        ]}
        image="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=900&auto=format&fit=crop"
      />

      <ContentSection
        id="history"
        eyebrow="From 2011 To Today"
        title="History"
        paragraphs={[
          "Commonwell Trust began with a single well, funded by a small group of engineers who'd spent a summer volunteering abroad and came home determined to keep going.",
          "Fourteen years later, that same instinct. Build it, hand it over, keep showing up, still shapes every project we take on.",
        ]}
        image="https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=900&auto=format&fit=crop"
        reverse
      />

      <ContentSection
        id="theory-of-change"
        eyebrow="How Access Becomes Opportunity"
        title="Theory of Change"
        paragraphs={[
          "Infrastructure alone doesn't change outcomes, it has to be paired with training, maintenance, and local ownership to actually get used.",
          "That's why every well, classroom, and clinic we fund comes with a multi-year handover plan built around the people who'll depend on it.",
        ]}
        image="https://images.unsplash.com/photo-1497486751825-1233686d5d80?q=80&w=900&auto=format&fit=crop"
      />

      <ContentSection
        id="impact-accountability"
        eyebrow="Numbers, Reports, And Transparency"
        title="Impact & Accountability"
        paragraphs={[
          "We publish an annual impact report with independently verified numbers on wells drilled, classrooms built, and clinics equipped.",
          "91% of every donation goes directly to programs. The rest covers the oversight needed to keep it that way.",
        ]}
        image="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=900&auto=format&fit=crop"
        reverse
      />

      <ContentSection
        id="team"
        eyebrow="Leadership Across Every Region"
        title="Our Team"
        paragraphs={[
          "Our field teams are hired and led locally in every country we operate in, because lasting infrastructure needs people who already understand the ground it's built on.",
          "Our head office handles funding, reporting, and partnerships so field teams can stay focused on delivery.",
        ]}
        image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=900&auto=format&fit=crop"
      />

      <Footer />
    </main>
  );
}
