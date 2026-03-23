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
    { name: "Innovable Solutions", desc: "Inclusive learning tools for children with disabilities (SDG 4)", color: "bg-blue-500" },
    { name: "MXC Ignite", desc: "Student-led ecosystem connecting students with founders", color: "bg-indigo-500" },
    { name: "Nirvaha Wellness", desc: "Wellness-tech blending ancient wisdom with AI", color: "bg-emerald-500" },
    { name: "OLynk.AI", desc: "AI-powered virtual COO for Indian D2C brands", color: "bg-sky-500" },
    { name: "SALO", desc: "Digital platform for booking salon and spa services", color: "bg-rose-500" },
    { name: "Stud Entertainments", desc: "Filmmaking and tech startup delivering CinemaTech", color: "bg-orange-500" },
    { name: "VIINDE Instruments", desc: "Smart dental solutions for practitioners", color: "bg-teal-500" }
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

      <section id="startups" className="py-24 bg-background">
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
              <FadeIn key={startup.name} delay={i * 0.1}>
                <div className="bg-white rounded-3xl p-8 shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all h-full flex flex-col">
                  <div className="flex justify-between items-start mb-6">
                    <div className={`w-16 h-16 rounded-2xl ${startup.color} flex items-center justify-center text-white font-display font-bold text-2xl shadow-lg`}>
                      {startup.name.substring(0, 2).toUpperCase()}
                    </div>
                    <a href="#" className="text-slate-400 hover:text-[#0A66C2] transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                  
                  <h4 className="text-xl font-bold text-navy mb-3">{startup.name}</h4>
                  <p className="text-slate-600 mb-8 flex-grow">{startup.desc}</p>
                  
                  <div className="pt-6 border-t border-slate-100">
                    <a href="#" className="inline-flex items-center text-sm font-semibold text-primary hover:text-navy transition-colors">
                      Know More <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
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
