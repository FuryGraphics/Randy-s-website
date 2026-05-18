/**
 * Testimonials Section — Bergmann Law Firm, PLLC
 * Design: Card grid with gold left-border, star ratings, staggered reveal
 */
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "I had an amazing experience with Bergmann Law Firm after my car accident. From the very start, they were incredibly helpful and supportive, guiding me through the entire legal process with care and professionalism.",
    name: "Esteffany F.",
    caseType: "Personal Injury — Car Accident",
    stars: 5,
  },
  {
    quote:
      "Extremely helpful although he wasn't quite the lawyer I was looking for he definitely pointed me in not one but several other options rather than hanging up on me. Super friendly and definitely keeping him in my back pocket for future events!",
    name: "Brittany F.",
    caseType: "Legal Consultation",
    stars: 5,
  },
  {
    quote:
      "I'm beyond grateful for the incredible work Bergmann Law Firm did handling my car accident case. From day one, they were on top of everything, providing clear communication and expert guidance throughout the entire process.",
    name: "Veronica Z.",
    caseType: "Personal Injury — Car Accident",
    stars: 5,
  },
  {
    quote:
      "They fought for me and helped me get 50/50 custody with joint conservatorship. They knew I was in a financial bind and worked with me. I highly recommend this firm for anyone going through a custody battle in Texas.",
    name: "Digi J.",
    caseType: "Family Law — Child Custody",
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
          className="text-[#B8860B] fill-[#B8860B]"
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
      className="py-20 md:py-28 bg-[#0A0F1A]"
      aria-labelledby="testimonials-heading"
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-14 fade-up">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#B8860B]" />
            <span
              className="text-[#B8860B] text-xs font-semibold tracking-[0.25em] uppercase"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Client Success Stories
            </span>
            <div className="h-px w-8 bg-[#B8860B]" />
          </div>
          <h2
            id="testimonials-heading"
            className="text-[30px] md:text-[42px] font-bold text-[#f5f5f5] leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            What Our{" "}
            <span className="gold-underline text-[#B8860B]">Clients</span> Say
          </h2>
          <p
            className="text-[#b8b8b8] mt-4 max-w-xl mx-auto text-base leading-relaxed"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Our clients' trust and satisfaction are the foundation of our practice. Here's what they have to say about working with Bergmann Law Firm.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <blockquote
              key={i}
              className="testimonial-card fade-up flex flex-col"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <StarRating count={t.stars} />
                <Quote size={20} className="text-[#B8860B]/30 flex-shrink-0" aria-hidden="true" />
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
                  className="text-[#B8860B] text-xs mt-0.5"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {t.caseType}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
