import { Link } from "wouter";
import { Instagram, Linkedin, Mail, MapPin, ArrowUpRight } from "lucide-react";

const links = {
  explore: [
    { label: "About Us", href: "/about" },
    { label: "Programs", href: "/programs" },
    { label: "Startups", href: "/startups" },
    { label: "Events", href: "/events" },
    { label: "Team", href: "/team" },
    { label: "Contact", href: "/contact" },
  ],
  programs: [
    { label: "Pre-Incubation Cohort", href: "/programs#pre-incubation" },
    { label: "Failathon", href: "/programs#failathon" },
    { label: "PIVOT Makeathon", href: "/programs#pivot" },
    { label: "Project SAARTHIS", href: "/programs#saarthis" },
    { label: "EPICS Cohort", href: "/programs#epics" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#080c14] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top strip — CTA */}
        <div className="border-b border-white/[0.06] py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white/30 text-xs font-bold uppercase tracking-widest mb-1">Cohort 2.0 Open</p>
            <p className="text-white font-bold text-xl">Ready to build your startup at VVLF?</p>
          </div>
          <Link href="/contact">
            <button className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#2563EB]/90 text-white font-bold px-7 py-3.5 rounded-full text-sm shadow-[0_0_24px_rgba(37,99,235,0.3)] hover:-translate-y-0.5 transition-all whitespace-nowrap">
              Apply Now
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </Link>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 py-16">

          {/* Brand */}
          <div className="lg:col-span-1 space-y-6">
            <div className="rounded-xl bg-white p-2 w-fit shadow-sm">
              <img
                src={`${import.meta.env.BASE_URL}images/vvlf-logo.png`}
                alt="Vishnu Venture Labs Foundation"
                className="h-9 w-auto object-contain"
              />
            </div>
            <p className="text-white/35 text-sm leading-relaxed max-w-xs">
              Incubation center of BV Raju Institute of Technology. Turning student ideas into scalable ventures since 2024.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/vishnuventurelabsfoundation/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/vishnu-venture-labs-foundation/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:vvlf@bvrit.ac.in"
                className="w-9 h-9 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <p className="text-white/30 text-[10px] font-bold uppercase tracking-[0.18em] mb-5">Explore</p>
            <ul className="space-y-3">
              {links.explore.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-white/50 text-sm hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <p className="text-white/30 text-[10px] font-bold uppercase tracking-[0.18em] mb-5">Programs</p>
            <ul className="space-y-3">
              {links.programs.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-white/50 text-sm hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white/30 text-[10px] font-bold uppercase tracking-[0.18em] mb-5">Contact</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                <span className="text-white/40 text-sm leading-relaxed">
                  Vishnupur, Narsapur, Suryapaget — 502313
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#2563EB] shrink-0" />
                <a href="mailto:vvlf@bvrit.ac.in" className="text-white/40 text-sm hover:text-white transition-colors">
                  vvlf@bvrit.ac.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/20 text-xs">
            © 2025 Vishnu Venture Labs Foundation · Section 8 Company · All rights reserved.
          </p>
          <div className="flex gap-5 text-xs text-white/20">
            <a href="#" className="hover:text-white/50 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/50 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
