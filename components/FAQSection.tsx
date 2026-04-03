"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { faqTranslations, translations } from "@/lib/translations";

export default function FAQSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const { language } = useLanguage();
  const faqs = faqTranslations[language];

  return (
    <section
      id="faq"
      style={{
        backgroundColor: "#faf8f5",
        padding: "8rem 2rem",
        borderTop: "1px solid #e0e0e0",
      }}
    >
      {/* FAQSection - v2 */}
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
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
            {translations[language].frequentlyAsked}
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
            {translations[language].questionsAbout}
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
                    color: "#000000",
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
            {translations[language].stillHaveQuestions}
          </p>
          <a
            href="mailto:hello@a-mestre.com"
            style={{
              display: "inline-block",
              padding: "0.75rem 2rem",
              backgroundColor: "#000000",
              color: "#ffffff",
              textDecoration: "none",
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 500,
              transition: "background-color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#333333")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#000000")}
          >
            {translations[language].getInTouch}
          </a>
        </div>
      </div>
    </section>
  );
}
