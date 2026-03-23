import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProgramsSection } from "@/components/sections/ProgramsSection";
import { EcosystemSection } from "@/components/sections/EcosystemSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { CommunitySection } from "@/components/sections/CommunitySection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProgramsSection />
        <EcosystemSection />
        <TimelineSection />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
}
