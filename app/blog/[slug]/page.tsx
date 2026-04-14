import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getBlogArticleBySlug, ALL_BLOG_SLUGS, BLOG_ARTICLES } from "@/lib/blog-data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ALL_BLOG_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getBlogArticleBySlug(slug);
  if (!article) return {};
  return {
    title: `${article.title} | MathGames Blog`,
    description: article.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const article = getBlogArticleBySlug(slug);
  if (!article) notFound();

  const related = BLOG_ARTICLES.filter((a) => a.slug !== slug).slice(0, 3);

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.mathgamesforkids.xyz/blog/${article.slug}`
    },
    "headline": article.title,
    "description": article.excerpt,
    "image": "https://www.mathgamesforkids.xyz/og-image.jpg",
    "author": {
      "@type": "Person",
      "name": "Whitfield Glenn Raymond",
      "url": "https://www.mathgamesforkids.xyz/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "MathGames for Kids",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.mathgamesforkids.xyz/icon.png"
      }
    },
    "datePublished": "2025-04-01T08:00:00+00:00",
    "dateModified": "2025-04-01T08:00:00+00:00"
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" style={{ padding: "1.5rem 1.5rem 0" }}>
        <div className="section-container">
          <ol style={{ display: "flex", gap: "0.5rem", listStyle: "none", flexWrap: "wrap", color: "var(--text-muted)", fontSize: "0.82rem" }}>
            <li><Link href="/" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Home</Link></li>
            <li style={{ opacity: 0.5 }}>›</li>
            <li><Link href="/blog" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Blog</Link></li>
            <li style={{ opacity: 0.5 }}>›</li>
            <li style={{ color: "white", maxWidth: 300, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{article.title}</li>
          </ol>
        </div>
      </nav>

      {/* Article Hero */}
      <section className="page-hero" style={{ paddingBottom: "3rem" }} aria-labelledby="article-heading">
        <div className="section-container">
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: `${article.color}22`, border: `1px solid ${article.color}55`, padding: "5px 16px", borderRadius: "9999px", marginBottom: "1.25rem" }}>
            <span style={{ fontFamily: "Outfit, sans-serif", fontWeight: 700, fontSize: "0.75rem", color: article.color, textTransform: "uppercase", letterSpacing: "0.08em" }}>
              {article.category}
            </span>
          </div>
          <div style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>{article.icon}</div>
          <h1 id="article-heading" style={{ fontFamily: "Outfit, sans-serif", fontWeight: 900, fontSize: "clamp(1.8rem, 4vw, 3rem)", lineHeight: 1.2, maxWidth: 760, margin: "0 auto 1rem" }}>
            {article.title}
          </h1>
          <div className="divider" />
          <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap", marginTop: "1.25rem" }}>
            <span style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}>📅 {article.date}</span>
            <span style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}>⏱ {article.readTime}</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section style={{ padding: "0 1.5rem 5rem" }}>
        <div className="section-container">
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) 300px", gap: "3rem", alignItems: "flex-start" }}
               className="article-layout">

            {/* Main Content */}
            <article>
              {/* Excerpt / Intro box */}
              <div className="glass-card" style={{ padding: "1.5rem", marginBottom: "2rem", background: `${article.color}12`, borderColor: `${article.color}33` }}>
                <p style={{ color: "var(--text-primary)", fontSize: "1.05rem", lineHeight: 1.8, fontStyle: "italic" }}>
                  {article.excerpt}
                </p>
              </div>

              {/* Sections */}
              {article.sections.map((section, i) => (
                <div key={i} style={{ marginBottom: "2rem" }}>
                  {section.heading && (
                    <h2 style={{ fontFamily: "Outfit, sans-serif", fontWeight: 800, fontSize: "1.4rem", color: "white", marginBottom: "0.75rem", paddingTop: i > 0 ? "0.5rem" : 0 }}>
                      {section.heading}
                    </h2>
                  )}
                  <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.85 }}>
                    {section.body}
                  </p>
                </div>
              ))}

              {/* Tips Box */}
              {article.tips && article.tips.length > 0 && (
                <div className="glass-card" style={{ padding: "1.75rem", marginTop: "2.5rem", background: "rgba(124,58,237,0.08)", borderColor: "rgba(124,58,237,0.25)" }}>
                  <h2 style={{ fontFamily: "Outfit, sans-serif", fontWeight: 800, fontSize: "1.1rem", color: "white", marginBottom: "1rem" }}>
                    💡 Quick Tips
                  </h2>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    {article.tips.map((tip, i) => (
                      <li key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                        <span style={{ color: "#a78bfa", fontWeight: 700, minWidth: 20 }}>✓</span>
                        <span style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.6 }}>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA */}
              <div className="glass-card" style={{ padding: "2rem", marginTop: "2.5rem", textAlign: "center", background: "linear-gradient(135deg, rgba(124,58,237,0.15), rgba(6,182,212,0.08))" }}>
                <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>🎮</div>
                <h2 style={{ fontFamily: "Outfit, sans-serif", fontWeight: 800, fontSize: "1.2rem", marginBottom: "0.5rem" }}>
                  Ready to Put This Into Practice?
                </h2>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginBottom: "1.25rem" }}>
                  Try one of our free interactive math games — no sign-up required.
                </p>
                <Link href="/games" className="btn-primary" style={{ fontSize: "0.9rem", padding: "0.65rem 1.5rem" }}>
                  Explore All Games →
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside style={{ display: "flex", flexDirection: "column", gap: "1.5rem", position: "sticky", top: "90px" }}>
              <div className="glass-card" style={{ padding: "1.5rem" }}>
                <h3 style={{ fontFamily: "Outfit, sans-serif", fontWeight: 700, fontSize: "0.9rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1rem" }}>
                  More Articles
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {related.map((rel) => (
                    <Link key={rel.slug} href={`/blog/${rel.slug}`} style={{ textDecoration: "none" }}>
                      <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", padding: "0.75rem", borderRadius: "10px", background: "rgba(255,255,255,0.03)", transition: "background 0.2s" }}>
                        <span style={{ fontSize: "1.5rem" }}>{rel.icon}</span>
                        <div>
                          <div style={{ fontFamily: "Outfit, sans-serif", fontWeight: 700, fontSize: "0.85rem", color: "white", lineHeight: 1.3, marginBottom: "0.25rem" }}>{rel.title}</div>
                          <div style={{ fontSize: "0.72rem", color: "var(--text-muted)" }}>{rel.readTime}</div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="glass-card" style={{ padding: "1.5rem", textAlign: "center" }}>
                <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🏫</div>
                <h3 style={{ fontFamily: "Outfit, sans-serif", fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.5rem" }}>For Teachers</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.8rem", marginBottom: "1rem", lineHeight: 1.6 }}>
                  Free resources, curriculum guides, and classroom strategies.
                </p>
                <Link href="/resources" className="btn-secondary" style={{ fontSize: "0.8rem", padding: "0.5rem 1rem", justifyContent: "center" }}>
                  View Resources
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .article-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
