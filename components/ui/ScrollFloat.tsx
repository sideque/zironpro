'use client';
/**
 * React Bits ScrollFloat (TS + Tailwind). Local hardening, API unchanged:
 *  - chars grouped per word (no mid-word breaks on mobile)
 *  - gsap.context cleanup (StrictMode safe)
 *  - skipped under prefers-reduced-motion
 */
import React, { useEffect, useMemo, useRef, type ReactNode, type RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollFloatProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement>;
  containerClassName?: string;
  textClassName?: string;
  animationDuration?: number;
  ease?: string;
  scrollStart?: string;
  scrollEnd?: string;
  stagger?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p';
}

const ScrollFloat: React.FC<ScrollFloatProps> = ({
  children, scrollContainerRef, containerClassName = '', textClassName = '', animationDuration = 1,
  ease = 'back.inOut(2)', scrollStart = 'center bottom+=50%', scrollEnd = 'bottom bottom-=40%', stagger = 0.03, as: Tag = 'h2'
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    const words = text.split(' ');
    return words.map((word, wi) => (
      <React.Fragment key={wi}>
        <span className="inline-block whitespace-nowrap">
          {word.split('').map((char, ci) => (<span className="inline-block sf-char" key={ci}>{char}</span>))}
        </span>
        {wi < words.length - 1 ? ' ' : null}
      </React.Fragment>
    ));
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;
    const ctx = gsap.context(() => {
      gsap.fromTo(el.querySelectorAll('.sf-char'),
        { willChange: 'opacity, transform', opacity: 0, yPercent: 120, scaleY: 2.3, scaleX: 0.7, transformOrigin: '50% 0%' },
        { duration: animationDuration, ease, opacity: 1, yPercent: 0, scaleY: 1, scaleX: 1, stagger,
          scrollTrigger: { trigger: el, scroller, start: scrollStart, end: scrollEnd, scrub: true } });
    }, el);
    return () => ctx.revert();
  }, [scrollContainerRef, animationDuration, ease, scrollStart, scrollEnd, stagger]);

  return (
    <Tag ref={containerRef as React.RefObject<never>} className={`my-5 overflow-hidden ${containerClassName}`}>
      <span className={`inline-block text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] ${textClassName}`}>{splitText}</span>
    </Tag>
  );
};

export default ScrollFloat;
