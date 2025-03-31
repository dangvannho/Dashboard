import React from "react";
import { Users, ShoppingBag, DollarSign, Clock } from "lucide-react";
import StatCard from "./stat-card";

const CARDS = [
  {
    title: "Total Users",
    value: "40,689",
    trend: {
      value: 8.5,
      direction: "up",
      timeframe: "yesterday",
    },
    icon: Users,
    iconBgColor: "bg-indigo-50",
    iconColor: "text-indigo-600",
  },
  {
    title: "Total Orders",
    value: "10293",
    trend: {
      value: 1.3,
      direction: "up",
      timeframe: "last week",
    },
    icon: ShoppingBag,
    iconBgColor: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    title: "Total Sales",
    value: "$89,000",
    trend: {
      value: 4.3,
      direction: "down",
      timeframe: "yesterday",
    },
    icon: DollarSign,
    iconBgColor: "bg-rose-50",
    iconColor: "text-rose-600",
  },
  {
    title: "Total Orders",
    value: "10293",
    trend: {
      value: 1.3,
      direction: "up",
      timeframe: "last week",
    },
    icon: Clock,
    iconBgColor: "bg-sky-50",
    iconColor: "text-sky-600",
  },
];
const ListCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {CARDS.map((card) => (
        <StatCard
          key={card.title}
          title={card.title}
          value={card.value}
          trend={card.trend}
          icon={card.icon}
          iconBgColor={card.iconBgColor}
          iconColor={card.iconColor}
        />
      ))}
    </div>
  );
};

export default ListCard;
