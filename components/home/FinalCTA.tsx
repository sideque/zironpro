"use client";
import CTAButton from "@/components/ui/CTAButton";
import Reveal from "@/components/ui/Reveal";
import Ribbon from "@/components/ui/Ribbon";

export default function FinalCTA() {
  return (
    <section id="contact" className="relative isolate overflow-hidden bg-navy py-32 sm:py-44">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[120vw] w-[120vw] max-h-[1400px] max-w-[1400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgb(143_44_244/0.5),rgb(77_17_168/0.25)_40%,transparent_70%)]" />
        <div className="absolute -right-[25%] top-0 w-[90vw] max-w-[700px] opacity-40 sm:-right-[5%] sm:opacity-60"><Ribbon strands={12} className="h-auto w-full" flip /></div>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-dark to-transparent" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink/70 to-transparent" />
      </div>
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <Reveal>
          <p className="eyebrow mb-6">Let&apos;s talk</p>
          <h2 className="display max-w-5xl text-[clamp(2.6rem,8vw,7.2rem)] !leading-[0.98] text-white">Ready to Work With the <span className="text-gradient">Best Marketing Agency</span> in Dubai?</h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-8 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">If you&apos;re looking for a marketing agency in the UAE offering SEO, paid ads, content, and social media — backed by real results, not guesswork — we&apos;re here to help you scale.</p>
          <div className="mt-10"><CTAButton href="mailto:info@zironpro.com" variant="light">Let&apos;s Build Your Growth Engine</CTAButton></div>
        </Reveal>
      </div>
    </section>
  );
}
