import { FadeIn } from "@/components/FadeIn";

interface PageHeroProps {
  eyebrow: string;
  headline: string;
  sub: string;
  image?: string;
}

export function PageHero({ eyebrow, headline, sub, image }: PageHeroProps) {
  return (
    <div className="relative bg-[#0B0F19] pt-40 pb-24 overflow-hidden">
      {image && (
        <>
          <img
            src={image}
            alt=""
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{ filter: "saturate(0.5) brightness(0.25)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19]/60 via-[#0B0F19]/70 to-[#0B0F19]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F19]/90 via-[#0B0F19]/50 to-transparent" />
        </>
      )}
      {!image && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
      )}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <p className="text-[#2563EB] font-bold uppercase tracking-[0.18em] text-xs mb-4">
            {eyebrow}
          </p>
          <h1
            className="font-bold text-white tracking-tight mb-5 max-w-3xl"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.06 }}
          >
            {headline}
          </h1>
          <p className="text-white/45 text-lg max-w-xl leading-relaxed">{sub}</p>
        </FadeIn>
      </div>
    </div>
  );
}
