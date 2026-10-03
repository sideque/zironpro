"use client";
import Reveal from "@/components/ui/Reveal";
import BlurText from "@/components/ui/Blurtext";
import { BENEFITS, EASE } from "@/lib/constants";

export default function Benefits() {
  return (
    <section id="why-ziron" className="relative overflow-hidden bg-ink py-28 sm:py-40">
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[700px] w-[700px] rounded-full bg-purple-accent/25 blur-[170px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-purple-secondary/15 blur-[150px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <p className="eyebrow mb-6">Why ZironPro</p>
        <h2 className="max-w-5xl">
          <BlurText text="We don't create content to fill a calendar — we create with expertise, passion & love to build brands." delay={60} direction="bottom" animateBy="words"
            easing={EASE as unknown as [number, number, number, number]} className="display !leading-[1.04] text-[clamp(2.1rem,5.6vw,4.9rem)] text-white" />
        </h2>
        <div className="mt-20 grid gap-x-16 gap-y-px sm:mt-28 md:grid-cols-2">
          {BENEFITS.map((b, i) => (
            <Reveal key={b.number} delay={(i % 2) * 0.1} className={`group relative border-t border-white/[0.1] py-9 transition-colors duration-500 hover:border-purple-secondary/70 ${i % 2 === 1 ? "md:mt-16" : ""}`}>
              <div className="flex items-baseline gap-5">
                <span className="font-mono text-[11px] tracking-[0.2em] text-purple-secondary">{b.number}</span>
                <h3 className="text-[clamp(1.4rem,2.4vw,2rem)] font-semibold leading-tight tracking-[-0.035em] text-white transition-transform duration-500 group-hover:translate-x-2">{b.title}</h3>
              </div>
              <p className="mt-4 max-w-md text-[15px] leading-7 text-muted sm:pl-[3.1rem]">{b.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
