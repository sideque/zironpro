"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  Search,
  TrendingUp,
  Camera,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const caseStudies = [
  {
    number: "01",
    category: "SEO / Organic Growth",
    client: "Maxline",
    industry: "Logistics",
    title: "Turning search visibility into qualified logistics demand.",
    description:
      "A technical SEO overhaul, local search optimisation, and content authority strategy designed around high-intent searches in the competitive Dubai logistics market.",
    result: "600%",
    resultLabel: "increase in organic traffic",
    timeframe: "within 2 months",
    icon: Search,
    tags: ["Technical SEO", "Local SEO", "Content Strategy"],
  },
  {
    number: "02",
    category: "Organic Social Media",
    client: "Film Protection",
    industry: "Automotive",
    title: "Turning content attention into measurable enquiries.",
    description:
      "A focused content strategy built around audience behaviour, concise creative, organic SEO, and answer-focused content to generate more qualified Instagram enquiries.",
    result: "5X",
    resultLabel: "lead growth",
    timeframe: "through organic marketing",
    icon: Camera,
    tags: ["Social Strategy", "AEO", "Content"],
  },
];

export default function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="relative overflow-hidden bg-[#0D1420] py-28 sm:py-32 lg:py-40"
    >
      {/* Background */}
      <div className="pointer-events-none absolute left-[-20%] top-[30%] h-[500px] w-[500px] rounded-full bg-[#4D11A8]/10 blur-[140px]" />

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
                Selected Work
              </span>
            </div>

            <h2 className="mt-6 text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
              Real campaigns.
              <br />
              <span className="text-white/35">Real results.</span>
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
              We don't believe in marketing activity for the sake of activity.
              Every strategy is built around a measurable business outcome —
              from stronger organic visibility to more qualified enquiries.
            </p>
          </motion.div>
        </div>

        {/* Case Studies */}
        <div className="mt-20 space-y-6">
          {caseStudies.map((study, index) => {
            const Icon = study.icon;

            return (
              <motion.article
                key={study.client}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease,
                }}
                className="group relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#170349]/20"
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#8F2CF4]/10 opacity-0 blur-[100px] transition-opacity duration-700 group-hover:opacity-100" />

                <div className="relative grid lg:grid-cols-[1.1fr_0.9fr]">
                  {/* Main content */}
                  <div className="p-7 sm:p-10 lg:p-14">
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F2CF4]">
                            {study.category}
                          </span>

                          <span className="h-1 w-1 rounded-full bg-white/20" />

                          <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/30">
                            {study.industry}
                          </span>
                        </div>

                        <div className="mt-5 flex items-center gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.025]">
                            <Icon
                              size={20}
                              strokeWidth={1.5}
                              className="text-[#8F2CF4]"
                            />
                          </div>

                          <div>
                            <p className="text-xs text-white/30">Client</p>

                            <h3 className="text-xl font-semibold tracking-[-0.03em] text-white">
                              {study.client}
                            </h3>
                          </div>
                        </div>
                      </div>

                      <span className="text-xs font-medium tracking-[0.15em] text-white/20">
                        {study.number}
                      </span>
                    </div>

                    <h4 className="mt-10 max-w-2xl text-2xl font-semibold leading-[1.15] tracking-[-0.04em] text-white sm:text-3xl lg:text-4xl">
                      {study.title}
                    </h4>

                    <p className="mt-5 max-w-2xl text-sm leading-7 text-white/40 sm:text-[15px]">
                      {study.description}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-2">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/[0.07] bg-white/[0.02] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.1em] text-white/35"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Result panel */}
                  <div className="relative flex min-h-[320px] items-center overflow-hidden border-t border-white/[0.08] bg-gradient-to-br from-[#4D11A8]/20 via-[#170349]/30 to-[#0D1420] p-8 sm:p-10 lg:min-h-full lg:border-l lg:border-t-0 lg:p-14">
                    {/* Decorative circles */}
                    <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-[#8F2CF4]/10" />

                    <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full border border-[#8F2CF4]/10" />

                    <div className="relative w-full">
                      <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
                        <TrendingUp
                          size={13}
                          className="text-[#8F2CF4]"
                        />
                        Campaign result
                      </div>

                      <div className="mt-5">
                        <span className="bg-gradient-to-r from-[#8F2CF4] via-[#6620EE] to-[#8F2CF4] bg-clip-text text-6xl font-semibold tracking-[-0.07em] text-transparent sm:text-7xl">
                          {study.result}
                        </span>
                      </div>

                      <p className="mt-2 max-w-xs text-lg font-medium tracking-[-0.02em] text-white">
                        {study.resultLabel}
                      </p>

                      <p className="mt-2 text-xs text-white/30">
                        {study.timeframe}
                      </p>

                      <div className="mt-10 h-px w-full bg-white/[0.08]" />

                      <div className="mt-5 flex items-center justify-between">
                        <span className="text-xs text-white/25">
                          View case study
                        </span>

                        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-300 group-hover:border-[#8F2CF4]/40 group-hover:bg-[#8F2CF4] group-hover:text-white">
                          <ArrowUpRight size={17} />
                        </div>
                      </div>
                    </div>
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
          className="mt-12 flex flex-col gap-6 border-t border-white/[0.08] pt-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-center gap-3">
            <BarChart3 size={17} className="text-[#8F2CF4]" />

            <p className="text-sm text-white/35">
              Your next growth story could be here.
            </p>
          </div>

          <a
            href="#contact"
            className="group inline-flex w-fit items-center gap-2 text-sm font-medium text-white transition-colors hover:text-[#8F2CF4]"
          >
            Start a conversation

            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}