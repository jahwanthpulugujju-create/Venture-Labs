import { useState, useRef, useEffect } from "react";
import { FadeIn } from "@/components/FadeIn";
import {
  Building2, Users, FileCheck, Landmark, Network,
  Laptop, Server, Hammer, Linkedin, SlidersHorizontal,
  TrendingUp, ExternalLink, BookOpen, Cpu, Handshake, Sprout
} from "lucide-react";

// ── 4-group ecosystem structure ──────────────────────────────────────
const ecosystemGroups = [
  {
    id: "build",
    icon: Building2,
    title: "Build",
    color: "text-blue-400",
    iconBg: "bg-blue-500/10 border-blue-500/20",
    items: [
      { icon: Building2, title: "Co-Working Space", desc: "Dedicated desks, meeting rooms, and high-speed internet on campus." },
      { icon: Server, title: "Technical Infrastructure", desc: "Servers, cloud credits, and a fully equipped maker lab for hardware teams." },
      { icon: Hammer, title: "Maker Lab", desc: "3D printers, prototyping tools, and hardware workshop for deep tech builds." },
    ],
  },
  {
    id: "learn",
    icon: BookOpen,
    title: "Learn",
    color: "text-yellow-400",
    iconBg: "bg-yellow-500/10 border-yellow-500/20",
    items: [
      { icon: Laptop, title: "Workshops & Bootcamps", desc: "Hands-on sessions on product, growth, design, and fundraising." },
      { icon: Users, title: "Mentorship", desc: "Weekly 1:1s with domain experts, industry veterans, and serial founders." },
    ],
  },
  {
    id: "connect",
    icon: Handshake,
    title: "Connect",
    color: "text-emerald-400",
    iconBg: "bg-emerald-500/10 border-emerald-500/20",
    items: [
      { icon: Network, title: "Networking Events", desc: "Exclusive investor meetups, founder dinners, and industry summits." },
      { icon: Cpu, title: "Ecosystem Access", desc: "Links to government programs, accelerators, and partner organizations." },
    ],
  },
  {
    id: "grow",
    icon: Sprout,
    title: "Grow",
    color: "text-purple-400",
    iconBg: "bg-purple-500/10 border-purple-500/20",
    items: [
      { icon: Landmark, title: "Funding Access", desc: "Warm intros to seed funds, angels, and government grant programs." },
      { icon: FileCheck, title: "IP & Legal Support", desc: "Company incorporation, trademark filings, and legal guidance." },
    ],
  },
];

// ── Startups data ────────────────────────────────────────────────────
const allStartups = [
  {
    name: "Innovable Solutions",
    desc: "Inclusive learning tools for children with disabilities",
    sdg: "SDG 4 — Quality Education",
    logo: "startup-innovable.png",
    logoBg: "bg-white",
    sector: "AssistiveTech",
    stage: "Incubated",
    founder: "BVRIT Student Team",
    traction: "200+ users · Active",
    linkedin: "#",
  },
  {
    name: "MXC Ignite",
    desc: "Student-led ecosystem connecting students with founders",
    sdg: "Edu-Tech Platform",
    logo: "startup-mxc.png",
    logoBg: "bg-white",
    sector: "EdTech",
    stage: "Pre-Incubation",
    founder: "BVRIT Student Team",
    traction: "Community Growing",
    linkedin: "#",
  },
  {
    name: "Nirvaha Wellness",
    desc: "Wellness-tech blending ancient wisdom with modern AI",
    sdg: "Wellness & Mental Health",
    logo: "startup-nirvaha.png",
    logoBg: "bg-[#0d2b2e]",
    sector: "Wellness",
    stage: "Incubated",
    founder: "BVRIT Student Team",
    traction: "Beta launched",
    linkedin: "#",
  },
  {
    name: "OLynk.AI",
    desc: "AI-powered virtual COO for Indian D2C brands",
    sdg: "SaaS & AI Operations",
    logo: "startup-olynk.png",
    logoBg: "bg-[#f5f0eb]",
    sector: "SaaS",
    stage: "Incubated",
    founder: "BVRIT Student Team",
    traction: "3 paying clients",
    linkedin: "#",
  },
  {
    name: "SALO",
    desc: "Digital platform for booking salon and spa services",
    sdg: "Consumer Tech",
    logo: "startup-salo.png",
    logoBg: "bg-black",
    sector: "Consumer",
    stage: "Pre-Incubation",
    founder: "BVRIT Student Team",
    traction: "MVP in progress",
    linkedin: "#",
  },
  {
    name: "Stud Entertainments",
    desc: "Filmmaking and tech startup delivering CinemaTech solutions",
    sdg: "Entertainment & Media",
    logo: "startup-studento.png",
    logoBg: "bg-white",
    sector: "Entertainment",
    stage: "Incubated",
    founder: "BVRIT Student Team",
    traction: "2 productions delivered",
    linkedin: "#",
  },
  {
    name: "VIINDE Instruments",
    desc: "Smart dental solutions for practitioners",
    sdg: "HealthTech Innovation",
    logo: "startup-viinde.png",
    logoBg: "bg-white",
    sector: "HealthTech",
    stage: "Pre-Incubation",
    founder: "BVRIT Student Team",
    traction: "Prototype ready",
    linkedin: "#",
  },
];

const sectors = ["All", "SaaS", "AssistiveTech", "EdTech", "Wellness", "HealthTech", "Entertainment", "Consumer"];
const stages = ["All Stages", "Incubated", "Pre-Incubation"];

const sectorColors: Record<string, string> = {
  SaaS: "bg-blue-100 text-blue-700",
  AssistiveTech: "bg-purple-100 text-purple-700",
  EdTech: "bg-indigo-100 text-indigo-700",
  Wellness: "bg-emerald-100 text-emerald-700",
  HealthTech: "bg-teal-100 text-teal-700",
  Entertainment: "bg-rose-100 text-rose-700",
  Consumer: "bg-orange-100 text-orange-700",
};

function StickyFilters({
  activeSector, setActiveSector,
  activeStage, setActiveStage,
  count,
}: {
  activeSector: string;
  setActiveSector: (s: string) => void;
  activeStage: string;
  setActiveStage: (s: string) => void;
  count: number;
}) {
  const [stuck, setStuck] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = document.createElement("div");
    sentinel.style.height = "1px";
    ref.current?.parentElement?.insertBefore(sentinel, ref.current);
    const obs = new IntersectionObserver(([e]) => setStuck(!e.isIntersecting), { threshold: 1 });
    obs.observe(sentinel);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`sticky top-[72px] z-30 transition-all duration-200 rounded-2xl mb-10 ${
        stuck ? "bg-white/95 backdrop-blur-md shadow-xl border border-slate-100 px-6 py-4" : "py-2"
      }`}
    >
      <div className="flex flex-wrap gap-3 items-center">
        <div className="flex items-center gap-2 text-slate-500 text-sm font-bold shrink-0">
          <SlidersHorizontal className="w-4 h-4" />
          Sector:
        </div>
        <div className="flex flex-wrap gap-2">
          {sectors.map((s) => (
            <button
              key={s}
              onClick={() => setActiveSector(s)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all border ${
                activeSector === s
                  ? "bg-primary text-white border-primary shadow-md shadow-primary/20 scale-105"
                  : "bg-white text-slate-600 border-slate-200 hover:border-primary/40 hover:text-primary hover:scale-105"
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        <div className="w-px h-5 bg-slate-200 hidden sm:block" />

        <div className="flex items-center gap-2 text-slate-500 text-sm font-bold shrink-0">Stage:</div>
        <div className="flex flex-wrap gap-2">
          {stages.map((s) => (
            <button
              key={s}
              onClick={() => setActiveStage(s)}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all border ${
                activeStage === s
                  ? "bg-[#0B0F19] text-white border-[#0B0F19] shadow-md scale-105"
                  : "bg-white text-slate-600 border-slate-200 hover:border-[#0B0F19]/40 hover:text-[#0B0F19] hover:scale-105"
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        <span className="ml-auto text-sm text-slate-400 font-medium shrink-0">
          {count} venture{count !== 1 ? "s" : ""}
        </span>
      </div>
    </div>
  );
}

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
      {/* ── Ecosystem Groups ── */}
      <section id="facilities" className="py-24 bg-[#0B0F19] relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(37,99,235,0.07) 0%, transparent 70%)" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-2xl mb-16">
              <p className="text-[#2563EB] font-bold tracking-wider text-xs uppercase mb-3">What We Offer</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-[1.1] mb-4">
                Everything You Need to Build and Scale
              </h2>
              <p className="text-white/40 text-lg leading-relaxed">
                Four pillars that give student founders an unfair advantage — from day one to incorporation.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ecosystemGroups.map((group, gi) => (
              <FadeIn key={group.id} delay={gi * 0.08}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur p-7 h-full hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300">
                  {/* Group header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${group.iconBg}`}>
                      <group.icon className={`w-5 h-5 ${group.color}`} />
                    </div>
                    <h3 className={`text-xl font-display font-bold ${group.color}`}>{group.title}</h3>
                  </div>

                  {/* Items */}
                  <div className="space-y-4">
                    {group.items.map((item) => (
                      <div key={item.title} className="flex gap-4">
                        <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center shrink-0 mt-0.5">
                          <item.icon className="w-4 h-4 text-white/40" />
                        </div>
                        <div>
                          <p className="text-white font-semibold text-sm leading-snug mb-0.5">{item.title}</p>
                          <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Startup Portfolio ── */}
      <section id="startups" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mb-6">
              <p className="text-[#2563EB] font-bold tracking-wider text-xs uppercase mb-3">Portfolio</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-[#0B0F19] leading-[1.1]">
                Startups Built by Our Founders
              </h2>
              <p className="text-slate-500 mt-3 text-lg max-w-xl">
                From student ideas to incorporated companies — these are the ventures born at VVLF.
              </p>
            </div>
          </FadeIn>

          <StickyFilters
            activeSector={activeSector}
            setActiveSector={setActiveSector}
            activeStage={activeStage}
            setActiveStage={setActiveStage}
            count={filtered.length}
          />

          {filtered.length === 0 ? (
            <FadeIn>
              <div className="text-center py-20 text-slate-400">
                <p className="text-lg font-semibold">No startups match this filter.</p>
                <button
                  onClick={() => { setActiveSector("All"); setActiveStage("All Stages"); }}
                  className="mt-4 text-[#2563EB] font-semibold hover:underline text-sm"
                >
                  Clear filters
                </button>
              </div>
            </FadeIn>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((startup, i) => (
                <FadeIn key={startup.name} delay={i * 0.06}>
                  <div className="bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col overflow-hidden group cursor-pointer">
                    {/* Logo */}
                    <div className={`w-full h-44 ${startup.logoBg} flex items-center justify-center p-6 border-b border-slate-100 relative overflow-hidden`}>
                      <img
                        src={`${import.meta.env.BASE_URL}images/${startup.logo}`}
                        alt={startup.name}
                        loading="lazy"
                        className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-[#0B0F19]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                        <a
                          href={startup.linkedin}
                          onClick={(e) => e.stopPropagation()}
                          className="w-10 h-10 rounded-full bg-[#0A66C2] flex items-center justify-center text-white hover:scale-110 transition-transform"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                        <a
                          href="#"
                          onClick={(e) => e.stopPropagation()}
                          className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#0B0F19] hover:scale-110 transition-transform"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className={`px-2.5 py-1 text-xs font-bold rounded-full ${sectorColors[startup.sector] || "bg-slate-100 text-slate-600"}`}>
                          {startup.sector}
                        </span>
                        <span className={`px-2.5 py-1 text-xs font-bold rounded-full ${startup.stage === "Incubated" ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-600"}`}>
                          {startup.stage}
                        </span>
                      </div>

                      <h4 className="text-lg font-bold text-[#0B0F19] leading-snug mb-1">{startup.name}</h4>
                      <p className="text-sm text-slate-500 flex-1 mb-4">{startup.desc}</p>

                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                        <div>
                          <p className="text-xs text-slate-400 mb-0.5">Team</p>
                          <p className="text-xs font-semibold text-[#0B0F19]">{startup.founder}</p>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-[#2563EB] bg-[#2563EB]/10 px-3 py-1.5 rounded-full">
                          <TrendingUp className="w-3 h-3" />
                          {startup.traction}
                        </div>
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
