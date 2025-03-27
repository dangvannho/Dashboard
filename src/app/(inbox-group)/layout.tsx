"use client";

import React, { useState } from "react";
import { useRouter } from "next/router";
import InboxSidebar from "@/components/inbox-group/inbox-sidebar";
import { emails } from "@/components/inbox-group/data-inbox";

const InboxLayout = ({ children }: { children: React.ReactNode }) => {
  const [activeFolder, setActiveFolder] = useState("Inbox");
  const [activeLabel, setActiveLabel] = useState<string | null>(null);

  return (
    <div className="h-full">
      <h1 className="text-2xl font-bold text-[#202224]">Inbox</h1>

      <div className="flex gap-4 h-[calc(100%-48px)]">
        <InboxSidebar
          activeFolder={activeFolder}
          setActiveFolder={setActiveFolder}
          activeLabel={activeLabel}
          setActiveLabel={setActiveLabel}
          counts={{
            inbox: emails.filter((e) => !e.folder || e.folder === "Inbox")
              .length,
            starred: emails.filter((e) => e.starred).length,
            sent: emails.filter((e) => e.folder === "Sent").length,
            draft: emails.filter((e) => e.folder === "Draft").length,
            spam: emails.filter((e) => e.folder === "Spam").length,
            important: emails.filter((e) => e.folder === "Important").length,
            bin: emails.filter((e) => e.folder === "Bin").length,
          }}
        />
        <div className="flex-1 rounded-[14px] bg-white border border-gray-200">
          {children}
        </div>
      </div>
    </div>
  );
};

export default InboxLayout;
