"use client";

import { useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase-browser";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "error" | "success"; text: string } | null>(null);
  const router = useRouter();
  const supabase = createClient();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    if (mode === "signup") {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { full_name: fullName },
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      });
      if (error) {
        setMessage({ type: "error", text: error.message });
      } else {
        setMessage({
          type: "success",
          text: "Check your email to confirm your account.",
        });
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        setMessage({ type: "error", text: error.message });
      } else {
        router.push("/dashboard");
      }
    }

    setLoading(false);
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0a0a0a",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        backgroundImage:
          "linear-gradient(rgba(201,169,110,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.03) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }}
    >
      <div style={{ width: "100%", maxWidth: "420px" }}>
        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <Link href="/" style={{ textDecoration: "none" }}>
            <span
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "2rem",
                fontWeight: 400,
                letterSpacing: "0.15em",
                color: "#f0ebe4",
              }}
            >
              A.MESTRE
            </span>
          </Link>
          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "0.75rem",
              color: "#9a9188",
              letterSpacing: "0.2em",
              marginTop: "0.5rem",
            }}
          >
            BESPOKE TAILORING
          </p>
        </div>

        {/* Card */}
        <div
          style={{
            backgroundColor: "#141414",
            border: "1px solid #2a2a2a",
            padding: "2.5rem",
          }}
        >
          {/* Tabs */}
          <div
            style={{
              display: "flex",
              borderBottom: "1px solid #2a2a2a",
              marginBottom: "2rem",
            }}
          >
            {(["signin", "signup"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => { setMode(tab); setMessage(null); }}
                style={{
                  flex: 1,
                  padding: "0.75rem",
                  background: "none",
                  border: "none",
                  borderBottom: mode === tab ? "2px solid #c9a96e" : "2px solid transparent",
                  color: mode === tab ? "#f0ebe4" : "#9a9188",
                  cursor: "pointer",
                  fontSize: "0.7rem",
                  letterSpacing: "0.2em",
                  fontFamily: "var(--font-inter), sans-serif",
                  textTransform: "uppercase",
                  marginBottom: "-1px",
                  transition: "all 0.2s",
                }}
              >
                {tab === "signin" ? "Sign In" : "Create Account"}
              </button>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {mode === "signup" && (
              <InputField
                label="Full Name"
                type="text"
                value={fullName}
                onChange={setFullName}
                placeholder="Alejandro Mestre"
                required
              />
            )}
            <InputField
              label="Email"
              type="email"
              value={email}
              onChange={setEmail}
              placeholder="your@email.com"
              required
            />
            <InputField
              label="Password"
              type="password"
              value={password}
              onChange={setPassword}
              placeholder="••••••••"
              required
            />

            {/* Message */}
            {message && (
              <div
                style={{
                  padding: "0.75rem 1rem",
                  backgroundColor: message.type === "error" ? "rgba(220,38,38,0.1)" : "rgba(201,169,110,0.1)",
                  border: `1px solid ${message.type === "error" ? "rgba(220,38,38,0.3)" : "rgba(201,169,110,0.3)"}`,
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "0.8rem",
                  color: message.type === "error" ? "#f87171" : "#c9a96e",
                  lineHeight: 1.5,
                }}
              >
                {message.text}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              style={{
                padding: "1rem",
                backgroundColor: loading ? "#2a2a2a" : "#c9a96e",
                color: loading ? "#9a9188" : "#0a0a0a",
                border: "none",
                cursor: loading ? "not-allowed" : "pointer",
                fontSize: "0.75rem",
                letterSpacing: "0.2em",
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 500,
                transition: "background-color 0.2s",
                marginTop: "0.5rem",
              }}
            >
              {loading ? "PLEASE WAIT..." : mode === "signin" ? "SIGN IN" : "CREATE ACCOUNT"}
            </button>
          </form>
        </div>

        {/* Back link */}
        <p
          style={{
            textAlign: "center",
            marginTop: "1.5rem",
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "0.8rem",
            color: "#9a9188",
          }}
        >
          <Link
            href="/"
            style={{ color: "#9a9188", textDecoration: "none" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#f0ebe4")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#9a9188")}
          >
            ← Back to A.Mestre
          </Link>
        </p>
      </div>
    </div>
  );
}

function InputField({
  label,
  type,
  value,
  onChange,
  placeholder,
  required,
}: {
  label: string;
  type: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
      <label
        style={{
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: "0.7rem",
          letterSpacing: "0.15em",
          color: "#9a9188",
          textTransform: "uppercase",
        }}
      >
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        style={{
          padding: "0.75rem 1rem",
          backgroundColor: "#0a0a0a",
          border: "1px solid #2a2a2a",
          color: "#f0ebe4",
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: "0.9rem",
          outline: "none",
          transition: "border-color 0.2s",
        }}
        onFocus={(e) => (e.currentTarget.style.borderColor = "#c9a96e")}
        onBlur={(e) => (e.currentTarget.style.borderColor = "#2a2a2a")}
      />
    </div>
  );
}
