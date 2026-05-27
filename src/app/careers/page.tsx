"use client";

import React, { useState } from "react";

export default function Careers() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "machinist",
    experience: "",
    resume: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting job application:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", phone: "", position: "machinist", experience: "", resume: "", message: "" });
    }, 2500);
  };

  return (
    <div className="container section-padding animate-fade">
      {/* Title */}
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <span style={{ color: "var(--primary)", fontWeight: 700, textTransform: "uppercase", fontSize: "0.85rem", letterSpacing: "0.15em" }}>
          Join the PYE Family
        </span>
        <h1 style={{ fontSize: "3.2rem", marginTop: "12px", marginBottom: "20px" }}>Careers at PYE Tools</h1>
        <p style={{ maxWidth: "600px", margin: "0 auto" }}>
          We are always looking for passionate mechanical engineers, quality inspectors, CNC specialists, and logistics coordinators to join our plant in Ludhiana.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "60px", alignItems: "flex-start" }}>
        {/* Left Column: List of Openings */}
        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          <h2 style={{ fontSize: "1.8rem", color: "white", marginBottom: "8px" }}>Active Job Opportunities</h2>
          
          <div className="glass-card" style={{ padding: "30px", borderLeft: "4px solid var(--primary)" }}>
            <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--primary)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Manufacturing Operations
            </span>
            <h3 style={{ fontSize: "1.25rem", margin: "6px 0 12px 0", color: "white" }}>CNC Machine Operator</h3>
            <p style={{ fontSize: "0.9rem", marginBottom: "16px" }}>
              Responsible for setting up and operating CNC milling and grinding stations for hot-die steel tools. Requires 2+ years of experience with Fanuc or Siemens controls.
            </p>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.82rem", color: "var(--text-muted)" }}>
              <span>📍 Ludhiana Factory</span>
              <span>💼 Full-Time</span>
            </div>
          </div>

          <div className="glass-card" style={{ padding: "30px", borderLeft: "4px solid var(--primary)" }}>
            <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--primary)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Quality Assurance
            </span>
            <h3 style={{ fontSize: "1.25rem", margin: "6px 0 12px 0", color: "white" }}>Quality Control Inspector</h3>
            <p style={{ fontSize: "0.9rem", marginBottom: "16px" }}>
              Perform dimensional and metallurgical checks on hot-forged pliers and wrenches under ISO 9001 audit standards. Experience with CMM machines and micrometer gauges is essential.
            </p>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.82rem", color: "var(--text-muted)" }}>
              <span>📍 Ludhiana Factory</span>
              <span>💼 Full-Time</span>
            </div>
          </div>

          <div className="glass-card" style={{ padding: "30px", borderLeft: "4px solid var(--primary)" }}>
            <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--primary)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Executive Division
            </span>
            <h3 style={{ fontSize: "1.25rem", margin: "6px 0 12px 0", color: "white" }}>International Sales Coordinator</h3>
            <p style={{ fontSize: "0.9rem", marginBottom: "16px" }}>
              Manage shipping documentation, customs coordination, and communications with global authorized distributors in the Middle East and the United States. Requires exceptional communication skills.
            </p>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.82rem", color: "var(--text-muted)" }}>
              <span>📍 Corporate Office</span>
              <span>💼 Full-Time</span>
            </div>
          </div>
        </div>

        {/* Right Column: Apply Now Form */}
        <div className="glass-card" style={{ padding: "40px" }}>
          {submitted ? (
            <div style={{ textAlign: "center", padding: "60px 0" }}>
              <span style={{ fontSize: "4rem", display: "block", marginBottom: "24px" }}>📋</span>
              <h3 style={{ fontSize: "1.8rem", color: "white", marginBottom: "12px" }}>Application Received!</h3>
              <p style={{ color: "var(--text-muted)", fontSize: "1.05rem" }}>
                Thank you for applying. Our HR division will review your qualifications and contact you.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h3 style={{ fontSize: "1.5rem", marginBottom: "24px", color: "white" }}>Apply For Position</h3>
              
              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  value={formData.name} 
                  onChange={handleInputChange} 
                  className="form-control" 
                />
              </div>

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

              <div className="form-group">
                <label className="form-label">Position of Interest *</label>
                <select 
                  name="position" 
                  value={formData.position} 
                  onChange={handleInputChange} 
                  className="form-control"
                  style={{ width: "100%", background: "#161a20", color: "white" }}
                >
                  <option value="machinist">CNC Machine Operator</option>
                  <option value="inspector">Quality Control Inspector</option>
                  <option value="sales">International Sales Coordinator</option>
                  <option value="other">Other Operations</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Years of Relevant Experience *</label>
                <input 
                  type="text" 
                  name="experience" 
                  required 
                  placeholder="E.g., 3 Years"
                  value={formData.experience} 
                  onChange={handleInputChange} 
                  className="form-control" 
                />
              </div>

              <div className="form-group">
                <label className="form-label">Attach Resume (Paste Link / Text) *</label>
                <input 
                  type="text" 
                  name="resume" 
                  required 
                  placeholder="Paste Google Drive/Dropbox URL or qualifications overview"
                  value={formData.resume} 
                  onChange={handleInputChange} 
                  className="form-control" 
                />
              </div>

              <div className="form-group">
                <label className="form-label">Cover Note / Remarks</label>
                <textarea 
                  name="message" 
                  rows={4}
                  placeholder="Tell us why you want to join PYE Tools..."
                  value={formData.message} 
                  onChange={handleInputChange} 
                  className="form-control" 
                  style={{ resize: "none" }}
                />
              </div>

              <button type="submit" className="contact-btn" style={{ width: "100%", marginTop: "12px", padding: "14px" }}>
                Submit Job Application
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
