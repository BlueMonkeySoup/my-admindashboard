"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import React from "react";

const Pagination = ({ count }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const page = searchParams.get("page") || 1;

  const params = new URLSearchParams(searchParams);
  const ITEM_PER_PAGE = 2;

  const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count;

  const handleChangePage = (type) => {
    type === "prev"
      ? params.set("page", parseInt(page) - 1)
      : params.set("page", parseInt(page) + 1);
    replace(`${pathname}?${params}`);
  };

  return (
    <div className="flex justify-between items-center mt-10 p-2">
      <button
        className={`px-4 py-2 text-white bg-blue-500 rounded-md ${
          !hasPrev ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
        }`}
        disabled={!hasPrev}
        onClick={() => handleChangePage("prev")}
      >
        Previous
      </button>

      <button
        className={`px-4 py-2 text-white bg-blue-500 rounded-md ${
          !hasNext ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
        }`}
        disabled={!hasNext}
        onClick={() => handleChangePage("next")}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
