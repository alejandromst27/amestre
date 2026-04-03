"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How accurate is the AI foot scanning?",
    answer:
      "Our AI-powered foot scanning technology captures measurements with 2-4mm precision using standard smartphone cameras. We use a reference object (like an A4 sheet) to calibrate scale. This accuracy is sufficient for custom shoe fitting and can be refined during the sample fitting phase if needed.",
  },
  {
    question: "What information do I need to provide for the scan?",
    answer:
      "You'll need to take 3 photos: top view, lateral view (inside), and lateral view (outside) of your foot. We recommend natural lighting and having a standard A4 sheet nearby as a reference. The process takes about 2-3 minutes and can be done from your phone.",
  },
  {
    question: "Can I customize the heel height and toe shape?",
    answer:
      "Absolutely. We offer multiple options: toe shapes (round, pointed, square), heel heights (flat, 1 inch, 2 inch), closures (lace-up, buckle, slip-on), and sole types (leather, rubber). You can also specify custom colors and materials during the customization phase.",
  },
  {
    question: "What happens during the sample fitting?",
    answer:
      "After we craft your shoes based on your scanned measurements and customization choices, we send you a sample for fitting. You can try them on and provide feedback. Our master cobblers then make any necessary adjustments and create your final pair with those refinements.",
  },
  {
    question: "How long does the entire process take?",
    answer:
      "From foot scan to final delivery typically takes 6-8 weeks. This includes customization consultation (1-2 weeks), last creation (1 week), initial sample production (2-3 weeks), sample fitting and adjustments (1 week), and final production and delivery (1-2 weeks).",
  },
  {
    question: "What materials are available for the upper and sole?",
    answer:
      "We work with premium materials including full-grain leather, suede, and exotic skins for the upper. For soles, you can choose traditional leather (elegant, develops patina) or durable rubber (practical, long-lasting). All materials are sourced from trusted suppliers in Italy and Spain.",
  },
  {
    question: "What if the fit isn't perfect on the first pair?",
    answer:
      "We stand behind our craftsmanship. If adjustments are needed after the sample fitting, we'll make them before creating your final pair. Since we've created a custom last (mold) specifically for your feet, future pairs will maintain the same fit with minimal adjustments.",
  },
  {
    question: "How much do bespoke shoes typically cost?",
    answer:
      "Bespoke shoes start at $1,200 and can go higher depending on materials and customization. Made-to-measure options start at $800. Each pair is handcrafted by master cobblers, which reflects in the price and exceptional quality. We believe this investment creates shoes that last decades.",
  },
];

export default function FAQSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      style={{
        backgroundColor: "#faf8f5",
        padding: "8rem 2rem",
        borderTop: "1px solid #e0e0e0",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
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
            FREQUENTLY ASKED
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
            Questions about bespoke footwear
          </h2>
        </div>

        {/* FAQs */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              style={{
                borderTop: "1px solid #e0e0e0",
                paddingTop: expandedIndex === index ? "1.5rem" : "1.25rem",
                paddingBottom: expandedIndex === index ? "1.5rem" : "1.25rem",
              }}
            >
              {/* Question */}
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  textAlign: "left",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: "1.3rem",
                    fontWeight: 400,
                    color: "#1a1a1a",
                    lineHeight: 1.3,
                    flex: 1,
                  }}
                >
                  {faq.question}
                </h3>
                <span
                  style={{
                    fontSize: "1.5rem",
                    color: "#c9a96e",
                    minWidth: "30px",
                    textAlign: "right",
                    transition: "transform 0.2s",
                    transform: expandedIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  ↓
                </span>
              </button>

              {/* Answer */}
              {expandedIndex === index && (
                <p
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "0.95rem",
                    lineHeight: 1.8,
                    color: "#6b6b6b",
                    fontWeight: 300,
                    marginTop: "1rem",
                  }}
                >
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
          {/* Last border */}
          <div style={{ borderTop: "1px solid #e0e0e0" }} />
        </div>

        {/* CTA */}
        <div
          style={{
            marginTop: "4rem",
            padding: "3rem",
            backgroundColor: "#f0ede8",
            border: "1px solid #d0d0d0",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "0.95rem",
              color: "#6b6b6b",
              marginBottom: "1.5rem",
              fontWeight: 300,
            }}
          >
            Still have questions? We're here to help.
          </p>
          <a
            href="mailto:hello@a-mestre.com"
            style={{
              display: "inline-block",
              padding: "0.75rem 2rem",
              backgroundColor: "#c9a96e",
              color: "#0a0a0a",
              textDecoration: "none",
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 500,
              transition: "background-color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#e0c99a")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#c9a96e")}
          >
            GET IN TOUCH
          </a>
        </div>
      </div>
    </section>
  );
}
