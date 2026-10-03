"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "About", href: "#about" },
  { label: "Blogs", href: "#blogs" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease }}
        className={`fixed inset-x-0 top-0 z-50 px-4 py-4 transition-all duration-500 sm:px-6 lg:px-8 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 transition-all duration-500 sm:px-5 ${
            scrolled
              ? "border-white/10 bg-[#0D1420]/90 shadow-2xl shadow-black/20 backdrop-blur-xl"
              : "border-white/10 bg-[#0D1420]/60 backdrop-blur-md"
          }`}
        >
          {/* Logo */}
          <a
            href="/"
            onClick={closeMenu}
            className="group flex items-center gap-2"
            aria-label="ZironPro Home"
          >
            <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-[#8F2CF4] via-[#6620EE] to-[#4D11A8]">
              <div className="absolute inset-[1px] rounded-[10px] bg-[#0D1420]" />

              <span className="relative text-sm font-extrabold tracking-tight text-white">
                Z
              </span>
            </div>

            <span className="text-lg font-bold tracking-[-0.04em] text-white sm:text-xl">
              Ziron<span className="text-[#8F2CF4]">Pro</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.15 + index * 0.06,
                  ease,
                }}
                className="group relative text-[13px] font-medium text-white/65 transition-colors duration-300 hover:text-white"
              >
                {item.label}

                <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#8F2CF4] transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[#4D11A8] px-5 py-2.5 text-[13px] font-semibold text-white transition-all duration-300 hover:bg-[#6620EE] hover:shadow-lg hover:shadow-[#4D11A8]/30"
            >
              Book a Consultation
              <ArrowUpRight
                size={15}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition-colors hover:bg-white/[0.08] lg:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#0D1420]/95 px-5 pt-28 backdrop-blur-2xl lg:hidden"
          >
            <motion.div
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 15, opacity: 0 }}
              transition={{ duration: 0.4, ease }}
              className="mx-auto max-w-md"
            >
              <nav className="flex flex-col">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={closeMenu}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.06,
                      ease,
                    }}
                    className="border-b border-white/[0.08] py-5 text-2xl font-semibold tracking-tight text-white transition-colors hover:text-[#8F2CF4]"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>

              <motion.a
                href="#contact"
                onClick={closeMenu}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: 0.4,
                  ease,
                }}
                className="group mt-8 flex w-full items-center justify-between rounded-full bg-gradient-to-r from-[#4D11A8] to-[#6620EE] px-6 py-4 font-semibold text-white shadow-xl shadow-[#4D11A8]/20"
              >
                Book a Consultation

                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                  <ArrowUpRight size={18} />
                </span>
              </motion.a>

              <div className="mt-10 flex items-center gap-3">
                <span className="h-px flex-1 bg-white/10" />
                <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/30">
                  Dubai · UAE
                </span>
                <span className="h-px flex-1 bg-white/10" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}