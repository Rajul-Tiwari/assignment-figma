"use client";

import { useState } from "react";
import AppealLetterTable from "@/components/AppealLetterTable";

export default function AppealLetterPage() {
  return (
    <div className="  w-full  mx-auto">


      <div className="flex flex-col border-b-4 border-[#78b878] w-fit md:flex-row md:items-center md:justify-between h-28 ms-6 gap-6 md:gap-0">
        <h1 className="text-xl mt-8 font-medium text-[#22314F] flex items-center gap-3 mb-2 md:mb-0">
          Appeal Letter
          <span className="bg-[#FF6B6B] text-white px-3 py-1 rounded text-sm font-semibold">05</span>
        </h1>
      
      </div>
     
      <AppealLetterTable />
    </div>
  );
}
