import React from "react";
import { DataTable } from "@/components/app-table";
import { actionsColumns } from "@/components/columns/actions_columns";
import { mockActions } from "@/mock_data/actions";


export default function ActionsPage() {
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={actionsColumns} data={mockActions} />
    </div>
  );
}
// const page = () => {
//   return <div>actions page</div>;
// };

// export default page;
