"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

function getShoeTypes(t: typeof translations.en) {
  return [
    {
      id: "penny-loafer",
      label: t.pennyLoafer,
      descriptionKey: "pennyLoaferDesc",
      image: "https://images.unsplash.com/photo-1548219534-0f1e4a6b2d10?w=400&h=500&fit=crop",
      materials: [
        { id: "black-satin", labelKey: "blackSatinLeather", descriptionKey: "blackSatinDesc" },
        { id: "grain-black", labelKey: "grainBlackLeather", descriptionKey: "grainBlackDesc" },
        { id: "brown-suade", labelKey: "brownSuade", descriptionKey: "brownSuadeDesc" },
      ],
    },
    {
      id: "oxford",
      label: t.oxford,
      descriptionKey: "oxfordDesc",
      image: "https://images.unsplash.com/photo-1548219534-0f1e4a6b2d10?w=400&h=500&fit=crop",
      materials: [
        { id: "black-calf", labelKey: "blackCalfLeather", descriptionKey: "blackCalfDesc" },
      ],
    },
    {
      id: "espadrille",
      label: t.espadrille,
      descriptionKey: "espadrilleDesc",
      image: "https://images.unsplash.com/photo-1548219534-0f1e4a6b2d10?w=400&h=500&fit=crop",
      materials: [
        { id: "black-suade", labelKey: "blackSuade", descriptionKey: "blackSuadeDesc" },
        { id: "brown-suade", labelKey: "brownSuade", descriptionKey: "brownSuadeEspadrilleDesc" },
      ],
    },
  ];
}

export default function CustomizerSection() {
  const [selectedShoe, setSelectedShoe] = useState("penny-loafer");
  const [selectedMaterial, setSelectedMaterial] = useState("black-satin");
  const { language } = useLanguage();
  const t = translations[language];
  const shoeTypes = getShoeTypes(t);

  const currentShoe = shoeTypes.find((s) => s.id === selectedShoe)!;

  // Reset material when shoe changes
  const handleShoeChange = (shoeId: string) => {
    setSelectedShoe(shoeId);
    const shoe = shoeTypes.find((s) => s.id === shoeId)!;
    setSelectedMaterial(shoe.materials[0].id);
  };

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
              color: "#000000",
              marginBottom: "1rem",
              fontFamily: "var(--font-inter), sans-serif",
            }}
          >
            {t.customizeEyebrow}
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
            {t.customizeHeadline}
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
                {" "}·{" "}
                {t[currentShoe.materials.find((m) => m.id === selectedMaterial)?.labelKey as keyof typeof t]}
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
                {t.chooseStyle}
              </h3>
              {shoeTypes.map((shoe) => {
                const isSelected = selectedShoe === shoe.id;
                return (
                  <button
                    key={shoe.id}
                    onClick={() => handleShoeChange(shoe.id)}
                    style={{
                      padding: "1.25rem 1.5rem",
                      background: isSelected ? "#f0ede8" : "transparent",
                      border: `1px solid ${isSelected ? "#000000" : "#d0d0d0"}`,
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
                        {t[shoe.descriptionKey as keyof typeof t]}
                      </p>
                    </div>
                    {isSelected && (
                      <span style={{ color: "#000000", fontSize: "1.2rem" }}>✓</span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Material Selection */}
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
                Select Material
              </h3>
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                {currentShoe.materials.map((material) => {
                  const isSelected = selectedMaterial === material.id;
                  return (
                    <button
                      key={material.id}
                      onClick={() => setSelectedMaterial(material.id)}
                      style={{
                        padding: "0.75rem 1.25rem",
                        background: isSelected ? "#f0ede8" : "transparent",
                        border: `1px solid ${isSelected ? "#000000" : "#d0d0d0"}`,
                        cursor: "pointer",
                        textAlign: "center",
                        transition: "all 0.2s",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        flex: 1,
                        minWidth: "140px",
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
                            fontSize: "1rem",
                            color: isSelected ? "#1a1a1a" : "#6b6b6b",
                            marginBottom: "0.2rem",
                            margin: 0,
                          }}
                        >
                          {t[material.labelKey as keyof typeof t]}
                        </p>
                        <p
                          style={{
                            fontFamily: "var(--font-inter), sans-serif",
                            fontSize: "0.7rem",
                            color: "#6b6b6b",
                            fontWeight: 300,
                            margin: 0,
                          }}
                        >
                          {t[material.descriptionKey as keyof typeof t]}
                        </p>
                      </div>
                      {isSelected && (
                        <span style={{ color: "#000000", fontSize: "1.2rem", marginTop: "0.25rem" }}>✓</span>
                      )}
                    </button>
                  );
                })}
              </div>
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
              Each shoe is handcrafted to your exact measurements. The design is fixed—the customization comes from the perfect fit to your feet and your choice of material.
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
