import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { FadeIn } from "@/components/FadeIn";
import { motion } from "framer-motion";
import {
  ArrowRight, ArrowUpRight,
  Lightbulb, Hammer, Rocket, TrendingUp,
  Users, FileCheck, Landmark, MessageSquare,
  Target, ShieldCheck,
  Quote
} from "lucide-react";

// ─── DATA ──────────────────────────────────────────────────────────
const stages = [
  {
    icon: Lightbulb,
    stage: "01",
    title: "Idea Stage",
    tag: "Failathon",
    desc: "Turn ambiguous problems into validated startup ideas through guided ideation, design thinking, and structured failure.",
    color: "group-hover:text-yellow-400",
    glow: "group-hover:shadow-yellow-400/10",
  },
  {
    icon: Hammer,
    stage: "02",
    title: "Build Stage",
    tag: "PIVOT Makeathon",
    desc: "Go from concept to working prototype in 24 hours. Rapid iteration, pitch prep, and resilience under pressure.",
    color: "group-hover:text-blue-400",
    glow: "group-hover:shadow-blue-400/10",
  },
  {
    icon: Target,
    stage: "03",
    title: "Impact Stage",
    tag: "EPICS / SAARTHIS",
    desc: "Build real solutions for real communities. Year-long programs that pair students with underserved problems.",
    color: "group-hover:text-emerald-400",
    glow: "group-hover:shadow-emerald-400/10",
  },
  {
    icon: Rocket,
    stage: "04",
    title: "Launch Stage",
    tag: "Pre-Incubation Cohort",
    desc: "Our flagship program. Resources, mentors, legal support, and an investor network to help you incorporate and scale.",
    color: "group-hover:text-primary",
    glow: "group-hover:shadow-primary/10",
    highlight: true,
  },
];

const ventures = [
  {
    name: "OLynk.AI",
    category: "SaaS · AI Operations",
    desc: "AI-powered virtual COO that automates operations for Indian D2C brands — reducing overhead and accelerating growth.",
    logo: "startup-olynk.png",
    logoBg: "#f5f0eb",
    badge: "3 Paying Clients",
  },
  {
    name: "Innovable Solutions",
    category: "AssistiveTech · EdTech",
    desc: "Award-winning platform delivering inclusive learning tools for children with cognitive and physical disabilities.",
    logo: "startup-innovable.png",
    logoBg: "#ffffff",
    badge: "200+ Users",
  },
  {
    name: "Nirvaha Wellness",
    category: "Wellness · HealthTech",
    desc: "Merging ancient Ayurvedic wisdom with modern AI to deliver personalised wellness journeys at scale.",
    logo: "startup-nirvaha.png",
    logoBg: "#0d2b2e",
    badge: "Beta Launched",
  },
];

const testimonials = [
  {
    quote: "VVLF gave us the structure to turn a classroom project into a company. The mentorship was world-class and the network opened doors we didn't know existed.",
    name: "Founder, OLynk.AI",
    role: "Pre-Incubation Cohort 1.0",
    logo: "startup-olynk.png",
    logoBg: "#f5f0eb",
  },
  {
    quote: "EPICS was the first time I worked on a problem that actually mattered. VVLF made it real — with real users, real feedback, and real stakes.",
    name: "EPICS Cohort Participant",
    role: "BVRIT Student, 2025",
    initials: "EP",
  },
  {
    quote: "Project SAARTHIS changed how I think about technology. Innovation isn't about the tool — it's about the person who needs it. VVLF gets that deeply.",
    name: "SAARTHIS Participant",
    role: "BVRIT Student, 2025",
    initials: "SA",
  },
];

const pillars = [
  { icon: Users, title: "Mentorship", desc: "Weekly 1:1s with industry veterans, domain experts, and serial founders.", example: "50+ startups mentored to date" },
  { icon: MessageSquare, title: "Product Guidance", desc: "Structured critiques, user testing sessions, and live product reviews to sharpen your MVP.", example: "Real users, real feedback, real stakes" },
  { icon: TrendingUp, title: "Community", desc: "A curated founder network — peer accountability, founder dinners, and alumni access.", example: "200+ innovators in the ecosystem" },
  { icon: Landmark, title: "Funding Access", desc: "Warm intros to seed funds, angels, and government grant programs across India.", example: "₹2Cr+ in funding enabled" },
  { icon: FileCheck, title: "Infrastructure", desc: "Dedicated desks, high-speed internet, maker lab, and server infrastructure on campus.", example: "Available day one, no waiting" },
  { icon: ShieldCheck, title: "Legal & IP Support", desc: "Company incorporation, trademark filings, and legal guidance from vetted professionals.", example: "4 ventures incorporated in Cohort 1.0" },
];

// ─── COMPONENT ─────────────────────────────────────────────────────
export default function Home() {
  return (
    <Layout>

      {/* ══ 1. HERO ══════════════════════════════════════════════════ */}
      <HeroSection />

      {/* ══ 2. ABOUT / VALUE PROP ════════════════════════════════════ */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Image */}
            <FadeIn direction="right">
              <div className="relative">
                {/* Accent block */}
                <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl bg-primary/8 -z-10" />
                {/* Stat chip */}
                <div className="absolute -bottom-5 -right-5 z-10 flex items-center gap-3 bg-[#080c14] text-white px-5 py-4 rounded-2xl shadow-2xl">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                    <Rocket className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xl font-display font-bold leading-none">4</p>
                    <p className="text-white/50 text-xs mt-0.5">Incorporated ventures</p>
                  </div>
                </div>
                <img
                  src={`${import.meta.env.BASE_URL}images/startup-networking.jpg`}
                  alt="VVLF Startup Ecosystem"
                  className="w-full rounded-3xl shadow-2xl object-cover aspect-[4/3]"
                />
              </div>
            </FadeIn>

            {/* Text */}
            <FadeIn direction="left">
              <div className="space-y-7">
                <div>
                  <p className="text-primary font-bold tracking-wider text-xs uppercase mb-3">
                    About VVLF
                  </p>
                  <h2 className="text-4xl md:text-5xl font-display font-bold text-[#080c14] leading-[1.1] mb-5">
                    Where Campus Ideas<br />Become Real Companies
                  </h2>
                  <p className="text-slate-500 text-lg leading-relaxed">
                    Vishnu Venture Labs Foundation (VVLF) is the incubation center of BV Raju Institute of Technology — a not-for-profit Section 8 company empowering early-stage student startups with world-class infrastructure, mentorship, and investor access.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Founded", value: "BVRIT Campus" },
                    { label: "Structure", value: "Section 8 Company" },
                    { label: "Cohort 1.0", value: "4 Ventures" },
                    { label: "Community", value: "200+ Innovators" },
                  ].map((item) => (
                    <div key={item.label} className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">{item.label}</p>
                      <p className="text-sm font-bold text-[#080c14]">{item.value}</p>
                    </div>
                  ))}
                </div>

                <Link href="/about">
                  <button className="group inline-flex items-center gap-2 text-sm font-bold text-[#080c14] border-b-2 border-[#080c14]/20 pb-0.5 hover:border-primary hover:text-primary transition-all">
                    Learn Our Story
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══ 3. PROGRAMS ══════════════════════════════════════════════ */}
      <section className="py-28 bg-[#080c14] relative overflow-hidden">
        {/* Ambient glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(30,90,255,0.06) 0%, transparent 70%)" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-2xl mb-16">
              <p className="text-primary font-bold tracking-wider text-xs uppercase mb-3">
                Programs
              </p>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-[1.1] mb-4">
                A Program for Every Stage of Your Journey
              </h2>
              <p className="text-white/40 text-lg">
                From first-time ideators to pre-launch founders — we meet you exactly where you are.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {stages.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.07}>
                <div
                  className={`group relative flex flex-col h-full p-7 rounded-3xl border transition-all duration-300 cursor-default hover:-translate-y-1.5 hover:shadow-2xl ${
                    s.highlight
                      ? "bg-white/5 border-primary/30 hover:border-primary/60 hover:bg-primary/5"
                      : "bg-white/[0.03] border-white/8 hover:border-white/20 hover:bg-white/[0.06]"
                  } ${s.glow}`}
                >
                  {s.highlight && (
                    <div className="absolute top-5 right-5 px-2.5 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-[10px] font-bold uppercase tracking-wider">
                      Flagship
                    </div>
                  )}

                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-colors group-hover:bg-white/10`}>
                      <s.icon className={`w-5 h-5 text-white/40 transition-colors ${s.color}`} />
                    </div>
                    <span className="text-white/20 text-xs font-mono font-bold">{s.stage}</span>
                  </div>

                  <p className="text-white/30 text-[10px] font-bold uppercase tracking-wider mb-1">{s.tag}</p>
                  <h3 className="text-white font-display font-bold text-lg mb-3 leading-snug">{s.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed flex-1">{s.desc}</p>

                  <Link href="/programs" className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-white/30 group-hover:text-white/70 transition-colors">
                    Learn more <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="flex justify-center">
              <Link href="/programs">
                <button className="group inline-flex items-center gap-2.5 bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 rounded-full text-sm shadow-[0_0_32px_rgba(30,90,255,0.3)] hover:-translate-y-0.5 transition-all">
                  View All Programs & Apply
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══ 4. VENTURES / PROOF ══════════════════════════════════════ */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
              <div>
                <p className="text-primary font-bold tracking-wider text-xs uppercase mb-3">Portfolio</p>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-[#080c14] leading-[1.1]">
                  Ventures Built Here
                </h2>
                <p className="text-slate-500 mt-3 text-lg max-w-md">
                  From student projects to incorporated companies — proof that the ecosystem works.
                </p>
              </div>
              <Link href="/startups">
                <button className="group shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#080c14]/10 text-[#080c14] font-bold text-sm hover:border-primary hover:text-primary transition-all">
                  Full Portfolio
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </Link>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {ventures.map((v, i) => (
              <FadeIn key={v.name} delay={i * 0.1}>
                <div className="group relative flex flex-col h-full rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden bg-white">

                  {/* Logo panel */}
                  <div
                    className="w-full h-44 flex items-center justify-center p-8 border-b border-slate-100 relative overflow-hidden"
                    style={{ backgroundColor: v.logoBg }}
                  >
                    <img
                      src={`${import.meta.env.BASE_URL}images/${v.logo}`}
                      alt={v.name}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Badge */}
                    <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-bold uppercase tracking-wider">
                      {v.badge}
                    </div>
                  </div>

                  <div className="p-7 flex flex-col flex-1">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">{v.category}</p>
                    <h3 className="text-xl font-display font-bold text-[#080c14] mb-3">{v.name}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed flex-1">{v.desc}</p>

                    <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider">
                        Pre-Incubation Cohort 1.0
                      </span>
                      <Link href="/startups">
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline">
                          View <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 5. TESTIMONIALS ══════════════════════════════════════════ */}
      <section className="py-28 bg-[#f7f8fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-xl mx-auto mb-16">
              <p className="text-primary font-bold tracking-wider text-xs uppercase mb-3">Voices from the Ecosystem</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-[#080c14] leading-[1.1]">
                Founders Who Built Here
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {testimonials.map((t, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group flex flex-col h-full bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-primary/15 transition-shadow duration-300 cursor-default"
                >
                  <motion.div
                    whileHover={{ rotate: -8, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="w-fit mb-5"
                  >
                    <Quote className="w-8 h-8 text-primary/20" />
                  </motion.div>
                  <p className="text-[#080c14] text-base leading-[1.7] flex-1 mb-8 font-medium">
                    "{t.quote}"
                  </p>
                  <div className="flex items-center gap-4 pt-5 border-t border-slate-100">
                    {t.logo ? (
                      <div
                        className="w-11 h-11 rounded-xl border border-slate-100 flex items-center justify-center p-1.5 shrink-0"
                        style={{ backgroundColor: t.logoBg }}
                      >
                        <img
                          src={`${import.meta.env.BASE_URL}images/${t.logo}`}
                          alt={t.name}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                    ) : (
                      <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center text-sm font-bold text-primary shrink-0">
                        {t.initials}
                      </div>
                    )}
                    <div>
                      <p className="font-bold text-[#080c14] text-sm leading-tight">{t.name}</p>
                      <p className="text-slate-400 text-xs mt-0.5">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 6. BUILDING BLOCKS ═══════════════════════════════════════ */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-primary font-bold tracking-wider text-xs uppercase mb-3">What You Get</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-[#080c14] leading-[1.1]">
                Everything You Need to Build a Startup
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mt-4">
                VVLF removes every excuse not to build. We give student founders the unfair advantage they deserve.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {pillars.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.05}>
                <div className="group p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:border-primary/15 hover:-translate-y-1 transition-all duration-300 cursor-default h-full flex flex-col">
                  <div className="w-10 h-10 rounded-xl bg-primary/8 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <p.icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-[#080c14] mb-2 leading-snug">{p.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed flex-1">{p.desc}</p>
                  <div className="mt-4 pt-3 border-t border-slate-100 overflow-hidden max-h-0 group-hover:max-h-10 transition-all duration-300">
                    <p className="text-xs font-semibold text-primary flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block shrink-0" />
                      {p.example}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 7. FINAL CTA ═════════════════════════════════════════════ */}
      <section className="py-32 bg-[#080c14] relative overflow-hidden">
        {/* Ambient glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 50% 100%, rgba(30,90,255,0.12) 0%, transparent 70%)",
          }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-white/50 text-xs font-semibold uppercase tracking-widest">
                Pre-Incubation Cohort 2.0 — Applications Open
              </span>
            </div>

            <h2
              className="font-display font-bold text-white leading-[1.06] mb-5"
              style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)" }}
            >
              Ready to Turn Your Idea Into a Startup?
            </h2>

            <p className="text-white/45 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Join VVLF and get access to mentorship, co-working space, funding connections, and a thriving innovation ecosystem. Limited seats available.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <button className="group inline-flex items-center gap-2.5 bg-primary hover:bg-primary/90 text-white font-bold px-10 py-4 rounded-full text-sm shadow-[0_0_40px_rgba(30,90,255,0.4)] hover:shadow-[0_0_60px_rgba(30,90,255,0.5)] hover:-translate-y-0.5 transition-all">
                  Apply for Incubation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </Link>
              <Link href="/programs">
                <button className="group inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm text-white font-semibold text-sm hover:bg-white/10 hover:border-white/25 transition-all">
                  Explore Programs
                  <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

    </Layout>
  );
}
