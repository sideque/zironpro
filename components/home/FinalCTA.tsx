import { ArrowUpRight, Mail, MapPin, MessageSquare } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { CONTACT } from "@/lib/constants";

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl border border-[#E7E2EF] bg-gradient-to-br from-[#4D11A8] via-[#170349] to-[#0D1420] px-6 py-16 text-white shadow-2xl sm:px-12 sm:py-20 lg:px-16">
          
          {/* AMBIENT BACKGROUND GLOW */}
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-[#8F2CF4]/30 blur-[100px]"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-3xl text-center">
            <Reveal>
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-[#8F2CF4]" />
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-white">
                  Start Your UAE Growth Journey
                </span>
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Ready to Turn Your Brand Into a Revenue Machine?
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base">
                Book a consultation with our Dubai growth strategists. We will evaluate your digital presence, identify revenue bottlenecks, and present a clear growth blueprint.
              </p>
            </Reveal>

            {/* BUTTONS */}
            <Reveal delay={0.3} className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={`mailto:${CONTACT.email}?subject=Consultation%20Request`}
                className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-bold text-[#4D11A8] shadow-lg transition-all duration-300 hover:bg-[#F1EAFE] sm:w-auto"
              >
                <span>Book a Consultation</span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#4D11A8] text-white transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={14} />
                </span>
              </a>

              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 sm:w-auto"
              >
                <MessageSquare size={16} />
                <span>WhatsApp Us Direct</span>
              </a>
            </Reveal>

            {/* CONTACT DETAILS FOOTER INSIDE CTA */}
            <Reveal delay={0.4} className="mt-12 flex flex-wrap items-center justify-center gap-6 border-t border-white/15 pt-8 text-xs text-white/70">
              <div className="flex items-center gap-2">
                <Mail size={15} className="text-[#8F2CF4]" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-white">
                  {CONTACT.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={15} className="text-[#8F2CF4]" />
                <span>{CONTACT.location}</span>
              </div>
            </Reveal>

          </div>
        </div>
      </div>
    </section>
  );
}
