"use client";

import Hero from "@/components/home/Hero";
import TrustLogos from "@/components/home/TrustLogos";
import UAEIntro from "@/components/home/UAEIntro";
import Services from "@/components/home/Services";
import CaseStudies from "@/components/home/CaseStudies";
import Industries from "@/components/home/Industries";
import WhyZironPro from "@/components/home/WhyZironPro";
import Blog from "@/components/home/Blog";
import FAQ from "@/components/home/FAQ";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <main className="relative min-h-screen">
      <Hero />
      <TrustLogos />
      <UAEIntro />
      <Services />
      <CaseStudies />
      <Industries />
      <WhyZironPro />
      <Blog />
      <FAQ />
      <FinalCTA />
    </main>
  );
}