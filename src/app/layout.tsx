import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PYE Tools Pvt. Ltd. | Premium Hand Tools Manufacturer & Exporter",
  description: "Established in 1983, PYE Tools Pvt. Ltd. is India's leading manufacturer of high-quality pliers, adjustable wrenches, tool kits, and custom hand tools. ISO 9001 & ISO 50001 certified.",
  keywords: "pye tools, hand tools, pliers, wrenches, combination pliers, tool kits, Ludhiana manufacturer, hand tools exporter India, professional hand tools",
  openGraph: {
    title: "PYE Tools Pvt. Ltd. | Premium Hand Tools Manufacturer & Exporter",
    description: "Established in 1983, PYE Tools Pvt. Ltd. is India's leading manufacturer of high-quality pliers, adjustable wrenches, tool kits, and custom hand tools. ISO 9001 & ISO 50001 certified.",
    type: "website",
    locale: "en_IN",
    siteName: "PYE Tools"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <header className="header">
          <div className="container header-container">
            <Link href="/" className="logo-link">
              <strong>PYE<span>TOOLS</span></strong>
            </Link>
            
            <nav className="nav-menu">
              <Link href="/" className="nav-link">Home</Link>
              <Link href="/about" className="nav-link">About Us</Link>
              <Link href="/products" className="nav-link">Products</Link>
              <Link href="/downloads" className="nav-link">Downloads</Link>
              <Link href="/knowledge" className="nav-link">Knowledge Base</Link>
              <Link href="/careers" className="nav-link">Careers</Link>
              <Link href="/contact" className="contact-btn">Get In Touch</Link>
            </nav>
          </div>
        </header>

        <main style={{ minHeight: "100vh", paddingTop: "80px" }}>
          {children}
        </main>

        <footer className="footer">
          <div className="container">
            <div className="footer-grid">
              <div>
                <Link href="/" className="logo-link" style={{ marginBottom: "20px", display: "inline-flex" }}>
                  <strong>PYE<span>TOOLS</span></strong>
                </Link>
                <p style={{ marginBottom: "24px" }}>
                  Established in 1983 in Ludhiana, Punjab, PYE Tools Private Limited is the largest manufacturer and exporter of professional-grade pliers and adjustable wrenches in India.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  <span className="glass-card" style={{ padding: "6px 12px", fontSize: "0.75rem", fontWeight: 700, color: "var(--primary)" }}>ISO 9001</span>
                  <span className="glass-card" style={{ padding: "6px 12px", fontSize: "0.75rem", fontWeight: 700, color: "var(--primary)" }}>ISO 50001</span>
                  <span className="glass-card" style={{ padding: "6px 12px", fontSize: "0.75rem", fontWeight: 700, color: "var(--primary)" }}>ISI ENDORSED</span>
                </div>
              </div>

              <div>
                <h4 className="footer-heading">Quick Links</h4>
                <ul className="footer-links">
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/about">About Company</Link></li>
                  <li><Link href="/products">Product Range</Link></li>
                  <li><Link href="/downloads">E-Catalogues</Link></li>
                  <li><Link href="/knowledge">Pliers FAQ</Link></li>
                  <li><Link href="/careers">Join Our Team</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="footer-heading">Product Types</h4>
                <ul className="footer-links">
                  <li><Link href="/products?category=pliers">Combination Pliers</Link></li>
                  <li><Link href="/products?category=pliers">Circlip Pliers</Link></li>
                  <li><Link href="/products?category=adjustable-wrenches">Adjustable Wrenches</Link></li>
                  <li><Link href="/products?category=tool-kits">Custom Tool Kits</Link></li>
                  <li><Link href="/products?category=pliers">Cutting &amp; Insulated Pliers</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="footer-heading">Corporate Office</h4>
                <ul className="footer-contact">
                  <li>
                    <span style={{ color: "var(--primary)", fontWeight: "bold" }}>📍</span>
                    <span>
                      C-67, Focal Point, Phase-III,<br />
                      Ludhiana - 141010, Punjab, India.
                    </span>
                  </li>
                  <li>
                    <span style={{ color: "var(--primary)", fontWeight: "bold" }}>📞</span>
                    <span>+91 161 2671861, 2672952</span>
                  </li>
                  <li>
                    <span style={{ color: "var(--primary)", fontWeight: "bold" }}>✉️</span>
                    <span>gsehgal@pyetools.com</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="footer-bottom">
              <p>&copy; {new Date().getFullYear()} PYE Tools Pvt. Ltd. All rights reserved. Made in India 🇮🇳</p>
              <div style={{ display: "flex", gap: "24px" }}>
                <Link href="/contact" style={{ color: "var(--text-muted)" }}>Privacy Policy</Link>
                <Link href="/contact" style={{ color: "var(--text-muted)" }}>Terms &amp; Conditions</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
