import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ImpactStats from "@/components/ImpactStats";
import Problem from "@/components/Problem";
import WhoWeAre from "@/components/WhoWeAre";
import Programs from "@/components/Programs";
import FundingCTA from "@/components/FundingCTA";
import SuccessStories from "@/components/SuccessStories";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ImpactStats />
      <Problem />
      <WhoWeAre />
      <Programs />
      <FundingCTA />
      <SuccessStories />
      <FinalCTA />
      <Footer />
    </main>
  );
}
