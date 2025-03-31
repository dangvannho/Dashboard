import React from "react";
import ProductItem from "@/components/common/product-item";
import type { Product } from "@/types/product";

const products: Product[] = [
  {
    id: 1,
    name: "Apple Watch Series 1",
    price: "$200.00",
    reviews: 131,
    rating: 4,
  },
  {
    id: 2,
    name: "Apple Watch Series 2",
    price: "$300.00",
    rating: 4,
    reviews: 131,
  },
  {
    id: 3,
    name: "Apple Watch Series 3",
    price: "$200.00",
    reviews: 131,
    rating: 4,
  },
  {
    id: 4,
    name: "Apple Watch Series 5",
    price: "$400.00",
    reviews: 131,
    rating: 3,
  },
  {
    id: 5,
    name: "Apple Watch Series 6",
    price: "$400.00",
    reviews: 131,
    rating: 2,
  },
];

const ListProduct = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 w-[100%]">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ListProduct;
