"use client";

import { useState } from "react";

export default function TailorComingSoonCard() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section
      style={{
        backgroundColor: "#faf8f5",
        padding: "6rem 2rem",
        borderTop: "1px solid #e0e0e0",
      }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <div
          style={{
            backgroundColor: "#ffffff",
            border: "1px solid #d0d0d0",
            padding: "4rem 3rem",
            textAlign: "center",
          }}
        >
          {/* Badge */}
          <span
            style={{
              display: "inline-block",
              padding: "0.5rem 1.25rem",
              backgroundColor: "#c9a96e",
              color: "#0a0a0a",
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "0.65rem",
              letterSpacing: "0.15em",
              fontWeight: 500,
              marginBottom: "1.5rem",
            }}
          >
            COMING SOON
          </span>

          {/* Headline */}
          <h2
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 300,
              color: "#1a1a1a",
              lineHeight: 1.1,
              marginBottom: "1rem",
            }}
          >
            Bespoke Tailoring
          </h2>

          {/* Description */}
          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "0.95rem",
              color: "#6b6b6b",
              lineHeight: 1.8,
              maxWidth: "500px",
              margin: "0 auto 2.5rem",
              fontWeight: 300,
            }}
          >
            Premium bespoke suits crafted to your exact measurements. Built with the same precision, care, and artistry as our custom shoes. Be the first to know when we launch.
          </p>

          {/* Waitlist form */}
          <form onSubmit={handleSubmit} style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "1.5rem" }}>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                padding: "0.75rem 1.25rem",
                backgroundColor: "#ffffff",
                border: "1px solid #d0d0d0",
                color: "#1a1a1a",
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "0.85rem",
                minWidth: "250px",
                transition: "border-color 0.2s",
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "#c9a96e")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "#d0d0d0")}
            />
            <button
              type="submit"
              style={{
                padding: "0.75rem 2rem",
                backgroundColor: "#c9a96e",
                color: "#0a0a0a",
                border: "none",
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                fontWeight: 500,
                cursor: "pointer",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e0c99a")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#c9a96e")}
            >
              NOTIFY ME
            </button>
          </form>

          {/* Confirmation message */}
          {submitted && (
            <p
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "0.85rem",
                color: "#34d399",
                fontWeight: 300,
              }}
            >
              ✓ Thank you! We'll notify you when tailoring launches.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
