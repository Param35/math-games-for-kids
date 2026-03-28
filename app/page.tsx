import type { Metadata } from "next";
import Link from "next/link";
import GameCard from "@/components/GameCard";
import CategoryCard from "@/components/CategoryCard";
import { GAMES, LEVELS, SKILLS, getFeaturedGames } from "@/lib/games-data";

export const metadata: Metadata = {
  title: "Free Math Games for Kids | Fun Online Math Practice",
  description:
    "Discover 24 free interactive math games for kids, educators, and families! From counting and addition to fractions and geometry — make math fun and engaging today.",
};

const stats = [
  { value: "24", label: "Free Games", icon: "🎮" },
  { value: "4", label: "Grade Levels", icon: "📚" },
  { value: "8", label: "Math Skills", icon: "🧠" },
  { value: "100%", label: "Free Forever", icon: "✨" },
];



export default function HomePage() {
  const featured = getFeaturedGames();
  const levelGames = LEVELS.map((l) => ({
    ...l,
    count: GAMES.filter((g) => g.levels.includes(l.slug)).length,
  }));
  const skillGames = SKILLS.map((s) => ({
    ...s,
    count: GAMES.filter((g) => g.skills.includes(s.slug)).length,
  }));

  return (
    <>
      {/* ─── Hero Section ─── */}
      <section
        aria-labelledby="hero-heading"
        style={{ position: "relative", padding: "6rem 1.5rem 5rem", textAlign: "center", overflow: "hidden" }}
      >
        {/* Floating math symbols */}
        {["➕", "✖️", "➗", "π", "√", "∞", "=", "🔢"].map((sym, i) => (
          <div
            key={i}
            aria-hidden="true"
            style={{
              position: "absolute",
              fontSize: `${1 + (i % 3) * 0.5}rem`,
              opacity: 0.12,
              top: `${10 + (i * 11) % 70}%`,
              left: `${5 + (i * 13) % 90}%`,
              animation: `float-slow ${3 + (i % 3)}s ease-in-out infinite`,
              animationDelay: `${i * 0.4}s`,
              userSelect: "none",
              pointerEvents: "none",
              color: ["#a78bfa", "#60a5fa", "#34d399", "#fbbf24", "#f472b6"][i % 5],
            }}
          >
            {sym}
          </div>
        ))}

        {/* Glow */}
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -60%)",
          width: 700, height: 700,
          background: "radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 65%)",
          pointerEvents: "none"
        }} />

        <div className="section-container" style={{ position: "relative" }}>
          {/* Pill label */}
          <div style={{ marginBottom: "1.5rem" }}>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.4)",
              padding: "6px 18px", borderRadius: "9999px",
              fontFamily: "Outfit, sans-serif", fontWeight: 700, fontSize: "0.8rem",
              color: "#a78bfa", letterSpacing: "0.08em", textTransform: "uppercase"
            }}>
              🎉 100% Free — No Sign-Up Required
            </span>
          </div>

          {/* Main heading */}
          <h1
            id="hero-heading"
            style={{
              fontFamily: "Outfit, sans-serif", fontWeight: 900,
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)", lineHeight: 1.1,
              marginBottom: "1.25rem"
            }}
          >
            Make Math{" "}
            <span className="gradient-text">Magical</span>
            {" "}for Kids! 🌟
          </h1>

          <p style={{
            color: "var(--text-secondary)", fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
            lineHeight: 1.7, maxWidth: 580, margin: "0 auto 2.5rem",
            fontWeight: 400
          }}>
            24 free, interactive math games for kids, parents, and educators. From counting to algebra foundations — play, learn, and grow.
          </p>

          {/* CTA buttons */}
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "4rem" }}>
            <Link href="/games" className="btn-primary" style={{ fontSize: "1.05rem", padding: "0.9rem 2rem" }}>
              🎮 Explore All Games
            </Link>
            <Link href="/resources" className="btn-secondary" style={{ fontSize: "1.05rem", padding: "0.9rem 2rem" }}>
              👩‍🏫 For Teachers
            </Link>
          </div>

          {/* Stats Row */}
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "1.5rem" }}>
            {stats.map((s) => (
              <div key={s.label} className="glass-card" style={{
                padding: "1rem 2rem", textAlign: "center",
                minWidth: 120, flex: "1 1 100px", maxWidth: 160
              }}>
                <div style={{ fontSize: "1.6rem", marginBottom: "0.25rem" }}>{s.icon}</div>
                <div style={{ fontFamily: "Outfit, sans-serif", fontWeight: 900, fontSize: "1.8rem", color: "white" }}>
                  {s.value}
                </div>
                <div style={{ color: "var(--text-muted)", fontSize: "0.8rem", fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Featured Games ─── */}
      <section aria-labelledby="featured-heading" style={{ padding: "4rem 1.5rem" }}>
        <div className="section-container">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <h2 id="featured-heading" style={{ fontFamily: "Outfit, sans-serif", fontWeight: 800, fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", marginBottom: "0.5rem" }}>
              ⭐ Featured <span className="gradient-text">Games</span>
            </h2>
            <div className="divider" />
            <p style={{ color: "var(--text-secondary)", marginTop: "1rem", maxWidth: 500, margin: "1rem auto 0" }}>
              Hand-picked fan-favorites that kids keep coming back to
            </p>
          </div>
          <div className="games-grid">
            {featured.map((game) => (
              <GameCard key={game.slug} game={game} />
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link href="/games" className="btn-secondary">View All 24 Games →</Link>
          </div>
        </div>
      </section>

      {/* ─── Grade Levels ─── */}
      <section aria-labelledby="levels-heading" style={{ padding: "4rem 1.5rem", background: "rgba(255,255,255,0.02)" }}>
        <div className="section-container">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <h2 id="levels-heading" style={{ fontFamily: "Outfit, sans-serif", fontWeight: 800, fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", marginBottom: "0.5rem" }}>
              📚 Games by <span className="gradient-text-warm">Grade Level</span>
            </h2>
            <div className="divider" />
            <p style={{ color: "var(--text-secondary)", marginTop: "1rem", maxWidth: 500, margin: "1rem auto 0" }}>
              Age-appropriate challenges designed to meet your child where they are
            </p>
          </div>
          <div className="categories-grid">
            {levelGames.map((level) => (
              <CategoryCard
                key={level.slug}
                href={`/games/${level.slug}`}
                icon={level.icon}
                name={level.name}
                description={level.description}
                gradient={level.gradient}
                count={level.count}
                label={level.subtitle}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Skills / Topics ─── */}
      <section aria-labelledby="skills-heading" style={{ padding: "4rem 1.5rem" }}>
        <div className="section-container">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <h2 id="skills-heading" style={{ fontFamily: "Outfit, sans-serif", fontWeight: 800, fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", marginBottom: "0.5rem" }}>
              🧠 Browse by <span className="gradient-text-cyan">Math Skill</span>
            </h2>
            <div className="divider" />
            <p style={{ color: "var(--text-secondary)", marginTop: "1rem", maxWidth: 500, margin: "1rem auto 0" }}>
              Target the exact skill your child needs to practice right now
            </p>
          </div>
          <div className="categories-grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))" }}>
            {skillGames.map((skill) => (
              <CategoryCard
                key={skill.slug}
                href={`/games/${skill.slug}`}
                icon={skill.icon}
                name={skill.name}
                description={skill.description}
                gradient={skill.gradient}
                count={skill.count}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why Math Games ─── */}
      <section aria-labelledby="why-heading" style={{ padding: "5rem 1.5rem", background: "rgba(255,255,255,0.02)" }}>
        <div className="section-container">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <h2 id="why-heading" style={{ fontFamily: "Outfit, sans-serif", fontWeight: 800, fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", marginBottom: "0.5rem" }}>
              Why Kids <span className="gradient-text">Love</span> Math Games
            </h2>
            <div className="divider" />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem" }}>
            {[
              { icon: "🧠", title: "Brain-Boosting Fun", desc: "Game-based learning improves retention by up to 40% compared to traditional worksheets." },
              { icon: "⚡", title: "Instant Feedback", desc: "Kids learn from mistakes in real-time, building resilience and a growth mindset naturally." },
              { icon: "🏆", title: "Gamified Progress", desc: "Stars, badges, and level-ups keep children motivated and hungry to keep learning." },
              { icon: "📱", title: "Play Anywhere", desc: "Works on tablets, phones, and desktops — no app download or account needed." },
              { icon: "🎯", title: "Curriculum Aligned", desc: "All games align with Common Core math standards for kindergarten through 6th grade." },
              { icon: "🆓", title: "Always Free", desc: "No subscriptions, no credit card required. Period." },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="glass-card" style={{ padding: "1.75rem" }}>
                <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{icon}</div>
                <h3 style={{ fontFamily: "Outfit, sans-serif", fontWeight: 700, fontSize: "1rem", color: "white", marginBottom: "0.5rem" }}>
                  {title}
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Banner ─── */}
      <section aria-labelledby="cta-heading" style={{ padding: "5rem 1.5rem" }}>
        <div className="section-container">
          <div className="glass-card" style={{
            padding: "3.5rem 2rem", textAlign: "center",
            background: "linear-gradient(135deg, rgba(124,58,237,0.2), rgba(6,182,212,0.1))",
            border: "1px solid rgba(124,58,237,0.3)"
          }}>
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🎓</div>
            <h2 id="cta-heading" style={{ fontFamily: "Outfit, sans-serif", fontWeight: 900, fontSize: "clamp(1.8rem, 4vw, 2.8rem)", marginBottom: "0.75rem" }}>
              Ready to Start <span className="gradient-text">Learning?</span>
            </h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: 480, margin: "0 auto 2rem", fontSize: "1rem", lineHeight: 1.7 }}>
              Jump into any game instantly — no account required. Every game is completely free and works on any device.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/games" className="btn-primary">🚀 Start Playing Now</Link>
              <Link href="/resources" className="btn-secondary">📋 Teacher Resources</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
