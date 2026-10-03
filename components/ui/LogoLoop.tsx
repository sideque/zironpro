'use client';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

export type LogoItem =
  | { node: React.ReactNode; href?: string; title?: string; ariaLabel?: string }
  | { src: string; alt?: string; href?: string; title?: string; srcSet?: string; sizes?: string; width?: number; height?: number };

export interface LogoLoopProps {
  logos: LogoItem[];
  speed?: number;
  direction?: 'left' | 'right' | 'up' | 'down';
  width?: number | string;
  logoHeight?: number;
  gap?: number;
  pauseOnHover?: boolean;
  hoverSpeed?: number;
  fadeOut?: boolean;
  fadeOutColor?: string;
  scaleOnHover?: boolean;
  renderItem?: (item: LogoItem, key: React.Key) => React.ReactNode;
  ariaLabel?: string;
  className?: string;
  style?: React.CSSProperties;
}

const TAU = 0.25; // velocity smoothing (s)
const toLen = (v?: number | string) => (typeof v === 'number' ? `${v}px` : v);

const LogoLoop: React.FC<LogoLoopProps> = ({
  logos, speed = 120, direction = 'left', width = '100%', logoHeight = 28, gap = 32,
  pauseOnHover, hoverSpeed, fadeOut = false, fadeOutColor, scaleOnHover = false,
  renderItem, ariaLabel = 'Partner logos', className = '', style,
}) => {
  const root = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const seq = useRef<HTMLUListElement>(null);
  const [seqSize, setSeqSize] = useState(0);
  const [copies, setCopies] = useState(2);
  const [hover, setHover] = useState(false);

  const vertical = direction === 'up' || direction === 'down';
  const hoverTarget = hoverSpeed !== undefined ? hoverSpeed : pauseOnHover ? 0 : undefined;

  const measure = useCallback(() => {
    const s = seq.current, r = root.current;
    if (!s || !r) return;
    const size = vertical ? s.getBoundingClientRect().height : s.getBoundingClientRect().width;
    const view = vertical ? r.getBoundingClientRect().height || size : r.getBoundingClientRect().width;
    if (size > 0) { setSeqSize(size); setCopies(Math.max(2, Math.ceil(view / size) + 2)); }
  }, [vertical]);

  useEffect(() => {
    measure();
    if (!window.ResizeObserver) { window.addEventListener('resize', measure); return () => window.removeEventListener('resize', measure); }
    const ro = new ResizeObserver(measure);
    if (root.current) ro.observe(root.current);
    if (seq.current) ro.observe(seq.current);
    return () => ro.disconnect();
  }, [measure, logos, gap, logoHeight]);

  useEffect(() => {
    const t = track.current;
    if (!t || seqSize <= 0) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { t.style.transform = 'translate3d(0,0,0)'; return; }
    const sign = direction === 'left' || direction === 'up' ? 1 : -1;
    let offset = 0, vel = 0, last: number | null = null, raf = 0;
    const tick = (ts: number) => {
      if (last === null) last = ts;
      const dt = Math.max(0, ts - last) / 1000; last = ts;
      const target = (hover && hoverTarget !== undefined ? hoverTarget : speed) * sign;
      vel += (target - vel) * (1 - Math.exp(-dt / TAU));
      offset = (((offset + vel * dt) % seqSize) + seqSize) % seqSize;
      t.style.transform = vertical ? `translate3d(0,${-offset}px,0)` : `translate3d(${-offset}px,0,0)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seqSize, speed, direction, vertical, hover, hoverTarget]);

  const items = useMemo(() => logos, [logos]);

  const renderLogo = (item: LogoItem, key: React.Key) => {
    if (renderItem) return <li key={key} className="shrink-0" role="listitem">{renderItem(item, key)}</li>;
    const isNode = 'node' in item;
    const content = isNode ? (
      <span className="inline-flex items-center" aria-hidden={!!(item as { ariaLabel?: string }).ariaLabel}>{(item as { node: React.ReactNode }).node}</span>
    ) : (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={item.src} srcSet={item.srcSet} sizes={item.sizes} width={item.width} height={item.height} alt={item.alt ?? ''} title={item.title} loading="lazy" decoding="async" draggable={false}
        style={{ height: logoHeight, width: 'auto', display: 'block', objectFit: 'contain' }} />
    );
    const label = isNode ? item.ariaLabel || item.title : item.alt || item.title;
    const inner = item.href ? (
      <a href={item.href} aria-label={label} target="_blank" rel="noreferrer noopener" className="inline-flex items-center">{content}</a>
    ) : content;
    return (
      <li key={key} role="listitem" aria-label={isNode && !item.href ? label : undefined}
        className={`shrink-0 ${scaleOnHover ? 'transition-transform duration-300 hover:scale-110' : ''}`}
        style={{ fontSize: logoHeight, lineHeight: 1 }}>{inner}</li>
    );
  };

  const listStyle: React.CSSProperties = { display: 'flex', flexDirection: vertical ? 'column' : 'row', gap, margin: 0, padding: 0, listStyle: 'none', paddingRight: vertical ? 0 : gap, paddingBottom: vertical ? gap : 0, alignItems: 'center' };
  const fade = fadeOutColor ?? '#0D1420';
  const mask = (dir: string) => `linear-gradient(${dir}, ${fade} 0%, transparent 100%)`;

  return (
    <div ref={root} role="region" aria-label={ariaLabel} className={`relative overflow-hidden ${className}`}
      style={{ width: toLen(vertical ? undefined : width), height: vertical ? '100%' : undefined, ...style }}
      onMouseEnter={() => hoverTarget !== undefined && setHover(true)} onMouseLeave={() => setHover(false)}>
      {fadeOut && (<>
        <span aria-hidden="true" className="pointer-events-none absolute z-10" style={vertical ? { inset: '0 0 auto 0', height: '12%', background: mask('to bottom') } : { inset: '0 auto 0 0', width: '12%', background: mask('to right') }} />
        <span aria-hidden="true" className="pointer-events-none absolute z-10" style={vertical ? { inset: 'auto 0 0 0', height: '12%', background: mask('to top') } : { inset: '0 0 0 auto', width: '12%', background: mask('to left') }} />
      </>)}
      <div ref={track} className="flex will-change-transform" style={{ flexDirection: vertical ? 'column' : 'row', width: vertical ? '100%' : 'max-content' }}>
        {Array.from({ length: copies }, (_, c) => (
          <ul key={c} ref={c === 0 ? seq : undefined} role="list" aria-hidden={c > 0} style={listStyle}>
            {items.map((it, i) => renderLogo(it, `${c}-${i}`))}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default LogoLoop;