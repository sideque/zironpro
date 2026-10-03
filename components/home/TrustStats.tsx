"use client";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/ui/Reveal";
import { STATS } from "@/lib/constants";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const [n, setN] = useState(reduce ? value : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, value, { duration: 1.8, ease: [0.22, 1, 0.36, 1], onUpdate: (v) => setN(Math.round(v)) });
    return () => controls.stop();
  }, [inView, reduce, value]);

  return (
    <span ref={ref} aria-label={`${value}${suffix}`}>
      <span aria-hidden="true">{n}<span className="text-purple-secondary">{suffix}</span></span>
    </span>
  );
}

export default function TrustStats() {
  return (
    <section aria-label="ZironPro in numbers" className="relative bg-dark pb-28 sm:pb-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal className="mb-12 flex items-center gap-5"><span className="eyebrow">Proof, in numbers</span><span className="hairline flex-1" /></Reveal>
        <dl className="grid grid-cols-2 border-l border-t border-white/[0.09] lg:grid-cols-5">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.07}
              className={`group flex flex-col-reverse justify-end gap-5 border-b border-r border-white/[0.09] p-6 transition-colors duration-700 hover:bg-[radial-gradient(circle_at_50%_110%,rgb(143_44_244/0.28),transparent_65%)] sm:p-8 ${i === 4 ? "col-span-2 lg:col-span-1" : ""}`}>
              <dt className="max-w-[18ch] text-[13px] leading-5 text-muted">{s.label}</dt>
              <dd className="text-[clamp(2.8rem,5.2vw,4.6rem)] font-semibold leading-none tracking-[-0.06em] text-white"><Counter value={s.value} suffix={s.suffix} /></dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
