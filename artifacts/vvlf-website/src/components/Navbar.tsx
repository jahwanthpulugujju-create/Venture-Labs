import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  const isHome = location === "/";
  const transparent = isHome && !scrolled;

  const isActive = (href: string) =>
    href === "/" ? location === "/" : location.startsWith(href);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        transparent
          ? "bg-transparent py-5"
          : "bg-white/97 backdrop-blur-2xl shadow-[0_1px_0_0_rgba(0,0,0,0.05),0_4px_16px_rgba(0,0,0,0.04)] py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* ── Logo ── */}
        <Link href="/" className="flex items-center shrink-0 group">
          <div className="group-hover:opacity-85 transition-opacity duration-200">
            {transparent ? (
              <img
                src={`${import.meta.env.BASE_URL}images/vvlf-logo-transparent.png`}
                alt="Vishnu Venture Labs Foundation"
                className="h-10 w-auto object-contain"
              />
            ) : (
              <div className="rounded-xl p-1 bg-white shadow-sm border border-slate-100/80">
                <img
                  src={`${import.meta.env.BASE_URL}images/vvlf-logo.png`}
                  alt="Vishnu Venture Labs Foundation"
                  className="h-8 w-auto object-contain"
                />
              </div>
            )}
          </div>
        </Link>

        {/* ── Desktop Nav ── */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.name} className="relative group/dd">
                <Link
                  href={link.href}
                  className={`relative flex items-center gap-1 px-4 py-2 text-[13.5px] font-medium tracking-[-0.01em] transition-colors duration-150 rounded-lg ${
                    transparent
                      ? isActive(link.href)
                        ? "text-white"
                        : "text-white/65 hover:text-white/90"
                      : isActive(link.href)
                      ? "text-[#0B1121]"
                      : "text-slate-500 hover:text-[#0B1121]"
                  }`}
                >
                  {link.name}
                  <ChevronDown className="w-3 h-3 group-hover/dd:rotate-180 transition-transform duration-200 opacity-50" />
                  {/* Active underline */}
                  {isActive(link.href) && (
                    <span className={`absolute bottom-0 left-4 right-4 h-0.5 rounded-full ${transparent ? "bg-white/70" : "bg-[#2563EB]"}`} />
                  )}
                </Link>

                {/* Dropdown */}
                <div className="absolute top-full left-0 mt-1.5 w-56 bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12),0_1px_0_rgba(0,0,0,0.04)] border border-slate-100 opacity-0 invisible group-hover/dd:opacity-100 group-hover/dd:visible transition-all duration-200 translate-y-1 group-hover/dd:translate-y-0 pointer-events-none group-hover/dd:pointer-events-auto">
                  <div className="p-1.5">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center gap-2.5 px-3.5 py-2.5 text-[13px] text-slate-600 hover:text-[#0B1121] hover:bg-slate-50 rounded-xl transition-colors font-medium"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]/40 shrink-0" />
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
                className={`relative px-4 py-2 text-[13.5px] font-medium tracking-[-0.01em] transition-colors duration-150 rounded-lg ${
                  transparent
                    ? isActive(link.href)
                      ? "text-white"
                      : "text-white/65 hover:text-white/90"
                    : isActive(link.href)
                    ? "text-[#0B1121]"
                    : "text-slate-500 hover:text-[#0B1121]"
                }`}
              >
                {link.name}
                {/* Active underline */}
                {isActive(link.href) && (
                  <span className={`absolute bottom-0 left-4 right-4 h-0.5 rounded-full ${transparent ? "bg-white/70" : "bg-[#2563EB]"}`} />
                )}
              </Link>
            )
          )}
        </nav>

        {/* ── CTA + Mobile Toggle ── */}
        <div className="flex items-center gap-3">
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className={`hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-semibold tracking-[-0.01em] transition-all duration-200 ${
                transparent
                  ? "bg-[#2563EB] text-white shadow-[0_0_18px_rgba(37,99,235,0.45)] hover:shadow-[0_0_28px_rgba(37,99,235,0.55)]"
                  : "bg-[#0B1121] text-white hover:bg-[#0B1121]/88 shadow-[0_2px_8px_rgba(0,0,0,0.15)]"
              }`}
            >
              Apply Now
              <ArrowUpRight className="w-3.5 h-3.5" />
            </motion.button>
          </Link>

          <button
            className={`lg:hidden p-2 rounded-xl transition-colors ${
              transparent ? "text-white hover:bg-white/10" : "text-[#0B1121] hover:bg-slate-100"
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden"
          >
            <div className="bg-white/98 backdrop-blur-xl border-t border-slate-100 shadow-xl px-4 py-4">
              <div className="flex flex-col gap-0.5">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`flex items-center justify-between font-medium py-3 px-4 rounded-xl transition-colors text-[14px] tracking-[-0.01em] ${
                      isActive(link.href)
                        ? "text-[#2563EB] bg-[#2563EB]/6 font-semibold"
                        : "text-slate-700 hover:bg-slate-50 hover:text-[#0B1121]"
                    }`}
                  >
                    {link.name}
                    {link.dropdown && <ChevronDown className="w-4 h-4 text-slate-400" />}
                  </Link>
                ))}
                <div className="pt-3 mt-1 border-t border-slate-100">
                  <Link href="/contact">
                    <button className="w-full bg-[#0B1121] text-white font-semibold py-3.5 rounded-xl text-[14px] tracking-[-0.01em] hover:bg-[#0B1121]/90 transition-colors">
                      Apply for Incubation
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
