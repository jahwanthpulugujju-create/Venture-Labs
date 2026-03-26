import { useState } from "react";
import { Link } from "wouter";
import { FadeIn } from "@/components/FadeIn";
import { ArrowRight, Calendar, Filter, Bell, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const upcomingEvents = [
  {
    title: "Pre-Incubation Cohort 2.0 Info Session",
    date: "Coming Soon",
    location: "BVRIT Campus, Narsapur",
    type: "Milestone",
    desc: "Learn everything about applying to VVLF's flagship incubation program. Meet the team, ask questions, and get your application reviewed.",
    cta: "Register Interest",
  },
  {
    title: "PIVOT Makeathon 2.0",
    date: "Upcoming",
    location: "BVRIT Innovation Hub",
    type: "Program",
    desc: "The next edition of our 24-hour makeathon is coming. Form your team, register early, and get ready to build.",
    cta: "Register Now",
  },
];

const events = [
  { date: "AUG 4, 2025", month: "AUG", day: "4", year: "2025", type: "Milestone", title: "Milestone at Vishnu Venture Labs", desc: "Startups from COHORT 1.0 have officially been incorporated, turning bold ideas into real ventures.", img: "cohort-milestone.jpg" },
  { date: "JUL 24, 2025", month: "JUL", day: "24", year: "2025", type: "Community", title: "Fostering Grassroots Innovation", desc: "Supporting the Innovators' Introductory Meet for grassroots innovators from Medak district.", img: "grassroots-meet.jpg" },
  { date: "JUL 10, 2025", month: "JUL", day: "10", year: "2025", type: "Program", title: "Project SAARTHIS: Be the Change", desc: "Empowering students to lead inclusive innovation and drive meaningful improvements on campus.", img: "saarthis-session.jpg" },
  { date: "JUL 8, 2025", month: "JUL", day: "8", year: "2025", type: "Workshop", title: "Business Launch Workshop", desc: "A hands-on workshop guiding future founders through idea validation, financial planning, and scaling.", img: "business-launch-workshop.jpg" },
  { date: "MAY 1, 2025", month: "MAY", day: "1", year: "2025", type: "Program", title: "EPICS Cohort — Purpose Meets Innovation", desc: "VVLF mentored 49 multidisciplinary student teams developing solutions for real-world community needs.", img: "epics-cohort.jpg" },
  { date: "FEB 28, 2025", month: "FEB", day: "28", year: "2025", type: "Milestone", title: "Pre-Incubation Cohort 1.0 Launch", desc: "Launched our flagship Pre-Incubation Cohort with expert mentorship, resources, and startup ecosystem access.", img: "cohort-launch.jpg" },
  { date: "FEB 13, 2025", month: "FEB", day: "13", year: "2025", type: "Workshop", title: "Innovation as a Career", desc: "An insightful session on Entrepreneurship & Innovation as a life-changing Career Opportunity.", img: "innovation-career.jpg" },
  { date: "JAN 12, 2025", month: "JAN", day: "12", year: "2025", type: "Milestone", title: "Official VVLF Logo Launch", desc: "Unveiling our new logo, symbolizing our commitment to innovation, entrepreneurship, and excellence.", img: "logo-launch.png" },
];

const years = ["All Years", "2025"];
const types = ["All Types", "Milestone", "Program", "Workshop", "Community"];

const typeColors: Record<string, string> = {
  Milestone: "bg-primary/10 text-primary border-primary/20",
  Program: "bg-blue-100 text-blue-700 border-blue-200",
  Workshop: "bg-orange-100 text-orange-700 border-orange-200",
  Community: "bg-emerald-100 text-emerald-700 border-emerald-200",
};

const typeUpcomingColors: Record<string, string> = {
  Milestone: "border-primary/20 bg-primary/5",
  Program: "border-blue-200 bg-blue-50",
};

export function TimelineSection() {
  const [activeYear, setActiveYear] = useState("All Years");
  const [activeType, setActiveType] = useState("All Types");
  const [notified, setNotified] = useState<string | null>(null);

  const filtered = events.filter((e) => {
    const yearMatch = activeYear === "All Years" || e.year === activeYear;
    const typeMatch = activeType === "All Types" || e.type === activeType;
    return yearMatch && typeMatch;
  });

  return (
    <section id="events" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Upcoming Events */}
        <div className="mb-24">
          <FadeIn>
            <div className="flex items-center gap-3 mb-8">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
              </span>
              <h2 className="text-primary font-bold tracking-wider text-sm uppercase">Upcoming Events</h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingEvents.map((event, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className={`rounded-2xl border-2 p-6 hover:shadow-lg transition-all duration-300 group ${typeUpcomingColors[event.type] || "border-slate-200 bg-white"}`}>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${typeColors[event.type] || "bg-slate-100 text-slate-600 border-slate-200"} mb-3`}>
                        {event.type}
                      </span>
                      <h3 className="text-lg font-display font-bold text-navy">{event.title}</h3>
                    </div>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">{event.desc}</p>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 mb-5">
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{event.date}</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" />{event.location}</span>
                  </div>
                  <div className="flex gap-3">
                    <Link href="/contact">
                      <Button size="sm" className="bg-primary hover:bg-primary/90 text-white rounded-full px-5 text-xs font-semibold group">
                        {event.cta}
                        <ArrowRight className="ml-1 w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </Button>
                    </Link>
                    <button
                      onClick={() => setNotified(notified === event.title ? null : event.title)}
                      className={`inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-semibold border transition-all ${
                        notified === event.title
                          ? "bg-emerald-100 text-emerald-700 border-emerald-200"
                          : "border-slate-200 text-slate-600 hover:border-primary hover:text-primary"
                      }`}
                    >
                      <Bell className="w-3.5 h-3.5" />
                      {notified === event.title ? "Notified ✓" : "Notify Me"}
                    </button>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Past Events Timeline */}
        <FadeIn>
          <div className="mb-16">
            <div className="text-center mb-8">
              <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">Events Timeline</span>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4">Our Journey & Milestones</h3>
              <p className="text-slate-500 text-lg">A year of building, learning, and launching bold ideas.</p>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3 items-center justify-center">
              <div className="flex items-center gap-2 text-slate-500 text-sm font-semibold">
                <Filter className="w-4 h-4" />
              </div>
              {years.map((y) => (
                <button
                  key={y}
                  onClick={() => setActiveYear(y)}
                  className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all border ${
                    activeYear === y
                      ? "bg-navy text-white border-navy shadow-md"
                      : "bg-white text-slate-600 border-slate-200 hover:border-navy/40 hover:text-navy"
                  }`}
                >
                  {y}
                </button>
              ))}
              <div className="w-px h-5 bg-slate-200" />
              {types.map((t) => (
                <button
                  key={t}
                  onClick={() => setActiveType(t)}
                  className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all border ${
                    activeType === t
                      ? "bg-primary text-white border-primary shadow-md shadow-primary/20"
                      : "bg-white text-slate-600 border-slate-200 hover:border-primary/40 hover:text-primary"
                  }`}
                >
                  {t}
                </button>
              ))}
              <span className="text-xs text-slate-400 ml-2 font-medium">{filtered.length} event{filtered.length !== 1 ? "s" : ""}</span>
            </div>
          </div>
        </FadeIn>

        {filtered.length === 0 ? (
          <FadeIn>
            <div className="text-center py-16 text-slate-400">
              <p className="text-lg font-semibold">No events match this filter.</p>
              <button onClick={() => { setActiveYear("All Years"); setActiveType("All Types"); }} className="mt-4 text-primary font-semibold hover:underline text-sm">
                Clear filters
              </button>
            </div>
          </FadeIn>
        ) : (
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-slate-200 to-slate-200" />
            <div className="space-y-12">
              {filtered.map((event, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <FadeIn key={i} direction={isLeft ? "right" : "left"} delay={0.05}>
                    <div className={`relative flex flex-col lg:flex-row items-stretch gap-0 ${isLeft ? "" : "lg:flex-row-reverse"}`}>
                      <div className={`w-full lg:w-[calc(50%-2rem)] ${isLeft ? "lg:pr-8" : "lg:pl-8"}`}>
                        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full flex flex-col group">
                          <div className="w-full aspect-video overflow-hidden bg-slate-100 shrink-0">
                            <img
                              src={`${import.meta.env.BASE_URL}images/${event.img}`}
                              alt={event.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                          <div className="p-6 flex flex-col flex-1">
                            <div className="flex items-center gap-2 mb-3">
                              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-semibold text-xs border ${typeColors[event.type] || "bg-slate-100 text-slate-600 border-slate-200"}`}>
                                {event.type}
                              </span>
                              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-500 font-semibold text-xs rounded-full border border-slate-200">
                                <Calendar className="w-3 h-3" />
                                {event.date}
                              </span>
                            </div>
                            <h4 className="text-lg font-display font-bold text-navy mb-2 leading-snug">{event.title}</h4>
                            <p className="text-sm text-slate-500 leading-relaxed flex-1">{event.desc}</p>
                            <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
                              <a href="#" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-navy transition-colors group">
                                View Details
                                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                              </a>
                              <Link href="/contact">
                                <button className="text-xs font-semibold text-slate-400 hover:text-primary transition-colors">
                                  Join next edition →
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                        <div className="w-10 h-10 rounded-full bg-white border-2 border-primary shadow-md shadow-primary/20 flex items-center justify-center">
                          <div className="w-3 h-3 bg-primary rounded-full" />
                        </div>
                      </div>

                      <div className={`hidden lg:flex w-[calc(50%-2rem)] items-center ${isLeft ? "pl-12 justify-start" : "pr-12 justify-end"}`}>
                        <div className="text-center">
                          <div className="text-4xl font-display font-bold text-navy/10">{event.day}</div>
                          <div className="text-xs font-bold tracking-widest text-slate-400 uppercase">{event.month} {event.year}</div>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
