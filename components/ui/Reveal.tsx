"use client";
import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "@/lib/constants";

type Props = { children: React.ReactNode; delay?: number; y?: number; className?: string; as?: "div" | "li" | "article" | "p" | "span"; amount?: number };

export default function Reveal({ children, delay = 0, y = 28, className, as = "div", amount = 0.2 }: Props) {
  const reduce = useReducedMotion();
  const M = motion[as];
  return (
    <M className={className} initial={reduce ? false : { opacity: 0, y, filter: "blur(6px)" }} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, amount }} transition={{ duration: 0.9, delay, ease: EASE }}>
      {children}
    </M>
  );
}
