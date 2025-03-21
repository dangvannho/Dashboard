import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

interface UserCardProps {
  name: string;
  role: string;
  email: string;
  imageSrc?: string;
}

const Profile = ({ name, role, email, imageSrc }: UserCardProps) => {
  return (
    <Card className="w-full min-h-[300px] bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
      <div className="flex flex-col items-center p-8">
        <Avatar className="h-35 w-24 mb-6 border-2 border-gray-100 shadow-sm">
          <AvatarImage
            src={
              imageSrc ||
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
            }
            alt={name}
            className="object-cover"
          />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <CardContent className="p-0 space-y-3 text-center w-full mt-2">
          <h3 className="text-[#202224] text-center text-[16px] font-bold leading-normal">
            {name}
          </h3>
          <p className="text-gray-600 font-medium text-sm">{role}</p>
          <p className="text-gray-500 text-xs pt-1">{email}</p>
        </CardContent>
      </div>
    </Card>
  );
};

export default Profile;
