"use client";

import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import NavItem from "./sidebar-navItem";

interface EmailSidebarProps {
  activeFolder: string;
  setActiveFolder: (folder: string) => void;
  activeLabel: string | null;
  setActiveLabel: (label: string | null) => void;
  counts: {
    inbox: number;
    starred: number;
    sent: number;
    draft: number;
    spam: number;
    important: number;
    bin: number;
  };
}

const InboxSidebar = ({
  activeFolder,
  setActiveFolder,
  activeLabel,
  setActiveLabel,
  counts,
}: EmailSidebarProps) => {
  const folders = [
    { name: "Inbox", icon: "Mail", count: counts.inbox },
    { name: "Starred", icon: "Star", count: counts.starred },
    { name: "Sent", icon: "Send", count: counts.sent },
    { name: "Draft", icon: "FileEdit", count: counts.draft },
    { name: "Spam", icon: "AlertTriangle", count: counts.spam },
    { name: "Important", icon: "Bookmark", count: counts.important },
    { name: "Bin", icon: "Trash2", count: counts.bin },
  ];

  const labels = [
    { name: "Primary", color: "#4CAF50" },
    { name: "Social", color: "#2196F3" },
    { name: "Work", color: "#FF9800" },
    { name: "Friends", color: "#E91E63" },
  ];

  return (
    <div className="w-[286px] h-full flex-shrink-0 rounded-[14px] border border-[#ffff] bg-white p-6">
      <button className="w-[238px] h-[43px] flex-shrink-0 rounded-[8px] bg-[#4880FF] opacity-90">
        <span className="text-white text-center  text-[14px] font-bold tracking-[-0.05px]">
          + Compose
        </span>
      </button>

      <div className="mt-8">
        <h3 className="text-[#202224] text-[16px] font-bold tracking-[-0.057px] py-1.5">
          My Email
        </h3>
        <nav>
          <ul>
            {folders.map((folder) => (
              <NavItem
                key={folder.name}
                name={folder.name}
                icon={folder.icon}
                count={folder.count}
                isActive={activeFolder === folder.name}
                onClick={() => {
                  setActiveFolder(folder.name);
                  setActiveLabel(null);
                }}
              />
            ))}
          </ul>
        </nav>
      </div>

      <div className="mt-8">
        <h3 className="text-[#202224] text-base font-bold mb-4">Label</h3>
        {labels.map((label) => (
          <div
            key={label.name}
            className={cn(
              "flex items-center gap-3 py-2.5 px-4 rounded-md hover:bg-[#EEF2FF] cursor-pointer",
              activeLabel === label.name && "bg-[#EEF2FF]"
            )}
            onClick={() => setActiveLabel(label.name)}
          >
            <div
              className="w-[18px] h-[18px] border rounded-sm"
              style={{ borderColor: label.color }}
            />
            <span
              className={cn(
                "font-nunito text-[14px] font-bold tracking-[-0.05px]",
                activeLabel === label.name && "text-[#4880FF]"
              )}
            >
              {label.name}
            </span>
          </div>
        ))}
        <div className="flex items-center gap-3 py-2.5 px-4 mt-1 cursor-pointer hover:bg-[#EEF2FF] rounded-md">
          <Plus size={18} className="text-[#202224]" />
          <span className="text-[14px] text-[#202224]">Create New Label</span>
        </div>
      </div>
    </div>
  );
};

export default InboxSidebar;
