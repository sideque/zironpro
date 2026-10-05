"use client";

import Reveal from "@/components/ui/Reveal";
import ScrollReveal from "@/components/ui/ScrollReveal/ScrollReveal";

const NODES = [
  {
    name: "Dubai (HQ)",
    x: 52,
    y: 46,
    main: true,
  },
  {
    name: "Sharjah",
    x: 63,
    y: 30,
    main: false,
  },
  {
    name: "Abu Dhabi",
    x: 26,
    y: 70,
    main: false,
  },
];

export default function UAEIntro() {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        border-b
        border-[#E7E2EF]
        bg-[#F7F5FC]
        py-20
        sm:py-24
        lg:py-28
      "
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-0
          h-[500px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-[#8F2CF4]/[0.06]
          blur-[120px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-40
          top-1/2
          h-[400px]
          w-[400px]
          rounded-full
          bg-[#4D11A8]/[0.04]
          blur-[100px]
        "
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">

          {/* =====================================================
              LEFT COLUMN
          ===================================================== */}

          <div className="lg:col-span-7">

            {/* Label */}
            <Reveal>
              <div
                className="
                  mb-4
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[#E7E2EF]
                  bg-white
                  px-3
                  py-1
                  shadow-sm
                "
              >
                <span
                  className="
                    h-2
                    w-2
                    rounded-full
                    bg-[#4D11A8]
                    shadow-[0_0_12px_rgba(77,17,168,0.45)]
                  "
                />

                <span className="eyebrow text-[11px] text-[#4D11A8]">
                  Built For The UAE Market
                </span>
              </div>
            </Reveal>

            {/* =================================================
                MAIN HEADING — SCROLL REVEAL

                IMPORTANT:
                No text-[...] class here.
                Your existing display-heading controls
                the font size.
            ================================================= */}

            <ScrollReveal
              baseOpacity={0.05}
              enableBlur={true}
              baseRotation={3}
              blurStrength={7}
              containerClassName="max-w-4xl"
              textClassName="display-heading text-[#151515]"
            >
              We Live in Dubai. We Drive Growth Across the UAE.
            </ScrollReveal>

            {/* =================================================
                DESCRIPTION — SCROLL REVEAL
            ================================================= */}

            <div className="mt-7 max-w-2xl">
              <ScrollReveal
                baseOpacity={0.15}
                enableBlur={true}
                baseRotation={2}
                blurStrength={5}
                textClassName="
                  display-subheading
                  text-base
                  font-normal
                  leading-7
                  tracking-[-0.01em]
                  text-[#6B6B73]
                  sm:text-lg
                  sm:leading-8
                "
              >
                ZironPro is strategically positioned in Dubai, combining deep
                regional market intelligence with cutting-edge AI and growth
                tactics. We help UAE companies turn interest into qualified
                leads, contracts, and market authority.
              </ScrollReveal>
            </div>

            {/* =================================================
                STATS
            ================================================= */}

            <Reveal delay={0.25} className="mt-8">
              <div
                className="
                  grid
                  grid-cols-3
                  gap-4
                  border-t
                  border-[#E7E2EF]
                  pt-6
                "
              >
                {/* Stat 1 */}
                <div>
                  <p
                    className="
                      text-2xl
                      font-bold
                      tracking-tight
                      text-[#4D11A8]
                    "
                  >
                    100%
                  </p>

                  <p className="mt-0.5 text-xs text-[#6B6B73]">
                    UAE Market Focus
                  </p>
                </div>

                {/* Stat 2 */}
                <div>
                  <p
                    className="
                      text-2xl
                      font-bold
                      tracking-tight
                      text-[#8F2CF4]
                    "
                  >
                    Full
                  </p>

                  <p className="mt-0.5 text-xs text-[#6B6B73]">
                    Funnel Strategy
                  </p>
                </div>

                {/* Stat 3 */}
                <div>
                  <p
                    className="
                      text-2xl
                      font-bold
                      tracking-tight
                      text-[#6620EE]
                    "
                  >
                    24/7
                  </p>

                  <p className="mt-0.5 text-xs text-[#6B6B73]">
                    AI Automation
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* =====================================================
              RIGHT COLUMN — UAE MAP CARD
          ===================================================== */}

          <div className="flex justify-center lg:col-span-5">
            <Reveal
              delay={0.2}
              className="
                relative
                aspect-square
                w-full
                max-w-[420px]
                rounded-3xl
                border
                border-[#E7E2EF]
                bg-white
                p-6
                shadow-md
              "
            >
              {/* Card header */}
              <div
                className="
                  mb-4
                  flex
                  items-center
                  justify-between
                  border-b
                  border-[#E7E2EF]
                  pb-3
                "
              >
                <span
                  className="
                    font-mono
                    text-xs
                    font-bold
                    uppercase
                    tracking-wider
                    text-[#4D11A8]
                  "
                >
                  Regional Footprint
                </span>

                <span
                  className="
                    font-mono
                    text-[10px]
                    text-[#6B6B73]
                  "
                >
                  Dubai · Abu Dhabi · Northern Emirates
                </span>
              </div>

              {/* Map */}
              <div className="relative h-[280px] w-full">
                <svg
                  viewBox="0 0 100 100"
                  className="h-full w-full"
                  role="img"
                  aria-label="Schematic of UAE markets served"
                >
                  {/* Radar circles */}
                  {[46, 34, 22, 10].map((radius, index) => (
                    <circle
                      key={radius}
                      cx="50"
                      cy="50"
                      r={radius}
                      fill="none"
                      stroke="#8F2CF4"
                      strokeOpacity={0.12 + index * 0.05}
                      strokeDasharray={
                        index % 2 ? "1 2" : undefined
                      }
                      strokeWidth="0.4"
                    />
                  ))}

                  {/* Vertical line */}
                  <line
                    x1="50"
                    y1="4"
                    x2="50"
                    y2="96"
                    stroke="#4D11A8"
                    strokeOpacity="0.1"
                    strokeWidth="0.3"
                  />

                  {/* Horizontal line */}
                  <line
                    x1="4"
                    y1="50"
                    x2="96"
                    y2="50"
                    stroke="#4D11A8"
                    strokeOpacity="0.1"
                    strokeWidth="0.3"
                  />

                  {/* Connection lines */}
                  <path
                    d="M52 46 L63 30 M52 46 L26 70"
                    stroke="#8F2CF4"
                    strokeWidth="0.6"
                    fill="none"
                    strokeDasharray="1.5 1.5"
                  />
                </svg>

                {/* Nodes */}
                {NODES.map((node) => (
                  <div
                    key={node.name}
                    className="
                      absolute
                      -translate-x-1/2
                      -translate-y-1/2
                    "
                    style={{
                      left: `${node.x}%`,
                      top: `${node.y}%`,
                    }}
                  >
                    <span className="relative flex items-center justify-center">
                      {/* Ping effect for Dubai */}
                      {node.main && (
                        <span
                          className="
                            absolute
                            h-5
                            w-5
                            animate-ping
                            rounded-full
                            bg-[#8F2CF4]/30
                          "
                        />
                      )}

                      {/* Node */}
                      <span
                        className={`
                          rounded-full
                          shadow-sm
                          ${
                            node.main
                              ? "h-3.5 w-3.5 bg-[#4D11A8]"
                              : "h-2.5 w-2.5 bg-[#8F2CF4]"
                          }
                        `}
                      />
                    </span>

                    {/* Label */}
                    <span
                      className={`
                        absolute
                        left-4
                        top-1/2
                        -translate-y-1/2
                        whitespace-nowrap
                        font-mono
                        font-semibold
                        uppercase
                        tracking-wider
                        ${
                          node.main
                            ? "text-xs text-[#4D11A8]"
                            : "text-[10px] text-[#6B6B73]"
                        }
                      `}
                    >
                      {node.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <p
                className="
                  mt-2
                  text-center
                  font-mono
                  text-[10px]
                  text-[#6B6B73]
                "
              >
                Strategic UAE Growth Node Map
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}