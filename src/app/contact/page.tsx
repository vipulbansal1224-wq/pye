"use client";

import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  
  const [sent, setSent] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submission:", formData);
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 2500);
  };

  return (
    <div className="container section-padding animate-fade">
      {/* Title */}
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <span style={{ color: "var(--primary)", fontWeight: 700, textTransform: "uppercase", fontSize: "0.85rem", letterSpacing: "0.15em" }}>
          Contact Sales Division
        </span>
        <h1 style={{ fontSize: "3.2rem", marginTop: "12px", marginBottom: "20px" }}>Get In Touch</h1>
        <p style={{ maxWidth: "600px", margin: "0 auto" }}>
          Have a question about our pricing, bulk delivery timescales, or looking for custom tools? Complete the form and our sales representatives will contact you.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: "60px", alignItems: "flex-start" }}>
        {/* Left Column: Interactive Contact Form */}
        <div className="glass-card" style={{ padding: "40px" }}>
          {sent ? (
            <div style={{ textAlign: "center", padding: "60px 0" }}>
              <span style={{ fontSize: "4rem", display: "block", marginBottom: "24px" }}>✉️</span>
              <h3 style={{ fontSize: "1.8rem", color: "white", marginBottom: "12px" }}>Thank You!</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "1.05rem" }}>
                Your message has been logged. A PYE Tools customer care executive will connect with you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "24px", color: "white" }}>Send Us A Message</h3>
              
              <div className="form-group">
                <label className="form-label">Your Full Name *</label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  value={formData.name} 
                  onChange={handleInputChange} 
                  className="form-control" 
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input 
                    type="email" 
                    name="email" 
                    required 
                    value={formData.email} 
                    onChange={handleInputChange} 
                    className="form-control" 
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone Number *</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    required 
                    value={formData.phone} 
                    onChange={handleInputChange} 
                    className="form-control" 
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Subject / Purpose *</label>
                <input 
                  type="text" 
                  name="subject" 
                  required 
                  placeholder="E.g., Bulk Plier Dealership, Custom Tool Kits Quote"
                  value={formData.subject} 
                  onChange={handleInputChange} 
                  className="form-control" 
                />
              </div>

              <div className="form-group">
                <label className="form-label">Message Details *</label>
                <textarea 
                  name="message" 
                  required 
                  rows={5}
                  value={formData.message} 
                  onChange={handleInputChange} 
                  className="form-control" 
                  style={{ resize: "none" }}
                />
              </div>

              <button type="submit" className="contact-btn" style={{ width: "100%", marginTop: "12px", padding: "14px" }}>
                ✉️ Send Message Now
              </button>
            </form>
          )}
        </div>

        {/* Right Column: Physical Details & Visual Map Mock */}
        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          {/* Corporate Office Glass Box */}
          <div className="glass-card" style={{ padding: "40px", borderLeft: "4px solid var(--primary)" }}>
            <h3 style={{ fontSize: "1.4rem", marginBottom: "24px", color: "white" }}>Ludhiana Head Office</h3>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", fontSize: "0.95rem" }}>
              <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <span style={{ fontSize: "1.5rem" }}>🏢</span>
                <div>
                  <h4 style={{ fontWeight: 800, color: "white" }}>PYE TOOLS PVT. LTD.</h4>
                  <p style={{ marginTop: "4px" }}>
                    C-67, Focal Point, Phase-III,<br />
                    Ludhiana - 141010, Punjab, India.
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <span style={{ fontSize: "1.5rem" }}>📞</span>
                <div>
                  <h4 style={{ fontWeight: 800, color: "white" }}>Telephones &amp; Fax</h4>
                  <p style={{ marginTop: "4px" }}>
                    Office Landlines: +91 161 2671861, 2672952<br />
                    Fixed Fax Line: +91 161 2672951<br />
                    Customer Care Hotline: +91 98786 05921
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <span style={{ fontSize: "1.5rem" }}>✉️</span>
                <div>
                  <h4 style={{ fontWeight: 800, color: "white" }}>Primary Emails</h4>
                  <p style={{ marginTop: "4px" }}>
                    Sales: gsehgal@pyetools.com<br />
                    Support: info@pyetools.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Map Visual Mock */}
          <div className="glass-card" style={{ 
            height: "260px", 
            overflow: "hidden", 
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#161a20",
            border: "1px solid var(--border)"
          }}>
            {/* Visual aesthetic dark map grid indicator */}
            <div style={{ textAlign: "center", zIndex: 10, padding: "20px" }}>
              <span style={{ fontSize: "3rem", display: "block", marginBottom: "12px" }}>📍</span>
              <h4 style={{ color: "white", fontWeight: 700 }}>Focal Point, Ludhiana</h4>
              <p style={{ fontSize: "0.85rem", marginTop: "4px" }}>Latitude: 30.9010° N | Longitude: 75.8573° E</p>
              <a 
                href="https://maps.google.com/?q=PYE+TOOLS+PVT.+LTD.+C-67+Focal+Point+Ludhiana" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="product-link"
                style={{ display: "inline-block", marginTop: "16px", fontWeight: "bold" }}
              >
                Open in Google Maps &gt;
              </a>
            </div>
            <div style={{ 
              position: "absolute", 
              top: 0, left: 0, right: 0, bottom: 0, 
              opacity: 0.15,
              backgroundImage: "radial-gradient(circle, var(--primary) 1.5px, transparent 1.5px)",
              backgroundSize: "24px 24px"
            }} />
          </div>
        </div>
      </div>
    </div>
  );
}
