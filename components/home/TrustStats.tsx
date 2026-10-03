"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Globe2 } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const stats = [
  {
    value: "15+",
    label: "Industries Worked",
  },
  {
    value: "150+",
    label: "Campaigns Managed",
  },
  {
    value: "5X",
    label: "Lead Growth",
  },
  {
    value: "25M+",
    label: "Organic Views",
  },
  {
    value: "100+",
    label: "Brands Served",
  },
];

const clients = [
  "MAXLINE",
  "NOVA",
  "VERTEX",
  "ALPHA",
  "ORBIT",
  "LUMEN",
];

export default function TrustStats() {
  return (
    <section className="relative overflow-hidden bg-[#0D1420]">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[350px] w-[700px] -translate-x-1/2 rounded-full bg-[#4D11A8]/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Main intro */}
        <div className="border-t border-white/[0.08] py-24 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease }}
            >
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#8F2CF4]/20 bg-[#8F2CF4]/10">
                  <Globe2 size={15} className="text-[#8F2CF4]" />
                </span>

                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8F2CF4]">
                  Dubai · UAE
                </span>
              </div>

              <h2 className="max-w-xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
                Digital marketing
                <br />
                <span className="text-white/35">built for this market.</span>
              </h2>
            </motion.div>

            {/* Right */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.1, ease }}
              className="max-w-2xl lg:pt-10"
            >
              <p className="text-base leading-8 text-white/50 sm:text-lg">
                We live in Dubai, we work in Dubai, and we understand how
                digital marketing works in this city. Our strategies are
                built around local audiences, competitive markets, and the
                channels that actually move businesses forward.
              </p>

              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3">
                {[
                  "Logistics",
                  "Beauty & Clinics",
                  "Hospitality",
                  "Education",
                  "Real Estate",
                ].map((industry, index) => (
                  <motion.div
                    key={industry}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: 0.2 + index * 0.05,
                      ease,
                    }}
                    className="flex items-center gap-2 text-xs text-white/45"
                  >
                    <CheckCircle2
                      size={13}
                      className="text-[#8F2CF4]"
                    />
                    {industry}
                  </motion.div>
                ))}
              </div>

              <a
                href="#industries"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-[#8F2CF4]"
              >
                Explore our industries
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Client logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease }}
          className="border-y border-white/[0.08] py-10"
        >
          <div className="mb-7 text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/25">
              Trusted by ambitious brands
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {clients.map((client, index) => (
              <motion.div
                key={client}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.06,
                  ease,
                }}
                className="flex h-14 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.015] text-xs font-bold tracking-[0.16em] text-white/25 transition-all duration-300 hover:border-[#8F2CF4]/20 hover:bg-[#8F2CF4]/[0.03] hover:text-white/55"
              >
                {client}
              </motion.div>
            ))}
          </div>

          <p className="mt-5 text-center text-[10px] text-white/20">
            Client logos shown as placeholders — replace with approved brand
            assets.
          </p>
        </motion.div>

        {/* Stats */}
        <div
          id="stats"
          className="grid grid-cols-2 divide-x divide-y divide-white/[0.08] border-b border-white/[0.08] sm:grid-cols-3 lg:grid-cols-5 lg:divide-y-0"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: index * 0.07,
                ease,
              }}
              className={`group px-5 py-10 sm:px-7 lg:py-12 ${
                index === 4
                  ? "col-span-2 sm:col-span-1"
                  : ""
              }`}
            >
              <div className="text-4xl font-semibold tracking-[-0.06em] text-white transition-colors duration-300 group-hover:text-[#8F2CF4] sm:text-5xl">
                {stat.value}
              </div>

              <div className="mt-2 text-xs leading-5 text-white/35">
                {stat.label}
              </div>

              <div className="mt-6 h-px w-8 bg-[#8F2CF4]/50 transition-all duration-300 group-hover:w-14" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}