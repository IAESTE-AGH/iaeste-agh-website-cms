"use client";
import React from "react";
import { DataTable } from "@/components/app-table";
import { companiesColumns } from "@/components/columns/companies_columns";
import { mockCompanies } from "@/mock_data/companies";
import { Company } from "@/types/companies";
import { DetailsDialogCompanies } from "@/components/carousels/DetailsDialogCompanies";
import { useState } from "react";

export default function CompaniesPage() {
  const [open, setOpen] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const handleView = (company: Company) => {
    setSelectedCompany(company);
    setOpen(true);
  }

const columns = companiesColumns(handleView);
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={mockCompanies} />
      {selectedCompany && (
        <DetailsDialogCompanies
          open={open}
          onOpenChange={setOpen}
          items={[{
            image: "/screeny/firmy.png",
            page: "Dla firm",
            section: "Co myślą o nas firmy?",
            name: selectedCompany.name,
            opinion: selectedCompany.opinion,
            logo: selectedCompany.logo_url,
            rating: selectedCompany.rating,
          },
          {
            image: "/screeny/firmy_2.png",
            page: "Wymiana",
            section: "Oni nam zaufali, teraz kolej na Ciebie!",
            name: selectedCompany.name,
            opinion: selectedCompany.opinion,
            logo: selectedCompany.logo_url,
            rating: selectedCompany.rating,
          },
    ]}
        />
      )}
    </div>
  );
}
