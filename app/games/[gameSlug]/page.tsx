import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { GAMES, getGameBySlug, LEVELS, SKILLS, ALL_GAME_SLUGS } from "@/lib/games-data";
import GameCard from "@/components/GameCard";
import GameEngine from "@/components/GameEngine";

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
  const related = GAMES.filter(
    (g) => g.slug !== game.slug && g.skills.some((s) => game.skills.includes(s))
  ).slice(0, 3);

  const schema = {
    "@context": "https://schema.org",
    "@type": ["EducationalApplication", "VideoGame"],
    "name": game.title,
    "description": game.longDescription,
    "applicationCategory": "EducationalGame",
    "operatingSystem": "WebBrowser",
    "genre": "Educational",
    "educationalUse": "Math Practice",
    "educationalRole": "student",
    "learningResourceType": "Educational game",
    "url": `https://www.mathgamesforkids.xyz/games/${game.slug}`,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
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

      {/* Game Title & Tags */}
      <section style={{ padding: "2rem 1.5rem 1rem" }} aria-labelledby="game-title">
        <div className="section-container">
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
            <div style={{
              width: 56, height: 56, borderRadius: "16px",
              background: `${game.color}25`, border: `2px solid ${game.color}55`,
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.8rem"
            }}>
              {game.icon}
            </div>
            <div>
              <h1 id="game-title" style={{ fontFamily: "Outfit, sans-serif", fontWeight: 900, fontSize: "clamp(1.5rem, 4vw, 2.2rem)", color: "white", lineHeight: 1.1 }}>
                {game.title}
              </h1>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginTop: "0.2rem" }}>{game.description}</p>
            </div>
          </div>
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {levelInfos.map((l) => (
              <Link key={l.slug} href={`/games/${l.slug}`} style={{ textDecoration: "none" }}>
                <span className="skill-badge" style={{ background: `${l.color}22`, border: `1px solid ${l.color}55` }}>
                  {l.icon} {l.name}
                </span>
              </Link>
            ))}
            {skillInfos.map((s) => (
              <Link key={s.slug} href={`/games/${s.slug}`} style={{ textDecoration: "none" }}>
                <span className="skill-badge">{s.icon} {s.name}</span>
              </Link>
            ))}
            <span className="skill-badge">👶 {game.ageRange}</span>
          </div>
        </div>
      </section>

      {/* ── THE GAME ── */}
      <section style={{ padding: "0 1.5rem 2rem" }}>
        <div className="section-container">
          <div className="glass-card" style={{ overflow: "hidden", borderColor: `${game.color}44` }}>
            {/* Colored top strip */}
            <div style={{ height: 4, background: `linear-gradient(90deg, ${game.color}, ${game.color}88)` }} />
            <GameEngine game={game} />
          </div>
        </div>
      </section>

      {/* About + Stats */}
      <section style={{ padding: "0 1.5rem 2rem" }}>
        <div className="section-container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
            <div className="glass-card" style={{ padding: "1.5rem" }}>
              <h2 style={{ fontFamily: "Outfit, sans-serif", fontWeight: 700, fontSize: "1rem", marginBottom: "0.75rem", color: "var(--accent-amber)" }}>
                📖 About This Game
              </h2>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.75, fontSize: "0.9rem" }}>
                {game.longDescription}
              </p>
            </div>
            <div className="glass-card" style={{ padding: "1.5rem", display: "flex", gap: "2rem", flexWrap: "wrap", alignItems: "flex-start" }}>
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
      </section>

      {/* Related Games */}
      {related.length > 0 && (
        <section style={{ padding: "1rem 1.5rem 5rem" }} aria-labelledby="related-heading">
          <div className="section-container">
            <h2 id="related-heading" style={{ fontFamily: "Outfit, sans-serif", fontWeight: 800, fontSize: "1.5rem", marginBottom: "1.5rem" }}>
              You Might Also Like 🎮
            </h2>
            <div className="games-grid">
              {related.map((g) => <GameCard key={g.slug} game={g} />)}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
