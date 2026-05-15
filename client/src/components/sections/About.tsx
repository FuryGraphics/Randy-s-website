/**
 * About / Why Choose Us Section — R.O. Smith Law Firm
 * Design: Text + image split layout, gold accent list, fade-in on scroll
 */
import { CheckCircle2 } from "lucide-react";

const ATTORNEY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663609705540/fYjWgoDUwsCJ7rmjevsg5o/attorney-portrait-DATdGDtmc4i5vyCpprthLm.webp";

const reasons = [
  {
    title: "Personalized Attention",
    desc: "You are never just a case number. Randy O. Smith personally handles every matter, ensuring you receive dedicated focus from intake through resolution.",
  },
  {
    title: "Aggressive Advocacy",
    desc: "Whether negotiating a settlement or arguing before a jury, we fight relentlessly to protect your rights and secure the best possible outcome.",
  },
  {
    title: "Proven Track Record",
    desc: "With over 1,000 cases resolved across criminal defense, personal injury, and real estate law, our results speak for themselves.",
  },
  {
    title: "Available 24/7",
    desc: "Legal emergencies don't follow business hours. We are always reachable when you need us most — nights, weekends, and holidays.",
  },
  {
    title: "Free Initial Consultation",
    desc: "No obligation, no cost. Discuss your case with an experienced attorney and understand your options before making any decisions.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-[#1a1a2e]"
      aria-labelledby="about-heading"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Side */}
          <div className="fade-up">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#C9A84C]" />
              <span
                className="text-[#C9A84C] text-xs font-semibold tracking-[0.25em] uppercase"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Why Choose Us
              </span>
            </div>
            <h2
              id="about-heading"
              className="text-[30px] md:text-[40px] font-bold text-[#f5f5f5] leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Why Choose{" "}
              <span className="gold-underline text-[#C9A84C]">R.O. Smith</span>{" "}
              Law Firm?
            </h2>

            <p
              className="text-[#b8b8b8] text-base leading-relaxed mb-8"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              At R.O. Smith Law Firm, we believe every client deserves the same fierce representation regardless of the complexity of their case. Founded on the principles of integrity, tenacity, and personal service, our practice has earned the trust of clients across New York City and surrounding counties.
            </p>

            <ul className="space-y-5" role="list">
              {reasons.map((reason, i) => (
                <li
                  key={reason.title}
                  className="flex gap-4 fade-up"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <CheckCircle2
                    size={20}
                    className="text-[#C9A84C] flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <span
                      className="text-[#f5f5f5] font-semibold text-[15px]"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {reason.title}
                    </span>
                    <p
                      className="text-[#b8b8b8] text-[14px] leading-relaxed mt-1"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {reason.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-gold"
              >
                Schedule Free Consultation
              </button>
              <a href="tel:9175477563" className="btn-gold-outline">
                Call (917) 547-7563
              </a>
            </div>
          </div>

          {/* Image Side */}
          <div className="fade-up relative" style={{ transitionDelay: "200ms" }}>
            <div className="relative">
              {/* Gold frame accent */}
              <div
                className="absolute -top-4 -right-4 w-full h-full border border-[#C9A84C]/30 rounded-lg"
                aria-hidden="true"
              />
              <img
                src={ATTORNEY_IMG}
                alt="Randy O. Smith, Attorney at Law — R.O. Smith Law Firm"
                className="relative z-10 w-full rounded-lg object-cover shadow-[0_24px_80px_rgba(0,0,0,0.6)]"
                style={{ maxHeight: "600px", objectPosition: "top" }}
                loading="lazy"
              />
              {/* Gold badge */}
              <div
                className="absolute bottom-6 left-6 z-20 bg-[#0a0a0a]/90 backdrop-blur-sm border border-[#C9A84C]/40 rounded-md px-4 py-3"
              >
                <p
                  className="text-[#C9A84C] font-bold text-base"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Randy O. Smith
                </p>
                <p
                  className="text-[#b8b8b8] text-xs mt-0.5"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Attorney at Law · New York
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
