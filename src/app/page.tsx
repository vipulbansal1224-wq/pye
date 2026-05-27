import React from "react";
import { getProducts } from "../lib/dataLoader";
import HomeClient from "./components/HomeClient";

export default function Home() {
  const products = getProducts();
  
  // Pick specific prominent featured products
  const featuredProducts = products.filter(p => 
    ["542", "1102", "2508", "866", "1508", "1079"].includes(p.id)
  );

  return <HomeClient featuredProducts={featuredProducts} />;
}
