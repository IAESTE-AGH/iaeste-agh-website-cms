"use client";

import { ColumnDef } from "@tanstack/react-table";
import { BoardMember } from "@/types/board";
import { Pencil, Trash2, Eye } from "lucide-react";

export const boardColumns = (onView: (member: BoardMember) => void): ColumnDef<BoardMember>[] => [
  {
    accessorKey: "fullname",
    header: "Imię i Nazwisko",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "role",
    header: "Stanowisko",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: (info) => {
    const email = info.getValue() as string;
    return (
      <a
        href={`mailto:${email}`}
        className="text-blue-600 underline hover:text-blue-800"
      >
        {email}
      </a>
    );
  }
  },
  {
    accessorKey: "phone_number",
    header: "Numer Telefonu",
    cell: (info) => info.getValue(),
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2 justify-center">
          <Eye
            className="h-4 w-4 cursor-pointer text-black-500"
            onClick={() => onView(row.original)}
          />
          <Pencil
            className="h-4 w-4 cursor-pointer text-black-500"
            onClick={() => console.log(`Edit ${row.id}`)}
          />
          <Trash2
            className="h-4 w-4 cursor-pointer text-black-500"
            onClick={() => console.log(`Delete ${row.id}`)}
          />
        </div>
      )
    },
  },
];

