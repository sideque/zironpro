"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { useState } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

const faqs = [
  {
    question: "What makes ZironPro the best marketing agency in Dubai?",
    answer:
      "We combine AI-driven strategy, industry-specific expertise, and full-funnel marketing to build growth systems rather than isolated campaigns. Our approach covers strategy, creative, SEO, paid media, content, websites, lead generation, and automation.",
  },
  {
    question: "Do you only work with businesses in Dubai, or across the UAE?",
    answer:
      "We work with businesses across Dubai, Abu Dhabi, Sharjah, and the wider UAE. Our strategies are adapted to the market, audience, and business goals of each client.",
  },
  {
    question: "Which industries do you specialize in?",
    answer:
      "Our key areas include Logistics, Beauty & Clinics, Hospitality, Education, and Real Estate. We also work with growing businesses across other industries where digital marketing can create measurable growth.",
  },
  {
    question: "How soon can we start?",
    answer:
      "Once the initial requirements and strategy are aligned, most projects can move into execution within days rather than weeks. The exact timeline depends on the scope and services required.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#0D1420] py-28 sm:py-32 lg:py-40"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute right-[-15%] top-[25%] h-[500px] w-[500px] rounded-full bg-[#6620EE]/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#8F2CF4]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8F2CF4]">
                FAQ
              </span>
            </div>

            <h2 className="mt-6 max-w-xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
              Questions,
              <br />
              <span className="text-white/35">answered.</span>
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/35">
              Everything you need to know about working with ZironPro and
              building your digital growth strategy.
            </p>
          </motion.div>

          {/* FAQ list */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="border-t border-white/[0.08]"
          >
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className="border-b border-white/[0.08]"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-6 py-6 text-left sm:py-7"
                  >
                    <div className="flex items-start gap-5">
                      <span className="pt-1 text-[10px] font-medium tracking-[0.15em] text-white/20">
                        0{index + 1}
                      </span>

                      <span
                        className={`text-base font-medium leading-7 transition-colors duration-300 sm:text-lg ${
                          isOpen
                            ? "text-white"
                            : "text-white/60 hover:text-white"
                        }`}
                      >
                        {faq.question}
                      </span>
                    </div>

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        isOpen
                          ? "border-[#8F2CF4]/30 bg-[#8F2CF4]/10 text-[#8F2CF4]"
                          : "border-white/[0.08] text-white/30"
                      }`}
                    >
                      <ChevronDown
                        size={17}
                        className={`transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease }}
                        className="overflow-hidden"
                      >
                        <div className="pb-7 pl-[45px] pr-10 sm:pr-16">
                          <p className="max-w-2xl text-sm leading-7 text-white/35">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom CTA link */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease }}
          className="mt-12 flex items-center justify-center"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-sm font-medium text-white/50 transition-colors hover:text-white"
          >
            Still have questions? Talk to us

            <ArrowUpRight
              size={16}
              className="text-[#8F2CF4] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}