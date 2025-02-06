"use client";
import React from "react";
import { IoFilter } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import SearchInput from "../../common/SearchInput";

function SearchFilter() {
  return (
    <>
      <div className="flex justify-between px-20 py-20">
        <div className="flex gap-4 items-center">
          <div className="px-3 py-2 flex items-center gap-2 border border-[#D0D5DD] rounded-md">
            <IoFilter />
            <span>Filters</span>
          </div>

          <div className="bg-[#000AFF] px-3 py-2 flex items-center gap-2 rounded-md">
            <IoMdAdd color="#fff" size={18} />
            <span className="text-white">Add Blog</span>
          </div>
        </div>

        <div>
          <SearchInput />
        </div>
      </div>
    </>
  );
}

export default SearchFilter;
