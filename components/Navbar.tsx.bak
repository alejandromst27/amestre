"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase-browser";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [role, setRole] = useState<string | null>(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(async ({ data: { user } }) => {
      if (!user) return;
      setLoggedIn(true);
      const { data } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", user.id)
        .single();
      if (data) setRole(data.role);
    });
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        borderBottom: "1px solid #e0e0e0",
        backgroundColor: "rgba(250,248,245,0.95)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 2rem",
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none" }}>
          <span
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "1.6rem",
              fontWeight: 400,
              letterSpacing: "0.15em",
              color: "#1a1a1a",
            }}
          >
            A.Mestre
          </span>
        </Link>

        {/* Desktop Links */}
        <div
          style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}
          className="desktop-nav"
        >
          <NavLink href="#process">{t.theProcess}</NavLink>
          <NavLink href="#customize">{t.customize}</NavLink>
          <NavLink href="#about">{t.about}</NavLink>

          {/* Language Switcher */}
          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", borderLeft: "1px solid #d0d0d0", paddingLeft: "2.5rem" }}>
            <button
              onClick={() => setLanguage("en")}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: language === "en" ? 500 : 400,
                color: language === "en" ? "#c9a96e" : "#6b6b6b",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => !language.includes("en") && (e.currentTarget.style.color = "#1a1a1a")}
              onMouseLeave={(e) => !language.includes("en") && (e.currentTarget.style.color = "#6b6b6b")}
            >
              EN
            </button>
            <span style={{ color: "#d0d0d0" }}>/</span>
            <button
              onClick={() => setLanguage("es")}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: language === "es" ? 500 : 400,
                color: language === "es" ? "#c9a96e" : "#6b6b6b",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => !language.includes("es") && (e.currentTarget.style.color = "#1a1a1a")}
              onMouseLeave={(e) => !language.includes("es") && (e.currentTarget.style.color = "#6b6b6b")}
            >
              ES
            </button>
          </div>

          {loggedIn ? (
            <Link
              href="/dashboard"
              style={{
                padding: "0.5rem 1.5rem",
                border: "1px solid #c9a96e",
                color: "#c9a96e",
                textDecoration: "none",
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 400,
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#c9a96e";
                e.currentTarget.style.color = "#0a0a0a";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#c9a96e";
              }}
            >
              {t.myAccount}
            </Link>
          ) : (
            <Link
              href="/login"
              style={{
                padding: "0.5rem 1.5rem",
                border: "1px solid #c9a96e",
                color: "#c9a96e",
                textDecoration: "none",
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 400,
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#c9a96e";
                e.currentTarget.style.color = "#0a0a0a";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#c9a96e";
              }}
            >
              {t.signIn}
            </Link>
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#1a1a1a",
            display: "none",
          }}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          <div style={{ width: "24px", height: "2px", background: "#1a1a1a", marginBottom: "5px" }} />
          <div style={{ width: "24px", height: "2px", background: "#1a1a1a", marginBottom: "5px" }} />
          <div style={{ width: "24px", height: "2px", background: "#1a1a1a" }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            backgroundColor: "#faf8f5",
            borderTop: "1px solid #e0e0e0",
            padding: "1.5rem 2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
          }}
        >
          <NavLink href="#process" onClick={() => setMenuOpen(false)}>{t.theProcess}</NavLink>
          <NavLink href="#customize" onClick={() => setMenuOpen(false)}>{t.customize}</NavLink>
          <NavLink href="#about" onClick={() => setMenuOpen(false)}>{t.about}</NavLink>
          <Link
            href={loggedIn ? "/dashboard" : "/login"}
            style={{ color: "#c9a96e", textDecoration: "none", fontSize: "0.8rem", letterSpacing: "0.15em" }}
          >
            {loggedIn ? t.myAccount : t.signIn}
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}

function NavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      style={{
        color: "#6b6b6b",
        textDecoration: "none",
        fontSize: "0.75rem",
        letterSpacing: "0.15em",
        fontFamily: "var(--font-inter), sans-serif",
        fontWeight: 400,
        transition: "color 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "#1a1a1a")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "#6b6b6b")}
    >
      {children}
    </a>
  );
}
