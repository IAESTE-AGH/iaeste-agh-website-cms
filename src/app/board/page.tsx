import React from "react";
import { DataTable } from "@/components/app-table";
import { boardColumns } from "@/components/columns/board_columns";
import { BoardMember } from "@/types/board";
import { mockBoardMembers } from "@/mock_data/board";

export default function BoardPage() {
  return <div className="container mx-auto py-10">
  <DataTable columns={boardColumns} data={mockBoardMembers} />
  </div>
}

// const page = () => {
//   return <div>page</div>;
// };

// export default page;
