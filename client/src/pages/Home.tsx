/**
 * Home Page — R.O. Smith Law Firm
 * Design Philosophy: Editorial Prestige — Dark/Gold luxury legal landing page
 * All 9 sections assembled with scroll reveal animations
 */
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import PracticeAreas from "@/components/sections/PracticeAreas";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import ServiceAreas from "@/components/sections/ServiceAreas";
import BlogPreview from "@/components/sections/BlogPreview";
import CTABanner from "@/components/sections/CTABanner";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";

export default function Home() {
  // Initialize Intersection Observer for all .fade-up elements
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -20px 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main id="main-content">
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: Trust Bar */}
        <TrustBar />

        {/* Section 3: Practice Areas */}
        <PracticeAreas />

        {/* Section 4: About / Why Choose Us */}
        <About />

        {/* Section 5: Testimonials */}
        <Testimonials />

        {/* Section 6: Service Areas */}
        <ServiceAreas />

        {/* Section 7: Blog Preview */}
        <BlogPreview />

        {/* Section 8: CTA Banner */}
        <CTABanner />

        {/* Section 9 (Contact Form) */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Floating Call Button */}
      <FloatingCallButton />
    </div>
  );
}
