import type { Metadata } from "next";
import Link from "next/link";
import { GAMES, LEVELS, SKILLS } from "@/lib/games-data";
import { BLOG_ARTICLES } from "@/lib/blog-data";
import { DOWNLOADABLE_RESOURCES } from "@/lib/resources-data";

export const metadata: Metadata = {
  title: "Sitemap | MathGames for Kids",
  description: "Complete sitemap of MathGames for Kids — browse all 50 math games, blog articles, resources, and informational pages.",
  robots: { index: true, follow: true },
};

const BASE_URL = "https://www.mathgamesforkids.xyz";

interface SitemapSection {
  heading: string;
  icon: string;
  accentColor: string;
  links: { label: string; href: string; badge?: string }[];
}

const STATIC_SECTIONS: SitemapSection[] = [
  {
    heading: "Main Pages",
    icon: "🏠",
    accentColor: "#7c3aed",
    links: [
      { label: "Home", href: "/" },
      { label: "All Games", href: "/games", badge: "50 games" },
      { label: "Blog", href: "/blog", badge: "16 articles" },
      { label: "Resources", href: "/resources" },
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Legal & Info",
    icon: "📄",
    accentColor: "#6b7280",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Use", href: "/terms" },
    ],
  },
];

export default function SitemapPage() {
  const gameSections: SitemapSection[] = [
    {
      heading: "Games by Level",
      icon: "🎓",
      accentColor: "#10b981",
      links: LEVELS.map((l) => ({
        label: l.name,
        href: `/games/${l.slug}`,
        badge: l.ageRange,
      })),
    },
    {
      heading: "Games by Skill",
      icon: "🧠",
      accentColor: "#f59e0b",
      links: SKILLS.map((s) => ({
        label: `${s.icon} ${s.name}`,
        href: `/games/${s.slug}`,
      })),
    },
    {
      heading: "All 50 Games",
      icon: "🎮",
      accentColor: "#4f46e5",
      links: GAMES.map((g) => ({
        label: `${g.icon} ${g.title}`,
        href: `/games/${g.slug}`,
        badge: g.skills[0],
      })),
    },
  ];

  const contentSections: SitemapSection[] = [
    {
      heading: "Blog Articles",
      icon: "📝",
      accentColor: "#ec4899",
      links: BLOG_ARTICLES.map((a) => ({
        label: a.title,
        href: `/blog/${a.slug}`,
        badge: a.category,
      })),
    },
    {
      heading: "Free Downloadables",
      icon: "📥",
      accentColor: "#06b6d4",
      links: DOWNLOADABLE_RESOURCES.map((r) => ({
        label: `${r.icon} ${r.title}`,
        href: `/resources/download/${r.slug}`,
        badge: r.tag,
      })),
    },
  ];

  const allSections = [...STATIC_SECTIONS, ...gameSections, ...contentSections];
  const totalUrls =
    2 + // static + legal
    LEVELS.length + SKILLS.length + GAMES.length +
    BLOG_ARTICLES.length + DOWNLOADABLE_RESOURCES.length +
    6; // static pages

  return (
    <>
      {/* Hero */}
      <section className="page-hero" aria-labelledby="sitemap-heading">
        <div className="section-container">
          <div style={{ fontSize: "3rem", marginBottom: "0.75rem" }}>🗺️</div>
          <h1 id="sitemap-heading" style={{ fontFamily: "Outfit, sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: "0.75rem" }}>
            Site <span className="gradient-text">Map</span>
          </h1>
          <div className="divider" />
          <p style={{ color: "var(--text-secondary)", maxWidth: 520, margin: "1.25rem auto 0", fontSize: "1rem", lineHeight: 1.7 }}>
            Every page on MathGames for Kids in one place.{" "}
            <span style={{ color: "#a78bfa", fontWeight: 600 }}>{totalUrls} total pages</span> indexed and ready for search engines.
          </p>
          {/* XML sitemap link for developers / SEO */}
          <div style={{ marginTop: "1.25rem" }}>
            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                background: "rgba(124,58,237,0.12)", border: "1px solid rgba(124,58,237,0.35)",
                color: "#a78bfa", padding: "6px 18px", borderRadius: "9999px",
                fontFamily: "Outfit, sans-serif", fontWeight: 700, fontSize: "0.82rem",
                textDecoration: "none",
              }}
            >
              📄 View XML Sitemap for Google Search Console →
            </a>
          </div>
        </div>
      </section>

      {/* Sitemap Grid */}
      <section style={{ padding: "3rem 1.5rem 6rem" }}>
        <div className="section-container">

          {/* Google Search Console tip */}
          <div style={{ marginBottom: "3rem", padding: "1.25rem 1.5rem", borderRadius: "1rem", background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.25)", display: "flex", gap: "1rem", alignItems: "flex-start", maxWidth: 800, margin: "0 auto 3rem" }}>
            <div style={{ fontSize: "1.5rem" }}>🔍</div>
            <div>
              <p style={{ fontFamily: "Outfit, sans-serif", fontWeight: 700, color: "white", fontSize: "0.95rem", marginBottom: "0.3rem" }}>
                For Google Search Console
              </p>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.6 }}>
                Submit the XML sitemap at{" "}
                <a href="/sitemap.xml" target="_blank" rel="noopener" style={{ color: "#34d399", fontFamily: "monospace", fontSize: "0.85rem" }}>
                  {BASE_URL}/sitemap.xml
                </a>{" "}
                — go to Search Console → Sitemaps → paste the URL → Submit.
              </p>
            </div>
          </div>

          {/* All sections in a 2-col grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.5rem" }}>
            {allSections.map((section) => (
              <div
                key={section.heading}
                className="glass-card"
                style={{ padding: "1.5rem" }}
              >
                {/* Section header */}
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1.1rem", paddingBottom: "0.85rem", borderBottom: `2px solid ${section.accentColor}33` }}>
                  <span style={{ fontSize: "1.3rem" }}>{section.icon}</span>
                  <h2 style={{ fontFamily: "Outfit, sans-serif", fontWeight: 800, fontSize: "1rem", color: "white", margin: 0 }}>
                    {section.heading}
                  </h2>
                  <span style={{ marginLeft: "auto", background: `${section.accentColor}22`, border: `1px solid ${section.accentColor}44`, color: section.accentColor, fontFamily: "Outfit", fontWeight: 700, fontSize: "0.65rem", padding: "2px 8px", borderRadius: "9999px" }}>
                    {section.links.length}
                  </span>
                </div>

                {/* Links */}
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                  {section.links.map(({ label, href, badge }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        style={{
                          display: "flex", alignItems: "center", justifyContent: "space-between",
                          gap: "0.5rem", padding: "0.45rem 0.6rem", borderRadius: "8px",
                          color: "var(--text-secondary)", textDecoration: "none",
                          fontSize: "0.85rem", fontFamily: "Inter, sans-serif",
                          background: "rgba(255,255,255,0)",
                          transition: "all 0.15s",
                        }}
                        className="sitemap-link"
                      >
                        <span style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                          <span style={{ color: section.accentColor, fontSize: "0.7rem", fontWeight: 700 }}>→</span>
                          {label}
                        </span>
                        {badge && (
                          <span style={{ fontSize: "0.65rem", fontFamily: "Outfit", fontWeight: 600, color: section.accentColor, background: `${section.accentColor}15`, padding: "1px 7px", borderRadius: "9999px", whiteSpace: "nowrap", textTransform: "capitalize" }}>
                            {badge}
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Stats footer */}
          <div style={{ marginTop: "3rem", padding: "1.5rem 2rem", borderRadius: "1rem", background: "linear-gradient(135deg, rgba(124,58,237,0.12), rgba(6,182,212,0.06))", border: "1px solid rgba(124,58,237,0.2)", display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "center" }}>
            {[
              { label: "Games", count: GAMES.length, icon: "🎮" },
              { label: "Blog Posts", count: BLOG_ARTICLES.length, icon: "📝" },
              { label: "Free Downloads", count: DOWNLOADABLE_RESOURCES.length, icon: "📥" },
              { label: "Total Pages", count: totalUrls, icon: "🗺️" },
            ].map(({ label, count, icon }) => (
              <div key={label} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.2rem" }}>{icon}</div>
                <div style={{ fontFamily: "Outfit, sans-serif", fontWeight: 900, fontSize: "1.5rem", color: "white" }}>{count}</div>
                <div style={{ color: "var(--text-muted)", fontSize: "0.75rem", fontFamily: "Outfit", fontWeight: 600 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .sitemap-link:hover {
          background: rgba(255,255,255,0.05) !important;
          color: white !important;
        }
      `}</style>
    </>
  );
}
