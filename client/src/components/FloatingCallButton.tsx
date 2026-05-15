/**
 * FloatingCallButton — R.O. Smith Law Firm
 * Mobile-only sticky call button fixed to bottom-right viewport
 */
import { Phone } from "lucide-react";

export default function FloatingCallButton() {
  return (
    <a
      href="tel:9175477563"
      className="floating-call md:hidden"
      aria-label="Call R.O. Smith Law Firm: (917) 547-7563"
    >
      <Phone size={18} aria-hidden="true" />
      <span>Call Now</span>
    </a>
  );
}
