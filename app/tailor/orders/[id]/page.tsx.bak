"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase-browser";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

const STATUSES = [
  "pending",
  "measuring",
  "pattern_drafting",
  "production",
  "fitting",
  "alterations",
  "delivered",
];

const STATUS_LABELS: Record<string, string> = {
  pending: "Pending",
  measuring: "Measuring",
  pattern_drafting: "Pattern Drafting",
  production: "Production",
  fitting: "Fitting",
  alterations: "Alterations",
  delivered: "Delivered",
};

export default function OrderDetail() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const supabase = createClient();

  const [order, setOrder] = useState<any>(null);
  const [measurements, setMeasurements] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState("");
  const [notes, setNotes] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    async function load() {
      const { data: orderData } = await supabase
        .from("orders")
        .select(`
          *,
          profiles!orders_customer_id_fkey (full_name, phone),
          silhouettes (name, description, category)
        `)
        .eq("id", id)
        .single();

      if (!orderData) { router.push("/tailor"); return; }

      setOrder(orderData);
      setStatus(orderData.status);
      setNotes(orderData.notes ?? "");

      const { data: measurementData } = await supabase
        .from("measurements")
        .select("*")
        .eq("order_id", id)
        .maybeSingle();

      setMeasurements(measurementData);
      setLoading(false);
    }
    load();
  }, [id]);

  async function saveChanges() {
    setSaving(true);
    await supabase
      .from("orders")
      .update({ status, notes, updated_at: new Date().toISOString() })
      .eq("id", id);
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  if (loading) {
    return (
      <div style={{ minHeight: "100vh", backgroundColor: "#0a0a0a", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <p style={{ fontFamily: "var(--font-inter), sans-serif", color: "#9a9188", fontSize: "0.85rem" }}>Loading order...</p>
      </div>
    );
  }

  const measurementFields = [
    { label: "Chest", key: "chest_cm" },
    { label: "Waist", key: "waist_cm" },
    { label: "Hips", key: "hips_cm" },
    { label: "Shoulder", key: "shoulder_cm" },
    { label: "Sleeve", key: "sleeve_cm" },
    { label: "Inseam", key: "inseam_cm" },
  ];

  const customizations = order.customizations ?? {};

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0a0a0a" }}>
      {/* Header */}
      <div
        style={{
          borderBottom: "1px solid #2a2a2a",
          padding: "1.5rem 2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: 0,
          backgroundColor: "#0a0a0a",
          zIndex: 10,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <Link
            href="/tailor"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "0.75rem",
              color: "#9a9188",
              textDecoration: "none",
              letterSpacing: "0.1em",
            }}
          >
            ← ORDERS
          </Link>
          <span style={{ color: "#2a2a2a" }}>|</span>
          <span
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "1.5rem",
              letterSpacing: "0.15em",
              color: "#f0ebe4",
            }}
          >
            A.Mestre
          </span>
          <span
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "0.65rem",
              letterSpacing: "0.2em",
              color: "#c9a96e",
            }}
          >
            TAILOR PORTAL
          </span>
        </div>

        {/* Save button */}
        <button
          onClick={saveChanges}
          disabled={saving}
          style={{
            padding: "0.5rem 1.5rem",
            backgroundColor: saved ? "transparent" : "#c9a96e",
            border: saved ? "1px solid #c9a96e" : "none",
            color: saved ? "#c9a96e" : "#0a0a0a",
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "0.7rem",
            letterSpacing: "0.15em",
            cursor: saving ? "not-allowed" : "pointer",
            transition: "all 0.2s",
          }}
        >
          {saving ? "SAVING..." : saved ? "SAVED ✓" : "SAVE CHANGES"}
        </button>
      </div>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "2.5rem 2rem" }}>
        {/* Client + Order info */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1.5rem",
            marginBottom: "2rem",
          }}
          className="order-top-grid"
        >
          {/* Client */}
          <Section title="Client">
            <InfoRow label="Name" value={order.profiles?.full_name ?? "—"} />
            <InfoRow label="Phone" value={order.profiles?.phone ?? "—"} />
            <InfoRow
              label="Order ID"
              value={`#${order.id.slice(0, 8).toUpperCase()}`}
            />
            <InfoRow
              label="Date"
              value={new Date(order.created_at).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            />
          </Section>

          {/* Garment */}
          <Section title="Garment">
            <InfoRow label="Style" value={order.silhouettes?.name ?? "Bespoke Suit"} />
            <InfoRow label="Category" value={order.silhouettes?.category ?? "Suit"} />
            {Object.entries(customizations).length > 0 ? (
              Object.entries(customizations).map(([key, val]) => (
                <InfoRow key={key} label={key.charAt(0).toUpperCase() + key.slice(1)} value={String(val)} />
              ))
            ) : (
              <InfoRow label="Customizations" value="Not specified" />
            )}
          </Section>
        </div>

        {/* Measurements */}
        <Section title="Measurements" style={{ marginBottom: "1.5rem" }}>
          {measurements ? (
            <>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                  gap: "1rem",
                  marginBottom: "0.5rem",
                }}
              >
                {measurementFields.map((f) => (
                  <div
                    key={f.key}
                    style={{
                      backgroundColor: "#0a0a0a",
                      border: "1px solid #2a2a2a",
                      padding: "1rem",
                      textAlign: "center",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-cormorant), serif",
                        fontSize: "1.6rem",
                        color: "#c9a96e",
                        fontWeight: 300,
                      }}
                    >
                      {measurements[f.key] ? `${measurements[f.key]}` : "—"}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-inter), sans-serif",
                        fontSize: "0.65rem",
                        color: "#9a9188",
                        letterSpacing: "0.1em",
                        marginTop: "0.25rem",
                      }}
                    >
                      {f.label.toUpperCase()} {measurements[f.key] ? "CM" : ""}
                    </p>
                  </div>
                ))}
              </div>
              <p
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "0.75rem",
                  color: "#9a9188",
                  marginTop: "0.75rem",
                }}
              >
                Source: {measurements.source === "3dlook" ? "3DLOOK Body Scan" : "Manual Entry"}
              </p>
            </>
          ) : (
            <p
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "0.85rem",
                color: "#9a9188",
                fontWeight: 300,
              }}
            >
              No measurements recorded yet. The client needs to complete the body scan in the app.
            </p>
          )}
        </Section>

        {/* Status + Notes */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "1.5rem",
          }}
          className="order-bottom-grid"
        >
          {/* Status */}
          <Section title="Order Status">
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {STATUSES.map((s) => (
                <button
                  key={s}
                  onClick={() => setStatus(s)}
                  style={{
                    padding: "0.6rem 1rem",
                    background: status === s ? "#1e1e1e" : "transparent",
                    border: `1px solid ${status === s ? "#c9a96e" : "#2a2a2a"}`,
                    color: status === s ? "#f0ebe4" : "#9a9188",
                    cursor: "pointer",
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "0.8rem",
                    textAlign: "left",
                    transition: "all 0.15s",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  {status === s && (
                    <span style={{ color: "#c9a96e", fontSize: "0.7rem" }}>●</span>
                  )}
                  {STATUS_LABELS[s]}
                </button>
              ))}
            </div>
          </Section>

          {/* Notes */}
          <Section title="Tailor Notes">
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add fitting notes, alteration details, or any observations about this order..."
              rows={10}
              style={{
                width: "100%",
                backgroundColor: "#0a0a0a",
                border: "1px solid #2a2a2a",
                color: "#f0ebe4",
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "0.9rem",
                padding: "1rem",
                resize: "vertical",
                outline: "none",
                lineHeight: 1.7,
                fontWeight: 300,
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "#c9a96e")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "#2a2a2a")}
            />
          </Section>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .order-top-grid, .order-bottom-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

function Section({
  title,
  children,
  style,
}: {
  title: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        backgroundColor: "#141414",
        border: "1px solid #2a2a2a",
        padding: "1.75rem",
        ...style,
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: "0.65rem",
          letterSpacing: "0.2em",
          color: "#c9a96e",
          marginBottom: "1.25rem",
        }}
      >
        {title.toUpperCase()}
      </p>
      {children}
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "0.5rem 0",
        borderBottom: "1px solid #1e1e1e",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: "0.8rem",
          color: "#9a9188",
          fontWeight: 300,
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: "0.8rem",
          color: "#f0ebe4",
          fontWeight: 300,
        }}
      >
        {value}
      </span>
    </div>
  );
}
