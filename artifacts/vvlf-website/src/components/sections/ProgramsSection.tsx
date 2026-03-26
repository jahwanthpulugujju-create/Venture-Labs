import { Link } from "wouter";
import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lightbulb, Hammer, TrendingUp, Users, Clock, CheckCircle2 } from "lucide-react";

const programs = [
  {
    id: "failathon",
    title: "Failathon",
    tag: "Ideation",
    tagColor: "bg-blue-100 text-blue-700",
    img: "failathon.jpg",
    what: "A one-day innovation event centered on the motto 'Come, let's Fail, and Learn.' Students use ideation tools to explore problems and reframe failure as a catalyst for growth.",
    who: "1st & 2nd Year Students at BVRIT",
    outcomes: ["Ideation & design thinking skills", "Exposure to real problem statements", "Team collaboration experience"],
    duration: "1 Day",
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
    outcomes: ["Prototype development skills", "Pitching & storytelling", "Rapid MVP building"],
    duration: "24 Hours",
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
    outcomes: ["Human-centered design exposure", "Inclusive innovation skills", "Collaboration with industry partners"],
    duration: "Year-Long",
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
    outcomes: ["Real-world problem solving", "Mentorship from industry experts", "Community impact experience"],
    duration: "8 Weeks",
    icon: TrendingUp,
  },
];

const preIncubationStartups = [
  { name: "OLynk.AI", category: "SaaS", color: "bg-blue-500" },
  { name: "MXC", category: "Edu-Tech", color: "bg-indigo-500" },
  { name: "Stud Entertainments", category: "Entertainment", color: "bg-rose-500" },
  { name: "Nirvaha Wellness", category: "Wellness", color: "bg-emerald-500" },
];

export function ProgramsSection() {
  return (
    <section id="programs" className="py-24 bg-background">

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
        <div className="space-y-20">
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
                        <div className="absolute top-4 left-4 z-20">
                          <span className={`px-3 py-1.5 rounded-full text-xs font-bold ${program.tagColor}`}>
                            {program.tag}
                          </span>
                        </div>
                        <div className="absolute bottom-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full">
                          <Clock className="w-3.5 h-3.5 text-slate-500" />
                          <span className="text-xs font-semibold text-slate-700">{program.duration}</span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="w-full lg:w-1/2 space-y-6">
                      <div>
                        <h4 className="text-3xl font-display font-bold text-navy mb-4">{program.title}</h4>

                        <div className="space-y-5">
                          <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">What is this?</p>
                            <p className="text-slate-600 leading-relaxed">{program.what}</p>
                          </div>
                          <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Who is it for?</p>
                            <p className="text-slate-700 font-semibold">{program.who}</p>
                          </div>
                          <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">What you get</p>
                            <ul className="space-y-2">
                              {program.outcomes.map((o) => (
                                <li key={o} className="flex items-center gap-2 text-slate-600 text-sm">
                                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                                  {o}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <Link href="/contact">
                        <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-7 shadow-lg shadow-primary/20 group">
                          Apply for {program.title}
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
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
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary font-semibold text-sm mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Flagship Program
              </span>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Pre-Incubation Cohort 1.0</h3>
              <p className="text-lg text-slate-300 mb-4">
                Our inaugural Pre-Incubation Cohort has successfully concluded, resulting in the incubation of four promising startups — now incorporated ventures.
              </p>
              <p className="text-slate-400 mb-8">Applications for Cohort 2.0 open soon.</p>
              <Link href="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 shadow-lg shadow-primary/30 group">
                  Register Your Interest
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {preIncubationStartups.map((startup, i) => (
              <FadeIn key={startup.name} delay={i * 0.1}>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all cursor-pointer group">
                  <div className={`w-12 h-12 rounded-xl ${startup.color} flex items-center justify-center text-white font-bold text-xl mb-6 shadow-lg`}>
                    {startup.name.charAt(0)}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{startup.name}</h4>
                  <p className="text-slate-400 text-sm">{startup.category}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
