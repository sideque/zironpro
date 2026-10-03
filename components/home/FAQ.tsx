"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { EASE, FAQS } from "@/lib/constants";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative bg-ink py-28 sm:py-36">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24 lg:px-10">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow mb-4">FAQ</p>
          <h2 className="display text-[clamp(2.2rem,5vw,4.2rem)] text-white">Questions, answered.</h2>
        </div>
        <div className="border-t border-white/[0.1]">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.question} className="border-b border-white/[0.1]">
                <h3>
                  <button type="button" id={`faq-btn-${i}`} aria-expanded={isOpen} aria-controls={`faq-panel-${i}`} onClick={() => setOpen(isOpen ? null : i)} className="flex w-full items-center justify-between gap-6 py-6 text-left sm:py-8">
                    <span className={`text-lg font-medium leading-snug tracking-[-0.02em] transition-colors duration-300 sm:text-2xl ${isOpen ? "text-white" : "text-white/65"}`}>{f.question}</span>
                    <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${isOpen ? "rotate-[135deg] border-purple-secondary bg-purple-secondary text-white" : "border-white/20 text-white/60"}`}><Plus size={18} aria-hidden="true" /></span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div id={`faq-panel-${i}`} role="region" aria-labelledby={`faq-btn-${i}`} initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.5, ease: EASE }} className="overflow-hidden">
                      <p className="max-w-2xl pb-8 text-[15px] leading-7 text-muted sm:pr-16">{f.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
