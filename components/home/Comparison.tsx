"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import { COMPARISON, EASE } from "@/lib/constants";

const OPTIONS = [{ key: "inHouse", label: "In-House Team" }, { key: "agencies", label: "Other Agencies" }] as const;

export default function Comparison() {
  const [mode, setMode] = useState<(typeof OPTIONS)[number]["key"]>("inHouse");
  const other = OPTIONS.find((o) => o.key === mode)!;

  return (
    <section id="compare" className="relative overflow-hidden bg-dark py-28 sm:py-36">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[600px] w-[90vw] max-w-[1100px] -translate-x-1/2 rounded-full bg-purple-primary/20 blur-[170px]" />
      <div className="relative mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">
        <div className="mb-12 text-center sm:mb-16">
          <p className="eyebrow mb-4">The difference</p>
          <h2 className="display text-[clamp(2.2rem,5.6vw,4.6rem)] text-white">ZironPro vs <span className="text-gradient">{other.label}</span></h2>
          <div role="group" aria-label="Compare ZironPro against" className="mx-auto mt-8 inline-flex rounded-full border border-white/12 bg-white/[0.04] p-1">
            {OPTIONS.map((o) => (
              <button key={o.key} type="button" aria-pressed={mode === o.key} onClick={() => setMode(o.key)} className={`relative rounded-full px-5 py-2.5 text-[13px] font-medium transition-colors duration-300 ${mode === o.key ? "text-white" : "text-white/50 hover:text-white"}`}>
                {mode === o.key && (<motion.span layoutId="cmp-pill" className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-primary to-purple-accent" transition={{ duration: 0.5, ease: EASE }} />)}
                <span className="relative">{o.label}</span>
              </button>
            ))}
          </div>
        </div>

        <ul className="space-y-3">
          {COMPARISON.map((row, i) => (
            <Reveal as="li" key={row.feature} delay={i * 0.05} y={20}>
              <div className="grid overflow-hidden rounded-3xl border border-white/[0.09] bg-white/[0.02] md:grid-cols-[0.8fr_1.2fr_1fr]">
                <div className="px-6 pb-1 pt-5 md:py-6"><p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/45">{row.feature}</p></div>
                <div className="bg-gradient-to-r from-purple-primary/70 to-purple-accent/50 px-6 py-5 md:py-6">
                  <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/60 md:hidden">ZironPro</p>
                  <p className="flex items-start gap-3 text-[15px] font-medium text-white"><Check size={17} className="mt-0.5 shrink-0" aria-hidden="true" />{row.ziron}</p>
                </div>
                <div className="px-6 py-5 md:py-6">
                  <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/30 md:hidden">{other.label}</p>
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.p key={mode} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3, ease: EASE }} className="text-[15px] text-white/45">{row[mode]}</motion.p>
                  </AnimatePresence>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
