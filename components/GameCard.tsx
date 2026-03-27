import Link from "next/link";
import { Game, SKILLS } from "@/lib/games-data";

interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  const skillLabels = game.skills.map(
    (s) => SKILLS.find((sk) => sk.slug === s)?.name ?? s
  );

  return (
    <Link href={`/games/${game.slug}`} style={{ textDecoration: "none" }}>
      <article
        className="glass-card"
        style={{ position: "relative", overflow: "hidden", cursor: "pointer", height: "100%", display: "flex", flexDirection: "column" }}
        aria-label={`Play ${game.title}`}
      >
        {/* Top color strip */}
        <div
          className="card-highlight"
          style={{ background: `linear-gradient(90deg, ${game.color}, ${game.color}88)` }}
        />

        {/* Icon + Title */}
        <div style={{ padding: "1.5rem 1.5rem 0.75rem" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
            <div style={{
              width: 52, height: 52, minWidth: 52,
              borderRadius: "14px",
              background: `${game.color}22`,
              border: `1.5px solid ${game.color}55`,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "1.6rem", flexShrink: 0
            }}>
              {game.icon}
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{
                fontFamily: "Outfit, sans-serif", fontWeight: 700,
                fontSize: "1.05rem", color: "white", lineHeight: 1.25, marginBottom: "0.25rem"
              }}>
                {game.title}
              </h3>
              <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                {skillLabels.slice(0, 2).map((s) => (
                  <span key={s} className="skill-badge" style={{ fontSize: "0.65rem" }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div style={{ padding: "0 1.5rem 1rem", flex: 1 }}>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.82rem", lineHeight: 1.6 }}>
            {game.description}
          </p>
        </div>

        {/* Footer row */}
        <div style={{
          padding: "0.75rem 1.5rem",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          display: "flex", alignItems: "center", justifyContent: "space-between"
        }}>
          <div style={{ display: "flex", gap: "0.4rem", alignItems: "center" }}>
            <span style={{ fontSize: "0.7rem", color: "var(--text-muted)", fontFamily: "Outfit, sans-serif" }}>Difficulty</span>
            <div className="difficulty-dots">
              {[1, 2, 3, 4].map((d) => (
                <div key={d} className={`difficulty-dot ${d <= game.difficulty ? "active" : ""}`} />
              ))}
            </div>
          </div>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: "4px",
            color: game.color, fontFamily: "Outfit, sans-serif", fontWeight: 700,
            fontSize: "0.82rem"
          }}>
            Play Now →
          </span>
        </div>
      </article>
    </Link>
  );
}
