"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Building2, Stethoscope, Car, Truck, GraduationCap, Laptop, ShoppingBag, Hotel, Briefcase, Gem, Rocket } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { INDUSTRIES, EASE } from "@/lib/constants";
import Lightning from "@/components/ui/Lightning/Lightning";

const ICON_LIST = [
  Building2,
  Stethoscope,
  Car,
  Truck,
  GraduationCap,
  Laptop,
  ShoppingBag,
  Hotel,
  Briefcase,
  Gem,
  Rocket,
];

export default function Industries() {
  return (
    <section
      id="industries"
      className="relative bg-white py-20 sm:py-24 lg:py-28"
    >

      <Lightning
                hue={270}
                xOffset={0}
                speed={0.45}
                intensity={0.55}
                size={1}
              />
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        
        {/* HEADER */}
        <div className="mb-12 max-w-2xl sm:mb-16">
          <Reveal>
            <span className="eyebrow mb-2 block text-[#4D11A8]">
              Industry Specialization
            </span>
            <h2 className="display-heading text-[#151515]">
              Tailored Strategies For UAE Sector Leadership
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="display-subheading mt-3 text-base text-[#6B6B73] sm:text-lg">
              We understand the buying behavior, regulatory context, and growth drivers across major GCC business sectors.
            </p>
          </Reveal>
        </div>

        {/* MODERN INTERACTIVE GRID */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((ind, index) => {
            const IconComponent = ICON_LIST[index % ICON_LIST.length];

            return (
              <motion.article
                key={ind.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.04,
                  ease: EASE,
                }}
                className="group relative flex flex-col justify-between rounded-2xl border border-[#E7E2EF] bg-[#F7F5FC] p-6 transition-all duration-300 hover:border-[#4D11A8]/40 hover:bg-white hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-[#8F2CF4]">
                      {ind.number}
                    </span>
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white border border-[#E7E2EF] text-[#4D11A8] transition-colors group-hover:bg-[#4D11A8] group-hover:text-white">
                      <IconComponent size={18} />
                    </div>
                  </div>

                  <h3 className="mt-4 text-base font-bold text-[#151515] transition-colors group-hover:text-[#4D11A8]">
                    {ind.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#6B6B73]">
                    {ind.description}
                  </p>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-[#E7E2EF] pt-3">
                  <span className="font-mono text-[10px] uppercase font-semibold text-[#6B6B73]">
                    UAE Market Focus
                  </span>
                  <ArrowUpRight
                    size={15}
                    className="text-[#8F2CF4] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
