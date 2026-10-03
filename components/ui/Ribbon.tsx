"use client";
import { motion, useReducedMotion } from "framer-motion";
import { useId } from "react";

/** Abstract purple-glass ribbon: pure SVG, no canvas, no images. */
const [x0, y0, x1, y1, x2, y2, x3, y3] = [70, 690, 40, 330, 330, 470, 410, 90];
const f = (n: number) => n.toFixed(1);
type Props = { strands?: number; className?: string; float?: boolean; flip?: boolean };

export default function Ribbon({ strands = 18, className = "", float = true, flip = false }: Props) {
  const uid = useId().replace(/:/g, "");
  const reduce = useReducedMotion();
  const paths = Array.from({ length: strands }, (_, i) => {
    const t = i - (strands - 1) / 2;
    const d = `M ${f(x0 + t * 3.2)} ${f(y0 + t * 0.4)} C ${f(x1 + t * 9)} ${f(y1 - t * 2.5)}, ${f(x2 - t * 7)} ${f(y2 + t * 5)}, ${f(x3 + t * 4.5)} ${f(y3 + t * 1.2)}`;
    const k = Math.abs(t) / (strands / 2);
    return { d, w: 7.5 - k * 5.2, o: 0.95 - k * 0.55, g: i % 3 };
  });
  const mid = paths[Math.floor(strands / 2)].d;
  return (
    <motion.svg viewBox="0 0 600 700" aria-hidden="true" focusable="false" className={className} style={flip ? { transform: "scaleX(-1)" } : undefined}
      animate={float && !reduce ? { y: [0, -16, 0], rotate: [-1.2, 1.2, -1.2] } : undefined} transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}>
      <defs>
        <linearGradient id={`${uid}a`} x1="0" y1="1" x2="1" y2="0"><stop offset="0" stopColor="#2a3bff" /><stop offset="0.45" stopColor="#8f2cf4" /><stop offset="1" stopColor="#ff9be8" /></linearGradient>
        <linearGradient id={`${uid}b`} x1="0" y1="1" x2="1" y2="0"><stop offset="0" stopColor="#170349" /><stop offset="0.5" stopColor="#6620ee" /><stop offset="1" stopColor="#7fd1ff" /></linearGradient>
        <linearGradient id={`${uid}c`} x1="0" y1="1" x2="1" y2="0"><stop offset="0" stopColor="#4d11a8" /><stop offset="0.55" stopColor="#c89bff" /><stop offset="1" stopColor="#ffffff" /></linearGradient>
        <filter id={`${uid}glow`} x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="22" /></filter>
        <filter id={`${uid}soft`} x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="0.6" /></filter>
      </defs>
      <path d={mid} fill="none" stroke="#6620ee" strokeOpacity="0.55" strokeWidth="90" strokeLinecap="round" filter={`url(#${uid}glow)`} />
      <path d={mid} fill="none" stroke="#0b0420" strokeOpacity="0.85" strokeWidth="46" strokeLinecap="round" />
      <g filter={`url(#${uid}soft)`} style={{ mixBlendMode: "screen" }}>
        {paths.map((p, i) => (<path key={i} d={p.d} fill="none" stroke={`url(#${uid}${["a", "b", "c"][p.g]})`} strokeOpacity={p.o} strokeWidth={p.w} strokeLinecap="round" />))}
        {paths.filter((_, i) => i % 5 === 2).map((p, i) => (<path key={`h${i}`} d={p.d} fill="none" stroke="#fff" strokeOpacity="0.75" strokeWidth="0.9" />))}
      </g>
    </motion.svg>
  );
}
