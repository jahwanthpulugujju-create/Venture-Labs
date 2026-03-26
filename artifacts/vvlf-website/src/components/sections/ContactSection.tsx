import { useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import { Linkedin, Instagram, MapPin, Phone, Mail, CheckCircle2, Loader2, AlertCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type FormState = "idle" | "loading" | "success" | "error";
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

const inquiryTypes = [
  "Apply for Incubation",
  "Partnership / Collaboration",
  "Program Information",
  "Media & Press",
  "General Inquiry",
];

export function ContactSection() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState<FormData>({ firstName: "", lastName: "", email: "", subject: inquiryTypes[0], message: "" });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = () => {
    const e: Partial<FormData> = {};
    if (!form.firstName.trim()) e.firstName = "Required";
    if (!form.lastName.trim()) e.lastName = "Required";
    if (!form.email.trim()) e.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.message.trim()) e.message = "Required";
    else if (form.message.trim().length < 20) e.message = "At least 20 characters";
    return e;
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((p) => ({ ...p, [field]: value }));
    if (errors[field]) setErrors((p) => ({ ...p, [field]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const ve = validate();
    if (Object.keys(ve).length > 0) { setErrors(ve); return; }
    setFormState("loading");
    await new Promise((r) => setTimeout(r, 1600));
    setFormState("success");
  };

  const handleReset = () => {
    setForm({ firstName: "", lastName: "", email: "", subject: inquiryTypes[0], message: "" });
    setErrors({});
    setFormState("idle");
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* Apply CTA Strip */}
        <FadeIn>
          <div className="bg-gradient-to-r from-navy via-navy to-primary/80 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
            <div className="relative z-10">
              <p className="text-primary font-bold text-sm uppercase tracking-widest mb-1">Applications Open</p>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white">Ready to build your startup at VVLF?</h3>
              <p className="text-slate-300 mt-1">Apply for our Pre-Incubation Cohort 2.0 — limited seats available.</p>
            </div>
            <button
              onClick={() => handleChange("subject", "Apply for Incubation")}
              className="relative z-10 shrink-0 inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 rounded-full shadow-lg shadow-primary/30 hover:-translate-y-0.5 transition-all text-sm"
            >
              Apply for Incubation
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </FadeIn>

        {/* Form + Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Form */}
          <FadeIn direction="right">
            <div>
              <h3 className="text-2xl font-display font-bold text-navy mb-2">Send Us a Message</h3>
              <p className="text-slate-500 mb-8">Fill in the form and we'll get back to you within 24 hours.</p>

              {formState === "success" ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-10 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-5">
                    <CheckCircle2 className="w-9 h-9 text-emerald-600" />
                  </div>
                  <h4 className="text-xl font-bold text-navy mb-2">Message Sent!</h4>
                  <p className="text-slate-500 mb-6">Thank you, {form.firstName}. We'll reach out at <strong>{form.email}</strong> within 24 hours.</p>
                  <Button onClick={handleReset} variant="outline" className="rounded-full border-emerald-300 text-emerald-700 hover:bg-emerald-50">
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm" noValidate>
                  {/* Inquiry Type */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-navy">How can we help?</label>
                    <div className="flex flex-wrap gap-2">
                      {inquiryTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => handleChange("subject", type)}
                          className={`px-4 py-2 rounded-full text-sm font-semibold transition-all border ${
                            form.subject === type
                              ? "bg-primary text-white border-primary shadow-md shadow-primary/20"
                              : "bg-white text-slate-600 border-slate-200 hover:border-primary/40 hover:text-primary"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-navy">First Name *</label>
                      <Input placeholder="John" value={form.firstName} onChange={(e) => handleChange("firstName", e.target.value)}
                        className={`bg-white ${errors.firstName ? "border-red-400" : ""}`} />
                      {errors.firstName && <p className="text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.firstName}</p>}
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-navy">Last Name *</label>
                      <Input placeholder="Doe" value={form.lastName} onChange={(e) => handleChange("lastName", e.target.value)}
                        className={`bg-white ${errors.lastName ? "border-red-400" : ""}`} />
                      {errors.lastName && <p className="text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.lastName}</p>}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-navy">Email Address *</label>
                    <Input type="email" placeholder="john@example.com" value={form.email} onChange={(e) => handleChange("email", e.target.value)}
                      className={`bg-white ${errors.email ? "border-red-400" : ""}`} />
                    {errors.email && <p className="text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.email}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-navy">Message *</label>
                    <Textarea placeholder="Tell us about your startup idea, collaboration proposal, or question..." rows={5}
                      value={form.message} onChange={(e) => handleChange("message", e.target.value)}
                      className={`bg-white resize-none ${errors.message ? "border-red-400" : ""}`} />
                    <div className="flex justify-between items-center">
                      {errors.message
                        ? <p className="text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.message}</p>
                        : <span />}
                      <p className={`text-xs ml-auto tabular-nums ${form.message.length > 0 && form.message.length < 20 ? "text-amber-500" : "text-slate-400"}`}>
                        {form.message.length} / 20 min
                      </p>
                    </div>
                  </div>

                  {formState === "error" && (
                    <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                      <AlertCircle className="w-4 h-4 shrink-0" /> Something went wrong. Please try again.
                    </div>
                  )}

                  <Button type="submit" size="lg" disabled={formState === "loading"} className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl shadow-lg shadow-primary/25 font-semibold">
                    {formState === "loading" ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" />Sending...</> : "Send Message"}
                  </Button>
                </form>
              )}
            </div>
          </FadeIn>

          {/* Info + Map */}
          <FadeIn direction="left">
            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <a href="https://www.instagram.com/vishnuventurelabsfoundation/" target="_blank" rel="noreferrer" className="block group">
                  <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 p-px rounded-2xl">
                    <div className="bg-white rounded-[15px] p-5 flex items-center gap-4">
                      <Instagram className="w-8 h-8 text-pink-500 shrink-0 group-hover:scale-110 transition-transform" />
                      <div>
                        <p className="font-bold text-navy text-sm">Instagram</p>
                        <p className="text-xs text-slate-500">@vishnuventurelabs</p>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="https://www.linkedin.com/company/vishnu-venture-labs-foundation/" target="_blank" rel="noreferrer" className="block group">
                  <div className="bg-[#0A66C2] p-px rounded-2xl">
                    <div className="bg-white rounded-[15px] p-5 flex items-center gap-4">
                      <Linkedin className="w-8 h-8 text-[#0A66C2] shrink-0 group-hover:scale-110 transition-transform" />
                      <div>
                        <p className="font-bold text-navy text-sm">LinkedIn</p>
                        <p className="text-xs text-slate-500">VVLF Official</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="bg-navy text-white p-7 rounded-3xl shadow-xl">
                <h4 className="font-display font-bold text-lg mb-5">Contact Information</h4>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-0.5">Visit Us</p>
                      <p className="text-slate-300 text-sm">Vishnu Venture Labs Foundation, Vishnupur, Narsapur, Suryapaget — 502313</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-0.5">Call Us</p>
                      <p className="text-slate-300 text-sm">+91 98765 43210</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm mb-0.5">Email Us</p>
                      <p className="text-slate-300 text-sm">vvlf@bvrit.ac.in</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Map */}
              <div className="rounded-3xl overflow-hidden border border-slate-100 shadow-sm h-60">
                <iframe
                  title="VVLF Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3803.7!2d78.2786!3d17.6695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbee5a5b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sBV%20Raju%20Institute%20of%20Technology%2C%20Narsapur!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
