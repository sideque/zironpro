"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BarChart3, Bot, Layers, ShieldCheck, Zap } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { WHY_ZIRONPRO, EASE } from "@/lib/constants";

const ICON_MAP = [BarChart3, Bot, ShieldCheck, Layers];

export default function WhyZironPro() {
  return (
    <section
      id="why-zironpro"
      className="relative bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        
        {/* SPLIT LAYOUT */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
          
          {/* LEFT: HEADING & DESCRIPTION (5 Cols) */}
          <div className="lg:col-span-5">
            <Reveal>
              <span className="eyebrow mb-2 block text-[#4D11A8]">
                Why ZironPro
              </span>
              <h2 className="display-heading text-[#151515]">
                We Don&apos;t Just Create Ads.
                <br />
                <span className="text-purple-gradient">
                  We Build Revenue Engine Systems.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.15} className="mt-6">
              <p className="display-subheading text-base text-[#6B6B73] sm:text-lg">
                Traditional agencies focus on vanity clicks. ZironPro connects every dirham of your marketing spend to real business outcomes — from brand discovery to qualified leads and repeat revenue.
              </p>
            </Reveal>

            {/* ACCENT CALLOUT CARD */}
            <Reveal delay={0.25} className="mt-8">
              <div className="rounded-3xl border border-[#E7E2EF] bg-gradient-to-br from-[#4D11A8] to-[#170349] p-6 text-white shadow-md">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#8F2CF4]">
                  <Zap size={15} />
                  <span>Full-Funnel Alignment</span>
                </div>
                <p className="mt-3 text-sm font-medium leading-relaxed text-white/90">
                  Awareness → High-Intent Lead Gen → Automated CRM Follow-up → Closed Revenue
                </p>
                <div className="mt-4 flex items-center justify-between border-t border-white/15 pt-3 text-xs text-white/70">
                  <span>Transparent Dashboards</span>
                  <a href="#contact" className="font-bold text-white hover:underline flex items-center gap-1">
                    Book Call <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* RIGHT: 4 COMPACT FEATURE ROWS / CARDS (7 Cols) */}
          <div className="space-y-4 lg:col-span-7">
            {WHY_ZIRONPRO.map((item, index) => {
              const Icon = ICON_MAP[index % ICON_MAP.length];

              return (
                <motion.article
                  key={item.number}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                    ease: EASE,
                  }}
                  className="group flex flex-col justify-between rounded-2xl border border-[#E7E2EF] bg-[#F7F5FC] p-6 transition-all duration-300 hover:border-[#4D11A8]/50 hover:bg-white hover:shadow-md sm:flex-row sm:items-center"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white border border-[#E7E2EF] text-[#4D11A8] shadow-sm transition-colors group-hover:bg-[#4D11A8] group-hover:text-white">
                      <Icon size={20} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-semibold text-[#8F2CF4]">
                          {item.number}
                        </span>
                        <h3 className="text-base font-bold text-[#151515] transition-colors group-hover:text-[#4D11A8]">
                          {item.title}
                        </h3>
                      </div>
                      <p className="mt-1.5 text-xs leading-relaxed text-[#6B6B73] max-w-xl">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="mt-4 shrink-0 text-[#6B6B73] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#4D11A8] sm:mt-0"
                  />
                </motion.article>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}