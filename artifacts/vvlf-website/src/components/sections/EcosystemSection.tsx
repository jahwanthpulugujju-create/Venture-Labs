import { FadeIn } from "@/components/FadeIn";
import { Building2, Users, FileCheck, Landmark, Network, Laptop, Server, Hammer, ExternalLink, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function EcosystemSection() {
  const facilities = [
    { icon: Building2, title: "Co-Working Space", desc: "State-of-the-art office infrastructure." },
    { icon: Users, title: "Mentorship", desc: "Access to industry veterans and experts." },
    { icon: FileCheck, title: "IP Support", desc: "Guidance on patents and trademarks." },
    { icon: Landmark, title: "Funding", desc: "Seed fund connections and pitch prep." },
    { icon: Network, title: "Networking Events", desc: "Exclusive investor and founder meetups." },
    { icon: Laptop, title: "Software Tools", desc: "Free credits for AWS, GitHub, etc." },
    { icon: Server, title: "Tech Infrastructure", desc: "High-speed internet and servers." },
    { icon: Hammer, title: "Maker Lab", desc: "Hardware prototyping and 3D printing." }
  ];

  const startups = [
    {
      name: "Innovable Solutions",
      desc: "Inclusive learning tools for children with disabilities (SDG 4)",
      logo: "startup-innovable.png",
      logoBg: "bg-white"
    },
    {
      name: "MXC Ignite",
      desc: "Student-led ecosystem connecting students with founders",
      logo: "startup-mxc.png",
      logoBg: "bg-white"
    },
    {
      name: "Nirvaha Wellness",
      desc: "Wellness-tech blending ancient wisdom with AI",
      logo: "startup-nirvaha.png",
      logoBg: "bg-[#0d2b2e]"
    },
    {
      name: "OLynk.AI",
      desc: "AI-powered virtual COO for Indian D2C brands",
      logo: "startup-olynk.png",
      logoBg: "bg-[#f5f0eb]"
    },
    {
      name: "SALO",
      desc: "Digital platform for booking salon and spa services",
      logo: "startup-salo.png",
      logoBg: "bg-black"
    },
    {
      name: "Stud Entertainments",
      desc: "Filmmaking and tech startup delivering CinemaTech solutions",
      logo: "startup-studento.png",
      logoBg: "bg-white"
    },
    {
      name: "VIINDE Instruments",
      desc: "Smart dental solutions for practitioners",
      logo: "startup-viinde.png",
      logoBg: "bg-white"
    }
  ];

  return (
    <>
      <section id="facilities" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-primary font-bold tracking-wider text-sm uppercase mb-2">Our Facilities</h2>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-navy">World-Class Infrastructure</h3>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((fac, i) => (
              <FadeIn key={fac.title} delay={i * 0.05}>
                <div className="p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:border-primary/20 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <fac.icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-navy mb-2">{fac.title}</h4>
                  <p className="text-sm text-slate-500">{fac.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="startups" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-primary font-bold tracking-wider text-sm uppercase mb-2">Portfolio Startups</h2>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-navy">Ventures We Are Proud Of</h3>
              </div>
              <Button variant="outline" className="rounded-full border-slate-300">View All Portfolio</Button>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {startups.map((startup, i) => (
              <FadeIn key={startup.name} delay={i * 0.08}>
                <div className="bg-white rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col overflow-hidden group">
                  {/* Logo area */}
                  <div className={`w-full h-44 ${startup.logoBg} flex items-center justify-center p-6 border-b border-slate-100`}>
                    <img
                      src={`${import.meta.env.BASE_URL}images/${startup.logo}`}
                      alt={startup.name}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-bold text-navy leading-snug">{startup.name}</h4>
                      <a href="#" className="text-slate-300 hover:text-[#0A66C2] transition-colors shrink-0 ml-2">
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </div>
                    <p className="text-sm text-slate-500 flex-1 mb-4">{startup.desc}</p>

                    <div className="pt-4 border-t border-slate-100">
                      <a href="#" className="inline-flex items-center text-sm font-semibold text-primary hover:text-navy transition-colors group">
                        Know More <ExternalLink className="ml-1.5 w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
