"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase-browser";

export default function Footer() {
  const [isTailor, setIsTailor] = useState(false);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(async ({ data: { user } }) => {
      if (!user) return;
      const { data } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", user.id)
        .single();
      if (data && ["tailor", "admin"].includes(data.role)) setIsTailor(true);
    });
  }, []);
  return (
    <footer
      style={{
        backgroundColor: "#0a0a0a",
        borderTop: "1px solid #1e1e1e",
        padding: "4rem 2rem 3rem",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: "3rem",
          marginBottom: "3rem",
        }}
        className="footer-grid"
      >
        {/* Brand */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "1.6rem",
              letterSpacing: "0.15em",
              color: "#f0ebe4",
              marginBottom: "1rem",
            }}
          >
            A.Mestre
          </p>
          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "0.85rem",
              color: "#9a9188",
              lineHeight: 1.8,
              fontWeight: 300,
              maxWidth: "300px",
            }}
          >
            Precision-crafted bespoke shoes, built around your feet and your story. Available on iOS and Android.
          </p>
        </div>

        {/* Links */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.2em",
              color: "#c9a96e",
              marginBottom: "1.25rem",
            }}
          >
            NAVIGATE
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {["The Process", "Customize", "About"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(" ", "")}`}
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "0.85rem",
                  color: "#9a9188",
                  textDecoration: "none",
                  fontWeight: 300,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#f0ebe4")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#9a9188")}
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Craftsmen Portal */}
        <div>
            <p
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "0.7rem",
                letterSpacing: "0.2em",
                color: "#c9a96e",
                marginBottom: "1.25rem",
              }}
            >
              CRAFTSMEN
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <a
                href="/tailor"
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "0.85rem",
                  color: "#9a9188",
                  textDecoration: "none",
                  fontWeight: 300,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#f0ebe4")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#9a9188")}
              >
                Portal
              </a>
            </div>
        </div>

        {/* App */}
        <div>
          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "0.7rem",
              letterSpacing: "0.2em",
              color: "#c9a96e",
              marginBottom: "1.25rem",
            }}
          >
            GET THE APP
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {["App Store — iOS", "Google Play — Android"].map((platform) => (
              <span
                key={platform}
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "0.85rem",
                  color: "#9a9188",
                  fontWeight: 300,
                }}
              >
                {platform}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          borderTop: "1px solid #1e1e1e",
          paddingTop: "2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "0.75rem",
            color: "#9a9188",
            fontWeight: 300,
          }}
        >
          © {new Date().getFullYear()} A.Mestre. All rights reserved.
        </p>
        <div style={{ display: "flex", gap: "2rem" }}>
          {["Privacy Policy", "Terms of Service"].map((item) => (
            <a
              key={item}
              href="#"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "0.75rem",
                color: "#9a9188",
                textDecoration: "none",
                fontWeight: 300,
              }}
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
