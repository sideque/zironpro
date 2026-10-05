"use client";

import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { CASES } from "@/lib/constants";

export default function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="relative isolate overflow-hidden border-y border-[#E7E2EF] bg-transparent py-20 sm:py-24 lg:py-28"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* =======================================================
            SECTION HEADER
        ======================================================= */}
        <div className="mb-12 flex flex-col justify-between gap-4 sm:mb-16 sm:flex-row sm:items-end">
          <div>
            <Reveal>
              <span className="eyebrow mb-2 block text-[#4D11A8]">
                Proven Commercial Outcomes
              </span>

              <h2 className="display-heading text-[#151515]">
                Real Campaigns. Verified Growth.
              </h2>
            </Reveal>
          </div>

          <Reveal>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 text-xs font-bold text-[#4D11A8] transition-colors hover:text-[#8F2CF4]"
            >
              <span>Scale Your Revenue Today</span>

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </Reveal>
        </div>

        {/* =======================================================
            CASE CARDS
        ======================================================= */}
        <div className="grid gap-8 lg:grid-cols-2">
          {CASES.map((c, i) => (
            <Reveal key={c.number} delay={i * 0.1}>
              <article
                className="
                  group
                  relative
                  flex
                  h-full
                  flex-col
                  justify-between
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/70
                  bg-white/90
                  p-8
                  shadow-[0_20px_60px_rgba(77,17,168,0.08)]
                  backdrop-blur-md
                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-[#4D11A8]/40
                  hover:bg-white
                  hover:shadow-[0_25px_70px_rgba(77,17,168,0.16)]

                  sm:p-10
                "
              >
                {/* Subtle card glow */}
                <div
                  aria-hidden="true"
                  className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    h-40
                    w-40
                    rounded-full
                    bg-[#8F2CF4]/10
                    blur-3xl
                    transition-opacity
                    duration-500
                    group-hover:bg-[#8F2CF4]/20
                  "
                />

                <div className="relative z-10">

                  {/* TOP HEADER */}
                  <div className="flex items-center justify-between border-b border-[#E7E2EF] pb-4">
                    <div className="flex items-center gap-2 font-mono text-xs font-semibold text-[#4D11A8]">
                      <span>{c.number}</span>
                      <span>·</span>
                      <span className="uppercase">
                        {c.industry}
                      </span>
                    </div>

                    <span className="rounded-full bg-[#F7F5FC] px-3 py-1 font-mono text-xs font-semibold text-[#6B6B73]">
                      {c.client}
                    </span>
                  </div>

                  {/* RESULT */}
                  <div className="my-6 flex items-baseline gap-4">
                    <span className="text-5xl font-extrabold tracking-tight text-[#4D11A8] sm:text-6xl">
                      {c.resultValue}
                    </span>

                    <span className="text-sm font-semibold leading-snug text-[#151515]">
                      {c.resultLabel}
                    </span>
                  </div>

                  {/* CHALLENGE / STRATEGY */}
                  <dl className="mt-6 space-y-3 rounded-2xl bg-[#F7F5FC]/90 p-4 text-xs backdrop-blur-sm">

                    <div>
                      <dt className="font-mono font-bold uppercase text-[#4D11A8]">
                        Challenge &amp; Goal:
                      </dt>

                      <dd className="mt-0.5 text-[#6B6B73]">
                        {c.goal}
                      </dd>
                    </div>

                    <div className="border-t border-[#E7E2EF] pt-2.5">
                      <dt className="font-mono font-bold uppercase text-[#8F2CF4]">
                        Strategy Executed:
                      </dt>

                      <dd className="mt-0.5 text-[#6B6B73]">
                        {c.solution}
                      </dd>
                    </div>

                  </dl>
                </div>

                {/* =================================================
                    BOTTOM
                ================================================= */}
                <div className="relative z-10 mt-6 flex items-center justify-between border-t border-[#E7E2EF] pt-4">

                  <span className="font-mono text-[11px] text-[#6B6B73]">
                    {c.resultNote}
                  </span>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#4D11A8] transition-colors group-hover:text-[#8F2CF4]"
                  >
                    <span>View Details</span>

                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>

                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* =======================================================
            OVERALL STATS
        ======================================================= */}
        <Reveal delay={0.3} className="mt-12">
          <div
            className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-white/20
              bg-gradient-to-r
              from-[#4D11A8]
              via-[#6620EE]
              to-[#170349]
              p-6
              text-white
              shadow-[0_20px_60px_rgba(77,17,168,0.2)]
              sm:p-8
            "
          >
            {/* Glow */}
            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                -right-20
                -top-20
                h-60
                w-60
                rounded-full
                bg-white/10
                blur-3xl
              "
            />

            <div className="relative z-10 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4">

              <div>
                <p className="text-3xl font-extrabold sm:text-4xl">
                  600%
                </p>
                <p className="mt-1 text-xs text-white/80">
                  Organic Traffic Growth
                </p>
              </div>

              <div>
                <p className="text-3xl font-extrabold sm:text-4xl">
                  5X
                </p>
                <p className="mt-1 text-xs text-white/80">
                  Lead Volume Multiplier
                </p>
              </div>

              <div>
                <p className="text-3xl font-extrabold sm:text-4xl">
                  15+
                </p>
                <p className="mt-1 text-xs text-white/80">
                  Key UAE Industries
                </p>
              </div>

              <div>
                <p className="text-3xl font-extrabold sm:text-4xl">
                  150+
                </p>
                <p className="mt-1 text-xs text-white/80">
                  Campaigns Launched
                </p>
              </div>

            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}