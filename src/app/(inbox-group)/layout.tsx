import React from "react";
import InboxSidebar from "@/components/inbox-group/inbox-sidebar";

const InboxLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <h1 className="text-3xl font-bold tracking-tight">Inbox</h1>
      <div className="mt-5 flex gap-4 h-[calc(100%-40px)]">
        <InboxSidebar />
        <div className="flex-1 rounded-[14px] bg-white border border-[#B9B9B9]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default InboxLayout;
