'use client';
/**
 * DepthText — local implementation (NOT the upstream React Bits source).
 * Extruded 3D text built from stacked layers, with pointer tilt + auto orbit.
 * Requires DepthText.css (same folder).
 */
import { useEffect, useRef } from 'react';
import './DepthText.css';

type Props = {
  text: string;
  layers?: number;
  depth?: number; // px between layers
  tilt?: number; // max degrees
  faceColor?: string;
  depthColor?: string;
  fontSize?: string;
  pointerTracking?: boolean;
  autoOrbit?: boolean;
  orbitSpeed?: number; // radians / second
  shadow?: string;
  className?: string;
};

export default function DepthText({
  text, layers = 32, depth = 2.4, tilt = 8, faceColor = '#fff', depthColor = '#8F2CF4', fontSize = 'clamp(3rem, 12vw, 9rem)',
  pointerTracking = true, autoOrbit = true, orbitSpeed = 0.25, shadow = 'rgb(143 44 244 / 0.45)', className = '',
}: Props) {
  const wrap = useRef<HTMLSpanElement>(null);
  const stage = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const st = stage.current, w = wrap.current;
    if (!st || !w) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let raf = 0, last = 0, angle = 0, visible = true;
    const cur = { rx: 0, ry: 0 };
    const tgt = { rx: 0, ry: 0 };
    let pointerActive = false, idle: ReturnType<typeof setTimeout>;

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return;
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      tgt.ry = nx * tilt;
      tgt.rx = -ny * tilt * 0.6;
      pointerActive = true;
      clearTimeout(idle);
      idle = setTimeout(() => (pointerActive = false), 2500);
    };
    if (pointerTracking) window.addEventListener('pointermove', onMove, { passive: true });

    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting), { threshold: 0 });
    io.observe(w);

    const tick = (ts: number) => {
      raf = requestAnimationFrame(tick);
      if (!visible) { last = ts; return; }
      const dt = Math.min(0.05, (ts - (last || ts)) / 1000); last = ts;
      if (!pointerActive && autoOrbit) {
        angle += orbitSpeed * dt;
        tgt.ry = Math.sin(angle) * tilt;
        tgt.rx = Math.cos(angle * 0.8) * tilt * 0.35;
      } else if (!pointerActive) { tgt.rx = 0; tgt.ry = 0; }
      const k = 1 - Math.exp(-dt * 6);
      cur.rx += (tgt.rx - cur.rx) * k;
      cur.ry += (tgt.ry - cur.ry) * k;
      st.style.transform = `rotateX(${cur.rx.toFixed(3)}deg) rotateY(${cur.ry.toFixed(3)}deg)`;
    };
    raf = requestAnimationFrame(tick);

    return () => { cancelAnimationFrame(raf); clearTimeout(idle); io.disconnect(); window.removeEventListener('pointermove', onMove); };
  }, [tilt, pointerTracking, autoOrbit, orbitSpeed]);

  const n = Math.max(1, Math.round(layers));
  return (
    <span ref={wrap} className={`depth-text ${className}`} style={{ fontSize }}>
      <span ref={stage} className="depth-text__stage">
        {Array.from({ length: n }, (_, i) => {
          const z = -(n - i) * depth; // deepest first
          const dark = Math.round(((n - i) / n) * 55);
          return (
            <span
              key={i}
              aria-hidden="true"
              className="depth-text__layer"
              style={{
                transform: `translateZ(${z}px)`,
                color: `color-mix(in srgb, ${depthColor}, #000 ${dark}%)`,
                textShadow: i === 0 ? `0 30px 60px ${shadow}` : undefined,
              }}
            >
              {text}
            </span>
          );
        })}
        <span className="depth-text__face" style={{ color: faceColor, transform: 'translateZ(0)' }}>{text}</span>
      </span>
    </span>
  );
}