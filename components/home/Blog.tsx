"use client";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { POSTS } from "@/lib/constants";

export default function Blog() {
  const [featured, ...rest] = POSTS;
  return (
    <section id="blogs" className="relative bg-dark py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mb-12 flex flex-col justify-between gap-6 sm:mb-16 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow mb-4">Insights</p>
            <h2 className="display text-[clamp(2.2rem,5.6vw,4.6rem)] text-white">Marketing Insights &amp; Resources</h2>
          </div>
          <Link href="/blogs" className="group inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white">
            View all articles<ArrowUpRight size={16} className="text-purple-secondary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>
        <div className="grid gap-5 lg:grid-cols-[1.35fr_1fr]">
          <Reveal>
            <Link href={featured.href} className="group relative flex min-h-[420px] flex-col justify-end overflow-hidden rounded-[2rem] border border-white/[0.09] p-7 sm:min-h-[520px] sm:p-10">
              <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgb(143_44_244/0.55),transparent_55%),linear-gradient(160deg,var(--navy),var(--dark))] transition-transform duration-1000 group-hover:scale-110" />
              <div aria-hidden="true" className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-white/10" />
              <div aria-hidden="true" className="absolute -right-8 -top-8 h-48 w-48 rounded-full border border-purple-secondary/30" />
              <div className="relative">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-purple-secondary">{featured.category}</span>
                <h3 className="display mt-4 max-w-xl text-[clamp(1.8rem,3.6vw,3rem)] !leading-[1.05] text-white">{featured.title}</h3>
                <p className="mt-4 max-w-md text-[15px] leading-7 text-muted">{featured.description}</p>
                <span className="mt-8 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-navy transition-transform duration-500 group-hover:rotate-45"><ArrowUpRight size={18} aria-hidden="true" /></span>
              </div>
            </Link>
          </Reveal>
          <ul className="flex flex-col gap-5">
            {rest.map((p, i) => (
              <Reveal as="li" key={p.title} delay={0.1 + i * 0.1} className="flex-1">
                <Link href={p.href} className="group flex h-full min-h-[200px] flex-col justify-between rounded-[2rem] border border-white/[0.09] bg-white/[0.02] p-7 transition-colors duration-500 hover:border-purple-secondary/60 hover:bg-purple-secondary/[0.06] sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-purple-secondary">{p.category}</span>
                    <ArrowUpRight size={18} className="text-white/40 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" aria-hidden="true" />
                  </div>
                  <h3 className="mt-8 text-xl font-semibold leading-snug tracking-[-0.03em] text-white sm:text-2xl">{p.title}</h3>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
        <p className="mt-6 text-[11px] text-white/25">Article titles are placeholders — connect to the live blog feed.</p>
      </div>
    </section>
  );
}
