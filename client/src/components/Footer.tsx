/**
 * Footer — Bergmann Law Firm, PLLC
 * Design: Professional dark footer with gold accents, links, and legal disclaimer
 */
import { Phone, Mail, MapPin, Scale } from "lucide-react";

const currentYear = new Date().getFullYear();

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="bg-[#060A12] border-t-2 border-[#B8860B]"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="container py-14 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Firm Info */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 border-2 border-[#B8860B] rounded-sm flex items-center justify-center bg-[#B8860B]/10">
                <Scale size={18} className="text-[#B8860B]" />
              </div>
              <div className="flex flex-col leading-none">
                <span
                  className="text-[#f5f5f5] font-bold text-sm tracking-[0.12em] uppercase"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Bergmann Law
                </span>
                <span
                  className="text-[#B8860B] text-[10px] tracking-[0.2em] uppercase mt-0.5"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Firm, PLLC
                </span>
              </div>
            </div>
            <p
              className="text-[#b8b8b8] text-sm leading-relaxed mb-5"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Dedicated family law and personal injury representation in San Antonio and Bexar County, Texas.
            </p>
            <address className="not-italic space-y-2">
              <a
                href="tel:2107594336"
                className="flex items-center gap-2 text-[#b8b8b8] text-sm hover:text-[#B8860B] transition-colors duration-200"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <Phone size={13} className="text-[#B8860B]" aria-hidden="true" />
                (210) 759-4336
              </a>
              <a
                href="mailto:william@wbergmannlaw.com"
                className="flex items-center gap-2 text-[#b8b8b8] text-sm hover:text-[#B8860B] transition-colors duration-200 break-all"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <Mail size={13} className="text-[#B8860B] flex-shrink-0" aria-hidden="true" />
                william@wbergmannlaw.com
              </a>
              <div className="flex items-start gap-2 text-[#b8b8b8] text-sm">
                <MapPin size={13} className="text-[#B8860B] flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  San Antonio, Texas<br />Bexar County
                </span>
              </div>
            </address>
          </div>

          {/* Column 2: Practice Areas */}
          <div>
            <h3
              className="text-[#f5f5f5] font-semibold text-sm tracking-wider uppercase mb-5"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Practice Areas
            </h3>
            <ul className="space-y-2.5" role="list">
              {[
                "Family Law",
                "Personal Injury",
                "Divorce",
                "Child Custody",
                "Spousal Support",
                "Car Accidents",
              ].map((area) => (
                <li key={area}>
                  <span
                    className="text-[#b8b8b8] text-sm"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {area}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3
              className="text-[#f5f5f5] font-semibold text-sm tracking-wider uppercase mb-5"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Quick Links
            </h3>
            <ul className="space-y-2.5" role="list">
              {[
                { label: "Home", href: "#hero" },
                { label: "Practice Areas", href: "#practice-areas" },
                { label: "About the Firm", href: "#about" },
                { label: "Client Testimonials", href: "#testimonials" },
                { label: "FAQ", href: "#faq" },
                { label: "Contact Us", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-[#b8b8b8] text-sm hover:text-[#B8860B] transition-colors duration-200"
                    style={{ fontFamily: "'DM Sans', sans-serif", background: "none", border: "none", padding: 0, cursor: "pointer" }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h3
              className="text-[#f5f5f5] font-semibold text-sm tracking-wider uppercase mb-5"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Legal
            </h3>
            <ul className="space-y-2.5 mb-8" role="list">
              {[
                { label: "Privacy Policy", href: "#" },
                { label: "Disclaimer", href: "#" },
                { label: "Terms of Service", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#b8b8b8] text-sm hover:text-[#B8860B] transition-colors duration-200"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-[#B8860B]/10 border border-[#B8860B]/20">
              <div className="w-2 h-2 rounded-full bg-[#B8860B] animate-pulse" aria-hidden="true" />
              <span
                className="text-[#B8860B] text-xs font-semibold"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Free Consultation
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/8">
        <div className="container py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p
            className="text-[#b8b8b8]/50 text-xs text-center md:text-left"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            &copy; {currentYear} Bergmann Law Firm, PLLC. All rights reserved.
          </p>
          <p
            className="text-[#b8b8b8]/40 text-xs text-center md:text-right max-w-lg"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            This website is for informational purposes only and does not constitute legal advice. Viewing this site does not create an attorney-client relationship.
          </p>
        </div>
      </div>
    </footer>
  );
}
