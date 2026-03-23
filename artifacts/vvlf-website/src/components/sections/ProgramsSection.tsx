import { FadeIn } from "@/components/FadeIn";
import { ArrowRight } from "lucide-react";

export function ProgramsSection() {
  const programs = [
    {
      title: "Failathon",
      desc: "We hosted a Failathon for 1st and 2nd year students at BVRIT, centered on the motto 'Come, let's Fail, and Learn.' Emphasized experiential learning and creative problem-solving using ideation tools to reframe failure as a vital part of innovation.",
      img: "failathon.png",
      layout: "left"
    },
    {
      title: "PIVOT Makeathon",
      desc: "24 hours, countless ideas, one epic journey! PIVOT was a Makeathon for 2nd and 3rd year students — a whirlwind of creativity, innovation, and teamwork. From brainstorming to breakthroughs, students showed incredible resilience.",
      img: "pivot.png",
      layout: "right"
    },
    {
      title: "Project SAARTHIS",
      desc: "A year-long student innovation journey by VVLF, BVRIT, and Kaiteki Innovations to co-create accessible, inclusive solutions for persons with disabilities.",
      img: "saarthis.png",
      layout: "left"
    },
    {
      title: "EPICS Cohort",
      desc: "True innovation stems from direct engagement with real-world challenges. At the EPICS Cohort Event at BVRIT, VVLF mentored 49 multidisciplinary student teams developing tangible solutions for pressing community needs.",
      img: "epics.png",
      layout: "right"
    }
  ];

  const preIncubationStartups = [
    { name: "OLynk.AI", category: "SaaS", color: "bg-blue-500" },
    { name: "MXC", category: "Edu-Tech", color: "bg-indigo-500" },
    { name: "Stud Entertainments", category: "Entertainment", color: "bg-rose-500" },
    { name: "Nirvaha Wellness", category: "Wellness", color: "bg-emerald-500" }
  ];

  return (
    <section id="programs" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-primary font-bold tracking-wider text-sm uppercase mb-2">Our Programs</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-navy">Empowering the Next Generation</h3>
          </div>
        </FadeIn>

        <div className="space-y-32">
          {programs.map((program, i) => (
            <div key={program.title} className={`flex flex-col lg:flex-row gap-12 items-center ${program.layout === 'right' ? 'lg:flex-row-reverse' : ''}`}>
              <div className="w-full lg:w-1/2">
                <FadeIn direction={program.layout === 'left' ? 'right' : 'left'}>
                  <div className="relative group rounded-3xl overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors z-10" />
                    <img 
                      src={`${import.meta.env.BASE_URL}images/${program.img}`} 
                      alt={program.title}
                      className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </FadeIn>
              </div>
              <div className="w-full lg:w-1/2">
                <FadeIn direction={program.layout === 'left' ? 'left' : 'right'} delay={0.2}>
                  <h4 className="text-3xl font-display font-bold text-navy mb-6">{program.title}</h4>
                  <p className="text-lg text-slate-600 leading-relaxed mb-8">{program.desc}</p>
                  <a href="#" className="inline-flex items-center text-primary font-semibold hover:text-navy transition-colors group">
                    Explore Program <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </FadeIn>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pre-Incubation Highlight */}
      <div className="bg-navy py-20 mt-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Pre-Incubation Cohort 1.0</h3>
              <p className="text-lg text-slate-300">
                Our inaugural Pre-Incubation Cohort 1.0 has successfully concluded, resulting in the incubation of four promising startups.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {preIncubationStartups.map((startup, i) => (
              <FadeIn key={startup.name} delay={i * 0.1}>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all cursor-pointer group">
                  <div className={`w-12 h-12 rounded-xl ${startup.color} flex items-center justify-center text-white font-bold text-xl mb-6 shadow-lg`}>
                    {startup.name.charAt(0)}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{startup.name}</h4>
                  <p className="text-slate-400 text-sm">{startup.category}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
