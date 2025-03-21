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

const statusColors = {
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
  {
    id: "00010",
    name: "Tina Murphy",
    address: "721 Clemens Court",
    date: "12 Mar 2020",
    type: "Clothing",
    status: "Completed",
  },
  {
    id: "00011",
    name: "Paul Cooper",
    address: "4869 Metz Points",
    date: "07 Jul 2020",
    type: "Shoes",
    status: "Processing",
  },
  {
    id: "00012",
    name: "Karen Flores",
    address: "3788 Daniel Summit",
    date: "18 Oct 2020",
    type: "Furniture",
    status: "Rejected",
  },
  {
    id: "00013",
    name: "Jason Taylor",
    address: "9216 Gaylord Port",
    date: "25 Nov 2020",
    type: "Toy",
    status: "On Hold",
  },
  {
    id: "00014",
    name: "Michelle Barnes",
    address: "7896 Krajcik Land",
    date: "02 Jan 2021",
    type: "Electric",
    status: "In Transit",
  },
  {
    id: "00015",
    name: "Franklin Carter",
    address: "368 Luettgen Way",
    date: "10 Feb 2021",
    type: "Book",
    status: "Completed",
  },
  {
    id: "00016",
    name: "Brenda Dixon",
    address: "5416 Schowalter Rest",
    date: "14 Apr 2021",
    type: "Medicine",
    status: "Processing",
  },
  {
    id: "00017",
    name: "Patrick King",
    address: "8198 Aufderhar Tunnel",
    date: "29 May 2021",
    type: "Mobile",
    status: "Rejected",
  },
  {
    id: "00018",
    name: "Angela White",
    address: "4656 Fadel Crest",
    date: "05 Jul 2021",
    type: "Watch",
    status: "On Hold",
  },
  {
    id: "00019",
    name: "Steven Green",
    address: "961 Haag Drive",
    date: "12 Sep 2021",
    type: "Toy",
    status: "In Transit",
  },
  {
    id: "00020",
    name: "Jessica Hall",
    address: "3571 Runolfsdottir Hollow",
    date: "22 Oct 2021",
    type: "Shoes",
    status: "Completed",
  },
  {
    id: "00021",
    name: "Daniel Scott",
    address: "9987 Koepp Glen",
    date: "15 Dec 2021",
    type: "Clothing",
    status: "Processing",
  },
  {
    id: "00022",
    name: "Rachel Adams",
    address: "4711 Becker Harbor",
    date: "05 Jan 2022",
    type: "Furniture",
    status: "Rejected",
  },
  {
    id: "00023",
    name: "Aaron Foster",
    address: "7893 Swift Fork",
    date: "18 Mar 2022",
    type: "Book",
    status: "On Hold",
  },
  {
    id: "00024",
    name: "Lindsey Rogers",
    address: "6201 Will Lake",
    date: "09 Apr 2022",
    type: "Medicine",
    status: "In Transit",
  },
  {
    id: "00025",
    name: "Bryan Gonzalez",
    address: "185 Douglas Parkway",
    date: "21 Jun 2022",
    type: "Mobile",
    status: "Completed",
  },
  {
    id: "00026",
    name: "Emma Nelson",
    address: "3456 Schmeler Ranch",
    date: "11 Aug 2022",
    type: "Electric",
    status: "Processing",
  },
  {
    id: "00027",
    name: "Gary Barnes",
    address: "8886 Hammes Mountain",
    date: "03 Sep 2022",
    type: "Toy",
    status: "Rejected",
  },
  {
    id: "00028",
    name: "Samantha Kelly",
    address: "5544 Bartoletti Lodge",
    date: "30 Oct 2022",
    type: "Watch",
    status: "On Hold",
  },
  {
    id: "00029",
    name: "Ryan Robinson",
    address: "2325 Block Park",
    date: "15 Dec 2022",
    type: "Shoes",
    status: "In Transit",
  },
  {
    id: "00030",
    name: "Sophia Evans",
    address: "7731 Rempel Gateway",
    date: "07 Jan 2023",
    type: "Furniture",
    status: "Completed",
  },
];

export default function OrderTable() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    setOrders(orderData);
  }, []);

  // Tính toán số trang
  const totalPages = Math.ceil(orders.length / itemsPerPage);

  // Lấy danh sách đơn hàng theo trang hiện tại
  const currentOrders = orders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Xử lý chuyển trang
  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

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
            {currentOrders.map((order) => (
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
        <div className="text-sm text-gray-500">
          Showing {(currentPage - 1) * itemsPerPage + 1}-
          {Math.min(currentPage * itemsPerPage, orders.length)} of{" "}
          {orders.length}
        </div>

        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            <ChevronLeft size={16} />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            <ChevronRight size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
}
