const steps = [
  {
    number: "01",
    title: "Choose Your Style",
    description:
      "Browse our curated shoe collection. Tell us about your style, daily needs, and preferences — we match you with the perfect silhouette.",
  },
  {
    number: "02",
    title: "Foot Scan",
    description:
      "Using your smartphone and our AI-powered app, snap a few photos of your foot. We capture your exact measurements with precision.",
  },
  {
    number: "03",
    title: "Customize",
    description:
      "Select your materials, colors, heel height, toe shape, and sole type. Our craftsmen create a custom last (mold) designed specifically for your feet.",
  },
  {
    number: "04",
    title: "Sample Fitting",
    description:
      "We send a sample shoe for your fitting. Consult with our master cobblers via video call or in person — every detail is perfected.",
  },
  {
    number: "05",
    title: "Final Delivery",
    description:
      "Your bespoke shoes are handcrafted and delivered to your door. Shoes made entirely for your feet.",
  },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      style={{
        backgroundColor: "#faf8f5",
        padding: "8rem 2rem",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "5rem", maxWidth: "600px" }}>
          <p
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.4em",
              color: "#c9a96e",
              marginBottom: "1rem",
              fontFamily: "var(--font-inter), sans-serif",
            }}
          >
            THE PROCESS
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
            Five steps to shoes that fit like no other
          </h2>
        </div>

        {/* Steps */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {steps.map((step, i) => (
            <div
              key={step.number}
              style={{
                display: "grid",
                gridTemplateColumns: "80px 1fr",
                gap: "2rem",
                padding: "2.5rem 0",
                borderTop: "1px solid #e0e0e0",
                alignItems: "start",
              }}
            >
              {/* Number */}
              <span
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: "1rem",
                  color: "#c9a96e",
                  letterSpacing: "0.1em",
                  paddingTop: "0.25rem",
                }}
              >
                {step.number}
              </span>

              {/* Content */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 2fr",
                  gap: "2rem",
                  alignItems: "start",
                }}
                className="step-content"
              >
                <h3
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: "1.6rem",
                    fontWeight: 400,
                    color: "#1a1a1a",
                    lineHeight: 1.2,
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "0.9rem",
                    lineHeight: 1.8,
                    color: "#6b6b6b",
                    fontWeight: 300,
                  }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
          {/* Last border */}
          <div style={{ borderTop: "1px solid #e0e0e0" }} />
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .step-content {
            grid-template-columns: 1fr !important;
            gap: 0.75rem !important;
          }
        }
      `}</style>
    </section>
  );
}
