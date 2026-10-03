"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";
import Reveal from "@/components/ui/Reveal";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  const track = useRef<HTMLUListElement>(null);
  const scrollBy = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.85, 560), behavior: "smooth" });
  };
  const arrow = "flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:bg-white/10";

  return (
    <section id="testimonials" className="relative overflow-hidden bg-ink py-28 sm:py-36">
      <div className="pointer-events-none absolute -right-32 top-10 h-[500px] w-[500px] rounded-full bg-purple-accent/20 blur-[150px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow mb-4">Client stories</p>
            <h2 className="display text-[clamp(2.2rem,5.6vw,4.6rem)] text-white">Built on real partnerships.</h2>
            <p className="mt-4 inline-block rounded-full border border-white/15 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-white/50">Placeholder quotes — replace with approved testimonials</p>
          </div>
          <div className="flex gap-2">
            <button type="button" onClick={() => scrollBy(-1)} aria-label="Previous testimonials" className={arrow}><ArrowLeft size={18} aria-hidden="true" /></button>
            <button type="button" onClick={() => scrollBy(1)} aria-label="Next testimonials" className={arrow}><ArrowRight size={18} aria-hidden="true" /></button>
          </div>
        </div>
      </div>
      <Reveal>
        <ul ref={track} tabIndex={0} aria-label="Testimonials" className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 [scrollbar-width:none] sm:px-8 lg:px-[max(2.5rem,calc((100vw-80rem)/2+2.5rem))]">
          {TESTIMONIALS.map((t, i) => (
            <li key={i} className="w-[86vw] max-w-[520px] shrink-0 snap-start">
              <figure className="flex h-full flex-col justify-between rounded-[2rem] border border-white/[0.09] bg-gradient-to-br from-navy/70 to-dark p-7 sm:p-10">
                <span aria-hidden="true" className="text-gradient text-7xl font-bold leading-none">“</span>
                <blockquote className="mt-2 text-[clamp(1.1rem,2vw,1.4rem)] font-medium leading-snug tracking-[-0.02em] text-white">{t.quote}</blockquote>
                <figcaption className="mt-10 flex items-center gap-4 border-t border-white/10 pt-6">
                  <span aria-hidden="true" className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-purple-primary to-purple-secondary font-semibold text-white">{t.name.charAt(0)}</span>
                  <span><span className="block text-sm font-semibold text-white">{t.name}</span><span className="block text-xs text-white/45">{t.role}, {t.company}</span></span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
