"use client";

import React from "react";
import ProductItem from "@/components/common/product-item";
import { renderStars } from "@/components/products/list-product";

function Favorites() {
  const products = [
    {
      id: 1,
      name: "Apple Watch Series 4",
      price: "$120.00",
      reviews: 131,
      rating: 4.5,
    },
    {
      id: 2,
      name: "Apple Watch Series 4",
      price: "$120.00",
      rating: 4,
      reviews: 131,
    },
    {
      id: 3,
      name: "Apple Watch Series 4",
      price: "$120.00",
      reviews: 131,
      rating: 4.5,
    },
    {
      id: 4,
      name: "Apple Watch Series 4",
      price: "$120.00",
      reviews: 131,
      rating: 4.5,
    },
    {
      id: 5,
      name: "Apple Watch Series 4",
      price: "$120.00",
      reviews: 131,
      rating: 4.5,
    },
    {
      id: 6,
      name: "Apple Watch Series 4",
      price: "$120.00",
      reviews: 131,
      rating: 4.5,
    },
    {
      id: 7,
      name: "Apple Watch Series 4",
      price: "$120.00",
      reviews: 131,
      rating: 4.5,
    },
    {
      id: 8,
      name: "Apple Watch Series 4",
      price: "$120.00",
      reviews: 131,
      rating: 4.5,
    },
  ];
  return (
    <div className=" space-y-6">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Favorites</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            renderStars={renderStars}
          />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
