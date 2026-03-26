import { Link } from "wouter";
import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Rocket, Users } from "lucide-react";
import CountUp from "react-countup";

const stats = [
  { end: 50, suffix: "+", label: "Startups Built" },
  { end: 200, suffix: "+", label: "Innovators Trained" },
  { end: 2, prefix: "₹", suffix: "Cr+", label: "Funding Enabled" },
  { end: 4, suffix: "", label: "Incorporated Ventures" },
];

const journeys = [
  {
    icon: GraduationCap,
    role: "Student",
    action: "Explore Programs",
    href: "/programs",
    color: "from-blue-500/20 to-blue-600/10 border-blue-400/30 hover:border-blue-400/60",
    iconColor: "text-blue-300",
  },
  {
    icon: Rocket,
    role: "Founder",
    action: "Apply for Incubation",
    href: "/contact",
    color: "from-primary/20 to-primary/10 border-primary/30 hover:border-primary/60",
    iconColor: "text-primary",
  },
  {
    icon: Users,
    role: "Visitor",
    action: "Explore Startups",
    href: "/startups",
    color: "from-emerald-500/20 to-emerald-600/10 border-emerald-400/30 hover:border-emerald-400/60",
    iconColor: "text-emerald-300",
  },
];

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center bg-navy overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={`${import.meta.env.BASE_URL}images/failathon.jpg`}
          alt="VVLF innovators"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/80 to-navy" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-36 pb-32">
        <div className="max-w-3xl">
          <FadeIn delay={0.05}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary font-semibold text-sm mb-8 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              INCUBATION CENTER OF BVRIT
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.08] mb-6 tracking-tight">
              Build Real Startups.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%] animate-gradient">
                Not Just Ideas.
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.25}>
            <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-xl leading-relaxed">
              Vishnu Venture Labs Foundation gives student innovators the mentorship, infrastructure, and funding to go from idea to incorporated venture — in the heart of BVRIT.
            </p>
          </FadeIn>

          <FadeIn delay={0.35}>
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link href="/contact">
                <Button size="lg" className="h-14 px-8 text-base bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg shadow-primary/30 hover:-translate-y-1 transition-all group font-semibold">
                  Apply for Incubation
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/startups">
                <Button variant="outline" size="lg" className="h-14 px-8 text-base border-white/25 text-white hover:bg-white hover:text-navy rounded-full transition-all font-semibold backdrop-blur-sm">
                  Explore Startups
                </Button>
              </Link>
            </div>
          </FadeIn>

          {/* User Journey Paths */}
          <FadeIn delay={0.45}>
            <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Where do you fit?</p>
            <div className="flex flex-col sm:flex-row gap-3">
              {journeys.map((j) => (
                <Link key={j.role} href={j.href}>
                  <div className={`group flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-r ${j.color} border backdrop-blur-md cursor-pointer transition-all duration-200 hover:-translate-y-0.5`}>
                    <j.icon className={`w-5 h-5 ${j.iconColor} shrink-0`} />
                    <div>
                      <p className="text-xs text-white/50 font-medium">{j.role}</p>
                      <p className="text-sm text-white font-semibold leading-tight">{j.action} →</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Impact Stats Strip */}
      <div className="absolute bottom-0 w-full bg-white/5 backdrop-blur-xl border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-7">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x divide-white/10">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center px-4">
                <div className="text-3xl md:text-4xl font-display font-bold text-white mb-1">
                  {stat.prefix && <span>{stat.prefix}</span>}
                  <CountUp end={stat.end} duration={2.5} enableScrollSpy scrollSpyOnce />
                  {stat.suffix}
                </div>
                <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
