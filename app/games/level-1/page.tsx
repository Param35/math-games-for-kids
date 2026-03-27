import type { Metadata } from "next";
import { getGamesByLevel, getLevelInfo, LEVELS } from "@/lib/games-data";
import GameCard from "@/components/GameCard";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kindergarten Math Games | Level 1 Free Games for Ages 4-6",
  description:
    "Free Kindergarten math games for ages 4–6. Fun counting, shape, and basic number games to spark early math curiosity. No download needed!",
};

export default function Level1Page() {
  const level = getLevelInfo("level-1")!;
  const games = getGamesByLevel("level-1");

  return (
    <>
      <section className="page-hero" aria-labelledby="level1-heading">
        <div className="section-container">
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: `${level.color}22`, border: `1px solid ${level.color}55`, padding: "6px 18px", borderRadius: "9999px", marginBottom: "1.25rem" }}>
            <span style={{ fontSize: "1.2rem" }}>{level.icon}</span>
            <span style={{ fontFamily: "Outfit, sans-serif", fontWeight: 700, fontSize: "0.8rem", color: level.color, textTransform: "uppercase", letterSpacing: "0.08em" }}>{level.subtitle}</span>
          </div>
          <h1 id="level1-heading" style={{ fontFamily: "Outfit, sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: "0.75rem" }}>
            {level.name} <span className="gradient-text">Games</span>
          </h1>
          <div className="divider" />
          <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap", marginTop: "1.25rem" }}>
            <span style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>👶 {level.ageRange}</span>
            <span style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>🎮 {games.length} Games</span>
          </div>
          <p style={{ color: "var(--text-secondary)", maxWidth: 520, margin: "1rem auto 0", fontSize: "1rem", lineHeight: 1.7 }}>
            {level.description}
          </p>
        </div>
      </section>

      <section style={{ padding: "3rem 1.5rem 6rem" }} aria-labelledby="level1-games-heading">
        <div className="section-container">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem", flexWrap: "wrap", gap: "1rem" }}>
            <h2 id="level1-games-heading" style={{ fontFamily: "Outfit, sans-serif", fontWeight: 800, fontSize: "1.4rem" }}>
              {games.length} Games • {level.ageRange}
            </h2>
            <Link href="/games" className="btn-secondary" style={{ padding: "0.5rem 1.25rem", fontSize: "0.875rem" }}>
              ← All Games
            </Link>
          </div>
          <div className="games-grid">
            {games.map((game) => <GameCard key={game.slug} game={game} />)}
          </div>
        </div>
      </section>
    </>
  );
}
