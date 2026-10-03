"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  Layers3,
  MapPin,
  Sparkles,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const principles = [
  {
    number: "01",
    title: "UAE Market Expertise",
    description:
      "With a deep understanding of the UAE's diverse audience, we create strategies and content that resonate locally, strengthen your brand, and drive measurable business growth.",
    icon: MapPin,
  },
  {
    number: "02",
    title: "Content That Converts",
    description:
      "Every design, caption, video, and campaign is created with one goal: turning attention into enquiries, leads, and sales — not just likes and impressions.",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "Built Around Your Brand",
    description:
      "No templates. No recycled ideas. Every strategy is tailored to your industry, audience, and business goals so your brand can stand out in a crowded market.",
    icon: Layers3,
  },
  {
    number: "04",
    title: "Optimised for Growth",
    description:
      "We continuously analyse performance, refine content, and optimise campaigns using real data to help your business achieve consistent and measurable growth.",
    icon: BarChart3,
  },
];

export default function WhyZironPro() {
  return (
    <section
      id="why-vironpro"
      className="relative overflow-hidden bg-[#0D1420] py-28 sm:py-32 lg:py-40"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-[-20%] top-[20%] h-[500px] w-[500px] rounded-full bg-[#4D11A8]/10 blur-[150px]" />

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
                Why ZironPro
              </span>
            </div>

            <h2 className="mt-6 max-w-lg text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
              We don't just
              <br />
              <span className="text-white/35">
                create marketing.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="lg:pt-12"
          >
            <p className="max-w-2xl text-base leading-8 text-white/50 sm:text-lg">
              We create with expertise, passion, and a genuine focus on
              building brands that people remember. Every decision is connected
              to your business goals, your audience, and the market you operate
              in.
            </p>
          </motion.div>
        </div>

        {/* Principles */}
        <div className="mt-20 grid gap-px overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.08] sm:grid-cols-2">
          {principles.map((principle, index) => {
            const Icon = principle.icon;

            return (
              <motion.article
                key={principle.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.07,
                  ease,
                }}
                className="group relative overflow-hidden bg-[#0D1420] p-7 sm:p-9 lg:p-11"
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#8F2CF4]/10 opacity-0 blur-[70px] transition-opacity duration-700 group-hover:opacity-100" />

                <div className="relative">
                  {/* Top */}
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.02] transition-all duration-500 group-hover:border-[#8F2CF4]/30 group-hover:bg-[#8F2CF4]/10">
                      <Icon
                        size={20}
                        strokeWidth={1.5}
                        className="text-white/50 transition-colors duration-500 group-hover:text-[#8F2CF4]"
                      />
                    </div>

                    <span className="text-xs font-medium tracking-[0.15em] text-white/20">
                      {principle.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-10 text-2xl font-semibold tracking-[-0.035em] text-white">
                    {principle.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 max-w-lg text-sm leading-7 text-white/40">
                    {principle.description}
                  </p>

                  {/* Bottom */}
                  <div className="mt-8 flex items-center justify-between">
                    <div className="h-px w-8 bg-[#8F2CF4]/50 transition-all duration-500 group-hover:w-16" />

                    <ArrowUpRight
                      size={18}
                      className="text-white/20 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#8F2CF4]"
                    />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="mt-12 grid gap-6 border-t border-white/[0.08] pt-8 sm:grid-cols-2 sm:items-center"
        >
          <p className="max-w-xl text-sm leading-7 text-white/30">
            Your business doesn't need more marketing noise. It needs a clear
            strategy, strong creative, and a team that understands what moves
            the needle.
          </p>

          <div className="sm:text-right">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-[#8F2CF4]"
            >
              Let's build something meaningful
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}