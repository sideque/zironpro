"use client";

import Image from "next/image";

import Reveal from "@/components/ui/Reveal";
import Marquee from "@/components/ui/marquee";

import { CLIENTS } from "@/lib/constants";

export default function TrustLogos() {
  return (
    <section
      id="trust"
      aria-label="Clients and Partners"
      className="
        relative
        w-full
        overflow-hidden
        border-y
        border-[#E7E2EF]
        bg-transparent
      "
    >
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-[1440px]
          grid-cols-1
          items-center
          gap-8
          px-6
          py-8

          sm:px-8
          sm:py-9

          md:grid-cols-[280px_minmax(0,1fr)]
          md:gap-10
          md:px-10

          lg:grid-cols-[320px_minmax(0,1fr)]
          lg:px-12

          xl:grid-cols-[350px_minmax(0,1fr)]
          xl:px-14
        "
      >
        {/* =====================================================
            LEFT SIDE — TRUST TEXT
        ====================================================== */}

        <Reveal>
          <div className="relative z-10">
            <p
              className="
                max-w-[300px]
                font-sans
                text-[18px]
                font-semibold
                leading-[1.45]
                tracking-[-0.025em]
                text-[#242124]

                sm:text-[19px]

                lg:text-[20px]
              "
            >
              Trusted by fast-growing
              <br />
              brands across Abu Dhabi,
              <br />
              Dubai, and the UAE
            </p>
          </div>
        </Reveal>

        {/* =====================================================
            RIGHT SIDE — CLIENT LOGOS
        ====================================================== */}

        <div
          className="
            relative
            min-w-0
            overflow-hidden
          "
        >
          {/* LEFT FADE */}

          <div
            className="
              pointer-events-none
              absolute
              inset-y-0
              left-0
              z-20
              w-10
              bg-gradient-to-r
              from-white/60
              to-transparent

              sm:w-14
            "
          />

          {/* RIGHT FADE */}

          <div
            className="
              pointer-events-none
              absolute
              inset-y-0
              right-0
              z-20
              w-10
              bg-gradient-to-l
              from-white/60
              to-transparent

              sm:w-14
            "
          />

          <Marquee
            pauseOnHover
            repeat={4}
            className="
              [--duration:30s]
              [--gap:4rem]
              p-0
            "
          >
            {CLIENTS.map((client) => (
              <div
                key={client.name}
                className="
                  flex
                  h-[72px]
                  w-[135px]
                  shrink-0
                  items-center
                  justify-center

                  sm:w-[150px]

                  md:w-[160px]

                  lg:w-[175px]
                "
              >
                <Image
                  src={client.src}
                  alt={client.name}
                  width={180}
                  height={80}
                  priority={false}
                  className="
                    max-h-[48px]
                    w-auto
                    max-w-[150px]
                    object-contain

                    grayscale
                    opacity-55

                    transition-all
                    duration-300

                    hover:grayscale-0
                    hover:opacity-100
                  "
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}