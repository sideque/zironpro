"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0D1420] pt-28">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-18%] h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-[#4D11A8]/20 blur-[140px]" />

        <div className="absolute -right-40 top-[30%] h-[450px] w-[450px] rounded-full bg-[#8F2CF4]/10 blur-[120px]" />

        <div className="absolute -left-40 bottom-[-10%] h-[400px] w-[400px] rounded-full bg-[#6620EE]/10 blur-[120px]" />
      </div>

      {/* Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl items-center px-5 pb-20 sm:px-6 lg:px-8">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Left Content */}
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#8F2CF4]/25 bg-[#8F2CF4]/[0.07] px-4 py-2"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#8F2CF4]/15">
                <Sparkles size={11} className="text-[#8F2CF4]" />
              </span>

              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/65 sm:text-[11px]">
                Digital Marketing Agency · Dubai · UAE
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease }}
              className="max-w-5xl text-[clamp(3.2rem,7vw,6.8rem)] font-semibold leading-[0.92] tracking-[-0.065em] text-white"
            >
              We turn brands
              <br />
              into{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-[#8F2CF4] via-[#6620EE] to-[#4D11A8] bg-clip-text text-transparent">
                  growth
                </span>

                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: 1,
                    delay: 1.15,
                    ease,
                  }}
                  className="absolute -bottom-1 left-0 h-[3px] rounded-full bg-gradient-to-r from-[#8F2CF4] to-[#6620EE] sm:-bottom-2"
                />
              </span>
              <br />
              machines.
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease }}
              className="mt-8 max-w-2xl text-base leading-7 text-white/55 sm:text-lg sm:leading-8"
            >
              We help businesses across Dubai, Abu Dhabi, and the wider UAE
              attract the right audience, convert leads into customers, and
              build lasting brand authority through strategy, creativity, and
              performance marketing.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65, ease }}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <a
                href="#contact"
                className="group inline-flex w-fit items-center gap-3 rounded-full bg-gradient-to-r from-[#4D11A8] to-[#6620EE] px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-[#4D11A8]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-[#6620EE]/25"
              >
                Book Consultation Today

                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowUpRight size={15} />
                </span>
              </a>

              <a
                href="#case-studies"
                className="group inline-flex w-fit items-center gap-2 rounded-full border border-white/10 px-6 py-3.5 text-sm font-medium text-white/65 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04] hover:text-white"
              >
                Explore Our Work
                <ArrowDown
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-y-0.5"
                />
              </a>
            </motion.div>

            {/* Bottom mini trust */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4 text-xs text-white/35"
            >
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#8F2CF4]" />
                Dubai & UAE focused
              </div>

              <div className="hidden h-4 w-px bg-white/10 sm:block" />

              <div className="flex items-center gap-2">
                <TrendingUp size={13} className="text-[#8F2CF4]" />
                Performance driven
              </div>

              <div className="hidden h-4 w-px bg-white/10 sm:block" />

              <div>AI-powered growth</div>
            </motion.div>
          </div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.45, ease }}
            className="relative hidden min-h-[500px] items-center justify-center lg:flex"
          >
            {/* Outer ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[430px] w-[430px] rounded-full border border-[#8F2CF4]/10"
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 45,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[350px] w-[350px] rounded-full border border-dashed border-[#6620EE]/15"
            />

            {/* Main orb */}
            <div className="relative flex h-[300px] w-[300px] items-center justify-center rounded-full bg-gradient-to-br from-[#4D11A8] via-[#6620EE] to-[#8F2CF4] shadow-[0_0_120px_rgba(102,32,238,0.28)]">
              <div className="absolute inset-[1px] rounded-full bg-[#0D1420]" />

              <div className="relative flex h-[220px] w-[220px] flex-col items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-[#170349] to-[#0D1420] shadow-inner">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#8F2CF4]/10">
                  <TrendingUp className="text-[#8F2CF4]" size={24} />
                </div>

                <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/35">
                  Growth
                </span>

                <span className="mt-1 text-4xl font-semibold tracking-[-0.05em] text-white">
                  5X
                </span>

                <span className="mt-1 text-xs text-white/35">
                  smarter marketing
                </span>
              </div>
            </div>

            {/* Floating card - leads */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-0 top-[17%] rounded-2xl border border-white/10 bg-[#0D1420]/80 p-4 shadow-2xl shadow-black/30 backdrop-blur-xl"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#8F2CF4]/10">
                  <TrendingUp size={16} className="text-[#8F2CF4]" />
                </div>

                <div>
                  <p className="text-[10px] text-white/35">
                    Lead Growth
                  </p>
                  <p className="text-sm font-semibold text-white">
                    +240%
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floating card - AI */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-[15%] right-0 rounded-2xl border border-white/10 bg-[#0D1420]/80 p-4 shadow-2xl shadow-black/30 backdrop-blur-xl"
            >
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-[#8F2CF4] shadow-[0_0_12px_#8F2CF4]" />

                <div>
                  <p className="text-[10px] text-white/35">
                    Marketing Engine
                  </p>
                  <p className="text-sm font-semibold text-white">
                    AI Powered
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Small decorative dots */}
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.4, 1, 0.4] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-[15%] top-[15%] h-2 w-2 rounded-full bg-[#8F2CF4]"
            />

            <motion.div
              animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.9, 0.3] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-[20%] left-[18%] h-1.5 w-1.5 rounded-full bg-[#6620EE]"
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0D1420] to-transparent" />
    </section>
  );
}