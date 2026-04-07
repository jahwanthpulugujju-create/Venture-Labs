import { FadeIn } from "@/components/FadeIn";
import { Linkedin, Award, Star } from "lucide-react";

const board = [
  { name: "Shri R. Rajagopal", title: "Vice Chairman", photo: "team-rajagopal.png", expertise: ["Leadership", "Governance"], linkedin: "#" },
  { name: "Shri K. Aditya Vissam", title: "Secretary", photo: "team-aditya.png", expertise: ["Strategy", "Operations"], linkedin: "#" },
  { name: "Dr. K. Lakshmi Prasad", title: "Director", photo: "team-lakshmi.png", expertise: ["Research", "Innovation"], linkedin: "#" },
  { name: "Dr. Sanjay Dubey", title: "Principal, BVRIT", photo: "team-sanjay.png", expertise: ["Academia", "Engineering"], linkedin: "#" },
];

const team = [
  {
    name: "Dr. M. K. Kaushik",
    title: "Director, VVLF",
    photo: "team-kaushik.png",
    bio: "Leading VVLF's innovation initiatives and guiding the startup ecosystem with deep technical and entrepreneurial expertise. Over 15 years in academia and industry.",
    expertise: ["Deep Tech", "Entrepreneurship", "Mentorship"],
    achievements: ["15+ Years Experience", "50+ Startups Mentored"],
    linkedin: "#",
  },
  {
    name: "Rohith Sirpa",
    title: "Manager, VVLF",
    photo: "team-rohith.png",
    bio: "Driving day-to-day operations, startup outreach, and program management across VVLF's growing portfolio of ventures.",
    expertise: ["Program Management", "Startup Ops", "Community"],
    achievements: ["Cohort 1.0 Lead", "4 Incorporated Startups"],
    linkedin: "#",
  },
];

const mentors = [
  { name: "Industry Mentor", title: "Domain Expert · Deep Tech", initials: "DT", color: "bg-blue-100 text-blue-700", expertise: ["AI/ML", "Robotics"] },
  { name: "Industry Mentor", title: "Domain Expert · FinTech", initials: "FT", color: "bg-emerald-100 text-emerald-700", expertise: ["Finance", "Payments"] },
  { name: "Industry Mentor", title: "Domain Expert · HealthTech", initials: "HT", color: "bg-rose-100 text-rose-700", expertise: ["MedTech", "Biotech"] },
  { name: "Industry Mentor", title: "Domain Expert · EdTech", initials: "ET", color: "bg-purple-100 text-purple-700", expertise: ["EdTech", "Learning"] },
  { name: "Industry Mentor", title: "Domain Expert · SaaS", initials: "SA", color: "bg-orange-100 text-orange-700", expertise: ["SaaS", "B2B"] },
  { name: "Industry Mentor", title: "Domain Expert · Sustainability", initials: "GR", color: "bg-teal-100 text-teal-700", expertise: ["CleanTech", "ESG"] },
];

const advisors = [
  { name: "BVRIT Academic Council", title: "Academic Advisory Board", initials: "AC", color: "bg-slate-100 text-slate-700" },
  { name: "Kaiteki Innovations", title: "Industry Partner · Innovation", initials: "KI", color: "bg-indigo-100 text-indigo-700" },
  { name: "TGIC", title: "Government Partner · Innovation Council", initials: "TG", color: "bg-amber-100 text-amber-700" },
];

export function TeamSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">

        {/* ── Board of Directors ── */}
        <div>
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-[#2563EB] font-bold tracking-wider text-sm uppercase mb-2">Leadership</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-[#0B0F19]">Board of Directors</h2>
              <p className="text-slate-500 mt-3">Visionaries guiding VVLF's mission and strategy.</p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {board.map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.1}>
                <div className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col">

                  {/* Photo — square, full-width, no cropping */}
                  <div className="relative w-full aspect-square overflow-hidden bg-gradient-to-b from-slate-100 to-slate-200 shrink-0">
                    <img
                      src={`${import.meta.env.BASE_URL}images/${member.photo}`}
                      alt={`Portrait of ${member.name}, ${member.title}, VVLF`}
                      loading="lazy"
                      className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* LinkedIn hover overlay */}
                    <div className="absolute inset-0 bg-[#0B0F19]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <a
                        href={member.linkedin}
                        aria-label={`${member.name} on LinkedIn`}
                        className="w-10 h-10 rounded-full bg-[#0A66C2] text-white flex items-center justify-center hover:scale-110 transition-transform"
                      >
                        <Linkedin className="w-4 h-4" aria-hidden="true" />
                      </a>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-base font-bold text-[#0B0F19] leading-snug">{member.name}</h3>
                    <p className="text-[#2563EB] font-semibold text-sm mb-3">{member.title}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {member.expertise.map((tag) => (
                        <span key={tag} className="px-2.5 py-0.5 bg-slate-100 text-slate-500 text-xs rounded-full font-medium">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* ── Core Team ── */}
        <div>
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-[#2563EB] font-bold tracking-wider text-sm uppercase mb-2">Core Team</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-[#0B0F19]">The People Driving VVLF</h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.1}>
                <div className="group bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col">

                  {/* Photo — square, full-width, no cropping */}
                  <div className="relative w-full aspect-square overflow-hidden bg-gradient-to-b from-slate-100 to-slate-200 shrink-0">
                    <img
                      src={`${import.meta.env.BASE_URL}images/${member.photo}`}
                      alt={`Portrait of ${member.name}, ${member.title}, VVLF`}
                      loading="lazy"
                      className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Info */}
                  <div className="p-7 flex flex-col flex-1">
                    <h3 className="text-xl font-bold text-[#0B0F19]">{member.name}</h3>
                    <p className="text-[#2563EB] font-semibold text-sm mb-4">{member.title}</p>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4">{member.bio}</p>

                    {/* Achievements */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {member.achievements.map((a) => (
                        <span key={a} className="flex items-center gap-1 px-3 py-1 bg-amber-50 border border-amber-200 text-amber-700 text-xs rounded-full font-semibold">
                          <Award className="w-3 h-3" aria-hidden="true" /> {a}
                        </span>
                      ))}
                    </div>

                    {/* Expertise */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {member.expertise.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-[#2563EB]/10 text-[#2563EB] text-xs rounded-full font-semibold">{tag}</span>
                      ))}
                    </div>

                    <a
                      href={member.linkedin}
                      aria-label={`${member.name} on LinkedIn`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0A66C2] text-white text-sm font-semibold rounded-full hover:bg-[#0A66C2]/90 transition-colors self-start focus:outline-none focus:ring-2 focus:ring-[#0A66C2]/40"
                    >
                      <Linkedin className="w-4 h-4" aria-hidden="true" /> View LinkedIn
                    </a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* ── Mentor Network ── */}
        <div>
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-[#2563EB] font-bold tracking-wider text-sm uppercase mb-2">Mentor Network</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-[#0B0F19]">Industry Mentors</h2>
              <p className="text-slate-500 mt-3">Domain experts guiding our startups across every sector — available through each cohort program.</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mentors.map((mentor, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <div className="group bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center gap-5">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg shrink-0 ${mentor.color} group-hover:scale-110 transition-transform`} aria-hidden="true">
                    {mentor.initials}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400 shrink-0" aria-hidden="true" />
                      <h3 className="font-bold text-[#0B0F19] text-sm truncate">{mentor.name}</h3>
                    </div>
                    <p className="text-slate-500 text-xs mb-2">{mentor.title}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {mentor.expertise.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 bg-slate-100 text-slate-500 text-xs rounded-full font-medium">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <p className="text-center text-slate-400 text-sm mt-8">+ more domain experts across Deep Tech, Semiconductors, and Assistive Technology</p>
          </FadeIn>
        </div>

        {/* ── Advisors & Partners ── */}
        <div>
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-[#2563EB] font-bold tracking-wider text-sm uppercase mb-2">Advisory & Partners</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-[#0B0F19]">Our Strategic Partners</h2>
              <p className="text-slate-500 mt-3">The organizations backing VVLF's ecosystem.</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {advisors.map((a, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="group bg-white rounded-2xl p-8 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl mb-4 ${a.color} group-hover:scale-110 transition-transform`} aria-hidden="true">
                    {a.initials}
                  </div>
                  <h3 className="font-bold text-[#0B0F19] text-base mb-1">{a.name}</h3>
                  <p className="text-slate-500 text-xs">{a.title}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
