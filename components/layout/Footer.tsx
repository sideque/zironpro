import Image from "next/image";
import Link from "next/link";

import {
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF
} from "react-icons/fa6";

import { CONTACT, NAV_ITEMS, SERVICES } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative border-t border-[#E7E2EF] bg-[#F7F5FC] text-[#151515]">
      <div className="mx-auto max-w-7xl px-5 pb-10 pt-16 sm:px-8 lg:px-10">

        {/* =========================
            MAIN FOOTER GRID
        ========================== */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">

          {/* =========================
              BRAND
          ========================== */}
          <div className="lg:col-span-2">

            {/* LOGO */}
            <Link
              href="/"
              aria-label="ZironPro home"
              className="inline-flex shrink-0 items-center"
            >
              <Image
                src="/brand/logo-horizontal.svg"
                alt="ZironPro"
                width={757}
                height={221}
                unoptimized
                className="h-9 w-auto sm:h-11"
              />
            </Link>

            {/* DESCRIPTION */}
            <p className="mt-5 max-w-md text-sm leading-7 text-[#6B6B73]">
              AI-Powered Digital Marketing &amp; Growth Agency in Dubai
              helping businesses across the UAE attract high-intent
              audiences, convert qualified leads, and scale brand authority.
            </p>

            {/* SOCIAL ICONS */}
            <div className="mt-7 flex items-center gap-3">

              {/* LINKEDIN */}
              <a
                href="https://www.linkedin.com/company/zironpro"
                aria-label="LinkedIn"
                target="_blank"
                rel="noreferrer"
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-full
                  border border-[#E7E2EF]
                  bg-white
                  text-[#4D11A8]
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#4D11A8]
                  hover:bg-[#4D11A8]
                  hover:text-white
                  hover:shadow-md
                "
              >
                <FaLinkedinIn size={17} />
              </a>

              {/* INSTAGRAM */}
              <a
                href="https://www.instagram.com/zironpro"
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer"
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-full
                  border border-[#E7E2EF]
                  bg-white
                  text-[#4D11A8]
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#4D11A8]
                  hover:bg-[#4D11A8]
                  hover:text-white
                  hover:shadow-md
                "
              >
                <FaInstagram size={18} />
              </a>


               {/* FaceBook */}
              <a
                href="https://www.facebook.com/zironpro"
                aria-label="FaceBook"
                target="_blank"
                rel="noreferrer"
                className="
                  flex h-10 w-10 items-center justify-center
                  rounded-full
                  border border-[#E7E2EF]
                  bg-white
                  text-[#4D11A8]
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#4D11A8]
                  hover:bg-[#4D11A8]
                  hover:text-white
                  hover:shadow-md
                "
              >
                <FaFacebookF size={16} />
              </a>

            </div>
          </div>

          {/* =========================
              NAVIGATION
          ========================== */}
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#4D11A8]">
              Navigation
            </p>

            <ul className="mt-5 space-y-3 text-sm text-[#6B6B73]">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="
                      inline-flex
                      items-center
                      gap-1
                      transition-colors
                      hover:text-[#4D11A8]
                    "
                  >
                    {item.label}

                    <ArrowUpRight
                      size={12}
                      className="
                        opacity-0
                        -translate-x-1
                        translate-y-1
                        transition-all
                        duration-200
                        group-hover:opacity-100
                      "
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* =========================
              SERVICES
          ========================== */}
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#4D11A8]">
              Core Services
            </p>

            <ul className="mt-5 space-y-3 text-sm text-[#6B6B73]">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    href="/#services"
                    className="
                      transition-colors
                      hover:text-[#4D11A8]
                    "
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* =========================
              CONTACT
          ========================== */}
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#4D11A8]">
              UAE Head Office
            </p>

            <ul className="mt-5 space-y-4 text-sm text-[#6B6B73]">

              {/* LOCATION */}
              <li className="flex items-start gap-3">
                <MapPin
                  size={17}
                  className="mt-0.5 shrink-0 text-[#8F2CF4]"
                />

                <span className="leading-relaxed">
                  {CONTACT.location}
                </span>
              </li>

              {/* EMAIL */}
              <li className="flex items-start gap-3">
                <Mail
                  size={17}
                  className="mt-0.5 shrink-0 text-[#8F2CF4]"
                />

                <a
                  href={`mailto:${CONTACT.email}`}
                  className="break-all transition-colors hover:text-[#4D11A8]"
                >
                  {CONTACT.email}
                </a>
              </li>

              {/* WHATSAPP */}
              <li>
                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    font-semibold
                    text-[#4D11A8]
                    transition-colors
                    hover:text-[#8F2CF4]
                  "
                >
                  <MessageCircle size={17} />

                  <span>WhatsApp Support</span>

                  <ArrowUpRight size={14} />
                </a>
              </li>

            </ul>
          </div>
        </div>

        {/* =========================
            CTA MINI STRIP
        ========================== */}
        <div
          className="
            mt-14
            flex
            flex-col
            items-start
            justify-between
            gap-5
            rounded-2xl
            border
            border-[#E7E2EF]
            bg-white
            px-6
            py-5
            shadow-sm
            sm:flex-row
            sm:items-center
          "
        >
          <div>
            <p className="text-sm font-bold text-[#151515]">
              Ready to grow your business?
            </p>

            <p className="mt-1 text-xs text-[#6B6B73]">
              Let&apos;s build your next growth engine.
            </p>
          </div>

          <Link
            href="#contact"
            className="
              group
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-[#4D11A8]
              px-5
              py-2.5
              text-xs
              font-bold
              text-white
              transition-all
              duration-300
              hover:bg-[#8F2CF4]
            "
          >
            <span>Start a Conversation</span>

            <ArrowUpRight
              size={14}
              className="
                transition-transform
                duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </Link>
        </div>

        {/* =========================
            COPYRIGHT
        ========================== */}
        <div
          className="
            mt-10
            flex
            flex-col
            items-center
            justify-between
            gap-3
            border-t
            border-[#E7E2EF]
            pt-6
            text-xs
            text-[#6B6B73]
            sm:flex-row
          "
        >
          <p>
            © {new Date().getFullYear()} ZironPro. All rights reserved.
          </p>

          <p className="font-mono text-[11px]">
            Dubai · Abu Dhabi · Sharjah · UAE
          </p>
        </div>

      </div>
    </footer>
  );
}