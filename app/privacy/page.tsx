import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | MathGames for Kids",
  description:
    "Read the MathGames for Kids privacy policy. We are committed to protecting children's privacy and do not collect personal data from children under 13.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="page-hero" aria-labelledby="privacy-heading">
        <div className="section-container">
          <div style={{ fontSize: "3rem", marginBottom: "0.75rem" }}>🔒</div>
          <h1 id="privacy-heading" style={{ fontFamily: "Outfit, sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 5vw, 3rem)", marginBottom: "0.75rem" }}>
            Privacy <span className="gradient-text">Policy</span>
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
                title: "1. Introduction",
                content: "MathGames for Kids ('we', 'us', 'our') is committed to protecting the privacy of children and families who use our platform. This Privacy Policy explains how we collect, use, and protect information when you visit our website. We comply fully with the Children's Online Privacy Protection Act (COPPA) and the General Data Protection Regulation (GDPR).",
              },
              {
                title: "2. Information We Collect",
                content: "We do not require users to create accounts or submit personal information to play our games. We do not knowingly collect personal data from children under 13. Anonymous usage data (e.g., which pages are visited, game interactions) may be collected via privacy-preserving analytics tools solely to improve the platform.",
              },
              {
                title: "3. Cookies",
                content: "We use only essential cookies necessary for the website to function. We do not use advertising cookies, tracking cookies, or third-party analytics cookies that could identify individual users or children.",
              },
              {
                title: "4. Third-Party Services",
                content: "We do not display third-party advertisements on our platform, particularly any ads targeting minors. We do not sell, rent, or share any user data with third parties for commercial purposes.",
              },
              {
                title: "5. Children's Privacy (COPPA)",
                content: "This website is designed to be safe for children. We do not collect, use, or disclose personal information from children under 13 without verifiable parental consent. Parents may contact us at any time to review or delete any data we may hold.",
              },
              {
                title: "6. Data Security",
                content: "We implement appropriate technical and organizational measures to protect against unauthorized access, alteration, disclosure, or destruction of data. Our platform uses HTTPS encryption for all communications.",
              },
              {
                title: "7. Contact Us",
                content: "If you have questions or concerns about this Privacy Policy, please contact us at privacy@mathgamesforkids.com. We will respond within 30 days.",
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
