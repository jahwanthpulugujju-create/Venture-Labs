import { FadeIn } from "@/components/FadeIn";
import { Cpu, Microchip, UserCheck, Leaf, Target, Lightbulb, CheckCircle2 } from "lucide-react";

export function AboutSection() {
  const thrustAreas = [
    { icon: Cpu, title: "Deep Tech", desc: "AI, IoT, Robotics, and emerging technologies shaping tomorrow.", color: "text-blue-400", bg: "bg-blue-500/10 border-blue-500/20" },
    { icon: Microchip, title: "Semiconductors", desc: "Hardware innovation and chip design for India's tech future.", color: "text-purple-400", bg: "bg-purple-500/10 border-purple-500/20" },
    { icon: UserCheck, title: "Assistive Technology", desc: "Inclusive solutions for persons with disabilities — by students, for everyone.", color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20" },
    { icon: Leaf, title: "Sustainability", desc: "Green tech and climate-focused innovations aligned with global SDGs.", color: "text-yellow-400", bg: "bg-yellow-500/10 border-yellow-500/20" }
  ];

  const partners = [
    { name: "BVRIT", desc: "Academic parent institution and campus host", initial: "B", color: "bg-blue-100 text-blue-600" },
    { name: "Kaiteki Innovations", desc: "Industry partner for deep tech and assistive tech", initial: "K", color: "bg-purple-100 text-purple-600" },
    { name: "TGIC", desc: "Government partner — Telangana Innovation Council", initial: "T", color: "bg-emerald-100 text-emerald-600" }
  ];

  const missionPoints = [
    "Foster cross-sector collaboration between academia and industry.",
    "Equip innovators with essential skills, tools, and networks.",
    "Build solutions strictly aligned with UN Sustainable Development Goals.",
  ];

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About 2-Col Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <FadeIn direction="right">
            <div className="relative">
              <div className="absolute inset-0 bg-[#2563EB]/10 rounded-3xl translate-x-4 translate-y-4 -z-10" />
              <img 
                src={`${import.meta.env.BASE_URL}images/startup-networking.jpg`} 
                alt="VVLF Startup Ecosystem" 
                className="w-full rounded-3xl shadow-xl object-cover aspect-square"
              />
            </div>
          </FadeIn>
          
          <FadeIn direction="left">
            <div className="space-y-8">
              <div>
                <p className="text-[#2563EB] font-bold tracking-wider text-xs uppercase mb-3">About VVLF</p>
                <h3 className="text-4xl font-display font-bold text-[#0B0F19] leading-[1.1] mb-5">
                  Empowering Innovators for Global Impact
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Vishnu Venture Labs Foundation is the incubation center of BV Raju Institute of Technology — a not-for-profit Section 8 Company that turns student ideas into scalable, incorporated ventures.
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-[#2563EB]/10 flex items-center justify-center text-[#2563EB] shrink-0">
                      <Target className="w-4.5 h-4.5" />
                    </div>
                    <h4 className="text-base font-bold text-[#0B0F19]">Our Vision</h4>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">A world-class, purpose-driven innovation ecosystem that nurtures inclusive, sustainable, and deep tech ventures — contributing to economic growth and UN SDGs.</p>
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-[#2563EB]/10 flex items-center justify-center text-[#2563EB] shrink-0">
                      <Lightbulb className="w-4.5 h-4.5" />
                    </div>
                    <h4 className="text-base font-bold text-[#0B0F19]">Our Mission</h4>
                  </div>
                  <ul className="space-y-2">
                    {missionPoints.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-slate-600 text-sm leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Ecosystem Partners */}
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-[#2563EB] font-bold tracking-wider text-xs uppercase mb-3">Ecosystem Partners</p>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-[#0B0F19]">Built on Strong Partnerships</h3>
            <p className="text-slate-500 mt-3">Backed by academia, industry, and government — so our founders have every door open.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
            {partners.map((partner, i) => (
              <FadeIn key={partner.name} delay={i * 0.1}>
                <div className="group bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#2563EB]/20 transition-all duration-300 flex flex-col items-center text-center cursor-pointer">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center font-display font-bold text-2xl mb-5 ${partner.color} group-hover:scale-110 transition-transform`}>
                    {partner.initial}
                  </div>
                  <h4 className="text-lg font-bold text-[#0B0F19] mb-1">{partner.name}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{partner.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>

        {/* Thrust Areas */}
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-[#2563EB] font-bold tracking-wider text-xs uppercase mb-3">Key Thrust Areas</p>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-[#0B0F19]">Domains We Focus On</h3>
            <p className="text-slate-500 mt-3">Strategically chosen areas where student innovation can create real-world impact.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {thrustAreas.map((area, i) => (
              <FadeIn key={area.title} delay={i * 0.1}>
                <div className="group bg-white rounded-2xl p-6 border border-slate-100 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 h-full">
                  <div className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-5 ${area.bg}`}>
                    <area.icon className={`w-5 h-5 ${area.color}`} />
                  </div>
                  <h4 className="text-base font-bold text-[#0B0F19] mb-2">{area.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{area.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
