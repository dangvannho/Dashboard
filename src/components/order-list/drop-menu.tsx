import React from "react";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface DropMenuProps {
  title: string;
  subTitle: string;
  className?: string;
  orderTypes: string[];
  tempSelectedTypes: string[];
  toggleSelection: (type: string) => void;
  applySelections: () => void;
  initializeTempSelections: () => void;
}

const DropMenu = ({
  title,
  subTitle,
  className,
  orderTypes,
  tempSelectedTypes,
  toggleSelection,
  applySelections,
  initializeTempSelections,
}: DropMenuProps) => {
  return (
    <DropdownMenu onOpenChange={(open) => open && initializeTempSelections()}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className={cn(
            "flex items-center justify-between gap-2 h-full rounded-none focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0",
            className
          )}
        >
          <span className="text-sm font-semibold">{title}</span>
          <ChevronDown size={16} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[550px] pt-6 px-6 pb-[30px] bg-white shadow-lg rounded-[26px]">
        <h3 className="text-lg font-bold mb-3">{subTitle}</h3>
        <div className="relative grid grid-cols-3 gap-2 mt-[23px] pb-[24px]">
          {orderTypes.map((type, index) => (
            <button
              key={index}
              className={cn(
                "px-3 py-2 rounded-full border text-sm font-medium",
                tempSelectedTypes.includes(type)
                  ? "bg-blue-500 text-white"
                  : "border-gray-300 text-gray-700 hover:bg-gray-100"
              )}
              onClick={() => toggleSelection(type)}
            >
              {type}
            </button>
          ))}
          <div className="w-full h-[0.5px] bg-[#979797] absolute bottom-0"></div>
        </div>
        <p className="text-sm text-gray-500 mt-4">
          {`*You can choose multiple ${title}`}
        </p>
        <DropdownMenuItem className="focus:bg-transparent">
          <Button
            className="w-max mt-8 bg-blue-500 hover:bg-blue-600 text-white text-sm font-bold mx-auto block"
            onClick={applySelections}
          >
            Apply Now
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropMenu;
