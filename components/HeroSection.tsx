"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#0a0a0a",
      }}
    >
      {/* Subtle background lines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(201,169,110,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.03) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Decorative vertical line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          width: "1px",
          height: "120px",
          background: "linear-gradient(to bottom, transparent, #c9a96e)",
          marginTop: "72px",
        }}
      />

      <div
        style={{
          textAlign: "center",
          zIndex: 1,
          padding: "0 2rem",
          maxWidth: "900px",
        }}
      >
        {/* Eyebrow */}
        <p
          style={{
            fontSize: "0.7rem",
            letterSpacing: "0.4em",
            color: "#c9a96e",
            marginBottom: "2rem",
            fontFamily: "var(--font-inter), sans-serif",
            fontWeight: 400,
          }}
        >
          BESPOKE FOOTWEAR — BUILT FOR YOU
        </p>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "clamp(3rem, 8vw, 7rem)",
            fontWeight: 300,
            lineHeight: 1.05,
            color: "#f0ebe4",
            marginBottom: "2rem",
            letterSpacing: "0.02em",
          }}
        >
          Your Perfect Shoe <br />
          <em style={{ fontStyle: "italic", color: "#c9a96e" }}>Awaits</em>
        </h1>

        {/* Subheadline */}
        <p
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "1rem",
            lineHeight: 1.8,
            color: "#9a9188",
            maxWidth: "520px",
            margin: "0 auto 3rem",
            fontWeight: 300,
          }}
        >
          From your foot scan to your perfect fit, every shoe is crafted around your unique measurements, your style, and your comfort.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link
            href="/login"
            style={{
              padding: "1rem 2.5rem",
              backgroundColor: "#c9a96e",
              color: "#0a0a0a",
              textDecoration: "none",
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 500,
              display: "inline-block",
              transition: "background-color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e0c99a")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#c9a96e")}
          >
            START YOUR JOURNEY
          </Link>
          <a
            href="#process"
            style={{
              padding: "1rem 2.5rem",
              border: "1px solid #2a2a2a",
              color: "#9a9188",
              textDecoration: "none",
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 400,
              display: "inline-block",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#9a9188";
              e.currentTarget.style.color = "#f0ebe4";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#2a2a2a";
              e.currentTarget.style.color = "#9a9188";
            }}
          >
            HOW IT WORKS
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "120px",
          background: "linear-gradient(to bottom, transparent, #0a0a0a)",
        }}
      />
    </section>
  );
}
