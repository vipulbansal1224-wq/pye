"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Product } from "../../lib/dataLoader";

const HERO_SLIDES = [
  {
    image: "/images/2025/04/ban-3-scaled.png",
    title: "Heat Treated Carbon Steel Pliers",
    desc: "Forged with absolute precision in Ludhiana. Engineered to satisfy global standards of industrial durability."
  },
  {
    image: "/images/2025/04/ban-6-scaled.png",
    title: "ISO 9001 & ISO 50001 Certified Quality",
    desc: "Certified by TUV Rheinland Germany and BSI India. Trusted by heavy industries and power distribution grids globally."
  },
  {
    image: "/images/2025/04/ban-9.png",
    title: "ISI Endorsed Insulated Pliers",
    desc: "Double-colored thick sleeves tested up to 10,000V for high-voltage electrician operations and lineman safety."
  },
  {
    image: "/images/2025/05/conference-board-7-copy2.png",
    title: "One Star Export House",
    desc: "Proud Government of India recognized status holder. Exporting professional-grade hand tools to USA, CIS, and Middle East."
  }
];

interface HomeClientProps {
  featuredProducts: Product[];
}

export default function HomeClient({ featuredProducts }: HomeClientProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ paddingBottom: "60px" }}>
      {/* Hero Banner Slider */}
      <section className="container" style={{ paddingTop: "20px" }}>
        <div className="slider-container animate-fade">
          {HERO_SLIDES.map((slide, idx) => (
            <div 
              key={idx} 
              className={`slide ${idx === currentSlide ? "active" : ""}`}
            >
              <img 
                src={slide.image} 
                alt={slide.title} 
                className="slide-img" 
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/images/2022/12/about-head.jpg";
                }}
              />
              <div className="slide-overlay">
                <span style={{ 
                  color: "var(--primary)", 
                  textTransform: "uppercase", 
                  fontSize: "0.85rem", 
                  fontWeight: 800, 
                  letterSpacing: "0.15em",
                  marginBottom: "8px",
                  display: "inline-block"
                }}>
                  Pioneering Hand Tools Since 1983
                </span>
                <h1 className="slide-title">{slide.title}</h1>
                <p className="slide-desc">{slide.desc}</p>
                <div style={{ marginTop: "24px", display: "flex", gap: "16px" }}>
                  <Link href="/products" className="contact-btn">
                    Explore Products
                  </Link>
                  <Link 
                    href="/about" 
                    className="filter-btn" 
                    style={{ background: "rgba(255,255,255,0.08)", backdropFilter: "blur(4px)", color: "white" }}
                  >
                    Our History
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Corporate Overview & Quality Standards */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
            <div>
              <span style={{ color: "var(--primary)", fontWeight: 700, textTransform: "uppercase", fontSize: "0.8rem", letterSpacing: "0.1em" }}>
                Corporate Profile
              </span>
              <h2 style={{ fontSize: "2.5rem", marginTop: "12px", marginBottom: "24px" }}>
                Crafting Trust in Every Turn
              </h2>
              <p style={{ fontSize: "1.05rem", marginBottom: "20px" }}>
                <strong>PYE Tools Private Limited</strong>, established in 1983 in Ludhiana, Punjab, stands as India&apos;s leading force in manufacturing and exporting professional-grade hand tools.
              </p>
              <p style={{ marginBottom: "24px" }}>
                Under the visionary operations of our Managing Director, Gaurav Sehgal (B.E. Mechanical, MBA Clark University, USA), the company has established a premium national footprint of over 500 authorized dealers and an active global supply chain servicing the United States, Middle East, and CIS nations.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                <div className="glass-card" style={{ padding: "20px", display: "flex", gap: "16px", alignItems: "center" }}>
                  <div style={{ fontSize: "2.5rem", color: "var(--primary)" }}>🏢</div>
                  <div>
                    <h4 style={{ fontWeight: 800 }}>40+ Years</h4>
                    <p style={{ fontSize: "0.8rem" }}>Of Engineering Trust</p>
                  </div>
                </div>
                <div className="glass-card" style={{ padding: "20px", display: "flex", gap: "16px", alignItems: "center" }}>
                  <div style={{ fontSize: "2.5rem", color: "var(--primary)" }}>🌍</div>
                  <div>
                    <h4 style={{ fontWeight: 800 }}>Global Exporter</h4>
                    <p style={{ fontSize: "0.8rem" }}>USA, CIS &amp; Middle East</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card" style={{ padding: "40px", borderLeft: "4px solid var(--primary)" }}>
              <h3 style={{ marginBottom: "20px", fontSize: "1.5rem" }}>TUV &amp; BSI Audited Standards</h3>
              <p style={{ marginBottom: "30px" }}>
                Every single PYE tool undergoes rigorous quality audits, thermal stress testing, and dimension compliance in our state-of-the-art plant.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <span style={{ background: "rgba(255,94,20,0.1)", color: "var(--primary)", padding: "8px", borderRadius: "8px", fontWeight: "bold" }}>✓</span>
                  <div>
                    <h4 style={{ fontSize: "1rem", fontWeight: 700 }}>ISO 9001 Quality System</h4>
                    <p style={{ fontSize: "0.88rem" }}>Certified by TUV Rheinland of Germany for reliable production lines.</p>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <span style={{ background: "rgba(255,94,20,0.1)", color: "var(--primary)", padding: "8px", borderRadius: "8px", fontWeight: "bold" }}>✓</span>
                  <div>
                    <h4 style={{ fontSize: "1rem", fontWeight: 700 }}>ISO 50001 Energy Management</h4>
                    <p style={{ fontSize: "0.88rem" }}>BSI Certified environmental sustainability and green energy footprint.</p>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <span style={{ background: "rgba(255,94,20,0.1)", color: "var(--primary)", padding: "8px", borderRadius: "8px", fontWeight: "bold" }}>✓</span>
                  <div>
                    <h4 style={{ fontSize: "1rem", fontWeight: 700 }}>ISI Endorsed Electrician Pliers</h4>
                    <p style={{ fontSize: "0.88rem" }}>Fully compliant with Bureau of Indian Standards (BIS) safe insulation rules.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Innovations (Featured Products) */}
      <section className="section-padding" style={{ background: "#090b0d" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "48px" }}>
            <div>
              <span style={{ color: "var(--primary)", fontWeight: 700, textTransform: "uppercase", fontSize: "0.8rem", letterSpacing: "0.1em" }}>
                Product Spotlight
              </span>
              <h2 style={{ fontSize: "2.3rem", marginTop: "12px" }}>Our Latest Innovations</h2>
            </div>
            <Link href="/products" className="product-link">
              View All Products &gt;&gt;
            </Link>
          </div>

          <div className="products-grid">
            {featuredProducts.map((prod) => (
              <div key={prod.id} className="glass-card product-card animate-fade">
                <div className="product-img-wrapper">
                  <img 
                    src={prod.images[0]} 
                    alt={prod.title} 
                    className="product-img"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/images/2022/12/about-head.jpg";
                    }}
                  />
                </div>
                <span className="product-cat">{prod.category.replace('-', ' ')}</span>
                <h3 className="product-title">{prod.title}</h3>
                <p className="product-desc">
                  {prod.description.length > 130 ? prod.description.slice(0, 130) + "..." : prod.description}
                </p>
                <div className="product-footer">
                  {prod.hsnCode && (
                    <span className="product-hsn">HSN: {prod.hsnCode}</span>
                  )}
                  <Link href={`/products/${prod.category}/${prod.slug}`} className="product-link">
                    View Details &gt;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Footprint */}
      <section className="section-padding">
        <div className="container" style={{ textAlign: "center" }}>
          <span style={{ color: "var(--primary)", fontWeight: 700, textTransform: "uppercase", fontSize: "0.8rem", letterSpacing: "0.1em" }}>
            Global Distribution
          </span>
          <h2 style={{ fontSize: "2.3rem", marginTop: "12px", marginBottom: "20px" }}>International Exporter of Choice</h2>
          <p style={{ maxWidth: "600px", margin: "0 auto 60px auto" }}>
            Recognized as a One Star Export House by the Government of India, PYE Tools supplies heavy industries, defense divisions, and authorized supply distributors globally.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "40px" }}>
            <div className="glass-card" style={{ padding: "40px" }}>
              <div style={{ fontSize: "3rem", marginBottom: "20px" }}>🇺🇸</div>
              <h3 style={{ marginBottom: "12px" }}>North America</h3>
              <p style={{ fontSize: "0.9rem" }}>Supplying industrial-grade wrenches and bespoke mechanic toolsets to authorized distributors in the USA.</p>
            </div>
            <div className="glass-card" style={{ padding: "40px" }}>
              <div style={{ fontSize: "3rem", marginBottom: "20px" }}>🏜️</div>
              <h3 style={{ marginBottom: "12px" }}>Middle East</h3>
              <p style={{ fontSize: "0.9rem" }}>Prominent supply chain presence in Dubai, Saudi Arabia, and Qatar servicing the construction and gas extraction sectors.</p>
            </div>
            <div className="glass-card" style={{ padding: "40px" }}>
              <div style={{ fontSize: "3rem", marginBottom: "20px" }}>❄️</div>
              <h3 style={{ marginBottom: "12px" }}>CIS Countries</h3>
              <p style={{ fontSize: "0.9rem" }}>Trusted supplier of heavy-duty insulated combination pliers and wire-strippers to extreme cold climatic regions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="container">
        <div className="glass-card" style={{ 
          padding: "60px 40px", 
          textAlign: "center", 
          background: "linear-gradient(135deg, rgba(26,30,36,0.8) 0%, rgba(255,94,20,0.1) 100%)",
          border: "1px solid rgba(255,94,20,0.2)"
        }}>
          <h2 style={{ fontSize: "2.3rem", marginBottom: "20px" }}>Inquire About Bulk Distributions</h2>
          <p style={{ maxWidth: "600px", margin: "0 auto 32px auto", fontSize: "1.05rem" }}>
            Whether you need customized toolkits for auto plants or bulk supplies of ISI-certified combination pliers, our sales team is ready to assist.
          </p>
          <Link href="/contact" className="contact-btn" style={{ padding: "14px 40px", fontSize: "1.05rem" }}>
            Request Quotation &amp; Pricing
          </Link>
        </div>
      </section>
    </div>
  );
}
