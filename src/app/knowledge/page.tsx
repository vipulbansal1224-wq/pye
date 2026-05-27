"use client";

import React, { useState } from "react";

const FAQ_ITEMS = [
  {
    question: "Are PYE pliers handles 1000V rated?",
    answer: "Yes. All PYE insulated lineman and combination pliers feature heavy thick-walled sleeves tested and endorsed up to 10,000V AC under active Bureau of Indian Standards (BIS) parameters to ensure absolute protection in heavy power distributions."
  },
  {
    question: "Can I cut hard materials flush to a surface with PYE pliers?",
    answer: "Yes. Our diagonal cutting pliers are manufactured with induction-hardened blades capable of close cutting operations on hard copper and steel wires without structural wear."
  },
  {
    question: "Does PYE Tools offer a warranty on its hand tools?",
    answer: "Yes. We offer a comprehensive material and manufacturing warranty on all professional tools. If any PYE tool fails due to metallurgical defect under normal operating conditions, it will be repaired or replaced by our dealer cell."
  },
  {
    question: "What lubrication is recommended for maintaining pliers?",
    answer: "We recommend cleaning the pivot joints with standard degreaser and applying high-grade anti-rust machine oil or dry lubricating sprays periodically to maintain silky-smooth mechanical action."
  },
  {
    question: "Where can I purchase genuine PYE pliers and wrenches?",
    answer: "PYE maintains a robust distributor chain of over 500 authorized retail outlets in India. For overseas operations (USA, CIS, Middle East), we dispatch containers directly to authorized state distributors."
  }
];

export default function Knowledge() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="container section-padding animate-fade">
      {/* Title */}
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <span style={{ color: "var(--primary)", fontWeight: 700, textTransform: "uppercase", fontSize: "0.85rem", letterSpacing: "0.15em" }}>
          PYE Technical Centre
        </span>
        <h1 style={{ fontSize: "3.2rem", marginTop: "12px", marginBottom: "20px" }}>Knowledge Base &amp; FAQs</h1>
        <p style={{ maxWidth: "600px", margin: "0 auto" }}>
          Understand the engineering physics of hand tools, lever multiplication ratios, and general maintenance guidelines.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: "60px", alignItems: "flex-start" }}>
        {/* Left Column: Pliers Engineering Leverage Article */}
        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          <h2 style={{ fontSize: "1.8rem", color: "white", fontWeight: "700" }}>Tool Engineering: The Leverage Principle</h2>
          
          <div className="glass-card" style={{ padding: "40px", lineHeight: "1.7" }}>
            <span style={{ color: "var(--primary)", fontWeight: 700, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Mechanical Leverage
            </span>
            <h3 style={{ fontSize: "1.3rem", color: "white", margin: "8px 0 16px 0" }}>Archimedes Law &amp; Pliers Design</h3>
            
            <p style={{ marginBottom: "16px" }}>
              The entire mechanical efficiency of combination pliers and wire-cutters goes back to the Greek scholar Archimedes: <strong>&quot;Effort times effort arm equals load times load arm&quot;</strong>.
            </p>
            <p style={{ marginBottom: "16px" }}>
              In plier mechanics, two symmetric levers pivot around a central joint. The hand grip area represents the <strong>effort arm</strong>, while the gripping jaws or cutting edges act as the <strong>load arm</strong>.
            </p>
            <p style={{ marginBottom: "16px" }}>
              By shifting the mechanical fulcrum (the joint) as close as possible to the cutting edge, PYE engineers minimized the load arm. This special joint geometry amplifies manual hand grip up to <strong>39 times</strong> at the cutting interface.
            </p>
            
            <div style={{ 
              background: "rgba(255, 94, 20, 0.05)", 
              borderLeft: "3px solid var(--primary)", 
              padding: "16px", 
              borderRadius: "4px",
              fontSize: "0.88rem",
              marginTop: "24px"
            }}>
              <strong>Engineering Proof:</strong> With an ordinary manual hand force of 500 Newtons, a PYE high-leverage plier generates an incredible 19,500 Newtons of shear force at the jaw intersection—allowing effortless cutting of piano wires.
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Accordion FAQs */}
        <div>
          <h2 style={{ fontSize: "1.8rem", color: "white", fontWeight: "700", marginBottom: "32px" }}>Frequently Asked Questions</h2>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {FAQ_ITEMS.map((item, idx) => (
              <div 
                key={idx} 
                className="glass-card" 
                style={{ 
                  overflow: "hidden",
                  border: openFaq === idx ? "1px solid rgba(255, 94, 20, 0.3)" : "1px solid var(--border)"
                }}
              >
                <button 
                  onClick={() => toggleFaq(idx)}
                  style={{ 
                    width: "100%", 
                    padding: "24px", 
                    textAlign: "left", 
                    display: "flex", 
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontWeight: "700",
                    fontSize: "1.05rem",
                    color: openFaq === idx ? "var(--primary)" : "white"
                  }}
                >
                  <span>{item.question}</span>
                  <span style={{ fontSize: "1.2rem", transition: "transform 0.3s", transform: openFaq === idx ? "rotate(45deg)" : "none" }}>
                    ＋
                  </span>
                </button>
                
                {openFaq === idx && (
                  <div style={{ 
                    padding: "0 24px 24px 24px", 
                    color: "var(--text-muted)", 
                    fontSize: "0.95rem",
                    lineHeight: "1.6",
                    borderTop: "1px solid rgba(255, 255, 255, 0.04)",
                    paddingTop: "16px",
                    animation: "fadeIn 0.3s ease"
                  }}>
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
