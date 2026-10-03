"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  CalendarDays,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const posts = [
  {
    category: "Digital Marketing",
    title: "How UAE Businesses Can Build a Stronger Digital Presence",
    description:
      "A practical look at the channels, content, and strategies businesses can use to build visibility and generate consistent demand.",
    date: "Latest insight",
    readTime: "6 min read",
  },
  {
    category: "SEO",
    title: "Building Search Visibility in Dubai's Competitive Market",
    description:
      "Understand the fundamentals behind technical SEO, local search, content authority, and high-intent keyword targeting.",
    date: "Latest insight",
    readTime: "7 min read",
  },
  {
    category: "Performance Marketing",
    title: "From Ad Clicks to Qualified Leads: What Actually Matters",
    description:
      "Why performance marketing should go beyond impressions and clicks — and how businesses can build campaigns around meaningful outcomes.",
    date: "Latest insight",
    readTime: "5 min read",
  },
];

export default function Insights() {
  return (
    <section
      id="insights"
      className="relative overflow-hidden bg-[#0D1420] py-28 sm:py-32 lg:py-40"
    >
      {/* Background */}
      <div className="pointer-events-none absolute left-[-15%] top-[20%] h-[450px] w-[450px] rounded-full bg-[#4D11A8]/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#8F2CF4]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8F2CF4]">
                Insights & Resources
              </span>
            </div>

            <h2 className="mt-6 max-w-2xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
              Ideas that move
              <br />
              <span className="text-white/35">business forward.</span>
            </h2>
          </motion.div>

          <motion.a
            href="/blogs"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="group inline-flex w-fit items-center gap-2 text-sm font-medium text-white transition-colors hover:text-[#8F2CF4]"
          >
            View all insights

            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </motion.a>
        </div>

        {/* Blog cards */}
        <div className="mt-20 grid gap-5 lg:grid-cols-3">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.65,
                delay: index * 0.08,
                ease,
              }}
              className="group relative flex min-h-[430px] flex-col overflow-hidden rounded-[26px] border border-white/[0.08] bg-white/[0.015] transition-all duration-500 hover:border-[#8F2CF4]/25 hover:bg-[#8F2CF4]/[0.025]"
            >
              {/* Image placeholder */}
              <div className="relative h-52 overflow-hidden border-b border-white/[0.08] bg-gradient-to-br from-[#170349] via-[#4D11A8]/30 to-[#0D1420]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(143,44,244,0.25),transparent_45%)]" />

                <div className="absolute left-6 top-6 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-sm">
                  <BookOpen
                    size={17}
                    className="text-[#8F2CF4]"
                    strokeWidth={1.5}
                  />
                </div>

                <div className="absolute bottom-6 left-6">
                  <span className="rounded-full border border-white/10 bg-black/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/60 backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>

                {/* Decorative shapes */}
                <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full border border-white/[0.06]" />

                <div className="absolute -right-4 top-6 h-24 w-24 rounded-full border border-[#8F2CF4]/10" />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-7 sm:p-8">
                <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.12em] text-white/25">
                  <span className="flex items-center gap-1.5">
                    <CalendarDays size={12} />
                    {post.date}
                  </span>

                  <span className="h-1 w-1 rounded-full bg-white/15" />

                  <span>{post.readTime}</span>
                </div>

                <h3 className="mt-5 text-xl font-semibold leading-[1.2] tracking-[-0.03em] text-white transition-colors duration-300 group-hover:text-[#8F2CF4] sm:text-2xl">
                  {post.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/35">
                  {post.description}
                </p>

                <div className="mt-auto pt-8">
                  <a
                    href="/blogs"
                    className="group/link inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-white/45 transition-colors hover:text-white"
                  >
                    Read article

                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                    />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease }}
          className="mt-10 border-t border-white/[0.08] pt-8"
        >
          <p className="text-center text-xs text-white/20">
            Digital marketing insights, strategies, and ideas for ambitious
            businesses across the UAE.
          </p>
        </motion.div>
      </div>
    </section>
  );
}