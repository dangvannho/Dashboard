"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  href: string;
  isOpen?: boolean;
}

const SidebarItem = ({ icon: Icon, label, href, isOpen }: SidebarItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <div className={cn("relative", isOpen ? "px-0" : "px-5")}>
      <Link
        href={href}
        className={cn(
          "flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-all duration-300 group hover:bg-primary hover:text-white ",
          isActive
            ? "bg-primary text-primary-foreground hover:bg-primary/90"
            : "text-sidebar-foreground",
          isOpen && "justify-center"
        )}
      >
        <Icon
          className={cn(
            "h-5 w-5",
            isActive
              ? "text-primary-foreground"
              : "text-sidebar-foreground/70 group-hover:text-sidebar-foreground"
          )}
        />
        <span className={cn(isOpen && "hidden")}>{label}</span>
      </Link>
      {isActive && (
        <div
          className={cn(
            "h-full w-1 rounded-r-md bg-primary absolute left-0 top-0",
            isOpen && "hidden"
          )}
        ></div>
      )}
    </div>
  );
};

export default SidebarItem;
