import { useState } from "react";
import { Link } from "react-router-dom";
const FAQS = [
  {
    question: "What is ZenCoders?",
    answer:
      "ZenCoders is the coding society of JIIT, focused on helping students learn, build projects, participate in events, and grow together as a tech community.",
  },
  {
    question: "Who can join ZenCoders?",
    answer:
      "Any JIIT student who is interested in coding, technology, design, or learning new skills can join ZenCoders.",
  },
  {
    question: "Do I need prior coding experience to join?",
    answer:
      "No. Beginners are welcome. ZenCoders provides a space to learn, collaborate, and improve at your own pace.",
  },
  {
    question: "What kind of events does ZenCoders organise?",
    answer:
      "We organise workshops, coding sessions, hackathons, technical events, speaker sessions, and community activities.",
  },
  {
    question: "How can I join the team?",
    answer:
      "Keep an eye on ZenCoders announcements and social-media pages for recruitment updates and application forms.",
  },
  {
    question: "Which campuses does ZenCoders represent?",
    answer:
      "ZenCoders has teams at JIIT Sector 62 and JIIT Sector 128, working together as one community.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "100px 20px 60px",
       background:
  "radial-gradient(ellipse at 50% 35%, #101a37 0%, #060914 45%, #020305 100%)",
position: "relative",
        color: "#fff",
        fontFamily: "'Rajdhani', sans-serif",
      }}
    >
      <Link
  to="/"
  style={{
    position: "absolute",
    top: 24,
    left: 28,
    color: "#C9A84C",
    textDecoration: "none",
    fontFamily: "'Cinzel', serif",
    fontSize: "0.75rem",
    fontWeight: 700,
    letterSpacing: "0.14em",
    border: "1px solid rgba(201,168,76,0.5)",
    borderRadius: 6,
    padding: "10px 14px",
  }}
>
  ← HOME
</Link>
      <div style={{ maxWidth: 850, margin: "0 auto" }}>
        <p
          style={{
            color: "#C9A84C",
            textAlign: "center",
            letterSpacing: "0.28em",
            fontSize: "0.8rem",
            margin: "0 0 12px",
            fontWeight: 700,
          }}
        >
          ZENCODERS
        </p>

        <h1
          style={{
            fontFamily: "'Cinzel', serif",
            textAlign: "center",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            letterSpacing: "0.08em",
            margin: "0 0 14px",
          }}
        >
          FREQUENTLY ASKED QUESTIONS
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "rgba(255,255,255,0.65)",
            fontSize: "1rem",
            margin: "0 0 40px",
          }}
        >
          Everything you need to know about ZenCoders.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                style={{
                  border: `1px solid ${
                    isOpen ? "rgba(201,168,76,0.8)" : "rgba(255,255,255,0.12)"
                  }`,
                  borderRadius: 12,
                  background: isOpen
                    ? "rgba(201,168,76,0.09)"
                    : "rgba(255,255,255,0.04)",
                  overflow: "hidden",
                  transition: "all 0.25s ease",
                }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  style={{
                    width: "100%",
                    padding: "20px 22px",
                    border: "none",
                    background: "transparent",
                    color: "#fff",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    textAlign: "left",
                    fontFamily: "'Rajdhani', sans-serif",
                    fontSize: "1.08rem",
                    fontWeight: 700,
                  }}
                >
                  {faq.question}
                  <span
                    style={{
                      color: "#C9A84C",
                      fontSize: "1.5rem",
                      marginLeft: 16,
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      transition: "transform 0.25s ease",
                    }}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <p
                    style={{
                      margin: "0",
                      padding: "0 22px 22px",
                      color: "rgba(255,255,255,0.72)",
                      fontSize: "1rem",
                      lineHeight: 1.7,
                    }}
                  >
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
