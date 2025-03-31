"use client";

import React, { useState, useEffect } from "react";
import ProductItem from "@/components/common/product-item";
import type { Product } from "@/types/product";

function Favorites() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem("likedProducts") || "[]"));
  }, []);

  return (
    <div className=" space-y-6">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Favorites</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductItem key={product.id} product={product} checked={true} />
          ))
        ) : (
          <p className="text-3xl font-bold tracking-tight mb-8">No Favorites</p>
        )}
      </div>
    </div>
  );
}

export default Favorites;
