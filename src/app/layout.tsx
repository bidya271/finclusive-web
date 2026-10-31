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
  themeColor: "#068241",
};

export const metadata: Metadata = {
  title: "Finclusive.si — Enterprise Agentic AI & Autonomous Workflows for Financial Systems",
  description: "Enterprise Agentic AI accelerators and autonomous SDLC workflows for mission-critical banking and fintech infrastructure. Inspired by Center-of-Intelligence architectures.",
  keywords: [
    "Agentic AI",
    "Agentic Workflow",
    "Enterprise AI Accelerators",
    "Model Context Protocol",
    "MCP",
    "Agentic SDLC",
    "Autonomous Regression Testing",
    "Process Discovery",
    "Fintech AI Infrastructure",
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
