'use client';
/**
 * BlurText — local implementation (NOT the upstream React Bits source).
 * Word/letter blur-to-sharp reveal with stagger. Needs: framer-motion.
 * Renders a <span>, so it is safe inside <h1>/<h2>/<p>.
 */
import { motion, useInView, useReducedMotion, type Easing, type TargetAndTransition } from 'framer-motion';
import { useRef } from 'react';

type Props = {
  text?: string;
  delay?: number; // ms between each word/letter
  className?: string;
  animateBy?: 'words' | 'letters';
  direction?: 'top' | 'bottom';
  threshold?: number;
  rootMargin?: string;
  animationFrom?: TargetAndTransition;
  animationTo?: TargetAndTransition[];
  easing?: Easing | [number, number, number, number];
  stepDuration?: number; // seconds
  onAnimationComplete?: () => void;
};

export default function BlurText({
  text = '', delay = 200, className = '', animateBy = 'words', direction = 'top', threshold = 0.1, rootMargin = '0px',
  animationFrom, animationTo, easing = [0.22, 1, 0.36, 1], stepDuration = 0.6, onAnimationComplete,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: threshold, margin: rootMargin as never });
  const reduce = useReducedMotion();

  const parts = animateBy === 'words' ? text.split(' ') : text.split('');
  const from = animationFrom ?? { filter: 'blur(10px)', opacity: 0, y: direction === 'top' ? -24 : 24 };
  const to = animationTo ?? [
    { filter: 'blur(4px)', opacity: 0.5, y: direction === 'top' ? 4 : -4 },
    { filter: 'blur(0px)', opacity: 1, y: 0 },
  ];

  if (reduce) return <span className={className}>{text}</span>;

  const last = parts.length - 1;
  return (
    <span ref={ref} className={className} style={{ display: 'inline-flex', flexWrap: 'wrap' }} aria-label={text}>
      {parts.map((seg, i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          initial={from}
          animate={inView ? to : from}
          transition={{ duration: stepDuration * to.length, times: to.map((_, k) => (k + 1) / to.length), delay: (i * delay) / 1000, ease: easing }}
          onAnimationComplete={i === last ? onAnimationComplete : undefined}
          style={{ display: 'inline-block', willChange: 'transform, filter, opacity' }}
        >
          {seg === ' ' ? '\u00A0' : seg}
          {animateBy === 'words' && i < last && '\u00A0'}
        </motion.span>
      ))}
    </span>
  );
}