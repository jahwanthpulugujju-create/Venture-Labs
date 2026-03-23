import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    {
      name: "Programs",
      href: "#programs",
      dropdown: ["Failathon", "PIVOT", "SAARTHIS", "EPICS-Cohort", "Pre-Incubation"],
    },
    { name: "Facilities", href: "#facilities" },
    { name: "Startups", href: "#startups" },
    { name: "Team", href: "#team" },
    { name: "Events", href: "#events" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white font-display font-bold text-xl shadow-lg shadow-primary/25 group-hover:scale-105 transition-transform">
              V
            </div>
            <span className={`font-display font-bold text-xl tracking-tight hidden sm:block ${isScrolled ? "text-navy" : "text-white"}`}>
              VVLF
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <a
                  href={link.href}
                  className={`text-sm font-semibold transition-colors flex items-center gap-1 ${
                    isScrolled
                      ? "text-slate-600 hover:text-primary"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.name}
                  {link.dropdown && <ChevronDown className="w-4 h-4" />}
                </a>
                
                {link.dropdown && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all translate-y-2 group-hover:translate-y-0">
                    <div className="p-2 flex flex-col">
                      {link.dropdown.map((item) => (
                        <a
                          key={item}
                          href={`#programs`}
                          className="px-4 py-2 text-sm text-slate-600 hover:text-primary hover:bg-slate-50 rounded-lg transition-colors"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Button
              className="hidden md:flex bg-primary hover:bg-primary/90 text-white rounded-full px-6 shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              Apply Now
            </Button>
            
            <button
              className={`lg:hidden p-2 rounded-lg ${isScrolled ? "text-navy" : "text-white"}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-navy font-semibold text-lg py-2 border-b border-slate-50"
            >
              {link.name}
            </a>
          ))}
          <Button className="w-full mt-2 bg-primary rounded-full">Apply Now</Button>
        </div>
      )}
    </header>
  );
}
