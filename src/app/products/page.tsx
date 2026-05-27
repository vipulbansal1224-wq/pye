"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { productsData, categoriesData } from "../data";

function ProductsCatalogContent() {
  const searchParams = useSearchParams();
  const catParam = searchParams.get("category");

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Read search parameters to pre-select category
  useEffect(() => {
    if (catParam) {
      setSelectedCategory(catParam);
    }
  }, [catParam]);

  // Filter products based on category and search query
  const filteredProducts = productsData.filter(prod => {
    const matchesCategory = selectedCategory === "all" || prod.category === selectedCategory;
    const matchesSearch = prod.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          prod.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          prod.slug.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container animate-fade">
      {/* Search and Filters Bar */}
      <div style={{ 
        display: "flex", 
        flexDirection: "column", 
        gap: "24px", 
        marginBottom: "48px", 
        background: "var(--card-bg)", 
        padding: "30px", 
        borderRadius: "16px",
        border: "1px solid var(--border)",
        boxShadow: "var(--shadow)"
      }}>
        {/* Search Input */}
        <div style={{ display: "flex", flexGrow: 1, position: "relative" }}>
          <input 
            type="text" 
            placeholder="Search by tool name, model or specification..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="form-control"
            style={{ width: "100%", paddingLeft: "48px", fontSize: "1.05rem" }}
          />
          <span style={{ position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)", fontSize: "1.2rem" }}>🔍</span>
        </div>

        {/* Filter Buttons */}
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <button 
            onClick={() => setSelectedCategory("all")}
            className={`filter-btn ${selectedCategory === "all" ? "active" : ""}`}
          >
            All Products
          </button>
          {categoriesData.map(cat => (
            <button 
              key={cat.id}
              onClick={() => setSelectedCategory(cat.slug)}
              className={`filter-btn ${selectedCategory === cat.slug ? "active" : ""}`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Filtered Products */}
      {filteredProducts.length > 0 ? (
        <div className="products-grid">
          {filteredProducts.map((prod) => (
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
      ) : (
        <div style={{ textAlign: "center", padding: "80px 0", color: "var(--text-muted)" }}>
          <span style={{ fontSize: "3rem", display: "block", marginBottom: "20px" }}>🛠️</span>
          <h3>No products match your search or filter.</h3>
          <p style={{ marginTop: "8px" }}>Try selecting another category or resetting the search query.</p>
        </div>
      )}
    </div>
  );
}

export default function ProductsCatalog() {
  return (
    <div className="container section-padding animate-fade">
      {/* Catalog Header */}
      <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <span style={{ color: "var(--primary)", fontWeight: 700, textTransform: "uppercase", fontSize: "0.85rem", letterSpacing: "0.15em" }}>
          PYE Digital Showroom
        </span>
        <h1 style={{ fontSize: "3.2rem", marginTop: "12px", marginBottom: "20px" }}>Our Hand Tools Catalog</h1>
        <p style={{ maxWidth: "600px", margin: "0 auto" }}>
          Browse our extensive catalog of professional-grade pliers, insulated lineman tools, chrome wrenches, and cantilever toolbox kits.
        </p>
      </div>

      <Suspense fallback={
        <div style={{ textAlign: "center", padding: "40px", color: "var(--text-muted)" }}>
          <span style={{ fontSize: "2rem", display: "block", marginBottom: "16px" }}>⚙️</span>
          <h3>Loading PYE Catalog...</h3>
        </div>
      }>
        <ProductsCatalogContent />
      </Suspense>
    </div>
  );
}
