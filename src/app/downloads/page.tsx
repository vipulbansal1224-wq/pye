"use client";

import React from "react";

const DOWNLOAD_ITEMS = [
  {
    title: "Complete Product Catalogue",
    desc: "A comprehensive PDF catalogue containing all dimensions, material specifications, and leverage ratios of our pliers and wrenches.",
    file: "/images/2025/05/FIEO-2025-26.pdf", // Using the copied FIEO/catalogue PDF
    size: "4.8 MB",
    type: "Product Brochure"
  },
  {
    title: "ISO 9001:2015 QMS Certificate",
    desc: "Our quality systems compliance documentation audited and certified by TUV Rheinland of Germany.",
    file: "/images/2025/05/ISO-9001.pdf",
    size: "1.2 MB",
    type: "Compliance Certificate"
  },
  {
    title: "ISO 50001:2018 EnMS Certificate",
    desc: "Energy Management certification issued by BSI India confirming clean production lines and green energy usage.",
    file: "/images/2025/05/ISO-50001.pdf",
    size: "1.4 MB",
    type: "Compliance Certificate"
  },
  {
    title: "ISI Plier Endorsement Certificate",
    desc: "Bureau of Indian Standards endorsement approving our lineman and electrician pliers for active field deployments.",
    file: "/images/2025/05/ISI-Endorsement-13-02-2026-PLIER.pdf",
    size: "2.1 MB",
    type: "BIS Endorsement"
  }
];

export default function Downloads() {
  return (
    <div className="container section-padding animate-fade">
      {/* Title */}
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <span style={{ color: "var(--primary)", fontWeight: 700, textTransform: "uppercase", fontSize: "0.85rem", letterSpacing: "0.15em" }}>
          Resource Library
        </span>
        <h1 style={{ fontSize: "3.2rem", marginTop: "12px", marginBottom: "20px" }}>Document Downloads</h1>
        <p style={{ maxWidth: "600px", margin: "0 auto" }}>
          Access technical brochures, material specification sheets, ISO audits, and quality compliance certificates directly from our Ludhiana corporate office.
        </p>
      </div>

      {/* Grid of Download Items */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }}>
        {DOWNLOAD_ITEMS.map((item, idx) => (
          <div key={idx} className="glass-card" style={{ padding: "40px", display: "flex", flexDirection: "column", justifySelf: "stretch" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
              <span style={{ 
                color: "var(--primary)", 
                fontSize: "0.75rem", 
                fontWeight: 700, 
                textTransform: "uppercase", 
                letterSpacing: "0.1em",
                background: "rgba(255, 94, 20, 0.1)",
                padding: "4px 12px",
                borderRadius: "4px"
              }}>
                {item.type}
              </span>
              <span style={{ fontSize: "0.82rem", color: "var(--text-muted)", fontWeight: "600" }}>{item.size}</span>
            </div>
            
            <h3 style={{ fontSize: "1.4rem", color: "white", marginBottom: "12px", fontWeight: "700" }}>{item.title}</h3>
            <p style={{ marginBottom: "30px", flexGrow: 1, fontSize: "0.92rem" }}>{item.desc}</p>
            
            <a 
              href={item.file} 
              download 
              className="contact-btn" 
              style={{ textAlign: "center", display: "block", padding: "12px", fontSize: "0.95rem" }}
            >
              📥 Download PDF File
            </a>
          </div>
        ))}
      </div>

      {/* Custom request division */}
      <div className="glass-card" style={{ 
        marginTop: "60px", 
        padding: "40px", 
        textAlign: "center",
        border: "1px solid rgba(255,94,20,0.2)",
        background: "linear-gradient(180deg, rgba(26,30,36,0.6) 0%, rgba(255,94,20,0.03) 100%)"
      }}>
        <h3 style={{ fontSize: "1.6rem", color: "white", marginBottom: "12px" }}>Looking for customized price sheets?</h3>
        <p style={{ maxWidth: "600px", margin: "0 auto 24px auto", color: "var(--text-muted)" }}>
          We provide custom wholesale prices, bulk dealer margins, and export container logs on demand. Reach out to our customer care cell directly.
        </p>
        <a href="/contact" className="product-link" style={{ fontWeight: "bold", fontSize: "1.05rem" }}>
          Contact Sales Cell &gt;&gt;
        </a>
      </div>
    </div>
  );
}
