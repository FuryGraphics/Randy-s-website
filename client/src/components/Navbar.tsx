/**
 * Navbar — Bergmann Law Firm, PLLC
 * Design: Professional Prestige — transparent on load, solidifies on scroll
 * Mobile: Hamburger slide-out drawer
 */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Scale } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Practice Areas", href: "#practice-areas" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0A0F1A]/97 backdrop-blur-md border-b border-white/8 shadow-[0_4px_32px_rgba(0,0,0,0.6)]"
            : "bg-transparent"
        }`}
        aria-label="Main navigation"
      >
        <div className="container mx-auto flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-3 group"
            aria-label="Bergmann Law Firm — Home"
          >
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
          </a>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-7" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="text-[#b8b8b8] hover:text-[#B8860B] transition-colors duration-200 text-sm font-medium tracking-wide"
                  style={{ fontFamily: "'DM Sans', sans-serif", background: "none", border: "none" }}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:2107594336"
              className="flex items-center gap-2 text-[#B8860B] text-sm font-semibold hover:text-[#D4A843] transition-colors duration-200"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <Phone size={15} />
              (210) 759-4336
            </a>
            <button
              onClick={() => handleNavClick("#contact")}
              className="btn-gold text-sm py-2.5 px-5"
            >
              Free Consultation
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-[#f5f5f5] hover:text-[#B8860B] transition-colors p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-[#0F1B2D] z-50 lg:hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <span className="text-[#B8860B] font-bold text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Bergmann Law
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-[#b8b8b8] hover:text-[#f5f5f5] transition-colors"
                  aria-label="Close menu"
                >
                  <X size={22} />
                </button>
              </div>
              <nav className="flex-1 overflow-y-auto p-6">
                <ul className="space-y-1" role="list">
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 + 0.1 }}
                    >
                      <button
                        onClick={() => handleNavClick(link.href)}
                        className="w-full text-left text-[#f5f5f5] hover:text-[#B8860B] py-3 px-4 rounded-md hover:bg-white/5 transition-all duration-200 text-base font-medium"
                        style={{ fontFamily: "'DM Sans', sans-serif", background: "none", border: "none" }}
                      >
                        {link.label}
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </nav>
              <div className="p-6 border-t border-white/10 space-y-3">
                <a
                  href="tel:2107594336"
                  className="flex items-center gap-2 text-[#B8860B] font-semibold text-sm"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  <Phone size={16} />
                  (210) 759-4336
                </a>
                <button
                  onClick={() => handleNavClick("#contact")}
                  className="btn-gold w-full text-center"
                >
                  Free Consultation
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
