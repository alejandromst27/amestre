"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export default function HeroSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#faf8f5",
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
          {t.heroEyebrow}
        </p>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "clamp(3rem, 8vw, 7rem)",
            fontWeight: 300,
            lineHeight: 1.05,
            color: "#1a1a1a",
            marginBottom: "2rem",
            letterSpacing: "0.02em",
          }}
        >
          {t.heroHeadline}
        </h1>

        {/* Subheadline */}
        <p
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "1rem",
            lineHeight: 1.8,
            color: "#6b6b6b",
            maxWidth: "520px",
            margin: "0 auto 3rem",
            fontWeight: 300,
          }}
        >
          {t.heroSubheadline}
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
            {t.startYourJourney}
          </Link>
          <a
            href="#process"
            style={{
              padding: "1rem 2.5rem",
              border: "1px solid #d0d0d0",
              color: "#6b6b6b",
              textDecoration: "none",
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 400,
              display: "inline-block",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#6b6b6b";
              e.currentTarget.style.color = "#1a1a1a";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#d0d0d0";
              e.currentTarget.style.color = "#6b6b6b";
            }}
          >
            {t.howItWorks}
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
          background: "linear-gradient(to bottom, transparent, #faf8f5)",
        }}
      />
    </section>
  );
}
