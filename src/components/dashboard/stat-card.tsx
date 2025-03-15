import React from "react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  trend: {
    value: number;
    direction: string;
    timeframe: string;
  };
  icon: React.ElementType;
  iconBgColor?: string;
  iconColor?: string;
  className?: string;
}

const StatCard = ({
  title,
  value,
  trend,
  icon: Icon,
  iconBgColor,
  iconColor,
  className,
}: StatCardProps) => {
  const isPositive = trend.direction === "up";

  return (
    <div
      className={cn(
        "bg-white rounded-[14px] hover:shadow-md transition-all duration-300 cursor-pointer p-6 flex items-center justify-between",
        className
      )}
    >
      <div className="space-y-2">
        <p className="text-lg font-medium text-muted-foreground">{title}</p>
        <div className="flex flex-col space-y-1">
          <h3 className="text-2xl font-bold tracking-tight">{value}</h3>
          <div className="flex items-center text-sm font-medium">
            <div
              className={cn(
                "flex items-center mr-1",
                isPositive ? "text-emerald-500" : "text-rose-500"
              )}
            >
              {isPositive ? (
                <ArrowUpRight className="h-3 w-3 mr-1" />
              ) : (
                <ArrowDownRight className="h-3 w-3 mr-1" />
              )}
              {Math.abs(trend.value)}%
            </div>
            <span className="text-muted-foreground text-sm">
              from {trend.timeframe}
            </span>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "rounded-full p-3 transition-transform duration-300",
          iconBgColor
        )}
      >
        <Icon className={cn("h-7 w-7", iconColor)} />
      </div>
    </div>
  );
};

export default StatCard;
