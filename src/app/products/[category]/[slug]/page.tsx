"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { productsData } from "../../../data";

export default function ProductDetails() {
  const params = useParams();
  const router = useRouter();
  const category = params.category as string;
  const slug = params.slug as string;

  // Locate the product in dataset
  const product = productsData.find(p => p.slug === slug && p.category === category) ||
                  productsData.find(p => p.slug === slug); // Fallback

  const [activeImage, setActiveImage] = useState(product?.images[0] || "");
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [inquirySent, setInquirySent] = useState(false);
  
  // Form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    quantity: "",
    message: `Hello PYE Sales team,\n\nI am interested in acquiring bulk pricing and specifications for your product "${product?.title}". Please get in touch.\n\nThank you!`
  });

  if (!product) {
    return (
      <div className="container section-padding text-center">
        <h2>Product Not Found</h2>
        <p style={{ margin: "20px 0" }}>The product you are looking for does not exist or has been relocated.</p>
        <Link href="/products" className="contact-btn">Back to Products</Link>
      </div>
    );
  }

  // Pre-set active image if not set
  if (!activeImage && product.images.length > 0) {
    setActiveImage(product.images[0]);
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    console.log("Submitting bulk inquiry for product:", product.title, formData);
    setInquirySent(true);
    setTimeout(() => {
      setIsInquiryOpen(false);
      setInquirySent(false);
      // Reset form
      setFormData(prev => ({ ...prev, name: "", email: "", phone: "", company: "", quantity: "" }));
    }, 2500);
  };

  return (
    <div className="container section-padding animate-fade">
      {/* Path Breadcrumbs */}
      <div style={{ marginBottom: "32px", fontSize: "0.88rem", color: "var(--text-muted)" }}>
        <Link href="/">Home</Link> &gt; <Link href="/products">Products</Link> &gt; <Link href={`/products?category=${product.category}`} style={{ textTransform: "capitalize" }}>{product.category.replace("-", " ")}</Link> &gt; <span style={{ color: "white" }}>{product.title}</span>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1.2fr", gap: "60px", alignItems: "flex-start" }}>
        {/* Left Column: Product Image Gallery */}
        <div>
          <div className="glass-card" style={{ 
            padding: "30px", 
            borderRadius: "16px", 
            backgroundColor: "#12151b", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            height: "450px" 
          }}>
            <img 
              src={activeImage} 
              alt={product.title} 
              style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/images/2022/12/about-head.jpg";
              }}
            />
          </div>

          {/* Thumbnail Gallery (if more than 1 image) */}
          {product.images.length > 1 && (
            <div style={{ display: "flex", gap: "12px", marginTop: "16px", overflowX: "auto", padding: "8px 0" }}>
              {product.images.map((img, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setActiveImage(img)}
                  className="glass-card" 
                  style={{ 
                    width: "80px", 
                    height: "80px", 
                    padding: "8px", 
                    backgroundColor: "#161a20",
                    border: activeImage === img ? "2px solid var(--primary)" : "1px solid var(--border)",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0
                  }}
                >
                  <img src={img} alt="" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Details & Technical Data */}
        <div>
          <span style={{ color: "var(--primary)", textTransform: "uppercase", fontSize: "0.8rem", fontWeight: 800, letterSpacing: "0.1em" }}>
            Professional Hand Tools
          </span>
          <h1 style={{ fontSize: "2.5rem", marginTop: "10px", marginBottom: "16px" }}>{product.title}</h1>
          
          {product.hsnCode && (
            <div className="glass-card" style={{ padding: "8px 16px", display: "inline-block", fontSize: "0.88rem", fontWeight: 600, color: "var(--primary)", marginBottom: "24px" }}>
              HSN Code: {product.hsnCode}
            </div>
          )}

          <h3 style={{ fontSize: "1.2rem", fontWeight: 600, color: "white", marginBottom: "12px" }}>Product Specifications</h3>
          <p style={{ marginBottom: "30px", fontSize: "1.05rem" }}>{product.description}</p>

          {/* Key Compliance Features */}
          <div className="glass-card" style={{ padding: "24px", marginBottom: "32px", borderLeft: "3px solid var(--primary)" }}>
            <h4 style={{ fontWeight: 800, marginBottom: "12px", fontSize: "0.95rem" }}>Guaranteed Compliance Standards:</h4>
            <ul style={{ listStyle: "none", fontSize: "0.88rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
              <li>✓ IS 3650-1981 Approved</li>
              <li>✓ Tested up to 10,000V AC</li>
              <li>✓ TUV ISO 9001 Audited</li>
              <li>✓ Heavy-Duty Drop Forged</li>
            </ul>
          </div>

          {/* Inquiry trigger button */}
          <button onClick={() => setIsInquiryOpen(true)} className="contact-btn" style={{ padding: "14px 40px", fontSize: "1.05rem" }}>
            ✉️ Bulk Inquiry / Get Price
          </button>
        </div>
      </div>

      {/* Inquiry Form Dialog modal */}
      {isInquiryOpen && (
        <div className="modal-overlay">
          <div className="glass-card modal-content">
            <button onClick={() => setIsInquiryOpen(false)} className="modal-close">✕</button>
            
            {inquirySent ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <span style={{ fontSize: "3.5rem", display: "block", marginBottom: "20px" }}>✅</span>
                <h3 style={{ fontSize: "1.5rem", color: "white" }}>Inquiry Sent Successfully!</h3>
                <p style={{ marginTop: "10px", color: "var(--text-muted)" }}>PYE Tools Sales division will connect with you via email shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit}>
                <h3 style={{ fontSize: "1.6rem", marginBottom: "24px", color: "white" }}>Inquire About {product.title}</h3>
                
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
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
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <div className="form-group">
                    <label className="form-label">Mobile Number *</label>
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
                    <label className="form-label">Company Name</label>
                    <input 
                      type="text" 
                      name="company" 
                      value={formData.company} 
                      onChange={handleInputChange} 
                      className="form-control" 
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Required Quantity *</label>
                  <input 
                    type="number" 
                    name="quantity" 
                    required 
                    placeholder="E.g., 500 units"
                    value={formData.quantity} 
                    onChange={handleInputChange} 
                    className="form-control" 
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Remarks / Message</label>
                  <textarea 
                    name="message" 
                    rows={4}
                    value={formData.message} 
                    onChange={handleInputChange} 
                    className="form-control" 
                    style={{ resize: "none" }}
                  />
                </div>

                <button type="submit" className="contact-btn" style={{ width: "100%", marginTop: "12px", padding: "12px" }}>
                  Submit Inquiry Now
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
