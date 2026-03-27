import type { Metadata } from "next";
import { getGamesBySkill, getSkillInfo } from "@/lib/games-data";
import GameCard from "@/components/GameCard";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Subtraction Games for Kids | Fun Math Practice Online",
  description: "Play free subtraction games for kids! Practice differences, borrowing, and number lines with exciting online math games.",
};

export default function SubtractionPage() {
  const skill = getSkillInfo("subtraction")!;
  const games = getGamesBySkill("subtraction");
  return (
    <>
      <section className="page-hero" aria-labelledby="subtraction-heading">
        <div className="section-container">
          <div style={{ fontSize: "3rem", marginBottom: "0.75rem" }}>{skill.icon}</div>
          <h1 id="subtraction-heading" style={{ fontFamily: "Outfit, sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: "0.75rem" }}>
            {skill.name} <span className="gradient-text">Games</span>
          </h1>
          <div className="divider" />
          <p style={{ color: "var(--text-secondary)", maxWidth: 500, margin: "1rem auto 0", fontSize: "1rem", lineHeight: 1.7 }}>
            {skill.description} — practice with {games.length} free interactive games!
          </p>
        </div>
      </section>
      <section style={{ padding: "3rem 1.5rem 6rem" }}>
        <div className="section-container">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem", flexWrap: "wrap", gap: "1rem" }}>
            <h2 style={{ fontFamily: "Outfit, sans-serif", fontWeight: 800, fontSize: "1.4rem" }}>{games.length} Subtraction Games</h2>
            <Link href="/games" className="btn-secondary" style={{ padding: "0.5rem 1.25rem", fontSize: "0.875rem" }}>← All Games</Link>
          </div>
          <div className="games-grid">
            {games.map((game) => <GameCard key={game.slug} game={game} />)}
          </div>
        </div>
      </section>
    </>
  );
}
