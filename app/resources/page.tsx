import type { Metadata } from "next";
import Link from "next/link";
import GameCard from "@/components/GameCard";
import { GAMES } from "@/lib/games-data";

export const metadata: Metadata = {
  title: "Math Resources for Parents & Teachers | Free Worksheets & Guides",
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

const resources = [
  { title: "Common Core Math Standards", desc: "Full K–6 math standards breakdown with learning objectives for each grade level.", icon: "📋", tag: "Standards" },
  { title: "Times Tables Practice Chart", desc: "Printable multiplication chart for 1×1 through 12×12. Perfect for refrigerator display.", icon: "📊", tag: "Printable" },
  { title: "Parent's Math Anxiety Guide", desc: "How to model a positive math attitude and support your child's learning at home.", icon: "❤️", tag: "Guide" },
  { title: "Classroom Game Integration", desc: "A teacher's guide to using math games during center time, transitions, and early finisher activities.", icon: "🏫", tag: "Teachers" },
  { title: "Fraction Visual Models", desc: "Printable fraction bars, circles, and number lines for hands-on fraction exploration.", icon: "🍕", tag: "Printable" },
  { title: "Math Vocabulary Cards", desc: "Illustrated math word wall cards for grades K–5. Perfect for ESL and visual learners.", icon: "📝", tag: "Printable" },
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
            Resources for <span className="gradient-text">Parents & Teachers</span>
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
          <div className="divider" style={{ margin: "0.75rem 0 2rem" }} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.25rem" }}>
            {resources.map(({ icon, title, desc, tag }) => (
              <div key={title} className="glass-card" style={{ padding: "1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{ fontSize: "2rem", minWidth: 40 }}>{icon}</div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.4rem" }}>
                    <span style={{ fontSize: "0.65rem", fontFamily: "Outfit", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", background: "rgba(124,58,237,0.2)", border: "1px solid rgba(124,58,237,0.4)", color: "#a78bfa", padding: "2px 8px", borderRadius: "9999px" }}>{tag}</span>
                  </div>
                  <h3 style={{ fontFamily: "Outfit, sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "white", marginBottom: "0.4rem" }}>{title}</h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.82rem", lineHeight: 1.6 }}>{desc}</p>
                  <button style={{ marginTop: "0.75rem", background: "none", border: "1px solid rgba(124,58,237,0.4)", color: "#a78bfa", padding: "4px 14px", borderRadius: "9999px", fontFamily: "Outfit", fontWeight: 700, fontSize: "0.8rem", cursor: "pointer" }}>
                    Download Free →
                  </button>
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
