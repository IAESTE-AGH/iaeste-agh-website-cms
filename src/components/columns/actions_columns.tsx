"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Action } from "@/types/actions";
import {Pencil, Trash2, Eye} from 'lucide-react';
import { Badge } from "@/components/ui/badge";

export const actionsColumns: ColumnDef<Action>[] = [
  {
    accessorKey: "status",
    header: "Status",
    cell: (info) => {
      const status = info.getValue() as string;
      return (
        <Badge
          variant={status === "Na stronie" ? "default" : "secondary"}
          className="text-xs"
        >
          {status}
        </Badge>
      );
    },
  },
  {
    accessorKey: "name",
    header: "Nazwa",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "logo_url",
    header: "Logo",
    cell: (info) => {
      const logoUrl = info.getValue() as string;
      return (
        <div className="flex items-center justify-center w-full h-12">
        <img
          src={logoUrl}
          alt="Action Logo"
          className="h-10 max-w-[100px] max-h-full object-contain rounded"
        />
        </div>
      )
    },
  },
  {
    accessorKey: "description",
    header: "Opis",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "action_url",
    header: "URL Akcji",
    cell: (info) => {
      const url = info.getValue() as string;
      return (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800"
        >
          {url}
        </a>
      );
    },
  },
  {
    accessorKey: "coo_fullname",
    header: "Koordynator Akcji",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "coo_phone_number",
    header: "Numer Telefonu Koordynatora",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "coo_email",
    header: "Email Koordynatora",
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
    id: "actions",
    cell: ({ row }) => {
      return (
        <div className="flex gap-2 justify-center">
          <Eye
            className="h-4 w-4 cursor-pointer text-black-500"
            onClick={() => console.log(`View ${row.id}`)}
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