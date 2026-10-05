"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen } from "lucide-react";

import Reveal from "@/components/ui/Reveal";
import { BLOGS, EASE } from "@/lib/constants";

export default function Blog() {
  return (
    <section
      id="blogs"
      className="
        relative
        isolate
        overflow-hidden
        border-t
        border-[#E7E2EF]
        bg-transparent
        py-20
        sm:py-24
        lg:py-28
      "
    >

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* HEADER */}

        <div
          className="
            mb-12
            flex
            flex-col
            justify-between
            gap-4
            sm:mb-16
            sm:flex-row
            sm:items-end
          "
        >
          <div>
            <Reveal>
              <span className="eyebrow mb-2 block text-[#4D11A8]">
                Growth Insights &amp; Articles
              </span>

              <h2 className="display-heading text-[#151515]">
                Knowledge For UAE Business Leaders
              </h2>
            </Reveal>
          </div>

          <Reveal>
            <a
              href="#contact"
              className="
                group
                inline-flex
                items-center
                gap-2
                text-xs
                font-bold
                text-[#4D11A8]
                transition-colors
                hover:text-[#8F2CF4]
              "
            >
              <span>Explore Strategic Guidance</span>

              <ArrowUpRight
                size={16}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </a>
          </Reveal>
        </div>

        {/* =================================================
            BLOG GRID
        ================================================= */}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BLOGS.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: EASE,
              }}
              className="
                group
                relative
                flex
                flex-col
                justify-between
                overflow-hidden
                rounded-3xl
                border
                border-[#E0D3F2]
                bg-white/85
                p-7
                shadow-[0_10px_40px_rgba(77,17,168,0.06)]
                backdrop-blur-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#4D11A8]/50
                hover:bg-white
                hover:shadow-[0_20px_50px_rgba(77,17,168,0.12)]
              "
            >
              {/* CARD GLOW */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute
                  -right-16
                  -top-16
                  h-32
                  w-32
                  rounded-full
                  bg-[#8F2CF4]/10
                  blur-3xl
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />

              <div className="relative z-10">
                {/* CATEGORY + ICON */}

                <div className="flex items-center justify-between">
                  <span
                    className="
                      rounded-full
                      bg-[#F7F5FC]
                      px-3
                      py-1
                      font-mono
                      text-xs
                      font-semibold
                      text-[#4D11A8]
                    "
                  >
                    {post.category}
                  </span>

                  <BookOpen
                    size={16}
                    className="
                      text-[#6B6B73]
                      transition-colors
                      duration-300
                      group-hover:text-[#4D11A8]
                    "
                  />
                </div>

                {/* TITLE */}

                <h3
                  className="
                    mt-5
                    text-lg
                    font-bold
                    tracking-tight
                    text-[#151515]
                    transition-colors
                    duration-300
                    group-hover:text-[#4D11A8]
                  "
                >
                  {post.title}
                </h3>

                {/* DESCRIPTION */}

                <p
                  className="
                    mt-2.5
                    text-xs
                    leading-relaxed
                    text-[#6B6B73]
                  "
                >
                  {post.description}
                </p>
              </div>

              {/* BOTTOM LINK */}

              <div
                className="
                  relative
                  z-10
                  mt-6
                  border-t
                  border-[#E7E2EF]
                  pt-4
                "
              >
                <a
                  href={post.href}
                  className="
                    inline-flex
                    items-center
                    gap-1.5
                    text-xs
                    font-bold
                    text-[#4D11A8]
                    transition-colors
                    group-hover:text-[#8F2CF4]
                  "
                >
                  <span>Read Article</span>

                  <ArrowUpRight
                    size={14}
                    className="
                      transition-transform
                      duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                    "
                  />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}