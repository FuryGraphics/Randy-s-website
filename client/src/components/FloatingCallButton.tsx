/**
 * FloatingCallButton — Bergmann Law Firm, PLLC
 * Mobile-only sticky call button fixed to bottom-right viewport
 */
import { Phone } from "lucide-react";

export default function FloatingCallButton() {
  return (
    <a
      href="tel:2107594336"
      className="floating-call md:hidden"
      aria-label="Call Bergmann Law Firm: (210) 759-4336"
    >
      <Phone size={18} aria-hidden="true" />
      <span>Call Now</span>
    </a>
  );
}
