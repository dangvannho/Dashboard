import React, { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface TeamMember {
  name: string;
  lastName?: string;
  role: string;
  email: string;
  phoneNumber?: string;
  gender?: string;
  imageSrc?: string;
}

const AddTeam = () => {
  const [newMember, setNewMember] = useState<TeamMember>({
    name: "",
    lastName: "",
    role: "",
    email: "",
    phoneNumber: "",
    gender: "",
    imageSrc: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setNewMember((prev) => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (value: string) => {
    setNewMember((prev) => ({ ...prev, gender: value }));
  };

  return (
    <div className="w-[1140px] h-[744px] flex-shrink-0 rounded-[14px] border border-[#ffff] bg-white p-8 shadow-sm mx-auto pr-[180px] pl-[180px]">
      <div className="flex flex-col items-center mb-6">
        <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mb-2 overflow-hidden">
          {newMember.imageSrc ? (
            <Image
              src={newMember.imageSrc}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          ) : (
            <Camera className="h-8 w-8 text-gray-400" />
          )}
        </div>
        <label className="cursor-pointer text-blue-500 text-sm font-medium">
          Upload Photo
          <input type="file" className="hidden" />
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[80px] ">
        {[
          {
            label: "First Name",
            id: "name",
            placeholder: "Enter your first name",
          },
          {
            label: "Last Name",
            id: "lastName",
            placeholder: "Enter your last name",
          },
          {
            label: "Your Email",
            id: "email",
            placeholder: "Enter your email",
            type: "email",
          },
          {
            label: "Phone Number",
            id: "phoneNumber",
            placeholder: "Enter your phone number",
          },
          { label: "Position", id: "role", placeholder: "e.g. CEO" },
        ].map(({ label, id, placeholder, type = "text" }) => (
          <div key={id}>
            <Label
              htmlFor={id}
              className="text-[#606060] font-nunito text-[14px] font-semibold pb-[10px]"
            >
              {label}
            </Label>
            <Input
              id={id}
              type={type}
              className="w-[360px] h-[52px] flex-shrink-0 bg-[#F5F6FA] border border-[#D5D5D5]"
              placeholder={placeholder}
              value={newMember[id as keyof TeamMember] || ""}
              onChange={handleInputChange}
            />
          </div>
        ))}

        <div>
          <Label
            htmlFor="gender"
            className="mb-2 block text-sm font-medium text-gray-700 pr-14"
          >
            Gender
          </Label>
          <Select value={newMember.gender} onValueChange={handleSelectChange}>
            <SelectTrigger className="bg-gray-50 h-[52px] border border-[#D5D5D5] max-w-[177px]">
              <SelectValue placeholder="Select gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-8 flex justify-center">
        <Button className="rounded-[12px] opacity-90 bg-[#4880FF] w-[274px] h-[56px] flex-shrink-0">
          Add Now
        </Button>
      </div>
    </div>
  );
};

export default AddTeam;
