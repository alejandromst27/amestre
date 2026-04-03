"use client";

import { useState } from "react";

const options = {
  toe: [
    { id: "round", label: "Round Toe", description: "Classic and versatile" },
    { id: "pointed", label: "Pointed Toe", description: "Elegant and refined" },
    { id: "square", label: "Square Toe", description: "Modern and bold" },
  ],
  heel: [
    { id: "flat", label: "Flat", description: "Minimalist and casual" },
    { id: "1inch", label: "1 Inch", description: "Elegant, everyday wear" },
    { id: "2inch", label: "2 Inch", description: "Formal and sophisticated" },
  ],
  closure: [
    { id: "lace", label: "Lace-Up", description: "Classic and adjustable" },
    { id: "buckle", label: "Buckle", description: "Timeless and refined" },
    { id: "slip", label: "Slip-On", description: "Convenient and elegant" },
  ],
  sole: [
    { id: "leather", label: "Leather Sole", description: "Traditional and premium" },
    { id: "rubber", label: "Rubber Sole", description: "Durable and practical" },
  ],
};

type Category = keyof typeof options;

export default function CustomizerSection() {
  const [selected, setSelected] = useState({
    toe: "round",
    heel: "1inch",
    closure: "lace",
    sole: "leather",
  });

  const [activeCategory, setActiveCategory] = useState<Category>("toe");

  return (
    <section
      id="customize"
      style={{
        backgroundColor: "#faf8f5",
        padding: "8rem 2rem",
        borderTop: "1px solid #e0e0e0",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "4rem", maxWidth: "600px" }}>
          <p
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.4em",
              color: "#c9a96e",
              marginBottom: "1rem",
              fontFamily: "var(--font-inter), sans-serif",
            }}
          >
            MAKE IT YOURS
          </p>
          <h2
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 300,
              color: "#1a1a1a",
              lineHeight: 1.1,
            }}
          >
            Your shoe, your way
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "start",
          }}
          className="customizer-grid"
        >
          {/* Left: Visual Preview */}
          <div
            style={{
              aspectRatio: "3/4",
              backgroundColor: "#f0ede8",
              border: "1px solid #d0d0d0",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Shoe illustration */}
            <img
              src="https://images.unsplash.com/photo-1548219534-0f1e4a6b2d10?w=400&h=500&fit=crop"
              alt="Bespoke Shoe"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />

            {/* Label */}
            <div
              style={{
                position: "absolute",
                bottom: "1.5rem",
                left: "1.5rem",
                right: "1.5rem",
                padding: "1rem",
                backgroundColor: "rgba(250,248,245,0.95)",
                borderTop: "1px solid #d0d0d0",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: "0.7rem",
                  color: "#6b6b6b",
                  letterSpacing: "0.1em",
                }}
              >
                {options.toe.find((o) => o.id === selected.toe)?.label} ·{" "}
                {options.heel.find((o) => o.id === selected.heel)?.label} ·{" "}
                {options.closure.find((o) => o.id === selected.closure)?.label}
              </p>
            </div>
          </div>

          {/* Right: Controls */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {/* Category tabs */}
            <div style={{ display: "flex", gap: "0", borderBottom: "1px solid #d0d0d0" }}>
              {(Object.keys(options) as Category[]).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: "0.75rem 1.5rem",
                    background: "none",
                    border: "none",
                    borderBottom: activeCategory === cat ? "2px solid #c9a96e" : "2px solid transparent",
                    color: activeCategory === cat ? "#1a1a1a" : "#6b6b6b",
                    cursor: "pointer",
                    fontSize: "0.7rem",
                    letterSpacing: "0.15em",
                    fontFamily: "var(--font-inter), sans-serif",
                    textTransform: "uppercase",
                    transition: "all 0.2s",
                    marginBottom: "-1px",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Options */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {options[activeCategory].map((option) => {
                const isSelected = selected[activeCategory] === option.id;
                return (
                  <button
                    key={option.id}
                    onClick={() =>
                      setSelected((prev) => ({ ...prev, [activeCategory]: option.id }))
                    }
                    style={{
                      padding: "1.25rem 1.5rem",
                      background: isSelected ? "#f0ede8" : "transparent",
                      border: `1px solid ${isSelected ? "#c9a96e" : "#d0d0d0"}`,
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "all 0.2s",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                    onMouseEnter={(e) => {
                      if (!isSelected) e.currentTarget.style.borderColor = "#6b6b6b";
                    }}
                    onMouseLeave={(e) => {
                      if (!isSelected) e.currentTarget.style.borderColor = "#d0d0d0";
                    }}
                  >
                    <div>
                      <p
                        style={{
                          fontFamily: "var(--font-cormorant), serif",
                          fontSize: "1.2rem",
                          color: isSelected ? "#1a1a1a" : "#6b6b6b",
                          marginBottom: "0.2rem",
                        }}
                      >
                        {option.label}
                      </p>
                      <p
                        style={{
                          fontFamily: "var(--font-inter), sans-serif",
                          fontSize: "0.75rem",
                          color: "#6b6b6b",
                          fontWeight: 300,
                        }}
                      >
                        {option.description}
                      </p>
                    </div>
                    {isSelected && (
                      <span style={{ color: "#c9a96e", fontSize: "1.2rem" }}>✓</span>
                    )}
                  </button>
                );
              })}
            </div>

            <p
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "0.8rem",
                color: "#6b6b6b",
                lineHeight: 1.7,
                fontWeight: 300,
              }}
            >
              These are just a few of the choices available. Our master cobblers will work with you to perfect every detail of your custom shoes.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .customizer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
