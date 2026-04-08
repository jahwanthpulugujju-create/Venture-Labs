import { useState } from "react";
import { Link } from "wouter";
import { FadeIn } from "@/components/FadeIn";
import { ArrowRight, Calendar, Filter, Bell, Clock, MapPin, Users, Wifi, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const upcomingEvents = [
  {
    title: "Pre-Incubation Cohort 2.0 Info Session",
    date: "Date TBA — Apply now to be notified",
    location: "BVRIT Campus, Narsapur",
    format: "In-Person",
    audience: "All BVRIT students with a startup idea",
    type: "Milestone",
    desc: "Understand eligibility, selection criteria, and how to apply in under 30 minutes. Meet the VVLF team, get your idea reviewed, and leave with a clear next step.",
    outcome: "Walk away knowing exactly whether to apply — and how.",
    cta: "Register Interest",
  },
  {
    title: "PIVOT Makeathon 2.0",
    date: "Upcoming — 24-hour sprint",
    location: "BVRIT Innovation Hub",
    format: "In-Person",
    audience: "2nd & 3rd Year Teams of 2–4",
    type: "Program",
    desc: "The next edition of our 24-hour makeathon. Form your team, register early, and prepare to go from idea to working prototype in one intense session.",
    outcome: "Leave with a prototype, a pitch, and real build experience.",
    cta: "Register Now",
  },
];

const events = [
  {
    date: "AUG 4, 2025", month: "AUG", day: "4", year: "2025",
    type: "Milestone",
    title: "Cohort 1.0 — Venture Incorporation",
    desc: "Startups from COHORT 1.0 were officially incorporated, turning four bold ideas into legally registered companies.",
    outcome: "4 ventures incorporated · Pre-Incubation Cohort 1.0",
    location: "BVRIT Campus, Narsapur",
    audience: "Cohort 1.0 Founders",
    img: "cohort-milestone.jpg",
    imgAlt: "VVLF Cohort 1.0 founders celebrating company incorporation milestone",
  },
  {
    date: "JUL 24, 2025", month: "JUL", day: "24", year: "2025",
    type: "Community",
    title: "Fostering Grassroots Innovation",
    desc: "Supporting the Innovators' Introductory Meet for grassroots innovators from Medak district — connecting local problem-solvers with the VVLF ecosystem.",
    outcome: "District-level innovators introduced to BVRIT ecosystem",
    location: "Medak District, Telangana",
    audience: "Grassroots innovators, community leaders",
    img: "grassroots-meet.jpg",
    imgAlt: "Community innovators gathering at the Medak district grassroots meet",
  },
  {
    date: "JUL 10, 2025", month: "JUL", day: "10", year: "2025",
    type: "Program",
    title: "Project SAARTHIS: Be the Change",
    desc: "Empowering students to lead inclusive innovation — a structured session on designing assistive technology for persons with disabilities.",
    outcome: "Student teams onboarded to year-long SAARTHIS journey",
    location: "BVRIT Innovation Lab",
    audience: "All years · Assistive tech focus",
    img: "saarthis-session.jpg",
    imgAlt: "SAARTHIS session with students co-designing inclusive technology",
  },
  {
    date: "JUL 8, 2025", month: "JUL", day: "8", year: "2025",
    type: "Workshop",
    title: "Business Launch Workshop",
    desc: "A hands-on session guiding future founders through idea validation, financial planning, and the practical steps to launch a scalable business.",
    outcome: "Participants left with a validated idea canvas and financial model",
    location: "BVRIT Seminar Hall",
    audience: "Final year students & early-stage founders",
    img: "business-launch-workshop.jpg",
    imgAlt: "Students at business launch workshop learning idea validation frameworks",
  },
  {
    date: "MAY 1, 2025", month: "MAY", day: "1", year: "2025",
    type: "Program",
    title: "EPICS Cohort — Purpose Meets Innovation",
    desc: "VVLF mentored 49 multidisciplinary teams developing tangible solutions for community needs — the largest cohort we've run.",
    outcome: "49 teams · Community impact projects delivered",
    location: "BVRIT Campus",
    audience: "All years · Multidisciplinary teams",
    img: "epics-cohort.jpg",
    imgAlt: "49 EPICS Cohort student teams presenting community-driven solutions",
  },
  {
    date: "FEB 28, 2025", month: "FEB", day: "28", year: "2025",
    type: "Milestone",
    title: "Pre-Incubation Cohort 1.0 — Launch Day",
    desc: "Launched VVLF's flagship incubation program with curated mentors, workspace access, legal support, and investor introductions.",
    outcome: "8 founding teams · Full incubation program began",
    location: "BVRIT Innovation Hub",
    audience: "Selected Cohort 1.0 founders",
    img: "cohort-launch.jpg",
    imgAlt: "VVLF team and Cohort 1.0 founders at the official program launch",
  },
  {
    date: "FEB 13, 2025", month: "FEB", day: "13", year: "2025",
    type: "Workshop",
    title: "Innovation as a Career",
    desc: "An insightful session on entrepreneurship and innovation as a viable, rewarding career path — with real founders sharing their journeys.",
    outcome: "150+ students attended · Multiple applicants to Cohort 1.0 followed",
    location: "BVRIT Auditorium",
    audience: "All BVRIT students",
    img: "innovation-career.jpg",
    imgAlt: "Guest speaker presenting innovation career paths to a full auditorium",
  },
  {
    date: "JAN 12, 2025", month: "JAN", day: "12", year: "2025",
    type: "Milestone",
    title: "Official VVLF Brand Launch",
    desc: "Unveiling the VVLF identity: a new logo, brand standards, and a public commitment to student entrepreneurship at BVRIT.",
    outcome: "VVLF officially established as a Section 8 company",
    location: "BVRIT Campus",
    audience: "Faculty, students & founding partners",
    img: "logo-launch.png",
    imgAlt: "VVLF logo unveiled at the official brand launch ceremony",
  },
];

const years = ["All Years", "2025"];
const types = ["All Types", "Milestone", "Program", "Workshop", "Community"];

const typeColors: Record<string, string> = {
  Milestone: "bg-[#2563EB]/10 text-[#2563EB] border-[#2563EB]/20",
  Program: "bg-blue-100 text-blue-700 border-blue-200",
  Workshop: "bg-orange-100 text-orange-700 border-orange-200",
  Community: "bg-emerald-100 text-emerald-700 border-emerald-200",
};

const typeUpcomingColors: Record<string, string> = {
  Milestone: "border-[#2563EB]/20 bg-[#2563EB]/5",
  Program: "border-blue-200 bg-blue-50",
};

export function TimelineSection() {
  const [activeYear, setActiveYear] = useState("All Years");
  const [activeType, setActiveType] = useState("All Types");
  const [notified, setNotified] = useState<string | null>(null);

  const filtersActive = activeYear !== "All Years" || activeType !== "All Types";

  const filtered = events.filter((e) => {
    const yearMatch = activeYear === "All Years" || e.year === activeYear;
    const typeMatch = activeType === "All Types" || e.type === activeType;
    return yearMatch && typeMatch;
  });

  return (
    <section id="events" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Stats strip */}
        <FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20 bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
            {[
              { value: `${events.length}`, label: "Total Events" },
              { value: "2", label: "Upcoming" },
              { value: "4", label: "Programs Run" },
              { value: "2025", label: "Year Active" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-display font-bold text-[#0B1121]">{stat.value}</p>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Upcoming Events */}
        <div className="mb-24">
          <FadeIn>
            <div className="flex items-center gap-3 mb-8">
              <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2563EB] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#2563EB]" />
              </span>
              <h2 className="text-[#2563EB] font-semibold tracking-[0.14em] text-[11px] uppercase">Upcoming Events</h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingEvents.map((event, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className={`rounded-2xl border-2 p-6 hover:shadow-lg transition-all duration-300 ${typeUpcomingColors[event.type] || "border-slate-200 bg-white"}`}>
                  <div className="mb-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${typeColors[event.type] || "bg-slate-100 text-slate-600 border-slate-200"} mb-3`}>
                      {event.type}
                    </span>
                    <h3 className="text-lg font-display font-bold text-[#0B1121]">{event.title}</h3>
                  </div>

                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{event.desc}</p>

                  {/* Outcome callout */}
                  <div className="bg-white/60 border border-slate-200 rounded-xl px-4 py-2.5 mb-4">
                    <p className="text-xs font-semibold text-[#0B1121]">
                      <span className="text-[#22C55E] mr-1.5">→</span>{event.outcome}
                    </p>
                  </div>

                  {/* Structured metadata */}
                  <div className="flex flex-wrap gap-x-4 gap-y-1.5 mb-5">
                    <span className="flex items-center gap-1.5 text-xs text-slate-500">
                      <Clock className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />{event.date}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-slate-500">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />{event.location}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-slate-500">
                      <Wifi className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />{event.format}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-slate-500">
                      <Users className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />{event.audience}
                    </span>
                  </div>

                  {/* Single primary CTA + secondary notify */}
                  <div className="flex gap-3">
                    <Link href="/contact">
                      <Button
                        size="sm"
                        className="bg-[#2563EB] hover:bg-[#2563EB]/90 text-white rounded-full px-5 text-xs font-semibold group"
                        aria-label={`${event.cta} for ${event.title}`}
                      >
                        {event.cta}
                        <ArrowRight className="ml-1 w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                      </Button>
                    </Link>
                    <button
                      onClick={() => setNotified(notified === event.title ? null : event.title)}
                      aria-pressed={notified === event.title}
                      aria-label={notified === event.title ? `Notifications on for ${event.title}` : `Get notified about ${event.title}`}
                      className={`inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-xs font-semibold border transition-all focus:outline-none focus:ring-2 focus:ring-[#2563EB]/40 ${
                        notified === event.title
                          ? "bg-emerald-100 text-emerald-700 border-emerald-200"
                          : "border-slate-200 text-slate-600 hover:border-[#2563EB] hover:text-[#2563EB]"
                      }`}
                    >
                      <Bell className="w-3.5 h-3.5" aria-hidden="true" />
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
          <div className="mb-12">
            <div className="text-center mb-10">
              <span className="text-[#2563EB] font-bold tracking-widest text-xs uppercase mb-3 block">Events Timeline</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-[#0B1121] mb-4">Our Journey & Milestones</h2>
              <p className="text-slate-500 text-lg">A year of building, learning, and launching bold ideas.</p>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3 items-center justify-center">
              <div className="flex items-center gap-2 text-slate-500 text-sm font-semibold" aria-hidden="true">
                <Filter className="w-4 h-4" />
              </div>

              {/* aria-live for count */}
              <div aria-live="polite" aria-atomic="true" className="sr-only">
                {filtered.length} event{filtered.length !== 1 ? "s" : ""} shown
              </div>

              <div role="group" aria-label="Filter by year" className="flex gap-2">
                {years.map((y) => (
                  <button
                    key={y}
                    onClick={() => setActiveYear(y)}
                    aria-pressed={activeYear === y}
                    className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all border focus:outline-none focus:ring-2 focus:ring-[#0B1121]/30 ${
                      activeYear === y
                        ? "bg-[#0B1121] text-white border-[#0B1121] shadow-md"
                        : "bg-white text-slate-600 border-slate-200 hover:border-[#0B1121]/40 hover:text-[#0B1121]"
                    }`}
                  >
                    {y}
                  </button>
                ))}
              </div>

              <div className="w-px h-5 bg-slate-200" aria-hidden="true" />

              <div role="group" aria-label="Filter by type" className="flex flex-wrap gap-2">
                {types.map((t) => (
                  <button
                    key={t}
                    onClick={() => setActiveType(t)}
                    aria-pressed={activeType === t}
                    className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all border focus:outline-none focus:ring-2 focus:ring-[#2563EB]/40 ${
                      activeType === t
                        ? "bg-[#2563EB] text-white border-[#2563EB] shadow-md shadow-[#2563EB]/20"
                        : "bg-white text-slate-600 border-slate-200 hover:border-[#2563EB]/40 hover:text-[#2563EB]"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2 ml-2">
                {filtersActive && (
                  <button
                    onClick={() => { setActiveYear("All Years"); setActiveType("All Types"); }}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-400 hover:text-[#2563EB] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2563EB]/40 rounded-full px-2 py-1"
                    aria-label="Clear all filters"
                  >
                    <X className="w-3 h-3" aria-hidden="true" />
                    Clear
                  </button>
                )}
                <span className="text-xs text-slate-400 font-medium" aria-hidden="true">
                  {filtered.length} event{filtered.length !== 1 ? "s" : ""}
                </span>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Timeline content */}
        {filtered.length === 0 ? (
          <FadeIn>
            <div className="text-center py-16 text-slate-400">
              <p className="text-lg font-semibold">No events match this filter.</p>
              <button
                onClick={() => { setActiveYear("All Years"); setActiveType("All Types"); }}
                className="mt-4 text-[#2563EB] font-semibold hover:underline text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB]/40 rounded"
              >
                Clear all filters
              </button>
            </div>
          </FadeIn>
        ) : (
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#2563EB]/40 via-slate-200 to-slate-200" aria-hidden="true" />
            <div className="space-y-12">
              {filtered.map((event, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <FadeIn key={i} direction={isLeft ? "right" : "left"} delay={0.05}>
                    <div className={`relative flex flex-col lg:flex-row items-stretch gap-0 ${isLeft ? "" : "lg:flex-row-reverse"}`}>

                      {/* Card */}
                      <div className={`w-full lg:w-[calc(50%-2rem)] ${isLeft ? "lg:pr-8" : "lg:pl-8"}`}>
                        <article className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:border-[#2563EB]/20 hover:-translate-y-1 transition-all duration-300 overflow-hidden h-full flex flex-col group">

                          {/* Image */}
                          <div className="w-full aspect-video overflow-hidden bg-slate-100 shrink-0">
                            <img
                              src={`${import.meta.env.BASE_URL}images/${event.img}`}
                              alt={event.imgAlt}
                              loading="lazy"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>

                          {/* Content */}
                          <div className="p-6 flex flex-col flex-1">
                            {/* Type + Date */}
                            <div className="flex flex-wrap items-center gap-2 mb-3">
                              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-semibold text-xs border ${typeColors[event.type] || "bg-slate-100 text-slate-600 border-slate-200"}`}>
                                {event.type}
                              </span>
                              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-500 font-semibold text-xs rounded-full border border-slate-200">
                                <Calendar className="w-3 h-3" aria-hidden="true" />
                                {event.date}
                              </span>
                            </div>

                            {/* Title + desc */}
                            <h3 className="text-lg font-display font-bold text-[#0B1121] mb-2 leading-snug">{event.title}</h3>
                            <p className="text-sm text-slate-500 leading-relaxed mb-3">{event.desc}</p>

                            {/* Structured metadata */}
                            <div className="flex flex-wrap gap-x-4 gap-y-1 mb-3">
                              <span className="flex items-center gap-1 text-xs text-slate-400">
                                <MapPin className="w-3 h-3" aria-hidden="true" />{event.location}
                              </span>
                              <span className="flex items-center gap-1 text-xs text-slate-400">
                                <Users className="w-3 h-3" aria-hidden="true" />{event.audience}
                              </span>
                            </div>

                            {/* Outcome line */}
                            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#22C55E] mb-4 flex-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] shrink-0" aria-hidden="true" />
                              {event.outcome}
                            </div>

                            {/* Single primary CTA */}
                            <div className="pt-4 border-t border-slate-100">
                              <a
                                href="#"
                                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2563EB] hover:text-[#0B1121] transition-colors group/link focus:outline-none focus:ring-2 focus:ring-[#2563EB]/40 rounded"
                                aria-label={`View recap of ${event.title}`}
                              >
                                View Event Recap
                                <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" aria-hidden="true" />
                              </a>
                            </div>
                          </div>
                        </article>
                      </div>

                      {/* Timeline node */}
                      <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10" aria-hidden="true">
                        <div className="w-10 h-10 rounded-full bg-white border-2 border-[#2563EB] shadow-md shadow-[#2563EB]/20 flex items-center justify-center">
                          <div className="w-3 h-3 bg-[#2563EB] rounded-full" />
                        </div>
                      </div>

                      {/* Date display (opposite side) */}
                      <div className={`hidden lg:flex w-[calc(50%-2rem)] items-center ${isLeft ? "pl-12 justify-start" : "pr-12 justify-end"}`} aria-hidden="true">
                        <div className="text-center">
                          <div className="text-4xl font-display font-bold text-[#0B1121]/10">{event.day}</div>
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
