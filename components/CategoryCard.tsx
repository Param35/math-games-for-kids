import Link from "next/link";

interface CategoryCardProps {
  href: string;
  icon: string;
  name: string;
  description: string;
  gradient: string;
  count: number;
  label?: string;
}

export default function CategoryCard({
  href,
  icon,
  name,
  description,
  gradient,
  count,
  label,
}: CategoryCardProps) {
  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <article
        className="glass-card"
        style={{
          position: "relative", overflow: "hidden",
          cursor: "pointer", padding: "1.5rem",
          display: "flex", flexDirection: "column", gap: "0.75rem",
          transition: "all 0.3s ease"
        }}
        aria-label={`Browse ${name} games`}
      >
        {/* Gradient blob background */}
        <div style={{
          position: "absolute", top: -30, right: -30, width: 100, height: 100,
          borderRadius: "50%",
          background: `linear-gradient(135deg, ${gradient.includes("from") ? "rgba(124,58,237,0.15)" : "rgba(124,58,237,0.15)"})`,
          filter: "blur(30px)", pointerEvents: "none"
        }} />

        {/* Icon */}
        <div style={{
          width: 54, height: 54, borderRadius: "16px",
          background: `linear-gradient(135deg, var(--from, #7c3aed), var(--to, #4f46e5))`,
          backgroundImage: `linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05))`,
          border: "1px solid rgba(255,255,255,0.15)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "1.8rem"
        }}>
          {icon}
        </div>

        {/* Text */}
        <div>
          {label && (
            <div style={{
              fontSize: "0.65rem", fontFamily: "Outfit, sans-serif", fontWeight: 700,
              textTransform: "uppercase", letterSpacing: "0.1em",
              color: "var(--text-muted)", marginBottom: "0.2rem"
            }}>
              {label}
            </div>
          )}
          <h3 style={{
            fontFamily: "Outfit, sans-serif", fontWeight: 700,
            fontSize: "1.05rem", color: "white", marginBottom: "0.3rem"
          }}>
            {name}
          </h3>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.8rem", lineHeight: 1.5 }}>
            {description}
          </p>
        </div>

        {/* Count badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "0.4rem",
          marginTop: "auto", paddingTop: "0.5rem"
        }}>
          <span style={{
            background: "rgba(124,58,237,0.2)", border: "1px solid rgba(124,58,237,0.35)",
            padding: "2px 10px", borderRadius: "9999px",
            fontSize: "0.75rem", fontFamily: "Outfit, sans-serif", fontWeight: 700,
            color: "#a78bfa"
          }}>
            {count} {count === 1 ? "game" : "games"}
          </span>
          <span style={{ color: "var(--accent-purple)", fontSize: "0.8rem" }}>→</span>
        </div>
      </article>
    </Link>
  );
}
