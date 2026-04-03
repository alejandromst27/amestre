"use client";

import { useState } from "react";

const shoeTypes = [
  {
    id: "penny-loafer",
    label: "Penny Loafer",
    description: "Timeless classic with a sleek silhouette",
    image: "https://images.unsplash.com/photo-1548219534-0f1e4a6b2d10?w=400&h=500&fit=crop",
    customizable: true,
  },
  {
    id: "oxford",
    label: "Oxford Shoe",
    description: "Elegant and formal, perfect for any occasion",
    image: "https://images.unsplash.com/photo-1548219534-0f1e4a6b2d10?w=400&h=500&fit=crop",
    customizable: true,
  },
  {
    id: "espadrille",
    label: "Espadrille",
    description: "Casual and comfortable, perfect for summer",
    image: "https://images.unsplash.com/photo-1548219534-0f1e4a6b2d10?w=400&h=500&fit=crop",
    customizable: false,
  },
];

const soleOptions = [
  { id: "leather", label: "Leather Sole", description: "Traditional and premium" },
  { id: "rubber", label: "Rubber Sole", description: "Durable and practical" },
];

export default function CustomizerSection() {
  const [selectedShoe, setSelectedShoe] = useState("penny-loafer");
  const [selectedSole, setSelectedSole] = useState("leather");

  const currentShoe = shoeTypes.find((s) => s.id === selectedShoe)!;
  const isCustomizable = currentShoe.customizable;

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
              src={currentShoe.image}
              alt={currentShoe.label}
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
                {currentShoe.label}
                {isCustomizable && selectedSole && (
                  <>
                    {" "}·{" "}
                    {soleOptions.find((s) => s.id === selectedSole)?.label}
                  </>
                )}
              </p>
            </div>
          </div>

          {/* Right: Controls */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {/* Shoe Type Selection */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <h3
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: "1rem",
                  color: "#1a1a1a",
                  marginBottom: "0.5rem",
                  letterSpacing: "0.05em",
                }}
              >
                Choose Your Style
              </h3>
              {shoeTypes.map((shoe) => {
                const isSelected = selectedShoe === shoe.id;
                return (
                  <button
                    key={shoe.id}
                    onClick={() => setSelectedShoe(shoe.id)}
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
                        {shoe.label}
                      </p>
                      <p
                        style={{
                          fontFamily: "var(--font-inter), sans-serif",
                          fontSize: "0.75rem",
                          color: "#6b6b6b",
                          fontWeight: 300,
                        }}
                      >
                        {shoe.description}
                      </p>
                    </div>
                    {isSelected && (
                      <span style={{ color: "#c9a96e", fontSize: "1.2rem" }}>✓</span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Sole Selection - Only for customizable shoes */}
            {isCustomizable ? (
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <h3
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: "1rem",
                    color: "#1a1a1a",
                    marginBottom: "0.5rem",
                    letterSpacing: "0.05em",
                  }}
                >
                  Select Sole
                </h3>
                {soleOptions.map((sole) => {
                  const isSelected = selectedSole === sole.id;
                  return (
                    <button
                      key={sole.id}
                      onClick={() => setSelectedSole(sole.id)}
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
                          {sole.label}
                        </p>
                        <p
                          style={{
                            fontFamily: "var(--font-inter), sans-serif",
                            fontSize: "0.75rem",
                            color: "#6b6b6b",
                            fontWeight: 300,
                          }}
                        >
                          {sole.description}
                        </p>
                      </div>
                      {isSelected && (
                        <span style={{ color: "#c9a96e", fontSize: "1.2rem" }}>✓</span>
                      )}
                    </button>
                  );
                })}
              </div>
            ) : (
              <div
                style={{
                  padding: "1.5rem",
                  backgroundColor: "#f0ede8",
                  border: "1px solid #d0d0d0",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "0.9rem",
                    color: "#6b6b6b",
                    fontWeight: 300,
                  }}
                >
                  This style comes in one bespoke version with no additional customization.
                </p>
              </div>
            )}

            <p
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "0.8rem",
                color: "#6b6b6b",
                lineHeight: 1.7,
                fontWeight: 300,
              }}
            >
              Each shoe is handcrafted to your exact measurements. Our master cobblers will work with you to perfect every detail.
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
