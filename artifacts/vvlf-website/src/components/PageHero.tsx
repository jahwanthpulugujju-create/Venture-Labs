import { FadeIn } from "@/components/FadeIn";
import { motion } from "framer-motion";

interface PageHeroProps {
  eyebrow: string;
  headline: string;
  sub: string;
  image?: string;
}

export function PageHero({ eyebrow, headline, sub, image }: PageHeroProps) {
  return (
    <div className="relative bg-[#0D1527] pt-40 pb-28 overflow-hidden">
      {image && (
        <>
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.06 }}
            animate={{ scale: 1 }}
            transition={{ duration: 7, ease: "easeOut" }}
          >
            <img
              src={image}
              alt=""
              aria-hidden
              className="w-full h-full object-cover object-center"
              style={{ filter: "saturate(0.5) brightness(0.28)" }}
            />
          </motion.div>
          {/* Layered gradients — less harsh, more refined */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1527]/90 via-[#0D1527]/55 to-[#0D1527]/20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D1527]/50 via-transparent to-[#0D1527]/95" />
        </>
      )}

      {/* No-image: refined grid pattern */}
      {!image && (
        <>
          <div
            className="absolute inset-0 pointer-events-none opacity-50"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 60% 70% at 30% 50%, rgba(37,99,235,0.08) 0%, transparent 70%)",
            }}
          />
        </>
      )}

      {/* Subtle bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="max-w-3xl">
            <p className="text-[#2563EB] font-semibold uppercase tracking-[0.14em] text-[11px] mb-5">
              {eyebrow}
            </p>
            <h1
              className="font-display font-bold text-white tracking-tight mb-5 leading-[1.06]"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
            >
              {headline}
            </h1>
            <p className="text-white/50 text-lg max-w-xl leading-relaxed font-light">{sub}</p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
