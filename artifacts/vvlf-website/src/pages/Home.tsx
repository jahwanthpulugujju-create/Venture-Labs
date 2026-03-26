import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { FadeIn } from "@/components/FadeIn";
import { ArrowRight, Cpu, Microchip, UserCheck, Leaf, Building2, Users, FileCheck, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";

const thrustAreas = [
  { icon: Cpu, title: "Deep Tech", desc: "AI, IoT, Robotics, and emerging technologies." },
  { icon: Microchip, title: "Semiconductors", desc: "Hardware innovation and chip design." },
  { icon: UserCheck, title: "Assistive Technology", desc: "Inclusive solutions for persons with disabilities." },
  { icon: Leaf, title: "Sustainability", desc: "Green tech and climate-focused innovations." },
];

const programs = [
  { title: "Failathon", desc: "Reframe failure as a vital part of innovation.", img: "failathon.jpg" },
  { title: "PIVOT Makeathon", desc: "24 hours of creativity, innovation, and teamwork.", img: "pivot.jpg" },
  { title: "Project SAARTHIS", desc: "Co-create inclusive solutions for persons with disabilities.", img: "saarthis.jpg" },
  { title: "EPICS Cohort", desc: "Mentoring student teams solving real community needs.", img: "epics-cohort.jpg" },
];

const highlights = [
  { icon: Building2, title: "Co-Working Space", desc: "State-of-the-art office infrastructure." },
  { icon: Users, title: "Mentorship", desc: "Access to industry veterans and experts." },
  { icon: FileCheck, title: "IP Support", desc: "Guidance on patents and trademarks." },
  { icon: Landmark, title: "Funding Access", desc: "Seed fund connections and pitch prep." },
];

export default function Home() {
  return (
    <Layout>
      {/* Hero */}
      <HeroSection />

      {/* About Teaser */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/10 rounded-3xl translate-x-4 translate-y-4 -z-10" />
                <img
                  src={`${import.meta.env.BASE_URL}images/startup-networking.jpg`}
                  alt="VVLF Startup Ecosystem"
                  className="w-full rounded-3xl shadow-xl object-cover aspect-square"
                />
              </div>
            </FadeIn>
            <FadeIn direction="left">
              <div className="space-y-6">
                <div>
                  <h2 className="text-primary font-bold tracking-wider text-sm uppercase mb-2">About VVLF</h2>
                  <h3 className="text-4xl font-display font-bold text-navy mb-4">Empowering Innovators for Global Impact</h3>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    Vishnu Venture Labs Foundation (VVLF) is the incubation center of BV Raju Institute of Technology, operating as a not-for-profit Section 8 Company. We empower early-stage startups, innovators, and researchers with world-class infrastructure, mentorship, and industry networks.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {thrustAreas.map((area) => (
                    <div key={area.title} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100">
                      <area.icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-navy text-sm">{area.title}</p>
                        <p className="text-xs text-slate-500">{area.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link href="/about">
                  <Button variant="outline" className="rounded-full border-slate-300 group">
                    Learn More About Us
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Programs Teaser */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-primary font-bold tracking-wider text-sm uppercase mb-2">Our Programs</h2>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-navy">Empowering the Next Generation</h3>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {programs.map((program, i) => (
              <FadeIn key={program.title} delay={i * 0.08}>
                <div className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="aspect-video overflow-hidden bg-slate-100">
                    <img
                      src={`${import.meta.env.BASE_URL}images/${program.img}`}
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <h4 className="font-bold text-navy text-base mb-2">{program.title}</h4>
                    <p className="text-sm text-slate-500">{program.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <div className="text-center">
              <Link href="/programs">
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 group">
                  View All Programs
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Facilities Teaser */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-primary font-bold tracking-wider text-sm uppercase mb-2">World-Class Infrastructure</h2>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-navy">Everything You Need to Build</h3>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {highlights.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08}>
                <div className="p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:border-primary/20 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-navy mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-500">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <div className="text-center">
              <Link href="/startups">
                <Button variant="outline" className="rounded-full border-slate-300 group">
                  Explore Our Ecosystem
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Ready to Turn Your Idea Into a Startup?
            </h2>
            <p className="text-slate-300 text-lg mb-8">
              Join VVLF and get access to mentorship, infrastructure, and a thriving innovation ecosystem.
            </p>
            <Link href="/contact">
              <Button size="lg" className="h-14 px-10 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg shadow-primary/30 hover:-translate-y-1 transition-all font-semibold text-base group">
                Apply Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
}
