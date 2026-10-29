import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#5033A4",
};

export const metadata: Metadata = {
  title: "Finclusive.si — Sovereign Banking-as-a-Service & Autonomous Financial Infrastructure",
  description: "Next-generation banking infrastructure engineering. Deploy sovereign BaaS, real-time cross-border settlement, and agentic compliance engines.",
  keywords: [
    "Banking as a Service",
    "BaaS",
    "Fintech Infrastructure",
    "AI Compliance",
    "Cross-border Settlement",
    "RemitPe",
    "Virtual Ledgers",
    "Finclusive"
  ],
  authors: [{ name: "Finclusive Tech" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable} antialiased selection:bg-[#5033A4] selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
