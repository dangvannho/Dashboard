import React from "react";
import { cn } from "@/lib/utils";
interface SidebarSectionProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const SidebarSection = ({
  title,
  children,
  className,
}: SidebarSectionProps) => {
  return (
    <div className={cn("space-y-1 py-4", className)}>
      {title && (
        <div className="px-4 py-2">
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
