import { FadeIn } from "@/components/FadeIn";
import { ArrowRight } from "lucide-react";

export function TimelineSection() {
  const events = [
    {
      date: "AUG 4, 2025",
      title: "Milestone at Vishnu Venture Labs",
      desc: "Startups from COHORT 1.0 have officially been incorporated, turning bold ideas into ventures!",
      img: "cohort-milestone.jpg"
    },
    {
      date: "JUL 24, 2025",
      title: "Fostering Grassroots Innovation",
      desc: "Supporting the Innovators' Introductory Meet for innovators from Medak district.",
      img: "grassroots-meet.jpg"
    },
    {
      date: "JUL 10, 2025",
      title: "Project SAARTHIS: Be the Change",
      desc: "Empowering students to lead inclusive innovation and drive improvements on campus.",
      img: "saarthis-session.jpg"
    },
    {
      date: "JUL 8, 2025",
      title: "Business Launch Workshop",
      desc: "A hands-on workshop to guide future founders in validating ideas, financial planning, marketing, and scaling.",
      img: "business-launch-workshop.jpg"
    },
    {
      date: "MAY 1, 2025",
      title: "When Purpose Meets Innovation — EPICS Cohort",
      desc: "VVLF cohosted student innovation for community impact, guiding 49 multidisciplinary teams.",
      img: "epics-cohort.jpg"
    },
    {
      date: "FEB 28, 2025",
      title: "Pre-Incubation Cohort 1.0 Launch",
      desc: "Join our Pre-Incubation Cohort to access expert mentorship, resources, and a thriving startup ecosystem.",
      img: "cohort-launch.jpg"
    },
    {
      date: "FEB 13, 2025",
      title: "Innovation as a Career",
      desc: "A successful session on Entrepreneurship & Innovation as a Career Opportunity.",
      img: "innovation-career.jpg"
    },
    {
      date: "JAN 12, 2025",
      title: "Official VVLF Logo Launch",
      desc: "Unveiling our new logo, symbolizing commitment to fostering innovation, entrepreneurship, and technological excellence.",
      img: "logo-launch.png"
    }
  ];

  return (
    <section id="events" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-primary font-bold tracking-wider text-sm uppercase mb-2">Events Timeline</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-navy">Our Journey and Upcoming Milestones</h3>
          </div>
        </FadeIn>

        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-slate-200" />

          <div className="space-y-16">
            {events.map((event, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={i} className={`relative flex flex-col md:flex-row items-center justify-between ${isEven ? '' : 'md:flex-row-reverse'}`}>
                  
                  {/* Content Box */}
                  <div className={`w-full md:w-[45%] ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 text-left'}`}>
                    <FadeIn direction={isEven ? 'left' : 'right'} delay={0.1}>
                      <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-100 hover:shadow-lg hover:border-primary/20 transition-all group">
                        <div className={`inline-block px-3 py-1 bg-primary/10 text-primary font-bold text-sm rounded-full mb-4 ${isEven ? 'md:ml-auto' : ''}`}>
                          {event.date}
                        </div>
                        <h4 className="text-2xl font-bold text-navy mb-3">{event.title}</h4>
                        <p className="text-slate-600 mb-6">{event.desc}</p>
                        
                        {/* Real event image */}
                        <div className="w-full h-48 rounded-xl mb-6 overflow-hidden shadow-sm">
                          <img 
                            src={`${import.meta.env.BASE_URL}images/${event.img}`}
                            alt={event.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>

                        <a href="#" className={`inline-flex items-center text-primary font-semibold hover:text-navy transition-colors ${isEven ? 'md:justify-end' : ''}`}>
                          View Details <ArrowRight className="ml-2 w-4 h-4" />
                        </a>
                      </div>
                    </FadeIn>
                  </div>

                  {/* Center Dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white border-4 border-slate-100 rounded-full items-center justify-center z-10 shadow-sm">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block w-[45%]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
