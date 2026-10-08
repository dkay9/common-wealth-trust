import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import SectionTabs from "@/components/SectionTabs";
import ContentSection from "@/components/ContentSection";
import MissionVisionValues from "@/components/MissionVisionValues";
import TeamGrid from "@/components/TeamGrid";
import { aboutNav } from "@/lib/nav-data";
import HistoryTimeline from "@/components/HistoryTimeline";

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

      <MissionVisionValues
        id="mission-vision-values"
        title="Mission, vision and values"
        mission={{
          heading: "Our mission",
          text: "To empower vulnerable women, single mothers, and youth in Uganda through vocational skills training, education, nutrition, childcare, and psychosocial support, enabling families to achieve self‑reliance and long‑term stability.",
        }}
        vision={{
          heading: "Our vision",
          text: "Communities where women and youth are economically independent, children are safe and educated, and families thrive with dignity and hope.",
        }}
        valuesHeading="Our Values"
        values={[
          {
            icon: "check",
            title: "Human Dignity",
            description: "Every person deserves opportunity, safety, and respect.",
          },
          {
            icon: "check",
            title: "Holistic Care",
            description:
              "Sustainable change addresses economic, emotional, and family needs together.",
          },
          {
            icon: "check",
            title: "Empowerment",
            description: "Skills and knowledge are pathways to independence.",
          },
          {
            icon: "check",
            title: "Compassion",
            description: "We respond to vulnerability with empathy and action.",
          },
          {
            icon: "check",
            title: "Community",
            description: "Strong families build resilient communities.",
          },
        ]}
        goalsTitle="Goals"
        goals={[
          "Ensure rural students acquire essential computer skills.",
          "Enable farmers to access fair markets through information.",
          "Improve efficiency and care quality in rural healthcare facilities.",
          "Reduce internet cost barriers for underserved institutions.",
          "Scale sustainable, community-run skills and access programs.",
        ]}
        divideBlock={{
          title: "Closing the digital divide in underserved communities",
          paragraphs: [
            "Commonwell Trust is an international charity helping to close the infrastructure gap in underserved communities by installing affordable digital literacy training across education, agriculture, and healthcare.",
            "More than 500 inspected & verified schools currently await assistance. Help us reach the next one.",
          ],
          image:
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=900&auto=format&fit=crop",
        }}
      />

      <HistoryTimeline
        id="history"
        title="Our History"
        intro="Commonwell Trust was founded in 2011 by a small group of engineers in Canada. Today, it operates across four countries, delivering infrastructure access and digital literacy training."
        milestones={[
          {
            year: "2025",
            description:
              "Commonwell Trust reaches a major milestone: over 320 sites now active, with hundreds more institutions on the waitlist.",
          },
          {
            year: "2024",
            description:
              "Site maintenance protocols formalized. Negotiates a bulk pricing agreement with hardware vendors to cut delivery costs and keep technician turnaround sustainable for long-term maintenance.",
          },
          {
            year: "2023",
            description:
              "34 new sites added. Over 50,000 more students are enabled to complete high school. All project outcomes now include post-installation monitoring.",
          },
          {
            year: "2022",
            description:
              "Digital connectivity provided to 34 sites. Site plan receives a multi-year grant from a major regional development fund.",
          },
          {
            year: "2016",
            description:
              "Installed 4 new systems: our 4th high school, 1st medical clinic, 9th farmer co-op and 1st credit union. Total of 11 operating systems.",
          },
          {
            year: "2015",
            description:
              "Installed more than 15 mini-computer labs at schools and farmer co-ops. The latter enabled farmers to become computer literate, effectively market produce and even diagnose and treat crop disease.",
          },
          {
            year: "2011",
            description:
              "A field technician approached Commonwell Trust to install a demonstration mini-lab system at schools and farmer co-ops in Uganda. By year end, Robert Porter and the team had become fully operational in Uganda.",
          },
          {
            year: "2009",
            description:
              "Commonwell Trust is formalized as a registered charity in Canada, distributing highly compressed hardware and browsing programs to rural and humanitarian beneficiaries.",
          },
          {
            year: "2007",
            description:
              "Commonwell Trust operated an HF radio e-mail system with its first base of operations. Several systems were also tracked at a music program in a nearby country.",
          },
          {
            year: "2004",
            description:
              "Rob Porter is sponsored by his local Rotary Club to fund the installation of a demonstration HF radio e-mail system for a rural medical clinic overseas.",
          },
        ]}
        closingText="Over time, Commonwell Trust evolved from simply donating computers to building affordable, sustainable infrastructure supported by training, connectivity regulations, and local capacity building. Today, the model delivers multi-sector digital access across education, agriculture, and healthcare. Demand continues to outpace available funding, with 500+ institutions on waiting lists across the region."
        ctaLabel="Learn How You Can Support Our Mission"
        ctaHref="/support"
      />

      <ContentSection
        id="theory-of-change"
        eyebrow="How Access Becomes Opportunity"
        title="Theory of Change"
        paragraphs={[
          "If CHS provides vulnerable single mothers and youth with daily nutrition, childcare, primary education, sexual education, psychosocial support, and comprehensive vocational skills training aligned with market needs…",
          "AND equips graduates with entrepreneurship training, financial literacy to launch microbusinesses…",
          "THEN women will gain employable skills, start small enterprises, earn income, and care for their children, while children receive consistent nutrition and education in a safe environment…",
          "SO THAT families break cycles of poverty, reduce crisis-driven harm, and build stable, resilient, and empowered futures across generations.",
        ]}
        image="https://images.unsplash.com/photo-1497486751825-1233686d5d80?q=80&w=900&auto=format&fit=crop"
      />

      <TeamGrid
        id="team"
        eyebrow="Leadership Across Every Region"
        title="Our Team"
        members={[
          {
            photo: "/images/team/team-image1.jpg",
            role: "Founder",
            name: "Ntono Moreen",
            bio: "Moreen was born in Buyala Budondo, Jinja District, Uganda, 1990. She graduated Trinity College Buwagi high school, 2009, and Busoga University (Iganga) Bachelor Arts (info management), 2012. Moreen resides in Kasangati, Wakiso District, Uganda.",
          },
          {
            photo: "/images/team/team-image2.jpg",
            role: "Vice, Chairperson",
            name: "Tabula Robert",
            bio: "Robert was born in Nawangisa, Iganga District, Uganda, 1989. He graduated Jinja Senior Secondary high school, 2006, Makerere University (Jinja) Bachelor of Science (Education), 2009, and Busoga University (Iganga) Bachelor of Science (Computer Technology), 2013. Robert resides in Kasangati, Wakiso District, Uganda.",
          },
          {
            photo: "/images/team/team-image3.jpg",
            role: "Executive",
            name: "Robert Porter",
            bio: "Robert was born in Weyburn, Saskatchewan, Canada, 1953. He graduated Weyburn Collegiate high school, 1971, Saint Olaf College Bachelor of Arts (Physics), 1974, and University of Texas (Austin) Masters of Science (Acoustics), 1981. Robert resides in Sidney, British Columbia, Canada.",
          },
        ]}
      />

      <Footer />
    </main>
  );
}