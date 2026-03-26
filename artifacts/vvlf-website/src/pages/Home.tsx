import { Link } from "wouter";
import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { FadeIn } from "@/components/FadeIn";
import { ArrowRight, Cpu, Microchip, UserCheck, Leaf, Building2, Users, FileCheck, Landmark, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const thrustAreas = [
  { icon: Cpu, title: "Deep Tech", desc: "AI, IoT, Robotics, and emerging technologies." },
  { icon: Microchip, title: "Semiconductors", desc: "Hardware innovation and chip design." },
  { icon: UserCheck, title: "Assistive Technology", desc: "Inclusive solutions for persons with disabilities." },
  { icon: Leaf, title: "Sustainability", desc: "Green tech and climate-focused innovations." },
];

const programs = [
  { title: "Failathon", tag: "Ideation", desc: "Reframe failure as a vital part of innovation.", img: "failathon.jpg", audience: "1st & 2nd Year Students" },
  { title: "PIVOT Makeathon", tag: "Building", desc: "24 hours of creativity, innovation, and teamwork.", img: "pivot.jpg", audience: "2nd & 3rd Year Students" },
  { title: "Project SAARTHIS", tag: "Social Impact", desc: "Co-create inclusive solutions for persons with disabilities.", img: "saarthis.jpg", audience: "All Years" },
  { title: "EPICS Cohort", tag: "Community", desc: "Mentoring student teams solving real community needs.", img: "epics-cohort.jpg", audience: "Multidisciplinary Teams" },
];

const facilities = [
  { icon: Building2, title: "Co-Working Space", desc: "State-of-the-art office infrastructure." },
  { icon: Users, title: "Mentorship", desc: "Access to industry veterans and experts." },
  { icon: FileCheck, title: "IP Support", desc: "Guidance on patents and trademarks." },
  { icon: Landmark, title: "Funding Access", desc: "Seed fund connections and pitch prep." },
];

const testimonials = [
  {
    quote: "VVLF gave us the structure to turn a classroom project into a company. The mentorship was world-class.",
    name: "Founder, OLynk.AI",
    role: "Pre-Incubation Cohort 1.0",
    img: "startup-olynk.png",
    bg: "bg-[#f5f0eb]",
  },
  {
    quote: "EPICS was the first time I worked on a problem that actually mattered. VVLF made it real.",
    name: "EPICS Cohort Participant",
    role: "BVRIT Student",
    img: null,
    initials: "EP",
    color: "bg-primary/10 text-primary",
  },
  {
    quote: "Project SAARTHIS taught me that innovation isn't about tech — it's about people. VVLF gets that.",
    name: "SAARTHIS Participant",
    role: "BVRIT Student",
    img: null,
    initials: "SA",
    color: "bg-emerald-100 text-emerald-700",
  },
];

const successStartups = [
  { name: "OLynk.AI", category: "SaaS", desc: "AI-powered virtual COO for Indian D2C brands", color: "bg-blue-500", logo: "startup-olynk.png", logoBg: "bg-[#f5f0eb]" },
  { name: "Innovable Solutions", category: "AssistiveTech", desc: "Inclusive learning tools for children with disabilities", color: "bg-purple-500", logo: "startup-innovable.png", logoBg: "bg-white" },
  { name: "Nirvaha Wellness", category: "Wellness", desc: "Wellness-tech blending ancient wisdom with modern AI", color: "bg-emerald-500", logo: "startup-nirvaha.png", logoBg: "bg-[#0d2b2e]" },
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
                  <h3 className="text-4xl font-display font-bold text-navy mb-4">Where Campus Ideas Become Real Companies</h3>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    Vishnu Venture Labs Foundation (VVLF) is the incubation center of BV Raju Institute of Technology — a not-for-profit Section 8 Company empowering early-stage student startups with world-class infrastructure, mentorship, and industry networks.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {thrustAreas.map((area) => (
                    <div key={area.title} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-primary/20 hover:bg-white transition-all">
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
                    Our Mission & Vision
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
              <h3 className="text-3xl md:text-4xl font-display font-bold text-navy">A Program for Every Stage of Your Journey</h3>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {programs.map((program, i) => (
              <FadeIn key={program.title} delay={i * 0.08}>
                <div className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
                  <div className="aspect-video overflow-hidden bg-slate-100 relative">
                    <img
                      src={`${import.meta.env.BASE_URL}images/${program.img}`}
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-navy/30 group-hover:bg-transparent transition-colors duration-300" />
                    <span className="absolute top-3 left-3 px-2.5 py-1 bg-primary text-white text-xs font-bold rounded-full">
                      {program.tag}
                    </span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h4 className="font-bold text-navy text-base mb-1">{program.title}</h4>
                    <p className="text-xs text-primary font-semibold mb-2">{program.audience}</p>
                    <p className="text-sm text-slate-500 flex-1">{program.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <div className="text-center">
              <Link href="/programs">
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 shadow-lg shadow-primary/20 group">
                  View All Programs & Apply
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Startup Success Stories */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <h2 className="text-primary font-bold tracking-wider text-sm uppercase mb-2">Startup Stories</h2>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-navy">Ventures We Are Proud Of</h3>
                <p className="text-slate-500 mt-2 text-lg">From student ideas to incorporated companies.</p>
              </div>
              <Link href="/startups">
                <Button variant="outline" className="rounded-full border-slate-300 shrink-0 group">
                  Full Portfolio
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStartups.map((s, i) => (
              <FadeIn key={s.name} delay={i * 0.1}>
                <div className="group bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                  <div className={`w-full h-40 ${s.logoBg} flex items-center justify-center p-6 border-b border-slate-100`}>
                    <img src={`${import.meta.env.BASE_URL}images/${s.logo}`} alt={s.name} className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`w-2 h-2 rounded-full ${s.color}`}></span>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{s.category}</span>
                    </div>
                    <h4 className="text-lg font-bold text-navy mb-2">{s.name}</h4>
                    <p className="text-sm text-slate-500">{s.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-primary font-bold tracking-wider text-sm uppercase mb-2">Voices from the Ecosystem</h2>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-navy">What Our Innovators Say</h3>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-lg transition-all h-full flex flex-col">
                  <Quote className="w-8 h-8 text-primary/20 mb-4 shrink-0" />
                  <p className="text-slate-600 text-base leading-relaxed italic flex-1 mb-6">"{t.quote}"</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                    {t.img ? (
                      <div className={`w-10 h-10 rounded-full overflow-hidden ${t.bg}`}>
                        <img src={`${import.meta.env.BASE_URL}images/${t.img}`} alt={t.name} className="w-full h-full object-contain" />
                      </div>
                    ) : (
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${t.color}`}>
                        {t.initials}
                      </div>
                    )}
                    <div>
                      <p className="font-bold text-navy text-sm">{t.name}</p>
                      <p className="text-xs text-slate-400">{t.role}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Teaser */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-primary font-bold tracking-wider text-sm uppercase mb-2">World-Class Infrastructure</h2>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-navy">Everything You Need to Build</h3>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {facilities.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08}>
                <div className="p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:border-primary/20 hover:-translate-y-1 transition-all group cursor-default">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
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
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 leading-tight">
              Ready to Turn Your Idea Into a Startup?
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">
              Join VVLF and get access to mentorship, co-working space, funding connections, and a thriving innovation ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="h-14 px-10 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg shadow-primary/30 hover:-translate-y-1 transition-all font-semibold text-base group">
                  Apply for Incubation
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/programs">
                <Button size="lg" variant="outline" className="h-14 px-10 border-white/20 text-white hover:bg-white hover:text-navy rounded-full transition-all font-semibold text-base">
                  Explore Programs
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
}
