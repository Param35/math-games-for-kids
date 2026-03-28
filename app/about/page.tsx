import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | MathGames for Kids — Our Mission & Story",
  description:
    "Learn about MathGames for Kids — our mission to make free, high-quality math education accessible to every child, regardless of background or circumstance.",
};

const team = [
  { name: "Dr. Sarah Chen", role: "Founder & Math Education Lead", emoji: "👩‍🎓", fact: "Former elementary school teacher with 15 years in the classroom." },
  { name: "Marcus Rivera", role: "Head of Game Design", emoji: "🎮", fact: "Game designer who believes every child deserves to experience the joy of math." },
  { name: "Priya Patel", role: "Curriculum Specialist", emoji: "📚", fact: "K–8 math curriculum designer aligned with Common Core standards." },
  { name: "Tom Okafor", role: "Lead Developer", emoji: "💻", fact: "Parent of two and passionate advocate for accessible education technology." },
];

const values = [
  { icon: "🆓", title: "Free Forever", desc: "Education should have no financial barriers. Every game, every resource — always free." },
  { icon: "🔬", title: "Research-Backed", desc: "Every game is grounded in cognitive science and effective pedagogy, not guesswork." },
  { icon: "🛡️", title: "Child Safe", desc: "No personal data collection. COPPA compliant." },
  { icon: "🌍", title: "Inclusive Design", desc: "Built for all learners — including those with different learning styles and abilities." },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero" aria-labelledby="about-heading">
        <div className="section-container">
          <div style={{ fontSize: "3rem", marginBottom: "0.75rem" }}>🌟</div>
          <h1 id="about-heading" style={{ fontFamily: "Outfit, sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: "0.75rem" }}>
            About <span className="gradient-text">MathGames for Kids</span>
          </h1>
          <div className="divider" />
          <p style={{ color: "var(--text-secondary)", maxWidth: 560, margin: "1.25rem auto 0", fontSize: "1rem", lineHeight: 1.7 }}>
            We're a team of educators, designers, and parents on a mission to make math joyful, accessible, and completely free for every child.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section style={{ padding: "3rem 1.5rem" }} aria-labelledby="mission-heading">
        <div className="section-container">
          <div className="glass-card" style={{ padding: "2.5rem", background: "linear-gradient(135deg, rgba(124,58,237,0.15), rgba(6,182,212,0.08))", border: "1px solid rgba(124,58,237,0.25)", maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🎯</div>
            <h2 id="mission-heading" style={{ fontFamily: "Outfit, sans-serif", fontWeight: 800, fontSize: "1.6rem", marginBottom: "1rem" }}>Our Mission</h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: 1.8 }}>
              We believe that <strong style={{ color: "white" }}>every child deserves to love mathematics.</strong> Not fear it, not dread it — love it. We create beautifully designed, research-backed math games that make learning feel like pure play. No subscriptions. No barriers.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: "3rem 1.5rem", background: "rgba(255,255,255,0.02)" }} aria-labelledby="values-heading">
        <div className="section-container">
          <h2 id="values-heading" style={{ fontFamily: "Outfit, sans-serif", fontWeight: 800, fontSize: "1.8rem", marginBottom: "2rem", textAlign: "center" }}>
            Our <span className="gradient-text-warm">Core Values</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "1.25rem" }}>
            {values.map(({ icon, title, desc }) => (
              <div key={title} className="glass-card" style={{ padding: "1.75rem", textAlign: "center" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>{icon}</div>
                <h3 style={{ fontFamily: "Outfit, sans-serif", fontWeight: 700, fontSize: "1.05rem", marginBottom: "0.5rem" }}>{title}</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: "3rem 1.5rem 5rem" }} aria-labelledby="team-heading">
        <div className="section-container">
          <h2 id="team-heading" style={{ fontFamily: "Outfit, sans-serif", fontWeight: 800, fontSize: "1.8rem", marginBottom: "2rem", textAlign: "center" }}>
            Meet the <span className="gradient-text-cyan">Team</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1.25rem" }}>
            {team.map((member) => (
              <div key={member.name} className="glass-card" style={{ padding: "1.75rem", textAlign: "center" }}>
                <div style={{
                  width: 72, height: 72, borderRadius: "50%",
                  background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(6,182,212,0.2))",
                  border: "2px solid rgba(124,58,237,0.4)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "2.25rem", margin: "0 auto 1rem"
                }}>
                  {member.emoji}
                </div>
                <h3 style={{ fontFamily: "Outfit, sans-serif", fontWeight: 700, fontSize: "1rem", color: "white", marginBottom: "0.2rem" }}>{member.name}</h3>
                <div style={{ color: "var(--accent-purple)", fontSize: "0.8rem", fontWeight: 600, fontFamily: "Outfit", marginBottom: "0.75rem" }}>{member.role}</div>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.82rem", lineHeight: 1.6 }}>{member.fact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
