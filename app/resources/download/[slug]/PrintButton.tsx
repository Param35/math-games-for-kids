"use client";
export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      style={{
        background: "linear-gradient(135deg, #7c3aed, #4f46e5)", color: "white",
        border: "none", padding: "0.6rem 1.5rem", borderRadius: "9999px",
        fontFamily: "Outfit, sans-serif", fontWeight: 700, fontSize: "0.9rem",
        cursor: "pointer", display: "flex", alignItems: "center", gap: "0.5rem",
        boxShadow: "0 0 20px rgba(124,58,237,0.4)"
      }}
    >
      🖨️ Print / Save as PDF
    </button>
  );
}
