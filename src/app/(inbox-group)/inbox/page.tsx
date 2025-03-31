"use client";

import React, { useState } from "react";
import EmailList from "@/components/inbox-group/emailList";
import { emails as mockEmails } from "@/components/inbox-group/data-inbox";
import { Input } from "@/components/ui/input";
import { Bell, Grid3X3, Search, Settings } from "lucide-react";
export default function EmailClientPage() {
  const [emails, setEmails] = useState(mockEmails);
  const [selectedEmails, setSelectedEmails] = useState<string[]>([]);
  const [activeFolder, setActiveFolder] = useState("Inbox");
  const [activeLabel, setActiveLabel] = useState<string | null>(null);

  console.log(setActiveFolder);
  console.log(setActiveLabel)
  
  const filteredEmails = emails
    .filter((email) => {
      if (activeFolder === "Inbox")
        return !email.folder || email.folder === "Inbox";
      if (activeFolder === "Starred") return email.starred;
      if (activeFolder === "Sent") return email.folder === "Sent";
      if (activeFolder === "Draft") return email.folder === "Draft";
      if (activeFolder === "Spam") return email.folder === "Spam";
      if (activeFolder === "Important") return email.folder === "Important";
      if (activeFolder === "Bin") return email.folder === "Bin";
      return true;
    })
    .filter((email) => {
      if (activeLabel && email.label?.name !== activeLabel) return false;
      return true;
    });

  const handleEmailSelect = (emailId: string) => {
    setEmails(
      emails.map((email) =>
        email.id === emailId ? { ...email, read: true } : email
      )
    );
  };

  const handleEmailCheck = (emailId: string, checked: boolean) => {
    setSelectedEmails((prev) =>
      checked ? [...prev, emailId] : prev.filter((id) => id !== emailId)
    );
  };

  const handleStarToggle = (emailId: string) => {
    setEmails(
      emails.map((email) =>
        email.id === emailId ? { ...email, starred: !email.starred } : email
      )
    );
  };

  return (
    <div className="p-6">
      <div className="p-3 border-b flex items-center justify-between">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            className="w-[240px] h-[36px] pl-10 rounded-[20px] border border-[#E2E8F0] bg-[#F8FAFC] text-sm placeholder:text-gray-400 focus:outline-none focus:ring-0 focus:border-[#E2E8F0]"
            placeholder="Search mail"
          />
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-1.5 text-gray-500 hover:bg-gray-100 rounded-md">
            <Grid3X3 className="h-5 w-5" />
          </button>
          <button className="p-1.5 text-gray-500 hover:bg-gray-100 rounded-md">
            <Bell className="h-5 w-5" />
          </button>
          <button className="p-1.5 text-gray-500 hover:bg-gray-100 rounded-md">
            <Settings className="h-5 w-5" />
          </button>
        </div>
      </div>
      <EmailList
        emails={filteredEmails}
        selectedEmails={selectedEmails}
        onEmailSelect={handleEmailSelect}
        onEmailCheck={handleEmailCheck}
        onStarToggle={handleStarToggle}
      />
    </div>
  );
}
