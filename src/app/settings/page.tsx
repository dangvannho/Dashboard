import React from "react";
import EditSetting from "@/components/settings/edit-setting";
const Settings = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight">General Settings</h1>
      <EditSetting />
    </div>
  );
};

export default Settings;
