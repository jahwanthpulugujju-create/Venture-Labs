import { Layout } from "@/components/Layout";
import { EcosystemSection } from "@/components/sections/EcosystemSection";
import { PageHero } from "@/components/PageHero";

export default function Startups() {
  return (
    <Layout>
      <PageHero
        eyebrow="Startup Ecosystem"
        headline="Everything You Need to Build and Scale a Startup"
        sub="World-class infrastructure, mentorship, and a portfolio of student-built ventures across every sector."
        image={`/images/startup-networking.jpg`}
      />
      <EcosystemSection />
    </Layout>
  );
}
