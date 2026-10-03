"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Quote, Star } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const testimonials = [
  {
    quote:
      "ZironPro brought structure and clarity to our digital marketing. The strategy was focused, the communication was clear, and the work was always connected to our business goals.",
    name: "Client Name",
    role: "Marketing Director",
    company: "Company Name",
  },
  {
    quote:
      "What stood out was their understanding of our market. They didn't use a generic approach — every campaign and piece of content was built around our audience.",
    name: "Client Name",
    role: "Business Owner",
    company: "Company Name",
  },
  {
    quote:
      "From strategy to execution, the team worked like an extension of our business. We had clear communication and a much more consistent digital presence.",
    name: "Client Name",
    role: "Founder",
    company: "Company Name",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#0D1420] py-28 sm:py-32 lg:py-40"
    >
      {/* Background */}
      <div className="pointer-events-none absolute right-[-15%] top-[15%] h-[500px] w-[500px] rounded-full bg-[#4D11A8]/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#8F2CF4]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8F2CF4]">
                Client Stories
              </span>
            </div>

            <h2 className="mt-6 max-w-xl text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
              Built on
              <br />
              <span className="text-white/35">real partnerships.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="lg:pt-12"
          >
            <p className="max-w-2xl text-base leading-8 text-white/50 sm:text-lg">
              Great work starts with a strong relationship. We work closely
              with our clients, understand their goals, and build strategies
              around the challenges that actually matter to their business.
            </p>
          </motion.div>
        </div>

        {/* Testimonials */}
        <div className="mt-20 grid gap-4 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={`${testimonial.company}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.65,
                delay: index * 0.08,
                ease,
              }}
              className="group relative flex min-h-[390px] flex-col overflow-hidden rounded-[26px] border border-white/[0.08] bg-white/[0.015] p-7 transition-all duration-500 hover:border-[#8F2CF4]/25 hover:bg-[#8F2CF4]/[0.025] sm:p-8"
            >
              {/* Glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-[#8F2CF4]/10 opacity-0 blur-[70px] transition-opacity duration-700 group-hover:opacity-100" />

              <div className="relative flex h-full flex-col">
                {/* Quote icon */}
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#8F2CF4]/20 bg-[#8F2CF4]/10">
                    <Quote
                      size={18}
                      className="text-[#8F2CF4]"
                      strokeWidth={1.5}
                    />
                  </div>

                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={12}
                        className="fill-[#8F2CF4] text-[#8F2CF4]"
                      />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="mt-8 flex-1 text-lg font-medium leading-8 tracking-[-0.02em] text-white/80">
                  “{testimonial.quote}”
                </blockquote>

                {/* Divider */}
                <div className="my-7 h-px w-full bg-white/[0.08]" />

                {/* Person */}
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {testimonial.name}
                    </p>

                    <p className="mt-1 text-xs text-white/30">
                      {testimonial.role}
                    </p>

                    <p className="mt-1 text-xs font-medium text-[#8F2CF4]/80">
                      {testimonial.company}
                    </p>
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] text-white/20 transition-all duration-300 group-hover:border-[#8F2CF4]/30 group-hover:text-[#8F2CF4]">
                    <ArrowUpRight size={15} />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom trust line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease }}
          className="mt-10 flex items-center justify-center gap-3 text-center"
        >
          <span className="h-px w-8 bg-white/10" />

          <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/20">
            Trusted partnerships · Measurable growth
          </span>

          <span className="h-px w-8 bg-white/10" />
        </motion.div>
      </div>
    </section>
  );
}