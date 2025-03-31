import React from "react";
import { Button } from "@/components/ui/button";
import Profile from "@/components/team/profile";
import Link from "next/link";

interface TeamMember {
  name: string;
  role: string;
  email: string;
  imageSrc: string;
}

const TeamPage = () => {
  const data: TeamMember[] = [
    {
      name: "Nguyễn Văn A",
      role: "Frontend Developer",
      email: "nguyenvana@example.com",
      imageSrc: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Trần Thị B",
      role: "UI/UX Designer",
      email: "tranthib@example.com",
      imageSrc: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      name: "Lê Văn C",
      role: "Backend Developer",
      email: "levanc@example.com",
      imageSrc: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      name: "Phạm Thị D",
      role: "Project Manager",
      email: "phamthid@example.com",
      imageSrc: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      name: "Hoàng Văn E",
      role: "Fullstack Developer",
      email: "hoangvane@example.com",
      imageSrc: "https://randomuser.me/api/portraits/men/5.jpg",
    },
  ];

  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Team</h1>
        <Button className="w-[147px] h-[48px] flex-shrink-0 rounded-md bg-[#4379EE] text-white">
          <Link href="/team/addteam">Add New Member</Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data.map((member, index) => (
          <Profile
            key={index}
            name={member.name}
            role={member.role}
            email={member.email}
            imageSrc={member.imageSrc}
          />
        ))}
      </div>
    </>
  );
};

export default TeamPage;
