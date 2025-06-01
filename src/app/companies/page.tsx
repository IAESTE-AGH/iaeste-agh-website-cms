import React from "react";
import { DataTable } from "@/components/app-table";
import { companiesColumns } from "@/components/columns/companies_columns";
import { mockCompanies } from "@/mock_data/companies";

const page = () => {
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={companiesColumns} data={mockCompanies} />
    </div>
  );
};

export default page;
