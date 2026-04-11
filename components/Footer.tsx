import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Games: [
    { href: "/games/level-1", label: "Kindergarten (Level 1)" },
    { href: "/games/level-2", label: "Early Elementary (Level 2)" },
    { href: "/games/level-3", label: "Mid Elementary (Level 3)" },
    { href: "/games/level-4", label: "Upper Elementary (Level 4)" },
    { href: "/games/counting", label: "Counting Games" },
    { href: "/games/addition", label: "Addition Games" },
    { href: "/games/subtraction", label: "Subtraction Games" },
    { href: "/games/multiplication", label: "Multiplication Games" },
    { href: "/games/division", label: "Division Games" },
    { href: "/games/fractions", label: "Fraction Games" },
    { href: "/games/geometry", label: "Geometry Games" },
    { href: "/games/word-problems", label: "Word Problems" },
    { href: "/games", label: "All Math Games" },
  ],
  Learn: [
    { href: "/blog", label: "Math Blog" },
    { href: "/resources", label: "For Teachers & Tutors" },
    { href: "/blog/why-math-games-work", label: "Why Games Work" },
    { href: "/blog/times-tables-guide", label: "Times Tables Guide" },
    { href: "/blog/math-anxiety-kids", label: "Math Anxiety Help" },
    { href: "/blog/fractions-made-easy", label: "Fractions Made Easy" },
  ],
  Company: [
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Use" },
    { href: "/sitemap-page", label: "Sitemap" },
  ],
};

export default function Footer() {
  return (
    <footer className="footer" aria-label="Site footer">
      <div className="section-container">

        {/* ── About the Owner Section ── */}
        <div style={{
          marginBottom: "3.5rem",
          padding: "2.5rem",
          borderRadius: "1.25rem",
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.08)",
          display: "flex",
          gap: "2rem",
          alignItems: "flex-start",
          flexWrap: "wrap",
        }}>
          {/* Photo */}
          <div style={{ flexShrink: 0 }}>
            <div style={{
              width: 100,
              height: 100,
              borderRadius: "50%",
              overflow: "hidden",
              border: "3px solid rgba(124,58,237,0.5)",
              boxShadow: "0 0 24px rgba(124,58,237,0.3)",
            }}>
              <Image
                src="/whitfield-raymond.png"
                alt="Whitfield Glenn Raymond — founder of MathGames for Kids"
                width={100}
                height={100}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
          </div>

          {/* Text */}
          <div style={{ flex: 1, minWidth: 240 }}>
            <div style={{
              display: "inline-block",
              background: "rgba(124,58,237,0.15)",
              border: "1px solid rgba(124,58,237,0.3)",
              borderRadius: "9999px",
              padding: "3px 14px",
              fontSize: "0.72rem",
              fontWeight: 700,
              color: "#a78bfa",
              letterSpacing: "0.07em",
              textTransform: "uppercase",
              marginBottom: "0.6rem",
              fontFamily: "Outfit, sans-serif",
            }}>
              About the Owner
            </div>

            <div style={{
              fontFamily: "Outfit, sans-serif",
              fontWeight: 800,
              fontSize: "1.15rem",
              color: "white",
              marginBottom: "0.2rem",
              letterSpacing: "0.01em",
            }}>
              Whitfield Glenn Raymond
            </div>
            <div style={{ color: "#a78bfa", fontSize: "0.78rem", fontWeight: 600, marginBottom: "0.85rem", fontFamily: "Outfit, sans-serif" }}>
              Founder &amp; Creator — MathGames for Kids
            </div>

            <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.75, marginBottom: "0.75rem", maxWidth: 620 }}>
              I built this website because I have seen too many children sit at a kitchen table with tears rolling down their face over a maths worksheet. That bothered me. I spent years working with kids of all ages — as a tutor, a classroom helper, and a parent — and what I kept noticing was simple: when children are having fun, they learn without even realising it.
            </p>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.75, marginBottom: "0.75rem", maxWidth: 620 }}>
              MathGames for Kids started as a small project I put together on weekends. I wanted a place where a seven-year-old could jump straight into a game — no signup page, no subscription wall, no confusing instructions — and just play and learn at the same time. Every game on this site is built with that one idea in mind.
            </p>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.75, maxWidth: 620 }}>
              This site is for children who need a bit of extra practice, for parents who want to make homework feel less like a punishment, and for tutors and classroom teachers looking for something they can point kids to that actually works. I hope it helps your little ones as much as it has helped the ones in my own life.
            </p>

            {/* Features List */}
            <div style={{ marginTop: "1.25rem", display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
              {[
                "✅ 100% Free to Use",
                "🚫 No Account Needed",
                "📱 Works on Any Device",
                "🏫 Classroom Safe",
                "🎓 Curriculum Aligned",
                "👧 Ages 4 to 12",
              ].map((tag) => (
                <span key={tag} style={{
                  display: "inline-block",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "9999px",
                  padding: "4px 12px",
                  fontSize: "0.75rem",
                  color: "var(--text-secondary)",
                  fontFamily: "Outfit, sans-serif",
                  fontWeight: 600,
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Main Link Grid ── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2.5rem", marginBottom: "3rem" }}>
          {/* Brand */}
          <div>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none", marginBottom: "1rem" }}>
              <div style={{ width: 36, height: 36, borderRadius: "10px", background: "linear-gradient(135deg,#7c3aed,#4f46e5)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem" }}>
                🧮
              </div>
              <span style={{ fontFamily: "Outfit, sans-serif", fontWeight: 800, color: "white", fontSize: "1rem" }}>
                Math<span style={{ background: "linear-gradient(135deg,#a78bfa,#60a5fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Games</span>
              </span>
            </Link>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.7, maxWidth: 220 }}>
              Free and educational math games for children, educators, and parents. Designed to make practice more engaging and approachable.
            </p>
            <div style={{ display: "flex", gap: "0.5rem", marginTop: "1rem" }}>
              {["📧", "🐦", "📘"].map((icon, i) => (
                <div key={i} style={{
                  width: 36, height: 36, borderRadius: "10px",
                  background: "rgba(255,255,255,0.07)", border: "1px solid var(--border-glass)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  cursor: "pointer", transition: "all 0.2s"
                }}>
                  {icon}
                </div>
              ))}
            </div>
          </div>

          {/* Link Groups */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 style={{ fontFamily: "Outfit, sans-serif", fontWeight: 700, color: "white", fontSize: "0.9rem", marginBottom: "1rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                {group}
              </h3>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} style={{
                      color: "var(--text-secondary)", textDecoration: "none",
                      fontSize: "0.875rem", transition: "color 0.2s"
                    }}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: "1px solid var(--border-glass)",
          paddingTop: "1.5rem",
          display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "1rem"
        }}>
          <p style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>
            © {new Date().getFullYear()} MathGames for Kids. Built by Whitfield Glenn Raymond with ❤️ for curious children everywhere.
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <Link href="/privacy" style={{ color: "var(--text-muted)", fontSize: "0.8rem", textDecoration: "none" }}>Privacy</Link>
            <Link href="/terms" style={{ color: "var(--text-muted)", fontSize: "0.8rem", textDecoration: "none" }}>Terms</Link>
            <Link href="/contact" style={{ color: "var(--text-muted)", fontSize: "0.8rem", textDecoration: "none" }}>Contact</Link>
            <Link href="/sitemap-page" style={{ color: "var(--text-muted)", fontSize: "0.8rem", textDecoration: "none" }}>Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
