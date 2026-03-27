import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Math Learning Blog | Tips, Guides & Strategies for Kids",
  description:
    "Read our free math education blog! Tips for parents, teaching strategies, game reviews, and guides to help kids aged 4–12 master math.",
};

const articles = [
  {
    slug: "why-math-games-work",
    title: "Why Math Games Are More Effective Than Worksheets",
    excerpt: "Research shows that game-based learning increases math retention by up to 40%. Here's the neuroscience behind why play is the most powerful teacher.",
    category: "Research",
    readTime: "5 min read",
    date: "March 15, 2025",
    icon: "🧠",
    color: "#7c3aed",
  },
  {
    slug: "times-tables-guide",
    title: "The Complete Guide to Teaching Times Tables",
    excerpt: "From skip counting to the nines trick — a step-by-step parent's guide for making multiplication tables click for every type of learner.",
    category: "Guide",
    readTime: "8 min read",
    date: "March 8, 2025",
    icon: "✖️",
    color: "#06b6d4",
  },
  {
    slug: "math-anxiety-kids",
    title: "How to Help Your Child Overcome Math Anxiety",
    excerpt: "Up to 50% of students experience math anxiety. Discover the signs, causes, and proven strategies to rebuild confidence and make math fun again.",
    category: "Parenting",
    readTime: "6 min read",
    date: "February 28, 2025",
    icon: "❤️",
    color: "#ec4899",
  },
  {
    slug: "fractions-made-easy",
    title: "Fractions Made Easy: Visual Strategies for Kids",
    excerpt: "Fractions trip up more kids than almost any other topic. These visual, hands-on strategies make the abstract concept of fractions finally click.",
    category: "Teaching",
    readTime: "7 min read",
    date: "February 20, 2025",
    icon: "🍕",
    color: "#10b981",
  },
  {
    slug: "kindergarten-math-skills",
    title: "10 Essential Math Skills Every Kindergartener Needs",
    excerpt: "Before formal school math begins, these foundational skills set your child up for success. Here's how to build them through play and daily life.",
    category: "Early Learning",
    readTime: "4 min read",
    date: "February 12, 2025",
    icon: "🌱",
    color: "#f59e0b",
  },
  {
    slug: "geometry-real-world",
    title: "Geometry Is Everywhere: Teaching Math Through the Real World",
    excerpt: "Shapes, angles, and areas are all around us. Here's how to turn everyday objects — buildings, food, nature — into geometry lessons kids love.",
    category: "Activities",
    readTime: "5 min read",
    date: "January 30, 2025",
    icon: "📐",
    color: "#3b82f6",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="page-hero" aria-labelledby="blog-heading">
        <div className="section-container">
          <div style={{ fontSize: "3rem", marginBottom: "0.75rem" }}>📰</div>
          <h1 id="blog-heading" style={{ fontFamily: "Outfit, sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: "0.75rem" }}>
            Math <span className="gradient-text">Learning Blog</span>
          </h1>
          <div className="divider" />
          <p style={{ color: "var(--text-secondary)", maxWidth: 520, margin: "1.25rem auto 0", fontSize: "1rem", lineHeight: 1.7 }}>
            Expert tips, research-backed strategies, and practical guides for parents and teachers helping kids succeed in math.
          </p>
        </div>
      </section>

      <section style={{ padding: "3rem 1.5rem 6rem" }} aria-labelledby="articles-heading">
        <div className="section-container">
          <h2 id="articles-heading" style={{ fontFamily: "Outfit, sans-serif", fontWeight: 800, fontSize: "1.4rem", marginBottom: "2rem" }}>
            Latest Articles
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.5rem" }}>
            {articles.map((article) => (
              <article key={article.slug} className="glass-card" style={{ padding: "1.75rem", cursor: "pointer" }}>
                {/* Category + Read Time */}
                <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem", flexWrap: "wrap" }}>
                  <span style={{
                    background: `${article.color}22`, border: `1px solid ${article.color}55`,
                    color: article.color, padding: "3px 10px", borderRadius: "9999px",
                    fontSize: "0.72rem", fontFamily: "Outfit", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em"
                  }}>
                    {article.category}
                  </span>
                  <span style={{ color: "var(--text-muted)", fontSize: "0.75rem", display: "flex", alignItems: "center" }}>
                    ⏱ {article.readTime}
                  </span>
                </div>

                {/* Icon */}
                <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>{article.icon}</div>

                {/* Title */}
                <h3 style={{ fontFamily: "Outfit, sans-serif", fontWeight: 700, fontSize: "1.05rem", color: "white", lineHeight: 1.35, marginBottom: "0.6rem" }}>
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem", lineHeight: 1.65, marginBottom: "1rem" }}>
                  {article.excerpt}
                </p>

                {/* Footer */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "0.75rem" }}>
                  <span style={{ color: "var(--text-muted)", fontSize: "0.75rem" }}>{article.date}</span>
                  <span style={{ color: article.color, fontFamily: "Outfit", fontWeight: 700, fontSize: "0.82rem" }}>Read More →</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
