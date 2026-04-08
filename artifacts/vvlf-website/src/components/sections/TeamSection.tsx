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
  { name: "Industry Mentor", title: "Domain Expert · Deep Tech", initials: "DT", color: "bg-blue-50 text-blue-600 border border-blue-100", borderHover: "hover:border-blue-200", expertise: ["AI/ML", "Robotics"] },
  { name: "Industry Mentor", title: "Domain Expert · FinTech", initials: "FT", color: "bg-emerald-50 text-emerald-600 border border-emerald-100", borderHover: "hover:border-emerald-200", expertise: ["Finance", "Payments"] },
  { name: "Industry Mentor", title: "Domain Expert · HealthTech", initials: "HT", color: "bg-rose-50 text-rose-600 border border-rose-100", borderHover: "hover:border-rose-200", expertise: ["MedTech", "Biotech"] },
  { name: "Industry Mentor", title: "Domain Expert · EdTech", initials: "ET", color: "bg-violet-50 text-violet-600 border border-violet-100", borderHover: "hover:border-violet-200", expertise: ["EdTech", "Learning"] },
  { name: "Industry Mentor", title: "Domain Expert · SaaS", initials: "SA", color: "bg-orange-50 text-orange-600 border border-orange-100", borderHover: "hover:border-orange-200", expertise: ["SaaS", "B2B"] },
  { name: "Industry Mentor", title: "Domain Expert · Sustainability", initials: "GR", color: "bg-teal-50 text-teal-600 border border-teal-100", borderHover: "hover:border-teal-200", expertise: ["CleanTech", "ESG"] },
];

const advisors = [
  { name: "BVRIT Academic Council", title: "Academic Advisory Board", logo: "/images/partner-bvrit.png" },
  { name: "Kaiteki Innovations", title: "Industry Partner · Innovation", logo: "/images/partner-kaiteki.png" },
  { name: "TGIC", title: "Government Partner · Innovation Council", logo: "/images/partner-tgic.png" },
];

export function TeamSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">

        {/* ── Board of Directors ── */}
        <div>
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-[#2563EB] font-semibold tracking-[0.14em] text-[11px] uppercase mb-4">Leadership</p>
              <h2 className="font-display font-bold text-[#0B1121] leading-[1.08] mb-3" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
                Board of Directors
              </h2>
              <p className="text-slate-500 text-[15px]">Visionaries guiding VVLF's mission and strategy.</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {board.map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group relative bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-[0_12px_28px_rgba(0,0,0,0.09),0_0_0_1px_rgba(37,99,235,0.08)] transition-shadow duration-300 cursor-default"
                >
                  {/* Photo */}
                  <div className="w-full aspect-[4/5] bg-slate-100 overflow-hidden">
                    <img
                      src={`${import.meta.env.BASE_URL}images/${member.photo}`}
                      alt={member.name}
                      loading="lazy"
                      className="w-full h-full object-cover object-top group-hover:scale-104 transition-transform duration-500"
                      style={{ transform: "scale(1)" }}
                    />
                  </div>

                  {/* LinkedIn hover overlay */}
                  <div className="absolute inset-0 bg-[#0B1121]/65 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a
                      href={member.linkedin}
                      aria-label={`${member.name} on LinkedIn`}
                      onClick={(e) => e.stopPropagation()}
                      className="w-10 h-10 rounded-full bg-[#0A66C2] flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg"
                    >
                      <Linkedin className="w-4.5 h-4.5 w-4 h-4" />
                    </a>
                  </div>

                  {/* Info */}
                  <div className="p-4">
                    <h3 className="font-semibold text-[#0B1121] text-[13.5px] leading-snug mb-0.5">{member.name}</h3>
                    <p className="text-[#2563EB] text-[11px] font-semibold mb-2.5">{member.title}</p>
                    <div className="flex flex-wrap gap-1">
                      {member.expertise.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 rounded-full bg-slate-50 border border-slate-100 text-slate-500 text-[10px] font-medium">
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
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-[#2563EB] font-semibold tracking-[0.14em] text-[11px] uppercase mb-4">Core Team</p>
              <h2 className="font-display font-bold text-[#0B1121] leading-[1.08] mb-3" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
                The People Driving VVLF
              </h2>
              <p className="text-slate-500 text-[15px]">Day-to-day builders of the ecosystem.</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 max-w-3xl mx-auto">
            {team.map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-[0_16px_32px_rgba(0,0,0,0.09)] transition-shadow duration-300 cursor-default"
                >
                  {/* Photo */}
                  <div className="w-full h-64 bg-slate-100 overflow-hidden relative">
                    <img
                      src={`${import.meta.env.BASE_URL}images/${member.photo}`}
                      alt={member.name}
                      loading="lazy"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-600"
                    />
                    {/* LinkedIn overlay */}
                    <div className="absolute inset-0 bg-[#0B1121]/65 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <a
                        href={member.linkedin}
                        aria-label={`${member.name} on LinkedIn`}
                        className="inline-flex items-center gap-2 bg-[#0A66C2] text-white font-semibold px-5 py-2.5 rounded-full text-sm hover:scale-105 transition-transform shadow-lg"
                      >
                        <Linkedin className="w-4 h-4" /> View LinkedIn
                      </a>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-display font-bold text-[#0B1121] text-lg mb-0.5">{member.name}</h3>
                    <p className="text-[#2563EB] font-semibold text-[13px] mb-3">{member.title}</p>
                    <p className="text-slate-500 text-sm leading-[1.7] mb-4">{member.bio}</p>

                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {member.achievements.map((a) => (
                        <span key={a} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#2563EB]/8 border border-[#2563EB]/15 text-[#2563EB] text-[11px] font-semibold">
                          <Award className="w-3 h-3" />
                          {a}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {member.expertise.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 rounded-full bg-slate-50 border border-slate-100 text-slate-500 text-[11px] font-medium">
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

        {/* ── Mentor Network ── */}
        <div>
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-[#2563EB] font-semibold tracking-[0.14em] text-[11px] uppercase mb-4">Mentor Network</p>
              <h2 className="font-display font-bold text-[#0B1121] leading-[1.08] mb-3" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
                Industry Mentors
              </h2>
              <p className="text-slate-500 text-[15px]">Domain experts guiding our startups across every sector — available through each cohort program.</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {mentors.map((m, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`group bg-white rounded-2xl p-5 border border-slate-100 hover:shadow-lg transition-all duration-300 cursor-default ${m.borderHover}`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 ${m.color}`}>
                      {m.initials}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                        <p className="text-[10px] font-semibold uppercase tracking-wider text-amber-600">Industry Mentor</p>
                      </div>
                      <p className="text-[13px] font-semibold text-[#0B1121]">{m.name}</p>
                      <p className="text-slate-400 text-[11px]">{m.title}</p>
                    </div>
                  </div>
                  <div className="mt-3.5 flex flex-wrap gap-1.5">
                    {m.expertise.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 rounded-full bg-slate-50 border border-slate-100 text-slate-500 text-[11px] font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <p className="text-center text-slate-400 text-[13px] mt-6">
              + more domain experts across Deep Tech, Semiconductors, and Assistive Technology
            </p>
          </FadeIn>
        </div>

        {/* ── Strategic Partners ── */}
        <div>
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-[#2563EB] font-semibold tracking-[0.14em] text-[11px] uppercase mb-4">Advisory & Partners</p>
              <h2 className="font-display font-bold text-[#0B1121] leading-[1.08] mb-3" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
                Our Strategic Partners
              </h2>
              <p className="text-slate-500 text-[15px]">The organizations backing VVLF's ecosystem.</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
            {advisors.map((a, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group bg-white rounded-2xl p-7 border border-slate-100 hover:shadow-[0_12px_28px_rgba(0,0,0,0.08),0_0_0_1px_rgba(37,99,235,0.08)] transition-shadow duration-300 flex flex-col items-center text-center cursor-default"
                >
                  <div className="w-28 h-14 flex items-center justify-center mb-4">
                    <img
                      src={a.logo}
                      alt={a.name}
                      className="max-w-full max-h-full object-contain transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-semibold text-[#0B1121] text-[14px] mb-1">{a.name}</h3>
                  <p className="text-slate-400 text-[12px]">{a.title}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
