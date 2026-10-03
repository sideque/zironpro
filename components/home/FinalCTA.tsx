"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0D1420] px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28"
    >
      {/* Main container */}
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] border border-white/[0.08] bg-[#170349]">
        {/* Glow layers */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8F2CF4]/20 blur-[140px]" />

        <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#6620EE]/20 blur-[100px]" />

        <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[#4D11A8]/30 blur-[100px]" />

        {/* Decorative circles */}
        <div className="pointer-events-none absolute right-[-80px] top-[-80px] h-72 w-72 rounded-full border border-white/[0.06]" />

        <div className="pointer-events-none absolute right-[-30px] top-[-30px] h-52 w-52 rounded-full border border-white/[0.05]" />

        <div className="pointer-events-none absolute bottom-[-100px] left-[-80px] h-72 w-72 rounded-full border border-white/[0.05]" />

        {/* Content */}
        <div className="relative px-7 py-20 text-center sm:px-12 sm:py-24 lg:px-20 lg:py-28">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="flex items-center justify-center gap-3"
          >
            <Sparkles
              size={14}
              className="text-[#8F2CF4]"
              strokeWidth={1.5}
            />

            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/45">
              Let's Build Something Bigger
            </span>

            <Sparkles
              size={14}
              className="text-[#8F2CF4]"
              strokeWidth={1.5}
            />
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.05, ease }}
            className="mx-auto mt-7 max-w-4xl text-4xl font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Ready to build your
            <br />
            <span className="bg-gradient-to-r from-white via-[#8F2CF4] to-[#6620EE] bg-clip-text text-transparent">
              growth engine?
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.12, ease }}
            className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-white/45 sm:text-base sm:leading-8"
          >
            If you're looking for a marketing agency in the UAE offering SEO,
            paid ads, content, social media, websites, and automation — backed
            by strategy and measurable outcomes — we're here to help.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href="mailto:info@zironpro.com"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#170349] transition-all duration-300 hover:scale-[1.02] hover:bg-white/90"
            >
              Book a Free Consultation

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#4D11A8] text-white">
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </a>

            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-7 py-4 text-sm font-medium text-white/65 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04] hover:text-white"
            >
              Explore our services
            </a>
          </motion.div>

          {/* Trust line */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease }}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[10px] uppercase tracking-[0.14em] text-white/20"
          >
            <span>Dubai</span>
            <span className="h-1 w-1 rounded-full bg-white/15" />
            <span>Abu Dhabi</span>
            <span className="h-1 w-1 rounded-full bg-white/15" />
            <span>UAE Wide</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}