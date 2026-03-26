import { FadeIn } from "@/components/FadeIn";
import { Linkedin, Instagram, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks for your message! We'll get back to you soon.");
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-primary font-bold tracking-wider text-sm uppercase mb-2">Contact Us</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-navy">Let's Build Something Together</h3>
            <p className="text-slate-500 mt-4 text-lg">Have a question, partnership idea, or want to apply? Reach out to us.</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Contact Form */}
          <FadeIn direction="right">
            <div>
              <h3 className="text-2xl font-display font-bold text-navy mb-2">Get In Touch</h3>
              <p className="text-slate-500 mb-8">Drop us a line and we'll get back to you promptly.</p>

              <form onSubmit={handleSubmit} className="space-y-6 bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-navy">First Name</label>
                    <Input placeholder="John" required className="bg-white" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-navy">Last Name</label>
                    <Input placeholder="Doe" required className="bg-white" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-navy">Email Address</label>
                  <Input type="email" placeholder="john@example.com" required className="bg-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-navy">Subject</label>
                  <Input placeholder="How can we help you?" required className="bg-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-navy">Message</label>
                  <Textarea placeholder="Tell us more about your inquiry..." rows={5} required className="bg-white resize-none" />
                </div>
                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl shadow-lg shadow-primary/25">
                  Send Message
                </Button>
              </form>
            </div>
          </FadeIn>

          {/* Social & Contact Info */}
          <FadeIn direction="left">
            <div className="h-full flex flex-col justify-between gap-8">
              <div>
                <h3 className="text-2xl font-display font-bold text-navy mb-8">Stay Connected</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  <a href="https://www.instagram.com/vishnuventurelabsfoundation/" target="_blank" rel="noreferrer" className="block group">
                    <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 p-px rounded-2xl">
                      <div className="bg-white rounded-[15px] p-6 h-full flex flex-col items-center justify-center text-center gap-4">
                        <Instagram className="w-10 h-10 text-pink-500 group-hover:scale-110 transition-transform" />
                        <div>
                          <p className="font-bold text-navy">Instagram</p>
                          <p className="text-xs text-slate-500 truncate max-w-[150px]">@vishnuventurelabs</p>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="https://www.linkedin.com/company/vishnu-venture-labs-foundation/" target="_blank" rel="noreferrer" className="block group">
                    <div className="bg-[#0A66C2] p-px rounded-2xl">
                      <div className="bg-white rounded-[15px] p-6 h-full flex flex-col items-center justify-center text-center gap-4">
                        <Linkedin className="w-10 h-10 text-[#0A66C2] group-hover:scale-110 transition-transform" />
                        <div>
                          <p className="font-bold text-navy">LinkedIn</p>
                          <p className="text-xs text-slate-500 truncate max-w-[150px]">VVLF</p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-navy text-white p-8 rounded-3xl shadow-xl">
                <h4 className="font-display font-bold text-xl mb-6">Contact Information</h4>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Meet Us</p>
                      <p className="text-slate-300 text-sm">Vishnu Venture Labs Foundation, Vishnupur, Narsapur, Suryapaget - 502313</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Call Us</p>
                      <p className="text-slate-300 text-sm">+91 98765 43210</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Email Us</p>
                      <p className="text-slate-300 text-sm">vvlf@bvrit.ac.in</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
