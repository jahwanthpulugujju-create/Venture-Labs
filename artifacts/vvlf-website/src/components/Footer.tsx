import { Instagram, Linkedin, Facebook, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white font-display font-bold text-2xl shadow-lg">
                V
              </div>
              <span className="font-display font-bold text-2xl tracking-tight">
                VVLF
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Vishnu Venture Labs Foundation. Turning impactful ideas into scalable ventures. Empowering early-stage startups with world-class infrastructure.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#programs" className="hover:text-primary transition-colors">Programs</a></li>
              <li><a href="#facilities" className="hover:text-primary transition-colors">Facilities</a></li>
              <li><a href="#startups" className="hover:text-primary transition-colors">Startups</a></li>
              <li><a href="#team" className="hover:text-primary transition-colors">Team</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Our Programs</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#programs" className="hover:text-primary transition-colors">Pre-Incubation Cohort</a></li>
              <li><a href="#programs" className="hover:text-primary transition-colors">Failathon</a></li>
              <li><a href="#programs" className="hover:text-primary transition-colors">PIVOT Makeathon</a></li>
              <li><a href="#programs" className="hover:text-primary transition-colors">Project SAARTHIS</a></li>
              <li><a href="#programs" className="hover:text-primary transition-colors">EPICS Cohort</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>Vishnu Venture Labs Foundation, Vishnupur, Narsapur, Suryapaget - 502313</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>vvlf@bvrit.ac.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © 2025 Vishnu Venture Labs Foundation. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
