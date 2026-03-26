import { FadeIn } from "@/components/FadeIn";
import { Linkedin } from "lucide-react";

const board = [
  { name: "Shri R. Rajagopal", title: "Vice Chairman", photo: "team-rajagopal.png" },
  { name: "Shri K. Aditya Vissam", title: "Secretary", photo: "team-aditya.png" },
  { name: "Dr. K. Lakshmi Prasad", title: "Director", photo: "team-lakshmi.png" },
  { name: "Dr. Sanjay Dubey", title: "Principal", photo: "team-sanjay.png" },
];

const team = [
  { name: "Dr. M. K. Kaushik", title: "Director", photo: "team-kaushik.png" },
  { name: "Rohith Sirpa", title: "Manager", photo: "team-rohith.png" },
];

export function TeamSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-primary font-bold tracking-wider text-sm uppercase mb-2">Our People</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-navy">The Visionaries Behind VVLF</h3>
          </div>
        </FadeIn>

        <div className="mb-20">
          <h4 className="text-xl font-bold text-center text-slate-500 mb-10 uppercase tracking-widest text-sm">Board of Directors</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {board.map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.1}>
                <div className="text-center group">
                  <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-6 border-4 border-white shadow-xl shadow-slate-200/50">
                    <img
                      src={`${import.meta.env.BASE_URL}images/${member.photo}`}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h5 className="text-lg font-bold text-navy">{member.name}</h5>
                  <p className="text-slate-500">{member.title}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xl font-bold text-center text-slate-500 mb-10 uppercase tracking-widest text-sm">Our Team</h4>
          <div className="flex flex-wrap justify-center gap-12">
            {team.map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.1}>
                <div className="text-center group w-64">
                  <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 border-4 border-white shadow-xl shadow-slate-200/50">
                    <img
                      src={`${import.meta.env.BASE_URL}images/${member.photo}`}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <a href="#" className="w-10 h-10 rounded-full bg-white text-[#0A66C2] flex items-center justify-center hover:scale-110 transition-transform">
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  <h5 className="text-xl font-bold text-navy">{member.name}</h5>
                  <p className="text-slate-500">{member.title}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
