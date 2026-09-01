import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import SectionTabs from "@/components/SectionTabs";
import ContentSection from "@/components/ContentSection";
import { whatWeDoNav } from "@/lib/nav-data";

const tabs = whatWeDoNav.items.map((item) => ({
  label: item.title,
  anchor: item.anchor,
}));

export default function WhatWeDoPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Water · Education · Healthcare"
        title="Infrastructure that gets built with communities, not for them."
        description="Every program is designed to be handed over — owned and operated locally within three years of launch."
        image="https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=1600&auto=format&fit=crop"
      />
      <SectionTabs pageLabel="What We Do" tabs={tabs} />

      <ContentSection
        id="where-we-work"
        eyebrow="Rural And Peri-Urban Communities"
        title="Where We Work"
        paragraphs={[
          "We operate across four countries, prioritizing communities with the least existing infrastructure and the strongest local leadership to sustain a new project.",
          "Every site is selected jointly with district authorities and community leaders before any funding is committed.",
        ]}
        bullets={["Kenya", "Uganda", "Tanzania", "Malawi"]}
        image="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=900&auto=format&fit=crop"
      />

      <ContentSection
        id="who-we-serve"
        eyebrow="Students, Families, And Health Workers"
        title="Who We Serve"
        paragraphs={[
          "Our programs reach schoolchildren, smallholder farmers, and the community health workers who serve as the first point of care in rural areas.",
          "Each program is designed around the specific access gap that group faces — not a one-size-fits-all deployment.",
        ]}
        image="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=900&auto=format&fit=crop"
        reverse
      />

      <ContentSection
        id="programs"
        eyebrow="Water, Education, And Healthcare"
        title="Programs"
        paragraphs={[
          "Water Access: drilling and rehabilitating wells, and training local technicians to maintain them.",
          "School Infrastructure: building classrooms and supplying learning materials in underserved districts.",
          "Community Health: equipping rural clinics and training community health workers.",
        ]}
        image="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=900&auto=format&fit=crop"
      />

      <ContentSection
        id="what-we-prioritize"
        eyebrow="Access That Actually Gets Used"
        title="What We Prioritize"
        paragraphs={[
          "We fund the training and maintenance plans behind a project as heavily as the construction itself — because a well nobody can repair doesn't stay a well for long.",
          "Every project must have a named local operator and a maintenance budget before it's approved.",
        ]}
        image="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=900&auto=format&fit=crop"
        reverse
      />

      <ContentSection
        id="success-stories"
        eyebrow="Results From Connected Communities"
        title="Success Stories"
        paragraphs={[
          "In the communities where we've worked longest, school enrollment has risen, waterborne illness has dropped, and clinics report treating cases they once had to refer hours away.",
          "Read individual site stories in our latest impact report.",
        ]}
        image="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=900&auto=format&fit=crop"
      />

      <Footer />
    </main>
  );
}
