"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import RenderStars from "./render-star";
import type { Product } from "@/types/product";
import Image from "next/image";

interface ProductItemProps {
  product: Product;
  checked?: boolean;
}

function ProductItem({ product, checked }: ProductItemProps) {
  const [imageIndex, setImageIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  console.log(imageIndex);

  const handleLikeClick = () => {
    const likedProductsJson = localStorage.getItem("likedProducts");

    if (!likedProductsJson) {
      const newLikedProducts = [product];
      localStorage.setItem("likedProducts", JSON.stringify(newLikedProducts));
    } else {
      const likedProducts = JSON.parse(likedProductsJson);
      if (!likedProducts.some((p: Product) => p.id === product.id)) {
        likedProducts.push(product);
        localStorage.setItem("likedProducts", JSON.stringify(likedProducts));
      }
    }
  };

  return (
    <>
      <div
        key={product.id}
        className="bg-white p-4 rounded-2xl shadow-sm relative hover:shadow-md transition-shadow"
      >
        <div className="relative overflow-hidden rounded-xl mb-4">
          <Image
            src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFwcGxlJTIwd2F0Y2h8ZW58MHx8MHx8fDA%3D"
            className="max-w-full aspect-square object-cover bg-white"
            alt="Product Image"
            width={500}
            height={500}
          />
          <button
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-50 p-2 rounded-full shadow-sm"
            onClick={() => setImageIndex((prev) => (prev === 0 ? 1 : 0))}
          >
            <ChevronLeft size={16} />
          </button>
          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-50 p-2 rounded-full shadow-sm"
            onClick={() => setImageIndex((prev) => (prev === 0 ? 1 : 0))}
          >
            <ChevronRight size={16} />
          </button>
        </div>
        <div className="px-2">
          <div className="flex justify-between items-start">
            <h3 className=" text-[18px] font-bold leading-[20px] text-[#202224]">
              {product.name}
            </h3>
            <button
              className={`rounded-full p-2 transition-colors ${
                isLiked ? "text-red-500 bg-red-50" : "text-red-500 bg-gray-50"
              }`}
              onClick={() => {
                setIsLiked((prev) => !prev);
                handleLikeClick();
              }}
            >
              {checked ? (
                <Heart size={20} fill={"currentColor"} />
              ) : (
                <Heart size={20} fill={isLiked ? "currentColor" : "none"} />
              )}
            </button>
          </div>
          <div className="mt-2">
            <p className="text-[16px] font-bold leading-[20px] text-[#4880FF]">
              {product.price}
            </p>
            <div className="flex items-center gap-1 mt-1">
              <RenderStars rating={product.rating} />
              <span className="text-sm text-gray-500 ml-1">
                ({product.reviews})
              </span>
            </div>
          </div>
          <div className="mt-4">
            <button className="bg-[#F4F6F8] rounded-[10px] px-4 py-2 text-[#202224]text-[14px] font-semibold hover:bg-gray-200 transition-colors ">
              Edit Product
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductItem;
