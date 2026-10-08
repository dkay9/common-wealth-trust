import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import SectionTabs from "@/components/SectionTabs";
import StackedSection from "@/components/StackedSection";
import WhoWeServe from "@/components/WhoWeServe";
import ProgramsSection from "@/components/ProgramsSection";
import PrioritiesSection from "@/components/PrioritiesSection";
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
        eyebrow="Education · Agriculture · Healthcare"
        title="Digital foundations for rural participation."
        description="Affordable ICT centres, practical digital skills, and institution-level capacity building help unlock education, market access, and economic opportunity."
        image="https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=1600&auto=format&fit=crop"
      />
      <SectionTabs pageLabel="What We Do" tabs={tabs} />

      <StackedSection
        id="where-we-work"
        title="Where We Work"
        paragraphs={[
          "Commonwell Trust works in some of the most underserved communities. Our programs are currently being delivered in rural and peri-urban areas, focusing on areas with limited infrastructure, high poverty levels, and strong local partners ready to maximize digital access for community benefit.",
        ]}
        image="https://images.unsplash.com/photo-1517022812141-23620dba5c23?q=80&w=1600&auto=format&fit=crop"
        imageAlt="Community members in front of a program site"
      />

      <WhoWeServe
        id="who-we-serve"
        eyebrow="Students, Families, And Health Workers"
        title="Who We Serve"
        description="We work through rural institutions that are ready to turn infrastructure access into practical community benefit."
        groups={[
          {
            icon: "students",
            title: "Students",
            description:
              "Rural students in under-resourced schools. Our work helps the most underserved youth in rural communities gain hands-on skills aligned with national curriculum, prepare for exams, and access higher education and employment.",
          },
          {
            icon: "farmers",
            title: "Farmer Cooperatives",
            description:
              "Commonwell Trust equips cooperatives with infrastructure and market access tools that enable price transparency, contract negotiation, and crop management.",
          },
          {
            icon: "health",
            title: "Health Workers",
            description:
              "Rural clinics and other health establishments receive the equipment and training to digitize patient records, streamline operations, and improve quality of care.",
          },
        ]}
        ctaLabel="Support Our Work"
        ctaHref="/support"
      />

      <ProgramsSection
        id="programs"
        eyebrow="Water, Education, And Healthcare"
        title="Our Programs"
        description="Our education, agriculture, and healthcare programs combine shared infrastructure, reliable connectivity, and practical training."
        programs={[
          {
            eyebrow: "Education Access",
            title: "Computer Science Literacy, Education & Access for Development",
            paragraphs: [
              "This initiative expands equitable access to computer science education in underserved secondary schools.",
              "As computer literacy becomes a prerequisite for academic progression and economic mobility, students without access to digital tools are excluded from online learning, workforce preparation, and civic participation.",
              "We address these challenges by equipping schools with the infrastructure, connectivity, and instructional capacity needed to deliver curriculum-aligned computer science education.",
            ],
            image:
              "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=900&auto=format&fit=crop",
            imageAlt: "Students in a computer lab classroom",
            stats: [
              { value: "120,000+", label: "Students served each year" },
              { value: "250+", label: "Sites installed" },
              { value: "143+", label: "High schools reached" },
            ],
          },
          {
            eyebrow: "Farming",
            title: "Farmers' Access to Resources, Markets, Information, Networks & Growth",
            paragraphs: [
              "A digital literacy and connectivity program designed to strengthen farmer cooperatives by improving access to information, markets, and economic opportunity.",
              "Through affordable internet access, shared computer centres, and practical digital skills training, cooperatives can access real-time market prices, communicate with buyers, prepare bids and documentation, manage records, and engage with government and financial systems.",
              "By reducing information gaps and strengthening digital capacity at the cooperative level, this program helps farmers negotiate fairer prices, increase incomes, and build more resilient rural economies.",
            ],
            image:
              "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=900&auto=format&fit=crop",
            imageAlt: "Farmer with agricultural equipment",
            reverse: true,
            features: [
              "Real-time market prices",
              "Buyer communication",
              "Document preparation",
              "Financial system access",
            ],
          },
          {
            eyebrow: "Medic",
            title: "Medical Efficiency through Digital Information & Connectivity",
            paragraphs: [
              "A digital health systems program designed to improve efficiency, quality of care, and patient experience in rural medical centres.",
              "By digitizing patient records and strengthening information workflows, this program reduces administrative delays that consume clinicians' time and slow service delivery.",
              "Through shared computer infrastructure, reliable internet access, and practical training in digital record management, health workers retrieve, update, and report patient information more efficiently — allowing caregivers to focus on care rather than paperwork.",
            ],
            image:
              "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=900&auto=format&fit=crop",
            imageAlt: "Health worker at a rural clinic",
            features: [
              "Digitized patient records",
              "Faster patient processing",
              "Efficient reporting",
              "Care-focused workflows",
            ],
          },
        ]}
        ctaLabel="Learn More About How Our Programs Are Making A Difference"
        ctaHref="/impact"
      />

      <PrioritiesSection
        id="what-we-prioritize"
        eyebrow="Access That Actually Gets Used"
        title="What We Prioritize"
        priorities={[
          {
            number: "01",
            title: "Digital economic infrastructure",
            paragraphs: [
              "We believe digital access is economic infrastructure. Just as roads, electricity, and water systems enable growth, affordable internet connectivity, computers, and digital skills are essential for rural communities to participate in today's economy.",
              "Our priorities focus on building the digital foundations that allow rural communities to learn, earn, trade, and deliver services more effectively, driving inclusive and sustainable economic growth.",
            ],
          },
          {
            number: "02",
            title: "Productive participation",
            paragraphs: [
              "We prioritize digital skills that are directly linked to real economic opportunity. Students, farmers, health workers, and cooperative leaders are increasingly required to interact with digital systems — from exams to market platforms to health records.",
              "By equipping schools and institutions with infrastructure and practical training, we enable people to:",
            ],
            features: [
              "Pass compulsory national examinations required for educational advancement",
              "Access online markets, pricing information, and digital services",
              "Strengthen employability and entrepreneurial capacity in a digital economy",
            ],
            summary: "This focus ensures that digital access translates into productive participation, not just connectivity.",
          },
          {
            number: "03",
            title: "Local market transformation",
            paragraphs: [
              "Inclusive economic growth depends on well-functioning local markets. Our sites serve as digital gateways that allow farmers and cooperatives to compete on more equal terms.",
            ],
            features: [
              "Access real-time pricing information",
              "Identify competitive buyers and suppliers",
              "Negotiate fairer contracts",
              "Improve transparency and record-keeping",
            ],
            summary: "By reducing information asymmetry, digital access helps dismantle exploitative market structures and strengthens incomes and local governance.",
          },
          {
            number: "04",
            title: "Digitally enabled institutions",
            paragraphs: [
              "Schools, health centres, and cooperatives are not only service providers; they are economic anchors within rural communities. We prioritize strengthening these institutions so they can:",
            ],
            features: [
              "Deliver services more efficiently",
              "Reduce administrative and operational inefficiencies",
              "Act as shared digital access points for surrounding communities",
            ],
            summary: "Digitally enabled institutions become hubs of knowledge, coordination, and opportunity, supporting broader economic participation beyond their immediate users.",
          },
        ]}
        closingText="Commonwell Trust prioritizes the digital foundations that enable rural communities to participate fully in modern economic life. Through the provision of affordable digital labs, practical training, and institution-level capacity building, we help unlock education, market access, and economic opportunity — ensuring that rural communities are not left behind in the digital age."
        ctaLabel="Support Our Mission"
        ctaHref="/support"
      />

      <Footer />
    </main>
  );
}