/**
 * Practice Areas Section — Bergmann Law Firm, PLLC
 * Design: 6-card grid with icons, gold accents, hover animations
 */
import { ArrowRight } from "lucide-react";

const areas = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" aria-hidden="true">
        <path d="M24 4C18 4 13 9 13 15V20H10C8.9 20 8 20.9 8 22V42C8 43.1 8.9 44 10 44H38C39.1 44 40 43.1 40 42V22C40 20.9 39.1 20 38 20H35V15C35 9 30 4 24 4Z" stroke="#B8860B" strokeWidth="2.5" strokeLinejoin="round"/>
        <path d="M17 20V15C17 11.13 20.13 8 24 8C27.87 8 31 11.13 31 15V20" stroke="#B8860B" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="24" cy="32" r="3" stroke="#B8860B" strokeWidth="2"/>
      </svg>
    ),
    title: "Family Law",
    description:
      "Comprehensive representation in all family law matters including custody, divorce, adoption, and support. We prioritize compassionate guidance and legal solutions that work.",
    href: "#contact",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" aria-hidden="true">
        <path d="M24 6C24 6 8 16 8 28C8 36.84 15.16 44 24 44C32.84 44 40 36.84 40 28C40 16 24 6 24 6Z" stroke="#B8860B" strokeWidth="2.5" strokeLinejoin="round"/>
        <path d="M24 18V28" stroke="#B8860B" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="24" cy="34" r="1.5" fill="#B8860B"/>
      </svg>
    ),
    title: "Personal Injury",
    description:
      "Aggressive advocacy for victims of car accidents, truck accidents, workplace injuries, and other negligence-related incidents. We fight to secure maximum compensation.",
    href: "#contact",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" aria-hidden="true">
        <path d="M14 44H34" stroke="#B8860B" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M24 44V36" stroke="#B8860B" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M8 36H40L36 12H12L8 36Z" stroke="#B8860B" strokeWidth="2.5" strokeLinejoin="round"/>
        <path d="M24 4V8" stroke="#B8860B" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M18 8H30" stroke="#B8860B" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Divorce",
    description:
      "Navigating contested and uncontested divorces, property division, and settlements. We help clients achieve fair resolutions while minimizing stress and conflict.",
    href: "#contact",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" aria-hidden="true">
        <circle cx="16" cy="14" r="6" stroke="#B8860B" strokeWidth="2.5"/>
        <circle cx="32" cy="14" r="6" stroke="#B8860B" strokeWidth="2.5"/>
        <path d="M6 38V34C6 30.13 9.13 27 13 27H19C22.87 27 26 30.13 26 34V38" stroke="#B8860B" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M26 27H35C38.87 27 42 30.13 42 34V38" stroke="#B8860B" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="24" cy="38" r="4" stroke="#B8860B" strokeWidth="2"/>
      </svg>
    ),
    title: "Child Custody",
    description:
      "Advocating for parental rights and children's well-being, ensuring fair custody agreements and modifications that serve the best interests of the child.",
    href: "#contact",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" aria-hidden="true">
        <rect x="6" y="8" width="36" height="32" rx="3" stroke="#B8860B" strokeWidth="2.5"/>
        <path d="M6 18H42" stroke="#B8860B" strokeWidth="2.5"/>
        <path d="M16 28H32" stroke="#B8860B" strokeWidth="2" strokeLinecap="round"/>
        <path d="M16 34H26" stroke="#B8860B" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Spousal Support",
    description:
      "Assisting clients with spousal support negotiations, modifications, and enforcement to ensure financial stability after divorce or separation.",
    href: "#contact",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" aria-hidden="true">
        <path d="M10 38L6 42V10C6 7.79 7.79 6 10 6H38C40.21 6 42 7.79 42 10V34C42 36.21 40.21 38 38 38H10Z" stroke="#B8860B" strokeWidth="2.5" strokeLinejoin="round"/>
        <path d="M16 18H32" stroke="#B8860B" strokeWidth="2" strokeLinecap="round"/>
        <path d="M16 24H28" stroke="#B8860B" strokeWidth="2" strokeLinecap="round"/>
        <path d="M16 30H24" stroke="#B8860B" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Car Accidents",
    description:
      "Experienced representation for car accident victims seeking fair compensation for medical bills, lost wages, pain and suffering, and other damages.",
    href: "#contact",
  },
];

export default function PracticeAreas() {
  return (
    <section
      id="practice-areas"
      className="py-20 md:py-28 bg-[#0A0F1A]"
      aria-labelledby="practice-areas-heading"
    >
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-14 fade-up">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#B8860B]" />
            <span
              className="text-[#B8860B] text-xs font-semibold tracking-[0.25em] uppercase"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              How We Help
            </span>
            <div className="h-px w-8 bg-[#B8860B]" />
          </div>
          <h2
            id="practice-areas-heading"
            className="text-[32px] md:text-[42px] font-bold text-[#f5f5f5] leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our{" "}
            <span className="gold-underline text-[#B8860B]">Practice Areas</span>
          </h2>
          <p
            className="text-[#b8b8b8] mt-4 max-w-2xl mx-auto text-base leading-relaxed"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Bergmann Law Firm provides skilled legal representation across multiple practice areas, with a focus on family law and personal injury matters in San Antonio and throughout Bexar County.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, i) => (
            <article
              key={area.title}
              className="practice-card fade-up group"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="mb-6">{area.icon}</div>
              <h3
                className="text-[20px] md:text-[22px] font-bold text-[#f5f5f5] mb-3 group-hover:text-[#B8860B] transition-colors duration-300"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {area.title}
              </h3>
              <p
                className="text-[#b8b8b8] text-[14px] leading-relaxed mb-6"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {area.description}
              </p>
              <a
                href={area.href}
                className="inline-flex items-center gap-2 text-[#B8860B] text-sm font-semibold hover:text-[#D4A843] transition-colors duration-200 group/link"
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
