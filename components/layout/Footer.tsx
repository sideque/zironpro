import Link from "next/link";
import { CONTACT, NAV_ITEMS, SERVICES } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative border-t border-[#E7E2EF] bg-[#F7F5FC] text-[#151515]">
      <div className="mx-auto max-w-7xl px-5 pb-10 pt-16 sm:px-8 lg:px-10">
        
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          
          {/* COL 1: BRAND */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#4D11A8] text-white">
                <span className="font-mono text-sm font-bold">Z</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-[#151515]">
                Ziron<span className="text-[#8F2CF4]">Pro</span>
              </span>
            </Link>
            
            <p className="mt-4 max-w-sm text-xs leading-relaxed text-[#6B6B73]">
              AI-Powered Digital Marketing &amp; Growth Agency in Dubai helping businesses across the UAE attract high-intent audiences, convert qualified leads, and scale brand authority.
            </p>

            <div className="mt-6 flex items-center gap-4 text-xs font-semibold text-[#4D11A8]">
              <a href="#" className="hover:underline">LinkedIn</a>
              <span>·</span>
              <a href="#" className="hover:underline">Instagram</a>
              <span>·</span>
              <a href="#" className="hover:underline">Twitter / X</a>
            </div>
          </div>

          {/* COL 2: QUICK LINKS */}
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#4D11A8]">
              Navigation
            </p>
            <ul className="mt-4 space-y-2.5 text-xs text-[#6B6B73]">
              {NAV_ITEMS.map((n) => (
                <li key={n.label}>
                  <Link href={n.href} className="transition-colors hover:text-[#4D11A8]">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 3: SERVICES */}
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#4D11A8]">
              Core Services
            </p>
            <ul className="mt-4 space-y-2.5 text-xs text-[#6B6B73]">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link href="/#services" className="transition-colors hover:text-[#4D11A8]">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 4: CONTACT */}
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#4D11A8]">
              UAE Head Office
            </p>
            <ul className="mt-4 space-y-2.5 text-xs text-[#6B6B73]">
              <li className="font-medium text-[#151515]">{CONTACT.location}</li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-[#4D11A8]">
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="font-semibold text-[#4D11A8] hover:underline">
                  WhatsApp Support
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-[#E7E2EF] pt-6 text-xs text-[#6B6B73] sm:flex-row">
          <p>© {new Date().getFullYear()} ZironPro. All rights reserved.</p>
          <p className="font-mono text-[11px]">
            Dubai · Abu Dhabi · Sharjah · UAE
          </p>
        </div>

      </div>
    </footer>
  );
}
