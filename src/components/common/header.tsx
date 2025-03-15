"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDown, Search, AlignJustify } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";
import NotificationIcon from "../icon/notification-icon";

const Header = () => {
  const [notifications, setNotifications] = useState(0);

  useEffect(() => {
    setNotifications(3);
  }, []);

  return (
    <header className="w-[calc(100%-256px)] fixed z-10 right-0 top-0 h-[70px] border-b border-border bg-background flex items-center justify-between px-4 md:px-6 ">
      <div className="flex items-center gap-6 ml-5">
        <AlignJustify className="cursor-pointer" />

        <div className="relative w-96">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-full rounded-[19px] text-sm py-3 pl-9 bg-secondary/50 border-none focus-visible:ring-primary/20 placeholder:text-muted-foreground/70"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative">
          <NotificationIcon />
          {notifications > 0 && (
            <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] font-medium text-destructive-foreground">
              {notifications}
            </span>
          )}
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="flex items-center gap-1.5 text-sm font-medium">
              <span className="h-5 w-7 rounded overflow-hidden flex-shrink-0">
                <Image
                  src="https://images.unsplash.com/photo-1741017638661-dab7a153f925?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="UK"
                  width={28}
                  height={20}
                  className="h-full w-full object-cover"
                />
              </span>
              <span className="hidden sm:inline-block">English</span>
              <ChevronDown className="h-4 w-4 opacity-60" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-40">
            {[
              { src: "gb.svg", label: "English" },
              { src: "fr.svg", label: "French" },
              { src: "de.svg", label: "German" },
            ].map((lang) => (
              <DropdownMenuItem
                key={lang.label}
                className="flex items-center gap-2"
              >
                <span className="h-4 w-6 rounded overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1741017638661-dab7a153f925?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt={lang.label}
                    width={24}
                    height={16}
                    className="h-full w-full object-cover"
                  />
                </span>
                <span>{lang.label}</span>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8 border border-border">
            <Image
              src="https://images.unsplash.com/photo-1741017638661-dab7a153f925?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="avatar"
              width={32}
              height={32}
              className="object-cover"
            />
          </Avatar>
          <div className="hidden md:block">
            <div className="text-sm font-medium">Moni Roy</div>
            <div className="text-xs text-muted-foreground">Admin</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
