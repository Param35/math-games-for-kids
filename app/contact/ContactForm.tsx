"use client";
import { useState, useRef, FormEvent } from "react";

interface FormState {
  status: "idle" | "submitting" | "success" | "error";
  errorMsg: string;
}

const INPUT_STYLE: React.CSSProperties = {
  width: "100%",
  padding: "0.75rem 1rem",
  background: "rgba(255,255,255,0.05)",
  border: "1px solid var(--border-glass)",
  borderRadius: "10px",
  color: "white",
  fontSize: "0.9rem",
  outline: "none",
  fontFamily: "Inter, sans-serif",
  boxSizing: "border-box",
  transition: "border-color 0.2s",
};

const LABEL_STYLE: React.CSSProperties = {
  display: "block",
  fontFamily: "Outfit, sans-serif",
  fontWeight: 600,
  fontSize: "0.85rem",
  color: "var(--text-secondary)",
  marginBottom: "0.4rem",
};

export default function ContactForm() {
  const [state, setState] = useState<FormState>({ status: "idle", errorMsg: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const formRef = useRef<HTMLFormElement>(null);

  function validate(data: FormData) {
    const errs: Record<string, string> = {};
    const name = (data.get("name") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const subject = (data.get("subject") as string)?.trim();
    const message = (data.get("message") as string)?.trim();

    if (!name) errs.name = "Name is required";
    if (!email) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Please enter a valid email";
    if (!subject) errs.subject = "Subject is required";
    if (!message || message.length < 10) errs.message = "Message must be at least 10 characters";
    return errs;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const errs = validate(data);

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setState({ status: "submitting", errorMsg: "" });

    try {
      // POST to Formspree — replace YOUR_FORM_ID with your actual Formspree endpoint
      // Sign up free at formspree.io → create form → copy the ID
      const res = await fetch("https://formspree.io/f/xlgogbrz", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setState({ status: "success", errorMsg: "" });
        formRef.current?.reset();
      } else {
        const json = await res.json().catch(() => ({}));
        setState({ status: "error", errorMsg: json?.error ?? "Something went wrong. Please try again." });
      }
    } catch {
      setState({ status: "error", errorMsg: "Network error. Please check your connection and try again." });
    }
  }

  // ── Success screen ──────────────────────────────────────────────────────────
  if (state.status === "success") {
    return (
      <div className="glass-card" style={{ padding: "2.5rem", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
        <div style={{ fontSize: "3.5rem" }}>🎉</div>
        <h2 style={{ fontFamily: "Outfit, sans-serif", fontWeight: 900, fontSize: "1.5rem", color: "white" }}>
          Message Sent!
        </h2>
        <p style={{ color: "var(--text-secondary)", maxWidth: 360, lineHeight: 1.7 }}>
          Thanks for reaching out! We'll get back to you within 48 business hours.
        </p>
        <button
          onClick={() => setState({ status: "idle", errorMsg: "" })}
          style={{ marginTop: "0.5rem", background: "none", border: "1px solid rgba(124,58,237,0.5)", color: "#a78bfa", padding: "0.5rem 1.25rem", borderRadius: "9999px", fontFamily: "Outfit", fontWeight: 700, fontSize: "0.85rem", cursor: "pointer" }}
        >
          Send Another Message
        </button>
      </div>
    );
  }

  // ── Form ────────────────────────────────────────────────────────────────────
  const isSubmitting = state.status === "submitting";

  return (
    <div className="glass-card" style={{ padding: "2rem" }}>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        aria-label="Contact form"
        noValidate
        style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
      >
        {/* Name */}
        <div>
          <label htmlFor="contact-name" style={LABEL_STYLE}>
            Your Name <span style={{ color: "#f87171" }}>*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            placeholder="Jane Smith"
            disabled={isSubmitting}
            style={{ ...INPUT_STYLE, borderColor: errors.name ? "#f87171" : "var(--border-glass)" }}
          />
          {errors.name && <p style={{ color: "#f87171", fontSize: "0.78rem", marginTop: "0.3rem", fontFamily: "Inter" }}>{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="contact-email" style={LABEL_STYLE}>
            Email Address <span style={{ color: "#f87171" }}>*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            placeholder="jane@example.com"
            disabled={isSubmitting}
            style={{ ...INPUT_STYLE, borderColor: errors.email ? "#f87171" : "var(--border-glass)" }}
          />
          {errors.email && <p style={{ color: "#f87171", fontSize: "0.78rem", marginTop: "0.3rem", fontFamily: "Inter" }}>{errors.email}</p>}
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="contact-subject" style={LABEL_STYLE}>
            Subject <span style={{ color: "#f87171" }}>*</span>
          </label>
          <input
            id="contact-subject"
            name="subject"
            type="text"
            placeholder="I have a question about..."
            disabled={isSubmitting}
            style={{ ...INPUT_STYLE, borderColor: errors.subject ? "#f87171" : "var(--border-glass)" }}
          />
          {errors.subject && <p style={{ color: "#f87171", fontSize: "0.78rem", marginTop: "0.3rem", fontFamily: "Inter" }}>{errors.subject}</p>}
        </div>

        {/* Role (optional, helps routing) */}
        <div>
          <label htmlFor="contact-role" style={LABEL_STYLE}>I am a…</label>
          <select
            id="contact-role"
            name="role"
            disabled={isSubmitting}
            style={{ ...INPUT_STYLE, cursor: "pointer" }}
          >
            <option value="" style={{ background: "#1a1040" }}>Select your role (optional)</option>
            <option value="Parent" style={{ background: "#1a1040" }}>Parent</option>
            <option value="Teacher" style={{ background: "#1a1040" }}>Teacher / Educator</option>
            <option value="School Admin" style={{ background: "#1a1040" }}>School / District Administrator</option>
            <option value="Other" style={{ background: "#1a1040" }}>Other</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="contact-message" style={LABEL_STYLE}>
            Message <span style={{ color: "#f87171" }}>*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            placeholder="Tell us how we can help..."
            disabled={isSubmitting}
            style={{ ...INPUT_STYLE, resize: "vertical", borderColor: errors.message ? "#f87171" : "var(--border-glass)" }}
          />
          {errors.message && <p style={{ color: "#f87171", fontSize: "0.78rem", marginTop: "0.3rem", fontFamily: "Inter" }}>{errors.message}</p>}
        </div>

        {/* Server error */}
        {state.status === "error" && (
          <div style={{ padding: "0.75rem 1rem", borderRadius: "10px", background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.35)" }}>
            <p style={{ color: "#fca5a5", fontSize: "0.875rem", fontFamily: "Inter" }}>❌ {state.errorMsg}</p>
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary"
          style={{ justifyContent: "center", opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? "not-allowed" : "pointer" }}
        >
          {isSubmitting ? "⏳ Sending…" : "Send Message 📬"}
        </button>

        <p style={{ color: "var(--text-muted)", fontSize: "0.75rem", textAlign: "center", fontFamily: "Inter" }}>
          We typically reply within 48 business hours. No spam, ever.
        </p>
      </form>
    </div>
  );
}
