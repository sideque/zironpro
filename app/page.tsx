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
import Plasma from "@/components/ui/Plasma/Plasma";

export default function HomePage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden">

      {/* =====================================================
          GLOBAL ANIMATED BACKGROUND
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          inset-0
          z-[-2]
          overflow-hidden
        "
      >
        <Plasma
          color="#B497CF"
          speed={0.8}
          direction="forward"
          scale={1}
          opacity={0.7}
          mouseInteractive={false}
          renderScale={0.55}
          maxDpr={1.5}
          targetFps={60}
          iterations={60}
        />
      </div>

      {/* =====================================================
          SOFT WHITE OVERLAY
          Keeps text readable while allowing Plasma to show
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          fixed
          inset-0
          z-[-1]
          bg-white/55
        "
      />

      {/* =====================================================
          HOME PAGE CONTENT
      ===================================================== */}

      <div className="relative z-10">

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

      </div>

    </main>
  );
}