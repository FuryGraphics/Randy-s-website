/**
 * About / Why Choose Us Section — Bergmann Law Firm, PLLC
 * Design: Text + feature list split layout, gold accent list, fade-in on scroll
 */
import { CheckCircle2 } from "lucide-react";

const reasons = [
  {
    title: "Personalized Legal Representation",
    desc: "Every case is unique and deserves individualized attention. We take the time to understand your specific legal needs and craft a tailored strategy.",
  },
  {
    title: "Proven Experience Across Multiple Practice Areas",
    desc: "With experience in family law, personal injury, and civil litigation, we offer comprehensive legal support under one roof.",
  },
  {
    title: "Aggressive Advocacy & Strong Negotiation",
    desc: "We fight relentlessly to protect your interests, whether negotiating a fair settlement or defending you in court.",
  },
  {
    title: "Clear Communication & Transparency",
    desc: "We keep clients informed every step of the way, explaining legal procedures, options, and potential outcomes in clear, straightforward language.",
  },
  {
    title: "Client-Centered Approach",
    desc: "We treat every client with respect, integrity, and care. We take the time to listen to your concerns and provide supportive, results-driven representation.",
  },
  {
    title: "Commitment to Results",
    desc: "Whether securing fair settlements, winning custody battles, or obtaining maximum compensation for injuries, we are committed to delivering successful outcomes.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-[#0F1B2D]"
      aria-labelledby="about-heading"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Text Side */}
          <div className="fade-up">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#B8860B]" />
              <span
                className="text-[#B8860B] text-xs font-semibold tracking-[0.25em] uppercase"
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
              <span className="gold-underline text-[#B8860B]">Bergmann Law</span>{" "}
              Firm?
            </h2>

            <p
              className="text-[#b8b8b8] text-base leading-relaxed mb-4"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              The quality and intelligence of your lawyer can make a significant difference in the outcome of your case. As a San Antonio attorney, I am committed to seeking the most favorable outcome for my clients in various legal matters.
            </p>
            <p
              className="text-[#b8b8b8] text-base leading-relaxed mb-8"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              When you retain Bergmann Law Firm, PLLC, you can trust that I will go the distance to help you resolve simple and the most complex legal issues. Your case will be given the attention it deserves.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-gold"
              >
                Schedule Free Consultation
              </button>
              <a href="tel:2107594336" className="btn-gold-outline">
                Call (210) 759-4336
              </a>
            </div>
          </div>

          {/* Reasons Side */}
          <div className="fade-up" style={{ transitionDelay: "200ms" }}>
            <ul className="space-y-5" role="list">
              {reasons.map((reason, i) => (
                <li
                  key={reason.title}
                  className="flex gap-4 fade-up p-4 rounded-lg border border-white/5 hover:border-[#B8860B]/20 hover:bg-[#B8860B]/3 transition-all duration-300"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <CheckCircle2
                    size={20}
                    className="text-[#B8860B] flex-shrink-0 mt-0.5"
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
                      className="text-[#b8b8b8] text-[13px] leading-relaxed mt-1"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {reason.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Attorney Bio Section */}
        <div className="mt-20 pt-16 border-t border-white/8 fade-up">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-[#B8860B]" />
                <span
                  className="text-[#B8860B] text-xs font-semibold tracking-[0.25em] uppercase"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Meet The Attorney
                </span>
              </div>
              <h3
                className="text-[26px] md:text-[32px] font-bold text-[#f5f5f5] leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                William R. Bergmann
              </h3>
              <p
                className="text-[#B8860B] text-sm font-semibold mt-2"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Attorney at Law · San Antonio, TX
              </p>
            </div>
            <div className="lg:col-span-2">
              <p
                className="text-[#b8b8b8] text-base leading-relaxed mb-4"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Mr. Bergmann is a proud product of the city of San Antonio. He was born, raised, employed and educated in this amazing city. Mr. Bergmann received his bachelor's in business administration from the University of Texas A&M San Antonio where he graduated with honors and was a proud member of the inaugural class to carry the University's namesake.
              </p>
              <p
                className="text-[#b8b8b8] text-base leading-relaxed mb-4"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                After receiving his teaching certificate, Mr. Bergmann taught at a listed Title I elementary school. There he realized the need to continue his education in order to benefit his community. Mr. Bergmann was able to attend St. Mary's Law School's night program while continuing his career as an educator during the day.
              </p>
              <p
                className="text-[#b8b8b8] text-base leading-relaxed"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                His dedication to serving the San Antonio community drives his practice. I believe every client I represent should have the advantage of being represented by an attorney who can level the playing field.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
