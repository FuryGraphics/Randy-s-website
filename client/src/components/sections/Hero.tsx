/**
 * Hero Section — Bergmann Law Firm, PLLC
 * Design: Professional dark gradient with courtroom imagery, editorial layout
 * Animation: CSS keyframe staggered fade-up on load
 */
import { Phone, ChevronDown } from "lucide-react";

const heroItems = [
  "Dedicated",
  "Hard-Working",
  "Straightforward",
  "Free Consultation",
];

export default function Hero() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[650px] md:min-h-[750px] flex items-center overflow-hidden"
      aria-label="Hero section"
      style={{ paddingTop: "80px" }}
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #0A0F1A 0%, #0F1B2D 40%, #162238 70%, #0A0F1A 100%)",
        }}
        aria-hidden="true"
      />
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B8860B' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
        aria-hidden="true"
      />
      {/* Gradient glow */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-20"
        style={{
          background: "radial-gradient(ellipse at 70% 30%, rgba(184, 134, 11, 0.15) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="container relative z-10 py-16 md:py-24">
        <div className="max-w-3xl">
          {/* Eyebrow label */}
          <div
            className="flex items-center gap-3 mb-6"
            style={{
              animation: "heroFadeUp 0.7s ease-out 0.1s both",
            }}
          >
            <div className="h-px w-12 bg-[#B8860B]" />
            <span
              className="text-[#B8860B] text-xs font-semibold tracking-[0.25em] uppercase"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              San Antonio Family Law &amp; Personal Injury
            </span>
          </div>

          {/* H1 */}
          <h1
            className="text-[34px] sm:text-[44px] md:text-[52px] lg:text-[60px] font-bold leading-[1.08] text-[#f5f5f5] mb-6"
            style={{
              fontFamily: "'Playfair Display', serif",
              animation: "heroFadeUp 0.7s ease-out 0.25s both",
            }}
          >
            Your{" "}
            <span className="gold-underline text-[#B8860B]">Advocate</span>{" "}
            for Justice in{" "}
            <span className="italic">San Antonio</span>
          </h1>

          {/* Subheading */}
          <p
            className="text-[17px] md:text-[19px] text-[#b8b8b8] mb-10 max-w-xl leading-relaxed"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              animation: "heroFadeUp 0.7s ease-out 0.45s both",
            }}
          >
            Attorney William R. Bergmann provides experienced representation in family law and personal injury matters throughout Bexar County.{" "}
            <span className="text-[#E8D5B7] font-medium">Schedule your free consultation today.</span>
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
            style={{ animation: "heroFadeUp 0.7s ease-out 0.6s both" }}
          >
            <button
              onClick={scrollToContact}
              className="btn-gold text-base w-full sm:w-auto text-center"
              aria-label="Schedule a free consultation"
            >
              Schedule Free Consultation
            </button>
            <a
              href="tel:2107594336"
              className="flex items-center gap-2 text-[#B8860B] font-semibold text-base hover:text-[#D4A843] transition-colors duration-200 group"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              aria-label="Call now: (210) 759-4336"
            >
              <Phone size={17} className="group-hover:scale-110 transition-transform" />
              <span className="border-b border-[#B8860B]/40 group-hover:border-[#D4A843] transition-colors">
                Call Now: (210) 759-4336
              </span>
            </a>
          </div>

          {/* Trust signals */}
          <div
            className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-white/10"
            style={{ animation: "heroFadeUp 0.7s ease-out 0.75s both" }}
          >
            {heroItems.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#B8860B]" />
                <span
                  className="text-[#b8b8b8] text-sm font-medium"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#b8b8b8]/50"
        style={{ animation: "heroFadeUp 0.6s ease-out 1.2s both" }}
        aria-hidden="true"
      >
        <span
          className="tracking-widest uppercase"
          style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10px" }}
        >
          Scroll
        </span>
        <div style={{ animation: "scrollBounce 1.5s ease-in-out infinite" }}>
          <ChevronDown size={18} />
        </div>
      </div>

      {/* Gold vertical accent line */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1 hidden lg:block"
        style={{ background: "linear-gradient(180deg, transparent, #B8860B 30%, #B8860B 70%, transparent)" }}
        aria-hidden="true"
      />

      {/* CSS Keyframes */}
      <style>{`
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(36px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
      `}</style>
    </section>
  );
}
