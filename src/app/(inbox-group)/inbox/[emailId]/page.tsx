"use client";

import React, { useState } from "react";
import { emails } from "@/components/inbox-group/data-inbox";
import { useRouter, useParams } from "next/navigation";
import {
  ArrowLeft,
  MoreVertical,
  Star,
  Printer,
  Send,
  Paperclip,
  Image as ImageIcon,
  Mic,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function MessagesPage() {
  const router = useRouter();
  const [newMessage, setNewMessage] = useState("");
  const { emailId } = useParams() as { emailId: string };
  const [currentEmail, setCurrentEmail] = useState(
    emails.find((e) => e.id === emailId)
  );

  if (!currentEmail) {
    return <div>Email not found</div>;
  }

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Thêm tin nhắn của người dùng
      const userMessage = {
        content: newMessage,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        isHighlighted: true,
      };

      // Cập nhật state với tin nhắn của người dùng
      setCurrentEmail((prevEmail) => {
        if (!prevEmail) return undefined;

        return {
          ...prevEmail,
          messages: [...(prevEmail.messages || []), userMessage],
        };
      });
      setNewMessage("");

      // Mô phỏng tin nhắn trả lời từ sender sau 2 giây
      setTimeout(() => {
        const replyMessage = {
          content: `Thanks for your message! Here's my reply to: "${newMessage}"`,
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          isHighlighted: false, // Tin nhắn nhận được không highlight
        };

        setCurrentEmail((prevEmail) => {
          if (!prevEmail) return undefined;
         return { 
          ...prevEmail,
          messages: [...(prevEmail.messages || []), replyMessage],
      }});
      }, 2000); // Trả lời sau 2 giây
    }
  };

  return (
    <div className="flex flex-col h-full rounded-[14px] bg-white border border-gray-200">
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-500"
            onClick={() => router.back()}
          >
            <ArrowLeft size={18} />
          </Button>
          <div>
            <h2 className="text-lg font-medium">{currentEmail.sender}</h2>
            <Badge
              variant="outline"
              className="bg-pink-50 text-pink-500 border-pink-100"
            >
              {currentEmail.label?.name || "No Label"}
            </Badge>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Printer className="h-5 w-5 text-gray-500" />
          </Button>
          <Button variant="ghost" size="icon">
            <Star className="h-5 w-5 text-gray-500" />
          </Button>
          <Button variant="ghost" size="icon">
            <MoreVertical className="h-5 w-5 text-gray-500" />
          </Button>
        </div>
      </div>

      <ScrollArea className="flex flex-end flex-1 pr-4 pl-4 max-h-[600px] ">
        <div className="space-y-6 py-4">
          {currentEmail?.messages?.map((msg, index) => (
            <div
              key={`${msg.timestamp}-${index}`}
              className={`flex ${
                msg.isHighlighted ? "justify-end" : "justify-start"
              }`}
            >
              {!msg.isHighlighted && (
                <div className="w-8 h-8 rounded-full bg-gray-200 mr-3 flex-shrink-0" />
              )}
              <div className="max-w-[75%]">
                <div
                  className={`p-4 rounded-2xl relative ${
                    msg.isHighlighted
                      ? "bg-blue-500 text-white"
                      : "bg-[#f5f5f5] text-gray-900"
                  }`}
                >
                  <p className="text-[15px] mb-4">{msg.content}</p>
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs ${
                        msg.isHighlighted ? "text-blue-100" : "text-gray-500"
                      }`}
                    >
                      {msg.timestamp}
                    </span>
                    {msg.isHighlighted && (
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-4 w-4 ml-1"
                      >
                        <MoreVertical size={12} className="text-blue-100" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="flex items-center gap-3 bg-white border">
        <Button variant="ghost" size="icon" className="text-gray-500">
          <Mic size={20} />
        </Button>

        <Textarea
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Write message"
          className="min-h-[45px] max-h-[120px] resize-none border-none  flex-1 py-3"
        />

        <div className="flex items-center gap-2 pr-2">
          <Button variant="ghost" size="icon" className="text-gray-500">
            <Paperclip size={20} />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-500">
            <ImageIcon size={20} />
          </Button>
          <Button
            className="bg-blue-500 hover:bg-blue-600 rounded-lg px-4 py-2 text-white"
            onClick={handleSendMessage}
          >
            Send <Send size={18} className="text-white" />
          </Button>
        </div>
      </div>
    </div>
  );
}
