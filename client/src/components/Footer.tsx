/**
 * Footer — R.O. Smith Law Firm
 * Design: 4-column dark footer with gold top border, contact info, links
 */
import { Phone, Mail, MapPin } from "lucide-react";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer
      className="bg-[#0a0a0a] border-t-2 border-[#C9A84C]"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="container py-14 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Firm Info */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 border-2 border-[#C9A84C] flex items-center justify-center flex-shrink-0">
                <span className="text-[#C9A84C] font-bold text-sm font-serif leading-none">RO</span>
              </div>
              <div className="flex flex-col leading-none">
                <span
                  className="text-[#f5f5f5] font-bold text-sm tracking-[0.15em] uppercase"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  R.O. Smith
                </span>
                <span
                  className="text-[#C9A84C] text-[10px] tracking-[0.25em] uppercase"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Law Firm
                </span>
              </div>
            </div>
            <p
              className="text-[#b8b8b8] text-sm leading-relaxed mb-5"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Aggressive legal representation for criminal defense, personal injury, and real estate matters across New York.
            </p>
            <address className="not-italic space-y-2">
              <a
                href="tel:9175477563"
                className="flex items-center gap-2 text-[#b8b8b8] text-sm hover:text-[#C9A84C] transition-colors duration-200"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <Phone size={13} className="text-[#C9A84C]" aria-hidden="true" />
                (917) 547-7563
              </a>
              <a
                href="mailto:rsmit042179@gmail.com"
                className="flex items-center gap-2 text-[#b8b8b8] text-sm hover:text-[#C9A84C] transition-colors duration-200 break-all"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <Mail size={13} className="text-[#C9A84C] flex-shrink-0" aria-hidden="true" />
                rsmit042179@gmail.com
              </a>
              <div className="flex items-start gap-2 text-[#b8b8b8] text-sm">
                <MapPin size={13} className="text-[#C9A84C] flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  11418 238th Street<br />Elmont, NY 11003
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
                { label: "Criminal Defense", href: "/criminal-defense" },
                { label: "Personal Injury", href: "/personal-injury" },
                { label: "Real Estate Law", href: "/real-estate" },
                { label: "DUI & Traffic", href: "/criminal-defense" },
                { label: "Drug Charges", href: "/criminal-defense" },
                { label: "Car Accidents", href: "/personal-injury" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#b8b8b8] text-sm hover:text-[#C9A84C] transition-colors duration-200"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {link.label}
                  </a>
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
                { label: "About the Firm", href: "#about" },
                { label: "Blog & Insights", href: "/blog" },
                { label: "Client Testimonials", href: "/testimonials" },
                { label: "Contact Us", href: "#contact" },
                { label: "New York City", href: "/new-york-city" },
                { label: "Nassau County", href: "/nassau-county" },
                { label: "Suffolk County", href: "/suffolk-county" },
                { label: "Westchester County", href: "/westchester-county" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#b8b8b8] text-sm hover:text-[#C9A84C] transition-colors duration-200"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {link.label}
                  </a>
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
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Disclaimer", href: "/disclaimer" },
                { label: "Sitemap", href: "/sitemap.xml" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#b8b8b8] text-sm hover:text-[#C9A84C] transition-colors duration-200"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Availability badge */}
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-[#C9A84C]/10 border border-[#C9A84C]/20">
              <div className="w-2 h-2 rounded-full bg-[#C9A84C] animate-pulse" aria-hidden="true" />
              <span
                className="text-[#C9A84C] text-xs font-semibold"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Available 24/7
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
            © {currentYear} R.O. Smith Law Firm. All rights reserved.
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
