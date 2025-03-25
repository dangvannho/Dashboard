"use client";

import React from "react";
import ProductItem from "@/components/common/product-item";
import type { Product } from "@/types/product";

function Favorites() {
  const products: Product[] = JSON.parse(localStorage.getItem("likedProducts") || "[]");
  return (
    <div className=" space-y-6">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Favorites</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
