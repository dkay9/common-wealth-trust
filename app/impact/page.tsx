import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImpactStats from "@/components/ImpactStats";
import PageHero from "@/components/PageHero";
import ReportsSection from "@/components/ReportsSection";
import ImpactFundCTA from "@/components/ImpactFundCTA";

export default function ImpactPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="Figures · Reports · Charity Details"
        title="Hundreds of active sites across every region we serve."
        description="Each site serves 800–2,500 people, reaching hundreds of thousands of direct beneficiaries across education, agriculture, and healthcare."
        image="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1600&auto=format&fit=crop"
      />

      <ImpactStats />

      <ReportsSection
        title="Transparency and accountability"
        description="Partners and donors should be able to see what we do, how we describe our reach, and the model behind each installation."
        reports={[
          {
            title: "2025 Annual Report",
            description: "A year-by-year view of program activity, operations, and organizational progress.",
            href: "#",
          },
          {
            title: "2026 Impact Report",
            description: "Our reach across schools, farmer cooperatives, and medical centres, and the work still ahead.",
            href: "#",
          },
          {
            title: "Organizational Profile",
            description: "A concise introduction to Commonwell Trust, our operating model, and our programs.",
            href: "#",
          },
        ]}
        charityHeading="Registered Charity"
        charityLines={[
          "Commonwell Trust",
          "Charity registration number 808874549RR0001",
        ]}
        charityText="Commonwell Trust is accountable to its charity obligations and to the communities that co-fund and operate each site. For grant-level reporting or a due-diligence conversation, contact our team directly."
      />

      <ImpactFundCTA
        title="Fund an outcome you can point to."
        description="A partnership can be tied to a named site, program area, or group of institutions, with reporting from the field."
      />

      <Footer />
    </main>
  );
}