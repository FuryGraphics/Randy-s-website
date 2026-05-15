/**
 * Testimonials Section — R.O. Smith Law Firm
 * Design: 3-card grid with gold left-border, frosted glass effect, staggered reveal
 */
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Randy Smith is an exceptional attorney. He fought aggressively for my case and got the charges completely dismissed. I cannot recommend him enough — he truly cares about his clients.",
    name: "Marcus T.",
    caseType: "Criminal Defense — Drug Charges",
    stars: 5,
  },
  {
    quote:
      "After my car accident, I was overwhelmed and didn't know where to turn. R.O. Smith Law Firm handled everything and secured a settlement far beyond what I expected. Professional, responsive, and genuinely compassionate.",
    name: "Diane R.",
    caseType: "Personal Injury — Auto Accident",
    stars: 5,
  },
  {
    quote:
      "Mr. Smith guided us through a complex commercial real estate transaction with precision and clarity. His attention to detail saved us from a potentially costly title dispute. Outstanding service.",
    name: "James & Priya K.",
    caseType: "Real Estate Law — Commercial Transaction",
    stars: 5,
  },
  {
    quote:
      "Available at all hours, incredibly knowledgeable, and genuinely invested in my outcome. Randy got my DUI reduced to a lesser charge and helped me keep my license. Life-changing representation.",
    name: "Anthony L.",
    caseType: "Criminal Defense — DUI",
    stars: 5,
  },
  {
    quote:
      "From the first consultation to the final settlement, the team at R.O. Smith Law Firm was professional, thorough, and effective. My slip-and-fall case was handled with the utmost care.",
    name: "Sandra M.",
    caseType: "Personal Injury — Slip & Fall",
    stars: 5,
  },
  {
    quote:
      "I was facing serious domestic violence charges that could have ruined my career. Randy Smith built a compelling defense and the case was dismissed. He is the attorney you want in your corner.",
    name: "Kevin O.",
    caseType: "Criminal Defense — Domestic Violence",
    stars: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className="text-[#C9A84C] fill-[#C9A84C]"
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 bg-[#0a0a0a]"
      aria-labelledby="testimonials-heading"
    >
      <div className="container">
        {/* Header */}
        <div className="mb-14 fade-up">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#C9A84C]" />
            <span
              className="text-[#C9A84C] text-xs font-semibold tracking-[0.25em] uppercase"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Client Testimonials
            </span>
          </div>
          <h2
            id="testimonials-heading"
            className="text-[30px] md:text-[40px] font-bold text-[#f5f5f5] leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            What Our{" "}
            <span className="gold-underline text-[#C9A84C]">Clients Say</span>
          </h2>
          <p
            className="text-[#b8b8b8] mt-4 max-w-xl text-base leading-relaxed"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Real results from real clients across New York City and surrounding counties.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <blockquote
              key={i}
              className="testimonial-card fade-up flex flex-col"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <StarRating count={t.stars} />
                <Quote size={20} className="text-[#C9A84C]/30 flex-shrink-0" aria-hidden="true" />
              </div>
              <p
                className="text-[#E8D5B7] text-[15px] italic leading-relaxed flex-1 mb-5"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "16px" }}
              >
                "{t.quote}"
              </p>
              <footer>
                <p
                  className="text-[#f5f5f5] font-semibold text-sm"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {t.name}
                </p>
                <p
                  className="text-[#C9A84C] text-xs mt-0.5"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {t.caseType}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center fade-up">
          <a
            href="/testimonials"
            className="inline-flex items-center gap-2 text-[#C9A84C] font-semibold text-sm hover:text-[#d4b896] transition-colors duration-200 border-b border-[#C9A84C]/40 hover:border-[#d4b896] pb-0.5"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Read More Testimonials →
          </a>
        </div>
      </div>
    </section>
  );
}
