"use client";
import React, { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Button } from "../ui/button";

interface Order {
  id: string;
  name: string;
  address: string;
  date: string;
  type: string;
  status: "Completed" | "Processing" | "Rejected" | "On Hold" | "In Transit";
}

const statusColors: Record<string, string> = {
  Completed: "bg-green-100 text-green-600",
  Processing: "bg-purple-100 text-purple-600",
  Rejected: "bg-red-100 text-red-600",
  "On Hold": "bg-orange-100 text-orange-600",
  "In Transit": "bg-blue-100 text-blue-600",
};

const orderData: Order[] = [
  {
    id: "00001",
    name: "Christine Brooks",
    address: "089 Kutch Green Apt. 448",
    date: "04 Sep 2019",
    type: "Electric",
    status: "Completed",
  },
  {
    id: "00002",
    name: "Rosie Pearson",
    address: "979 Immanuel Ferry Suite 526",
    date: "28 May 2019",
    type: "Book",
    status: "Processing",
  },
  {
    id: "00003",
    name: "Darrell Caldwell",
    address: "8587 Frida Ports",
    date: "23 Nov 2019",
    type: "Medicine",
    status: "Rejected",
  },
  {
    id: "00004",
    name: "Gilbert Johnston",
    address: "768 Destiny Lake Suite 600",
    date: "05 Feb 2019",
    type: "Mobile",
    status: "Completed",
  },
  {
    id: "00005",
    name: "Alan Cain",
    address: "042 Mylene Throughway",
    date: "29 Jul 2019",
    type: "Watch",
    status: "Processing",
  },
  {
    id: "00006",
    name: "Alfred Murray",
    address: "543 Weimann Mountain",
    date: "15 Aug 2019",
    type: "Medicine",
    status: "Completed",
  },
  {
    id: "00007",
    name: "Maggie Sullivan",
    address: "New Scottieberg",
    date: "21 Dec 2019",
    type: "Watch",
    status: "Processing",
  },
  {
    id: "00008",
    name: "Rosie Todd",
    address: "New Jon",
    date: "30 Apr 2019",
    type: "Medicine",
    status: "On Hold",
  },
  {
    id: "00009",
    name: "Dollie Hines",
    address: "124 Lyla Forge Suite 975",
    date: "09 Jan 2019",
    type: "Book",
    status: "In Transit",
  },
];

export default function OrderTable() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    setOrders(orderData);
  }, []);

  return (
    <div className="space-y-5">
      <div className="border rounded-[14px] border-[#D5D5D5] overflow-hidden">
        <Table className="w-full">
          <TableHeader className="bg-[#FCFDFD]">
            <TableRow>
              {["ID", "Name", "Address", "Date", "Type", "Status"].map(
                (header) => (
                  <TableHead
                    key={header}
                    className="text-gray-700 text-sm font-extrabold uppercase py-3 pl-6 h-[50px] last:pl-8"
                  >
                    {header}
                  </TableHead>
                )
              )}
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white">
            {orders.map((order) => (
              <TableRow
                key={order.id}
                className="border-b hover:bg-gray-50 transition h-[65px]"
              >
                <TableCell className="py-3 pl-6 text-sm text-gray-800">
                  {order.id}
                </TableCell>
                <TableCell className="py-3 pl-6 text-sm text-gray-800">
                  {order.name}
                </TableCell>
                <TableCell className="py-3 pl-6 text-sm text-gray-800">
                  {order.address}
                </TableCell>
                <TableCell className="py-3 pl-6 text-sm text-gray-800">
                  {order.date}
                </TableCell>
                <TableCell className="py-3 pl-6 text-sm text-gray-800">
                  {order.type}
                </TableCell>
                <TableCell className="py-3 pl-6 text-sm text-gray-800">
                  <Badge
                    className={`min-w-[80px] px-2 py-1 text-xs justify-center rounded-md ${
                      statusColors[order.status]
                    }`}
                  >
                    {order.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between px-6">
        <div className="text-sm text-gray-500">Showing 1-9 of 9</div>

        <div className="flex gap-2">
          <Button variant="outline" size="icon">
            <ChevronLeft size={16} />
          </Button>

          <Button variant="outline" size="icon">
            <ChevronRight size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
}
