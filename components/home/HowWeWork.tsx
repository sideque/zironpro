"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import { PROCESS_STEPS, EASE } from "@/lib/constants";
export default function HowWeWork() {
  return (
    <section
      id="process"
      className="relative border-t border-[#E7E2EF] bg-[#F7F5FC] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        
        {/* HEADER */}
        <div className="mb-12 max-w-2xl sm:mb-16">
          <Reveal>
            <span className="eyebrow mb-2 block text-[#4D11A8]">
              Methodology &amp; Process
            </span>
            <h2 className="display-heading text-[#151515]">
              How We Turn Strategy Into Scalable Revenue
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="display-subheading mt-3 text-base text-[#6B6B73] sm:text-lg">
              A structured, data-driven 5-step process designed to eliminate wasted budget and accelerate growth.
            </p>
          </Reveal>
        </div>

        {/* TIMELINE STEPS (Horizontal Desktop, Vertical Mobile) */}
        <div className="relative">
          {/* Timeline connecting line for desktop */}
          <div
            className="absolute left-0 top-1/2 hidden h-0.5 w-full -translate-y-1/2 bg-[#E7E2EF] lg:block"
            aria-hidden="true"
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {PROCESS_STEPS.map((step, index) => (
              <motion.article
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: EASE,
                }}
                className="group relative flex flex-col justify-between rounded-3xl border border-[#E7E2EF] bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#4D11A8]/50 hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#4D11A8] font-mono text-sm font-bold text-white shadow-md">
                      {step.number}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#8F2CF4]">
                      Phase 0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#151515] transition-colors group-hover:text-[#4D11A8]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#6B6B73]">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-[#E7E2EF] pt-3 font-mono text-[10px] text-[#6B6B73]">
                  Step 0{index + 1} of 05
                </div>
              </motion.article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
