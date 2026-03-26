import { FadeIn } from "@/components/FadeIn";
import { Linkedin } from "lucide-react";

const board = [
  {
    name: "Shri R. Rajagopal",
    title: "Vice Chairman",
    photo: "team-rajagopal.png",
    expertise: ["Leadership", "Governance"],
    linkedin: "#",
  },
  {
    name: "Shri K. Aditya Vissam",
    title: "Secretary",
    photo: "team-aditya.png",
    expertise: ["Strategy", "Operations"],
    linkedin: "#",
  },
  {
    name: "Dr. K. Lakshmi Prasad",
    title: "Director",
    photo: "team-lakshmi.png",
    expertise: ["Research", "Innovation"],
    linkedin: "#",
  },
  {
    name: "Dr. Sanjay Dubey",
    title: "Principal, BVRIT",
    photo: "team-sanjay.png",
    expertise: ["Academia", "Engineering"],
    linkedin: "#",
  },
];

const team = [
  {
    name: "Dr. M. K. Kaushik",
    title: "Director, VVLF",
    photo: "team-kaushik.png",
    bio: "Leading VVLF's innovation initiatives and guiding the startup ecosystem with deep technical and entrepreneurial expertise.",
    expertise: ["Deep Tech", "Entrepreneurship", "Mentorship"],
    linkedin: "#",
  },
  {
    name: "Rohith Sirpa",
    title: "Manager, VVLF",
    photo: "team-rohith.png",
    bio: "Driving day-to-day operations, startup outreach, and program management across VVLF's portfolio.",
    expertise: ["Program Management", "Startup Ops", "Community Building"],
    linkedin: "#",
  },
];

export function TeamSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Board of Directors */}
        <div className="mb-24">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-primary font-bold tracking-wider text-sm uppercase mb-2">Leadership</h2>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-navy">Board of Directors</h3>
              <p className="text-slate-500 mt-3">Visionaries guiding VVLF's mission and strategy.</p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {board.map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.1}>
                <div className="group text-center bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden mb-5 border-4 border-white shadow-xl shadow-slate-200/50">
                    <img
                      src={`${import.meta.env.BASE_URL}images/${member.photo}`}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <a href={member.linkedin} className="w-9 h-9 rounded-full bg-white text-[#0A66C2] flex items-center justify-center hover:scale-110 transition-transform" onClick={(e) => e.stopPropagation()}>
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                  <h5 className="text-base font-bold text-navy">{member.name}</h5>
                  <p className="text-primary font-semibold text-sm mb-3">{member.title}</p>
                  <div className="flex flex-wrap justify-center gap-1.5">
                    {member.expertise.map((tag) => (
                      <span key={tag} className="px-2.5 py-0.5 bg-slate-100 text-slate-500 text-xs rounded-full font-medium">{tag}</span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Core Team */}
        <div>
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-primary font-bold tracking-wider text-sm uppercase mb-2">Our Team</h2>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-navy">The People Driving VVLF</h3>
            </div>
          </FadeIn>

          <div className="flex flex-wrap justify-center gap-10">
            {team.map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.1}>
                <div className="group bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full sm:w-80 flex flex-col items-center text-center">
                  <div className="relative w-40 h-40 mb-6 rounded-full overflow-hidden border-4 border-white shadow-xl shadow-slate-200/50 shrink-0">
                    <img
                      src={`${import.meta.env.BASE_URL}images/${member.photo}`}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h5 className="text-xl font-bold text-navy">{member.name}</h5>
                  <p className="text-primary font-semibold text-sm mb-4">{member.title}</p>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">{member.bio}</p>
                  <div className="flex flex-wrap justify-center gap-2 mb-5">
                    {member.expertise.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-semibold">{tag}</span>
                    ))}
                  </div>
                  <a
                    href={member.linkedin}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0A66C2] text-white text-sm font-semibold rounded-full hover:bg-[#0A66C2]/90 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn Profile
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
