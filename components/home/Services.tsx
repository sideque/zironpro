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
import Lightning from "@/components/ui/Lightning/Lightning";

import { SERVICES, EASE } from "@/lib/constants";

const ICON_MAP: Record<
  string,
  React.ComponentType<{
    size?: number;
    className?: string;
  }>
> = {
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
      className="
        relative
        isolate
        overflow-hidden
        border-y
        border-[#E7E2EF]
        bg-[#F4EEFF]
        py-20
        sm:py-24
        lg:py-28
      "
    >
      {/* =====================================================
          SOFT PURPLE BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-30
          bg-[radial-gradient(circle_at_15%_20%,rgba(143,44,244,0.18),transparent_32%),radial-gradient(circle_at_85%_70%,rgba(77,17,168,0.14),transparent_35%),linear-gradient(135deg,#F7F5FC_0%,#EEE4FF_50%,#F7F5FC_100%)]
        "
      />

      {/* =====================================================
          PURPLE LIGHTNING
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-20
          overflow-hidden
          opacity-60
        "
      >
        <Lightning
          hue={270}
          xOffset={0}
          speed={0.45}
          intensity={0.55}
          size={1}
        />
      </div>

      {/* =====================================================
          LIGHT PURPLE OVERLAY
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          -z-10
          bg-white/35
        "
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* =================================================
            HEADER
        ================================================= */}

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
              From identity design and high-performance websites to lead
              acquisition and AI automation — built specifically for
              growth-focused businesses.
            </p>
          </Reveal>
        </div>

        {/* =================================================
            SERVICES GRID
        ================================================= */}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon =
              ICON_MAP[service.id] || TrendingUp;

            return (
              <motion.article
                key={service.id}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.55,
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
                  rounded-3xl
                  border
                  border-[#E0D3F2]
                  bg-white/80
                  p-7
                  shadow-[0_10px_40px_rgba(77,17,168,0.06)]
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#4D11A8]/40
                  hover:bg-white
                  hover:shadow-[0_20px_50px_rgba(77,17,168,0.12)]
                "
              >
                {/* CARD GLOW */}

                <div
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
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                <div className="relative">
                  {/* TOP CARD HEADER */}

                  <div className="flex items-center justify-between">
                    <div
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-2xl
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

                    <span
                      className="
                        font-mono
                        text-xs
                        font-semibold
                        text-[#6B6B73]
                      "
                    >
                      {service.number}
                    </span>
                  </div>

                  {/* TITLE */}

                  <h3
                    className="
                      mt-6
                      text-xl
                      font-bold
                      tracking-tight
                      text-[#151515]
                      transition-colors
                      duration-300
                      group-hover:text-[#4D11A8]
                    "
                  >
                    {service.title}
                  </h3>

                  {/* DESCRIPTION */}

                  <p
                    className="
                      mt-2.5
                      text-xs
                      leading-relaxed
                      text-[#6B6B73]
                    "
                  >
                    {service.description}
                  </p>

                  {/* ITEMS */}

                  <ul
                    className="
                      mt-5
                      space-y-2
                      border-t
                      border-[#E7E2EF]
                      pt-4
                    "
                  >
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="
                          flex
                          items-center
                          gap-2
                          text-xs
                          font-medium
                          text-[#151515]
                        "
                      >
                        <CheckCircle2
                          size={13}
                          className="
                            shrink-0
                            text-[#8F2CF4]
                          "
                        />

                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* BOTTOM LINK */}

                <div
                  className="
                    relative
                    mt-6
                    flex
                    items-center
                    justify-between
                    pt-2
                  "
                >
                  <a
                    href="#contact"
                    className="
                      inline-flex
                      items-center
                      gap-1.5
                      text-xs
                      font-bold
                      text-[#4D11A8]
                      transition-colors
                      group-hover:text-[#8F2CF4]
                    "
                  >
                    <span>
                      Request Service Proposal
                    </span>

                    <ArrowUpRight
                      size={14}
                      className="
                        transition-transform
                        duration-300
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                      "
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