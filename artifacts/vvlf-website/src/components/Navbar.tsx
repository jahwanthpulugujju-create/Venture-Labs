import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const programs = ["Failathon", "PIVOT", "SAARTHIS", "EPICS Cohort", "Pre-Incubation"];

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Programs", href: "#programs", dropdown: true },
    { name: "Facilities", href: "#facilities" },
    { name: "Startups", href: "#startups" },
    { name: "Team", href: "#team" },
    { name: "Events", href: "#events" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group shrink-0">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-white font-display font-bold text-lg shadow-lg shadow-primary/30 group-hover:scale-105 transition-transform">
              V
            </div>
            <div className="hidden sm:block">
              <div className={`font-display font-bold text-base leading-none tracking-tight ${isScrolled ? "text-navy" : "text-white"}`}>
                Vishnu Venture Labs
              </div>
              <div className={`text-xs font-medium tracking-wider uppercase ${isScrolled ? "text-primary" : "text-primary/80"}`}>
                Foundation
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.name} className="relative group">
                  <a
                    href={link.href}
                    className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                      isScrolled
                        ? "text-slate-600 hover:text-primary hover:bg-slate-50"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.name}
                    <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-200" />
                  </a>
                  <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-2xl shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0">
                    <div className="p-2">
                      {programs.map((item) => (
                        <a
                          key={item}
                          href="#programs"
                          className="flex items-center gap-2 px-4 py-2.5 text-sm text-slate-600 hover:text-primary hover:bg-slate-50 rounded-xl transition-colors"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span>
                          {item}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                    isScrolled
                      ? "text-slate-600 hover:text-primary hover:bg-slate-50"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.name}
                </a>
              )
            )}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Button
              className="hidden md:flex bg-primary hover:bg-primary/90 text-white rounded-full px-6 text-sm font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              Apply Now
            </Button>

            <button
              className={`lg:hidden p-2 rounded-xl transition-colors ${
                isScrolled ? "text-navy hover:bg-slate-100" : "text-white hover:bg-white/10"
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 py-4 px-4">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-navy font-semibold py-3 px-4 rounded-xl hover:bg-slate-50 transition-colors"
              >
                {link.name}
                {link.dropdown && <ChevronDown className="w-4 h-4 text-slate-400" />}
              </a>
            ))}
            <div className="pt-3 mt-1 border-t border-slate-100">
              <Button className="w-full bg-primary rounded-full font-semibold">Apply Now</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
