import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { GAMES, getGameBySlug, LEVELS, SKILLS, ALL_GAME_SLUGS } from "@/lib/games-data";
import GameCard from "@/components/GameCard";
import GameCanvas from "./GameCanvas";

interface Props {
  params: Promise<{ gameSlug: string }>;
}

export async function generateStaticParams() {
  return ALL_GAME_SLUGS.map((slug) => ({ gameSlug: slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { gameSlug } = await params;
  const game = getGameBySlug(gameSlug);
  if (!game) return {};
  return {
    title: `${game.title} | Free Math Game for Kids`,
    description: game.longDescription,
    keywords: [
      `${game.title.toLowerCase()} math game`,
      "free kids math game",
      ...game.skills.map((s) => `${s} game for kids`),
    ],
  };
}

export default async function GamePage({ params }: Props) {
  const { gameSlug } = await params;
  const game = getGameBySlug(gameSlug);
  if (!game) notFound();

  const levelInfos = game.levels.map((l) => LEVELS.find((lv) => lv.slug === l)!);
  const skillInfos = game.skills.map((s) => SKILLS.find((sk) => sk.slug === s)!);

  // Related games (same skill, different game)
  const related = GAMES.filter(
    (g) => g.slug !== game.slug && g.skills.some((s) => game.skills.includes(s))
  ).slice(0, 3);

  return (
    <>
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" style={{ padding: "1.5rem 1.5rem 0" }}>
        <div className="section-container">
          <ol style={{ display: "flex", gap: "0.5rem", listStyle: "none", flexWrap: "wrap", color: "var(--text-muted)", fontSize: "0.82rem" }}>
            <li><Link href="/" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Home</Link></li>
            <li style={{ opacity: 0.5 }}>›</li>
            <li><Link href="/games" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Games</Link></li>
            <li style={{ opacity: 0.5 }}>›</li>
            <li style={{ color: "white" }}>{game.title}</li>
          </ol>
        </div>
      </nav>

      {/* Game Hero */}
      <section style={{ padding: "2.5rem 1.5rem" }} aria-labelledby="game-title">
        <div className="section-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2.5rem" }}>
            {/* Game Canvas */}
            <div>
              <GameCanvas game={game} />
            </div>

            {/* Game Info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {/* Title & Icon */}
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div style={{
                  width: 64, height: 64, borderRadius: "18px",
                  background: `${game.color}25`,
                  border: `2px solid ${game.color}55`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "2rem"
                }}>
                  {game.icon}
                </div>
                <div>
                  <h1 id="game-title" style={{ fontFamily: "Outfit, sans-serif", fontWeight: 900, fontSize: "clamp(1.6rem, 4vw, 2.5rem)", color: "white" }}>
                    {game.title}
                  </h1>
                  <p style={{ color: "var(--text-secondary)", fontSize: "1rem" }}>{game.description}</p>
                </div>
              </div>

              {/* Tags */}
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                {levelInfos.map((l) => (
                  <Link key={l.slug} href={`/games/${l.slug}`} style={{ textDecoration: "none" }}>
                    <span className="skill-badge" style={{ background: `${l.color}22`, border: `1px solid ${l.color}55`, color: "white" }}>
                      {l.icon} {l.name}
                    </span>
                  </Link>
                ))}
                {skillInfos.map((s) => (
                  <Link key={s.slug} href={`/games/${s.slug}`} style={{ textDecoration: "none" }}>
                    <span className="skill-badge">
                      {s.icon} {s.name}
                    </span>
                  </Link>
                ))}
              </div>

              {/* Description */}
              <div className="glass-card" style={{ padding: "1.5rem" }}>
                <h2 style={{ fontFamily: "Outfit, sans-serif", fontWeight: 700, fontSize: "1rem", marginBottom: "0.75rem", color: "var(--accent-amber)" }}>
                  About This Game
                </h2>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.75, fontSize: "0.95rem" }}>
                  {game.longDescription}
                </p>
              </div>

              {/* Difficulty */}
              <div className="glass-card" style={{ padding: "1.25rem", display: "flex", gap: "2rem", flexWrap: "wrap" }}>
                <div>
                  <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.4rem" }}>Difficulty</div>
                  <div className="difficulty-dots" style={{ gap: "6px" }}>
                    {[1,2,3,4].map((d) => (
                      <div key={d} className={`difficulty-dot ${d <= game.difficulty ? "active" : ""}`} style={{ width: 12, height: 12 }} />
                    ))}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.4rem" }}>Age Range</div>
                  <div style={{ fontFamily: "Outfit, sans-serif", fontWeight: 700, color: "white" }}>{game.ageRange}</div>
                </div>
                <div>
                  <div style={{ fontSize: "0.72rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.4rem" }}>Skills</div>
                  <div style={{ fontFamily: "Outfit, sans-serif", fontWeight: 700, color: "white" }}>
                    {skillInfos.map((s) => s.name).join(", ")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Games */}
      {related.length > 0 && (
        <section style={{ padding: "3rem 1.5rem 5rem" }} aria-labelledby="related-heading">
          <div className="section-container">
            <h2 id="related-heading" style={{ fontFamily: "Outfit, sans-serif", fontWeight: 800, fontSize: "1.5rem", marginBottom: "1.5rem" }}>
              You Might Also Like 🎮
            </h2>
            <div className="games-grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))" }}>
              {related.map((g) => <GameCard key={g.slug} game={g} />)}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
