import React from "react";
import { cn } from "@/lib/utils";
interface SidebarSectionProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  isOpen?: boolean;
}

const SidebarSection = ({
  title,
  children,
  className,
  isOpen,
}: SidebarSectionProps) => {
  return (
    <div className={cn("space-y-1 py-4", className)}>
      {title && (
        <div className={cn("px-4 py-2", isOpen && "hidden")}>
          <h3 className="text-xs font-semibold text-sidebar-foreground/60 tracking-wider uppercase">
            {title}
          </h3>
        </div>
      )}
      <div className="space-y-1">{children}</div>
    </div>
  );
};

export default SidebarSection;
