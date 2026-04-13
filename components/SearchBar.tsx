"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { GAMES, SKILLS, LEVELS } from "@/lib/games-data";
import { BLOG_ARTICLES } from "@/lib/blog-data";

// ── Search index built once at module level ──────────────────────────────────
type SearchResult = {
  type: "game" | "blog" | "skill" | "level" | "page";
  title: string;
  subtitle: string;
  href: string;
  icon: string;
  color: string;
};

const STATIC_PAGES: SearchResult[] = [
  { type: "page", title: "All Math Games", subtitle: "Browse all 50 free games", href: "/games", icon: "🎮", color: "#7c3aed" },
  { type: "page", title: "Math Blog", subtitle: "Tips, guides & strategies", href: "/blog", icon: "📝", color: "#06b6d4" },
  { type: "page", title: "Teacher Resources", subtitle: "Printable worksheets & tools", href: "/resources", icon: "📋", color: "#10b981" },
  { type: "page", title: "About Us", subtitle: "Our story and mission", href: "/about", icon: "🌟", color: "#f59e0b" },
  { type: "page", title: "Contact", subtitle: "Get in touch", href: "/contact", icon: "✉️", color: "#ec4899" },
];

const ALL_RESULTS: SearchResult[] = [
  ...GAMES.map((g) => ({
    type: "game" as const,
    title: g.title,
    subtitle: g.description,
    href: `/games/${g.slug}`,
    icon: g.icon,
    color: g.color,
  })),
  ...BLOG_ARTICLES.map((a) => ({
    type: "blog" as const,
    title: a.title,
    subtitle: a.excerpt,
    href: `/blog/${a.slug}`,
    icon: a.icon,
    color: a.color,
  })),
  ...SKILLS.map((s) => ({
    type: "skill" as const,
    title: `${s.name} Games`,
    subtitle: s.description,
    href: `/games/${s.slug}`,
    icon: s.icon,
    color: s.color,
  })),
  ...LEVELS.map((l) => ({
    type: "level" as const,
    title: l.name,
    subtitle: `${l.ageRange} — ${l.description}`,
    href: `/games/${l.slug}`,
    icon: l.icon,
    color: l.color,
  })),
  ...STATIC_PAGES,
];

function search(query: string): SearchResult[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase().trim();
  const scored = ALL_RESULTS.map((r) => {
    const titleMatch = r.title.toLowerCase().includes(q);
    const subtitleMatch = r.subtitle.toLowerCase().includes(q);
    const exactTitle = r.title.toLowerCase() === q;
    const score = exactTitle ? 100 : titleMatch ? 10 : subtitleMatch ? 3 : 0;
    return { result: r, score };
  })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((x) => x.result);
  return scored.slice(0, 8);
}

const TYPE_LABELS: Record<SearchResult["type"], string> = {
  game: "Game",
  blog: "Article",
  skill: "Category",
  level: "Level",
  page: "Page",
};

// ── Component ────────────────────────────────────────────────────────────────
export default function SearchBar({ onClose }: { onClose?: () => void }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    setResults(search(val));
    setActiveIndex(-1);
    setIsOpen(true);
  }, []);

  const handleSelect = useCallback(
    (href: string) => {
      router.push(href);
      setQuery("");
      setResults([]);
      setIsOpen(false);
      setActiveIndex(-1);
      onClose?.();
    },
    [router, onClose]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (!results.length) return;
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((i) => (i < results.length - 1 ? i + 1 : 0));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((i) => (i > 0 ? i - 1 : results.length - 1));
      } else if (e.key === "Enter") {
        e.preventDefault();
        const target = activeIndex >= 0 ? results[activeIndex] : results[0];
        if (target) handleSelect(target.href);
      } else if (e.key === "Escape") {
        setIsOpen(false);
        setActiveIndex(-1);
      }
    },
    [results, activeIndex, handleSelect]
  );

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Auto-focus when mounted
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const showDropdown = isOpen && query.trim().length > 0;

  return (
    <div
      ref={containerRef}
      style={{ position: "relative", width: "100%", maxWidth: 480 }}
      role="search"
      aria-label="Search games and articles"
    >
      {/* Input */}
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        background: "rgba(255,255,255,0.07)",
        border: "1px solid rgba(255,255,255,0.15)",
        borderRadius: "9999px",
        padding: "0.45rem 1rem",
        transition: "border-color 0.2s, box-shadow 0.2s",
        boxShadow: isOpen && query ? "0 0 0 2px rgba(124,58,237,0.4)" : "none",
        borderColor: isOpen && query ? "rgba(124,58,237,0.6)" : "rgba(255,255,255,0.15)",
      }}>
        {/* Search Icon */}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(168,143,200,0.8)" strokeWidth="2.5" strokeLinecap="round" style={{ flexShrink: 0 }}>
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>

        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onFocus={() => query && setIsOpen(true)}
          placeholder="Search games, topics, articles…"
          aria-label="Search"
          aria-autocomplete="list"
          aria-expanded={showDropdown}
          autoComplete="off"
          style={{
            flex: 1,
            background: "none",
            border: "none",
            outline: "none",
            color: "white",
            fontFamily: "Outfit, sans-serif",
            fontSize: "0.875rem",
            fontWeight: 500,
            width: "100%",
            minWidth: 0,
          }}
        />

        {/* Clear button */}
        {query && (
          <button
            onClick={() => { setQuery(""); setResults([]); setIsOpen(false); inputRef.current?.focus(); }}
            style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(168,143,200,0.7)", display: "flex", alignItems: "center", flexShrink: 0, padding: 0 }}
            aria-label="Clear search"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        )}
      </div>

      {/* Dropdown Results */}
      {showDropdown && (
        <div
          role="listbox"
          style={{
            position: "absolute",
            top: "calc(100% + 8px)",
            left: 0,
            right: 0,
            background: "rgba(15,10,30,0.97)",
            border: "1px solid rgba(124,58,237,0.35)",
            borderRadius: "1rem",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            boxShadow: "0 16px 48px rgba(0,0,0,0.5), 0 0 0 1px rgba(124,58,237,0.15)",
            zIndex: 9999,
            overflow: "hidden",
            maxHeight: "70vh",
            overflowY: "auto",
          }}
        >
          {results.length === 0 ? (
            <div style={{ padding: "1.25rem 1rem", textAlign: "center", color: "var(--text-muted)", fontSize: "0.875rem", fontFamily: "Outfit, sans-serif" }}>
              No results for &quot;{query}&quot; — try &quot;addition&quot; or &quot;fractions&quot;
            </div>
          ) : (
            <>
              <div style={{ padding: "0.5rem 1rem", fontSize: "0.7rem", fontFamily: "Outfit, sans-serif", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.1em", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                {results.length} result{results.length !== 1 ? "s" : ""} for &quot;{query}&quot;
              </div>
              <ul style={{ listStyle: "none", padding: "0.4rem 0" }}>
                {results.map((result, i) => (
                  <li key={result.href} role="option" aria-selected={i === activeIndex}>
                    <button
                      onMouseDown={(e) => { e.preventDefault(); handleSelect(result.href); }}
                      onMouseEnter={() => setActiveIndex(i)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        width: "100%",
                        padding: "0.65rem 1rem",
                        background: i === activeIndex ? "rgba(124,58,237,0.15)" : "transparent",
                        border: "none",
                        cursor: "pointer",
                        textAlign: "left",
                        transition: "background 0.15s",
                        borderLeft: i === activeIndex ? "2px solid rgba(124,58,237,0.7)" : "2px solid transparent",
                      }}
                    >
                      {/* Icon */}
                      <span style={{
                        width: 36, height: 36, borderRadius: "10px",
                        background: `${result.color}20`,
                        border: `1px solid ${result.color}40`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: "1.1rem", flexShrink: 0,
                      }}>
                        {result.icon}
                      </span>

                      {/* Text */}
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{
                          fontFamily: "Outfit, sans-serif", fontWeight: 700, fontSize: "0.875rem",
                          color: "white", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
                        }}>
                          {result.title}
                        </div>
                        <div style={{
                          fontSize: "0.75rem", color: "var(--text-muted)",
                          whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginTop: "1px",
                        }}>
                          {result.subtitle}
                        </div>
                      </div>

                      {/* Type badge */}
                      <span style={{
                        flexShrink: 0, fontSize: "0.65rem", fontFamily: "Outfit, sans-serif",
                        fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em",
                        padding: "2px 8px", borderRadius: "9999px",
                        background: `${result.color}18`, color: result.color,
                        border: `1px solid ${result.color}35`,
                      }}>
                        {TYPE_LABELS[result.type]}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>

              {/* Footer hint */}
              <div style={{
                padding: "0.5rem 1rem", borderTop: "1px solid rgba(255,255,255,0.06)",
                display: "flex", gap: "1rem", color: "var(--text-muted)", fontSize: "0.68rem", fontFamily: "Outfit, sans-serif",
              }}>
                <span>↑↓ navigate</span>
                <span>↵ select</span>
                <span>esc close</span>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
