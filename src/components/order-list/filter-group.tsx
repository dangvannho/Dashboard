"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Filter, RotateCcw } from "lucide-react";
import DropCalendar from "./drop-calendar";
import DropMenu from "./drop-menu";

const dataMenu = [
  {
    title: "Order Type",
    subTitle: "Select Order Type",
    orderTypes: [
      "Health & Medicine",
      "Book & Stationary",
      "Services & Industry",
      "Fashion & Beauty",
      "Home & Living",
      "Electronics",
      "Mobile & Phone",
      "Accessories",
    ],
  },
  {
    title: "Order Status",
    subTitle: "Select Order Status",
    orderTypes: [
      "Completed",
      "Processing",
      "Rejected",
      "On Hold",
      "In Transit",
    ],
  },
];
const FilterGroup = () => {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [tempSelectedTypes, setTempSelectedTypes] = useState<string[]>([]);

  const toggleSelection = (type: string) => {
    setTempSelectedTypes((prev) =>
      prev.includes(type)
        ? prev.filter((item) => item !== type)
        : [...prev, type]
    );
  };

  const applySelections = () => {
    setSelectedTypes(tempSelectedTypes); // Chỉ lưu khi bấm Apply
  };

  const resetSelections = () => {
    setSelectedTypes([]);
    setTempSelectedTypes([]);
  };

  // Đồng bộ tempSelectedTypes với selectedTypes khi menu mở
  const initializeTempSelections = () => {
    setTempSelectedTypes(selectedTypes);
  };

  return (
    <div className="flex flex-wrap items-center h-[60px] w-[650px]">
      <Button
        variant="outline"
        size="sm"
        className="flex items-center gap-2 h-full rounded-tl-lg rounded-bl-lg rounded-tr-none rounded-br-none flex-1"
      >
        <Filter size={16} />
        <span className="text-sm font-semibold">Filter By</span>
      </Button>

      <DropCalendar className="flex-1" />

      {dataMenu.map((item, index) => (
        <DropMenu
          key={index}
          title={item.title}
          subTitle={item.subTitle}
          className="flex-1"
          orderTypes={item.orderTypes}
          tempSelectedTypes={tempSelectedTypes}
          toggleSelection={toggleSelection}
          applySelections={applySelections}
          initializeTempSelections={initializeTempSelections}
        />
      ))}

      <Button
        variant="outline"
        size="sm"
        className="flex flex-1 items-center gap-2 text-rose-500 hover:bg-rose-50 hover:text-rose-500 h-full rounded-tr-lg rounded-br-lg rounded-tl-none rounded-bl-none"
        onClick={resetSelections}
      >
        <RotateCcw size={16} />
        <span className="text-sm font-semibold">Reset Filter</span>
      </Button>
    </div>
  );
};

export default FilterGroup;
