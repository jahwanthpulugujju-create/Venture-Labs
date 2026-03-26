import { Layout } from "@/components/Layout";
import { TeamSection } from "@/components/sections/TeamSection";
import { FadeIn } from "@/components/FadeIn";

export default function Team() {
  return (
    <Layout>
      {/* Page Header */}
      <div className="bg-navy pt-36 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary font-semibold text-sm mb-6 backdrop-blur-md">
              Our People
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
              The Team Behind VVLF
            </h1>
            <p className="text-slate-300 text-xl max-w-2xl">
              Meet the visionaries, directors, and innovators driving our mission forward.
            </p>
          </FadeIn>
        </div>
      </div>

      <TeamSection />
    </Layout>
  );
}
