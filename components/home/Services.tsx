"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import CTAButton from "@/components/ui/CTAButton";
import Reveal from "@/components/ui/Reveal";
import ScrollFloat from "@/components/ui/ScrollFloat";
import { EASE, SERVICES } from "@/lib/constants";

export default function Services() {
  const [active, setActive] = useState(0);
  const cur = SERVICES[active];

  return (
    <section id="services" className="relative overflow-hidden bg-ink py-28 sm:py-36">
      <div className="pointer-events-none absolute -right-40 top-0 h-[700px] w-[700px] rounded-full bg-purple-primary/25 blur-[170px]" />
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-14 max-w-3xl sm:mb-20">
          <p className="eyebrow mb-4">Capabilities</p>
          <ScrollFloat containerClassName="!my-0" textClassName="display !text-[clamp(2.6rem,7.5vw,6.4rem)] !leading-[1.05] text-white">What We Do</ScrollFloat>
          <Reveal><p className="mt-6 max-w-xl text-base leading-7 text-muted">We engineer integrated growth ecosystems that connect strategy, creativity, technology, media, and performance — giving your business everything it needs to move from attention to revenue.</p></Reveal>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div role="tablist" aria-label="Service categories" aria-orientation="vertical" className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 [scrollbar-width:none] lg:mx-0 lg:flex-col lg:gap-0 lg:overflow-visible lg:px-0 lg:pb-0">
            {SERVICES.map((s, i) => {
              const on = i === active;
              return (
                <button key={s.title} role="tab" id={`svc-tab-${i}`} aria-selected={on} aria-controls="svc-panel" tabIndex={on ? 0 : -1} onClick={() => setActive(i)}
                  onKeyDown={(e) => {
                    if (e.key === "ArrowDown" || e.key === "ArrowRight") setActive((i + 1) % SERVICES.length);
                    if (e.key === "ArrowUp" || e.key === "ArrowLeft") setActive((i - 1 + SERVICES.length) % SERVICES.length);
                  }}
                  className={`group relative shrink-0 rounded-full border px-5 py-3 text-left transition-all duration-500 lg:flex lg:items-baseline lg:gap-5 lg:rounded-none lg:border-0 lg:border-b lg:border-white/[0.08] lg:bg-transparent lg:px-0 lg:py-4 ${on ? "border-purple-secondary/60 bg-purple-secondary/15 text-white" : "border-white/10 text-white/40 hover:text-white/80"}`}>
                  <span className={`hidden font-mono text-[11px] lg:inline ${on ? "text-purple-secondary" : "text-white/20"}`}>{s.number}</span>
                  <span className={`whitespace-nowrap text-sm font-medium transition-transform duration-500 lg:whitespace-normal lg:text-[1.65rem] lg:leading-tight lg:tracking-[-0.035em] ${on ? "lg:translate-x-3" : ""}`}>{s.title}</span>
                  {on && (<motion.span layoutId="svc-bar" aria-hidden="true" className="absolute bottom-[-1px] left-0 hidden h-px w-full bg-gradient-to-r from-purple-secondary to-transparent lg:block" transition={{ duration: 0.5, ease: EASE }} />)}
                </button>
              );
            })}
          </div>

          <div role="tabpanel" id="svc-panel" aria-labelledby={`svc-tab-${active}`} className="relative lg:sticky lg:top-28 lg:self-start">
            <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-white/[0.09] bg-white/[0.025] p-7 backdrop-blur-sm sm:p-10">
              <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-purple-secondary/25 blur-[90px]" />
              <AnimatePresence mode="wait">
                <motion.div key={cur.title} initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }} transition={{ duration: 0.45, ease: EASE }} className="relative">
                  <div className="flex items-baseline justify-between">
                    <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-purple-secondary">{cur.number} / {String(SERVICES.length).padStart(2, "0")}</span>
                    <span className="font-mono text-[11px] text-white/30">{cur.items.length} services</span>
                  </div>
                  <h3 className="display mt-6 text-[clamp(1.9rem,3.8vw,3rem)] text-white">{cur.title}</h3>
                  <p className="mt-4 max-w-lg text-[15px] leading-7 text-muted">{cur.description}</p>
                  <ul className="mt-9 flex flex-wrap gap-2">
                    {cur.items.map((item, i) => (
                      <motion.li key={item} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 + i * 0.03, ease: EASE }} className="rounded-full border border-white/12 bg-white/[0.03] px-4 py-2 text-[13px] text-white/75 transition-colors duration-300 hover:border-purple-secondary/60 hover:bg-purple-secondary/15 hover:text-white">{item}</motion.li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="mt-6"><CTAButton href="/#contact">Book a Free Consultation</CTAButton></div>
          </div>
        </div>
      </div>
    </section>
  );
}
