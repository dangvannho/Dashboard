"use client";
import React, { useState } from "react";
import { Camera } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const EditSetting = () => {
  const [image, setImage] = useState<string | null>(null);

  return (
    <div className="w-full py-10 rounded-[14px] bg-white border border-[#B9B9B9]">
      {/* Logo Upload Section */}
      <div className="flex flex-col items-center mb-8">
        <div className="w-24 h-24 rounded-full bg-[#F5F6FA] flex items-center justify-center mb-2 relative">
          {image ? (
            <img
              src={image}
              alt="Logo"
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            <Camera className="w-8 h-8 text-gray-400" />
          )}
        </div>

        <label className="text-blue-500 text-sm cursor-pointer font-semibold">
          Upload Logo
          <input type="file" accept="image/*" className="hidden" />
        </label>
      </div>

      {/* Form Fields */}
      <div className=" max-w-[700px] mx-auto grid grid-cols-2 gap-[60px]">
        <div className="space-y-2">
          <label className="text-sm font-medium">Site Name</label>
          <Input
            placeholder="Bright Web"
            className="rounded bg-[#F5F6FA] border border-[#D5D5D5] py-3"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Copy Right</label>
          <Input
            placeholder="All rights Reserved@brightweb"
            className="rounded bg-[#F5F6FA] border border-[#D5D5D5] py-3"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">SEO Title</label>
          <Input
            placeholder="Bright web is a hybrid dashboard"
            className="rounded bg-[#F5F6FA] border border-[#D5D5D5] py-3"
          />
        </div>

        <div className="space-y-2 col-[1_/_2] row-[3_/_4]">
          <label className="text-sm font-medium">SEO Keywords</label>
          <Input
            placeholder="CEO"
            className="rounded bg-[#F5F6FA] border border-[#D5D5D5] py-3"
          />
        </div>

        <div className="space-y-2 col-[2_/_3] row-[2_/_4] flex flex-col">
          <label className="text-sm font-medium">SEO Description</label>
          <Textarea
            placeholder="Bright web is a hybrid dashboard"
            className="rounded bg-[#F5F6FA] flex-1 resize-none border border-[#D5D5D5]"
          />
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-center mt-8">
        <Button className="rounded-[12px] opacity-90 bg-[#4880FF] w-[230px] h-[50px] flex-shrink-0">
          Save
        </Button>
      </div>
    </div>
  );
};

export default EditSetting;
