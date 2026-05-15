/**
 * Practice Areas Section — R.O. Smith Law Firm
 * Design: 3-column card grid with gold hover borders and staggered reveal
 */
import { ArrowRight } from "lucide-react";

const areas = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" aria-hidden="true">
        <path d="M24 4L6 14V26C6 35.94 14.06 45.28 24 47C33.94 45.28 42 35.94 42 26V14L24 4Z" stroke="#C9A84C" strokeWidth="2.5" strokeLinejoin="round"/>
        <path d="M17 24L22 29L31 20" stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Criminal Defense",
    description:
      "From DUI and traffic violations to drug charges and domestic violence, we defend your rights aggressively and work tirelessly to protect your future.",
    href: "/criminal-defense",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" aria-hidden="true">
        <path d="M24 6C24 6 8 16 8 28C8 36.84 15.16 44 24 44C32.84 44 40 36.84 40 28C40 16 24 6 24 6Z" stroke="#C9A84C" strokeWidth="2.5" strokeLinejoin="round"/>
        <path d="M24 18V28" stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="24" cy="34" r="1.5" fill="#C9A84C"/>
      </svg>
    ),
    title: "Personal Injury",
    description:
      "Car accidents, motorcycle crashes, slip &amp; fall — we fight to recover full compensation for your injuries and hold negligent parties accountable.",
    href: "/personal-injury",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" aria-hidden="true">
        <rect x="6" y="20" width="36" height="24" rx="2" stroke="#C9A84C" strokeWidth="2.5"/>
        <path d="M16 20V14C16 10.69 19.58 8 24 8C28.42 8 32 10.69 32 14V20" stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M14 36H34M14 30H34" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Real Estate Law",
    description:
      "Residential and commercial transactions, disputes, and title issues handled with precision. We protect your property rights at every stage.",
    href: "/real-estate",
  },
];

export default function PracticeAreas() {
  return (
    <section
      id="practice-areas"
      className="py-20 md:py-28 bg-[#0a0a0a]"
      aria-labelledby="practice-areas-heading"
    >
      <div className="container">
        {/* Section Header */}
        <div className="mb-14 fade-up">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#C9A84C]" />
            <span
              className="text-[#C9A84C] text-xs font-semibold tracking-[0.25em] uppercase"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              What We Do
            </span>
          </div>
          <h2
            id="practice-areas-heading"
            className="text-[32px] md:text-[42px] font-bold text-[#f5f5f5] leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our{" "}
            <span className="gold-underline text-[#C9A84C]">Practice Areas</span>
          </h2>
          <p
            className="text-[#b8b8b8] mt-4 max-w-xl text-base md:text-lg leading-relaxed"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Comprehensive legal representation across three core disciplines, each handled with the same aggressive advocacy and personal attention.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, i) => (
            <article
              key={area.title}
              className="practice-card fade-up group"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="mb-6">{area.icon}</div>
              <h3
                className="text-[22px] md:text-[24px] font-bold text-[#f5f5f5] mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {area.title}
              </h3>
              <p
                className="text-[#b8b8b8] text-[15px] leading-relaxed mb-6"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                dangerouslySetInnerHTML={{ __html: area.description }}
              />
              <a
                href={area.href}
                className="inline-flex items-center gap-2 text-[#C9A84C] text-sm font-semibold hover:text-[#d4b896] transition-colors duration-200 group/link"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                aria-label={`Learn more about ${area.title}`}
              >
                Learn More
                <ArrowRight
                  size={15}
                  className="group-hover/link:translate-x-1 transition-transform duration-200"
                />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
