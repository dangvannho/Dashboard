"use client";
import React, { useState } from "react";
import Header from "@/components/common/header";
import Sidebar from "@/components/common/sidebar";
import { cn } from "@/lib/utils";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar isOpen={isOpen} />
      <div className="flex-1">
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        <main
          className={cn(
            "bg-[#F5F6FA] h-[calc(100%-70px)] p-10 mt-[70px] transition-all duration-300",
            isOpen ? "ml-16" : "ml-64"
          )}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
