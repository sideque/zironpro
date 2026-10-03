"use client";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Reveal from "@/components/ui/Reveal";
import { INDUSTRIES } from "@/lib/constants";

/* Abstract schematic of the emirates served — not a geographic map. */
const NODES = [
  { name: "Dubai", x: 52, y: 46, main: true },
  { name: "Sharjah", x: 63, y: 30, main: false },
  { name: "Abu Dhabi", x: 26, y: 70, main: false },
];

export default function UAEIntro() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x1 = useTransform(scrollYProgress, [0, 1], ["8%", "-28%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-30%", "6%"]);

  return (
    <section id="about" ref={ref} className="relative overflow-hidden bg-dark py-28 sm:py-36 lg:py-44">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[70vw] w-[70vw] max-h-[900px] max-w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-primary/25 blur-[140px]" />
      <div aria-hidden="true" className="pointer-events-none select-none">
        <motion.p style={{ x: reduce ? 0 : x1 }} className="text-outline whitespace-nowrap text-[clamp(4rem,15vw,13rem)] font-bold uppercase leading-[0.9] tracking-[-0.05em]">Digital marketing company</motion.p>
        <motion.p style={{ x: reduce ? 0 : x2 }} className="whitespace-nowrap text-[clamp(4rem,15vw,13rem)] font-bold uppercase leading-[0.9] tracking-[-0.05em] text-white/[0.92]">in <span className="text-gradient">Dubai</span></motion.p>
      </div>

      <div className="relative mx-auto mt-16 grid max-w-7xl gap-16 px-5 sm:px-8 lg:mt-24 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20 lg:px-10">
        <div>
          <Reveal>
            <h2 className="sr-only">Digital marketing company in Dubai</h2>
            <p className="text-[clamp(1.7rem,3.6vw,3rem)] font-semibold leading-[1.12] tracking-[-0.04em] text-white">
              We live in <span className="text-purple-secondary">Dubai</span>, we work in Dubai, we know how to work with digital marketing to grow your business in this city.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-12">
            <p className="eyebrow mb-5">Industry focus</p>
            <ul className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
              {INDUSTRIES.map((ind) => (
                <li key={ind.title}>
                  <a href="#industries" className="group flex items-center justify-between py-4 text-lg tracking-tight text-white/55 transition-all duration-500 hover:pl-3 hover:text-white sm:text-xl">
                    <span className="flex items-baseline gap-4"><span className="font-mono text-[11px] text-white/25 group-hover:text-purple-secondary">{ind.number}</span>{ind.title}</span>
                    <span aria-hidden="true" className="h-px w-8 bg-white/20 transition-all duration-500 group-hover:w-16 group-hover:bg-purple-secondary" />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="relative mx-auto aspect-square w-full max-w-[460px] self-center">
          <svg viewBox="0 0 100 100" className="h-full w-full" role="img" aria-label="Schematic of Dubai, Sharjah and Abu Dhabi — the UAE markets ZironPro serves">
            {[46, 34, 22, 10].map((r, i) => (<circle key={r} cx="50" cy="50" r={r} fill="none" stroke="white" strokeOpacity={0.07 + i * 0.03} strokeDasharray={i % 2 ? "0.6 1.6" : undefined} strokeWidth="0.25" />))}
            <line x1="50" y1="4" x2="50" y2="96" stroke="white" strokeOpacity="0.07" strokeWidth="0.2" />
            <line x1="4" y1="50" x2="96" y2="50" stroke="white" strokeOpacity="0.07" strokeWidth="0.2" />
            <path d="M52 46 L63 30 M52 46 L26 70" stroke="url(#uaeLine)" strokeWidth="0.35" fill="none" strokeDasharray="1 1.2" />
            <defs><linearGradient id="uaeLine" x1="0" x2="1"><stop offset="0" stopColor="#8F2CF4" /><stop offset="1" stopColor="#8F2CF4" stopOpacity="0.1" /></linearGradient></defs>
          </svg>
          {NODES.map((n) => (
            <div key={n.name} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${n.x}%`, top: `${n.y}%` }}>
              <span className="relative flex items-center justify-center">
                {n.main && <span className="animate-pulse-ring absolute h-6 w-6 rounded-full bg-purple-secondary/50" />}
                <span className={`rounded-full bg-purple-secondary shadow-[0_0_24px_var(--purple-secondary)] ${n.main ? "h-3.5 w-3.5" : "h-2 w-2"}`} />
              </span>
              <span className={`absolute left-4 top-1/2 -translate-y-1/2 whitespace-nowrap font-mono uppercase tracking-[0.18em] ${n.main ? "text-[11px] text-white" : "text-[10px] text-white/50"}`}>{n.name}</span>
            </div>
          ))}
          <p className="absolute inset-x-0 -bottom-6 text-center font-mono text-[9px] uppercase tracking-[0.25em] text-white/25">Schematic · not to scale</p>
        </Reveal>
      </div>
    </section>
  );
}
