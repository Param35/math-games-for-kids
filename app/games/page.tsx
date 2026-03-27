import type { Metadata } from "next";
import GameCard from "@/components/GameCard";
import CategoryCard from "@/components/CategoryCard";
import { GAMES, LEVELS, SKILLS } from "@/lib/games-data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "All Free Math Games for Kids | Browse 24 Games",
  description:
    "Browse all 24 free online math games for kids! Filter by grade level (K-6) or math skill. Addition, subtraction, multiplication, fractions, geometry and more.",
};

export default function GamesPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero" aria-labelledby="games-heading">
        <div className="section-container">
          <h1 id="games-heading" style={{ fontFamily: "Outfit, sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: "0.75rem" }}>
            All <span className="gradient-text">Math Games</span>
          </h1>
          <div className="divider" />
          <p style={{ color: "var(--text-secondary)", maxWidth: 500, margin: "1.25rem auto 0", fontSize: "1.05rem", lineHeight: 1.7 }}>
            24 free online math games for kids — from kindergarten counting to upper-elementary word problems.
          </p>
        </div>
      </section>

      {/* Grade Levels Quick Links */}
      <section style={{ padding: "1.5rem 1.5rem 3rem" }} aria-labelledby="levels-filter-heading">
        <div className="section-container">
          <h2 id="levels-filter-heading" style={{ fontFamily: "Outfit, sans-serif", fontWeight: 700, fontSize: "1.1rem", marginBottom: "1rem", color: "var(--text-secondary)" }}>
            🎓 Filter by Grade Level
          </h2>
          <div className="categories-grid">
            {LEVELS.map((level) => {
              const count = GAMES.filter((g) => g.levels.includes(level.slug)).length;
              return (
                <CategoryCard
                  key={level.slug}
                  href={`/games/${level.slug}`}
                  icon={level.icon}
                  name={level.name}
                  description={level.ageRange}
                  gradient={level.gradient}
                  count={count}
                  label={level.subtitle}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills Quick Links */}
      <section style={{ padding: "0 1.5rem 3rem" }} aria-labelledby="skills-filter-heading">
        <div className="section-container">
          <h2 id="skills-filter-heading" style={{ fontFamily: "Outfit, sans-serif", fontWeight: 700, fontSize: "1.1rem", marginBottom: "1rem", color: "var(--text-secondary)" }}>
            🧠 Filter by Math Skill
          </h2>
          <div className="categories-grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))" }}>
            {SKILLS.map((skill) => {
              const count = GAMES.filter((g) => g.skills.includes(skill.slug)).length;
              return (
                <CategoryCard
                  key={skill.slug}
                  href={`/games/${skill.slug}`}
                  icon={skill.icon}
                  name={skill.name}
                  description={skill.description}
                  gradient={skill.gradient}
                  count={count}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* All Games */}
      <section style={{ padding: "0 1.5rem 6rem" }} aria-labelledby="all-games-heading">
        <div className="section-container">
          <h2 id="all-games-heading" style={{ fontFamily: "Outfit, sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2rem)", marginBottom: "1.5rem" }}>
            All 24 Games
          </h2>
          <div className="games-grid">
            {GAMES.map((game) => (
              <GameCard key={game.slug} game={game} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
