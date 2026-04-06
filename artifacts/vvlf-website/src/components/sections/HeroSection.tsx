import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import CountUp from "react-countup";

const stats = [
  { end: 50, suffix: "+", label: "Startups Built", sub: "From idea to incorporated" },
  { end: 200, suffix: "+", label: "Innovators Trained", sub: "Students → Founders" },
  { end: 4, suffix: "", label: "Cohort Ventures", sub: "Pre-Incubation 1.0" },
  { end: 2, prefix: "₹", suffix: "Cr+", label: "Funding Enabled", sub: "Seed & grants facilitated" },
];

const proofLogos = [
  { name: "OLynk.AI", logo: "startup-olynk.png", bg: "bg-[#f5f0eb]" },
  { name: "Innovable Solutions", logo: "startup-innovable.png", bg: "bg-white" },
  { name: "Nirvaha Wellness", logo: "startup-nirvaha.png", bg: "bg-[#0d2b2e]" },
  { name: "MXC Ignite", logo: "startup-mxc.png", bg: "bg-white" },
];

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between bg-[#080c14] overflow-hidden"
    >
      {/* ── BACKGROUND LAYERS ── */}

      {/* 1. Cinematic image */}
      <div className="absolute inset-0 z-0">
        <img
          src={`${import.meta.env.BASE_URL}images/cohort-milestone.jpg`}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center scale-105"
          style={{ filter: "saturate(0.6) brightness(0.45)" }}
        />
      </div>

      {/* 2. Multi-layer dark gradient for text readability */}
      <div className="absolute inset-0 z-[1]">
        {/* Left-to-right directional */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080c14]/95 via-[#080c14]/60 to-[#080c14]/20" />
        {/* Top */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080c14]/70 via-transparent to-transparent" />
        {/* Bottom ramp for stats bar */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080c14] via-[#080c14]/40 to-transparent" />
      </div>

      {/* 3. Radial vignette */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 80% at 50% 50%, transparent 30%, rgba(8,12,20,0.65) 100%)",
        }}
      />

      {/* 4. Subtle blue ambient glow top-right */}
      <div
        className="absolute top-[-10%] right-[-5%] w-[55vw] h-[55vw] rounded-full z-[2] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(30,90,255,0.07) 0%, transparent 70%)",
        }}
      />

      {/* ── CONTENT ── */}
      <div className="relative z-10 flex flex-col justify-center flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-36 pb-20">

        {/* Badge */}
        <div
          className="inline-flex items-center gap-2.5 self-start px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
          style={{ animationDelay: "0ms" }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1e5aff] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1e5aff]" />
          </span>
          <span className="text-white/70 text-xs font-semibold uppercase tracking-[0.15em]">
            Incubation Center · BV Raju Institute of Technology
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-display font-bold text-white leading-[1.04] tracking-tight mb-6 max-w-3xl"
          style={{ fontSize: "clamp(2.6rem, 6vw, 5rem)" }}
        >
          Build Real Startups.
          <br />
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(90deg, #4f8aff 0%, #7ab3ff 40%, #a0c8ff 70%, #4f8aff 100%)",
              backgroundSize: "200%",
              animation: "gradient 4s ease infinite",
            }}
          >
            Not Just Ideas.
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-white/60 text-lg sm:text-xl max-w-lg leading-relaxed mb-10 font-light">
          A launchpad for founders, builders, and student entrepreneurs ready to execute, launch, and grow.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
          <Link href="/contact">
            <button className="group inline-flex items-center gap-2.5 bg-[#1e5aff] hover:bg-[#2e6aff] text-white font-bold px-8 py-4 rounded-full text-sm shadow-[0_0_32px_rgba(30,90,255,0.35)] hover:shadow-[0_0_48px_rgba(30,90,255,0.5)] hover:-translate-y-0.5 transition-all duration-200">
              Apply Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </Link>
          <Link href="/programs">
            <button className="group inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white font-semibold text-sm hover:bg-white/10 hover:border-white/30 transition-all duration-200">
              Explore Programs
              <ArrowUpRight className="w-4 h-4 text-white/50 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </button>
          </Link>
        </div>

        {/* Trust line + proof logos */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-5">
          <p className="text-white/35 text-xs font-semibold uppercase tracking-widest shrink-0">
            Ventures launched here
          </p>
          <div className="flex items-center gap-3">
            {proofLogos.map((l) => (
              <div
                key={l.name}
                className={`w-10 h-10 rounded-xl ${l.bg} flex items-center justify-center border border-white/10 shadow-md p-1.5`}
                title={l.name}
              >
                <img
                  src={`${import.meta.env.BASE_URL}images/${l.logo}`}
                  alt={l.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
            <Link href="/startups">
              <span className="text-white/40 text-xs font-semibold hover:text-white/70 transition-colors cursor-pointer">
                + 3 more →
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* ── STATS BAR ── */}
      <div className="relative z-10 border-t border-white/8 bg-white/[0.03] backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-white/10">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center text-center px-4 py-2">
                <div
                  className="font-display font-bold text-white mb-0.5 tabular-nums"
                  style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
                >
                  {stat.prefix && <span>{stat.prefix}</span>}
                  <CountUp end={stat.end} duration={2.2} enableScrollSpy scrollSpyOnce />
                  {stat.suffix}
                </div>
                <div className="text-white/70 text-xs font-bold uppercase tracking-wider leading-tight">
                  {stat.label}
                </div>
                <div className="text-white/30 text-[10px] mt-0.5 leading-none">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
