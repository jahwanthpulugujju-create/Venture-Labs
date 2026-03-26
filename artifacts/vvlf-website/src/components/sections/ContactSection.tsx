import { useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import { Linkedin, Instagram, MapPin, Phone, Mail, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
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
  const [form, setForm] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    subject: inquiryTypes[0],
    message: "",
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = () => {
    const e: Partial<FormData> = {};
    if (!form.firstName.trim()) e.firstName = "First name is required";
    if (!form.lastName.trim()) e.lastName = "Last name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.message.trim()) e.message = "Message is required";
    else if (form.message.trim().length < 20) e.message = "Message must be at least 20 characters";
    return e;
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setFormState("loading");
    await new Promise((r) => setTimeout(r, 1500));
    setFormState("success");
  };

  const handleReset = () => {
    setForm({ firstName: "", lastName: "", email: "", subject: inquiryTypes[0], message: "" });
    setErrors({});
    setFormState("idle");
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Contact Form */}
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
                  <p className="text-slate-500 mb-6">Thank you for reaching out, {form.firstName}. Our team will get back to you at <strong>{form.email}</strong> within 24 hours.</p>
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-navy">First Name *</label>
                      <Input
                        placeholder="John"
                        value={form.firstName}
                        onChange={(e) => handleChange("firstName", e.target.value)}
                        className={`bg-white ${errors.firstName ? "border-red-400 focus-visible:ring-red-300" : ""}`}
                      />
                      {errors.firstName && (
                        <p className="text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.firstName}
                        </p>
                      )}
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-semibold text-navy">Last Name *</label>
                      <Input
                        placeholder="Doe"
                        value={form.lastName}
                        onChange={(e) => handleChange("lastName", e.target.value)}
                        className={`bg-white ${errors.lastName ? "border-red-400 focus-visible:ring-red-300" : ""}`}
                      />
                      {errors.lastName && (
                        <p className="text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-navy">Email Address *</label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className={`bg-white ${errors.email ? "border-red-400 focus-visible:ring-red-300" : ""}`}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-navy">Message *</label>
                    <Textarea
                      placeholder="Tell us about your startup idea, collaboration proposal, or question..."
                      rows={5}
                      value={form.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      className={`bg-white resize-none ${errors.message ? "border-red-400 focus-visible:ring-red-300" : ""}`}
                    />
                    <div className="flex justify-between items-center">
                      {errors.message ? (
                        <p className="text-xs text-red-500 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.message}
                        </p>
                      ) : (
                        <span />
                      )}
                      <p className={`text-xs ml-auto ${form.message.length < 20 && form.message.length > 0 ? "text-amber-500" : "text-slate-400"}`}>
                        {form.message.length} / 20 min
                      </p>
                    </div>
                  </div>

                  {formState === "error" && (
                    <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      Something went wrong. Please try again.
                    </div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    disabled={formState === "loading"}
                    className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl shadow-lg shadow-primary/25 h-13 font-semibold"
                  >
                    {formState === "loading" ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              )}
            </div>
          </FadeIn>

          {/* Social & Info */}
          <FadeIn direction="left">
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="text-2xl font-display font-bold text-navy mb-8">Stay Connected</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
                  <a href="https://www.instagram.com/vishnuventurelabsfoundation/" target="_blank" rel="noreferrer" className="block group">
                    <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 p-px rounded-2xl">
                      <div className="bg-white rounded-[15px] p-6 flex flex-col items-center justify-center text-center gap-3">
                        <Instagram className="w-10 h-10 text-pink-500 group-hover:scale-110 transition-transform" />
                        <div>
                          <p className="font-bold text-navy">Instagram</p>
                          <p className="text-xs text-slate-500">@vishnuventurelabs</p>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a href="https://www.linkedin.com/company/vishnu-venture-labs-foundation/" target="_blank" rel="noreferrer" className="block group">
                    <div className="bg-[#0A66C2] p-px rounded-2xl">
                      <div className="bg-white rounded-[15px] p-6 flex flex-col items-center justify-center text-center gap-3">
                        <Linkedin className="w-10 h-10 text-[#0A66C2] group-hover:scale-110 transition-transform" />
                        <div>
                          <p className="font-bold text-navy">LinkedIn</p>
                          <p className="text-xs text-slate-500">VVLF Official</p>
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
                      <p className="font-semibold mb-1">Visit Us</p>
                      <p className="text-slate-300 text-sm">Vishnu Venture Labs Foundation, Vishnupur, Narsapur, Suryapaget — 502313</p>
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

              {/* Apply CTA */}
              <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-8 text-white text-center">
                <h4 className="font-display font-bold text-xl mb-2">Ready to Build Your Startup?</h4>
                <p className="text-white/80 text-sm mb-5">Apply for our Pre-Incubation Cohort and get access to the full VVLF ecosystem.</p>
                <button
                  onClick={() => handleChange("subject", "Apply for Incubation")}
                  className="inline-flex items-center gap-2 bg-white text-primary font-bold px-7 py-3 rounded-full hover:bg-white/90 transition-colors text-sm shadow-lg"
                >
                  Apply for Incubation
                </button>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
