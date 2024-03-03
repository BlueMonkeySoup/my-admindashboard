"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { BsMicrosoft, BsGoogle, BsGithub } from "react-icons/bs";

const PageInfo = () => {
  const pathname = usePathname();
  return (
    <div className="flex justify-end">
      <div className="flex items-center justify-between w-[60%] p-10 bg-blue-400 rounded-xl shadow-lg">
        <div className="text-3xl font-bold uppercase">
          {pathname.split("/").pop()}
        </div>
        <div className="bg-blue-200 h-20 rounded-lg w-1/3 px-20 max-lg:px-4 shadow-lg">
          <div className="flex items-center justify-between space-x-4 pt-5 ">
            <Link href="/gmail.com">
              <BsGoogle className="h-8 w-8" />
            </Link>
            <Link href="/outlook.com">
              <BsMicrosoft className="h-8 w-8" />
            </Link>
            <Link href="/github.com">
              <BsGithub className="h-8 w-8" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageInfo;
