import fs from "fs";
import path from "path";

export interface Product {
  id: string;
  title: string;
  slug: string;
  category: string;
  hsnCode: string;
  description: string;
  images: string[];
  features?: string[];
  specifications?: Record<string, string>;
  rawContent?: string;
}

export interface Page {
  id: string;
  title: string;
  slug: string;
  description: string;
  images: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

const PRODUCTS_DIR = path.join(process.cwd(), "src", "content", "products");
const PAGES_DIR = path.join(process.cwd(), "src", "content", "pages");

// Cache loaders for build time performance
let cachedProducts: Product[] | null = null;
let cachedPages: Page[] | null = null;

export function getProducts(): Product[] {
  // Return cached products if already loaded to optimize build compilation
  if (cachedProducts) return cachedProducts;

  try {
    if (!fs.existsSync(PRODUCTS_DIR)) return [];
    
    const files = fs.readdirSync(PRODUCTS_DIR);
    const products: Product[] = [];

    files.forEach(file => {
      if (file.endsWith(".json")) {
        const filePath = path.join(PRODUCTS_DIR, file);
        const data = fs.readFileSync(filePath, "utf8");
        products.push(JSON.parse(data));
      }
    });

    cachedProducts = products;
    return products;
  } catch (error) {
    console.error("Error reading products content folder:", error);
    return [];
  }
}

export function getPages(): Page[] {
  if (cachedPages) return cachedPages;

  try {
    if (!fs.existsSync(PAGES_DIR)) return [];

    const files = fs.readdirSync(PAGES_DIR);
    const pages: Page[] = [];

    files.forEach(file => {
      if (file.endsWith(".json")) {
        const filePath = path.join(PAGES_DIR, file);
        const data = fs.readFileSync(filePath, "utf8");
        pages.push(JSON.parse(data));
      }
    });

    cachedPages = pages;
    return pages;
  } catch (error) {
    console.error("Error reading pages content folder:", error);
    return [];
  }
}

export function getCategories(): Category[] {
  const categories = [
    { id: "pliers", name: "Pliers", slug: "pliers" },
    { id: "adjustable-wrenches", name: "Adjustable Wrenches", slug: "adjustable-wrenches" },
    { id: "tool-kits", name: "Tool Kits", slug: "tool-kits" },
    { id: "other-products", name: "Other Products", slug: "other-products" }
  ];
  return categories;
}

export function getProductBySlug(slug: string): Product | undefined {
  const products = getProducts();
  return products.find(p => p.slug === slug);
}

export function getPageBySlug(slug: string): Page | undefined {
  const pages = getPages();
  return pages.find(p => p.slug === slug);
}
