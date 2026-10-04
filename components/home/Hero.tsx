"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";

import BlurText from "@/components/ui/Blurtext";
import CTAButton from "@/components/ui/CTAButton";
import DepthText from "@/components/ui/DepthText";
import Ribbon from "@/components/ui/Ribbon";
import TextType from "@/components/ui/Texttype";
import { EASE } from "@/lib/constants";
import { useMedia } from "@/lib/hooks";

const TAGLINES = [
  "Strategy that converts.",
  "Marketing that performs.",
  "Growth that compounds.",
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  const reduce = useReducedMotion();
  const small = useMedia("(max-width: 767px)");
  const finePointer = useMedia("(hover: hover) and (pointer: fine)");

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const ribbonY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, -35]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const sx = useSpring(mx, {
    stiffness: 60,
    damping: 20,
  });

  const sy = useSpring(my, {
    stiffness: 60,
    damping: 20,
  });

  const onMove = (e: React.PointerEvent) => {
    if (!finePointer || reduce || !ref.current) return;

    const r = ref.current.getBoundingClientRect();

    mx.set(e.clientX - r.left - 300);
    my.set(e.clientY - r.top - 300);
  };

  const enter = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.8,
      delay,
      ease: EASE,
    },
  });

  return (
    <section
      ref={ref}
      onPointerMove={onMove}
      className="grain relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ink"
      aria-label="Introduction"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="
            absolute
            left-1/2
            top-[-45vw]
            h-[75vw]
            w-[125vw]
            -translate-x-1/2
            rounded-[50%]
            md:top-[-40vw]
          "
          style={{
            background:
              "radial-gradient(ellipse at 50% 100%, rgb(143 44 244 / 0.48), rgb(102 32 238 / 0.18) 38%, transparent 68%)",
            boxShadow:
              "inset 0 -2px 70px -20px rgb(176 120 255 / 0.55)",
            borderBottom: "1px solid rgb(190 140 255 / 0.35)",
          }}
        />

        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-dark via-transparent to-transparent" />

        <div className="bg-grid absolute inset-0 opacity-40" />

        <motion.div
          style={{ x: sx, y: sy }}
          className="
            absolute
            left-0
            top-0
            hidden
            h-[500px]
            w-[500px]
            rounded-full
            bg-[radial-gradient(circle,rgb(143_44_244/0.16),transparent_62%)]
            md:block
          "
        />
      </div>

      {/* RIBBON */}
      <motion.div
        style={{
          y: reduce ? 0 : ribbonY,
        }}
        className="
          pointer-events-none
          absolute
          -right-[28%]
          top-[11%]
          -z-[5]
          w-[82vw]
          max-w-[650px]
          opacity-45

          sm:-right-[15%]
          sm:w-[65vw]
          sm:opacity-65

          lg:right-[-3%]
          lg:top-[5%]
          lg:w-[48vw]
          lg:max-w-[700px]
          lg:opacity-90
        "
      >
        <motion.div
          initial={
            reduce
              ? false
              : {
                  opacity: 0,
                  scale: 0.9,
                  rotate: -6,
                }
          }
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 0,
          }}
          transition={{
            duration: 1.5,
            delay: 0.2,
            ease: EASE,
          }}
        >
          <Ribbon
            strands={small ? 9 : 16}
            className="h-auto w-full"
          />
        </motion.div>
      </motion.div>

      {/* MAIN CONTENT */}
      <motion.div
        style={{
          y: reduce ? 0 : copyY,
          opacity: reduce ? 1 : fade,
        }}
        className="
          relative
          mx-auto
          flex
          w-full
          max-w-7xl
          flex-1
          flex-col
          justify-center

          px-5
          pb-20
          pt-24

          sm:px-8
          sm:pb-20
          sm:pt-28

          lg:px-10
          lg:pb-16
          lg:pt-24
        "
      >
        {/* EYEBROW */}
        <motion.p
          {...enter(0.15)}
          className="
            eyebrow
            mb-4
            flex
            items-center
            gap-2
            text-[10px]

            sm:mb-5
            sm:text-xs
          "
        >
          <span className="h-px w-6 bg-purple-secondary sm:w-8" />

          Digital Marketing Agency · Dubai · UAE
        </motion.p>

        {/* HEADING */}
        <h1 className="relative z-10 max-w-4xl">
          {/* ZIRONPRO */}
          <motion.span
            initial={
              reduce
                ? false
                : {
                    opacity: 0,
                    scale: 0.96,
                    filter: "blur(10px)",
                  }
            }
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 1.1,
              delay: 0.25,
              ease: EASE,
            }}
            className="block origin-left"
          >
            <DepthText
              text="ZironPro"
              layers={small ? 10 : 24}
              depth={small ? 1.2 : 1.8}
              tilt={small ? 4 : 6}
              faceColor="#f6f2ff"
              depthColor="#8F2CF4"
              fontSize="clamp(3rem, 10vw, 8rem)"
              pointerTracking={!small}
              orbitSpeed={0.18}
              shadow
            />
          </motion.span>

          {/* MAIN TITLE */}
          <motion.span
            {...enter(0.55)}
            className="
              mt-3
              block
              max-w-3xl
              text-[clamp(1.35rem,3.4vw,2.8rem)]
              font-semibold
              leading-[1.05]
              tracking-[-0.04em]
              text-white

              sm:mt-4
            "
          >
            The Best Marketing Agency in Dubai

            <span className="mt-1 block text-white/40">
              &amp; Trusted Marketing Agency UAE-Wide
            </span>
          </motion.span>
        </h1>

        {/* DESCRIPTION */}
        <div className="mt-5 max-w-lg sm:mt-6">
          <BlurText
            text="We turn your brand into a revenue machine — helping businesses across Dubai, Abu Dhabi, and the wider UAE attract the right audience, convert leads into customers, and build lasting brand authority."
            delay={35}
            direction="bottom"
            animateBy="words"
            easing={EASE as unknown as [number, number, number, number]}
            className="
              text-[13px]
              leading-6
              text-muted

              sm:text-[15px]
              sm:leading-7
            "
          />
        </div>

        {/* TAGLINE */}
        <motion.div
          {...enter(1.1)}
          className="
            mt-4
            flex
            min-h-6
            items-center
            gap-2
            font-mono
            text-xs
            text-purple-secondary

            sm:mt-5
            sm:text-sm
          "
        >
          <span
            aria-hidden="true"
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-purple-secondary
              shadow-[0_0_12px_var(--purple-secondary)]
            "
          />

          {reduce ? (
            <span>{TAGLINES[0]}</span>
          ) : (
            <TextType
              text={TAGLINES}
              typingSpeed={50}
              deletingSpeed={25}
              pauseDuration={2000}
              initialDelay={1200}
              cursorCharacter="_"
              className="text-white/80"
              cursorClassName="text-purple-secondary"
            />
          )}
        </motion.div>

        {/* BUTTONS */}
        <motion.div
          {...enter(1.3)}
          className="
            mt-6
            flex
            flex-col
            items-start
            gap-3

            sm:mt-7
            sm:flex-row
            sm:items-center
          "
        >
          <CTAButton href="/#contact">
            Book Consultation
          </CTAButton>

          <CTAButton
            href="/#case-studies"
            variant="ghost"
            magnetic={false}
          >
            Explore Our Work
          </CTAButton>
        </motion.div>
      </motion.div>

      {/* BOTTOM INFO */}
      <motion.div
        {...enter(1.8)}
        className="
          absolute
          inset-x-0
          bottom-5
          mx-auto
          hidden
          w-full
          max-w-7xl
          items-center
          justify-between
          px-10
          font-mono
          text-[9px]
          uppercase
          tracking-[0.2em]
          text-white/30

          md:flex
        "
      >
        <span>Dubai · Abu Dhabi · UAE-wide</span>

        <a
          href="#trust"
          className="
            group
            flex
            items-center
            gap-2
            transition-colors
            hover:text-white
          "
        >
          Scroll

          <ArrowDown
            size={12}
            className="transition-transform group-hover:translate-y-1"
            aria-hidden="true"
          />
        </a>
      </motion.div>
    </section>
  );
}