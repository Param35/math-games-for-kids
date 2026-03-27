import Link from "next/link";

const footerLinks = {
  Games: [
    { href: "/games/level-1", label: "Kindergarten (Level 1)" },
    { href: "/games/level-2", label: "Early Elementary (Level 2)" },
    { href: "/games/level-3", label: "Mid Elementary (Level 3)" },
    { href: "/games/level-4", label: "Upper Elementary (Level 4)" },
    { href: "/games", label: "All Math Games" },
  ],
  Skills: [
    { href: "/games/addition", label: "Addition Games" },
    { href: "/games/subtraction", label: "Subtraction Games" },
    { href: "/games/multiplication", label: "Multiplication Games" },
    { href: "/games/division", label: "Division Games" },
    { href: "/games/fractions", label: "Fraction Games" },
    { href: "/games/geometry", label: "Geometry Games" },
  ],
  Company: [
    { href: "/about", label: "About Us" },
    { href: "/blog", label: "Math Blog" },
    { href: "/resources", label: "For Teachers" },
    { href: "/contact", label: "Contact" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Use" },
  ],
};

export default function Footer() {
  return (
    <footer className="footer" aria-label="Site footer">
      <div className="section-container">
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
              Free, fun, and educational math games for kids aged 4–12. Making math magical, one game at a time.
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
            © {new Date().getFullYear()} MathGames for Kids. All rights reserved. Made with ❤️ for curious children.
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <Link href="/privacy" style={{ color: "var(--text-muted)", fontSize: "0.8rem", textDecoration: "none" }}>Privacy</Link>
            <Link href="/terms" style={{ color: "var(--text-muted)", fontSize: "0.8rem", textDecoration: "none" }}>Terms</Link>
            <Link href="/contact" style={{ color: "var(--text-muted)", fontSize: "0.8rem", textDecoration: "none" }}>Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
