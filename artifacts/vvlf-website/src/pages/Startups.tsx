import { Layout } from "@/components/Layout";
import { EcosystemSection } from "@/components/sections/EcosystemSection";
import { PageHero } from "@/components/PageHero";

export default function Startups() {
  return (
    <Layout>
      <PageHero
        eyebrow="Startup Ecosystem"
        headline="Student-Led Ventures, Built to Scale"
        sub="From campus ideation to incorporated companies — explore the VVLF portfolio and the support system behind every founder."
        image={`/images/startup-networking.jpg`}
      />
      <EcosystemSection />
    </Layout>
  );
}
