import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { CASES } from "@/lib/constants";

export default function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="relative border-y border-[#E7E2EF] bg-[#F7F5FC] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        
        {/* SECTION HEADER */}
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

        {/* CASE CARDS GRID */}
        <div className="grid gap-8 lg:grid-cols-2">
          {CASES.map((c, i) => (
            <Reveal key={c.number} delay={i * 0.1}>
              <article className="group relative flex flex-col justify-between rounded-3xl border border-[#E7E2EF] bg-white p-8 shadow-sm transition-all duration-300 hover:border-[#4D11A8]/40 hover:shadow-lg sm:p-10">
                
                {/* TOP HEADER */}
                <div>
                  <div className="flex items-center justify-between border-b border-[#E7E2EF] pb-4">
                    <div className="flex items-center gap-2 font-mono text-xs font-semibold text-[#4D11A8]">
                      <span>{c.number}</span>
                      <span>·</span>
                      <span className="uppercase">{c.industry}</span>
                    </div>
                    <span className="rounded-full bg-[#F7F5FC] px-3 py-1 font-mono text-xs font-semibold text-[#6B6B73]">
                      {c.client}
                    </span>
                  </div>

                  {/* LARGE CONTROLLED METRIC */}
                  <div className="my-6 flex items-baseline gap-4">
                    <span className="text-[#4D11A8] text-5xl font-extrabold tracking-tight sm:text-6xl">
                      {c.resultValue}
                    </span>
                    <span className="text-sm font-semibold leading-snug text-[#151515]">
                      {c.resultLabel}
                    </span>
                  </div>

                  {/* GOAL & SOLUTION */}
                  <dl className="mt-6 space-y-3 rounded-2xl bg-[#F7F5FC] p-4 text-xs">
                    <div>
                      <dt className="font-mono font-bold uppercase text-[#4D11A8]">
                        Challenge &amp; Goal:
                      </dt>
                      <dd className="mt-0.5 text-[#6B6B73]">{c.goal}</dd>
                    </div>
                    <div className="border-t border-[#E7E2EF] pt-2.5">
                      <dt className="font-mono font-bold uppercase text-[#8F2CF4]">
                        Strategy Executed:
                      </dt>
                      <dd className="mt-0.5 text-[#6B6B73]">{c.solution}</dd>
                    </div>
                  </dl>
                </div>

                {/* BOTTOM NOTE & LINK */}
                <div className="mt-6 flex items-center justify-between border-t border-[#E7E2EF] pt-4">
                  <span className="font-mono text-[11px] text-[#6B6B73]">
                    {c.resultNote}
                  </span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#4D11A8] group-hover:text-[#8F2CF4]"
                  >
                    <span>View Details</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>

              </article>
            </Reveal>
          ))}
        </div>

        {/* OVERALL STATS STRIP */}
        <Reveal delay={0.3} className="mt-12">
          <div className="grid grid-cols-2 gap-4 rounded-3xl border border-[#E7E2EF] bg-gradient-to-r from-[#4D11A8] to-[#170349] p-6 text-white sm:grid-cols-4 sm:p-8">
            <div>
              <p className="text-3xl font-extrabold sm:text-4xl">600%</p>
              <p className="mt-1 text-xs text-white/80">Organic Traffic Growth</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold sm:text-4xl">5X</p>
              <p className="mt-1 text-xs text-white/80">Lead Volume Multiplier</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold sm:text-4xl">15+</p>
              <p className="mt-1 text-xs text-white/80">Key UAE Industries</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold sm:text-4xl">150+</p>
              <p className="mt-1 text-xs text-white/80">Campaigns Launched</p>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
