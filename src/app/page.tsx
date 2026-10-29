import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { SolutionsGrid } from "@/components/SolutionsGrid";
import { ArchitectureShowcase } from "@/components/ArchitectureShowcase";
import { RemitPeCaseStudy } from "@/components/RemitPeCaseStudy";
import { BaaSCalculator } from "@/components/BaaSCalculator";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#121211] flex flex-col selection:bg-[#5033A4] selection:text-white">
      <Navbar />
      <HeroSection />
      <SolutionsGrid />
      <ArchitectureShowcase />
      <RemitPeCaseStudy />
      <BaaSCalculator />
      <ContactSection />
      <Footer />
    </main>
  );
}
