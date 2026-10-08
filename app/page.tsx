import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import WhoWeAre from "@/components/WhoWeAre";
import LearnAboutWork from "@/components/LearnAboutWork";
import CostPerCentre from "@/components/CostPerCentre";
import ImpactAccountability from "@/components/ImpactAccountability";
import SuccessStories from "@/components/SuccessStories";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ImpactStats from "@/components/ImpactStats";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ImpactStats />
      <Problem />
      <WhoWeAre />
      <LearnAboutWork />
      <CostPerCentre />
      <ImpactAccountability />
      <SuccessStories />
      <FinalCTA />
      <Footer />
    </main>
  );
}