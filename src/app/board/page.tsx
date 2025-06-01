"use client";

import React from "react";
import { DataTable } from "@/components/app-table";
import { boardColumns } from "@/components/columns/board_columns";
import { BoardMember } from "@/types/board";
import { mockBoardMembers } from "@/mock_data/board";
import { DetailsDialogBoard } from "@/components/carousels/DetailsDialogBoard";
import { useState } from "react";

export default function BoardPage() {
  const [open, setOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<BoardMember | null>(null);
  const handleView = (member: BoardMember) => {
    setSelectedMember(member);
    setOpen(true);
  }
  const columns = boardColumns(handleView);
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={mockBoardMembers} />
      {selectedMember && (
        <DetailsDialogBoard
          open={open}
          onOpenChange={setOpen}
          items={[{
            image: "/screeny/zarzad.png",
            page: "Kontakt",
            section: "Zarząd IAESTE AGH",
            fullname: selectedMember.fullname,
            email: selectedMember.email,
            phone_number: selectedMember.phone_number,
            position: selectedMember.role,
          },
          {
            image: "/screeny/zarzad_kontakt.png",
            page: "Wymiana",
            section: "Footer",
            fullname: selectedMember.fullname, 
            email: selectedMember.email,
            phone_number: selectedMember.phone_number,
            position: selectedMember.role,   
          },]}
        />
      )}
    </div>
  );
}

// const page = () => {
//   return <div>page</div>;
// };

// export default page;
