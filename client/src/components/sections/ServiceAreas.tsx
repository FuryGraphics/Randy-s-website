/**
 * FAQ Section — Bergmann Law Firm, PLLC
 * Design: Accordion-style FAQ with gold accents
 * Note: Replaces the ServiceAreas section from the original template
 */
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What Types Of Cases Do You Handle?",
    answer:
      "Bergmann Law Firm handles a wide range of legal matters including family law (divorce, child custody, spousal support), personal injury (car accidents, workplace injuries, slip and fall), and civil litigation. We serve clients throughout San Antonio and Bexar County.",
  },
  {
    question: "How Does The Divorce Process Work?",
    answer:
      "The divorce process in Texas begins with filing a petition, followed by a mandatory 60-day waiting period. During this time, we work on property division, custody arrangements, and support negotiations. Whether contested or uncontested, we guide you through every step to achieve the best possible outcome.",
  },
  {
    question: "What Should I Do If I've Been Injured In A Car Accident?",
    answer:
      "First, seek medical attention immediately. Document the scene with photos, exchange information with other parties, and file a police report. Then, contact an attorney before speaking with insurance companies. We can help protect your rights and pursue fair compensation for your injuries.",
  },
  {
    question: "How Is Child Custody Determined In A Divorce?",
    answer:
      "In Texas, courts determine custody based on the best interests of the child. Factors include each parent's ability to provide care, the child's emotional and physical needs, stability of each home, and the child's own preferences if they are old enough. We advocate strongly for your parental rights.",
  },
  {
    question: "What Are My Rights If I've Been Arrested?",
    answer:
      "If you've been arrested, you have the right to remain silent and the right to an attorney. Do not answer questions or sign anything without legal counsel present. Contact an attorney immediately to protect your rights and begin building your defense.",
  },
  {
    question: "How Much Does It Cost To Hire A Lawyer?",
    answer:
      "We offer a free initial consultation to discuss your case. Fee structures vary depending on the type of case — personal injury cases are typically handled on a contingency basis (no fee unless we win), while family law matters may involve hourly rates or flat fees. We always discuss costs transparently upfront.",
  },
  {
    question: "What Compensation Can I Receive In A Personal Injury Case?",
    answer:
      "Compensation may include medical expenses (past and future), lost wages, pain and suffering, property damage, and in some cases, punitive damages. The amount depends on the severity of your injuries, the impact on your daily life, and the negligence of the responsible party.",
  },
  {
    question: "How Do I Get Started With My Legal Case?",
    answer:
      "Getting started is simple — contact us for a free consultation by phone at (210) 759-4336 or fill out our contact form. During the consultation, we'll discuss your situation, explain your legal options, and outline a strategy tailored to your specific needs.",
  },
];

function FAQItem({ question, answer, isOpen, onClick }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="faq-item">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-5 px-5 text-left group"
        aria-expanded={isOpen}
        style={{ background: "none", border: "none" }}
      >
        <span
          className={`text-[15px] md:text-[16px] font-semibold transition-colors duration-200 pr-4 ${
            isOpen ? "text-[#B8860B]" : "text-[#f5f5f5] group-hover:text-[#B8860B]"
          }`}
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {question}
        </span>
        <ChevronDown
          size={20}
          className={`text-[#B8860B] flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p
          className="text-[#b8b8b8] text-[14px] leading-relaxed px-5 pb-5"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function ServiceAreas() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="py-20 md:py-28 bg-[#0F1B2D]"
      aria-labelledby="faq-heading"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left side - header */}
          <div className="lg:col-span-2 fade-up">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#B8860B]" />
              <span
                className="text-[#B8860B] text-xs font-semibold tracking-[0.25em] uppercase"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Common Questions
              </span>
            </div>
            <h2
              id="faq-heading"
              className="text-[30px] md:text-[40px] font-bold text-[#f5f5f5] leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Frequently Asked{" "}
              <span className="gold-underline text-[#B8860B]">Questions</span>
            </h2>
            <p
              className="text-[#b8b8b8] text-base leading-relaxed mb-8"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Have questions about your legal matter? Here are answers to some of the most common questions we receive. For specific guidance about your case, contact us for a free consultation.
            </p>
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-gold"
            >
              Ask Your Question
            </button>
          </div>

          {/* Right side - FAQ accordion */}
          <div className="lg:col-span-3 fade-up" style={{ transitionDelay: "150ms" }}>
            <div className="border border-white/8 rounded-lg overflow-hidden bg-[#0A0F1A]/50">
              {faqs.map((faq, i) => (
                <FAQItem
                  key={i}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === i}
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
