"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  Code2,
  FileText,
  Megaphone,
  Palette,
  Play,
  Search,
  Smartphone,
  Target,
  Video,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const services = [
  {
    number: "01",
    title: "Digital Marketing",
    icon: Megaphone,
    description:
      "Build awareness, engagement, and demand across the digital channels that matter to your audience.",
    items: [
      "Video Marketing",
      "Google Ads",
      "Influencer Marketing",
      "WhatsApp Business API",
      "Email Marketing",
      "Social Media Marketing",
    ],
  },
  {
    number: "02",
    title: "SEO",
    icon: Search,
    description:
      "Search strategies designed to increase visibility, attract high-intent traffic, and turn rankings into business growth.",
    items: [
      "Technical SEO",
      "On-Page SEO",
      "Local SEO / GMB",
      "Keyword Research",
      "Link Building",
      "SEO Audit",
    ],
  },
  {
    number: "03",
    title: "Web Development",
    icon: Code2,
    description:
      "Fast, modern, conversion-focused websites built around your brand and business goals.",
    items: ["Web Development", "Website Hosting"],
  },
  {
    number: "04",
    title: "App Development",
    icon: Smartphone,
    description:
      "Mobile experiences designed and developed to make your products easier to access and use.",
    items: ["Mobile App Development", "Mobile App Design"],
  },
  {
    number: "05",
    title: "Digital Branding & Communication",
    icon: Palette,
    description:
      "Create a consistent brand presence that communicates clearly and stays memorable across every touchpoint.",
    items: ["Branding", "PR & Outreach", "SMS Marketing"],
  },
  {
    number: "06",
    title: "Paid Media",
    icon: Target,
    description:
      "Performance campaigns across the platforms where your customers are already searching, watching, and engaging.",
    items: [
      "Google Ads",
      "Facebook Ads",
      "Instagram Ads",
      "LinkedIn Ads",
      "TikTok Ads",
      "YouTube Ads",
    ],
  },
  {
    number: "07",
    title: "Video Production",
    icon: Video,
    description:
      "Purpose-built video content for brands that need to explain, educate, build trust, and convert attention.",
    items: [
      "Video Production",
      "Corporate Video Production",
      "Branded Video Production",
      "Financial Video Production",
      "Social Video Production",
      "Real Estate Video Production",
      "Healthcare Video Production",
      "B2B Explainer Videos",
      "Tech Explainer Videos",
      "Educational Explainer Videos",
      "Healthcare Explainer Videos",
    ],
  },
  {
    number: "08",
    title: "Lead Generation",
    icon: Bot,
    description:
      "Generate qualified opportunities with targeted acquisition strategies built around your industry and sales process.",
    items: [
      "LinkedIn Lead Generation",
      "Hospitals",
      "Logistics",
      "Beauty & Wellness Centers",
      "Medical Clinics",
      "Hotels",
      "Restaurants & Bars",
      "B2B Companies",
      "Real Estate",
      "Schools & Colleges",
      "Skills & Training Centers",
      "Insurance",
      "Fintech",
      "IT Companies",
      "Security Industry",
    ],
  },
  {
    number: "09",
    title: "Design Services & Brand Identity",
    icon: FileText,
    description:
      "Design systems and marketing assets that give your business a polished, consistent, and professional identity.",
    items: [
      "Graphic Design",
      "Website Design",
      "Brochure Design",
      "Pitch Deck Design",
      "Company Profile Design",
    ],
  },
  {
    number: "10",
    title: "Corporate Gifting",
    icon: Play,
    description:
      "Branded physical experiences that help businesses build relationships and stay memorable.",
    items: [
      "Offset & Digital Printing",
      "Custom & Corporate Gifting",
      "Stationery & Corporate Identity",
      "Merchandise",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#0D1420] py-28 sm:py-32 lg:py-40"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute right-[-15%] top-[15%] h-[600px] w-[600px] rounded-full bg-[#6620EE]/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#8F2CF4]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8F2CF4]">
                What We Do
              </span>
            </div>

            <h2 className="mt-6 max-w-lg text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
              One team.
              <br />
              <span className="text-white/35">Every growth channel.</span>
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
              We engineer integrated growth ecosystems that connect strategy,
              creativity, technology, media, and performance — giving your
              business everything it needs to move from attention to revenue.
            </p>
          </motion.div>
        </div>

        {/* Services */}
        <div className="mt-20 grid gap-4 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.65,
                  delay: (index % 2) * 0.08,
                  ease,
                }}
                className={`group relative overflow-hidden rounded-[24px] border border-white/[0.08] bg-white/[0.015] p-7 transition-all duration-500 hover:border-[#8F2CF4]/25 hover:bg-[#8F2CF4]/[0.025] sm:p-8 ${
                  index === 6 || index === 7
                    ? "md:col-span-2"
                    : ""
                }`}
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-[#8F2CF4]/10 opacity-0 blur-[70px] transition-opacity duration-700 group-hover:opacity-100" />

                <div className="relative">
                  {/* Top row */}
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/[0.08] bg-[#170349]/40 transition-all duration-500 group-hover:border-[#8F2CF4]/30 group-hover:bg-[#8F2CF4]/10">
                        <Icon
                          size={20}
                          strokeWidth={1.5}
                          className="text-white/60 transition-colors duration-500 group-hover:text-[#8F2CF4]"
                        />
                      </div>

                      <div>
                        <span className="text-[10px] font-medium tracking-[0.15em] text-white/20">
                          {service.number}
                        </span>

                        <h3 className="mt-1 text-xl font-semibold tracking-[-0.035em] text-white sm:text-2xl">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/[0.08] text-white/20 transition-all duration-500 group-hover:border-[#8F2CF4]/30 group-hover:bg-[#8F2CF4] group-hover:text-white">
                      <ArrowUpRight size={15} />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-7 max-w-2xl text-sm leading-7 text-white/40">
                    {service.description}
                  </p>

                  {/* Items */}
                  <div className="mt-7 flex flex-wrap gap-2">
                    {service.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/[0.07] bg-white/[0.02] px-3 py-1.5 text-[10px] font-medium text-white/35 transition-colors duration-300 group-hover:border-white/[0.1] group-hover:text-white/50"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="mt-12 flex flex-col gap-6 rounded-[24px] border border-[#8F2CF4]/15 bg-gradient-to-r from-[#4D11A8]/15 to-[#170349]/20 p-7 sm:p-9 lg:flex-row lg:items-center lg:justify-between"
        >
          <div>
            <p className="text-lg font-semibold tracking-[-0.025em] text-white">
              Need a marketing team that actually delivers?
            </p>

            <p className="mt-2 max-w-xl text-sm leading-6 text-white/35">
              Tell us what you're trying to achieve and we'll build the right
              growth strategy around your business.
            </p>
          </div>

          <a
            href="#contact"
            className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-[#4D11A8] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#6620EE] hover:shadow-xl hover:shadow-[#4D11A8]/20"
          >
            Book a Free Consultation

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}