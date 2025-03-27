import React from "react";
import { cn } from "@/lib/utils";
import {
  Mail,
  Star,
  Send,
  FileEdit,
  AlertTriangle,
  Bookmark,
  Trash2,
} from "lucide-react";

interface NavItemProps {
  name: string;
  icon: string;
  count?: number;
  isActive: boolean;
  onClick: () => void;
}

const NavItem = ({ name, icon, count, isActive, onClick }: NavItemProps) => {
  const getIcon = () => {
    switch (icon) {
      case "Mail":
        return <Mail size={20} />;
      case "Star":
        return <Star size={20} />;
      case "Send":
        return <Send size={20} />;
      case "FileEdit":
        return <FileEdit size={20} />;
      case "AlertTriangle":
        return <AlertTriangle size={20} />;
      case "Bookmark":
        return <Bookmark size={20} />;
      case "Trash2":
        return <Trash2 size={20} />;
      default:
        return <Mail size={20} />;
    }
  };

  return (
    <li>
      <button
        className={cn(
          "flex items-center w-full px-2 py-3 text-left rounded-md",
          isActive ? "bg-gray-100" : "hover:bg-gray-100"
        )}
        onClick={onClick}
      >
        <span
          className={cn(
            "mr-3 h-5 w-5 flex items-center justify-center",
            isActive ? "text-blue-500" : "text-gray-500"
          )}
        >
          {getIcon()}
        </span>
        <span
          className={cn(
            " font-nunito tracking-[-0.05px]font-nunito text-[14px] font-bold tracking-[-0.05px]",
            isActive ? "text-[#4880FF]" : "text-gray-700"
          )}
        >
          {name}
        </span>
        {count !== undefined && (
          <span
            className={cn(
              "ml-auto text-sm",
              isActive ? "text-blue-500" : "text-gray-500"
            )}
          >
            {count}
          </span>
        )}
      </button>
    </li>
  );
};

export default NavItem;
