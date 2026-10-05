"use client";

import {
  useEffect,
  useMemo,
  useRef,
  type ReactNode,
  type RefObject,
} from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./ScrollReveal.css";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement | null>;
  enableBlur?: boolean;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  containerClassName?: string;
  textClassName?: string;
  rotationEnd?: string;
  wordAnimationEnd?: string;
}

export default function ScrollReveal({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = "",
  textClassName = "",
  rotationEnd = "bottom bottom",
  wordAnimationEnd = "bottom bottom",
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const splitText = useMemo(() => {
    if (typeof children !== "string") {
      return children;
    }

    return children.split(/(\s+)/).map((word, index) => {
      if (/^\s+$/.test(word)) {
        return word;
      }

      return (
        <span className="scroll-reveal-word" key={`${word}-${index}`}>
          {word}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    const element = containerRef.current;

    if (!element) return;

    const scroller =
      scrollContainerRef?.current ?? window;

    const ctx = gsap.context(() => {
      // -----------------------------------------
      // Container rotation
      // -----------------------------------------

      gsap.fromTo(
        element,
        {
          transformOrigin: "0% 50%",
          rotate: baseRotation,
        },
        {
          rotate: 0,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            scroller,
            start: "top bottom",
            end: rotationEnd,
            scrub: true,
          },
        }
      );

      // -----------------------------------------
      // Word opacity
      // -----------------------------------------

      const words = element.querySelectorAll(
        ".scroll-reveal-word"
      );

      if (!words.length) return;

      gsap.fromTo(
        words,
        {
          opacity: baseOpacity,
          willChange: "opacity, filter",
        },
        {
          opacity: 1,
          ease: "none",
          stagger: 0.05,
          scrollTrigger: {
            trigger: element,
            scroller,
            start: "top bottom-=20%",
            end: wordAnimationEnd,
            scrub: true,
          },
        }
      );

      // -----------------------------------------
      // Blur
      // -----------------------------------------

      if (enableBlur) {
        gsap.fromTo(
          words,
          {
            filter: `blur(${blurStrength}px)`,
          },
          {
            filter: "blur(0px)",
            ease: "none",
            stagger: 0.05,
            scrollTrigger: {
              trigger: element,
              scroller,
              start: "top bottom-=20%",
              end: wordAnimationEnd,
              scrub: true,
            },
          }
        );
      }
    }, element);

    return () => {
      ctx.revert();
    };
  }, [
    scrollContainerRef,
    enableBlur,
    baseOpacity,
    baseRotation,
    blurStrength,
    rotationEnd,
    wordAnimationEnd,
    children,
  ]);

  return (
    <div
      ref={containerRef}
      className={`scroll-reveal ${containerClassName}`}
    >
      <div className={`scroll-reveal-text ${textClassName}`}>
        {splitText}
      </div>
    </div>
  );
}