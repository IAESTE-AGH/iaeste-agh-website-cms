"use client";

import React from "react";
import { DataTable } from "@/components/app-table";
import { actionsColumns } from "@/components/columns/actions_columns";
import { mockActions } from "@/mock_data/actions";
import { Action } from "@/types/actions";
import { useState } from "react";
import { DetailsDialogActions } from "@/components/carousels/DetailsDialogActions";


export default function ActionsPage() {
  const [open, setOpen] = useState(false);
  const [selectedAction, setSelectedAction] = useState<Action | null>(null);
  const handleView = (action: Action) => {
    setSelectedAction(action);
    setOpen(true);
  }

  const columns = actionsColumns(handleView);
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={mockActions} />
      {selectedAction && (
        <DetailsDialogActions
          open={open}
          onOpenChange={setOpen}
          items={[{
            image: "/screeny/akcje.png",
            page: "Dla firm",
            section: "Akcje organizowane przez IAESTE AGH",
            name: selectedAction.name,
            logo: selectedAction.logo_url,
            description: selectedAction.description,
            coo_fullname: selectedAction.coo_fullname,
            coo_phone_number: selectedAction.coo_phone_number,  
            coo_email: selectedAction.coo_email,
          },
        {
            image: "/screeny/projekty.png",
            page: "Wymiana",
            section: "Zanurz się w ciekawe projekty!",
            name: selectedAction.name,
            logo: selectedAction.logo_url,
            description: selectedAction.description,
            coo_fullname: selectedAction.coo_fullname,
            coo_phone_number: selectedAction.coo_phone_number,  
            coo_email: selectedAction.coo_email,
        },
        {
            image: "/screeny/koordynatorzy.png",
            page: "Kontakt",
            section: "Koordynatorzy akcji",
            name: selectedAction.name,
            logo: selectedAction.logo_url,
            description: selectedAction.description,
            coo_fullname: selectedAction.coo_fullname,
            coo_phone_number: selectedAction.coo_phone_number,  
            coo_email: selectedAction.coo_email,
        }]}
        />
      )}
    </div>
  );
}