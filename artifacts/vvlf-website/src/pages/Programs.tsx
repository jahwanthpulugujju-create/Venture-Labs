import { Layout } from "@/components/Layout";
import { ProgramsSection } from "@/components/sections/ProgramsSection";
import { ProgramFinder } from "@/components/sections/ProgramFinder";
import { PageHero } from "@/components/PageHero";
import { FadeIn } from "@/components/FadeIn";

export default function Programs() {
  return (
    <Layout>
      <PageHero
        eyebrow="Programs & Initiatives"
        headline="A Program for Every Stage of Your Journey"
        sub="From hackathons to year-long incubation cohorts — we build pathways for every kind of innovator."
        image={`/images/cohort-launch.jpg`}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-4">
        <FadeIn>
          <ProgramFinder />
        </FadeIn>
      </div>
      <ProgramsSection />
    </Layout>
  );
}
