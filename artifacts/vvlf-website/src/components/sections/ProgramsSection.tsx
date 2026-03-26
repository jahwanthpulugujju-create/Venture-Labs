import { useState } from "react";
import { Link } from "wouter";
import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lightbulb, Hammer, TrendingUp, Users, Clock, CheckCircle2, Bell, Flame, Timer } from "lucide-react";

const programs = [
  {
    id: "failathon",
    title: "Failathon",
    tag: "Ideation",
    tagColor: "bg-blue-100 text-blue-700",
    img: "failathon.jpg",
    what: "A one-day innovation event centered on the motto 'Come, let's Fail, and Learn.' Students use ideation tools to explore problems and reframe failure as a catalyst for growth.",
    who: "1st & 2nd Year Students at BVRIT",
    benefits: [
      "Ideation & design thinking skills",
      "Exposure to real problem statements",
      "Certificate of participation",
      "Team collaboration experience",
    ],
    timeline: "1 Day · Usually held each semester",
    status: "open",
    icon: Lightbulb,
  },
  {
    id: "pivot",
    title: "PIVOT Makeathon",
    tag: "Building",
    tagColor: "bg-orange-100 text-orange-700",
    img: "pivot.jpg",
    what: "A high-energy 24-hour Makeathon where student teams go from brainstorming to working prototypes. Emphasizes resilience, rapid iteration, and creative problem-solving.",
    who: "2nd & 3rd Year Students",
    benefits: [
      "Prototype development skills",
      "Pitching & storytelling",
      "Rapid MVP building",
      "Cash prizes for top teams",
    ],
    timeline: "24 Hours · Bi-annual event",
    status: "open",
    icon: Hammer,
  },
  {
    id: "saarthis",
    title: "Project SAARTHIS",
    tag: "Social Impact",
    tagColor: "bg-emerald-100 text-emerald-700",
    img: "saarthis.jpg",
    what: "A year-long innovation journey by VVLF, BVRIT, and Kaiteki Innovations to co-create accessible, inclusive solutions for persons with disabilities.",
    who: "All Years — focused on Assistive Technology",
    benefits: [
      "Human-centered design exposure",
      "Inclusive innovation skills",
      "Industry partner collaboration",
      "Real user testing experience",
    ],
    timeline: "Year-Long · Rolling admissions",
    status: "open",
    icon: Users,
  },
  {
    id: "epics",
    title: "EPICS Cohort",
    tag: "Community",
    tagColor: "bg-purple-100 text-purple-700",
    img: "epics-cohort.jpg",
    what: "VVLF mentored 49 multidisciplinary student teams developing tangible solutions for pressing community needs. True innovation stems from direct engagement with real-world challenges.",
    who: "Multidisciplinary teams across all years",
    benefits: [
      "Real-world problem solving",
      "Mentorship from industry experts",
      "Community impact portfolio",
      "Certificate of completion",
    ],
    timeline: "8 Weeks · Applications each semester",
    status: "closing",
    icon: TrendingUp,
  },
];

const preIncubationStartups = [
  { name: "OLynk.AI", category: "SaaS", color: "bg-blue-500" },
  { name: "MXC", category: "Edu-Tech", color: "bg-indigo-500" },
  { name: "Stud Entertainments", category: "Entertainment", color: "bg-rose-500" },
  { name: "Nirvaha Wellness", category: "Wellness", color: "bg-emerald-500" },
];

function ScarcityBanner() {
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-2xl px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
          <Flame className="w-5 h-5 text-amber-600" />
        </div>
        <div>
          <p className="font-bold text-amber-900 text-sm">Pre-Incubation Cohort 2.0 — Applications Now Open</p>
          <p className="text-amber-700 text-xs">Limited seats. Priority given to early applicants. Applications close soon.</p>
        </div>
      </div>
      <Link href="/contact" className="shrink-0">
        <Button size="sm" className="bg-amber-500 hover:bg-amber-600 text-white rounded-full px-6 shadow-md font-semibold whitespace-nowrap">
          Apply Now →
        </Button>
      </Link>
    </div>
  );
}

export function ProgramsSection() {
  const [notifyOpen, setNotifyOpen] = useState<string | null>(null);

  return (
    <section id="programs" className="py-24 bg-background">

      {/* Scarcity Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <FadeIn>
          <ScarcityBanner />
        </FadeIn>
      </div>

      {/* Innovation Flow Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <FadeIn>
          <div className="bg-navy rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
            <div className="relative z-10 text-center md:text-left">
              <p className="text-primary font-bold text-sm uppercase tracking-widest mb-2">Your Innovation Journey</p>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white">Idea → Prototype → Startup → Scale</h3>
            </div>
            <div className="relative z-10 flex items-center gap-3 text-white shrink-0">
              <div className="text-center px-5 py-3 rounded-2xl bg-white/10 border border-white/20">
                <Lightbulb className="w-6 h-6 mx-auto mb-1 text-yellow-400" />
                <p className="text-xs font-semibold">Ideate</p>
              </div>
              <ArrowRight className="w-4 h-4 text-white/40 shrink-0" />
              <div className="text-center px-5 py-3 rounded-2xl bg-white/10 border border-white/20">
                <Hammer className="w-6 h-6 mx-auto mb-1 text-blue-400" />
                <p className="text-xs font-semibold">Build</p>
              </div>
              <ArrowRight className="w-4 h-4 text-white/40 shrink-0" />
              <div className="text-center px-5 py-3 rounded-2xl bg-primary/20 border border-primary/40">
                <TrendingUp className="w-6 h-6 mx-auto mb-1 text-primary" />
                <p className="text-xs font-semibold">Scale</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Program Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="space-y-24">
          {programs.map((program, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div key={program.id} id={program.id}>
                <FadeIn direction={isLeft ? "right" : "left"}>
                  <div className={`flex flex-col lg:flex-row gap-12 items-center ${isLeft ? "" : "lg:flex-row-reverse"}`}>
                    {/* Image */}
                    <div className="w-full lg:w-1/2">
                      <div className="relative group rounded-3xl overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors z-10" />
                        <img
                          src={`${import.meta.env.BASE_URL}images/${program.img}`}
                          alt={program.title}
                          className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                          <span className={`px-3 py-1.5 rounded-full text-xs font-bold ${program.tagColor}`}>
                            {program.tag}
                          </span>
                          {program.status === "closing" && (
                            <span className="flex items-center gap-1 px-3 py-1.5 bg-red-500 text-white text-xs font-bold rounded-full shadow-lg animate-pulse">
                              <Timer className="w-3 h-3" /> Closing Soon
                            </span>
                          )}
                        </div>
                        <div className="absolute bottom-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full">
                          <Clock className="w-3.5 h-3.5 text-slate-500" />
                          <span className="text-xs font-semibold text-slate-700">{program.timeline}</span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="w-full lg:w-1/2 space-y-6">
                      <div>
                        <h4 className="text-3xl font-display font-bold text-navy mb-4">{program.title}</h4>

                        <div className="space-y-5">
                          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 flex items-center gap-1.5">
                              <span className="w-4 h-px bg-slate-300 inline-block" /> What is this?
                            </p>
                            <p className="text-slate-600 leading-relaxed text-sm">{program.what}</p>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-primary/5 rounded-2xl p-4 border border-primary/10">
                              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">Who is it for?</p>
                              <p className="text-navy font-semibold text-sm leading-snug">{program.who}</p>
                            </div>
                            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100">
                              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Timeline</p>
                              <p className="text-navy font-semibold text-sm leading-snug">{program.timeline}</p>
                            </div>
                          </div>

                          <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-1.5">
                              <span className="w-4 h-px bg-slate-300 inline-block" /> What you get
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {program.benefits.map((b) => (
                                <li key={b} className="flex items-center gap-2 text-slate-600 text-sm">
                                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                                  {b}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* CTAs */}
                      <div className="flex flex-wrap gap-3">
                        <Link href="/contact">
                          <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-7 shadow-lg shadow-primary/20 group">
                            Apply for {program.title}
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                        <button
                          onClick={() => setNotifyOpen(notifyOpen === program.id ? null : program.id)}
                          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-slate-200 text-slate-600 text-sm font-semibold hover:border-primary hover:text-primary transition-colors"
                        >
                          <Bell className="w-4 h-4" />
                          Notify Me
                        </button>
                      </div>
                      {notifyOpen === program.id && (
                        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-4 text-sm text-primary font-medium">
                          ✓ You'll be notified when {program.title} applications open. Add vvlf@bvrit.ac.in to your contacts.
                        </div>
                      )}
                    </div>
                  </div>
                </FadeIn>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pre-Incubation Highlight */}
      <div id="pre-incubation" className="bg-navy py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary font-semibold text-sm mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                Flagship Program · Applications Open
              </span>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Pre-Incubation Cohort 2.0</h3>
              <p className="text-lg text-slate-300 mb-3">
                Following the successful Cohort 1.0 which produced 4 incorporated ventures, we're launching Cohort 2.0 with expanded support and mentorship.
              </p>
              <p className="text-amber-400 font-semibold text-sm mb-8 flex items-center justify-center gap-2">
                <Timer className="w-4 h-4" />
                Limited seats available — Applications closing soon
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 shadow-lg shadow-primary/30 group">
                    Apply for Cohort 2.0
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/startups">
                  <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white hover:text-navy rounded-full transition-all">
                    See Cohort 1.0 Startups
                  </Button>
                </Link>
              </div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {preIncubationStartups.map((startup, i) => (
              <FadeIn key={startup.name} delay={i * 0.1}>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all cursor-pointer group">
                  <div className={`w-12 h-12 rounded-xl ${startup.color} flex items-center justify-center text-white font-bold text-xl mb-4 shadow-lg`}>
                    {startup.name.charAt(0)}
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1">{startup.name}</h4>
                  <p className="text-slate-400 text-sm mb-4">{startup.category}</p>
                  <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                    Incorporated
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
