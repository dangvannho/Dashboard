"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  href: string;
}

const SidebarItem = ({ icon: Icon, label, href }: SidebarItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <div className="px-5 relative">
      <Link
        href={href}
        className={cn(
          "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 group hover:bg-primary hover:text-white ",
          isActive
            ? "bg-primary text-primary-foreground hover:bg-primary/90"
            : "text-sidebar-foreground"
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
        <span>{label}</span>
      </Link>
      {isActive && (
        <div className="h-full w-1 rounded-r-md bg-primary absolute left-0 top-0"></div>
      )}
    </div>
  );
};

export default SidebarItem;
