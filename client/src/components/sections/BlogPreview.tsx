/**
 * Blog Preview Section — R.O. Smith Law Firm
 * Design: 3-card grid with category tags and staggered reveal
 */
import { ArrowRight, Calendar, Tag } from "lucide-react";

const OFFICE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663609705540/fYjWgoDUwsCJ7rmjevsg5o/law-office-Z74g7NUGBX4HTfFxe95xHv.webp";
const NYC_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663609705540/fYjWgoDUwsCJ7rmjevsg5o/nyc-skyline-5GgGztguZY92rXrLy2Sa8H.webp";

const posts = [
  {
    title: "What to Do Immediately After a Car Accident in New York",
    excerpt:
      "The steps you take in the first 24 hours after a collision can significantly impact your ability to recover compensation. Here's what every New Yorker should know.",
    category: "Personal Injury",
    date: "May 10, 2026",
    href: "/blog/car-accident-steps-new-york",
    image: NYC_IMG,
    imageAlt: "New York City streets — car accident legal guide",
    bgColor: null,
  },
  {
    title: "Understanding Your Rights During a Criminal Arrest in NYC",
    excerpt:
      "Being arrested is a frightening experience. Knowing your constitutional rights — including the right to remain silent and the right to counsel — can make all the difference.",
    category: "Criminal Defense",
    date: "April 28, 2026",
    href: "/blog/rights-during-arrest-nyc",
    image: null,
    imageAlt: null,
    bgColor: "#1a1a2e",
  },
  {
    title: "Navigating Real Estate Closings in Nassau County: A Legal Guide",
    excerpt:
      "From title searches to contract review, real estate transactions involve complex legal steps. Our guide walks you through what to expect and how to protect your investment.",
    category: "Real Estate Law",
    date: "April 15, 2026",
    href: "/blog/real-estate-closing-nassau-county",
    image: OFFICE_IMG,
    imageAlt: "Law office — real estate legal guide Nassau County",
    bgColor: null,
  },
];

const categoryColors: Record<string, string> = {
  "Personal Injury": "#C9A84C",
  "Criminal Defense": "#7c6fa0",
  "Real Estate Law": "#4a8c6f",
};

export default function BlogPreview() {
  return (
    <section
      id="blog"
      className="py-20 md:py-28 bg-[#0a0a0a]"
      aria-labelledby="blog-heading"
    >
      <div className="container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14 fade-up">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#C9A84C]" />
              <span
                className="text-[#C9A84C] text-xs font-semibold tracking-[0.25em] uppercase"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Legal Insights
              </span>
            </div>
            <h2
              id="blog-heading"
              className="text-[30px] md:text-[40px] font-bold text-[#f5f5f5] leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Latest{" "}
              <span className="gold-underline text-[#C9A84C]">Legal Insights</span>
            </h2>
          </div>
          <a
            href="/blog"
            className="inline-flex items-center gap-2 text-[#C9A84C] font-semibold text-sm hover:text-[#d4b896] transition-colors duration-200 whitespace-nowrap"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            View All Articles
            <ArrowRight size={15} />
          </a>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <article
              key={post.title}
              className="fade-up group flex flex-col rounded-lg overflow-hidden border border-white/8 bg-[#1a1a2e] hover:border-[#C9A84C]/40 transition-all duration-300 hover:shadow-[0_16px_48px_rgba(201,168,76,0.1)] hover:-translate-y-1"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Thumbnail */}
              <div className="h-48 overflow-hidden flex-shrink-0">
                {post.image ? (
                  <img
                    src={post.image}
                    alt={post.imageAlt || post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                ) : (
                  <div
                    className="w-full h-full flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #0d0d1a 100%)" }}
                  >
                    <span
                      className="text-[#C9A84C]/30 text-5xl font-bold"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      RO
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                {/* Meta */}
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      color: categoryColors[post.category] || "#C9A84C",
                      backgroundColor: `${categoryColors[post.category] || "#C9A84C"}18`,
                    }}
                  >
                    <Tag size={10} aria-hidden="true" />
                    {post.category}
                  </span>
                  <span
                    className="flex items-center gap-1 text-[#b8b8b8] text-xs"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    <Calendar size={10} aria-hidden="true" />
                    {post.date}
                  </span>
                </div>

                <h3
                  className="text-[17px] font-bold text-[#f5f5f5] leading-snug mb-3 group-hover:text-[#C9A84C] transition-colors duration-200"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {post.title}
                </h3>
                <p
                  className="text-[#b8b8b8] text-sm leading-relaxed flex-1 mb-4"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {post.excerpt}
                </p>

                <a
                  href={post.href}
                  className="inline-flex items-center gap-2 text-[#C9A84C] text-sm font-semibold hover:text-[#d4b896] transition-colors duration-200 group/link mt-auto"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                  aria-label={`Read more: ${post.title}`}
                >
                  Read More
                  <ArrowRight
                    size={14}
                    className="group-hover/link:translate-x-1 transition-transform duration-200"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
