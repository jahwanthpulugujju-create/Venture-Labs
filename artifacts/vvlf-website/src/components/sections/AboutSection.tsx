import { FadeIn } from "@/components/FadeIn";
import { Cpu, Microchip, UserCheck, Leaf, Target, Lightbulb } from "lucide-react";

export function AboutSection() {
  const thrustAreas = [
    { icon: Cpu, title: "Deep Tech", desc: "AI, IoT, Robotics, and emerging technologies." },
    { icon: Microchip, title: "Semiconductors", desc: "Hardware innovation and chip design." },
    { icon: UserCheck, title: "Assistive Technology", desc: "Inclusive solutions for persons with disabilities." },
    { icon: Leaf, title: "Sustainability", desc: "Green tech and climate-focused innovations." }
  ];

  const partners = [
    { name: "BVRIT", initial: "B", color: "bg-blue-100 text-blue-600" },
    { name: "Kaiteki Innovations", initial: "K", color: "bg-purple-100 text-purple-600" },
    { name: "TGIC", initial: "T", color: "bg-emerald-100 text-emerald-600" }
  ];

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About 2-Col Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <FadeIn direction="right">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-3xl translate-x-4 translate-y-4 -z-10" />
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
                <h2 className="text-primary font-bold tracking-wider text-sm uppercase mb-2">About VVLF</h2>
                <h3 className="text-4xl font-display font-bold text-navy mb-6">Empowering Innovators for Global Impact</h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Vishnu Venture Labs Foundation (VVLF) is the incubation center of BV Raju Institute of Technology, operating as a not-for-profit Section 8 Company. We empower early-stage startups, innovators, and researchers with world-class infrastructure, mentorship, and industry networks.
                </p>
              </div>

              <div className="grid gap-6">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Target className="w-5 h-5" />
                    </div>
                    <h4 className="text-xl font-bold text-navy">Our Vision</h4>
                  </div>
                  <p className="text-slate-600">To build a world class, purpose-driven innovation ecosystem that nurtures inclusive, sustainable, and deep tech innovations — contributing to both economic growth and the UN Sustainable Development Goals.</p>
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Lightbulb className="w-5 h-5" />
                    </div>
                    <h4 className="text-xl font-bold text-navy">Our Mission</h4>
                  </div>
                  <ul className="space-y-2 text-slate-600 list-disc list-inside ml-4 marker:text-primary">
                    <li>Foster cross-sector collaboration between academia and industry.</li>
                    <li>Equip innovators with essential skills, tools, and networks.</li>
                    <li>Optimize solutions strictly aligned with the SDGs.</li>
                  </ul>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Ecosystem Partners */}
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-primary font-bold tracking-wider text-sm uppercase mb-2">Ecosystem Partners</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-navy">Built on Strong Partnerships</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
            {partners.map((partner, i) => (
              <FadeIn key={partner.name} delay={i * 0.1}>
                <div className="group bg-white rounded-2xl p-8 border border-slate-200 shadow-lg shadow-slate-200/20 hover:shadow-xl hover:-translate-y-1 hover:border-primary/30 transition-all duration-300 flex flex-col items-center text-center cursor-pointer">
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center font-display font-bold text-3xl mb-6 ${partner.color} group-hover:scale-110 transition-transform`}>
                    {partner.initial}
                  </div>
                  <h4 className="text-xl font-bold text-navy">{partner.name}</h4>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>

        {/* Thrust Areas */}
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-primary font-bold tracking-wider text-sm uppercase mb-2">Key Thrust Areas</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-navy">Driving Innovation Through Focused Domains</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {thrustAreas.map((area, i) => (
              <FadeIn key={area.title} delay={i * 0.1}>
                <div className="group relative bg-white rounded-2xl p-6 border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 text-navy flex items-center justify-center mb-6 group-hover:bg-white/20 group-hover:text-white transition-colors">
                      <area.icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold text-navy mb-2 group-hover:text-white transition-colors">{area.title}</h4>
                    <p className="text-slate-500 group-hover:text-white/80 transition-colors">{area.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
