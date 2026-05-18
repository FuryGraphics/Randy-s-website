/**
 * Work Ethic & Values Section — Bergmann Law Firm, PLLC
 * Design: Split text section highlighting the firm's approach
 */

export default function BlogPreview() {
  return (
    <section
      id="blog"
      className="py-20 md:py-28 bg-[#0A0F1A]"
      aria-labelledby="work-ethic-heading"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column */}
          <div className="fade-up">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#B8860B]" />
              <span
                className="text-[#B8860B] text-xs font-semibold tracking-[0.25em] uppercase"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Our Approach
              </span>
            </div>
            <h2
              id="work-ethic-heading"
              className="text-[30px] md:text-[40px] font-bold text-[#f5f5f5] leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              The Work Ethic That{" "}
              <span className="gold-underline text-[#B8860B]">Works</span> For You
            </h2>
            <p
              className="text-[#b8b8b8] text-base leading-relaxed mb-5"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              I believe that my reputation for success directly reflects my work ethic. When I take on a case, I focus on reviewing and evaluating every piece of evidence. My process has led to many victories, as I have taken the time to identify and exploit weaknesses for a better outcome.
            </p>
            <p
              className="text-[#b8b8b8] text-base leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Whether in a high net worth contentious divorce, a case of serious or catastrophic injuries, or a complex custody battle, my years working within the system and my familiarity with the local San Antonio courts and their personnel have proven to be of great benefit.
            </p>
          </div>

          {/* Right Column */}
          <div className="fade-up" style={{ transitionDelay: "150ms" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#B8860B]" />
              <span
                className="text-[#B8860B] text-xs font-semibold tracking-[0.25em] uppercase"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Our Values
              </span>
            </div>
            <h2
              className="text-[30px] md:text-[40px] font-bold text-[#f5f5f5] leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Honesty, Integrity &{" "}
              <span className="text-[#B8860B]">Transparency</span>
            </h2>
            <p
              className="text-[#b8b8b8] text-base leading-relaxed mb-5"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Various factors will affect the outcome of a case, including Texas law, the quality of the evidence, and how your case is presented. When you need a lawyer who will treat you with dignity and respect and bring integrity to every case, you can trust our firm.
            </p>
            <p
              className="text-[#b8b8b8] text-base leading-relaxed mb-8"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Every judge and every prosecutor brings a unique personality to what they do — and I am very familiar with the personnel in the local courts, and how to present a case that resonates with a jury. Case presentation is among the most critical of all legal talents.
            </p>

            {/* Highlight Box */}
            <div className="p-6 rounded-lg border border-[#B8860B]/20 bg-[#B8860B]/5">
              <p
                className="text-[#E8D5B7] text-[15px] italic leading-relaxed"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "17px" }}
              >
                "Your case matters. Our firm offers personal attention to each matter. You will never feel like you are 'just another client' — I see my clients as individuals deserving of legal help who have entrusted me to help them through one of life's most difficult situations."
              </p>
              <p
                className="text-[#B8860B] text-sm font-semibold mt-3"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                — William R. Bergmann, Attorney at Law
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
