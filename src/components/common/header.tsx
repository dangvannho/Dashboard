"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
  ChevronDown,
  Search,
  AlignJustify,
  UserRoundCog,
  KeyRound,
  RefreshCcw,
  LogOut,
  CircleChevronDown,
  Check,
  Calendar,
  AlertCircle,
  UserRound,
  Settings
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";
import NotificationIcon from "../icon/notification-icon";
import { cn } from "@/lib/utils";

interface HeaderProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ isOpen, setIsOpen }: HeaderProps) => {
  const [notifications, setNotifications] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  useEffect(() => {
    setNotifications(3);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-64 h-[70px] bg-white border-b z-10 transition-all duration-300",
        isOpen ? "left-16" : "left-64"
      )}
    >
      <div className="h-full px-6 flex items-center">
        <div className="flex items-center gap-6">
          <AlignJustify
            className="cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />

          <div className="relative w-96">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-[19px] text-sm py-3 pl-9 bg-secondary/50 border-none focus-visible:ring-primary/20 placeholder:text-muted-foreground/70"
            />
          </div>
        </div>

        <div className="flex items-center gap-4 ml-auto">
          <DropdownMenu>
            <DropdownMenuTrigger className="focus:outline-none" asChild>
              <Button variant="ghost" size="icon" className="relative">
                <NotificationIcon />
                {notifications > 0 && (
                  <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] font-medium text-destructive-foreground">
                    {notifications}
                  </span>
                )}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="center"
              className="w-[300px] p-0 rounded-[26px]"
            >
              <DropdownMenuLabel className="font-normal px-4 py-3 text-base border-b">
                Notification
              </DropdownMenuLabel>
            

              <div className="max-h-[300px] overflow-y-auto">
                <DropdownMenuItem className="flex items-start gap-3 px-4 py-3 focus:bg-secondary/50">
                  <div className="p-2 rounded-full bg-blue-100">
                    <Settings className="h-5 w-5 text-blue-500" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium mb-0.5">Settings</h4>
                    <p className="text-xs text-muted-foreground">
                      Update Dashboard
                    </p>
                  </div>
                </DropdownMenuItem>

                <DropdownMenuItem className="flex items-start gap-3 px-4 py-3 focus:bg-secondary/50">
                  <div className="p-2 rounded-full bg-pink-100">
                    <Calendar className="h-5 w-5 text-pink-500" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium mb-0.5">Event Update</h4>
                    <p className="text-xs text-muted-foreground">
                      An event date update again
                    </p>
                  </div>
                </DropdownMenuItem>

                <DropdownMenuItem className="flex items-start gap-3 px-4 py-3 focus:bg-secondary/50">
                  <div className="p-2 rounded-full bg-purple-100">
                    <UserRound className="h-5 w-5 text-purple-500" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium mb-0.5">Profile</h4>
                    <p className="text-xs text-muted-foreground">
                      Update your profile
                    </p>
                  </div>
                </DropdownMenuItem>

                <DropdownMenuItem className="flex items-start gap-3 px-4 py-3 focus:bg-secondary/50">
                  <div className="p-2 rounded-full bg-red-100">
                    <AlertCircle className="h-5 w-5 text-red-500" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium mb-0.5">
                      Application Error
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      Check Your running application
                    </p>
                  </div>
                </DropdownMenuItem>
              </div>

              <DropdownMenuSeparator className="mb-0" />
              <DropdownMenuItem className="mt-0 px-4 py-1">
                <Button
                  variant="ghost"
                  className="w-full text-sm text-muted-foreground"
                >
                  See all notification
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="focus:outline-none">
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
                <span className="hidden sm:inline-block">
                  {selectedLanguage}
                </span>
                <ChevronDown className="h-4 w-4 opacity-60" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40 p-0">
              <DropdownMenuLabel>Select Language</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {[
                { src: "gb.svg", label: "English" },
                { src: "fr.svg", label: "French" },
                { src: "de.svg", label: "German" },
              ].map((lang) => (
                <DropdownMenuItem
                  key={lang.label}
                  className="flex items-center gap-2 py-3"
                  onClick={() => setSelectedLanguage(lang.label)}
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
                  <span>{lang.label} </span>
                  {selectedLanguage === lang.label && (
                    <Check className="h-4 w-4 ml-auto" />
                  )}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="focus:outline-none">
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
                <CircleChevronDown className="h-4 w-4 opacity-60" />
              </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="rounded-[26px] p-0">
              <DropdownMenuItem className="pl-5 pr-[50px] py-3 border-b">
                <UserRoundCog size={20} color="#4E96FF" />
                <span className="text-sm font-semibold">Manage Account</span>
              </DropdownMenuItem>

              <DropdownMenuItem className="pl-5 pr-[50px] py-3 border-b">
                <KeyRound size={20} color="#F97FD9" />
                <span className="text-sm font-semibold">Change Password</span>
              </DropdownMenuItem>

              <DropdownMenuItem className="pl-5 pr-[50px] py-3 border-b">
                <RefreshCcw size={20} color="#9E8FFF" />
                <span className="text-sm font-semibold">Activity Log</span>
              </DropdownMenuItem>

              <DropdownMenuItem className="pl-5 pr-[50px] py-3 border-b">
                <LogOut size={20} color="#FF8F8F" />
                <span className="text-sm font-semibold">Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
