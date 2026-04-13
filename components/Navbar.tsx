"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";

// Lazy-load search to avoid hydration issues
const SearchBar = dynamic(() => import("./SearchBar"), { ssr: false });

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
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Close search on outside click
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
      }
    }
    if (searchOpen) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [searchOpen]);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 768) setMobileOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="section-container">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "72px", gap: "1rem" }}>

          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.6rem", textDecoration: "none", flexShrink: 0 }}>
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
          <div style={{ gap: "0.25rem", alignItems: "center", flex: 1, justifyContent: "center" }} className="hidden md:flex">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} style={{
                padding: "0.5rem 0.9rem", borderRadius: "9999px",
                fontFamily: "Outfit, sans-serif", fontWeight: 600, fontSize: "0.875rem",
                color: "var(--text-secondary)", textDecoration: "none",
                transition: "all 0.2s ease", whiteSpace: "nowrap",
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
          </div>

          {/* Desktop Right — Search + Play Now */}
          <div className="hidden md:flex" style={{ alignItems: "center", gap: "0.75rem", flexShrink: 0 }}>
            {/* Search Toggle */}
            <div ref={searchRef} style={{ position: "relative" }}>
              {searchOpen ? (
                <div style={{ width: 280 }}>
                  <SearchBar onClose={() => setSearchOpen(false)} />
                </div>
              ) : (
                <button
                  onClick={() => setSearchOpen(true)}
                  aria-label="Open search"
                  style={{
                    display: "flex", alignItems: "center", gap: "0.5rem",
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: "9999px",
                    padding: "0.45rem 0.9rem",
                    cursor: "pointer", color: "var(--text-secondary)",
                    fontFamily: "Outfit, sans-serif", fontSize: "0.8rem", fontWeight: 500,
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    const b = e.currentTarget;
                    b.style.borderColor = "rgba(124,58,237,0.5)";
                    b.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    const b = e.currentTarget;
                    b.style.borderColor = "rgba(255,255,255,0.15)";
                    b.style.color = "var(--text-secondary)";
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                  Search
                </button>
              )}
            </div>

            <Link href="/games" className="btn-primary" style={{ padding: "0.5rem 1.25rem", fontSize: "0.875rem", whiteSpace: "nowrap" }}>
              Play Now 🎮
            </Link>
          </div>

          {/* Mobile Right — Search icon + Hamburger */}
          <div className="md:hidden" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <button
              onClick={() => { setSearchOpen(!searchOpen); setMobileOpen(false); }}
              aria-label={searchOpen ? "Close search" : "Open search"}
              style={{
                background: searchOpen ? "rgba(124,58,237,0.2)" : "none",
                border: "1px solid var(--border-glass)",
                borderColor: searchOpen ? "rgba(124,58,237,0.5)" : "var(--border-glass)",
                borderRadius: "10px", padding: "0.5rem",
                cursor: "pointer", color: "white",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}
            >
              {searchOpen ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              )}
            </button>

            <button
              onClick={() => { setMobileOpen(!mobileOpen); setSearchOpen(false); }}
              aria-label="Toggle mobile menu"
              style={{ background: "none", border: "1px solid var(--border-glass)", borderRadius: "10px", padding: "0.5rem", cursor: "pointer", color: "white" }}
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
        </div>

        {/* Mobile Search Bar (expands below navbar row) */}
        {searchOpen && (
          <div
            className="md:hidden"
            style={{ padding: "0.75rem 0 0.5rem", borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
            <SearchBar onClose={() => setSearchOpen(false)} />
          </div>
        )}

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
