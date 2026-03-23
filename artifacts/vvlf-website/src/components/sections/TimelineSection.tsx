import { FadeIn } from "@/components/FadeIn";
import { ArrowRight, Calendar } from "lucide-react";

const events = [
  {
    date: "AUG 4, 2025",
    month: "AUG",
    day: "4",
    year: "2025",
    title: "Milestone at Vishnu Venture Labs",
    desc: "Startups from COHORT 1.0 have officially been incorporated, turning bold ideas into real ventures.",
    img: "cohort-milestone.jpg"
  },
  {
    date: "JUL 24, 2025",
    month: "JUL",
    day: "24",
    year: "2025",
    title: "Fostering Grassroots Innovation",
    desc: "Supporting the Innovators' Introductory Meet for grassroots innovators from Medak district.",
    img: "grassroots-meet.jpg"
  },
  {
    date: "JUL 10, 2025",
    month: "JUL",
    day: "10",
    year: "2025",
    title: "Project SAARTHIS: Be the Change",
    desc: "Empowering students to lead inclusive innovation and drive meaningful improvements on campus.",
    img: "saarthis-session.jpg"
  },
  {
    date: "JUL 8, 2025",
    month: "JUL",
    day: "8",
    year: "2025",
    title: "Business Launch Workshop",
    desc: "A hands-on workshop guiding future founders through idea validation, financial planning, and scaling.",
    img: "business-launch-workshop.jpg"
  },
  {
    date: "MAY 1, 2025",
    month: "MAY",
    day: "1",
    year: "2025",
    title: "EPICS Cohort — Purpose Meets Innovation",
    desc: "VVLF mentored 49 multidisciplinary student teams developing solutions for real-world community needs.",
    img: "epics-cohort.jpg"
  },
  {
    date: "FEB 28, 2025",
    month: "FEB",
    day: "28",
    year: "2025",
    title: "Pre-Incubation Cohort 1.0 Launch",
    desc: "Launched our flagship Pre-Incubation Cohort with expert mentorship, resources, and startup ecosystem access.",
    img: "cohort-launch.jpg"
  },
  {
    date: "FEB 13, 2025",
    month: "FEB",
    day: "13",
    year: "2025",
    title: "Innovation as a Career",
    desc: "An insightful session on Entrepreneurship & Innovation as a life-changing Career Opportunity.",
    img: "innovation-career.jpg"
  },
  {
    date: "JAN 12, 2025",
    month: "JAN",
    day: "12",
    year: "2025",
    title: "Official VVLF Logo Launch",
    desc: "Unveiling our new logo, symbolizing our commitment to innovation, entrepreneurship, and excellence.",
    img: "logo-launch.png"
  }
];

export function TimelineSection() {
  return (
    <section id="events" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">Events Timeline</span>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4">Our Journey & Milestones</h3>
            <p className="text-slate-500 text-lg">A year of building, learning, and launching bold ideas.</p>
          </div>
        </FadeIn>

        <div className="relative">
          {/* Vertical center line */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-slate-200 to-slate-200" />

          <div className="space-y-12">
            {events.map((event, i) => {
              const isLeft = i % 2 === 0;
              return (
                <FadeIn key={i} direction={isLeft ? "right" : "left"} delay={0.05}>
                  <div className={`relative flex flex-col lg:flex-row items-stretch gap-0 ${isLeft ? "" : "lg:flex-row-reverse"}`}>

                    {/* Card */}
                    <div className={`w-full lg:w-[calc(50%-2rem)] ${isLeft ? "lg:pr-8" : "lg:pl-8"}`}>
                      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300 overflow-hidden h-full flex flex-col">
                        {/* Image — fixed 16:9 ratio */}
                        <div className="w-full aspect-video overflow-hidden bg-slate-100 shrink-0">
                          <img
                            src={`${import.meta.env.BASE_URL}images/${event.img}`}
                            alt={event.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        {/* Content */}
                        <div className="p-6 flex flex-col flex-1">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary font-semibold text-xs rounded-full border border-primary/20">
                              <Calendar className="w-3 h-3" />
                              {event.date}
                            </span>
                          </div>
                          <h4 className="text-lg font-display font-bold text-navy mb-2 leading-snug line-clamp-2">
                            {event.title}
                          </h4>
                          <p className="text-sm text-slate-500 leading-relaxed line-clamp-2 flex-1">
                            {event.desc}
                          </p>
                          <a
                            href="#"
                            className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-navy transition-colors mt-4 group"
                          >
                            View Details
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Center dot */}
                    <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-white border-2 border-primary shadow-md shadow-primary/20 flex items-center justify-center">
                        <div className="w-3 h-3 bg-primary rounded-full" />
                      </div>
                    </div>

                    {/* Date badge on opposite side (desktop only) */}
                    <div className={`hidden lg:flex w-[calc(50%-2rem)] items-center ${isLeft ? "pl-12 justify-start" : "pr-12 justify-end"}`}>
                      <div className={`text-center ${isLeft ? "" : ""}`}>
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
      </div>
    </section>
  );
}
