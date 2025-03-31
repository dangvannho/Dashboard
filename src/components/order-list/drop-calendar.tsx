"use client";
import React from "react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface DropCalendarProps {
  className?: string;
  selectedDate: Date | undefined;
  setSelectedDate: (date: Date | undefined) => void;
}

const DropCalendar = ({ className, selectedDate, setSelectedDate}: DropCalendarProps) => {
  const [tempSelected, setTempSelected] = useState<Date>();

  const handleApply = () => {
    setSelectedDate(tempSelected)
  }; 


  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className={cn(
            "flex items-center justify-between gap-2 h-full rounded-none focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0",
            className
          )}
        >
          <span className="text-sm font-semibold">
            {selectedDate
              ? selectedDate.toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })
              : "Date"}
          </span>
          <ChevronDown size={16} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80 pb-[30px] bg-white shadow-lg rounded-[26px]">
        <div className="relative pb-[24px]">
          <DayPicker mode="single" selected={tempSelected} onSelect={setTempSelected} />

          <div className="w-full h-[0.5px] bg-[#979797] absolute bottom-0"></div>
        </div>

        <p className="text-sm text-gray-500 mt-4 ml-4">
          *You can choose multiple dates
        </p>
        <DropdownMenuItem className="focus:bg-transparent">
          <Button 
            className="w-max mt-8 bg-blue-500 hover:bg-blue-600 text-white text-sm font-bold mx-auto block"
            onClick={handleApply}
          >
            Apply Now
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropCalendar;
