"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { FAQS, EASE } from "@/lib/constants";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((current) => (current === idx ? null : idx));
  };

  return (
    <section
      id="faq"
      className="relative bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-10">
        
        {/* HEADER */}
        <div className="mb-12 text-center sm:mb-16">
          <Reveal>
            <span className="eyebrow mb-2 inline-block text-[#4D11A8]">
              Frequently Asked Questions
            </span>
            <h2 className="display-heading text-[#151515]">
              Everything You Need To Know Before Partnering With ZironPro
            </h2>
          </Reveal>
        </div>

        {/* ACCORDION */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <Reveal key={faq.question} delay={index * 0.05}>
                <div
                  className={`rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "border-[#4D11A8]/50 bg-[#F7F5FC] shadow-sm"
                      : "border-[#E7E2EF] bg-white hover:border-[#4D11A8]/30"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left"
                  >
                    <span className="text-base font-bold tracking-tight text-[#151515] sm:text-lg">
                      {faq.question}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-300 ${
                        isOpen
                          ? "rotate-180 bg-[#4D11A8] text-white"
                          : "bg-[#F7F5FC] text-[#151515]"
                      }`}
                    >
                      <ChevronDown size={18} />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-[#E7E2EF] px-6 pb-6 pt-4 text-xs leading-relaxed text-[#6B6B73] sm:text-sm">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
