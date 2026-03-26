import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Programs",
    href: "/programs",
    dropdown: [
      { name: "Failathon", href: "/programs#failathon" },
      { name: "PIVOT Makeathon", href: "/programs#pivot" },
      { name: "Project SAARTHIS", href: "/programs#saarthis" },
      { name: "EPICS Cohort", href: "/programs#epics" },
      { name: "Pre-Incubation Cohort", href: "/programs#pre-incubation" },
    ],
  },
  { name: "Startups", href: "/startups" },
  { name: "Events", href: "/events" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const isHome = location === "/";
  const isTransparent = isHome && !isScrolled;

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isTransparent
          ? "bg-transparent py-5"
          : "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0 group">
            <div
              className={`rounded-xl p-1.5 transition-all group-hover:scale-105 ${
                isTransparent ? "bg-white/10 backdrop-blur-sm" : "bg-white shadow-sm"
              }`}
            >
              <img
                src={`${import.meta.env.BASE_URL}images/vvlf-logo.png`}
                alt="Vishnu Venture Labs Foundation"
                className="h-9 w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.name} className="relative group">
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                      isTransparent
                        ? isActive(link.href)
                          ? "text-white bg-white/20"
                          : "text-white/80 hover:text-white hover:bg-white/10"
                        : isActive(link.href)
                        ? "text-primary bg-primary/10"
                        : "text-slate-600 hover:text-primary hover:bg-slate-50"
                    }`}
                  >
                    {link.name}
                    <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-200" />
                  </Link>
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-2xl shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0">
                    <div className="p-2">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="flex items-center gap-2 px-4 py-2.5 text-sm text-slate-600 hover:text-primary hover:bg-slate-50 rounded-xl transition-colors"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span>
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                    isTransparent
                      ? isActive(link.href)
                        ? "text-white bg-white/20"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                      : isActive(link.href)
                      ? "text-primary bg-primary/10"
                      : "text-slate-600 hover:text-primary hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                </Link>
              )
            )}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link href="/contact">
              <Button
                className="hidden md:flex bg-primary hover:bg-primary/90 text-white rounded-full px-6 text-sm font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                Apply Now
              </Button>
            </Link>

            <button
              className={`lg:hidden p-2 rounded-xl transition-colors ${
                isTransparent ? "text-white hover:bg-white/10" : "text-navy hover:bg-slate-100"
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
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center justify-between font-semibold py-3 px-4 rounded-xl transition-colors ${
                  isActive(link.href)
                    ? "text-primary bg-primary/5"
                    : "text-navy hover:bg-slate-50"
                }`}
              >
                {link.name}
                {link.dropdown && <ChevronDown className="w-4 h-4 text-slate-400" />}
              </Link>
            ))}
            <div className="pt-3 mt-1 border-t border-slate-100">
              <Link href="/contact">
                <Button className="w-full bg-primary rounded-full font-semibold">Apply Now</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
