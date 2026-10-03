"use client";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import Reveal from "@/components/ui/Reveal";
import ScrollFloat from "@/components/ui/ScrollFloat";
import { CASES } from "@/lib/constants";

function Case({ c, flip }: { c: (typeof CASES)[number]; flip: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const numY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  const onMove = (e: React.PointerEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  const result = `${c.resultValue} ${c.resultLabel}${c.resultNote ? `; ${c.resultNote.charAt(0).toLowerCase()}${c.resultNote.slice(1)}` : ""}`;
  const rows = [{ k: "Goal", v: c.goal }, { k: "Solution", v: c.solution }, { k: "Result", v: result }];

  return (
    <Reveal amount={0.1}>
      <article ref={ref} onPointerMove={onMove} className="group relative overflow-hidden rounded-[2rem] border border-white/[0.09] bg-gradient-to-br from-navy/60 via-dark to-dark" style={{ ["--mx" as string]: "50%", ["--my" as string]: "0%" }}>
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100 [background:radial-gradient(500px_circle_at_var(--mx)_var(--my),rgb(143_44_244/0.22),transparent_60%)]" />
        <div className={`relative grid gap-10 p-6 sm:p-10 lg:grid-cols-2 lg:gap-16 lg:p-14 ${flip ? "lg:[&>*:first-child]:order-2" : ""}`}>
          <div className="relative flex flex-col justify-between gap-8">
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-white/45">
              <span className="text-purple-secondary">{c.number}</span><span className="h-px w-8 bg-white/20" /><span>{c.industry}</span>
            </div>
            <motion.p style={{ y: reduce ? 0 : numY }} aria-label={`${c.resultValue} ${c.resultLabel}`} className="text-gradient text-[clamp(5.5rem,17vw,12.5rem)] font-semibold leading-[0.82] tracking-[-0.07em]">{c.resultValue}</motion.p>
            <p className="max-w-sm text-lg font-medium leading-snug tracking-[-0.02em] text-white">{c.resultLabel}</p>
          </div>
          <div className="flex flex-col justify-between gap-10">
            <div><p className="eyebrow">Client</p><h3 className="display mt-2 text-[clamp(2rem,4vw,3.2rem)] text-white">{c.client}</h3></div>
            <dl className="divide-y divide-white/[0.09] border-y border-white/[0.09]">
              {rows.map((r) => (
                <div key={r.k} className="grid gap-2 py-5 sm:grid-cols-[110px_1fr] sm:gap-6">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-purple-secondary">{r.k}</dt>
                  <dd className="text-[15px] leading-7 text-muted">{r.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function CaseStudies() {
  return (
    <section id="case-studies" className="relative bg-dark py-28 sm:py-36">
      <div className="pointer-events-none absolute left-[-20%] top-[25%] h-[600px] w-[600px] rounded-full bg-purple-accent/15 blur-[160px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-14 flex flex-col justify-between gap-6 sm:mb-20 lg:flex-row lg:items-end">
          <div>
            <p className="eyebrow mb-4">Case studies</p>
            <ScrollFloat containerClassName="!my-0" textClassName="display !text-[clamp(2.2rem,6vw,5rem)] !leading-[1.08] text-white">Real Campaigns. Real Results.</ScrollFloat>
          </div>
          <Reveal>
            <a href="#contact" className="group inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white">
              Start your own growth story
              <ArrowUpRight size={16} className="text-purple-secondary transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
          </Reveal>
        </div>
        <div className="space-y-6 sm:space-y-8">{CASES.map((c, i) => (<Case key={c.number} c={c} flip={i % 2 === 1} />))}</div>
      </div>
    </section>
  );
}
