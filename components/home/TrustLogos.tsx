import LogoLoop, { type LogoItem } from "@/components/ui/LogoLoop";
import { CLIENT_LOGOS } from "@/lib/constants";

const ClientMark = ({ name, industry }: { name: string; industry: string }) => (
  <div className="flex items-center gap-3 rounded-xl border border-[#E7E2EF] bg-[#F7F5FC] px-4 py-2.5 transition-all duration-300 hover:border-[#4D11A8]/40 hover:bg-white hover:shadow-sm">
    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#4D11A8]/10 text-xs font-bold text-[#4D11A8]">
      {name.charAt(0)}
    </span>
    <div className="flex flex-col">
      <span className="whitespace-nowrap font-sans text-xs font-bold tracking-tight text-[#151515]">
        {name}
      </span>
      <span className="whitespace-nowrap font-mono text-[10px] text-[#6B6B73]">
        {industry}
      </span>
    </div>
  </div>
);

const logoItems: LogoItem[] = CLIENT_LOGOS.map((client) => ({
  node: <ClientMark name={client.name} industry={client.industry} />,
  ariaLabel: client.name,
}));

export default function TrustLogos() {
  return (
    <section
      id="trust"
      aria-label="Clients and Partners"
      className="relative border-y border-[#E7E2EF] bg-white py-10"
    >
      <div className="mx-auto mb-6 flex max-w-7xl items-center gap-4 px-5 sm:px-8 lg:px-10">
        <span className="eyebrow shrink-0 text-xs text-[#4D11A8]">
          Trusted by Industry Leaders Across Dubai &amp; UAE
        </span>
        <span className="hairline-light flex-1" />
      </div>

      <LogoLoop
        logos={logoItems}
        speed={45}
        gap={24}
        logoHeight={44}
        pauseOnHover
        fadeOut
        fadeOutColor="#FFFFFF"
        ariaLabel="ZironPro client logos"
      />
    </section>
  );
}
