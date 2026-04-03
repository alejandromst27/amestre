"use client";

import Link from "next/link";

export default function ComingSoonPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0a0a0a",
        padding: "2rem",
      }}
    >
      <div style={{ textAlign: "center", maxWidth: "600px" }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none" }}>
          <h1
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "2rem",
              letterSpacing: "0.15em",
              color: "#f0ebe4",
              marginBottom: "3rem",
              cursor: "pointer",
            }}
          >
            A.MESTRE
          </h1>
        </Link>

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
            marginBottom: "2rem",
          }}
        >
          COMING SOON
        </span>

        {/* Headline */}
        <h2
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: 300,
            color: "#f0ebe4",
            lineHeight: 1.1,
            marginBottom: "1.5rem",
          }}
        >
          Bespoke Tailoring
        </h2>

        {/* Description */}
        <p
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "1rem",
            color: "#9a9188",
            lineHeight: 1.8,
            marginBottom: "3rem",
            fontWeight: 300,
          }}
        >
          We're crafting the future of bespoke tailoring. Custom-fitted suits with the same precision and care as our award-winning footwear. Coming soon.
        </p>

        {/* CTA */}
        <Link
          href="/"
          style={{
            display: "inline-block",
            padding: "1rem 2.5rem",
            backgroundColor: "#c9a96e",
            color: "#0a0a0a",
            textDecoration: "none",
            fontSize: "0.75rem",
            letterSpacing: "0.2em",
            fontFamily: "var(--font-inter), sans-serif",
            fontWeight: 500,
            transition: "background-color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e0c99a")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#c9a96e")}
        >
          BACK TO HOME
        </Link>
      </div>
    </div>
  );
}
