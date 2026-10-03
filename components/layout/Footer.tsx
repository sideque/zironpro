"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Camera,
  Link2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const services = [
  { label: "Digital Marketing", href: "/services/digital-marketing" },
  { label: "SEO", href: "/services/seo" },
  { label: "Web Development", href: "/services/web-development" },
  { label: "App Development", href: "/services/app-development" },
  { label: "Paid Media", href: "/services/paid-media" },
  { label: "Video Production", href: "/services/video-production" },
];

const company = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blogs", href: "/blogs" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0D1420]">
      {/* Top border */}
      <div className="h-px w-full bg-white/[0.08]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="grid gap-14 py-20 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr] lg:gap-16 lg:py-24">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
          >
            <a href="/" className="inline-flex items-center">
              <span className="text-2xl font-bold tracking-[-0.04em] text-white">
                Ziron
                <span className="text-[#8F2CF4]">Pro</span>
              </span>
            </a>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/35">
              A digital growth partner helping ambitious businesses across
              Dubai and the UAE build stronger brands, generate demand, and
              turn digital activity into measurable growth.
            </p>

            {/* Social */}
            <div className="mt-7 flex items-center gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] text-white/35 transition-all duration-300 hover:border-[#8F2CF4]/30 hover:bg-[#8F2CF4]/10 hover:text-[#8F2CF4]"
              >
                <Link2 size={16} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] text-white/35 transition-all duration-300 hover:border-[#8F2CF4]/30 hover:bg-[#8F2CF4]/10 hover:text-[#8F2CF4]"
              >
                <Camera size={16} />
              </a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08, ease }}
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/25">
              Services
            </p>

            <div className="mt-6 space-y-3.5">
              {services.map((service) => (
                <a
                  key={service.label}
                  href={service.href}
                  className="group flex w-fit items-center gap-2 text-sm text-white/40 transition-colors duration-300 hover:text-white"
                >
                  {service.label}

                  <ArrowUpRight
                    size={12}
                    className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.16, ease }}
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/25">
              Company
            </p>

            <div className="mt-6 space-y-3.5">
              {company.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="group flex w-fit items-center gap-2 text-sm text-white/40 transition-colors duration-300 hover:text-white"
                >
                  {item.label}

                  <ArrowUpRight
                    size={12}
                    className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.24, ease }}
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/25">
              Get in touch
            </p>

            <div className="mt-6 space-y-5">
              <a
                href="mailto:info@zironpro.com"
                className="group flex items-start gap-3"
              >
                <Mail
                  size={16}
                  className="mt-0.5 shrink-0 text-[#8F2CF4]"
                  strokeWidth={1.5}
                />

                <span className="text-sm text-white/40 transition-colors group-hover:text-white">
                  info@zironpro.com
                </span>
              </a>

              <a
                href="tel:+971000000000"
                className="group flex items-start gap-3"
              >
                <Phone
                  size={16}
                  className="mt-0.5 shrink-0 text-[#8F2CF4]"
                  strokeWidth={1.5}
                />

                <span className="text-sm text-white/40 transition-colors group-hover:text-white">
                  +971 XX XXX XXXX
                </span>
              </a>

              <div className="flex items-start gap-3">
                <MapPin
                  size={16}
                  className="mt-0.5 shrink-0 text-[#8F2CF4]"
                  strokeWidth={1.5}
                />

                <span className="text-sm leading-6 text-white/40">
                  Dubai, United Arab Emirates
                </span>
              </div>
            </div>

            <a
              href="/contact"
              className="group mt-7 inline-flex items-center gap-2 rounded-full bg-[#4D11A8] px-5 py-3 text-xs font-semibold text-white transition-all duration-300 hover:bg-[#6620EE] hover:shadow-lg hover:shadow-[#4D11A8]/20"
            >
              Start a conversation

              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-5 border-t border-white/[0.08] py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/20">
            © {new Date().getFullYear()} ZironPro. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="/privacy-policy"
              className="text-xs text-white/20 transition-colors hover:text-white/50"
            >
              Privacy Policy
            </a>

            <a
              href="/terms"
              className="text-xs text-white/20 transition-colors hover:text-white/50"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}