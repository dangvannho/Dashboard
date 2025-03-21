"use client";

import React from "react";
import AddTeam from "@/components/team/addteam";

function page() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Add New Member</h1>
      <AddTeam />
    </div>
  );
}

export default page;
