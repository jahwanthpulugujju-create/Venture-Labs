import { FadeIn } from "@/components/FadeIn";
import { Cpu, Microchip, UserCheck, Leaf, Target, Lightbulb, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import bvritLogo from "@assets/bvrit-logo_1775501124732.png";
import kaitekiLogo from "@assets/kaiteki-logo_1775501124734.png";
import tgicLogo from "@assets/TGIC-new-logo_1775501124735.png";
import tgtfLogo from "@assets/tgtf-logo-_1775501124736.png";

export function AboutSection() {
  const thrustAreas = [
    { icon: Cpu, title: "Deep Tech", desc: "AI, IoT, Robotics, and emerging technologies shaping tomorrow.", color: "text-blue-500", bg: "bg-blue-50 border-blue-100", hover: "hover:border-blue-200 hover:shadow-blue-100/60" },
    { icon: Microchip, title: "Semiconductors", desc: "Hardware innovation and chip design for India's tech future.", color: "text-violet-500", bg: "bg-violet-50 border-violet-100", hover: "hover:border-violet-200 hover:shadow-violet-100/60" },
    { icon: UserCheck, title: "Assistive Technology", desc: "Inclusive solutions for persons with disabilities — by students, for everyone.", color: "text-emerald-500", bg: "bg-emerald-50 border-emerald-100", hover: "hover:border-emerald-200 hover:shadow-emerald-100/60" },
    { icon: Leaf, title: "Sustainability", desc: "Green tech and climate-focused innovations aligned with global SDGs.", color: "text-amber-500", bg: "bg-amber-50 border-amber-100", hover: "hover:border-amber-200 hover:shadow-amber-100/60" }
  ];

  const partners = [
    {
      name: "BVRIT",
      fullName: "BV Raju Institute of Technology",
      desc: "Academic parent institution and campus host",
      role: "Academic Partner",
      logo: bvritLogo,
      logoBg: "bg-white",
    },
    {
      name: "Kaiteki Innovations",
      fullName: "Kaiteki Innovations",
      desc: "Industry partner for deep tech and assistive tech",
      role: "Industry Partner",
      logo: kaitekiLogo,
      logoBg: "bg-white",
    },
    {
      name: "TGIC",
      fullName: "Telangana Government Innovation Council",
      desc: "Government partner enabling startup access across Telangana",
      role: "Government Partner",
      logo: tgicLogo,
      logoBg: "bg-white",
    },
    {
      name: "TGTF",
      fullName: "The Good Talk Factory Foundation",
      desc: "Communication and storytelling partner for our founders",
      role: "Storytelling Partner",
      logo: tgtfLogo,
      logoBg: "bg-white",
    },
  ];

  const missionPoints = [
    "Foster cross-sector collaboration between academia and industry.",
    "Equip innovators with essential skills, tools, and networks.",
    "Build solutions strictly aligned with UN Sustainable Development Goals.",
  ];

  return (
    <section id="about" className="bg-white relative">

      {/* ── About 2-Col Layout ── */}
      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
          <FadeIn direction="right">
            <div className="relative">
              <div className="absolute inset-0 bg-[#2563EB]/8 rounded-3xl translate-x-4 translate-y-4 -z-10" />
              <img 
                src={`${import.meta.env.BASE_URL}images/startup-networking.jpg`} 
                alt="VVLF Startup Ecosystem" 
                loading="lazy"
                className="w-full rounded-2xl shadow-xl object-cover aspect-square"
              />
            </div>
          </FadeIn>
          
          <FadeIn direction="left">
            <div className="space-y-8">
              <div>
                <p className="text-[#2563EB] font-semibold tracking-[0.14em] text-[11px] uppercase mb-4">About VVLF</p>
                <h2 className="font-display font-bold text-[#0B1121] leading-[1.08] mb-5" style={{ fontSize: "clamp(1.8rem, 3.2vw, 2.6rem)" }}>
                  A Foundation That Opens Doors
                </h2>
                <p className="text-slate-500 text-[16px] leading-[1.8]">
                  Vishnu Venture Labs Foundation is a not-for-profit innovation ecosystem at BVRIT, helping student founders validate, build, and launch ventures — with real mentorship, infrastructure, and industry access.
                </p>
              </div>

              <div className="space-y-3">
                <div className="bg-[#F6F8FB] p-5 rounded-2xl border border-slate-100/80">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-xl bg-[#2563EB]/10 flex items-center justify-center text-[#2563EB] shrink-0">
                      <Target className="w-3.5 h-3.5" />
                    </div>
                    <h3 className="text-[15px] font-semibold text-[#0B1121]">Our Vision</h3>
                  </div>
                  <p className="text-slate-500 text-[14px] leading-[1.75]">A world-class, purpose-driven innovation ecosystem that nurtures inclusive, sustainable, and deep tech ventures — contributing to economic growth and UN SDGs.</p>
                </div>

                <div className="bg-[#F6F8FB] p-5 rounded-2xl border border-slate-100/80">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-xl bg-[#2563EB]/10 flex items-center justify-center text-[#2563EB] shrink-0">
                      <Lightbulb className="w-3.5 h-3.5" />
                    </div>
                    <h3 className="text-[15px] font-semibold text-[#0B1121]">Our Mission</h3>
                  </div>
                  <ul className="space-y-2.5">
                    {missionPoints.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-slate-500 text-[14px] leading-[1.6]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* ── Ecosystem Partners ── */}
        <div className="mb-28">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-[#2563EB] font-semibold tracking-[0.14em] text-[11px] uppercase mb-4">Ecosystem Partners</p>
              <h2 className="font-display font-bold text-[#0B1121] leading-[1.08] mb-3" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
                Built on Strong Partnerships
              </h2>
              <p className="text-slate-500 text-[15px] leading-[1.7]">Backed by academia, industry, and government — so our founders have every door open.</p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {partners.map((partner, i) => (
              <FadeIn key={partner.name} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-[0_12px_28px_rgba(0,0,0,0.08),0_0_16px_rgba(37,99,235,0.06)] hover:border-[#2563EB]/15 transition-shadow duration-300 flex flex-col items-center text-center h-full cursor-default"
                >
                  <div className={`w-full h-20 rounded-xl flex items-center justify-center mb-5 ${partner.logoBg} border border-slate-100 p-4 overflow-hidden`}>
                    <img
                      src={partner.logo}
                      alt={partner.fullName}
                      loading="lazy"
                      className="max-h-full max-w-full object-contain transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-105"
                    />
                  </div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#2563EB]/8 text-[#2563EB] text-[10px] font-semibold uppercase tracking-wider mb-2.5">
                    {partner.role}
                  </span>
                  <h3 className="text-[14px] font-semibold text-[#0B1121] mb-1.5 leading-snug">{partner.fullName}</h3>
                  <p className="text-slate-400 text-[12px] leading-relaxed">{partner.desc}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* ── Thrust Areas ── */}
        <div>
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-[#2563EB] font-semibold tracking-[0.14em] text-[11px] uppercase mb-4">Key Thrust Areas</p>
              <h2 className="font-display font-bold text-[#0B1121] leading-[1.08] mb-3" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
                Domains We Focus On
              </h2>
              <p className="text-slate-500 text-[15px] leading-[1.7]">Strategically chosen areas where student innovation can create real-world impact.</p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {thrustAreas.map((area, i) => (
              <FadeIn key={area.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`group bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition-all duration-300 h-full cursor-default ${area.hover}`}
                >
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-5 transition-all duration-200 group-hover:scale-110 ${area.bg}`}>
                    <area.icon className={`w-4.5 h-4.5 ${area.color} w-4 h-4`} />
                  </div>
                  <h3 className="font-display font-bold text-[#0B1121] text-[15px] mb-2">{area.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{area.desc}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
