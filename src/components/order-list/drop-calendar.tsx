"use client";
import React from "react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
} from "date-fns";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

const DropCalendar = ({ className }: { className?: string }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);

  // Lấy danh sách ngày trong tháng
  const days = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth),
  });

  // Chuyển tháng
  const goToPrevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  const goToNextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

  // Xử lý chọn ngày
  const toggleDateSelection = (date: Date) => {
    setSelectedDates((prev) =>
      prev.some((d) => d.getTime() === date.getTime())
        ? prev.filter((d) => d.getTime() !== date.getTime())
        : [...prev, date]
    );
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
          <span className="text-sm font-semibold">Date</span>
          <ChevronDown size={16} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80 p-4 bg-white shadow-lg rounded-[26px]">
        <div className="relative pb-[24px]">
          {/* Header */}
          <div className="flex justify-between items-center mb-3">
            <Button variant="ghost" size="icon" onClick={goToPrevMonth}>
              <ChevronLeft size={20} />
            </Button>
            <h3 className="text-lg font-semibold">
              {format(currentMonth, "MMMM yyyy")}
            </h3>
            <Button variant="ghost" size="icon" onClick={goToNextMonth}>
              <ChevronRight size={20} />
            </Button>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 text-center text-gray-500 text-sm mb-2">
            {["S", "M", "T", "W", "T", "F", "S"].map((day) => (
              <div key={day} className="font-semibold">
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {days.map((day) => (
              <button
                key={day.toISOString()}
                className={cn(
                  "w-10 h-10 flex items-center justify-center rounded-full text-sm font-medium",
                  selectedDates.some((d) => d.getTime() === day.getTime())
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-200"
                )}
                onClick={() => toggleDateSelection(day)}
              >
                {format(day, "d")}
              </button>
            ))}
          </div>
          <div className="w-full h-[0.5px] bg-[#979797] absolute bottom-0"></div>
        </div>

        {/* Footer */}
        <p className="text-sm text-gray-500 mt-4">
          *You can choose multiple dates
        </p>
        <Button className="w-max mt-8 bg-blue-500 hover:bg-blue-600 text-white text-sm font-bold mx-auto block">
          Apply Now
        </Button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropCalendar;
