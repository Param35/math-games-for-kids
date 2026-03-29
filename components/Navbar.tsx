"use client";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/games", label: "Games" },
  { href: "/resources", label: "Resources" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="section-container">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "72px" }}>
          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.6rem", textDecoration: "none" }}>
            <div style={{
              width: 40, height: 40, borderRadius: "12px",
              background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "1.4rem", boxShadow: "0 0 20px rgba(124,58,237,0.5)"
            }}>
              🧮
            </div>
            <div>
              <div style={{ fontFamily: "Outfit, sans-serif", fontWeight: 800, fontSize: "1.1rem", color: "white", lineHeight: 1.1 }}>
                Math<span style={{ background: "linear-gradient(135deg,#a78bfa,#60a5fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Games
                </span>
              </div>
              <div style={{ fontSize: "0.65rem", color: "var(--text-muted)", lineHeight: 1, fontFamily: "Inter, sans-serif" }}>
                Free for Kids
              </div>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div style={{ gap: "0.25rem", alignItems: "center" }} className="hidden md:flex">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} style={{
                padding: "0.5rem 1rem", borderRadius: "9999px",
                fontFamily: "Outfit, sans-serif", fontWeight: 600, fontSize: "0.875rem",
                color: "var(--text-secondary)", textDecoration: "none",
                transition: "all 0.2s ease"
              }}
                onMouseEnter={(e) => {
                  (e.target as HTMLAnchorElement).style.color = "white";
                  (e.target as HTMLAnchorElement).style.background = "rgba(255,255,255,0.07)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLAnchorElement).style.color = "var(--text-secondary)";
                  (e.target as HTMLAnchorElement).style.background = "transparent";
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/games" className="btn-primary" style={{ padding: "0.5rem 1.25rem", fontSize: "0.875rem", marginLeft: "0.5rem" }}>
              Play Now 🎮
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden"
            style={{ background: "none", border: "1px solid var(--border-glass)", borderRadius: "10px", padding: "0.5rem", cursor: "pointer", color: "white" }}
            aria-label="Toggle mobile menu"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              {mobileOpen ? (
                <>
                  <line x1="4" y1="4" x2="18" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="18" y1="4" x2="4" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="19" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="3" y1="16" x2="19" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div style={{
            borderTop: "1px solid var(--border-glass)",
            paddingBottom: "1rem",
            display: "flex", flexDirection: "column", gap: "0.25rem"
          }}>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  padding: "0.75rem 1rem", borderRadius: "10px",
                  fontFamily: "Outfit, sans-serif", fontWeight: 600,
                  color: "var(--text-secondary)", textDecoration: "none"
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/games" className="btn-primary" onClick={() => setMobileOpen(false)} style={{ margin: "0.5rem 0", textAlign: "center", justifyContent: "center" }}>
              Play Now 🎮
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
