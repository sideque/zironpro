"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Clock3,
  Layers3,
  MoveRight,
  Users,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const rows = [
  {
    feature: "Skill Coverage",
    icon: Layers3,
    ziron: "Design, Dev, Marketing & Print",
    inHouse: "Limited to hires",
    agencies: "Depends on agency",
  },
  {
    feature: "Senior-Level Expertise",
    icon: Users,
    ziron: "Senior specialists",
    inHouse: "Depends on team",
    agencies: "Varies by agency",
  },
  {
    feature: "Turnaround Time",
    icon: Clock3,
    ziron: "48 hours for most requests",
    inHouse: "Weeks",
    agencies: "Weeks",
  },
  {
    feature: "Start Time",
    icon: MoveRight,
    ziron: "Same day",
    inHouse: "Weeks to onboard",
    agencies: "Days to set up",
  },
  {
    feature: "Client Portal",
    icon: Layers3,
    ziron: "Yes",
    inHouse: "Often less accessible",
    agencies: "Not always available",
  },
  {
    feature: "Scalability",
    icon: ArrowUpRight,
    ziron: "Scale up or down with ease",
    inHouse: "Possible",
    agencies: "Depends on agency",
  },
  {
    feature: "Flexibility",
    icon: MoveRight,
    ziron: "Pause or adjust anytime",
    inHouse: "Locked into salaries",
    agencies: "Often contract-based",
  },
];

export default function Comparison() {
  return (
    <section
      id="comparison"
      className="relative overflow-hidden bg-[#0D1420] py-28 sm:py-32 lg:py-40"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-[30%] h-[450px] w-[700px] -translate-x-1/2 rounded-full bg-[#4D11A8]/10 blur-[150px]" />

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
                The Difference
              </span>
            </div>

            <h2 className="mt-6 max-w-xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
              One partner.
              <br />
              <span className="text-white/35">
                Multiple capabilities.
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
              Instead of building and managing multiple teams, ZironPro brings
              strategy, creative, technology, performance, and execution
              together under one growth partner.
            </p>
          </motion.div>
        </div>

        {/* Desktop comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="mt-20 hidden overflow-hidden rounded-[28px] border border-white/[0.08] bg-white/[0.015] lg:block"
        >
          {/* Table Header */}
          <div className="grid grid-cols-[1.25fr_1fr_1fr_1fr] border-b border-white/[0.08]">
            <div className="p-6">
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/25">
                Comparison
              </span>
            </div>

            <div className="relative border-l border-white/[0.08] bg-[#4D11A8]/10 p-6">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#8F2CF4] to-transparent" />

              <span className="text-sm font-semibold text-white">
                ZironPro
              </span>

              <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-[#8F2CF4]">
                Growth Partner
              </p>
            </div>

            <div className="border-l border-white/[0.08] p-6">
              <span className="text-sm font-medium text-white/60">
                In-House Team
              </span>
            </div>

            <div className="border-l border-white/[0.08] p-6">
              <span className="text-sm font-medium text-white/60">
                Other Agencies
              </span>
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, index) => {
            const Icon = row.icon;

            return (
              <div
                key={row.feature}
                className="group grid grid-cols-[1.25fr_1fr_1fr_1fr] border-b border-white/[0.06] last:border-b-0"
              >
                {/* Feature */}
                <div className="flex items-center gap-4 p-6">
                  <Icon
                    size={17}
                    strokeWidth={1.5}
                    className="text-white/25 transition-colors duration-300 group-hover:text-[#8F2CF4]"
                  />

                  <span className="text-sm font-medium text-white/65">
                    {row.feature}
                  </span>
                </div>

                {/* ZironPro */}
                <div className="flex items-center gap-3 border-l border-white/[0.06] bg-[#4D11A8]/[0.035] p-6">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#8F2CF4]/15">
                    <Check
                      size={12}
                      strokeWidth={2.5}
                      className="text-[#8F2CF4]"
                    />
                  </div>

                  <span className="text-sm text-white/70">
                    {row.ziron}
                  </span>
                </div>

                {/* In-house */}
                <div className="border-l border-white/[0.06] p-6">
                  <span className="text-sm text-white/30">
                    {row.inHouse}
                  </span>
                </div>

                {/* Other agencies */}
                <div className="border-l border-white/[0.06] p-6">
                  <span className="text-sm text-white/30">
                    {row.agencies}
                  </span>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Mobile cards */}
        <div className="mt-16 space-y-4 lg:hidden">
          {rows.map((row, index) => {
            const Icon = row.icon;

            return (
              <motion.div
                key={row.feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease,
                }}
                className="overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.015]"
              >
                <div className="flex items-center gap-3 border-b border-white/[0.07] p-5">
                  <Icon
                    size={17}
                    className="text-[#8F2CF4]"
                    strokeWidth={1.5}
                  />

                  <span className="text-sm font-semibold text-white">
                    {row.feature}
                  </span>
                </div>

                <div className="grid grid-cols-1">
                  <div className="bg-[#4D11A8]/10 p-5">
                    <div className="mb-2 flex items-center gap-2">
                      <Check
                        size={13}
                        className="text-[#8F2CF4]"
                      />

                      <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#8F2CF4]">
                        ZironPro
                      </span>
                    </div>

                    <p className="text-sm text-white/70">
                      {row.ziron}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 divide-x divide-white/[0.06] border-t border-white/[0.06]">
                    <div className="p-5">
                      <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/20">
                        In-House
                      </p>

                      <p className="text-xs leading-5 text-white/30">
                        {row.inHouse}
                      </p>
                    </div>

                    <div className="p-5">
                      <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/20">
                        Other Agencies
                      </p>

                      <p className="text-xs leading-5 text-white/30">
                        {row.agencies}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="mt-12 flex flex-col gap-6 border-t border-white/[0.08] pt-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="max-w-xl text-sm leading-6 text-white/30">
            Need flexibility without building an entire marketing department?
            Let's create the right team around your goals.
          </p>

          <a
            href="#contact"
            className="group inline-flex w-fit items-center gap-3 rounded-full bg-[#4D11A8] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#6620EE] hover:shadow-xl hover:shadow-[#4D11A8]/20"
          >
            Build Your Growth Team

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