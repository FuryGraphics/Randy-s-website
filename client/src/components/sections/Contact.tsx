/**
 * Contact Section — Bergmann Law Firm, PLLC
 * Design: Dark section with gold accents, form + contact info split layout
 */
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    caseType: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-[#0F1B2D]"
      aria-labelledby="contact-heading"
    >
      <div className="container">
        {/* Header */}
        <div className="mb-12 fade-up">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#B8860B]" />
            <span
              className="text-[#B8860B] text-xs font-semibold tracking-[0.25em] uppercase"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Get In Touch
            </span>
          </div>
          <h2
            id="contact-heading"
            className="text-[30px] md:text-[40px] font-bold text-[#f5f5f5] leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Schedule Your{" "}
            <span className="gold-underline text-[#B8860B]">Free Consultation</span>
          </h2>
          <p
            className="text-[#b8b8b8] mt-4 max-w-xl text-base leading-relaxed"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Tell us about your case and we'll get back to you promptly. All consultations are completely free and confidential.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-3 fade-up">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <CheckCircle2 size={56} className="text-[#B8860B] mb-4" />
                <h3
                  className="text-[24px] font-bold text-[#f5f5f5] mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Message Received
                </h3>
                <p
                  className="text-[#b8b8b8] text-base max-w-sm"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Thank you for reaching out. We'll review your case details and contact you promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-[#b8b8b8] text-sm font-medium mb-2"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      Full Name <span className="text-[#B8860B]">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="w-full bg-[#0a0a0a]/60 border border-white/10 rounded-md px-4 py-3 text-[#f5f5f5] text-sm placeholder-[#555] focus:outline-none focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B]/30 transition-colors duration-200"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[#b8b8b8] text-sm font-medium mb-2"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      Email Address <span className="text-[#B8860B]">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full bg-[#0a0a0a]/60 border border-white/10 rounded-md px-4 py-3 text-[#f5f5f5] text-sm placeholder-[#555] focus:outline-none focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B]/30 transition-colors duration-200"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-[#b8b8b8] text-sm font-medium mb-2"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(210) 000-0000"
                      className="w-full bg-[#0a0a0a]/60 border border-white/10 rounded-md px-4 py-3 text-[#f5f5f5] text-sm placeholder-[#555] focus:outline-none focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B]/30 transition-colors duration-200"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="caseType"
                      className="block text-[#b8b8b8] text-sm font-medium mb-2"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      Case Type <span className="text-[#B8860B]">*</span>
                    </label>
                    <select
                      id="caseType"
                      name="caseType"
                      required
                      value={form.caseType}
                      onChange={handleChange}
                      className="w-full bg-[#0a0a0a]/60 border border-white/10 rounded-md px-4 py-3 text-[#f5f5f5] text-sm focus:outline-none focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B]/30 transition-colors duration-200"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      <option value="" disabled style={{ color: "#555" }}>Select case type</option>
                      <option value="family-law">Family Law</option>
                      <option value="personal-injury">Personal Injury</option>
                      <option value="divorce">Divorce</option>
                      <option value="child-custody">Child Custody</option>
                      <option value="car-accident">Car Accident</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-[#b8b8b8] text-sm font-medium mb-2"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Brief Case Description <span className="text-[#B8860B]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Please briefly describe your legal matter..."
                    className="w-full bg-[#0a0a0a]/60 border border-white/10 rounded-md px-4 py-3 text-[#f5f5f5] text-sm placeholder-[#555] focus:outline-none focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B]/30 transition-colors duration-200 resize-none"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  />
                </div>

                <p
                  className="text-[#b8b8b8]/60 text-xs leading-relaxed"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  By submitting this form, you agree to be contacted by Bergmann Law Firm, PLLC. This form does not create an attorney-client relationship.
                </p>

                <button
                  type="submit"
                  className="btn-gold flex items-center gap-2 w-full sm:w-auto justify-center"
                  aria-label="Submit consultation request"
                >
                  <Send size={15} aria-hidden="true" />
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 fade-up" style={{ transitionDelay: "150ms" }}>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-md bg-[#B8860B]/10 border border-[#B8860B]/20 flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-[#B8860B]" aria-hidden="true" />
                </div>
                <div>
                  <p
                    className="text-[#b8b8b8] text-xs font-semibold tracking-widest uppercase mb-1"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Phone
                  </p>
                  <a
                    href="tel:2107594336"
                    className="text-[#f5f5f5] font-semibold text-base hover:text-[#B8860B] transition-colors"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    (210) 759-4336
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-md bg-[#B8860B]/10 border border-[#B8860B]/20 flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-[#B8860B]" aria-hidden="true" />
                </div>
                <div>
                  <p
                    className="text-[#b8b8b8] text-xs font-semibold tracking-widest uppercase mb-1"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Email
                  </p>
                  <a
                    href="mailto:william@wbergmannlaw.com"
                    className="text-[#f5f5f5] font-semibold text-sm hover:text-[#B8860B] transition-colors break-all"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    william@wbergmannlaw.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-md bg-[#B8860B]/10 border border-[#B8860B]/20 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-[#B8860B]" aria-hidden="true" />
                </div>
                <div>
                  <p
                    className="text-[#b8b8b8] text-xs font-semibold tracking-widest uppercase mb-1"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Location
                  </p>
                  <address
                    className="text-[#f5f5f5] text-sm not-italic leading-relaxed"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    San Antonio, Texas<br />
                    Bexar County
                  </address>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-md bg-[#B8860B]/10 border border-[#B8860B]/20 flex items-center justify-center flex-shrink-0">
                  <Clock size={18} className="text-[#B8860B]" aria-hidden="true" />
                </div>
                <div>
                  <p
                    className="text-[#b8b8b8] text-xs font-semibold tracking-widest uppercase mb-1"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Office Hours
                  </p>
                  <p
                    className="text-[#f5f5f5] text-sm"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Monday – Friday: 9:00 AM – 5:00 PM
                  </p>
                  <p
                    className="text-[#b8b8b8] text-xs mt-0.5"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Evenings & weekends by appointment
                  </p>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-8 p-4 rounded-lg border border-white/8 bg-[#0a0a0a]/30">
              <p
                className="text-[#b8b8b8]/60 text-xs leading-relaxed"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <strong className="text-[#b8b8b8]/80">Attorney-Client Privilege:</strong> All communications with our firm are protected by attorney-client privilege and kept strictly confidential.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
