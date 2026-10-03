"use client";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { EASE, NAV_ITEMS } from "@/lib/constants";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [open]);

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:text-navy">Skip to content</a>
      <motion.header initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9, ease: EASE }} className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-10">
        <div className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-2.5 transition-[background,border-color,box-shadow,backdrop-filter] duration-500 sm:px-6 ${scrolled ? "border-white/10 bg-ink/80 shadow-[0_20px_60px_-20px_rgb(0_0_0/0.8)] backdrop-blur-xl" : "border-transparent bg-transparent"}`}>
          <Link href="/" aria-label="ZironPro home" onClick={() => setOpen(false)} className="shrink-0">
            <Image src="/brand/logo-horizontal.svg" alt="ZironPro" width={757} height={221} unoptimized priority className="h-9 w-auto sm:h-11" />
          </Link>
          <nav aria-label="Primary" className="hidden items-center gap-1 rounded-full border border-white/[0.08] bg-white/[0.03] p-1 backdrop-blur-md lg:flex">
            {NAV_ITEMS.map((item) => (
              <Link key={item.label} href={item.href} className="rounded-full px-4 py-2 text-[13px] font-medium text-white/60 transition-colors duration-300 hover:bg-white/[0.07] hover:text-white">{item.label}</Link>
            ))}
          </nav>
          <div className="hidden lg:block">
            <Link href="/#contact" className="group inline-flex items-center gap-2 rounded-full bg-white py-2 pl-5 pr-2 text-[13px] font-semibold text-navy transition-colors duration-300 hover:bg-purple-secondary hover:text-white">
              Book Consultation
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-navy text-white transition-transform duration-500 group-hover:rotate-45"><ArrowUpRight size={14} aria-hidden="true" /></span>
            </Link>
          </div>
          <button type="button" onClick={() => setOpen((v) => !v)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-white lg:hidden">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div id="mobile-menu" role="dialog" aria-modal="true" aria-label="Menu"
            initial={{ clipPath: "circle(0% at calc(100% - 2.5rem) 2.5rem)" }} animate={{ clipPath: "circle(150% at calc(100% - 2.5rem) 2.5rem)" }} exit={{ clipPath: "circle(0% at calc(100% - 2.5rem) 2.5rem)" }}
            transition={{ duration: 0.7, ease: EASE }} className="fixed inset-0 z-40 overflow-y-auto bg-ink px-6 pb-10 pt-28 lg:hidden">
            <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-purple-accent/30 blur-[110px]" />
            <nav aria-label="Mobile" className="relative mx-auto flex max-w-md flex-col">
              {NAV_ITEMS.map((item, i) => (
                <motion.div key={item.label} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 + i * 0.05, ease: EASE }}>
                  <Link href={item.href} onClick={() => setOpen(false)} className="flex items-baseline justify-between border-b border-white/10 py-4 text-[2rem] font-semibold tracking-[-0.04em] text-white active:text-purple-secondary">
                    {item.label}<span className="font-mono text-[10px] tracking-[0.2em] text-white/30">0{i + 1}</span>
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.55, ease: EASE }} className="mt-8">
                <Link href="/#contact" onClick={() => setOpen(false)} className="flex items-center justify-between rounded-full bg-gradient-to-r from-purple-primary to-purple-secondary py-2 pl-7 pr-2 text-base font-semibold text-white">
                  Book Consultation
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15"><ArrowUpRight size={18} aria-hidden="true" /></span>
                </Link>
                <p className="mt-6 text-center font-mono text-[10px] uppercase tracking-[0.25em] text-white/30">Dubai · Abu Dhabi · UAE</p>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
