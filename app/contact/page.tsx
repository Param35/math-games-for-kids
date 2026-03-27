import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | MathGames for Kids",
  description:
    "Get in touch with the MathGames for Kids team. We'd love to hear from parents, teachers, and educators with questions, feedback, or partnership inquiries.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero" aria-labelledby="contact-heading">
        <div className="section-container">
          <div style={{ fontSize: "3rem", marginBottom: "0.75rem" }}>📬</div>
          <h1 id="contact-heading" style={{ fontFamily: "Outfit, sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: "0.75rem" }}>
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <div className="divider" />
          <p style={{ color: "var(--text-secondary)", maxWidth: 500, margin: "1.25rem auto 0", fontSize: "1rem", lineHeight: 1.7 }}>
            Questions? Feedback? Partnership ideas? We'd love to hear from you. Fill out the form below and we'll get back to you within 48 hours.
          </p>
        </div>
      </section>

      <section style={{ padding: "3rem 1.5rem 6rem" }} aria-labelledby="contact-form-heading">
        <div className="section-container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem", maxWidth: 900, margin: "0 auto" }}>
            {/* Contact Info */}
            <div>
              <h2 id="contact-form-heading" style={{ fontFamily: "Outfit, sans-serif", fontWeight: 800, fontSize: "1.4rem", marginBottom: "1.5rem" }}>
                We're Here to Help
              </h2>
              {[
                { icon: "📧", label: "Email", value: "hello@mathgamesforkids.com" },
                { icon: "🐦", label: "Twitter", value: "@MathGamesForKids" },
                { icon: "⏱️", label: "Response Time", value: "Within 48 business hours" },
              ].map(({ icon, label, value }) => (
                <div key={label} style={{ display: "flex", gap: "1rem", marginBottom: "1.25rem", alignItems: "flex-start" }}>
                  <div style={{ fontSize: "1.5rem" }}>{icon}</div>
                  <div>
                    <div style={{ fontFamily: "Outfit, sans-serif", fontWeight: 700, color: "var(--text-muted)", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>{label}</div>
                    <div style={{ color: "white", fontSize: "0.95rem" }}>{value}</div>
                  </div>
                </div>
              ))}

              <div className="glass-card" style={{ padding: "1.25rem", marginTop: "2rem", background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.25)" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>🏫</div>
                <h3 style={{ fontFamily: "Outfit, sans-serif", fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.4rem" }}>For Schools & Districts</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.82rem", lineHeight: 1.6 }}>
                  Interested in a school-wide rollout or curriculum integration? Contact us for educator support and bulk resources.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="glass-card" style={{ padding: "2rem" }}>
              <form aria-label="Contact form" style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {[
                  { id: "contact-name", label: "Your Name", type: "text", placeholder: "Jane Smith" },
                  { id: "contact-email", label: "Email Address", type: "email", placeholder: "jane@example.com" },
                  { id: "contact-subject", label: "Subject", type: "text", placeholder: "I have a question about..." },
                ].map(({ id, label, type, placeholder }) => (
                  <div key={id}>
                    <label htmlFor={id} style={{ display: "block", fontFamily: "Outfit, sans-serif", fontWeight: 600, fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: "0.4rem" }}>
                      {label}
                    </label>
                    <input id={id} type={type} placeholder={placeholder} style={{
                      width: "100%", padding: "0.75rem 1rem",
                      background: "rgba(255,255,255,0.05)", border: "1px solid var(--border-glass)",
                      borderRadius: "10px", color: "white", fontSize: "0.9rem",
                      outline: "none", fontFamily: "Inter, sans-serif"
                    }} />
                  </div>
                ))}
                <div>
                  <label htmlFor="contact-message" style={{ display: "block", fontFamily: "Outfit, sans-serif", fontWeight: 600, fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: "0.4rem" }}>
                    Message
                  </label>
                  <textarea id="contact-message" rows={5} placeholder="Tell us how we can help..." style={{
                    width: "100%", padding: "0.75rem 1rem",
                    background: "rgba(255,255,255,0.05)", border: "1px solid var(--border-glass)",
                    borderRadius: "10px", color: "white", fontSize: "0.9rem",
                    outline: "none", fontFamily: "Inter, sans-serif", resize: "vertical"
                  }} />
                </div>
                <button type="submit" className="btn-primary" style={{ justifyContent: "center" }}>
                  Send Message 📬
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
