"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Palette,
  Globe,
  TrendingUp,
  Search,
  Video,
  Gift,
  CheckCircle2,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { SERVICES, EASE } from "@/lib/constants";

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  branding: Palette,
  "web-dev": Globe,
  "digital-marketing": TrendingUp,
  seo: Search,
  video: Video,
  printing: Gift,
};

export default function Services() {
  return (
    <section
      id="services"
      className="relative bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        
        {/* HEADER */}
        <div className="mb-12 max-w-2xl sm:mb-16">
          <Reveal>
            <span className="eyebrow mb-2 block text-[#4D11A8]">
              Comprehensive Growth Services
            </span>
            <h2 className="display-heading text-[#151515]">
              Everything Your Brand Needs To Scale in the UAE
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="display-subheading mt-3 text-base text-[#6B6B73] sm:text-lg">
              From identity design and high-performance websites to lead acquisition and AI automation — built specifically for growth-focused businesses.
            </p>
          </Reveal>
        </div>

        {/* 3-COLUMN GRID */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = ICON_MAP[service.id] || TrendingUp;

            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: EASE,
                }}
                className="group relative flex flex-col justify-between rounded-3xl border border-[#E7E2EF] bg-[#F7F5FC] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#4D11A8]/50 hover:bg-white hover:shadow-lg"
              >
                <div>
                  {/* TOP CARD HEADER */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white border border-[#E7E2EF] text-[#4D11A8] shadow-sm transition-colors duration-300 group-hover:bg-[#4D11A8] group-hover:text-white">
                      <Icon size={20} />
                    </div>
                    <span className="font-mono text-xs font-semibold text-[#6B6B73]">
                      {service.number}
                    </span>
                  </div>

                  {/* TITLE & DESCRIPTION */}
                  <h3 className="mt-6 text-xl font-bold tracking-tight text-[#151515] transition-colors duration-300 group-hover:text-[#4D11A8]">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-xs leading-relaxed text-[#6B6B73]">
                    {service.description}
                  </p>

                  {/* ITEMS LIST */}
                  <ul className="mt-5 space-y-2 border-t border-[#E7E2EF] pt-4">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-xs font-medium text-[#151515]"
                      >
                        <CheckCircle2 size={13} className="shrink-0 text-[#8F2CF4]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* BOTTOM LINK */}
                <div className="mt-6 flex items-center justify-between pt-2">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4D11A8] transition-colors group-hover:text-[#8F2CF4]"
                  >
                    <span>Request Service Proposal</span>
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
