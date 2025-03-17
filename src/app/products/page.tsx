"use client";
import Banner from "@/components/products/banner";
import ListProduct from "@/components/products/list-product";

export default function Product() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Product</h1>
      <Banner />
      <ListProduct />
    </div>
  );
}
