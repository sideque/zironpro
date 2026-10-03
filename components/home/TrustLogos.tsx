"use client";
import LogoLoop, { type LogoItem } from "@/components/ui/LogoLoop";
import Reveal from "@/components/ui/Reveal";

/**
 * PLACEHOLDER marks — real client logo files weren't supplied.
 * Replace each `node` with `{ src: "/clients/xyz.svg", alt: "Xyz" }`.
 * "Maxline" is the only client named in the source (case study), shown as a text wordmark.
 */
const Mark = ({ label, real = false }: { label: string; real?: boolean }) => (
  <span className="flex items-center gap-3 whitespace-nowrap font-mono text-[13px] uppercase tracking-[0.2em] text-white/35 transition-colors duration-300 hover:text-white/85">
    <span aria-hidden="true" className={`h-5 w-5 rounded-md border ${real ? "border-purple-secondary/70 bg-purple-secondary/20" : "border-white/20"}`} />
    {label}
  </span>
);

const logos: LogoItem[] = [
  { node: <Mark label="Maxline" real />, ariaLabel: "Maxline" },
  ...Array.from({ length: 7 }, (_, i) => ({ node: <Mark label={`Client logo ${String(i + 2).padStart(2, "0")}`} />, ariaLabel: `Client logo placeholder ${i + 2}` })),
];

export default function TrustLogos() {
  return (
    <section id="trust" aria-label="Clients" className="relative border-y border-white/[0.07] bg-dark py-12 sm:py-16">
      <Reveal className="mx-auto mb-8 flex max-w-7xl items-center gap-5 px-5 sm:px-8 lg:px-10">
        <span className="eyebrow shrink-0">Trusted by brands across the UAE</span>
        <span className="hairline flex-1" />
      </Reveal>
      <LogoLoop logos={logos} speed={55} gap={72} logoHeight={28} pauseOnHover fadeOut fadeOutColor="#0D1420" ariaLabel="Client logos" />
      <p className="mx-auto mt-6 max-w-7xl px-5 text-[11px] text-white/25 sm:px-8 lg:px-10">Logo marks are placeholders — swap in approved client assets.</p>
    </section>
  );
}
