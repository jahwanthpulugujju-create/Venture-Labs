import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import CountUp from "react-countup";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center bg-navy overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`} 
          alt="Abstract background" 
          className="w-full h-full object-cover opacity-60 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-navy/80 to-navy" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-20">
        <div className="max-w-3xl">
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary font-semibold text-sm mb-8 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              INCUBATION CENTER OF BVRIT
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] mb-6 tracking-tight">
              Got an idea that can <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">change lives?</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
              Join Vishnu Venture Labs Foundation to turn impactful ideas into scalable ventures. We provide the infrastructure, mentorship, and funding to build the future.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="h-14 px-8 text-base bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg shadow-primary/25 hover:-translate-y-1 transition-all group">
                Build With Us
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="h-14 px-8 text-base border-white/20 text-white hover:bg-white hover:text-navy rounded-full transition-all">
                View Startups
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Impact Stats Strip */}
      <div className="absolute bottom-0 w-full bg-white/5 backdrop-blur-xl border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-white mb-1">
                <CountUp end={50} duration={2.5} enableScrollSpy scrollSpyOnce />+
              </div>
              <div className="text-sm text-slate-400 font-medium">Startups</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-white mb-1">
                <CountUp end={200} duration={2.5} enableScrollSpy scrollSpyOnce />+
              </div>
              <div className="text-sm text-slate-400 font-medium">Innovators</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-white mb-1">
                <CountUp end={10} duration={2.5} enableScrollSpy scrollSpyOnce />+
              </div>
              <div className="text-sm text-slate-400 font-medium">Programs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-white mb-1">
                <CountUp end={4} duration={2.5} enableScrollSpy scrollSpyOnce />
              </div>
              <div className="text-sm text-slate-400 font-medium">Incorporated Ventures</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
