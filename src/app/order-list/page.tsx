import React from "react";
import FilterGroup from "@/components/order-list/filter-group";
import Orders from "@/components/order-list/orders";
const OrderList = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight">Order Lists</h1>
      <FilterGroup />
      <Orders />
    </div>
  );
};

export default OrderList;
