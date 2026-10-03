"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  GraduationCap,
  HeartPulse,
  Hotel,
  Truck,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const industries = [
  {
    number: "01",
    title: "Logistics",
    icon: Truck,
    description:
      "Lead generation and brand visibility for freight, courier, and supply chain businesses across the UAE. We build SEO and B2B campaigns that put your services in front of decision-makers actively searching for logistics partners.",
    tags: ["B2B", "SEO", "Lead Generation"],
  },
  {
    number: "02",
    title: "Beauty & Clinics",
    icon: HeartPulse,
    description:
      "Patient acquisition campaigns for aesthetic clinics, dermatology centers, and wellness brands. From Instagram-driven booking funnels to high-intent Google Ads, we help fill appointment calendars with qualified clients.",
    tags: ["Google Ads", "Social", "Bookings"],
  },
  {
    number: "03",
    title: "Hospitality",
    icon: Hotel,
    description:
      "Direct booking growth for hotels, resorts, and F&B brands across the UAE. We combine paid media, local SEO, content, and reputation management to help properties generate more direct demand.",
    tags: ["Hotels", "F&B", "Local SEO"],
  },
  {
    number: "04",
    title: "Education",
    icon: GraduationCap,
    description:
      "Enrollment-focused campaigns for schools, universities, and training institutes. We build lead-nurturing systems that guide prospective students and parents from their first enquiry to enrollment.",
    tags: ["Admissions", "SEO", "Funnels"],
  },
  {
    number: "05",
    title: "Real Estate",
    icon: Building2,
    description:
      "Buyer and investor lead generation for developers, brokerages, and property businesses across Dubai and the UAE. Our campaigns focus on high-value leads and conversion-ready landing experiences.",
    tags: ["Property", "Performance", "Leads"],
  },
];

export default function Industries() {
  return (
    <section
      id="industries"
      className="relative overflow-hidden bg-[#0D1420] py-28 sm:py-32 lg:py-40"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute right-[-15%] top-[20%] h-[500px] w-[500px] rounded-full bg-[#4D11A8]/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
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
                Industries We Grow
              </span>
            </div>

            <h2 className="mt-6 max-w-lg text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
              Marketing built
              <br />
              <span className="text-white/35">around your industry.</span>
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
              As a digital marketing agency in the UAE, we don't run generic
              campaigns. Every industry has its own buyer behaviour, sales
              cycle, and channels that actually convert. Our strategies are
              built around how your customers really make decisions.
            </p>
          </motion.div>
        </div>

        {/* Industry Cards */}
        <div className="mt-20 border-t border-white/[0.08]">
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <motion.article
                key={industry.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.06,
                  ease,
                }}
                className="group relative border-b border-white/[0.08] py-9 sm:py-11 lg:py-12"
              >
                <div className="grid items-start gap-7 lg:grid-cols-[70px_280px_1fr_50px] lg:gap-10">
                  {/* Number */}
                  <div className="text-xs font-medium tracking-[0.15em] text-white/25">
                    {industry.number}
                  </div>

                  {/* Title */}
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.025] transition-all duration-500 group-hover:border-[#8F2CF4]/30 group-hover:bg-[#8F2CF4]/10">
                      <Icon
                        size={20}
                        strokeWidth={1.5}
                        className="text-white/55 transition-colors duration-500 group-hover:text-[#8F2CF4]"
                      />
                    </div>

                    <h3 className="text-xl font-semibold tracking-[-0.03em] text-white sm:text-2xl">
                      {industry.title}
                    </h3>
                  </div>

                  {/* Content */}
                  <div>
                    <p className="max-w-2xl text-sm leading-7 text-white/40 sm:text-[15px]">
                      {industry.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {industry.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/[0.07] bg-white/[0.02] px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.12em] text-white/35 transition-colors duration-300 group-hover:border-[#8F2CF4]/15 group-hover:text-white/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="hidden lg:flex lg:justify-end">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] text-white/30 transition-all duration-500 group-hover:border-[#8F2CF4]/30 group-hover:bg-[#8F2CF4] group-hover:text-white">
                      <ArrowUpRight size={17} />
                    </div>
                  </div>
                </div>

                {/* Hover line */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "0%" }}
                  className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-[#4D11A8] via-[#8F2CF4] to-transparent"
                />

                <div className="pointer-events-none absolute inset-y-0 left-0 -z-0 w-0 bg-gradient-to-r from-[#8F2CF4]/[0.025] to-transparent transition-all duration-700 group-hover:w-full" />
              </motion.article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease }}
          className="mt-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-center"
        >
          <p className="max-w-md text-sm leading-6 text-white/30">
            Don't see your industry? We work with ambitious businesses across
            the UAE looking for measurable growth.
          </p>

          <a
            href="#contact"
            className="group inline-flex w-fit items-center gap-3 rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-[#8F2CF4]/30 hover:bg-[#8F2CF4]/10"
          >
            Find Your Industry Strategy
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