"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Company } from "@/types/companies";
import { Pencil, Trash2, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const companiesColumns = (
  onView: (company: Company) => void
): ColumnDef<Company>[] => [
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
        <img
          src={logoUrl}
          alt="Company Logo"
          className="max-w-full max-h-full object-contain rounded"
        />
      )
    },
  }, 
  {
    accessorKey: "website_url",
    header: "URL Strony",
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
    accessorKey: "opinion",
    header: "Opinia",
    cell: (info) => info.getValue(),
  },
  {
    accessorKey: "rating",
    header: "Ocena",
    cell: (info) => `${info.getValue()}/5`,
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