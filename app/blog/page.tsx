import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_ARTICLES } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Math Learning Blog | Tips, Guides & Strategies for Kids | MathGames for Kids",
  description: "Expert articles on teaching math to children — strategies, games, activities, and advice for parents and teachers.",
};

export default function BlogPage() {
  const [featured, ...rest] = BLOG_ARTICLES;

  return (
    <>
      {/* Hero */}
      <section className="page-hero" aria-labelledby="blog-heading">
        <div className="section-container">
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.4)", padding: "5px 18px", borderRadius: "9999px", marginBottom: "1.25rem" }}>
            <span style={{ fontFamily: "Outfit, sans-serif", fontWeight: 700, fontSize: "0.75rem", color: "#a78bfa", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              📝 Math Learning Blog
            </span>
          </div>
          <h1 id="blog-heading" style={{ fontFamily: "Outfit, sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.15, marginBottom: "1rem" }}>
            Tips, Guides &amp; <span className="gradient-text">Strategies</span>
          </h1>
          <div className="divider" />
          <p style={{ color: "var(--text-secondary)", marginTop: "1rem", maxWidth: 500, margin: "1rem auto 0", fontSize: "1rem", lineHeight: 1.7 }}>
            Expert advice for parents and teachers on making math fun, effective, and stress-free.
          </p>
        </div>
      </section>

      <section style={{ padding: "2rem 1.5rem 6rem" }}>
        <div className="section-container">

          {/* Featured Article */}
          <Link href={`/blog/${featured.slug}`} style={{ textDecoration: "none", display: "block", marginBottom: "2.5rem" }}>
            <article className="glass-card" style={{
              padding: "2.5rem", display: "grid",
              gridTemplateColumns: "auto 1fr", gap: "2rem", alignItems: "center",
              background: `linear-gradient(135deg, ${featured.color}18, rgba(255,255,255,0.03))`,
              borderColor: `${featured.color}40`, transition: "all 0.3s ease",
            }}>
              <div style={{ fontSize: "4.5rem", lineHeight: 1 }}>{featured.icon}</div>
              <div>
                <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "0.75rem", flexWrap: "wrap" }}>
                  <span style={{ background: `${featured.color}22`, border: `1px solid ${featured.color}55`, color: featured.color, padding: "3px 12px", borderRadius: "9999px", fontSize: "0.72rem", fontFamily: "Outfit", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    ⭐ Featured
                  </span>
                  <span style={{ background: `${featured.color}22`, border: `1px solid ${featured.color}55`, color: featured.color, padding: "3px 12px", borderRadius: "9999px", fontSize: "0.72rem", fontFamily: "Outfit", fontWeight: 700 }}>
                    {featured.category}
                  </span>
                  <span style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>{featured.readTime}</span>
                </div>
                <h2 style={{ fontFamily: "Outfit, sans-serif", fontWeight: 800, fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", color: "white", marginBottom: "0.75rem", lineHeight: 1.3 }}>
                  {featured.title}
                </h2>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, fontSize: "0.95rem", marginBottom: "1rem" }}>
                  {featured.excerpt}
                </p>
                <span style={{ color: "#a78bfa", fontFamily: "Outfit", fontWeight: 700, fontSize: "0.9rem" }}>
                  Read Article →
                </span>
              </div>
            </article>
          </Link>

          {/* Article Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.5rem" }}>
            {rest.map((article) => (
              <Link key={article.slug} href={`/blog/${article.slug}`} style={{ textDecoration: "none" }}>
                <article className="glass-card" style={{ padding: "1.75rem", height: "100%", display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                    <div style={{ fontSize: "2.5rem" }}>{article.icon}</div>
                    <span style={{ background: `${article.color}22`, border: `1px solid ${article.color}55`, color: article.color, padding: "3px 10px", borderRadius: "9999px", fontSize: "0.7rem", fontFamily: "Outfit", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                      {article.category}
                    </span>
                  </div>
                  <h2 style={{ fontFamily: "Outfit, sans-serif", fontWeight: 800, fontSize: "1.05rem", color: "white", marginBottom: "0.6rem", lineHeight: 1.4 }}>
                    {article.title}
                  </h2>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.7, flex: 1 }}>
                    {article.excerpt}
                  </p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "1.25rem", paddingTop: "1rem", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                    <span style={{ color: "var(--text-muted)", fontSize: "0.78rem" }}>⏱ {article.readTime}</span>
                    <span style={{ color: "#a78bfa", fontFamily: "Outfit", fontWeight: 700, fontSize: "0.82rem" }}>Read →</span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
