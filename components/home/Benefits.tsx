"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  Handshake,
  LineChart,
  Layers3,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const benefits = [
  {
    number: "01",
    title: "Results-First Approach",
    description:
      "Every campaign is built around ROI, lead generation, and revenue growth — not vanity metrics. We focus on the numbers that actually move your business forward.",
    icon: LineChart,
  },
  {
    number: "02",
    title: "AI-Driven Marketing & Automation",
    description:
      "We integrate AI tools, CRM systems, WhatsApp automation, and smart funnels so your marketing keeps working around the clock — even outside business hours.",
    icon: Bot,
  },
  {
    number: "03",
    title: "Industry-Specific Expertise",
    description:
      "From Logistics and Beauty Clinics to Hospitality, Education, and Real Estate, our strategies are built around how customers in each industry actually buy.",
    icon: Layers3,
  },
  {
    number: "04",
    title: "True Client Partnership",
    description:
      "Transparent reporting, clear KPIs, and a team that works as an extension of your business — not a black-box vendor you have to chase for updates.",
    icon: Handshake,
  },
];

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="relative overflow-hidden bg-[#0D1420] py-28 sm:py-32 lg:py-40"
    >
      {/* Background */}
      <div className="pointer-events-none absolute right-[-15%] top-[20%] h-[550px] w-[550px] rounded-full bg-[#6620EE]/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#8F2CF4]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8F2CF4]">
                The ZironPro Difference
              </span>
            </div>

            <h2 className="mt-6 max-w-xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
              Built for
              <br />
              <span className="text-white/35">business growth.</span>
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
              Good marketing gets attention. Great marketing connects attention
              to business outcomes. We combine strategy, technology, creative,
              and performance to build growth systems that are designed to
              compound over time.
            </p>
          </motion.div>
        </div>

        {/* Benefits */}
        <div className="mt-20 border-t border-white/[0.08]">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.article
                key={benefit.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.07,
                  ease,
                }}
                className="group relative border-b border-white/[0.08] py-9 sm:py-11 lg:py-14"
              >
                <div className="grid gap-7 lg:grid-cols-[70px_1fr_1fr_60px] lg:items-center lg:gap-10">
                  {/* Number */}
                  <span className="text-xs font-medium tracking-[0.15em] text-white/20">
                    {benefit.number}
                  </span>

                  {/* Title */}
                  <div className="flex items-center gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.02] transition-all duration-500 group-hover:border-[#8F2CF4]/30 group-hover:bg-[#8F2CF4]/10">
                      <Icon
                        size={20}
                        strokeWidth={1.5}
                        className="text-white/50 transition-colors duration-500 group-hover:text-[#8F2CF4]"
                      />
                    </div>

                    <h3 className="text-xl font-semibold tracking-[-0.035em] text-white sm:text-2xl lg:text-3xl">
                      {benefit.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="max-w-xl text-sm leading-7 text-white/40 sm:text-[15px]">
                    {benefit.description}
                  </p>

                  {/* Arrow */}
                  <div className="hidden justify-end lg:flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] text-white/20 transition-all duration-500 group-hover:border-[#8F2CF4]/30 group-hover:bg-[#8F2CF4] group-hover:text-white">
                      <ArrowUpRight size={17} />
                    </div>
                  </div>
                </div>

                {/* Hover line */}
                <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-[#4D11A8] via-[#8F2CF4] to-transparent transition-all duration-700 group-hover:w-full" />
              </motion.article>
            );
          })}
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="mt-14 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end"
        >
          <div>
            <p className="max-w-2xl text-2xl font-medium leading-tight tracking-[-0.035em] text-white sm:text-3xl">
              Marketing should work as hard as
              <span className="text-[#8F2CF4]"> your business does.</span>
            </p>
          </div>

          <a
            href="#contact"
            className="group inline-flex w-fit items-center gap-3 rounded-full bg-[#4D11A8] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#6620EE] hover:shadow-xl hover:shadow-[#4D11A8]/20"
          >
            Talk to our team

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