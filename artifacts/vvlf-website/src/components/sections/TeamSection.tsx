import { FadeIn } from "@/components/FadeIn";
import { motion } from "framer-motion";
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
    linkedin: "https://www.linkedin.com/in/dr-m-k-kaushik-a6580b33/",
  },
  {
    name: "Rohith Sirpa",
    title: "Manager, VVLF",
    photo: "team-rohith.png",
    bio: "Driving day-to-day operations, startup outreach, and program management across VVLF's growing portfolio of ventures.",
    expertise: ["Program Management", "Startup Ops", "Community"],
    achievements: ["Cohort 1.0 Lead", "4 Incorporated Startups"],
    linkedin: "https://in.linkedin.com/in/rohith-sirpa-539b0b97",
  },
];

const mentors = [
  { name: "Industry Mentor", title: "Domain Expert · Deep Tech", initials: "DT", color: "bg-blue-100 text-blue-700", borderHover: "hover:border-blue-300", expertise: ["AI/ML", "Robotics"] },
  { name: "Industry Mentor", title: "Domain Expert · FinTech", initials: "FT", color: "bg-emerald-100 text-emerald-700", borderHover: "hover:border-emerald-300", expertise: ["Finance", "Payments"] },
  { name: "Industry Mentor", title: "Domain Expert · HealthTech", initials: "HT", color: "bg-rose-100 text-rose-700", borderHover: "hover:border-rose-300", expertise: ["MedTech", "Biotech"] },
  { name: "Industry Mentor", title: "Domain Expert · EdTech", initials: "ET", color: "bg-purple-100 text-purple-700", borderHover: "hover:border-purple-300", expertise: ["EdTech", "Learning"] },
  { name: "Industry Mentor", title: "Domain Expert · SaaS", initials: "SA", color: "bg-orange-100 text-orange-700", borderHover: "hover:border-orange-300", expertise: ["SaaS", "B2B"] },
  { name: "Industry Mentor", title: "Domain Expert · Sustainability", initials: "GR", color: "bg-teal-100 text-teal-700", borderHover: "hover:border-teal-300", expertise: ["CleanTech", "ESG"] },
];

const advisors = [
  { name: "BVRIT Academic Council", title: "Academic Advisory Board", logo: "/images/partner-bvrit.png" },
  { name: "Kaiteki Innovations", title: "Industry Partner · Innovation", logo: "/images/partner-kaiteki.png" },
  { name: "TGIC", title: "Government Partner · Innovation Council", logo: "/images/partner-tgic.png" },
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {board.map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group relative bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#2563EB]/20 transition-shadow duration-300 cursor-default"
                >
                  {/* Photo */}
                  <div className="w-full aspect-square bg-slate-100 overflow-hidden">
                    <img
                      src={`${import.meta.env.BASE_URL}images/${member.photo}`}
                      alt={member.name}
                      loading="lazy"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Info */}
                  <div className="p-4">
                    <h3 className="font-bold text-[#0B0F19] text-sm leading-tight mb-0.5">{member.name}</h3>
                    <p className="text-[#2563EB] text-xs font-semibold mb-2">{member.title}</p>
                    <div className="flex flex-wrap gap-1">
                      {member.expertise.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 text-[10px] font-semibold">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
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
              <p className="text-slate-500 mt-3">Day-to-day builders of the ecosystem.</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-default"
                >
                  {/* Photo — tall */}
                  <div className="w-full h-72 bg-slate-100 overflow-hidden relative">
                    <img
                      src={`${import.meta.env.BASE_URL}images/${member.photo}`}
                      alt={member.name}
                      loading="lazy"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* LinkedIn overlay */}
                    <div className="absolute inset-0 bg-[#0B0F19]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <a
                        href={member.linkedin}
                        aria-label={`${member.name} on LinkedIn`}
                        className="inline-flex items-center gap-2 bg-[#0A66C2] text-white font-semibold px-5 py-2.5 rounded-full text-sm hover:scale-105 transition-transform"
                      >
                        <Linkedin className="w-4 h-4" /> View LinkedIn
                      </a>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-display font-bold text-[#0B0F19] mb-0.5">{member.name}</h3>
                    <p className="text-[#2563EB] font-semibold text-sm mb-3">{member.title}</p>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4">{member.bio}</p>

                    {/* Achievement badges */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {member.achievements.map((a) => (
                        <span key={a} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#2563EB]/8 border border-[#2563EB]/15 text-[#2563EB] text-xs font-semibold">
                          <Award className="w-3 h-3" />
                          {a}
                        </span>
                      ))}
                    </div>

                    {/* Expertise tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {member.expertise.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-500 text-xs font-semibold">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
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
                <motion.div
                  whileHover={{ y: -6, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group bg-white rounded-2xl p-8 border border-slate-100 hover:shadow-xl hover:border-[#2563EB]/20 transition-shadow duration-300 flex flex-col items-center text-center cursor-default"
                >
                  <div className="w-28 h-16 flex items-center justify-center mb-4">
                    <img
                      src={a.logo}
                      alt={a.name}
                      className="max-w-full max-h-full object-contain transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-bold text-[#0B0F19] text-base mb-1">{a.name}</h3>
                  <p className="text-slate-500 text-xs">{a.title}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
