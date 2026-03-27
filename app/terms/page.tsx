import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | MathGames for Kids",
  description:
    "Read the MathGames for Kids terms of use. By accessing our free educational platform, you agree to these terms.",
};

export default function TermsPage() {
  return (
    <>
      <section className="page-hero" aria-labelledby="terms-heading">
        <div className="section-container">
          <div style={{ fontSize: "3rem", marginBottom: "0.75rem" }}>📄</div>
          <h1 id="terms-heading" style={{ fontFamily: "Outfit, sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 5vw, 3rem)", marginBottom: "0.75rem" }}>
            Terms of <span className="gradient-text">Use</span>
          </h1>
          <div className="divider" />
          <p style={{ color: "var(--text-secondary)", maxWidth: 500, margin: "1rem auto 0" }}>
            Last updated: March 1, 2025 · Effective March 1, 2025
          </p>
        </div>
      </section>

      <section style={{ padding: "3rem 1.5rem 6rem" }}>
        <div className="section-container">
          <div className="glass-card" style={{ padding: "2.5rem", maxWidth: 800, margin: "0 auto" }}>
            {[
              {
                title: "1. Acceptance of Terms",
                content: "By accessing or using MathGames for Kids ('the Service'), you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use the Service. Children must have parental permission to use this Service.",
              },
              {
                title: "2. Description of Service",
                content: "MathGames for Kids provides free, online educational math games and resources for children aged 4–12. All games are provided 'as is' without any warranty. We reserve the right to modify, suspend, or discontinue any aspect of the Service at any time.",
              },
              {
                title: "3. Permitted Use",
                content: "You may use the Service for personal, non-commercial educational purposes. Teachers and parents may use games in classroom and home settings. You may not: reproduce, distribute, or sell our content; attempt to reverse-engineer or hack the platform; or use the Service in any manner that could harm children.",
              },
              {
                title: "4. Intellectual Property",
                content: "All content on this platform, including game designs, graphics, text, and code, is the intellectual property of MathGames for Kids and protected by copyright law. Game concepts and educational materials may not be reproduced without express written permission.",
              },
              {
                title: "5. Limitation of Liability",
                content: "MathGames for Kids shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Service. Our total liability shall not exceed $100. We make no warranty that games will be error-free or that learning outcomes are guaranteed.",
              },
              {
                title: "6. Changes to Terms",
                content: "We reserve the right to modify these Terms at any time. Changes will be posted on this page with an updated date. Continued use of the Service after changes constitutes acceptance of the new Terms.",
              },
              {
                title: "7. Governing Law",
                content: "These Terms shall be governed by the laws of the United States. Any disputes shall be resolved in the courts of the applicable jurisdiction.",
              },
              {
                title: "8. Contact",
                content: "For questions about these Terms, contact us at legal@mathgamesforkids.com.",
              },
            ].map(({ title, content }) => (
              <div key={title} style={{ marginBottom: "2rem" }}>
                <h2 style={{ fontFamily: "Outfit, sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "white", marginBottom: "0.75rem" }}>{title}</h2>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.8 }}>{content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
