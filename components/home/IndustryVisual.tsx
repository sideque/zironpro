"use client";
import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "@/lib/constants";

/** Five bespoke, lightweight SVG compositions — one per industry. */
export default function IndustryVisual({ index }: { index: number }) {
  const reduce = useReducedMotion();
  const draw = (delay = 0) => ({ initial: reduce ? false : { pathLength: 0, opacity: 0 }, animate: { pathLength: 1, opacity: 1 }, transition: { duration: 1.4, delay, ease: EASE } });
  const stroke = `url(#iv${index})`;
  const box = { transformBox: "fill-box", transformOrigin: "center" } as const;

  return (
    <svg viewBox="0 0 400 300" className="h-full w-full" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={`iv${index}`} x1="0" y1="1" x2="1" y2="0"><stop offset="0" stopColor="#4D11A8" /><stop offset="0.6" stopColor="#8F2CF4" /><stop offset="1" stopColor="#E9D9FF" /></linearGradient>
        <radialGradient id={`ivg${index}`} cx="50%" cy="50%" r="50%"><stop offset="0" stopColor="#8F2CF4" stopOpacity="0.55" /><stop offset="1" stopColor="#8F2CF4" stopOpacity="0" /></radialGradient>
      </defs>
      <ellipse cx="200" cy="170" rx="190" ry="120" fill={`url(#ivg${index})`} />

      {index === 0 && (
        <g fill="none" stroke={stroke} strokeWidth="1.4" strokeLinecap="round">
          {["M40 230 C110 220 120 120 200 130 S320 90 360 50", "M40 230 C130 250 210 210 250 180 S330 190 370 150", "M200 130 C210 190 150 200 160 260", "M250 180 C280 120 240 80 290 40"].map((d, i) => (<motion.path key={d} d={d} {...draw(i * 0.15)} />))}
          {["M40 230 C110 220 120 120 200 130 S320 90 360 50", "M40 230 C130 250 210 210 250 180 S330 190 370 150"].map((d, i) => (
            <motion.path key={`m${d}`} d={d} stroke="#fff" strokeOpacity="0.7" strokeDasharray="2 14" animate={reduce ? undefined : { strokeDashoffset: [0, -64] }} transition={{ duration: 3 + i, repeat: Infinity, ease: "linear" }} />
          ))}
          {[[40, 230], [200, 130], [250, 180], [360, 50], [370, 150], [160, 260], [290, 40]].map(([x, y], i) => (
            <motion.circle key={i} cx={x} cy={y} r={i === 1 ? 7 : 4.5} fill="#0D1420" initial={reduce ? false : { scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5 + i * 0.08, ease: EASE }} style={box} />
          ))}
        </g>
      )}

      {index === 1 && (
        <g transform="translate(200 160)" fill="none" stroke={stroke} strokeWidth="1.2">
          {Array.from({ length: 8 }, (_, i) => (
            <motion.ellipse key={i} cx="0" cy="-46" rx="26" ry="66" transform={`rotate(${i * 45})`} initial={reduce ? false : { opacity: 0, scale: 0.4 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: i * 0.07, ease: EASE }} />
          ))}
          <motion.circle r="22" fill="#8F2CF4" stroke="none" animate={reduce ? undefined : { scale: [1, 1.18, 1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
          <circle r="7" fill="#fff" stroke="none" />
        </g>
      )}

      {index === 2 && (
        <g fill="none" stroke={stroke} strokeWidth="1.3">
          {[0, 1, 2, 3].map((i) => {
            const w = 150 - i * 32; const x = 200 - w / 2;
            return <motion.path key={i} d={`M${x} 270 V${150 - i * 4} A${w / 2} ${w / 2} 0 0 1 ${x + w} ${150 - i * 4} V270`} {...draw(i * 0.18)} />;
          })}
          <motion.path d="M200 270 V120" stroke="#fff" strokeOpacity="0.35" strokeDasharray="1 7" strokeLinecap="round" {...draw(0.8)} />
          {[[96, 70], [312, 96], [270, 48], [140, 40]].map(([x, y], i) => (
            <motion.path key={i} d={`M${x} ${y - 9} L${x + 2.5} ${y - 2.5} L${x + 9} ${y} L${x + 2.5} ${y + 2.5} L${x} ${y + 9} L${x - 2.5} ${y + 2.5} L${x - 9} ${y} L${x - 2.5} ${y - 2.5}Z`} fill="#fff" stroke="none" animate={reduce ? undefined : { opacity: [0.2, 1, 0.2], scale: [0.8, 1.1, 0.8] }} transition={{ duration: 3, delay: i * 0.6, repeat: Infinity }} style={box} />
          ))}
        </g>
      )}

      {index === 3 && (
        <g>
          {Array.from({ length: 6 }, (_, i) => {
            const h = 36 + i * 30;
            return <motion.rect key={i} x={52 + i * 53} width="38" rx="3" fill={stroke} fillOpacity={0.25 + i * 0.12} stroke={stroke} initial={reduce ? false : { y: 270, height: 0 }} animate={{ y: 270 - h, height: h }} transition={{ duration: 1, delay: i * 0.1, ease: EASE }} />;
          })}
          <motion.path d="M71 222 L124 192 L177 162 L230 132 L283 102 L336 70" fill="none" stroke="#fff" strokeOpacity="0.8" strokeWidth="1.4" strokeDasharray="3 5" {...draw(0.7)} />
          <motion.circle cx="336" cy="70" r="6" fill="#fff" animate={reduce ? undefined : { scale: [1, 1.5, 1] }} transition={{ duration: 2.4, repeat: Infinity }} style={box} />
        </g>
      )}

      {index === 4 && (
        <g>
          {[[40, 150, 46], [92, 90, 52], [150, 40, 60], [216, 110, 50], [272, 70, 44], [322, 130, 40]].map(([x, y, w], i) => (
            <g key={i}>
              <motion.rect x={x} width={w} rx="2" fill={stroke} fillOpacity="0.16" stroke={stroke} strokeWidth="1.2" initial={reduce ? false : { y: 270, height: 0 }} animate={{ y, height: 270 - y }} transition={{ duration: 1.1, delay: i * 0.09, ease: EASE }} />
              {Array.from({ length: Math.floor((270 - y) / 22) }, (_, r) => [0, 1].map((c) => (
                <motion.rect key={`${r}-${c}`} x={x + 9 + c * (w / 2 - 4)} y={y + 12 + r * 22} width="9" height="9" rx="1.5" fill="#fff" initial={reduce ? false : { opacity: 0 }} animate={{ opacity: (r * 3 + c * 5 + i * 7) % 4 === 0 ? 0.9 : 0.18 }} transition={{ delay: 0.9 + ((r + c + i) % 5) * 0.12 }} />
              )))}
            </g>
          ))}
          <line x1="20" y1="270" x2="380" y2="270" stroke="#fff" strokeOpacity="0.25" />
        </g>
      )}
    </svg>
  );
}
