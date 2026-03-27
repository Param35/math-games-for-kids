import type { Metadata } from "next";
import Link from "next/link";
import GameCard from "@/components/GameCard";
import { GAMES } from "@/lib/games-data";
import { DOWNLOADABLE_RESOURCES } from "@/lib/resources-data";

export const metadata: Metadata = {
  title: "Math Resources for Parents & Teachers | Free Worksheets & Guides | MathGames for Kids",
  description:
    "Free math resources for parents and teachers. Printable worksheets, curriculum guides, teaching tips, and strategies for helping kids aged 4–12 learn math.",
};

const tips = [
  { icon: "⏰", title: "10 Minutes a Day", desc: "Daily short practice sessions are more effective than weekly marathon sessions. Just 10 minutes a day builds lasting fluency." },
  { icon: "🎯", title: "Celebrate Mistakes", desc: "Frame errors as learning opportunities. 'You almost got it!' builds a growth mindset that lasts a lifetime." },
  { icon: "🎮", title: "Game-Based Learning", desc: "Games reduce math anxiety by making practice feel like play, increasing engagement by up to 60% for reluctant learners." },
  { icon: "🔄", title: "Spiral Review", desc: "Revisit older concepts while introducing new ones. Spaced repetition dramatically improves long-term retention." },
  { icon: "🗣️", title: "Talk Math Out Loud", desc: "Ask kids to explain their thinking. Verbalization deepens understanding and reveals misconceptions early." },
  { icon: "🌍", title: "Real-World Connections", desc: "Link math to everyday life — cooking, shopping, building. Contextual learning makes abstract concepts concrete." },
];

export default function ResourcesPage() {
  const recommendedGames = GAMES.filter((g) => g.featured).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="page-hero" aria-labelledby="resources-heading">
        <div className="section-container">
          <div style={{ fontSize: "3rem", marginBottom: "0.75rem" }}>👩‍🏫</div>
          <h1 id="resources-heading" style={{ fontFamily: "Outfit, sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: "0.75rem" }}>
            Resources for <span className="gradient-text">Parents &amp; Teachers</span>
          </h1>
          <div className="divider" />
          <p style={{ color: "var(--text-secondary)", maxWidth: 550, margin: "1.25rem auto 0", fontSize: "1rem", lineHeight: 1.7 }}>
            Everything you need to support young math learners — from teaching strategies to printable materials and curriculum guides.
          </p>
        </div>
      </section>

      {/* Teaching Tips */}
      <section style={{ padding: "3rem 1.5rem" }} aria-labelledby="tips-heading">
        <div className="section-container">
          <h2 id="tips-heading" style={{ fontFamily: "Outfit, sans-serif", fontWeight: 800, fontSize: "1.8rem", marginBottom: "0.5rem" }}>
            💡 Teaching Tips That <span className="gradient-text-warm">Actually Work</span>
          </h2>
          <div className="divider" style={{ margin: "0.75rem 0 2rem" }} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.25rem" }}>
            {tips.map(({ icon, title, desc }) => (
              <div key={title} className="glass-card" style={{ padding: "1.5rem" }}>
                <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{icon}</div>
                <h3 style={{ fontFamily: "Outfit, sans-serif", fontWeight: 700, fontSize: "1rem", color: "white", marginBottom: "0.5rem" }}>{title}</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section style={{ padding: "3rem 1.5rem", background: "rgba(255,255,255,0.02)" }} aria-labelledby="downloads-heading">
        <div className="section-container">
          <h2 id="downloads-heading" style={{ fontFamily: "Outfit, sans-serif", fontWeight: 800, fontSize: "1.8rem", marginBottom: "0.5rem" }}>
            📥 Free <span className="gradient-text-cyan">Downloadables</span>
          </h2>
          <div className="divider" style={{ margin: "0.75rem 0 0.5rem" }} />
          <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginBottom: "2rem" }}>
            Click any resource to open a printable page — then use your browser&apos;s Print / Save as PDF function.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.25rem" }}>
            {DOWNLOADABLE_RESOURCES.map((res) => (
              <div key={res.slug} className="glass-card" style={{ padding: "1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{ fontSize: "2rem", minWidth: 40 }}>{res.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.4rem", flexWrap: "wrap" }}>
                    <span style={{ fontSize: "0.65rem", fontFamily: "Outfit", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", background: `${res.tagColor}22`, border: `1px solid ${res.tagColor}55`, color: res.tagColor, padding: "2px 8px", borderRadius: "9999px" }}>
                      {res.tag}
                    </span>
                    <span style={{ fontSize: "0.65rem", color: "var(--text-muted)", fontFamily: "Outfit", fontWeight: 600 }}>
                      Grades {res.gradeRange} · {res.pages}pp
                    </span>
                  </div>
                  <h3 style={{ fontFamily: "Outfit, sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "white", marginBottom: "0.4rem" }}>
                    {res.title}
                  </h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.82rem", lineHeight: 1.6, marginBottom: "0.75rem" }}>
                    {res.desc}
                  </p>
                  <Link
                    href={`/resources/download/${res.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex", alignItems: "center", gap: "0.4rem",
                      background: `${res.tagColor}20`, border: `1px solid ${res.tagColor}55`,
                      color: res.tagColor, padding: "5px 14px", borderRadius: "9999px",
                      fontFamily: "Outfit", fontWeight: 700, fontSize: "0.8rem",
                      textDecoration: "none", transition: "all 0.2s"
                    }}
                  >
                    📥 Open &amp; Print Free
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Games for Classrooms */}
      <section style={{ padding: "3rem 1.5rem 5rem" }} aria-labelledby="classroom-games-heading">
        <div className="section-container">
          <h2 id="classroom-games-heading" style={{ fontFamily: "Outfit, sans-serif", fontWeight: 800, fontSize: "1.8rem", marginBottom: "0.5rem" }}>
            🎮 Top Picks for the <span className="gradient-text">Classroom</span>
          </h2>
          <div className="divider" style={{ margin: "0.75rem 0 2rem" }} />
          <div className="games-grid">
            {recommendedGames.map((game) => <GameCard key={game.slug} game={game} />)}
          </div>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link href="/games" className="btn-primary">Browse All 24 Games →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
