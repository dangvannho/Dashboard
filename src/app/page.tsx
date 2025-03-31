import React from "react";
import ListCard from "@/components/dashboard/list-card";
import Chart from "@/components/dashboard/chart";
import Deal from "@/components/dashboard/deal";

export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Dashboard</h1>
      <ListCard />
      <Chart />
      <Deal />
    </div>
  );
}
