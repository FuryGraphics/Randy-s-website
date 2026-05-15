/**
 * Hero Section — R.O. Smith Law Firm
 * Design: Dark gradient with courtroom image overlay, left-weighted editorial layout
 * Animation: CSS keyframe staggered fade-up on load
 */
import { Phone, ChevronDown } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663609705540/fYjWgoDUwsCJ7rmjevsg5o/hero-bg-B93WuaoketekiW7GzQEgTi.webp";

const heroItems = [
  "20+ Years Experience",
  "1,000+ Cases Resolved",
  "Free Consultation",
  "Available 24/7",
];

export default function Hero() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden"
      aria-label="Hero section"
      style={{ paddingTop: "80px" }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_BG})` }}
        aria-hidden="true"
      />
      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(10,10,10,0.95) 0%, rgba(26,26,46,0.90) 55%, rgba(10,10,10,0.70) 100%)",
        }}
        aria-hidden="true"
      />
      {/* Subtle noise texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
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
            <div className="h-px w-10 bg-[#C9A84C]" />
            <span
              className="text-[#C9A84C] text-xs font-semibold tracking-[0.25em] uppercase"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              New York Criminal Defense &amp; Personal Injury
            </span>
          </div>

          {/* H1 */}
          <h1
            className="text-[34px] sm:text-[44px] md:text-[52px] lg:text-[58px] font-bold leading-[1.1] text-[#f5f5f5] mb-6"
            style={{
              fontFamily: "'Playfair Display', serif",
              animation: "heroFadeUp 0.7s ease-out 0.25s both",
            }}
          >
            <span className="gold-underline text-[#C9A84C]">Experienced</span>{" "}
            Criminal Defense, Personal Injury &amp; Real Estate Attorney{" "}
            <span className="italic">Serving New York</span>
          </h1>

          {/* Subheading */}
          <p
            className="text-[17px] md:text-[19px] text-[#b8b8b8] mb-10 max-w-xl leading-relaxed"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              animation: "heroFadeUp 0.7s ease-out 0.45s both",
            }}
          >
            Trusted representation in NYC, Nassau, Suffolk &amp; Westchester counties.{" "}
            <span className="text-[#E8D5B7] font-medium">Free consultation available 24/7.</span>
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
              href="tel:9175477563"
              className="flex items-center gap-2 text-[#C9A84C] font-semibold text-base hover:text-[#d4b896] transition-colors duration-200 group"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              aria-label="Call now: (917) 547-7563"
            >
              <Phone size={17} className="group-hover:scale-110 transition-transform" />
              <span className="border-b border-[#C9A84C]/40 group-hover:border-[#d4b896] transition-colors">
                Call Now: (917) 547-7563
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
                <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
                <span
                  className="text-[#b8b8b8] text-sm"
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
        style={{ background: "linear-gradient(180deg, transparent, #C9A84C 30%, #C9A84C 70%, transparent)" }}
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
