"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  Bot,
  Layers,
  ShieldCheck,
  Zap,
} from "lucide-react";

import Reveal from "@/components/ui/Reveal";
import Iridescence from "@/components/ui/Iridescence/Iridescence";
import { WHY_ZIRONPRO, EASE } from "@/lib/constants";

const ICON_MAP = [BarChart3, Bot, ShieldCheck, Layers];

export default function WhyZironPro() {
  return (
    <section
      id="why-zironpro"
      className="
        relative
        isolate
        overflow-hidden
        border-y
        border-[#E7E2EF]
        bg-[#F7F5FC]
        py-20
        sm:py-24
        lg:py-28
      "
    >
      {/* =================================================
          IRIDESCENCE BACKGROUND
      ================================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          overflow-hidden
        "
      >
        <Iridescence
          color={[0.32, 0.08, 0.65]}
          mouseReact={true}
          amplitude={0.08}
          speed={0.45}
        />
      </div>

      {/* =================================================
          PURPLE SOFT OVERLAY
      ================================================= */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          z-[1]
          bg-gradient-to-br
          from-[#F7F5FC]/85
          via-[#EEE5FA]/65
          to-[#F7F5FC]/85
        "
      />

      {/* =================================================
          CONTENT
      ================================================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* =================================================
            SPLIT LAYOUT
        ================================================= */}

        <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
          {/* =================================================
              LEFT COLUMN
          ================================================= */}

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

            {/* DESCRIPTION */}

            <Reveal delay={0.15} className="mt-6">
              <p className="display-subheading text-base text-[#6B6B73] sm:text-lg">
                Traditional agencies focus on vanity clicks. ZironPro connects
                every dirham of your marketing spend to real business outcomes
                — from brand discovery to qualified leads and repeat revenue.
              </p>
            </Reveal>

            {/* =================================================
                ACCENT CALLOUT CARD
            ================================================= */}

            <Reveal delay={0.25} className="mt-8">
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  border-[#4D11A8]/20
                  bg-gradient-to-br
                  from-[#4D11A8]
                  via-[#5F18C7]
                  to-[#170349]
                  p-6
                  text-white
                  shadow-[0_20px_60px_rgba(77,17,168,0.20)]
                "
              >
                {/* CARD GLOW */}

                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    h-40
                    w-40
                    rounded-full
                    bg-[#B66CFF]/30
                    blur-3xl
                  "
                />

                <div className="relative z-10">
                  {/* CARD LABEL */}

                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#D7B7FF]">
                    <Zap size={15} />
                    <span>Full-Funnel Alignment</span>
                  </div>

                  {/* CARD TEXT */}

                  <p className="mt-3 text-sm font-medium leading-relaxed text-white/90">
                    Awareness → High-Intent Lead Gen → Automated CRM Follow-up
                    → Closed Revenue
                  </p>

                  {/* CARD FOOTER */}

                  <div className="mt-4 flex items-center justify-between border-t border-white/15 pt-3 text-xs text-white/70">
                    <span>Transparent Dashboards</span>

                    <a
                      href="#contact"
                      className="
                        flex
                        items-center
                        gap-1
                        font-bold
                        text-white
                        transition-opacity
                        hover:opacity-80
                      "
                    >
                      Book Call
                      <ArrowUpRight size={13} />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* =================================================
              RIGHT COLUMN
          ================================================= */}

          <div className="space-y-4 lg:col-span-7">
            {WHY_ZIRONPRO.map((item, index) => {
              const Icon = ICON_MAP[index % ICON_MAP.length];

              return (
                <motion.article
                  key={item.number}
                  initial={{
                    opacity: 0,
                    x: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                    ease: EASE,
                  }}
                  className="
                    group
                    relative
                    flex
                    flex-col
                    justify-between
                    overflow-hidden
                    rounded-2xl
                    border
                    border-[#E0D3F2]
                    bg-white/75
                    p-6
                    shadow-[0_10px_40px_rgba(77,17,168,0.06)]
                    backdrop-blur-md
                    transition-all
                    duration-300
                    hover:border-[#4D11A8]/50
                    hover:bg-white/90
                    hover:shadow-[0_20px_50px_rgba(77,17,168,0.12)]
                    sm:flex-row
                    sm:items-center
                  "
                >
                  {/* CARD GLOW */}

                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none
                      absolute
                      -right-16
                      -top-16
                      h-32
                      w-32
                      rounded-full
                      bg-[#8F2CF4]/10
                      blur-3xl
                      opacity-0
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                  />

                  {/* CONTENT */}

                  <div className="relative z-10 flex items-start gap-4">
                    {/* ICON */}

                    <div
                      className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-[#E7E2EF]
                        bg-white
                        text-[#4D11A8]
                        shadow-sm
                        transition-all
                        duration-300
                        group-hover:border-[#4D11A8]
                        group-hover:bg-[#4D11A8]
                        group-hover:text-white
                      "
                    >
                      <Icon size={20} />
                    </div>

                    {/* TEXT */}

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-semibold text-[#8F2CF4]">
                          {item.number}
                        </span>

                        <h3 className="text-base font-bold text-[#151515] transition-colors group-hover:text-[#4D11A8]">
                          {item.title}
                        </h3>
                      </div>

                      <p className="mt-1.5 max-w-xl text-xs leading-relaxed text-[#6B6B73]">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* ARROW */}

                  <ArrowUpRight
                    size={18}
                    className="
                      relative
                      z-10
                      mt-4
                      shrink-0
                      text-[#6B6B73]
                      transition-all
                      duration-300
                      group-hover:translate-x-0.5
                      group-hover:-translate-y-0.5
                      group-hover:text-[#4D11A8]
                      sm:mt-0
                    "
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