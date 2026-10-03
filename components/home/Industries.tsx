"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import CTAButton from "@/components/ui/CTAButton";
import Reveal from "@/components/ui/Reveal";
import ScrollFloat from "@/components/ui/ScrollFloat";
import { EASE, INDUSTRIES } from "@/lib/constants";
import IndustryVisual from "./IndustryVisual";

export default function Industries() {
  const [active, setActive] = useState(0);
  const cur = INDUSTRIES[active];

  return (
    <section id="industries" className="relative bg-dark py-28 sm:py-36">
      <div className="pointer-events-none absolute right-[-20%] top-[10%] h-[600px] w-[600px] rounded-full bg-purple-primary/20 blur-[150px]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-10">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow mb-4">Industries</p>
          <ScrollFloat containerClassName="!my-0" textClassName="display !text-[clamp(2.5rem,6.2vw,5rem)] !leading-[1.08] text-white">Industries We Grow</ScrollFloat>
          <Reveal>
            <p className="mt-6 max-w-md text-base leading-7 text-muted">As a digital marketing agency in the UAE, we don&apos;t run generic campaigns. Every industry has its own buyer behaviour, sales cycle, and channels that actually convert. Our strategies are built around how your customers really make decisions.</p>
          </Reveal>

          <div role="tablist" aria-label="Industries" aria-orientation="vertical" className="-mx-5 mt-10 flex gap-2 overflow-x-auto px-5 pb-2 [scrollbar-width:none] lg:mx-0 lg:flex-col lg:gap-0 lg:overflow-visible lg:px-0 lg:pb-0">
            {INDUSTRIES.map((ind, i) => {
              const on = i === active;
              return (
                <button key={ind.title} role="tab" id={`ind-tab-${i}`} aria-selected={on} aria-controls="ind-panel" tabIndex={on ? 0 : -1}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => window.matchMedia("(hover: hover)").matches && setActive(i)}
                  onKeyDown={(e) => {
                    if (e.key === "ArrowDown" || e.key === "ArrowRight") setActive((i + 1) % INDUSTRIES.length);
                    if (e.key === "ArrowUp" || e.key === "ArrowLeft") setActive((i - 1 + INDUSTRIES.length) % INDUSTRIES.length);
                  }}
                  className={`group relative shrink-0 rounded-full border px-5 py-3 text-left transition-all duration-500 lg:flex lg:items-center lg:gap-5 lg:rounded-none lg:border-0 lg:border-b lg:border-white/[0.08] lg:bg-transparent lg:px-0 lg:py-5 ${on ? "border-purple-secondary/60 bg-purple-secondary/15 text-white" : "border-white/10 text-white/45 hover:text-white"}`}>
                  <span className={`hidden font-mono text-[11px] lg:inline ${on ? "text-purple-secondary" : "text-white/25"}`}>{ind.number}</span>
                  <span className={`whitespace-nowrap text-sm font-medium tracking-tight transition-transform duration-500 lg:text-2xl lg:tracking-[-0.03em] ${on ? "lg:translate-x-3" : ""}`}>{ind.title}</span>
                  <span aria-hidden="true" className={`ml-auto hidden h-px bg-purple-secondary transition-all duration-500 lg:block ${on ? "w-14" : "w-0"}`} />
                </button>
              );
            })}
          </div>
          <div className="mt-10"><CTAButton href="/#contact" variant="ghost" magnetic={false}>Find Your Industry Strategy →</CTAButton></div>
        </div>

        <div role="tabpanel" id="ind-panel" aria-labelledby={`ind-tab-${active}`} className="relative min-h-[520px] overflow-hidden rounded-[2rem] border border-white/[0.09] bg-gradient-to-b from-white/[0.05] to-white/[0.01] p-6 sm:p-10">
          <AnimatePresence mode="wait">
            <motion.div key={cur.title} initial={{ opacity: 0, y: 24, filter: "blur(8px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} exit={{ opacity: 0, y: -16, filter: "blur(6px)" }} transition={{ duration: 0.55, ease: EASE }} className="flex h-full flex-col">
              <div className="flex items-start justify-between">
                <span className="text-outline text-[clamp(4rem,10vw,8rem)] font-bold leading-[0.85] tracking-[-0.06em]">{cur.number}</span>
                <div className="flex flex-wrap justify-end gap-2">
                  {cur.tags.map((t) => (<span key={t} className="rounded-full border border-white/12 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-white/55">{t}</span>))}
                </div>
              </div>
              <div className="relative my-4 aspect-[4/2.6] w-full"><IndustryVisual index={active} /></div>
              <h3 className="display text-[clamp(2rem,4.4vw,3.4rem)] text-white">{cur.title}</h3>
              <p className="mt-4 max-w-xl text-[15px] leading-7 text-muted">{cur.description}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
