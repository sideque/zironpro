import Image from "next/image";
import Link from "next/link";
import { CONTACT, INDUSTRIES, NAV_ITEMS, SERVICES } from "@/lib/constants";

const link = "text-sm text-white/50 transition-colors duration-300 hover:text-white";
const head = "mb-5 font-mono text-[11px] uppercase tracking-[0.2em] text-purple-secondary";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.08] bg-gradient-to-b from-dark to-ink">
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 left-1/2 h-[400px] w-[80vw] max-w-[1000px] -translate-x-1/2 rounded-full bg-purple-primary/30 blur-[140px]" />
      <div className="relative mx-auto max-w-7xl px-5 pb-8 pt-20 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.2fr]">
          <div>
            <Image src="/brand/logo-horizontal.svg" alt="ZironPro" width={757} height={221} unoptimized className="h-12 w-auto" />
            <p className="mt-6 max-w-xs text-sm leading-7 text-white/50">A marketing agency in Dubai helping businesses across the UAE attract the right audience, convert leads into customers, and build lasting brand authority.</p>
          </div>
          <nav aria-label="Footer navigation"><p className={head}>Navigate</p><ul className="space-y-3">{NAV_ITEMS.map((n) => (<li key={n.label}><Link href={n.href} className={link}>{n.label}</Link></li>))}</ul></nav>
          <div><p className={head}>Services</p><ul className="space-y-3">{SERVICES.slice(0, 6).map((s) => (<li key={s.title}><Link href="/#services" className={link}>{s.title}</Link></li>))}</ul></div>
          <div><p className={head}>Industries</p><ul className="space-y-3">{INDUSTRIES.map((s) => (<li key={s.title}><Link href="/#industries" className={link}>{s.title}</Link></li>))}</ul></div>
          <div>
            <p className={head}>Contact</p>
            <ul className="space-y-3">
              <li><a href={`mailto:${CONTACT.email}`} className={link}>{CONTACT.email}</a></li>
              <li className="text-sm text-white/50">{CONTACT.location}</li>
              <li className="flex gap-5 pt-2">
                {/* TODO: replace "#" with real social profile URLs */}
                <a href="#" className={link} aria-label="ZironPro on LinkedIn">LinkedIn</a>
                <a href="#" className={link} aria-label="ZironPro on Instagram">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col justify-between gap-3 border-t border-white/[0.08] pt-6 text-xs text-white/35 sm:flex-row">
          <p>© {new Date().getFullYear()} ZironPro. All rights reserved.</p>
          <p>Dubai · Abu Dhabi · UAE</p>
        </div>
      </div>
    </footer>
  );
}
