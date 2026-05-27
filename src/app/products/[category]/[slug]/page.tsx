import React from "react";
import Link from "next/link";
import { getProductBySlug } from "../../../../lib/dataLoader";
import ProductDetailsClient from "../../../components/ProductDetailsClient";

interface PageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export default async function ProductDetailsPage({ params }: PageProps) {
  const resolvedParams = await params;
  const product = getProductBySlug(resolvedParams.slug);

  if (!product) {
    return (
      <div className="container section-padding text-center">
        <h2>Product Not Found</h2>
        <p style={{ margin: "20px 0" }}>The product you are looking for does not exist or has been relocated.</p>
        <Link href="/products" className="contact-btn">Back to Products</Link>
      </div>
    );
  }

  return <ProductDetailsClient product={product} />;
}
