/**
 * TrustBar Section — Bergmann Law Firm, PLLC
 * Design: Dark navy bar with gold top border, animated count-up numbers
 */
import { useRef } from "react";
import { useCountUp } from "@/hooks/useScrollReveal";

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  prefix?: string;
}

function StatItem({ value, suffix, label, prefix = "" }: StatItemProps) {
  const ref = useRef<HTMLSpanElement>(null);
  useCountUp(ref, value, 1600, suffix);

  return (
    <div className="flex flex-col items-center text-center px-6 py-6 fade-up">
      <div className="flex items-baseline gap-1 mb-2">
        {prefix && (
          <span
            className="text-[#B8860B] text-3xl md:text-4xl font-bold"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {prefix}
          </span>
        )}
        <span
          ref={ref}
          className="text-[#B8860B] text-3xl md:text-4xl font-bold"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          0{suffix}
        </span>
      </div>
      <p
        className="text-[#b8b8b8] text-sm md:text-base font-medium max-w-[160px] leading-snug"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {label}
      </p>
    </div>
  );
}

export default function TrustBar() {
  return (
    <section
      id="trust-bar"
      className="bg-[#0F1B2D] border-t-2 border-[#B8860B] border-b border-white/8"
      aria-label="Trust and authority statistics"
    >
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/8">
          <StatItem value={10} suffix="+" label="Years of Experience" />
          <StatItem value={500} suffix="+" label="Cases Handled" />
          <div className="flex flex-col items-center text-center px-6 py-6 fade-up">
            <div className="mb-2">
              <span
                className="text-[#B8860B] text-3xl md:text-4xl font-bold"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                24/7
              </span>
            </div>
            <p
              className="text-[#b8b8b8] text-sm md:text-base font-medium max-w-[160px] leading-snug"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Available for Consultations
            </p>
          </div>
          <div className="flex flex-col items-center text-center px-6 py-6 fade-up">
            <div className="mb-2">
              <span
                className="text-[#B8860B] text-3xl md:text-4xl font-bold"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Free
              </span>
            </div>
            <p
              className="text-[#b8b8b8] text-sm md:text-base font-medium max-w-[160px] leading-snug"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Initial Consultation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
