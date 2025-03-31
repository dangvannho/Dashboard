"use client";
import React, { useState, ChangeEvent, useEffect } from "react";
import { Camera } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

const EditSetting = () => {
  const [image, setImage] = useState<string | null>(null);

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Kiểm tra kích thước file (ví dụ: giới hạn 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert("File quá lớn. Vui lòng chọn file nhỏ hơn 5MB");
        return;
      }

      // Kiểm tra loại file
      if (!file.type.startsWith("image/")) {
        alert("Vui lòng chọn file ảnh");
        return;
      }

      // Tạo URL cho ảnh preview
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  // Cleanup function khi component unmount
  useEffect(() => {
    return () => {
      // Xóa URL object khi không cần thiết nữa
      if (image) {
        URL.revokeObjectURL(image);
      }
    };
  }, [image]);

  return (
    <div className="w-full py-10 rounded-[14px] bg-white border border-[#B9B9B9]">
      {/* Logo Upload Section */}
      <div className="flex flex-col items-center mb-8">
        <div className="w-24 h-24 rounded-full bg-[#F5F6FA] flex items-center justify-center mb-2 relative overflow-hidden">
          {image ? (
            <Image
              src={image}
              alt="Logo"
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            <Camera className="w-8 h-8 text-gray-400" />
          )}
        </div>

        <label className="text-blue-500 text-sm cursor-pointer font-semibold hover:text-blue-600 transition-colors">
          Upload Logo
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
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
