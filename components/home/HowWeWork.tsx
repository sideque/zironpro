"use client";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollFloat from "@/components/ui/ScrollFloat";
import { HOW_WE_WORK } from "@/lib/constants";

function Step({ s }: { s: (typeof HOW_WE_WORK)[number] }) {
  const ref = useRef<HTMLLIElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.9", "start 0.4"] });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.25, 1]);
  const x = useTransform(scrollYProgress, [0, 1], [-30, 0]);
  const line = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <li ref={ref} className="relative border-b border-white/[0.09] py-10 sm:py-14">
      <motion.span aria-hidden="true" style={{ scaleX: reduce ? 1 : line }} className="absolute bottom-[-1px] left-0 h-px w-full origin-left bg-gradient-to-r from-purple-secondary to-transparent" />
      <motion.div style={{ opacity: reduce ? 1 : opacity, x: reduce ? 0 : x }} className="grid items-start gap-6 md:grid-cols-[minmax(7rem,0.45fr)_1fr_1fr] md:gap-12">
        <span className="text-outline text-[clamp(4.5rem,11vw,9rem)] font-bold leading-[0.8] tracking-[-0.06em]">{s.number}</span>
        <h3 className="display text-[clamp(1.8rem,3.4vw,2.8rem)] !leading-[1.05] text-white">{s.title}</h3>
        <p className="max-w-md text-[15px] leading-7 text-muted">{s.description}</p>
      </motion.div>
    </li>
  );
}

export default function HowWeWork() {
  return (
    <section id="process" className="relative bg-dark py-28 sm:py-36">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[80vw] max-w-[1000px] -translate-x-1/2 rounded-full bg-purple-primary/20 blur-[160px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <p className="eyebrow mb-4">How we work</p>
        <ScrollFloat containerClassName="!my-0 mb-14 sm:mb-20" textClassName="display !text-[clamp(2.4rem,6.4vw,5.4rem)] !leading-[1.06] text-white">Built Around Your Brand</ScrollFloat>
        <ol className="border-t border-white/[0.09]">{HOW_WE_WORK.map((s) => (<Step key={s.number} s={s} />))}</ol>
      </div>
    </section>
  );
}
