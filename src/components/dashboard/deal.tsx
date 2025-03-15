"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "../ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

const MONTH = [
  "Janauary",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const transactions = [
  {
    id: 1,
    product: "Apple Watch",
    imageUrl:
      "https://images.unsplash.com/photo-1544117519-31a4b719223d?q=80&w=2704&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "6096 Marjolaine Landing",
    date: "12.09.2019 - 12:53 PM",
    pieces: 423,
    amount: 34295,
    status: "Delivered",
  },
  {
    id: 2,
    product: "MacBook Pro",
    imageUrl:
      "https://images.unsplash.com/photo-1544117519-31a4b719223d?q=80&w=2704&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "249 Reuben Viaduct",
    date: "10.07.2019 - 2:20 PM",
    pieces: 152,
    amount: 12500,
    status: "Shipped",
  },
  {
    id: 3,
    product: "iPhone 15 Pro",
    imageUrl:
      "https://images.unsplash.com/photo-1544117519-31a4b719223d?q=80&w=2704&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "3621 Erdman Passage",
    date: "01.10.2019 - 10:15 AM",
    pieces: 189,
    amount: 18900,
    status: "Processing",
  },
  {
    id: 4,
    product: "AirPods Pro",
    imageUrl:
      "https://images.unsplash.com/photo-1544117519-31a4b719223d?q=80&w=2704&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location: "4718 Kihn Overpass",
    date: "05.12.2019 - 9:30 AM",
    pieces: 320,
    amount: 6400,
    status: "Delivered",
  },
];

const Deal = () => {
  const [selectedMonth, setSelectedMonth] = useState("January");
  return (
    <div className="rounded-[14px] bg-white p-[32px]">
      <div className="flex justify-between">
        <h2 className="font-bold text-2xl ">Sale Details</h2>

        <Select
          value={selectedMonth}
          onValueChange={(value) => setSelectedMonth(value)}
        >
          <SelectTrigger className="w-[120px]">
            <SelectValue>{selectedMonth}</SelectValue>
          </SelectTrigger>
          <SelectContent>
            {MONTH.map((month) => (
              <SelectItem key={month} value={month}>
                {month}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* table */}
      <Table className="mt-10">
        <TableHeader className="bg-muted/30">
          <TableRow>
            <TableHead className="tetx-sm font-bold text-black">
              Product Name
            </TableHead>
            <TableHead className="tetx-sm font-bold text-black">
              Location
            </TableHead>
            <TableHead className="tetx-sm font-bold text-black">
              Date - Time
            </TableHead>
            <TableHead className="tetx-sm font-bold text-black">
              Piece
            </TableHead>
            <TableHead className="tetx-sm font-bold text-black">
              Amount
            </TableHead>
            <TableHead className="tetx-sm font-bold text-black text-left px-5">
              Status
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow
              key={transaction.id}
              className="group hover:bg-gray-200 hover:cursor-pointer"
            >
              <TableCell>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-background border border-border flex items-center justify-center overflow-hidden">
                    <img
                      src={transaction.imageUrl}
                      alt={transaction.product}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <span className="font-medium">{transaction.product}</span>
                </div>
              </TableCell>
              <TableCell className="text-muted-foreground">
                {transaction.location}
              </TableCell>
              <TableCell className="text-muted-foreground">
                {transaction.date}
              </TableCell>
              <TableCell className="font-medium">
                {transaction.pieces}
              </TableCell>
              <TableCell className="font-medium">
                ${(transaction.amount / 100).toFixed(2)}
              </TableCell>
              <TableCell>
                <Badge
                  className={cn(
                    "w-20 rounded-full py-1 justify-center ",
                    transaction.status === "Shipped" && "bg-rose-500",
                    transaction.status === "Processing" && "bg-amber-500",
                    transaction.status === "Delivered" && "bg-emerald-500"
                  )}
                >
                  {transaction.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Deal;
