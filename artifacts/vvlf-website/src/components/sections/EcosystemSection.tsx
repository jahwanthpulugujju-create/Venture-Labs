import { useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import { Building2, Users, FileCheck, Landmark, Network, Laptop, Server, Hammer, ExternalLink, Linkedin, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

const facilities = [
  { icon: Building2, title: "Co-Working Space", desc: "State-of-the-art office infrastructure." },
  { icon: Users, title: "Mentorship", desc: "Access to industry veterans and experts." },
  { icon: FileCheck, title: "IP Support", desc: "Guidance on patents and trademarks." },
  { icon: Landmark, title: "Funding", desc: "Seed fund connections and pitch prep." },
  { icon: Network, title: "Networking Events", desc: "Exclusive investor and founder meetups." },
  { icon: Laptop, title: "Software Tools", desc: "Free credits for AWS, GitHub, etc." },
  { icon: Server, title: "Tech Infrastructure", desc: "High-speed internet and servers." },
  { icon: Hammer, title: "Maker Lab", desc: "Hardware prototyping and 3D printing." },
];

const allStartups = [
  {
    name: "Innovable Solutions",
    desc: "Inclusive learning tools for children with disabilities",
    sdg: "SDG 4 — Quality Education",
    logo: "startup-innovable.png",
    logoBg: "bg-white",
    sector: "AssistiveTech",
    stage: "Incubated",
  },
  {
    name: "MXC Ignite",
    desc: "Student-led ecosystem connecting students with founders",
    sdg: "Edu-Tech",
    logo: "startup-mxc.png",
    logoBg: "bg-white",
    sector: "EdTech",
    stage: "Pre-Incubation",
  },
  {
    name: "Nirvaha Wellness",
    desc: "Wellness-tech blending ancient wisdom with AI",
    sdg: "Wellness & Mental Health",
    logo: "startup-nirvaha.png",
    logoBg: "bg-[#0d2b2e]",
    sector: "Wellness",
    stage: "Incubated",
  },
  {
    name: "OLynk.AI",
    desc: "AI-powered virtual COO for Indian D2C brands",
    sdg: "SaaS & AI",
    logo: "startup-olynk.png",
    logoBg: "bg-[#f5f0eb]",
    sector: "SaaS",
    stage: "Incubated",
  },
  {
    name: "SALO",
    desc: "Digital platform for booking salon and spa services",
    sdg: "Consumer Tech",
    logo: "startup-salo.png",
    logoBg: "bg-black",
    sector: "Consumer",
    stage: "Pre-Incubation",
  },
  {
    name: "Stud Entertainments",
    desc: "Filmmaking and tech startup delivering CinemaTech solutions",
    sdg: "Entertainment & Tech",
    logo: "startup-studento.png",
    logoBg: "bg-white",
    sector: "Entertainment",
    stage: "Incubated",
  },
  {
    name: "VIINDE Instruments",
    desc: "Smart dental solutions for practitioners",
    sdg: "HealthTech",
    logo: "startup-viinde.png",
    logoBg: "bg-white",
    sector: "HealthTech",
    stage: "Pre-Incubation",
  },
];

const sectors = ["All", "SaaS", "AssistiveTech", "EdTech", "Wellness", "HealthTech", "Entertainment", "Consumer"];
const stages = ["All Stages", "Incubated", "Pre-Incubation"];

export function EcosystemSection() {
  const [activeSector, setActiveSector] = useState("All");
  const [activeStage, setActiveStage] = useState("All Stages");

  const filtered = allStartups.filter((s) => {
    const sectorMatch = activeSector === "All" || s.sector === activeSector;
    const stageMatch = activeStage === "All Stages" || s.stage === activeStage;
    return sectorMatch && stageMatch;
  });

  return (
    <>
      {/* Facilities */}
      <section id="facilities" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-primary font-bold tracking-wider text-sm uppercase mb-2">Our Facilities</h2>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-navy">World-Class Infrastructure</h3>
              <p className="text-slate-500 mt-3">Everything a startup needs — from desk space to servers to expert mentors.</p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((fac, i) => (
              <FadeIn key={fac.title} delay={i * 0.05}>
                <div className="p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:border-primary/20 hover:-translate-y-1 transition-all group cursor-default">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    <fac.icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-navy mb-2">{fac.title}</h4>
                  <p className="text-sm text-slate-500">{fac.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Startup Portfolio with Filters */}
      <section id="startups" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mb-12">
              <h2 className="text-primary font-bold tracking-wider text-sm uppercase mb-2">Portfolio Startups</h2>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-navy mb-8">Ventures We Are Proud Of</h3>

              {/* Filters */}
              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex items-center gap-2 text-slate-500 text-sm font-semibold shrink-0">
                  <SlidersHorizontal className="w-4 h-4" />
                  Filter:
                </div>

                {/* Sector Filter */}
                <div className="flex flex-wrap gap-2">
                  {sectors.map((s) => (
                    <button
                      key={s}
                      onClick={() => setActiveSector(s)}
                      className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all border ${
                        activeSector === s
                          ? "bg-primary text-white border-primary shadow-md shadow-primary/20"
                          : "bg-white text-slate-600 border-slate-200 hover:border-primary/40 hover:text-primary"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>

                <div className="w-px h-6 bg-slate-200 hidden sm:block" />

                {/* Stage Filter */}
                <div className="flex flex-wrap gap-2">
                  {stages.map((s) => (
                    <button
                      key={s}
                      onClick={() => setActiveStage(s)}
                      className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all border ${
                        activeStage === s
                          ? "bg-navy text-white border-navy shadow-md"
                          : "bg-white text-slate-600 border-slate-200 hover:border-navy/40 hover:text-navy"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>

                <span className="ml-auto text-sm text-slate-400 font-medium shrink-0">
                  {filtered.length} venture{filtered.length !== 1 ? "s" : ""}
                </span>
              </div>
            </div>
          </FadeIn>

          {filtered.length === 0 ? (
            <FadeIn>
              <div className="text-center py-20 text-slate-400">
                <p className="text-lg font-semibold">No startups match this filter.</p>
                <button onClick={() => { setActiveSector("All"); setActiveStage("All Stages"); }} className="mt-4 text-primary font-semibold hover:underline text-sm">
                  Clear filters
                </button>
              </div>
            </FadeIn>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((startup, i) => (
                <FadeIn key={startup.name} delay={i * 0.06}>
                  <div className="bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col overflow-hidden group">
                    {/* Logo */}
                    <div className={`w-full h-44 ${startup.logoBg} flex items-center justify-center p-6 border-b border-slate-100`}>
                      <img
                        src={`${import.meta.env.BASE_URL}images/${startup.logo}`}
                        alt={startup.name}
                        className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-start justify-between mb-3 gap-2">
                        <div className="flex flex-wrap gap-2">
                          <span className="px-2.5 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">{startup.sector}</span>
                          <span className={`px-2.5 py-1 text-xs font-bold rounded-full ${startup.stage === "Incubated" ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-600"}`}>
                            {startup.stage}
                          </span>
                        </div>
                        <a href="#" className="text-slate-300 hover:text-[#0A66C2] transition-colors shrink-0">
                          <Linkedin className="w-4 h-4" />
                        </a>
                      </div>
                      <h4 className="text-lg font-bold text-navy leading-snug mb-2">{startup.name}</h4>
                      <p className="text-sm text-slate-500 flex-1 mb-4">{startup.desc}</p>
                      <div className="pt-4 border-t border-slate-100">
                        <p className="text-xs text-slate-400">{startup.sdg}</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
