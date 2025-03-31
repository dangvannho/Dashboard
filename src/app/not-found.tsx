import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-10rem)] text-center">
      <h1 className="text-9xl font-bold text-primary/10">404</h1>
      <h2 className="text-2xl font-semibold mt-4">Page Not Found</h2>
      <p className="text-muted-foreground mt-2 max-w-md">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Button className="mt-8" asChild>
        <Link href="/">Return to Dashboard</Link>
      </Button>
    </div>
  );
};

export default NotFound;
