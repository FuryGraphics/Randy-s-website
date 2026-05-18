/**
 * CTA Banner Section — Bergmann Law Firm, PLLC
 * Design: Full-width gold background with dark text, scale-on-hover buttons
 */
import { Phone, ArrowRight } from "lucide-react";

export default function CTABanner() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="cta-banner"
      className="py-20 md:py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #B8860B 0%, #D4A843 50%, #B8860B 100%)" }}
      aria-labelledby="cta-heading"
    >
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(10,10,10,0.08) 20px, rgba(10,10,10,0.08) 21px)",
        }}
        aria-hidden="true"
      />

      <div className="container relative z-10 text-center">
        <div className="max-w-2xl mx-auto fade-up">
          <p
            className="text-[#0a0a0a]/60 text-xs font-semibold tracking-[0.3em] uppercase mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Free Consultation · No Obligation
          </p>
          <h2
            id="cta-heading"
            className="text-[28px] md:text-[40px] lg:text-[46px] font-bold text-[#0a0a0a] leading-tight mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Facing a Legal Challenge?{" "}
            <span className="italic">We're Ready to Help.</span>
          </h2>
          <p
            className="text-[#0a0a0a]/70 text-base md:text-lg mb-10"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Schedule your free consultation today. Let us fight for the outcome you deserve.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToContact}
              className="bg-[#0A0F1A] text-[#B8860B] font-bold text-base px-8 py-4 rounded-md hover:bg-[#0F1B2D] transition-all duration-300 hover:scale-105 active:scale-97 flex items-center gap-2 w-full sm:w-auto justify-center"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              aria-label="Schedule your free consultation"
            >
              Schedule Your Free Consultation
              <ArrowRight size={16} aria-hidden="true" />
            </button>
            <a
              href="tel:2107594336"
              className="bg-transparent text-[#0a0a0a] font-bold text-base px-8 py-4 rounded-md border-2 border-[#0a0a0a]/30 hover:bg-[#0a0a0a]/10 transition-all duration-300 hover:scale-105 active:scale-97 flex items-center gap-2 w-full sm:w-auto justify-center"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
              aria-label="Call (210) 759-4336"
            >
              <Phone size={16} aria-hidden="true" />
              (210) 759-4336
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
