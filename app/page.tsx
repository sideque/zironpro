import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import TrustStats from "@/components/home/TrustStats";
import Industries from "@/components/home/Industries";
import CaseStudies from "@/components/home/CaseStudies";
import Services from "@/components/home/Services";
import WhyZironPro from "@/components/home/WhyZironPro";
import Benefits from "@/components/home/Benefits";
import Comparison from "@/components/home/Comparison";
import Testimonials from "@/components/home/Testimonials";
import Insights from "@/components/home/Insights";
import FAQ from "@/components/home/FAQ";
import FinalCTA from "@/components/home/FinalCTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0D1420]">
      <Navbar />
      <Hero />
      <TrustStats />
      <Industries />
      <CaseStudies />
      <Services />
      <WhyZironPro />
      <Benefits />
      <Comparison />
      <Testimonials />
      <Insights />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}