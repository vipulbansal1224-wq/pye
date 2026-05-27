import React from "react";
import { getProducts, getCategories } from "../../lib/dataLoader";
import ProductsCatalogClient from "../components/ProductsCatalogClient";

export default function ProductsPage() {
  const products = getProducts();
  const categories = getCategories();

  return <ProductsCatalogClient products={products} categories={categories} />;
}
