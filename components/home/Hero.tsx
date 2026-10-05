"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

import BlurText from "@/components/ui/Blurtext";
import Iridescence from "@/components/ui/Iridescence/Iridescence";
import { EASE } from "@/lib/constants";

export default function Hero() {
  const reduce = useReducedMotion();

  const enterAnimation = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.6,
      delay,
      ease: EASE,
    },
  });

  return (
    <section
      className="relative flex min-h-[85vh] flex-col justify-center overflow-hidden bg-white pb-16 pt-28 md:pt-32"
      aria-label="Introduction"
    >
      {/* =========================================================
          IRIDESCENCE BACKGROUND
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0 z-0">
        <Iridescence
          color={[0.32, 0.08, 0.65]}
          mouseReact={true}
          amplitude={0.08}
          speed={0.45}
        />
      </div>

      {/* =========================================================
          BACKGROUND OVERLAY
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0 z-[1] bg-white/60" />

      {/* Soft purple ambient glow */}
      <div
        className="pointer-events-none absolute -right-32 -top-32 z-[2] h-[500px] w-[500px] rounded-full bg-[#F1EAFE]/40 blur-[100px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -bottom-32 -left-32 z-[2] h-[450px] w-[450px] rounded-full bg-[#F7F5FC]/50 blur-[100px]"
        aria-hidden="true"
      />

      {/* =========================================================
          HERO CONTENT
      ========================================================== */}

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">

          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}

          <div className="lg:col-span-7">

            {/* EYEBROW */}

            <motion.div
              {...enterAnimation(0.1)}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E7E2EF] bg-white/70 px-3.5 py-1.5 backdrop-blur-md"
            >
              <span className="h-2 w-2 rounded-full bg-[#8F2CF4] shadow-[0_0_8px_#8F2CF4]" />

              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#4D11A8]">
                Digital Marketing &amp; Growth Agency · UAE
              </span>
            </motion.div>

            {/* MAIN HEADING */}

            <h1 className="display-hero max-w-2xl font-bold tracking-tight text-[#151515]">
              We Turn Your Brand Into A{" "}
              <span className="text-purple-gradient relative inline-block">
                Revenue Machine
              </span>
            </h1>

            {/* SUBTITLE */}

            <div className="mt-5 max-w-xl">
              <BlurText
                text="ZironPro is an AI-powered marketing agency in Dubai helping businesses across the UAE attract high-intent audiences, convert qualified leads, and scale sustainable revenue."
                delay={25}
                direction="bottom"
                animateBy="words"
                className="text-base font-normal leading-relaxed text-[#6B6B73] sm:text-lg"
              />
            </div>

            {/* CTAS */}

            <motion.div
              {...enterAnimation(0.4)}
              className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
            >
              {/* PRIMARY CTA */}

              <Link
                href="/#contact"
                className="group inline-flex items-center gap-3 rounded-full bg-[#4D11A8] px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#8F2CF4] hover:shadow-xl"
              >
                <span>Book a Consultation</span>

                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={14} />
                </span>
              </Link>

              {/* SECONDARY CTA */}

              <Link
                href="/#case-studies"
                className="group inline-flex items-center gap-2 rounded-full border border-[#E7E2EF] bg-white/70 px-6 py-3.5 text-sm font-semibold text-[#151515] backdrop-blur-md transition-all duration-300 hover:border-[#4D11A8]/40 hover:bg-white"
              >
                <span>Explore Our Work</span>

                <ArrowUpRight
                  size={15}
                  className="text-[#8F2CF4] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </motion.div>

            {/* QUICK TRUST HIGHLIGHTS */}

            <motion.div
              {...enterAnimation(0.55)}
              className="mt-10 flex flex-wrap items-center gap-6 border-t border-[#E7E2EF]/80 pt-6 text-xs font-medium text-[#6B6B73]"
            >
              {/* Dubai */}

              <div className="flex items-center gap-2">
                <ShieldCheck
                  size={16}
                  className="text-[#4D11A8]"
                />

                <span>Dubai &amp; UAE Market Expertise</span>
              </div>

              {/* Growth */}

              <div className="flex items-center gap-2">
                <TrendingUp
                  size={16}
                  className="text-[#8F2CF4]"
                />

                <span>600% Organic Growth Proven</span>
              </div>

              {/* AI */}

              <div className="flex items-center gap-2">
                <Sparkles
                  size={16}
                  className="text-[#6620EE]"
                />

                <span>AI-Powered Automation</span>
              </div>
            </motion.div>
          </div>

          {/* =====================================================
              RIGHT SIDE CARD
          ====================================================== */}

          <div className="flex justify-center lg:col-span-5 lg:justify-end">
            <motion.div
              initial={
                reduce
                  ? false
                  : {
                      opacity: 0,
                      scale: 0.94,
                      y: 20,
                    }
              }
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: EASE,
              }}
              className="
                relative
                w-full
                max-w-md
                overflow-hidden
                rounded-[30px]
                border
                border-[#D8BFF8]
                bg-gradient-to-br
                from-white/90
                via-[#F5E9FF]/90
                to-[#E2C7FF]/90
                p-8
                shadow-[0_25px_60px_rgba(126,34,206,0.18)]
                backdrop-blur-md
              "
            >
              {/* PURPLE AMBIENT GLOW */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-24
                  -top-24
                  h-72
                  w-72
                  rounded-full
                  bg-[#A855F7]/20
                  blur-[90px]
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-32
                  -left-24
                  h-72
                  w-72
                  rounded-full
                  bg-[#7C3AED]/15
                  blur-[90px]
                "
              />

              {/* HEADER */}

              <div className="relative z-10 mb-8 flex items-center justify-between">
                <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-[#4D11A8]">
                  Agency Identity
                </span>

                <span className="rounded-full bg-[#7C3AED]/10 px-3 py-1.5 font-mono text-[10px] font-semibold text-[#4D11A8]">
                  Dubai · UAE
                </span>
              </div>

              {/* LOGO */}

              <div className="relative z-10 flex min-h-[210px] items-center justify-center">
                <motion.div
                  initial={
                    reduce
                      ? false
                      : {
                          opacity: 0,
                          scale: 0.8,
                          y: 20,
                        }
                  }
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.9,
                    delay: 0.45,
                    ease: EASE,
                  }}
                  className="relative w-full max-w-[460px]"
                >
                  {/* LOGO GLOW */}

                  <div
                    className="
                      absolute
                      left-1/2
                      top-1/2
                      -z-10
                      h-32
                      w-80
                      -translate-x-1/2
                      -translate-y-1/2
                      rounded-full
                      bg-[#9333EA]/20
                      blur-[60px]
                    "
                  />

                  <motion.img
                    src="/brand/logo-horizontal.svg"
                    alt="ZironPro"
                    draggable={false}
                    className="
                      relative
                      z-10
                      h-auto
                      w-full
                      select-none
                      object-contain
                    "
                    initial={
                      reduce
                        ? false
                        : {
                            opacity: 0,
                            filter: "blur(8px)",
                          }
                    }
                    animate={{
                      opacity: 1,
                      filter: "blur(0px)",
                    }}
                    transition={{
                      duration: 0.8,
                      delay: 0.6,
                      ease: EASE,
                    }}
                  />
                </motion.div>
              </div>

              {/* DIVIDER */}

              <div className="relative z-10 my-5 border-t border-[#D8C5EC]" />

              {/* STATS */}

              <div className="relative z-10 grid grid-cols-2 gap-4">

                {/* SEO */}

                <motion.div
                  initial={
                    reduce
                      ? false
                      : {
                          opacity: 0,
                          y: 15,
                        }
                  }
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.8,
                    ease: EASE,
                  }}
                  className="
                    rounded-2xl
                    border
                    border-[#E5DDF0]
                    bg-white/80
                    p-4
                    shadow-[0_8px_20px_rgba(77,17,168,0.08)]
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-[0_12px_28px_rgba(77,17,168,0.14)]
                  "
                >
                  <p className="font-mono text-xs font-semibold text-[#6B6B73]">
                    SEO Growth
                  </p>

                  <p className="mt-1 text-3xl font-bold tracking-tight text-[#4D11A8]">
                    +600%
                  </p>

                  <p className="mt-1 text-[11px] text-[#6B6B73]">
                    Organic Traffic
                  </p>
                </motion.div>

                {/* PAID MEDIA */}

                <motion.div
                  initial={
                    reduce
                      ? false
                      : {
                          opacity: 0,
                          y: 15,
                        }
                  }
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.9,
                    ease: EASE,
                  }}
                  className="
                    rounded-2xl
                    border
                    border-[#E5DDF0]
                    bg-white/80
                    p-4
                    shadow-[0_8px_20px_rgba(77,17,168,0.08)]
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-[0_12px_28px_rgba(77,17,168,0.14)]
                  "
                >
                  <p className="font-mono text-xs font-semibold text-[#6B6B73]">
                    Paid Media
                  </p>

                  <p className="mt-1 text-3xl font-bold tracking-tight text-[#8F2CF4]">
                    5X
                  </p>

                  <p className="mt-1 text-[11px] text-[#6B6B73]">
                    Lead Volume
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}