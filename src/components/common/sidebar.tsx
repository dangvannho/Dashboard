"use client";
import {
  Gauge,
  ShoppingBag,
  Heart,
  Inbox,
  ClipboardList,
  PackageOpen,
  CreditCard,
  CalendarDays,
  CheckSquare,
  UserRound,
  Receipt,
  Layers,
  Users,
  Table,
  Settings,
  LogOut,
} from "lucide-react";
import React from "react";
import SidebarItem from "./sidebar-item";
import SidebarSection from "./sidebar-section";
import Logo from "../icon/logo";
import { cn } from "@/lib/utils";

const DASHBOARD_SIDEBAR = [
  {
    icon: Gauge,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: ShoppingBag,
    label: "Products",
    href: "/products",
  },
  {
    icon: Heart,
    label: "Favorites",
    href: "/favorites",
  },
  {
    icon: Inbox,
    label: "Inbox",
    href: "/inbox",
  },
  {
    icon: ClipboardList,
    label: "Order Lists",
    href: "/order-list",
  },
  {
    icon: PackageOpen,
    label: "Product Stock",
    href: "/product-stock",
  },
];

const PAGES_SIDEBAR = [
  {
    icon: CreditCard,
    label: "Pricing",
    href: "/pricing",
  },
  {
    icon: CalendarDays,
    label: "Calender",
    href: "/calender",
  },
  {
    icon: CheckSquare,
    label: "To-Do",
    href: "/todo",
  },
  {
    icon: UserRound,
    label: "Contact",
    href: "/contact",
  },
  {
    icon: Receipt,
    label: "Invoice",
    href: "/invoice",
  },
  {
    icon: Layers,
    label: "UI Elements",
    href: "/ui-elements",
  },
  {
    icon: Users,
    label: "Team",
    href: "/team",
  },
  {
    icon: Table,
    label: "Table",
    href: "/table",
  },
];
function Sidebar({ isOpen }: { isOpen: boolean }) {
  return (
    <aside
      className={cn(
        "fixed top-0 w-64 h-screen border-r border-border flex flex-col",
        isOpen ? "w-16" : "w-64"
      )}
    >
      <div
        className={cn(
          "flex h-[70px] items-center gap-2 px-6 border-b border-border overflow-hidden"
        )}
      >
        {isOpen ? (
          <Logo />
        ) : (
          <>
            <span className="text-xl font-bold tracking-tight text-primary">
              Dash
            </span>
            <span className="text-xl font-bold tracking-tight">Stack</span>
          </>
        )}
      </div>

      <div
        className={cn(
          "flex-1 overflow-y-auto scrollbar-hide",
          isOpen && "px-2"
        )}
      >
        <div className="flex flex-col">
          <div className="flex-1 border-b border-[#E0E0E0] ">
            <SidebarSection>
              {DASHBOARD_SIDEBAR.map((item) => (
                <SidebarItem
                  key={item.href}
                  icon={item.icon}
                  label={item.label}
                  href={item.href}
                  isOpen={isOpen}
                />
              ))}
            </SidebarSection>
          </div>

          <div className="flex-1 border-b border-[#E0E0E0]">
            <SidebarSection title="PAGES" isOpen={isOpen}>
              {PAGES_SIDEBAR.map((item) => (
                <SidebarItem
                  key={item.href}
                  icon={item.icon}
                  label={item.label}
                  href={item.href}
                  isOpen={isOpen}
                />
              ))}
            </SidebarSection>
          </div>
        </div>

        <div className="flex-1">
          <SidebarSection className="py-0">
            <SidebarItem
              icon={Settings}
              label="Settings"
              href="/settings"
              isOpen={isOpen}
            />
            <SidebarItem
              icon={LogOut}
              label="Logout"
              href="/logout"
              isOpen={isOpen}
            />
          </SidebarSection>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
