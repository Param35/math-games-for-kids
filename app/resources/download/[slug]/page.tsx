import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getResourceBySlug, ALL_RESOURCE_SLUGS } from "@/lib/resources-data";
import PrintButton from "./PrintButton";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ALL_RESOURCE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const res = getResourceBySlug(slug);
  if (!res) return {};
  return {
    title: `${res.title} | Free Printable | MathGames for Kids`,
    description: res.fullDesc,
  };
}

// Renders the chart table for times tables
function ChartTable({ data }: { data: Record<string, string[]> }) {
  const headers = data.headers as unknown as string[];
  const rows = data.rows as unknown as string[][];
  return (
    <div style={{ overflowX: "auto", marginBottom: "2rem" }}>
      <table style={{ borderCollapse: "collapse", width: "100%", fontSize: "0.8rem" }}>
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th key={i} style={{
                padding: "6px 8px", textAlign: "center",
                background: i === 0 ? "#1e1040" : "#7c3aed",
                color: "white", fontFamily: "Outfit, sans-serif", fontWeight: 700,
                border: "1px solid rgba(255,255,255,0.2)", minWidth: 36,
              }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri}>
              {row.map((cell, ci) => (
                <td key={ci} style={{
                  padding: "6px 8px", textAlign: "center",
                  background: ci === 0 ? "#7c3aed" : ri % 2 === 0 ? "rgba(124,58,237,0.08)" : "rgba(124,58,237,0.03)",
                  color: ci === 0 ? "white" : "var(--text-primary, #f5f3ff)",
                  fontFamily: ci === 0 ? "Outfit, sans-serif" : "Inter, sans-serif",
                  fontWeight: ci === 0 ? 700 : 400,
                  border: "1px solid rgba(255,255,255,0.1)",
                  fontSize: Math.max(Number(cell)) > 99 ? "0.7rem" : "0.85rem",
                }}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default async function DownloadPage({ params }: Props) {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);
  if (!resource) notFound();

  return (
    <>
      {/* Print-optimized page */}
      <style>{`
        @media print {
          .no-print { display: none !important; }
          .print-page { background: white !important; color: black !important; }
          body { background: white !important; }
          .print-section { break-inside: avoid; }
        }
        @media screen {
          .print-page { max-width: 900px; margin: 0 auto; }
        }
      `}</style>

      {/* Screen-only controls */}
      <div className="no-print" style={{ background: "rgba(124,58,237,0.12)", borderBottom: "1px solid rgba(124,58,237,0.3)", padding: "1rem 1.5rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <a href="/resources" style={{ color: "#a78bfa", textDecoration: "none", fontFamily: "Outfit", fontWeight: 700, fontSize: "0.9rem" }}>
              ← Back to Resources
            </a>
            <span style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>|</span>
            <span style={{ color: "var(--text-secondary)", fontSize: "0.85rem" }}>{resource.pages} page{resource.pages > 1 ? "s" : ""} · {resource.gradeRange}</span>
          </div>
          <PrintButton />
        </div>
      </div>

      {/* The printable document */}
      <div className="print-page" style={{ padding: "2rem 1.5rem 4rem" }}>

        {/* Document Header */}
        <div style={{ textAlign: "center", padding: "2rem 1rem 2.5rem", borderBottom: "3px solid rgba(124,58,237,0.3)", marginBottom: "2.5rem" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: `${resource.tagColor}22`, border: `1px solid ${resource.tagColor}55`, padding: "4px 14px", borderRadius: "9999px", marginBottom: "1rem" }}>
            <span style={{ fontFamily: "Outfit, sans-serif", fontWeight: 700, fontSize: "0.72rem", color: resource.tagColor, textTransform: "uppercase", letterSpacing: "0.08em" }}>
              {resource.tag} · Grades {resource.gradeRange}
            </span>
          </div>
          <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>{resource.icon}</div>
          <h1 style={{ fontFamily: "Outfit, sans-serif", fontWeight: 900, fontSize: "clamp(1.6rem, 3vw, 2.5rem)", color: "white", marginBottom: "0.5rem" }}>
            {resource.title}
          </h1>
          <p style={{ color: "#a78bfa", fontFamily: "Outfit", fontWeight: 600, fontSize: "1rem", marginBottom: "0.75rem" }}>
            {resource.content.subtitle}
          </p>
          <p style={{ color: "var(--text-secondary)", maxWidth: 600, margin: "0 auto", fontSize: "0.9rem", lineHeight: 1.7 }}>
            {resource.fullDesc}
          </p>
          <div style={{ marginTop: "1rem", display: "flex", justifyContent: "center", gap: "1.5rem", flexWrap: "wrap" }}>
            <span style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>📅 Free forever</span>
            <span style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>🎓 MathGames for Kids</span>
            <span style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>📄 mathgamesforkids.com/resources</span>
          </div>
        </div>

        {/* Sections */}
        {resource.content.sections.map((section, si) => (
          <div key={si} className="print-section glass-card" style={{ padding: "1.75rem", marginBottom: "1.5rem" }}>
            <h2 style={{ fontFamily: "Outfit, sans-serif", fontWeight: 800, fontSize: "1.1rem", color: "white", marginBottom: "1.25rem", paddingBottom: "0.75rem", borderBottom: "2px solid rgba(124,58,237,0.3)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <span style={{ color: resource.tagColor }}>▌</span>
              {section.heading}
            </h2>

            {section.type === "chart" && (
              <ChartTable data={section.data as Record<string, string[]>} />
            )}

            {(section.type === "list" || section.type === "grid" || section.type === "flashcards") && (
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {(section.data as string[]).map((item, i) => (
                  <li key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", padding: "0.6rem 0.75rem", borderRadius: "8px", background: i % 2 === 0 ? "rgba(255,255,255,0.03)" : "transparent" }}>
                    <span style={{ color: resource.tagColor, fontWeight: 700, minWidth: 20, fontSize: "0.8rem", marginTop: "0.1rem" }}>
                      {si === 0 ? `${i + 1}.` : "✓"}
                    </span>
                    <span style={{ color: "var(--text-secondary)", fontSize: "0.875rem", lineHeight: 1.65, fontFamily: "Inter, sans-serif" }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        {/* Footer */}
        <div className="no-print" style={{ marginTop: "2.5rem", padding: "1.5rem", textAlign: "center", borderRadius: "1rem", background: "linear-gradient(135deg, rgba(124,58,237,0.15), rgba(6,182,212,0.08))", border: "1px solid rgba(124,58,237,0.25)" }}>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginBottom: "1rem" }}>
            📖 Want to put this into practice? Try the free interactive games on our website — no sign-up needed.
          </p>
          <a href="/games" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.65rem 1.5rem", borderRadius: "9999px", background: "linear-gradient(135deg,#7c3aed,#4f46e5)", color: "white", fontFamily: "Outfit", fontWeight: 700, fontSize: "0.9rem", textDecoration: "none" }}>
            🎮 Play Free Math Games →
          </a>
        </div>

        {/* Print footer */}
        <div style={{ marginTop: "3rem", paddingTop: "1rem", borderTop: "1px solid rgba(255,255,255,0.1)", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem" }}>
          <span style={{ color: "var(--text-muted)", fontSize: "0.72rem" }}>
            © {new Date().getFullYear()} MathGames for Kids · Free to print and share for educational use
          </span>
          <span style={{ color: "var(--text-muted)", fontSize: "0.72rem" }}>
            More resources: mathgamesforkids.com/resources
          </span>
        </div>
      </div>


    </>
  );
}
