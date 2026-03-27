import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | MathGames for Kids",
  description:
    "Get in touch with the MathGames for Kids team. We'd love to hear from parents, teachers, and educators with questions, feedback, or partnership inquiries.",
};

const contactInfo = [
  { icon: "📧", label: "Email", value: "hello@mathgamesforkids.com" },
  { icon: "🐦", label: "Twitter", value: "@MathGamesForKids" },
  { icon: "⏱️", label: "Response Time", value: "Within 48 business hours" },
];

const faqs = [
  { q: "Are all games really free?", a: "Yes! Every game on MathGames for Kids is 100% free, forever. No sign-up, no subscription, no ads." },
  { q: "What age range are the games for?", a: "Our games are designed for children aged 4–12, spanning Kindergarten through upper elementary (Grade 6)." },
  { q: "Can I use these games in my classroom?", a: "Absolutely! Many teachers use our games for math centers, transitions, early finishers, and review days. Check our Resources page for a classroom integration guide." },
  { q: "How do I report a bug or suggest a new game?", a: "Use the contact form and select 'Other' — we read every message and regularly add games based on educator feedback." },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero" aria-labelledby="contact-heading">
        <div className="section-container">
          <div style={{ fontSize: "3rem", marginBottom: "0.75rem" }}>📬</div>
          <h1 id="contact-heading" style={{ fontFamily: "Outfit, sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 5vw, 3.5rem)", marginBottom: "0.75rem" }}>
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <div className="divider" />
          <p style={{ color: "var(--text-secondary)", maxWidth: 500, margin: "1.25rem auto 0", fontSize: "1rem", lineHeight: 1.7 }}>
            Questions? Feedback? Partnership ideas? We'd love to hear from you.
            Fill out the form and we'll get back to you within 48 hours.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section style={{ padding: "3rem 1.5rem" }}>
        <div className="section-container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem", maxWidth: 900, margin: "0 auto" }}>

            {/* Left: Contact Info + FAQ */}
            <div>
              <h2 style={{ fontFamily: "Outfit, sans-serif", fontWeight: 800, fontSize: "1.4rem", marginBottom: "1.5rem" }}>
                We&apos;re Here to Help
              </h2>

              {contactInfo.map(({ icon, label, value }) => (
                <div key={label} style={{ display: "flex", gap: "1rem", marginBottom: "1.25rem", alignItems: "flex-start" }}>
                  <div style={{ fontSize: "1.5rem" }}>{icon}</div>
                  <div>
                    <div style={{ fontFamily: "Outfit, sans-serif", fontWeight: 700, color: "var(--text-muted)", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>{label}</div>
                    <div style={{ color: "white", fontSize: "0.95rem" }}>{value}</div>
                  </div>
                </div>
              ))}

              <div className="glass-card" style={{ padding: "1.25rem", background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.25)", marginBottom: "2rem" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>🏫</div>
                <h3 style={{ fontFamily: "Outfit, sans-serif", fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.4rem" }}>For Schools &amp; Districts</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.82rem", lineHeight: 1.6 }}>
                  Interested in a school-wide rollout or curriculum integration? Contact us for educator support and bulk resources.
                </p>
              </div>

              {/* FAQs */}
              <h2 style={{ fontFamily: "Outfit, sans-serif", fontWeight: 800, fontSize: "1.2rem", marginBottom: "1rem" }}>
                Common Questions
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {faqs.map(({ q, a }) => (
                  <div key={q} className="glass-card" style={{ padding: "1rem 1.25rem" }}>
                    <p style={{ fontFamily: "Outfit, sans-serif", fontWeight: 700, fontSize: "0.875rem", color: "white", marginBottom: "0.4rem" }}>
                      💬 {q}
                    </p>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.82rem", lineHeight: 1.6 }}>
                      {a}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: The working contact form */}
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
