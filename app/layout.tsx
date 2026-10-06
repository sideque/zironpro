import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Plasma from "@/components/ui/Plasma/Plasma";

export const metadata: Metadata = {
  title: "ZironPro — Marketing Agency in Dubai & the UAE",
  description:
    "ZironPro is an AI-powered marketing agency in Dubai helping businesses across the UAE attract the right audience, convert leads into customers, and build lasting brand authority.",
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="relative min-h-screen bg-white antialiased">

        {/* GLOBAL WHITE PLASMA BACKGROUND */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-white"
        >
          <Plasma
            color="#B497CF"
            speed={0.8}
            direction="forward"
            scale={1}
            opacity={0.7}
            mouseInteractive={false}
            renderScale={0.55}
            maxDpr={1.5}
            targetFps={60}
            iterations={60}
            lightMode={true}
          />
        </div>

        {/* WEBSITE CONTENT */}
        <div className="relative z-10">
          <Navbar />

          <main id="main">
            {children}
          </main>

          <Footer />
        </div>

      </body>
    </html>
  );
}