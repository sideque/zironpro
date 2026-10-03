"use client";
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";
import BlurText from "@/components/ui/Blurtext";
import CTAButton from "@/components/ui/CTAButton";
import DepthText from "@/components/ui/DepthText";
import Ribbon from "@/components/ui/Ribbon";
import TextType from "@/components/ui/Texttype";
import { EASE } from "@/lib/constants";
import { useMedia } from "@/lib/hooks";

const TAGLINES = ["Strategy that converts.", "Marketing that performs.", "Growth that compounds."];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const small = useMedia("(max-width: 767px)");
  const finePointer = useMedia("(hover: hover) and (pointer: fine)");

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const ribbonY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const onMove = (e: React.PointerEvent) => {
    if (!finePointer || reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set(e.clientX - r.left - 300);
    my.set(e.clientY - r.top - 300);
  };

  const enter = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1, delay, ease: EASE },
  });

  return (
    <section ref={ref} onPointerMove={onMove} className="grain relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ink" aria-label="Introduction">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-62vw] h-[96vw] w-[150vw] -translate-x-1/2 rounded-[50%] md:top-[-48vw]"
          style={{ background: "radial-gradient(ellipse at 50% 100%, rgb(143 44 244 / 0.55), rgb(102 32 238 / 0.22) 38%, transparent 68%)", boxShadow: "inset 0 -2px 90px -20px rgb(176 120 255 / 0.65)", borderBottom: "1px solid rgb(190 140 255 / 0.5)" }} />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-dark via-transparent to-transparent" />
        <div className="bg-grid absolute inset-0 opacity-60" />
        <motion.div style={{ x: sx, y: sy }} className="absolute left-0 top-0 hidden h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgb(143_44_244/0.20),transparent_62%)] md:block" />
      </div>

      <motion.div style={{ y: reduce ? 0 : ribbonY }} className="pointer-events-none absolute -right-[22%] top-[10%] -z-[5] w-[110vw] max-w-[820px] opacity-60 sm:-right-[8%] sm:w-[70vw] sm:opacity-80 lg:right-[-4%] lg:top-[4%] lg:w-[54vw] lg:opacity-100">
        <motion.div initial={reduce ? false : { opacity: 0, scale: 0.88, rotate: -6 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1.8, delay: 0.2, ease: EASE }}>
          <Ribbon strands={small ? 11 : 20} className="h-auto w-full" />
        </motion.div>
      </motion.div>

      <motion.div style={{ y: reduce ? 0 : copyY, opacity: reduce ? 1 : fade }} className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 pb-24 pt-32 sm:px-8 lg:px-10">
        <motion.p {...enter(0.2)} className="eyebrow mb-6 flex items-center gap-3 sm:mb-8">
          <span className="h-px w-8 bg-purple-secondary" />Digital Marketing Agency · Dubai · UAE
        </motion.p>

        <h1 className="max-w-full">
          <motion.span initial={reduce ? false : { opacity: 0, scale: 0.94, filter: "blur(12px)" }} animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }} transition={{ duration: 1.3, delay: 0.3, ease: EASE }} className="block origin-left">
            <DepthText text="ZironPro" layers={small ? 14 : 36} depth={small ? 1.6 : 2.4} tilt={small ? 5 : 7.5} faceColor="#f6f2ff" depthColor="#8F2CF4" fontSize="clamp(3.4rem, 17.5vw, 12.5rem)" pointerTracking={!small} orbitSpeed={0.22} />
          </motion.span>
          <motion.span {...enter(0.7)} className="mt-5 block max-w-4xl text-[clamp(1.6rem,4.6vw,3.6rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:mt-7">
            The Best Marketing Agency in Dubai
            <span className="mt-1 block text-white/40">&amp; Trusted Marketing Agency UAE-Wide</span>
          </motion.span>
        </h1>

        <div className="mt-8 max-w-xl sm:mt-10">
          <BlurText text="We turn your brand into a revenue machine — helping businesses across Dubai, Abu Dhabi, and the wider UAE attract the right audience, convert leads into customers, and build lasting brand authority."
            delay={45} direction="bottom" animateBy="words" easing={EASE as unknown as [number, number, number, number]} className="text-[15px] leading-7 text-muted sm:text-lg sm:leading-8" />
        </div>

        <motion.div {...enter(1.5)} className="mt-6 flex min-h-8 items-center gap-3 font-mono text-sm text-purple-secondary sm:text-base">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-purple-secondary shadow-[0_0_14px_var(--purple-secondary)]" />
          {reduce ? <span>{TAGLINES[0]}</span> : (
            <TextType text={TAGLINES} typingSpeed={55} deletingSpeed={28} pauseDuration={2200} initialDelay={1700} cursorCharacter="_" className="text-white/85" cursorClassName="text-purple-secondary" />
          )}
        </motion.div>

        <motion.div {...enter(1.7)} className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <CTAButton href="/#contact">Book Consultation Today</CTAButton>
          <CTAButton href="/#case-studies" variant="ghost" magnetic={false}>Explore Our Work</CTAButton>
        </motion.div>
      </motion.div>

      <motion.div {...enter(2.2)} className="absolute inset-x-0 bottom-6 mx-auto hidden w-full max-w-7xl items-center justify-between px-10 font-mono text-[10px] uppercase tracking-[0.25em] text-white/35 md:flex">
        <span>Dubai · Abu Dhabi · UAE-wide</span>
        <a href="#trust" className="group flex items-center gap-2 transition-colors hover:text-white">Scroll<ArrowDown size={13} className="transition-transform group-hover:translate-y-1" aria-hidden="true" /></a>
      </motion.div>
    </section>
  );
}
