import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | MathGames for Kids — Our Mission & Story",
  description:
    "MathGames for Kids was built by Whitfield Glenn Raymond — a tutor and parent who believes every child deserves to feel good at maths. Free games for kids, parents, and tutors.",
};

const values = [
  { icon: "🆓", title: "Free Forever", desc: "Education shouldn't carry a price tag. Every game, every resource, every blog post on this site is completely free — no trial periods, no credit card, no fine print." },
  { icon: "🔬", title: "Built on Real Teaching", desc: "Every game on this site comes from real observations in real classrooms and real kitchen tables. What you see here actually works in practice — not just on paper." },
  { icon: "🛡️", title: "Safe for Children", desc: "No child accounts. No data collection on kids. No ads targeting children. We designed this site from the ground up so parents can hand a tablet to a six-year-old and not worry for a second." },
  { icon: "🌍", title: "Built for Everyone", desc: "Children learn differently. Some need to see it, some need to hear it, some need to do it. We have built games that cater to visual learners, hands-on learners, and everyone in between." },
  { icon: "📱", title: "Works on Any Device", desc: "Whether it is an old laptop at school, a phone on the bus, or a tablet at home — every game runs smoothly. No app download. No setup at all." },
  { icon: "🎓", title: "Curriculum Aligned", desc: "All games map to what children are actually learning in school — from kindergarten counting through to upper elementary fractions and geometry — so practice time connects directly to classroom work." },
];

const features = [
  {
    icon: "🎮",
    title: "30+ Interactive Games",
    desc: "Games across all core math topics — counting, addition, subtraction, multiplication, division, fractions, geometry and word problems. New games are added regularly.",
  },
  {
    icon: "📚",
    title: "4 Grade Levels",
    desc: "Every game is tagged to the right age group — from kindergarten (ages 4–6) right through to upper elementary (ages 10–12). No child is thrown into something too hard too soon.",
  },
  {
    icon: "⚡",
    title: "Instant Play, No Signup",
    desc: "There is no registration form. No email address required. You arrive, you click a game, and you play. That is it. Children do not have time for friction.",
  },
  {
    icon: "🧠",
    title: "Real Learning, Not Drilling",
    desc: "These are not just quiz apps with a coat of paint. The games are designed to build genuine understanding — place value, number sense, spatial reasoning — not just correct answers.",
  },
  {
    icon: "🏆",
    title: "Rewards That Motivate",
    desc: "Stars, level-up moments, celebration animations. When a child masters something hard, they feel it. That feeling is what keeps them coming back and pushing further.",
  },
  {
    icon: "👩‍🏫",
    title: "Resources for Teachers & Tutors",
    desc: "Printable worksheets, lesson ideas, and classroom-ready activities. We know teachers are busy — so every resource is ready to pick up and use without preparation.",
  },
  {
    icon: "📖",
    title: "A Practical Math Blog",
    desc: "Honest, readable articles about teaching maths at home. Real strategies for real families — not academic jargon that nobody actually uses at a kitchen table.",
  },
  {
    icon: "🌱",
    title: "Starts Where Your Child Is",
    desc: "A child who is behind does not need harder content — they need to find their feet first. Our level system means every child can start somewhere they feel capable and grow from there.",
  },
];

const howItHelps = [
  {
    group: "For Children",
    color: "#7c3aed",
    points: [
      "Maths stops feeling like a chore and starts feeling like a game",
      "They make mistakes in a safe place and learn from them instantly",
      "They build real confidence — not just test-passing confidence",
      "They can play at their own pace, without pressure from anyone else",
      "They ask for more screen time that is actually productive",
    ],
  },
  {
    group: "For Parents",
    color: "#06b6d4",
    points: [
      "No more arguments about homework — the game motivates them for you",
      "You can see exactly where they are and what they need next",
      "Works as a reward that is also educational — guilt-free screen time",
      "Safe to leave them playing without supervision or monitoring",
      "Free to use — no subscription to forget to cancel",
    ],
  },
  {
    group: "For Tutors & Teachers",
    color: "#10b981",
    points: [
      "Recommend specific games that target exactly the skill a student is missing",
      "Use the printable resources as homework or warm-up activities",
      "Share with parents as a home practice tool that actually gets used",
      "Correlates directly to what you are teaching in the curriculum",
      "Read the blog for fresh ideas on explaining tricky topics",
    ],
  },
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
            Built by a tutor who got tired of watching kids cry over worksheets — and decided to do something about it.
          </p>
        </div>
      </section>

      {/* ── About the Owner ── */}
      <section style={{ padding: "3rem 1.5rem" }} aria-labelledby="owner-heading">
        <div className="section-container">
          <div className="glass-card" style={{
            padding: "2.5rem",
            maxWidth: 820,
            margin: "0 auto",
            background: "linear-gradient(135deg, rgba(124,58,237,0.1), rgba(6,182,212,0.05))",
            border: "1px solid rgba(124,58,237,0.2)",
          }}>
            <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start", flexWrap: "wrap" }}>
              {/* Photo */}
              <div style={{ flexShrink: 0 }}>
                <div style={{
                  width: 120,
                  height: 120,
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "3px solid rgba(124,58,237,0.5)",
                  boxShadow: "0 0 32px rgba(124,58,237,0.35)",
                }}>
                  <Image
                    src="/whitfield-raymond.png"
                    alt="Whitfield Glenn Raymond — founder of MathGames for Kids"
                    width={120}
                    height={120}
                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                  />
                </div>
              </div>

              {/* Content */}
              <div style={{ flex: 1, minWidth: 240 }}>
                <h2 id="owner-heading" style={{ fontFamily: "Outfit, sans-serif", fontWeight: 800, fontSize: "1.5rem", color: "white", marginBottom: "0.2rem" }}>
                  Whitfield Glenn Raymond
                </h2>
                <div style={{ color: "#a78bfa", fontSize: "0.85rem", fontWeight: 600, fontFamily: "Outfit, sans-serif", marginBottom: "1.25rem" }}>
                  Founder &amp; Creator — MathGames for Kids
                </div>

                <p style={{ color: "var(--text-secondary)", fontSize: "0.925rem", lineHeight: 1.8, marginBottom: "1rem" }}>
                  I have spent a long time around children who struggle with maths. As a private tutor working with kids from age six through to their early teens, I sat at enough kitchen tables to know that the problem is rarely the child. More often than not, the maths itself just hasn&apos;t clicked yet — and the way it has been presented hasn&apos;t helped.
                </p>

                <p style={{ color: "var(--text-secondary)", fontSize: "0.925rem", lineHeight: 1.8, marginBottom: "1rem" }}>
                  I built this site on weekends and evenings because I was always wishing something like it existed. I wanted somewhere to send a kid after a session — somewhere they could keep practising in a way that felt good, not painful. No paywalls. No accounts. Just games that teach.
                </p>

                <p style={{ color: "var(--text-secondary)", fontSize: "0.925rem", lineHeight: 1.8 }}>
                  If your child has ever said &quot;I hate maths&quot; — this place is for them. I genuinely believe that most kids who think they are bad at maths just haven&apos;t found the right way in yet. I hope this is it for yours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission ── */}
      <section style={{ padding: "2rem 1.5rem" }} aria-labelledby="mission-heading">
        <div className="section-container">
          <div className="glass-card" style={{ padding: "2.5rem", background: "linear-gradient(135deg, rgba(124,58,237,0.15), rgba(6,182,212,0.08))", border: "1px solid rgba(124,58,237,0.25)", maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🎯</div>
            <h2 id="mission-heading" style={{ fontFamily: "Outfit, sans-serif", fontWeight: 800, fontSize: "1.6rem", marginBottom: "1rem" }}>Our Mission</h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: 1.8 }}>
              We believe <strong style={{ color: "white" }}>every child deserves to feel confident with maths.</strong> Not just good enough to pass a test, but genuinely comfortable — the kind of comfortable where numbers feel like tools rather than obstacles. We create games that build that confidence, one small win at a time.
            </p>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section style={{ padding: "4rem 1.5rem", background: "rgba(255,255,255,0.02)" }} aria-labelledby="features-heading">
        <div className="section-container">
          <h2 id="features-heading" style={{ fontFamily: "Outfit, sans-serif", fontWeight: 800, fontSize: "1.8rem", marginBottom: "0.5rem", textAlign: "center" }}>
            What You&apos;ll Find <span className="gradient-text">Here</span>
          </h2>
          <div className="divider" style={{ margin: "0.75rem auto 2.5rem" }} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1.25rem" }}>
            {features.map(({ icon, title, desc }) => (
              <div key={title} className="glass-card" style={{ padding: "1.75rem" }}>
                <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{icon}</div>
                <h3 style={{ fontFamily: "Outfit, sans-serif", fontWeight: 700, fontSize: "1rem", color: "white", marginBottom: "0.5rem" }}>{title}</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Helps ── */}
      <section style={{ padding: "4rem 1.5rem" }} aria-labelledby="helps-heading">
        <div className="section-container">
          <h2 id="helps-heading" style={{ fontFamily: "Outfit, sans-serif", fontWeight: 800, fontSize: "1.8rem", marginBottom: "0.5rem", textAlign: "center" }}>
            How It <span className="gradient-text-warm">Actually Helps</span>
          </h2>
          <div className="divider" style={{ margin: "0.75rem auto 2.5rem" }} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
            {howItHelps.map(({ group, color, points }) => (
              <div key={group} className="glass-card" style={{ padding: "2rem" }}>
                <h3 style={{
                  fontFamily: "Outfit, sans-serif",
                  fontWeight: 800,
                  fontSize: "1.1rem",
                  color: color,
                  marginBottom: "1.25rem",
                  paddingBottom: "0.75rem",
                  borderBottom: `1px solid ${color}30`,
                }}>
                  {group}
                </h3>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {points.map((point, i) => (
                    <li key={i} style={{ display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
                      <span style={{ color: color, marginTop: "2px", flexShrink: 0 }}>✓</span>
                      <span style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.6 }}>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section style={{ padding: "4rem 1.5rem 5rem", background: "rgba(255,255,255,0.02)" }} aria-labelledby="values-heading">
        <div className="section-container">
          <h2 id="values-heading" style={{ fontFamily: "Outfit, sans-serif", fontWeight: 800, fontSize: "1.8rem", marginBottom: "0.5rem", textAlign: "center" }}>
            Our <span className="gradient-text-cyan">Core Values</span>
          </h2>
          <div className="divider" style={{ margin: "0.75rem auto 2.5rem" }} />
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

      {/* ── CTA ── */}
      <section style={{ padding: "4rem 1.5rem 5rem" }}>
        <div className="section-container">
          <div className="glass-card" style={{
            padding: "3rem 2rem", textAlign: "center",
            background: "linear-gradient(135deg, rgba(124,58,237,0.2), rgba(6,182,212,0.1))",
            border: "1px solid rgba(124,58,237,0.3)", maxWidth: 680, margin: "0 auto"
          }}>
            <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>🚀</div>
            <h2 style={{ fontFamily: "Outfit, sans-serif", fontWeight: 900, fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)", marginBottom: "0.75rem" }}>
              Ready to <span className="gradient-text">Start Playing?</span>
            </h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: 460, margin: "0 auto 2rem", fontSize: "0.95rem", lineHeight: 1.7 }}>
              Jump straight into any game — no account, no download, nothing to set up. Just pick a game and go.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/games" className="btn-primary">🎮 Browse All Games</Link>
              <Link href="/resources" className="btn-secondary">📋 Teacher Resources</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
