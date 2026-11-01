import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { InteractivePipeline } from "@/components/InteractivePipeline";
import { SolutionsGrid } from "@/components/SolutionsGrid";
import { ArchitectureShowcase } from "@/components/ArchitectureShowcase";
import { RoadmapSection } from "@/components/RoadmapSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <main className="min-h-screen bg-[#FAF8F5] text-[#141715] flex flex-col selection:bg-[#068241] selection:text-white">
        <Navbar />
        <HeroSection />
        <InteractivePipeline />
        <SolutionsGrid />
        <ArchitectureShowcase />
        <RoadmapSection />
        <ContactSection />
        <Footer />
      </main>
    </SmoothScrollProvider>
  );
}
