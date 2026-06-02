"use client";

import React from "react";
import Link from "next/link";

const CERTIFICATES = [
  {
    title: "ISO 9001 Certificate",
    issuer: "TUV Rheinland of Germany",
    type: "Quality Management System",
    file: "/images/2025/05/ISO-9001.pdf",
    image: "/images/2025/05/iso-50001.png"
  },
  {
    title: "ISO 50001 Certificate",
    issuer: "BSI (British Standards Institution) India",
    type: "Energy Management System",
    file: "/images/2025/05/ISO-50001.pdf",
    image: "/images/2025/05/iso-50001.png"
  },
  {
    title: "ISI Plier Endorsement",
    issuer: "Bureau of Indian Standards (BIS)",
    type: "ISI Mark Endorsement",
    file: "/images/2025/05/ISI-Endorsement-13-02-2026-PLIER.pdf",
    image: "/images/2025/05/ISI-Endorsement.png"
  },
  {
    title: "FIEO Status",
    issuer: "Federation of Indian Export Organisations",
    type: "One Star Export House",
    file: "/images/2025/05/FIEO-2025-26.pdf",
    image: "/images/2025/05/fieo.png"
  }
];

export default function About() {
  return (
    <div className="container section-padding animate-fade" style={{ display: "flex", flexDirection: "column", gap: "60px" }}>
      {/* Page Title Header */}
      <div style={{ textAlign: "center" }}>
        <span style={{ color: "var(--primary)", fontWeight: 700, textTransform: "uppercase", fontSize: "0.85rem", letterSpacing: "0.15em" }}>
          Who We Are
        </span>
        <h1 style={{ fontSize: "3rem", marginTop: "12px", marginBottom: "20px" }}>About PYE Tools</h1>
        <p style={{ maxWidth: "600px", margin: "0 auto" }}>
          Discover the history, mission, core beliefs, and certified credentials of India&apos;s premier hand tools manufacturer since 1983.
        </p>
      </div>

      {/* Main Vision Banner Image if available */}
      <div style={{ width: "100%", height: "350px", overflow: "hidden", borderRadius: "16px" }}>
        <img 
          src="/images/2022/12/about-head.jpg" 
          alt="PYE Tools Plant" 
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/images/2025/04/ban-3-scaled.png";
          }}
        />
      </div>

      {/* Legacy & History Section */}
      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "60px", alignItems: "flex-start" }}>
        <div>
          <h2 style={{ fontSize: "2rem", marginBottom: "24px" }}>A Success Story Since 1983</h2>
          <p style={{ marginBottom: "20px" }}>
            Established in 1983, PYE Tools was founded with a unified focus: to produce heavy-duty professional pliers and wrenches capable of exceeding actual client demands in challenging environments.
          </p>
          <p style={{ marginBottom: "20px" }}>
            Under the guidance of Chairman-Emeritus <strong>Mr. B.S. Sehgal</strong> and Managing Director <strong>Mr. Gaurav Sehgal</strong> (Mechanical Engineer from Thapar University &amp; MBA in Finance from Clark University, Massachusetts, USA), the company has established a sprawling state-of-the-art manufacturing plant in Ludhiana, Punjab.
          </p>
          <p style={{ marginBottom: "20px" }}>
            By focusing on thermal stress distribution and mechanical leverages, we engineered pliers that amplify manual grip force up to 39 times. PYE is today recognized as the premier hand tools brand for heavy fabrication, automotive, power distribution grids, and electrician usage in India.
          </p>
        </div>

        <div className="glass-card" style={{ padding: "40px" }}>
          <h3 style={{ marginBottom: "24px", color: "var(--primary)" }}>Vision &amp; Mission</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            <div>
              <h4 style={{ fontWeight: 800, marginBottom: "8px" }}>✨ Our Vision</h4>
              <p style={{ fontSize: "0.92rem" }}>
                To produce highly cost-competitive and exceptional quality tools in a safe, motivating work environment, ensuring that the brand PYE is perceived as the absolute synonym of Quality Tools globally.
              </p>
            </div>
            <div style={{ borderTop: "1px solid var(--border)", paddingTop: "24px" }}>
              <h4 style={{ fontWeight: 800, marginBottom: "8px" }}>🚀 Our Mission</h4>
              <p style={{ fontSize: "0.92rem" }}>
                To build unyielding confidence in end-users by providing them quality tools that increase their efficiency and extrapolate our corporate brand equity worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div>
        <h2 style={{ fontSize: "2rem", textAlign: "center", marginBottom: "40px" }}>Our Core Values &amp; Beliefs</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px" }}>
          <div className="glass-card" style={{ padding: "30px" }}>
            <h3 style={{ marginBottom: "12px", display: "flex", gap: "10px" }}>🤝 <span>Integrity First</span></h3>
            <p style={{ fontSize: "0.9rem" }}>Honesty is more than a policy for us; it is ingrained in our team. We maintain negligible distance between our words and our actions.</p>
          </div>
          <div className="glass-card" style={{ padding: "30px" }}>
            <h3 style={{ marginBottom: "12px", display: "flex", gap: "10px" }}>🌱 <span>Sustainability</span></h3>
            <p style={{ fontSize: "0.9rem" }}>We believe in taking great care of our environment. Our ISO 50001 certification guides our plant&apos;s energy consumption and green footprint.</p>
          </div>
          <div className="glass-card" style={{ padding: "30px" }}>
            <h3 style={{ marginBottom: "12px", display: "flex", gap: "10px" }}>🔄 <span>Innovation</span></h3>
            <p style={{ fontSize: "0.9rem" }}>We respect competition and believe that true engineering innovation blossoms in a competitive environment to satisfy users.</p>
          </div>
        </div>
      </div>

      {/* Scanned Certificates & Documents Section */}
      <div style={{ background: "var(--secondary)", padding: "60px 40px", borderRadius: "16px", border: "1px solid var(--border)" }}>
        <h2 style={{ fontSize: "2rem", textAlign: "center", marginBottom: "16px" }}>Certified &amp; Endorsed Credentials</h2>
        <p style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 48px auto", color: "var(--text-muted)" }}>
          Bulk buyers, procurement executives, and international dealers can view and download our active certificates audited by international bodies.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "32px" }}>
          {CERTIFICATES.map((cert, idx) => (
            <div key={idx} className="glass-card" style={{ padding: "24px", textAlign: "center", display: "flex", flexDirection: "column", width: "260px" }}>
              <div style={{ 
                height: "120px", 
                backgroundColor: "#ffffff", 
                borderRadius: "8px", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                marginBottom: "20px" 
              }}>
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  style={{ maxHeight: "80px", maxWidth: "100%", objectFit: "contain" }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                <span style={{ fontSize: "2rem" }}>📜</span>
              </div>
              <h4 style={{ fontWeight: 800, fontSize: "1.1rem", marginBottom: "8px" }}>{cert.title}</h4>
              <p style={{ fontSize: "0.78rem", textTransform: "uppercase", color: "var(--primary)", fontWeight: 700, marginBottom: "8px" }}>
                {cert.issuer}
              </p>
              <p style={{ fontSize: "0.85rem", marginBottom: "20px", flexGrow: 1 }}>{cert.type}</p>
              <a 
                href={cert.file} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-btn" 
                style={{ fontSize: "0.85rem", padding: "10px", width: "100%", display: "inline-block" }}
              >
                View PDF Document
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
