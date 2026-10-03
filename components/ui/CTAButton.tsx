"use client";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

type Props = { href: string; children: React.ReactNode; variant?: "primary" | "ghost" | "light"; className?: string; magnetic?: boolean };

const base = "group relative inline-flex w-fit items-center gap-3 rounded-full text-sm font-semibold tracking-tight transition-[background,border-color,box-shadow,color] duration-500 will-change-transform";
const styles = {
  primary: "bg-gradient-to-r from-purple-primary via-purple-accent to-purple-secondary py-2 pl-6 pr-2 text-white shadow-[0_10px_40px_-10px_rgb(143_44_244/0.7)] hover:shadow-[0_14px_50px_-8px_rgb(143_44_244/0.9)]",
  ghost: "border border-white/15 py-3.5 pl-6 pr-6 text-white/75 hover:border-white/35 hover:bg-white/[0.05] hover:text-white",
  light: "bg-white py-2 pl-6 pr-2 text-navy hover:bg-white/90 shadow-[0_10px_50px_-12px_rgb(255_255_255/0.5)]",
};

export default function CTAButton({ href, children, variant = "primary", className = "", magnetic = true }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 18, mass: 0.4 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 18, mass: 0.4 });
  const onMove = (e: React.PointerEvent) => {
    if (!magnetic || e.pointerType !== "mouse" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.18);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.28);
  };
  const reset = () => { x.set(0); y.set(0); };
  return (
    <motion.div ref={ref} style={{ x, y }} onPointerMove={onMove} onPointerLeave={reset} className="w-fit">
      <Link href={href} className={`${base} ${styles[variant]} ${className}`}>
        <span>{children}</span>
        {variant !== "ghost" && (
          <span className={`flex h-10 w-10 items-center justify-center rounded-full transition-transform duration-500 group-hover:rotate-45 ${variant === "light" ? "bg-purple-primary text-white" : "bg-white/15"}`}>
            <ArrowUpRight size={17} aria-hidden="true" />
          </span>
        )}
      </Link>
    </motion.div>
  );
}
