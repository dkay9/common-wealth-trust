import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import SectionTabs from "@/components/SectionTabs";
import PartnerIntro from "@/components/PartnerIntro";
import StatsBand from "@/components/StatsBand";
import WaysToContribute from "@/components/WaysToContribute";
import WhyPartnerGrid from "@/components/WhyPartnerGrid";
import PartnershipFinalCTA from "@/components/PartnershipFinalCTA";
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
        eyebrow="Public · Private · Strategic Partners"
        title="Partnerships make scalable digital access possible."
        description="We collaborate with corporations, foundations, government agencies, and multilateral development partners."
        image="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1600&auto=format&fit=crop"
      />
      <SectionTabs pageLabel="Support Our Mission" tabs={tabs} />

      <section id="partner" className="scroll-mt-32">
        <PartnerIntro
          paragraphs={[
            "Public and private partners are a key component of our success.",
            "We collaborate with corporations, foundations, government agencies, multilateral development partners, and other strategic partners to deliver scalable, high-impact digital access solutions. Partnerships may include funding, connectivity solutions, equipment, or technical expertise.",
            "In addition to critical financial support, many of our partners provide connectivity infrastructure, equipment, and on-the-ground technical expertise that we leverage to deliver affordable, sustainable ICT centres in the communities where we work.",
            "We're always happy to explore new ways to collaborate.",
          ]}
          enquiryText="To discuss a partnership"
          enquiryLinkText="send us a partnership enquiry"
          enquiryHref="/contact"
          image="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=900&auto=format&fit=crop"
          imageAlt="Partner meeting in the field"
        />
      </section>

      <StatsBand
        stats={[
          { value: "14+ years", label: "Closing the infrastructure gap" },
          { value: "320+", label: "Active sites installed" },
          { value: "95%+", label: "Operational rate since 2016" },
          { value: "500+", label: "Qualified institutions on the waitlist" },
        ]}
      />

      <WaysToContribute
        heading="Ways to Contribute"
        summary="The strongest partnerships match a real operating need with something a partner can provide well."
        items={[
          {
            icon: "funding",
            number: "01",
            title: "Funding",
            description: "Fund one site, a group of sites, or the systems that support installation and follow-up.",
          },
          {
            icon: "connectivity",
            number: "02",
            title: "Connectivity",
            description: "Help institutions reach affordable, dependable internet service.",
          },
          {
            icon: "equipment",
            number: "03",
            title: "Equipment",
            description: "Provide suitable computers, printers, or related equipment for rural use.",
          },
          {
            icon: "technical",
            number: "04",
            title: "Technical Expertise",
            description: "Contribute skills that help the field team install, train, maintain, and report.",
          },
        ]}
      />

      <WhyPartnerGrid
        title="Why partner with Commonwell Trust?"
        description="Our partners have helped bring reliable digital access to some of the most underserved communities — delivering measurable, durable change one site at a time."
        reasons={[
          {
            number: "01",
            title: "Proven Impact",
            description: "Support a program with 14+ years of track record, 320+ sites installed, and a 95%+ operational rate — outcomes you can measure, report, and stand behind.",
          },
          {
            number: "02",
            title: "Exceptional Cost-Efficiency",
            description: "$2,800 funds one complete site serving 800+ direct users. Among the highest-leverage digital-inclusion investments available to corporate, foundation, and DAF partners today.",
          },
          {
            number: "03",
            title: "Sustainability Built In",
            description: "Invest in a co-funding model that drives local ownership and long-term maintenance — ensuring every dollar continues generating returns long after the initial grant period.",
          },
          {
            number: "04",
            title: "Targeted or Broad Support",
            description: "Direct your partnership to our global mission or target support to a specific program stream, institution type, or geographic area.",
          },
          {
            number: "05",
            title: "Direct Engagement",
            description: "Contribute more than funding — offer technical expertise, equipment, connectivity partnerships, or employee volunteering that strengthens our operational capacity on the ground.",
          },
          {
            number: "06",
            title: "Clear Runway to Scale",
            description: "500+ inspected and verified institutions are currently on our vetted waiting list, with interest growing in new regions. The infrastructure to deploy at scale is already in place.",
          },
          {
            number: "07",
            title: "Full Accountability",
            description: "As a registered charity, we provide complete charitable accountability, tax receipts, and grant-level impact reporting tied to specific sites and beneficiaries reached.",
          },
          {
            number: "08",
            title: "Public Recognition",
            description: "Be recognized as a leader in digital inclusion through joint communications, named site recognition, and annual impact updates from the field.",
          },
        ]}
      />

      <PartnershipFinalCTA title="Build a partnership, or fund a site today." />

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