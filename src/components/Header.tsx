"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-container">
        <Link href="/" className="logo-link">
          <img src="/logo.jpg" alt="PYE Tools" style={{ height: '40px', width: 'auto' }} />
        </Link>
        
        {/* Desktop Menu */}
        <nav className="nav-menu">
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/about" className="nav-link">About Us</Link>
          <div className="dropdown">
            <button className="nav-link dropbtn">Products ▼</button>
            <div className="dropdown-content glass-card">
              <Link href="/products?category=pliers">Pliers</Link>
              <Link href="/products?category=adjustable-wrenches">Wrenches</Link>
              <Link href="/products?category=tool-kits">Tool Kits</Link>
              <Link href="/products?category=other-products">Other Products</Link>
              <Link href="/products">All Products</Link>
            </div>
          </div>
          <Link href="/downloads" className="nav-link">Downloads</Link>
          <Link href="/knowledge" className="nav-link">Knowledge Base</Link>
          <Link href="/careers" className="nav-link">Careers</Link>
          <Link href="/contact" className="contact-btn">Get In Touch</Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button 
          className="mobile-menu-btn" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="mobile-menu-overlay glass-card">
            <Link href="/" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link href="/about" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
            <Link href="/products" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>All Products</Link>
            <Link href="/products?category=pliers" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Pliers</Link>
            <Link href="/products?category=adjustable-wrenches" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Wrenches</Link>
            <Link href="/downloads" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Downloads</Link>
            <Link href="/knowledge" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Knowledge Base</Link>
            <Link href="/careers" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Careers</Link>
            <Link href="/contact" className="mobile-nav-link" style={{ color: 'var(--primary)', fontWeight: 'bold' }} onClick={() => setMobileMenuOpen(false)}>Get In Touch</Link>
          </div>
        )}
      </div>
    </header>
  );
}
